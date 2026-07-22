# Jawad Khan — 3D Personal Portfolio Monorepo

Production-grade, visually stunning, 3D-animated personal portfolio website for **Jawad Khan** (Full Stack MERN Web Developer | Flutter Mobile App Developer).

Built with an "awwwards.com"-tier aesthetic: dark-mode default ("Midnight Aurora"), light-mode support ("Cloud Aurora"), glassmorphism UI, interactive React Three Fiber 3D scenes, Framer Motion animations, Express.js backend, and MongoDB database integration.

---

## 🌟 Tech Stack

### Frontend (`/client`)
- **Core:** React 18, Vite, React Router v6
- **Styling:** Tailwind CSS (utility-first) + `global.css` CSS variables & keyframes
- **3D Engine:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Animations:** Framer Motion (page transitions, scroll reveals, modal popups)
- **Icons & UI:** Lucide Icons (`lucide-react`), Custom Cursor, Glassmorphism design system
- **Forms & Validation:** React Hook Form + Zod
- **API Client:** Axios (with offline static fallback mode)

### Backend (`/server`)
- **Core:** Node.js, Express.js
- **Database:** MongoDB + Mongoose (Contact form storage & Project showcase models)
- **Security:** Helmet, CORS domain whitelisting, Express Rate Limit (`express-rate-limit`)
- **Email:** Nodemailer for direct email notifications on form submit
- **Validation:** Zod schema validation

---

## 📁 Repository Structure

```
Jawad-Khan-Portfolio-/
├── client/                     # Frontend Vite + React + R3F 3D App
│   ├── public/                 # Favicon & assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/             # HeroScene, FloatingGeometries, CanvasLoader
│   │   │   ├── ui/             # Navbar, Footer, ThemeToggle, Preloader, CustomCursor, ProjectModal
│   │   │   └── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   │   ├── context/            # ThemeContext (Midnight Aurora & Cloud Aurora)
│   │   ├── data/               # Jawad Khan bio, skills, training, stats & projects
│   │   ├── hooks/              # useMobile (responsive 3D canvas optimization)
│   │   ├── services/           # Axios API client
│   │   ├── styles/             # global.css (CSS variables & glassmorphism)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
├── server/                     # Backend Node.js + Express + MongoDB
│   ├── config/                 # Mongoose DB connection
│   ├── controllers/            # contactController, projectController
│   ├── models/                 # Mongoose schemas (Contact, Project)
│   ├── routes/                 # Express API router (/api/contact, /api/projects)
│   ├── middleware/             # Security & error handler
│   ├── index.js
│   └── .env.example
├── package.json                # Root monorepo workspace configuration
└── README.md
```

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- MongoDB instance (Local or MongoDB Atlas cluster)

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/jawadkhan4915-pro/Jawad-Khan-Portfolio-.git
cd Jawad-Khan-Portfolio-

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` in `/server` to `.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jawad_portfolio?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173

# Email Notifications (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=jawadkhan4915.pro@gmail.com
EMAIL_PASS=your_gmail_app_password
NOTIFICATION_EMAIL=jawadkhan4915.pro@gmail.com
```

### 3. Run Development Servers

**Run Client Dev Server:**
```bash
cd client
npm run dev
```
Open `http://localhost:5173` in your browser.

**Run Backend Express Server:**
```bash
cd server
npm run dev
```
Backend API will start at `http://localhost:5000`.

---

## 💻 Showcase Projects Built & Featured

1. **Easy POS — Automobile POS & Workshop Management System**
   - Live: [https://auto-mobile-shope-repo.vercel.app](https://auto-mobile-shope-repo.vercel.app)
2. **RestaurantOS — Enterprise Cloud Restaurant SaaS**
   - Live: [https://enterprise-ai-powered-cloud-restaur.vercel.app](https://enterprise-ai-powered-cloud-restaur.vercel.app)
3. **University LMS**
   - Live: [https://university-lms-rho.vercel.app](https://university-lms-rho.vercel.app)
4. **Hospital Management System**
   - Live: [https://hospital-managment-system-kappa.vercel.app](https://hospital-managment-system-kappa.vercel.app)
5. **E-Commerce Platform**
   - Live: [https://e-commerce-nu-one-56.vercel.app](https://e-commerce-nu-one-56.vercel.app)

---

## 🌐 Deployment Instructions

### Deploy Frontend (`/client`) to Vercel
1. Set Root Directory to `client` in Vercel settings.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Add Environment Variable: `VITE_API_URL=https://your-backend-server.render.com/api`

### Deploy Backend (`/server`) to Render / Railway
1. Set Root Directory to `server`.
2. Build Command: `npm install`
3. Start Command: `node index.js`
4. Add Environment Variables: `MONGO_URI`, `CLIENT_URL`, `EMAIL_USER`, `EMAIL_PASS`.

---

## 📜 License
MIT License. Created with ❤️ for Jawad Khan.
