import { Project } from '../models/Project.js';

const INITIAL_PROJECTS = [
  {
    id: 'nova-bank',
    title: 'NovaBank — Private Ledger & Multi-Asset Neo-Banking Suite',
    tagline: 'Institutional-Grade Multi-Asset Neo-Bank, Crypto Lending & Virtual Card Engine',
    category: 'Full Stack',
    liveUrl: 'https://nova-bank-client.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro/NovaBank',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'AES-256', 'JWT', 'RBAC'],
    highlights: [
      'Multi-currency digital asset wallets (USD, BTC, ETH, SOL, BNB, BCH) with real-time conversion and simulated on-chain confirmations.',
      'Virtual card engine with multi-tier issuance, live charging, CVV/PIN reveal security, freeze/unfreeze controls, and custom limits.',
      'Crypto-backed lending protocols with dynamic LTV margin calculations, automated interest schedules, and liquidation monitoring.',
      'Multi-portal RBAC for Account Holders, Support Agents, and Bank Managers with ledger auditing, KYC compliance, and dispute resolution.',
    ],
    featured: true,
  },
  {
    id: 'easy-pos',
    title: 'Easy POS — Automobile POS & Workshop Management System',
    tagline: 'Enterprise Auto-Shop & Workshop Management POS Engine',
    category: 'Full Stack',
    liveUrl: 'https://auto-mobile-shope-repo.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'RBAC', 'Excel Export'],
    highlights: [
      'Real-time checkout, parts-inventory tracking, mechanic service invoicing, staff attendance, and financial analytics dashboard with Excel export.',
      'Offline-first architecture utilizing React Context + localStorage sync, with MongoDB/Mongoose relational schemas and virtual populates.',
      'JWT auth with bcrypt + RBAC, MongoDB aggregation pipelines, indexed O(log N) queries, fuzzy search, and paginated responses.',
    ],
    featured: true,
  },
  {
    id: 'restaurant-os',
    title: 'RestaurantOS — Enterprise Cloud Restaurant SaaS',
    tagline: 'AI-Powered Cloud Restaurant POS & Kitchen Operating System',
    category: 'Full Stack',
    liveUrl: 'https://enterprise-ai-powered-cloud-restaur.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Socket.IO', 'Ollama / OpenRouter AI', 'MongoDB'],
    highlights: [
      'Touch-first POS, real-time Kitchen Display System (KDS), staff attendance tracking, and AI copilot (Ollama/OpenRouter) for inventory forecasting and menu analytics.',
      'MVC + Repository architecture, Redux Toolkit state management, Socket.IO real-time order sync, and JWT refresh-token rotation.',
      'NoSQL-injection-safe validation, Helmet/CORS security, rate limiting, queue-based order sequencing, and O(1) hash-map role lookups.',
    ],
    featured: true,
  },
  {
    id: 'university-lms',
    title: 'University LMS',
    tagline: 'Comprehensive Learning Management & Student Portal System',
    category: 'Full Stack',
    liveUrl: 'https://university-lms-rho.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    highlights: [
      'Course enrollment, student assignment submission, grading portal, and faculty dashboard.',
      'Role-based access control (Student, Instructor, Admin) with secure session handling.',
      'Real-time course announcements and downloadable lecture material management.',
    ],
    featured: false,
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    tagline: 'Clinical Workflow, Patient Records & Appointment Scheduler',
    category: 'Full Stack',
    liveUrl: 'https://hospital-managment-system-seven.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    highlights: [
      'Patient electronic medical records (EMR), doctor appointment scheduling, and billing management.',
      'Departmental role management (Doctor, Receptionist, Admin) with secure patient data access.',
      'Interactive dashboard for bed availability, prescription logs, and lab report tracking.',
    ],
    featured: false,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    tagline: 'Full-Featured Online Shopping & Cart Checkout System',
    category: 'Full Stack',
    liveUrl: 'https://e-commerce-nu-one-56.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    highlights: [
      'Product catalog filtering, cart management, checkout flow, and order tracking.',
      'User authentication, profile management, and order history view.',
      'Responsive touch-optimized UI with modern animated card interactions.',
    ],
    featured: false,
  },
];

export const getProjects = async (req, res) => {
  try {
    let projects = [];
    try {
      projects = await Project.find().sort({ createdAt: -1 });
    } catch (err) {
      // Fallback if DB not connected
    }

    if (!projects || projects.length === 0) {
      return res.status(200).json({
        success: true,
        count: INITIAL_PROJECTS.length,
        data: INITIAL_PROJECTS,
      });
    }

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
