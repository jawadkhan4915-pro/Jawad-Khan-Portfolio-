import easyPosThumb from '../assets/easy-pos-thumb.png';
import restaurantOsThumb from '../assets/restaurant-os-thumb.png';
import universityLmsThumb from '../assets/university-lms-thumb.png';
import hospitalManagementThumb from '../assets/hospital-management-thumb.png';
import ecommercePlatformThumb from '../assets/ecommerce-platform-thumb.png';

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
    image: easyPosThumb,
    description:
      'A fully featured enterprise-grade Point of Sale and Workshop Management System built for automobile repair shops. The system handles real-time parts inventory, mechanic service invoicing, customer records, staff attendance, and financial analytics — all from a unified admin dashboard.',
    category: 'Full Stack',
    liveUrl: 'https://auto-mobile-shope-repo.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro/AutoMobile_shope_repo',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'RBAC', 'Mongoose', 'Excel Export', 'bcrypt', 'React Context API'],
    highlights: [
      'Real-time checkout, parts-inventory tracking, mechanic service invoicing, staff attendance, financial analytics dashboard with Excel export.',
      'Offline-first architecture (React Context + localStorage sync), MongoDB/Mongoose relational schemas with virtual populates.',
      'JWT auth with bcrypt + RBAC, MongoDB aggregation pipelines, indexed O(log N) queries, fuzzy search, pagination.',
    ],
    // Deep technical breakdown
    oopStrategy: [
      'MVC (Model-View-Controller) separation — Express routes → controllers → Mongoose models',
      'Service Layer Pattern: business logic encapsulated in service classes, keeping controllers thin',
      'Encapsulation via Mongoose schema methods and virtuals (e.g. computed invoice totals)',
      'Inheritance through shared BaseSchema with timestamps and soft-delete flag',
    ],
    dataHandling: [
      'MongoDB Aggregation Pipelines for financial summaries — $group, $lookup, $project stages',
      'Mongoose virtual populate for relational joins (Customer ↔ Vehicle ↔ ServiceRecord)',
      'React Context API + useReducer for client-side state management (cart, session, POS flow)',
      'localStorage sync for offline-first resilience — auto-re-syncs when connectivity resumes',
      'Excel export via SheetJS (XLSX) — raw data → formatted workbook with styled headers',
    ],
    algorithms: [
      'O(log N) indexed MongoDB queries on parts SKU and customer ID fields',
      'Fuzzy-search with regex-based pattern matching for parts and customer lookup',
      'FIFO queue-based service ticket sequencing (mechanic job prioritization)',
      'Pagination with cursor-based strategy for large inventory lists',
    ],
    security: [
      'JWT access tokens (15 min expiry) + HTTP-only cookie storage to prevent XSS',
      'bcrypt password hashing (saltRounds=12) for credential storage',
      'Role-Based Access Control (RBAC): Admin, Manager, Cashier, Mechanic roles with route-level middleware guards',
      'Mongoose schema-level validation to prevent malformed/injected data persistence',
      'CORS policy restricted to whitelisted frontend origins',
      'Express rate-limiting on auth endpoints (max 10 req/15 min per IP)',
    ],
    featured: true,
    accent: 'var(--accent-1)',
  },
  {
    id: 'restaurant-os',
    title: 'RestaurantOS — Enterprise Cloud Restaurant SaaS',
    tagline: 'AI-Powered Cloud Restaurant POS & Kitchen Operating System',
    image: restaurantOsThumb,
    description:
      'RestaurantOS is a full enterprise-grade cloud SaaS for restaurant chains. It features a touch-first POS terminal, real-time Kitchen Display System (KDS), AI-powered inventory forecasting via Ollama/OpenRouter LLM integration, multi-branch support, CRM, employee scheduling, and an analytics dashboard — all synchronized via WebSockets.',
    category: 'Full Stack',
    liveUrl: 'https://enterprise-ai-powered-cloud-restaur.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro/Enterprise-AI-Powered-Cloud-Restaurant-Management-System',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Socket.IO', 'Ollama/OpenRouter AI', 'MongoDB', 'Express', 'Helmet', 'CORS', 'JWT', 'bcrypt'],
    highlights: [
      'Touch-first POS, real-time Kitchen Display System, AI copilot (Ollama/OpenRouter) for inventory forecasting and menu analytics.',
      'MVC + Repository architecture, Redux Toolkit, Socket.IO real-time sync, JWT refresh-token rotation.',
      'NoSQL-injection-safe validation, Helmet/CORS/rate-limiting, queue-based order sequencing, O(1) hash-map role lookups.',
    ],
    oopStrategy: [
      'Repository Pattern: data-access logic fully abstracted behind repository interfaces — controllers never call mongoose directly',
      'Service Layer: AI integration, order workflow, and inventory logic each in isolated service modules',
      'Observer Pattern via Socket.IO: Kitchen Display System reacts to order-state events emitted by POS',
      'Facade Pattern: unified OrderService.createOrder() encapsulates POS validation, inventory deduction, KDS emit, and DB write',
      'Singleton pattern for DB connection and Socket.IO server instance',
    ],
    dataHandling: [
      'Redux Toolkit with RTK Query for client-side API caching, optimistic updates, and normalized entity state',
      'MongoDB aggregation for daily revenue reports — $facet for multi-metric queries in a single roundtrip',
      'Socket.IO rooms for per-branch data isolation in multi-branch deployments',
      'AI context injection: recent sales trends + inventory levels passed as prompt context to Ollama LLM',
      'Transaction-like write sequences using Mongoose sessions for atomic order creation',
    ],
    algorithms: [
      'O(1) hash-map role-permission lookup table for instant RBAC enforcement at controller level',
      'Queue-based order sequencing: orders enter a FIFO priority queue per station in the KDS',
      'LRU-like menu caching: frequently ordered items cached in memory to reduce DB reads',
      'Sliding-window rate limiter on AI API calls to manage third-party quota costs',
    ],
    security: [
      'JWT with refresh-token rotation — access token (15 min), refresh token (7 days, rotated on use)',
      'Helmet.js sets 14+ HTTP security headers (CSP, HSTS, X-Frame-Options, etc.)',
      'NoSQL injection prevention: Mongoose schema typing rejects $where/$gt object injection',
      'Express-rate-limit: 100 req/15 min per IP on API routes; 5 req/min on AI endpoints',
      'CORS whitelist: only registered frontend domains accepted',
      'bcrypt (saltRounds=12) for all user passwords; no plaintext ever stored',
      'Sensitive env vars (JWT_SECRET, AI_API_KEY) via dotenv, never committed to repo',
    ],
    featured: true,
    accent: 'var(--accent-3)',
  },
  {
    id: 'university-lms',
    title: 'University LMS',
    tagline: 'Comprehensive Learning Management & Student Portal System',
    image: universityLmsThumb,
    description:
      'A full-featured Learning Management System for universities covering course enrollment, assignment submission, faculty grading, and admin management. Designed for real multi-role usage with three distinct dashboards: Student, Instructor, and Admin — each with scoped data access.',
    category: 'Full Stack',
    liveUrl: 'https://university-lms-rho.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro/SE_LMS',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Mongoose', 'REST APIs'],
    highlights: [
      'Course enrollment, student assignment submission, grading portal, and faculty management dashboard.',
      'Role-based access control (Student, Instructor, Admin) with secure session handling.',
      'Real-time course announcements and downloadable lecture material management.',
    ],
    oopStrategy: [
      'MVC architecture: route → controller → service → Mongoose model layering',
      'Polymorphic user model — single User schema with discriminatorKey "role" for Student/Instructor/Admin',
      'Strategy Pattern: GradingStrategy interface with different implementations (percentage, letter-grade, pass-fail)',
      'Decorator Pattern: middleware chain decorates requests with auth context, role verification, and input sanitization',
    ],
    dataHandling: [
      'Mongoose population chains: Course → enrolled Students → submitted Assignments → Grades in one query',
      'React state managed with useContext + useReducer for enrollment state and course selection',
      'File upload via Multer middleware — lecture PDFs and assignment submissions stored with UUID-named paths',
      'Paginated API responses for large course lists and student rosters',
    ],
    algorithms: [
      'GPA calculation using weighted average across credit-hour-scaled grade points',
      'Binary search on sorted course ID list for O(log N) enrollment lookup',
      'Topological sort for course prerequisite dependency resolution',
      'Deadline-aware sorting for assignment feed (ascending due-date ordering)',
    ],
    security: [
      'JWT-based session auth with role-encoded payload — scope checked on every protected route',
      'Route-level RBAC middleware: students cannot access instructor grading endpoints',
      'Multer file-type validation: only .pdf, .docx, .png extensions accepted for uploads',
      'MongoDB injection prevention via Mongoose strict schema mode',
      'Password hashing with bcrypt (saltRounds=10)',
    ],
    featured: false,
    accent: 'var(--accent-2)',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    tagline: 'Clinical Workflow, Patient Records & Appointment Scheduler',
    image: hospitalManagementThumb,
    description:
      'A digital hospital management platform handling the complete clinical workflow — from patient registration and EMR (Electronic Medical Records) to doctor appointment scheduling, prescription logging, lab report management, and billing. Multi-department role access with strict data privacy controls.',
    category: 'Full Stack',
    liveUrl: 'https://hospital-managment-system-kappa.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro/Hospital_Managment_System',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'bcrypt', 'Mongoose', 'Tailwind CSS'],
    highlights: [
      'Patient electronic medical records (EMR), doctor appointment scheduling, and billing management.',
      'Departmental role management (Doctor, Receptionist, Admin) with secure patient data access.',
      'Interactive dashboard for bed availability, prescription logs, and lab report tracking.',
    ],
    oopStrategy: [
      'Domain-Driven Design (DDD) approach: Patient, Appointment, Prescription as separate aggregate roots',
      'Factory Pattern: PatientFactory.create() validates and constructs patient record with default values',
      'Repository Pattern for each domain entity — isolated data-access, easy unit testing',
      'Chain of Responsibility: appointment booking passes through availability check → conflict detection → confirmation chain',
    ],
    dataHandling: [
      'EMR stored as embedded documents inside Patient schema — medical history always co-located with patient record',
      'Appointment conflict detection using MongoDB range queries ($gte/$lte on time slots)',
      'Aggregation pipeline for bed occupancy dashboard — $group by ward, $count available/occupied',
      'Prescription linked to both Patient and Doctor via ObjectId references with dual-direction population',
    ],
    algorithms: [
      'Interval scheduling for appointment conflict detection — overlap check: start1 < end2 && start2 < end1',
      'Priority queue for emergency patient routing (severity-score based ordering)',
      'Hash-based bed ID indexing for O(1) availability lookup',
      'Date-range search with compound MongoDB index on (doctorId, appointmentDate) for fast scheduling queries',
    ],
    security: [
      'Patient data access scoped strictly to treating doctor and admin — no cross-patient data leakage',
      'JWT with department-role payload — Receptionist cannot view lab reports; Doctor cannot edit billing',
      'All patient EMR fields encrypted at the application layer before storage',
      'Audit log for every record access and modification (who, when, what changed)',
      'bcrypt password hashing + session invalidation on logout (JWT blocklist)',
    ],
    featured: false,
    accent: 'var(--accent-1)',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    tagline: 'Full-Featured Online Shopping & Cart Checkout System',
    image: ecommercePlatformThumb,
    description:
      'A complete e-commerce web application with product catalog browsing, category filtering, cart management, checkout flow, and order history. Includes a full authentication system with user profile management, and an admin panel for product CRUD operations and order processing.',
    category: 'Full Stack',
    liveUrl: 'https://e-commerce-nu-one-56.vercel.app',
    githubUrl: 'https://github.com/jawadkhan4915-pro/E-commerce_repo',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'JWT', 'bcrypt', 'Mongoose', 'Tailwind CSS'],
    highlights: [
      'Product catalog filtering, cart management, checkout flow, and order tracking.',
      'User authentication, profile management, and order history view.',
      'Responsive touch-optimized UI with modern animated card interactions.',
    ],
    oopStrategy: [
      'MVC architecture with clear separation: routes, controllers, services, models',
      'Redux Toolkit slices as encapsulated state machines — cartSlice, authSlice, productSlice each own their state + reducers',
      'Singleton Cart Service: single cart instance per session with addItem, removeItem, applyDiscount methods',
      'Composite Pattern: Order model composed of LineItems, ShippingAddress, and PaymentSummary sub-documents',
    ],
    dataHandling: [
      'Redux Toolkit with createAsyncThunk for all API calls — auto-manages loading/error/success states',
      'MongoDB text index on product name + description for full-text search capability',
      'Category filtering via query params → dynamic MongoDB $in operator on category array',
      'Order history pagination with cursor-based approach — last order _id as the cursor for next-page fetch',
    ],
    algorithms: [
      'Price-range filter using binary search on sorted price index for O(log N) bounds lookup',
      'Relevance scoring for search results — matched fields weighted (title > description > tags)',
      'Greedy cart discount application — highest-value discounts applied first',
      'Merge-sort based product listing by rating and price for consistent, reproducible ordering',
    ],
    security: [
      'JWT access tokens stored in memory (not localStorage) to prevent XSS token theft',
      'bcrypt hashed passwords — no plaintext ever persisted',
      'Admin-only routes protected by role middleware — regular users cannot access product CRUD or order management',
      'Input sanitization via express-validator on all POST/PUT routes',
      'CORS configured for specific frontend origin only',
      'HTTP-only cookies for refresh token storage',
    ],
    featured: false,
    accent: 'var(--accent-2)',
  },
];
