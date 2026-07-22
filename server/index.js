import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

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
app.use(express.static(clientDistPath));

// Fallback for React SPA client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`\n🚀 Jawad Khan Portfolio App running on SINGLE PORT: http://localhost:${PORT}`);
  console.log(`🌐 Frontend Web App & 3D Engine: http://localhost:${PORT}`);
  console.log(`⚡ Backend REST APIs: http://localhost:${PORT}/api/health\n`);
});
