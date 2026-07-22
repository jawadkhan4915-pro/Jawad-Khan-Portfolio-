# Jawad Khan — 3D Personal Portfolio (Single-Port Monorepo)

Production-grade, visually stunning, 3D-animated personal portfolio website for **Jawad Khan** (Full Stack MERN Web Developer | Flutter Mobile App Developer).

Both the **React 3D Web Application** and the **Express REST API** run on the **SAME SINGLE PORT (`http://localhost:5000`)**.

---

## 🌟 Single-Port Architecture

- **Unified Server URL:** `http://localhost:5000`
- **Frontend App & 3D Canvas:** `http://localhost:5000/`
- **Health Check API:** `http://localhost:5000/api/health`
- **Contact API (`POST`):** `http://localhost:5000/api/contact`
- **Projects API (`GET`):** `http://localhost:5000/api/projects`

---

## 🚀 Quick Start (One Command)

To start both the Frontend Web App and Backend REST APIs together on the same port:

```bash
# Simply run from root directory:
npm run dev
```

Or:
```bash
npm start
```

Both commands will start the application at **`http://localhost:5000`**.

---

## 📁 Repository Structure

```
Jawad-Khan-Portfolio-/
├── client/                     # Frontend Vite + React + R3F 3D App
│   ├── src/
│   │   ├── components/         # 3D Hero Canvas, Glass cards, Navigation, Sections
│   │   ├── context/            # Theme Engine (Midnight Aurora & Cloud Aurora)
│   │   ├── data/               # Jawad Khan bio, skills, training, stats & projects
│   │   ├── services/           # Axios API client (relative /api endpoints)
│   │   └── styles/             # global.css (CSS variables & glassmorphism)
│   └── index.html
├── server/                     # Backend Node.js + Express + MongoDB
│   ├── config/                 # Mongoose DB connection
│   ├── controllers/            # contactController, projectController
│   ├── models/                 # Mongoose schemas (Contact, Project)
│   ├── routes/                 # Express API router (/api/contact, /api/projects)
│   └── index.js                # Unified Single-Port Express Entrypoint
├── package.json                # Root monorepo configuration with unified "npm run dev"
└── README.md
```
