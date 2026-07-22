export const PERSONAL_INFO = {
  name: 'Jawad Khan',
  title: 'Full Stack MERN Web Developer | Flutter Mobile App Developer',
  location: 'Rahim Yar Khan, Pakistan',
  github: 'https://github.com/jawadkhan4915-pro',
  email: 'jawadkhan4915.pro@gmail.com',
  bio: 'Motivated full stack developer with hands-on experience building web and mobile apps using the MERN stack and Flutter. Strong foundation in frontend/backend development, authentication systems (JWT, bcrypt, RBAC), and database-driven applications.',
  education: [
    {
      degree: 'Bachelor of Software Engineering (In Progress)',
      institution: 'Khawaja Fareed University of Engineering & Information Technology (KFUEIT)',
      location: 'Rahim Yar Khan, Pakistan',
      period: 'Present',
    },
  ],
  training: [
    {
      title: 'Web Development (MERN Stack)',
      institute: 'IT Center',
      location: 'Rahim Yar Khan',
      year: '2025',
    },
    {
      title: 'Mobile App Development (Flutter + Dart)',
      institute: 'Smart Start IT Institute',
      location: 'Khanpur',
      year: '2024',
    },
  ],
  stats: [
    { label: 'Production Projects', value: 5, suffix: '+' },
    { label: 'MERN & Flutter Skills', value: 12, suffix: '+' },
    { label: 'Backend Architecture', value: 100, suffix: '%' },
    { label: 'Code Quality & Security', value: 99, suffix: '%' },
  ],
};

export const SKILLS = [
  {
    category: 'Web Development',
    icon: 'Globe',
    items: [
      { name: 'MongoDB', level: 'Advanced', icon: 'Database' },
      { name: 'Express.js', level: 'Advanced', icon: 'Server' },
      { name: 'React.js', level: 'Expert', icon: 'Code' },
      { name: 'Node.js', level: 'Advanced', icon: 'Cpu' },
    ],
  },
  {
    category: 'Mobile Development',
    icon: 'Smartphone',
    items: [
      { name: 'Flutter', level: 'Advanced', icon: 'Layers' },
      { name: 'Dart', level: 'Advanced', icon: 'Terminal' },
    ],
  },
  {
    category: 'Languages & Styling',
    icon: 'Code2',
    items: [
      { name: 'JavaScript (ES6+)', level: 'Expert', icon: 'FileCode' },
      { name: 'Dart', level: 'Advanced', icon: 'Terminal' },
      { name: 'HTML5 & CSS3', level: 'Expert', icon: 'Layout' },
      { name: 'Tailwind CSS', level: 'Expert', icon: 'Palette' },
    ],
  },
  {
    category: 'Architecture & Tools',
    icon: 'Wrench',
    items: [
      { name: 'REST APIs', level: 'Expert', icon: 'Network' },
      { name: 'Auth (JWT, RBAC, Bcrypt)', level: 'Expert', icon: 'ShieldCheck' },
      { name: 'Git & GitHub', level: 'Advanced', icon: 'GitBranch' },
      { name: 'Responsive Design', level: 'Expert', icon: 'Monitor' },
      { name: 'Socket.IO', level: 'Intermediate', icon: 'Zap' },
      { name: 'Redux Toolkit', level: 'Advanced', icon: 'Box' },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'easy-pos',
    title: 'Easy POS — Automobile POS & Workshop Management System',
    tagline: 'Enterprise Auto-Shop & Workshop Management POS Engine',
    category: 'Full Stack',
    liveUrl: 'https://auto-mobile-shope-repo.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'RBAC', 'Excel Export', 'Mongoose'],
    highlights: [
      'Real-time checkout, parts-inventory tracking, mechanic service invoicing, staff attendance, financial analytics dashboard with Excel export.',
      'Offline-first architecture (React Context + localStorage sync), MongoDB/Mongoose relational schemas with virtual populates.',
      'JWT auth with bcrypt + RBAC, MongoDB aggregation pipelines, indexed O(log N) queries, fuzzy search, pagination.',
    ],
    featured: true,
    accent: 'var(--accent-1)',
  },
  {
    id: 'restaurant-os',
    title: 'RestaurantOS — Enterprise Cloud Restaurant SaaS',
    tagline: 'AI-Powered Cloud Restaurant POS & Kitchen Operating System',
    category: 'Full Stack',
    liveUrl: 'https://enterprise-ai-powered-cloud-restaur.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Socket.IO', 'Ollama/OpenRouter AI', 'MongoDB', 'Helmet/CORS'],
    highlights: [
      'Touch-first POS, real-time Kitchen Display System, staff attendance tracking, AI copilot (Ollama/OpenRouter) for inventory forecasting and menu analytics.',
      'MVC + Repository architecture, Redux Toolkit, Socket.IO real-time sync, JWT refresh-token rotation.',
      'NoSQL-injection-safe validation, Helmet/CORS/rate limiting, queue-based order sequencing, O(1) hash-map role lookups.',
    ],
    featured: true,
    accent: 'var(--accent-3)',
  },
  {
    id: 'university-lms',
    title: 'University LMS',
    tagline: 'Comprehensive Learning Management & Student Portal System',
    category: 'Full Stack',
    liveUrl: 'https://university-lms-rho.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    highlights: [
      'Course enrollment, student assignment submission, grading portal, and faculty management dashboard.',
      'Role-based access control (Student, Instructor, Admin) with secure session handling.',
      'Real-time course announcements and downloadable lecture material management.',
    ],
    featured: false,
    accent: 'var(--accent-2)',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    tagline: 'Clinical Workflow, Patient Records & Appointment Scheduler',
    category: 'Full Stack',
    liveUrl: 'https://hospital-managment-system-kappa.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    highlights: [
      'Patient electronic medical records (EMR), doctor appointment scheduling, and billing management.',
      'Departmental role management (Doctor, Receptionist, Admin) with secure patient data access.',
      'Interactive dashboard for bed availability, prescription logs, and lab report tracking.',
    ],
    featured: false,
    accent: 'var(--accent-1)',
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
    accent: 'var(--accent-2)',
  },
];
