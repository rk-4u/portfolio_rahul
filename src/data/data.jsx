// Content comes from the updated resume (CipheR_cv7.pdf), the old portfolio's links and the NexGenPR project.
export const profile = {
  name: 'Rahul Choudhary', role: 'Full-Stack Web Developer, MERN stack', location: 'Indore, India',
  email: 'rahul4rk@hotmail.com', phone: '+91 7869867379', site: 'rahul4u.vercel.app', resume: '/Rahul-Choudhary-Resume.pdf',
  summary: 'Full-Stack Web Developer and MCA student with practical experience across the MERN stack, JavaScript, REST APIs, MongoDB and real-time application development.',
  statement: 'I have built and contributed to e-commerce, communication, education, placement and service-oriented applications through internships, freelancing and independent projects.',
  foundation: 'Strong foundation in Java, C++, Python, SQL, Data Structures & Algorithms and core computer science.',
};
export const nav = [['About', 'about'], ['Skills', 'skills'], ['Work', 'work'], ['Experience', 'experience'], ['Contact', 'contact']];
export const skills = [
  ['Languages', 'JavaScript (ES6+), Java, C++, Python, SQL, HTML5, CSS3'],
  ['Frontend', 'React.js, React Router, Tailwind CSS, Bootstrap, Three.js, Responsive UI, Component-Based Development'],
  ['Backend', 'Node.js, Express.js, RESTful APIs, Socket.IO, JWT, bcrypt, Authentication'],
  ['Databases', 'MongoDB, MySQL, Database Design, CRUD Operations, API/Data Integration'],
  ['Tools & DevOps', 'Git, GitHub, Postman, Vercel, Vite, Deployment, Debugging, API Testing'],
  ['CS foundations', 'Data Structures & Algorithms, DBMS, Computer Networks, Cloud Computing, Computer Architecture'],
  ['Development', 'Full-Stack Web Development, Real-Time Applications, E-Commerce, Role-Based Systems, Performance Optimization'],
].map(([label, items]) => ({ label, items: items.split(', ') }));
// Removed on purpose: To-Do app, Barber app, Weather app and the joke-text e-commerce demo/screenshots.
export const projects = [
  { title: 'NexGenPR Website', stack: 'React / Express / MongoDB / Cloudinary', desc: 'A redesigned website for NexGenPR, a PR and digital marketing agency in Mandsaur, with a dynamic portfolio. A JWT-protected admin dashboard uploads images to Cloudinary and publishes projects to the site automatically.' },
  { title: 'Real-Time Live Chat', stack: 'React / Socket.IO', desc: 'A real-time communication application with authentication, secure password handling, live messaging and a responsive interface using Socket.IO.', live: 'https://live-chat-app-sooty.vercel.app/', code: 'https://github.com/RandomFirstOrg/ChatApp' },
  { title: 'MERN E-Commerce Platform', stack: 'React / MongoDB', desc: 'An e-commerce platform with dynamic product listings, detailed product views, owner/admin functionality and product management features.', code: 'https://github.com/rk-4u/ProductReactApp' },
  { title: 'College Placement Portal', stack: 'MERN', desc: 'A role-based placement platform for administrators, teachers and students to centralize placement workflows and student-focused functionality.' },
  { title: 'Synapaxon', stack: 'Medical student learning platform', desc: 'A learning platform concept with daily notes, AI-enhanced tests, categorized study material and strength/weakness analysis.' },
  { title: 'Three.js Ocean Store', stack: 'Three.js / JavaScript', desc: 'An immersive 3D ocean environment with animated visual effects and interactive 3D presentation for a modern web-store concept.' },
  { title: 'Career Connect', stack: 'Transportation booking', desc: 'A transportation-booking application concept focused on connecting users with transportation services and simplifying booking workflows.' },
];
export const jobs = [
  { role: 'Freelance Web Developer', org: 'Freelancing, Indore', when: 'Apr 2025 to Sep 2025', pts: ['Developed responsive web interfaces and application features based on project requirements using modern JavaScript technologies.', 'Worked across frontend and backend functionality, including API integration, database-driven features, debugging and deployment.', 'Applied practical MERN development patterns to build maintainable, user-focused web solutions and improve application usability.'] },
  { role: 'Web Developer', org: 'Coding Skill Hub', when: 'Apr 2025 to May 2025', pts: ['Worked on coding and web-development projects involving frontend implementation, application logic and practical problem solving.', 'Strengthened hands-on skills by translating requirements into functional web interfaces and improving existing application features.'] },
  { role: 'Web Developer', org: 'Yashit Servicer', when: 'Mar 2025 to Apr 2025', pts: ['Contributed to service-oriented web application development and user-facing interfaces for practical service workflows.', 'Worked with web technologies to implement application features, troubleshoot issues and improve the overall user experience.'] },
  { role: 'Web Development Intern', org: 'Byte-Billion', when: 'Jul 2023 to Feb 2024', pts: ['Gained hands-on experience with HTML, CSS, JavaScript and React.js while contributing to real-world web development projects.', 'Built dynamic, responsive and user-friendly interfaces and supported frontend/backend development tasks in a collaborative environment.', 'Improved practical understanding of application development, debugging, performance optimization and development workflows.'] },
];
export const schools = [
  { name: 'Master of Computer Applications (MCA)', where: 'India', when: '2025 to 2027' },
  { name: 'Bachelor of Computer Applications (BCA)', where: 'IPS Academy, Indore', when: '2021 to 2024' },
];
export const socials = [['GitHub', 'https://github.com/rk-4u'], ['LinkedIn', 'https://www.linkedin.com/in/rk4'], ['Telegram', 'https://t.me/Ra_ka_u'], ['WhatsApp', 'https://wa.link/g5qjz0'], ['Instagram', 'https://instagram.com/rahul_choudhary.rk']];
