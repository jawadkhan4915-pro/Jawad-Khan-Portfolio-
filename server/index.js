import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
let PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Security Middlewares (configured to allow inline 3D scripts & assets)
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:5000',
  'http://localhost:5001',
  'http://localhost:3000',
  'https://jawadkhan-portfolio.vercel.app',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting for Contact API
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: 'Too many contact requests from this IP. Please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Jawad Khan Portfolio Unified Single-Port API & Web App',
  });
});

// API Routes
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/projects', projectRoutes);

// --- UNIFIED SINGLE-PORT STATIC FRONTEND SERVING ---
const clientDistPath = path.resolve(__dirname, '../client/dist');
const clientIndexPath = path.join(clientDistPath, 'index.html');

// Serve compiled React build assets
app.use(express.static(clientDistPath, { index: false }));

// SPA fallback — serve index.html for all non-API routes
app.get('*', (req, res) => {
  if (fs.existsSync(clientIndexPath)) {
    // Inline error callback — never bubble to errorHandler
    res.sendFile(clientIndexPath, (err) => {
      if (err && !res.headersSent) {
        res.status(200).send(`
          <!DOCTYPE html>
          <html lang="en">
            <head><meta charset="UTF-8"><title>Jawad Portfolio</title></head>
            <body style="font-family:system-ui,sans-serif;background:#0b0f1a;color:#f5f7fa;text-align:center;padding:4rem 2rem;">
              <h1 style="color:#00d4ff;">🚀 Backend API Server Active</h1>
              <p style="color:#a0aac0;margin-top:1rem;">Open <a href="http://localhost:5173" style="color:#6c63ff;font-weight:600;">http://localhost:5173</a> for the Vite dev frontend.</p>
              <p style="color:#a0aac0;margin-top:.5rem;">Or run <code>npm run build</code> then restart this server to serve the frontend here.</p>
            </body>
          </html>
        `);
      }
    });
  } else {
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
        <head><meta charset="UTF-8"><title>Jawad Portfolio</title></head>
        <body style="font-family:system-ui,sans-serif;background:#0b0f1a;color:#f5f7fa;text-align:center;padding:4rem 2rem;">
          <h1 style="color:#00d4ff;">🚀 Backend API Server Active</h1>
          <p style="color:#a0aac0;margin-top:1rem;">Frontend build not found. Open <a href="http://localhost:5173" style="color:#6c63ff;font-weight:600;">http://localhost:5173</a> for Vite dev server.</p>
          <p style="color:#a0aac0;margin-top:.5rem;">To serve frontend on this port, run <code>npm run build</code> first.</p>
        </body>
      </html>
    `);
  }
});

// Error Handler
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`\n🚀 Jawad Khan Portfolio App running on SINGLE PORT: http://localhost:${PORT}`);
  console.log(`🌐 Frontend Web App & 3D Engine: http://localhost:${PORT}`);
  console.log(`⚡ Backend REST APIs: http://localhost:${PORT}/api/health\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const fallbackPort = Number(PORT) + 1;
    console.log(`\n⚠️ Port ${PORT} is busy. Automatically switching to fallback port: http://localhost:${fallbackPort}`);
    app.listen(fallbackPort, () => {
      console.log(`🚀 Server active on: http://localhost:${fallbackPort}\n`);
    });
  } else {
    console.error('Server error:', err);
  }
});
