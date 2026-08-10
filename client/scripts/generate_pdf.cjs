const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({
  size: 'A4',
  margin: 0
});

const outputPath = path.join(__dirname, '../public/Jawad_Khan_CV.pdf');
const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Page Dimensions
const pageWidth = 595.28;
const pageHeight = 841.89;

// Colors matching the original CV PDF
const PRIMARY_BLUE = '#2b4c7e';
const HEADER_BG = '#d5e4ed';
const TEXT_DARK = '#222222';
const TEXT_MUTED = '#444444';
const ACCENT_BLUE = '#3a6b9f';

// Top Banner Header Background
doc.rect(0, 0, pageWidth, 155).fill(HEADER_BG);

// Header Content
doc.fillColor(PRIMARY_BLUE)
   .font('Helvetica-Bold')
   .fontSize(32)
   .text('Jawad Khan', 40, 25);

doc.font('Helvetica')
   .fontSize(16)
   .text('Full Stack MERN Web Developer |', 40, 64, { continued: true })
   .text(' Flutter Mobile App Developer', { continued: false });

// Contact Info Grid
doc.fontSize(10).fillColor(TEXT_MUTED);

doc.text('📍 Rahim Yar Khan, Pakistan', 40, 95);
doc.text('📞 Phone: 0304-4707155', 40, 110);
doc.text('✉️ Email: jawad.khan4915@gmail.com', 40, 125);

doc.text('🌐 GitHub: https://github.com/jawadkhan4915-pro', 240, 95);
doc.text('💻 Portfolio: https://jawad-khan-portfolio-rho.vercel.app', 240, 110);

// Divider line under header
doc.moveTo(40, 155).lineTo(pageWidth - 40, 155).strokeColor('#b0c8d8').lineWidth(1.5).stroke();

// Columns Setup
const leftColX = 40;
const leftColWidth = 320;
const rightColX = 380;
const rightColWidth = 175;

let leftY = 175;
let rightY = 175;

// === LEFT COLUMN ===

// Section: Experience Overview
doc.font('Helvetica-Bold').fontSize(14).fillColor(PRIMARY_BLUE).text('Experience overview', leftColX, leftY);
leftY += 20;

doc.font('Helvetica').fontSize(9.5).fillColor(TEXT_DARK).text(
  'Motivated beginner-level Full Stack Developer with hands-on experience in building web and mobile applications using the MERN stack and Flutter. Strong foundation in frontend and backend development, authentication systems, and database-driven applications. Passionate about learning, writing clean code, and delivering user-friendly digital solutions.',
  leftColX,
  leftY,
  { width: leftColWidth, align: 'left', lineGap: 2 }
);
leftY += 65;

// Section: Projects
doc.font('Helvetica-Bold').fontSize(14).fillColor(PRIMARY_BLUE).text('Projects', leftColX, leftY);
leftY += 22;

// Project 1: Easy POS
doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT_DARK).text(
  'Automobile POS & Workshop Management System (Easy POS)',
  leftColX,
  leftY,
  { width: leftColWidth }
);
leftY += 24;

const p1Bullets = [
  'Built a POS and workshop management platform for automobile service centers with real-time checkout, parts-inventory tracking, mechanic service invoicing, staff attendance, and a financial analytics dashboard with Excel export.',
  'Designed offline-first architecture using React Context + localStorage sync, MongoDB/Mongoose relational schemas with virtual populates, and Axios interceptors for auth token handling and auto-redirects.',
  'Implemented JWT auth with bcrypt password hashing, RBAC middleware, and CORS/input validation to secure sensitive endpoints (financials, admin operations).',
  'Applied core CS concepts — MongoDB aggregation pipelines for revenue analytics, indexed queries (O(log N) lookups), fuzzy search, and pagination for large datasets.'
];

p1Bullets.forEach(bullet => {
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_DARK)
     .text('•  ', leftColX + 5, leftY, { continued: true, width: leftColWidth - 5 })
     .text(bullet, { width: leftColWidth - 15, align: 'left', lineGap: 1.5 });
  leftY = doc.y + 6;
});

leftY += 6;

// Project 2: RestaurantOS
doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT_DARK).text(
  'Enterprise Cloud Restaurant OS (RestaurantOS)',
  leftColX,
  leftY,
  { width: leftColWidth }
);
leftY += 24;

const p2Bullets = [
  'Built an enterprise SaaS restaurant platform with touch-first POS, real-time Kitchen Display System, staff attendance tracking, and an AI copilot (Ollama/OpenRouter) for inventory forecasting and menu analytics.',
  'Architected backend using MVC + Repository patterns; used Redux Toolkit for state management and Socket.IO for real-time order sync across cashier, kitchen, and customer views.',
  'Implemented JWT auth with refresh-token rotation, RBAC middleware, and NoSQL-injection-safe data validation; hardened APIs with Helmet, CORS, and rate limiting.',
  'Applied core CS fundamentals — queue-based order sequencing, hash-map role lookups (O(1)), and optimized pagination/search for large datasets.'
];

p2Bullets.forEach(bullet => {
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_DARK)
     .text('•  ', leftColX + 5, leftY, { continued: true, width: leftColWidth - 5 })
     .text(bullet, { width: leftColWidth - 15, align: 'left', lineGap: 1.5 });
  leftY = doc.y + 6;
});


// === RIGHT COLUMN ===

// Section: Technical Skills
doc.font('Helvetica-Bold').fontSize(14).fillColor(PRIMARY_BLUE).text('Technical Skills', rightColX, rightY);
rightY += 22;

const skills = [
  { label: 'Web Development:', value: 'MongoDB, Express.js, React.js, Node.js' },
  { label: 'Mobile App Development:', value: 'Flutter, Dart, Dockers' },
  { label: 'Languages:', value: 'JavaScript, Dart, HTML, CSS, Tailwind CSS, TypeScript' },
  { label: 'Databases:', value: 'MongoDB' },
  { label: 'Other Skills:', value: 'REST APIs, Authentication & Authorization, Git/GitHub, Responsive Design, Postman' }
];

skills.forEach(skill => {
  doc.font('Helvetica').fontSize(9).fillColor(TEXT_DARK)
     .text('•  ', rightColX, rightY, { continued: true })
     .font('Helvetica-Bold').text(skill.label + ' ', { continued: true })
     .font('Helvetica').text(skill.value, { width: rightColWidth - 10, lineGap: 2 });
  rightY = doc.y + 6;
});

rightY += 10;

// Section: Professional Training
doc.font('Helvetica-Bold').fontSize(13).fillColor(PRIMARY_BLUE).text('Professional Training', rightColX, rightY);
rightY += 20;

const training = [
  { title: 'Mobile App Development (Flutter+Dart)', inst: 'Smart Start IT Institute, Khanpur (2024)' },
  { title: 'Web Development (MERN Stack)', inst: 'IT Center, Rahim Yar Khan (2025)' }
];

training.forEach(t => {
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_DARK)
     .text('•  ', rightColX, rightY, { continued: true })
     .font('Helvetica-Bold').text(t.title, { width: rightColWidth - 10 });
  rightY = doc.y + 1;
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_MUTED)
     .text(t.inst, rightColX + 12, rightY, { width: rightColWidth - 12 });
  rightY = doc.y + 6;
});

rightY += 10;

// Section: Education
doc.font('Helvetica-Bold').fontSize(13).fillColor(PRIMARY_BLUE).text('Education', rightColX, rightY);
rightY += 20;

const eduList = [
  { degree: 'Bachelor of Software Engineering (In Progress)', inst: 'Khawaja Fareed University of Engineering & Information Technology (KFUEIT), Rahim Yar Khan' },
  { degree: 'Intermediate (ICS)', inst: 'KIPS College, Rahim Yar Khan' },
  { degree: 'Matriculation (Computer Science)', inst: 'Central Public School, Khanpur' }
];

eduList.forEach(e => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY_BLUE).text(e.degree, rightColX, rightY, { width: rightColWidth });
  rightY = doc.y + 2;
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_MUTED).text('Institution: ' + e.inst, rightColX, rightY, { width: rightColWidth, lineGap: 1.5 });
  rightY = doc.y + 8;
});

doc.end();
console.log('PDF generated successfully at:', outputPath);
