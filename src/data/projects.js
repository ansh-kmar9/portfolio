// data/projects.js
import dsasheet from "../assets/images/dsasheet.png";
import simon from "../assets/images/simon.png";
import nqueen from "../assets/images/nqueen.png";
import wanderstay from "../assets/images/wanderStay.png";
import techhiveMockup from "../assets/images/techhiveMockup.png";
import meetly from "../assets/images/meetly.png";
import inquira from "../assets/images/inquira.png";
import stockflow from "../assets/images/stockflow.png";

export const projects = [
  {
    id: "stockflow",
    title: "StockFlow",
    description:
      "A full-stack stock portfolio management platform with real-time analytics, secure authentication, and a modern dashboard for tracking holdings, orders, and positions.",
    image: stockflow, // Replace with actual image path
    tags: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "React",
      "Context API",
      "REST APIs",
      "JWT Authentication",
      "Mongoose",
      "Charts.js",
      "Responsive UI",
      "Modular Architecture",
      "Authorization",
      "Data Visualization",
      "Session Management",
      "Protected Routes",
    ],
    demoLink: "https://stockflow-frontend.netlify.app/", // Replace with actual demo link if available
    githubLink: "https://github.com/ansh-kmar9/Stock-Flow", // Replace with your actual GitHub repo link
    featured: true,
    role: "Full-Stack Developer",
    challenges:
      "Implementing real-time data updates, managing secure user authentication and authorization, designing a responsive and intuitive dashboard, and ensuring robust data validation and error handling across the stack.",
    solutions:
      "Utilized JWT for secure authentication and protected routes, implemented modular REST APIs with Express and Mongoose, leveraged React Context API for global state management, and integrated Chart.js for dynamic data visualization. Ensured responsive design with modern CSS and handled edge cases with comprehensive validation and error feedback. Used MongoDB for scalable data storage and designed a clear separation between backend, dashboard, and landing page for maintainability.",

    longDescription: `StockFlow is a comprehensive, production-ready web application for managing stock portfolios. It enables users to track their holdings, positions, orders, and funds with real-time updates and insightful analytics.

🔧 Key Features & Highlights:

• Modular backend built with Express.js, Mongoose, and MongoDB for robust data management  
• RESTful APIs for all core resources: users, holdings, orders, and positions  
• Secure user authentication and authorization using JWT and protected routes  
• Real-time dashboard with React, featuring dynamic charts and visualizations  
• Global state management via React Context API for seamless data flow  
• Responsive, modern UI for both dashboard and landing page  
• Comprehensive error handling and user feedback for smooth UX  
• Data validation on both client and server sides  
• Watchlist, funds management, and reviewable order history  
• Clean separation of concerns: backend API, dashboard app, and marketing frontend  
• Scalable architecture ready for production deployment  

StockFlow demonstrates real-world full-stack development skills, with a focus on **security**, **usability**, and **scalability**. The project showcases expertise in backend API design, authentication, data modeling, frontend state management, and user-centric UI/UX. It is a strong addition to any developer portfolio, highlighting the ability to deliver complex, production-grade web applications.`,
  },
  {
    id: "wanderstay",
    title: "WanderStay",
    description:
      "A full-stack room booking platform with secure authentication, image management, reviews, and integrated payment gateway for streamlined reservations.",
    image: wanderstay, // Replace with actual image path
    tags: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "EJS",
      "Bootstrap",
      "Mongoose",
      "MVC",
      "REST APIs",
      "Multer",
      "Cloudinary",
      "Joi",
      "Sessions",
      "Authentication",
      "Authorization",
      "Stripe",
      "Payment Integration",
    ],
    demoLink: "https://wanderstay-3s1x.onrender.com/",
    githubLink: "https://github.com/ansh-kmar9/WanderStay",
    featured: true,
    role: "Full-Stack Developer",
    challenges:
      "Integrating secure payment workflows, managing user permissions, ensuring safe file uploads, and maintaining robust validations on both client and server sides.",
    solutions:
      "Integrated Stripe for secure payment processing, applied MVC architecture for modular code, used MongoDB with Mongoose for structured data modeling, enabled session-based authentication with hashed passwords, and added layered validations using Joi and Bootstrap. Also used Express routers, custom middleware, and Mongoose hooks for advanced operations like cascading deletes.",

    longDescription: `WanderStay is a robust, production-ready web application built for long-term room booking. It supports a complete reservation cycle — from listing to payment — and implements several real-world web development practices and technologies.

🔧 Key Features & Highlights:

• Follows the MVC design pattern for maintainability and clean code separation  
• RESTful APIs built with Express.js and modular routing  
• User authentication and authorization using sessions, bcrypt, and secure cookies  
• Role-based access control to restrict actions (like edit/delete listings)  
• Integrated Stripe Payment Gateway for secure and real-time booking transactions  
• Mongoose ODM with middleware: auto-deletes associated data (e.g., rooms/reviews) when users are removed  
• Image upload via Multer, with secure cloud storage using Cloudinary  
• Client and server-side form validations using Bootstrap and Joi  
• Flash messages, error handling, and feedback alerts for smooth UX  
• Fully responsive UI built with EJS templating and Bootstrap  
• MongoDB session storage for scalable session persistence  
• Review system with average rating calculation, comment handling, and validations  
• Admin-level controls and review moderation  

This project reflects real-world full-stack architecture, with special attention to **security**, **scalability**, and **user experience**. WanderStay exemplifies mastery of backend systems, data modeling, validation, file handling, and commercial features like payments — making it a powerful addition to any developer portfolio.`,
  },
  {
    id: "meetly",
    title: "Meetly",
    description:
      "A full-stack real-time video conferencing application with chat, screen sharing, secure authentication, and dynamic room handling.",
    image: meetly, // Replace with actual image import
    tags: [
      "React.js",
      "Vite",
      "Socket.io",
      "WebRTC",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Axios",
      "MUI",
      "bcrypt",
      "REST API",
    ],
    demoLink: "https://meet-ly.netlify.app/",
    githubLink: "https://github.com/ansh-kmar9/Meetly",
    featured: true,
    role: "Full-Stack Developer",
    challenges:
      "Establishing stable peer-to-peer WebRTC connections, synchronizing real-time events like chat and user joins/leaves, and managing room security through authentication and unique meeting links.",
    solutions:
      "Implemented WebRTC for media streaming and Socket.io for real-time communication and signaling. Used bcrypt for secure password hashing, Express with REST APIs for authentication and room logic, and MongoDB with Mongoose for session and meeting data storage. Integrated Vite + React for a performant and responsive frontend with Material UI components.",

    longDescription: `Meetly is a full-stack, production-grade video conferencing platform designed to replicate real-world meeting workflows. It allows users to securely create and join video calls, share screens, and communicate via integrated chat — all with real-time responsiveness.

🚀 Core Features & Technologies:

• **WebRTC-based peer-to-peer video and audio calls**  
• **Real-time messaging and signaling** via Socket.io  
• **Screen sharing** with browser compatibility handling  
• **User authentication** using bcrypt and JWT/session strategies  
• **Secure meeting rooms** with unique URLs and optional passcodes  
• **Meeting scheduling and participant handling**  
• **MongoDB with Mongoose** for storing room metadata and user sessions  
• **RESTful APIs** to manage users, rooms, and meeting history  
• **Frontend in React + Vite** for high-speed performance  
• **Material UI (MUI)** for modern and accessible UI components  
• **Form handling and input validation** using client-side state and Axios  
• **Scalable Express backend**, built modularly with separate routers and controllers  


Meetly demonstrates strong expertise in full-stack real-time communication systems, authentication workflows, and modern React development with fast builds via Vite. It’s a technically challenging and complete product reflecting real-world applications like Zoom or Google Meet.`,
  },
  {
    id: "dsa-sheet",
    title: "DSA Sheet Tracker",
    description:
      "An interactive platform for tracking progress through curated DSA problem sets categorized by topic and difficulty.",
    image: dsasheet,
    tags: ["React", "LocalStorage", "Bootstrap", "JavaScript"],
    demoLink: "https://www.dsasheet.site/", // Replace with your actual demo link
    githubLink: "https://github.com/ansh-kmar9/DSA-Sheet", // Replace with your actual GitHub repo
    featured: false,
    role: "Frontend Developer",
    challenges:
      "Managing persistent user progress without backend integration and providing a smooth user experience for navigating through problems.",
    solutions:
      "Used LocalStorage for progress tracking and created dynamic filters, topic-wise breakdowns, and progress indicators for better usability.",
    longDescription: `This DSA Sheet Tracker helps aspiring programmers systematically practice and track their data structures and algorithms journey. Features include:
  
    • Curated list of DSA problems categorized by topic (e.g., Arrays, Trees, Graphs, etc.)  
    • Status tracking for solved, unsolved, and bookmarked problems  
    • Filtering by difficulty and topic  
    • Visual progress indicators for each category  
    • Responsive UI for mobile and desktop  
    • Persistent local storage to save user progress  
    • Clean and minimal design focused on learning efficiency`,
  },
  {
    id: "inquira",
    title: "Inquira",
    description:
      "A minimal yet functional RESTful blog post platform built with Express.js and EJS, supporting full CRUD operations and clean routing.",
    image: inquira, // Replace with actual image path or screenshot
    tags: [
      "Node.js",
      "Express.js",
      "EJS",
      "RESTful API",
      "UUID",
      "Method Override",
      "CRUD",
      "JavaScript",
    ],
    demoLink: "https://inquira-1.onrender.com/posts",
    githubLink: "https://github.com/ansh-kmar9/Inquira", // Replace with the actual repo link
    featured: false,
    role: "Backend & Full-Stack Developer",
    challenges:
      "Building a lightweight blog engine using only server-side rendering while managing stateful routing and form-based CRUD actions without a database.",
    solutions:
      "Used Express.js and EJS to build a fully functional server-rendered application with full CRUD capabilities. Utilized UUID for unique ID generation and Method Override to simulate HTTP verbs like PATCH and DELETE in HTML forms. Clean route organization and middleware ensure clarity and maintainability.",

    longDescription: `Inquira is a basic yet powerful RESTful post management system demonstrating server-side rendering with full CRUD support. It’s a classic implementation of a blog-style API using Express.js and EJS templating, suitable for teaching and demonstrating backend fundamentals.

🛠 Key Features & Stack:

• **Express.js routing** for GET, POST, PATCH, and DELETE operations  
• **EJS** templating for server-side rendered views and form UIs  
• **UUID** used to uniquely identify posts  
• **Method-Override** enables RESTful behavior using HTML forms  
• Create, view, edit, and delete posts directly through the UI  
• Lightweight and easy to deploy (no database required)  
• **Stateful data stored in-memory** (demo purpose), ideal for prototyping or learning  
• Middleware for parsing JSON, URL-encoded bodies, and serving static assets  
• Modular and scalable project structure for easy expansion

Inquira is a great example of clean RESTful design and efficient backend setup without the complexity of frontend frameworks or databases. It's perfect for showcasing fundamental Express.js capabilities, routing logic, and REST principles.`,
  },

  {
    id: "simon-says-game",
    title: "Simon Says Game",
    description:
      "A classic memory-based browser game where players repeat an increasingly complex pattern of color flashes and sounds.",
    image: simon, // Replace with your actual image import
    tags: ["HTML", "CSS", "JavaScript", "DOM", "Event Handling", "Game Logic"],
    demoLink: "https://simon-game-jet-eight.vercel.app/",
    githubLink: "https://github.com/ansh-kmar9/simon-game",
    featured: false,
    role: "Frontend Developer",
    challenges:
      "Managing real-time pattern tracking, handling user input timing accurately, and designing clean feedback for success/failure states.",
    solutions:
      "Used array-based logic to track game and user sequences, DOM event listeners for interaction, and implemented visual feedback via class toggling. Structured the game loop with level progression and error detection, and added animations for better UX.",

    longDescription: `The Simon Says Game is a browser-based memory challenge that tests the user's ability to follow an increasingly complex sequence of colors. Built entirely with vanilla JavaScript, HTML, and CSS, it features responsive interaction and animated feedback.

🧠 Game Features & Technical Highlights:

• **Pattern generation logic** using arrays for tracking game and user sequences  
• **Event-driven gameplay** — listens for clicks and compares against the current pattern  
• **Responsive DOM manipulation** for animations and feedback  
• **Flash effects and dynamic text updates** to indicate game state  
• **Level-based progression** that increases difficulty over time  
• **Game over state** with custom score feedback and restart option  
• Minimalist and mobile-friendly layout using flexbox and CSS  
• Designed for fast loading and zero dependencies — perfect for learning core JavaScript and logic

This project highlights strong command over **pure JavaScript logic**, **event handling**, and **UI feedback design**, making it a great example of how interactive games can be built without frameworks or libraries.`,
  },
  {
    id: "n-queen-visualizer",
    title: "N-Queen Visualizer",
    description:
      "A visual tool that demonstrates how the N-Queen problem is solved using backtracking algorithms.",
    image: nqueen, // Replace with your actual image path
    tags: ["HTML", "CSS", "JavaScript", "Algorithms"],
    demoLink: "https://m-queen-visualiser.vercel.app/", // Replace with your actual live link
    githubLink: "https://github.com/ansh-kmar9/m-queen-visualiser", // Replace with your actual GitHub repo
    featured: false,
    role: "Frontend Developer",
    challenges:
      "Efficiently visualizing the recursive backtracking process in real-time while keeping the UI intuitive and engaging.",
    solutions:
      "Used asynchronous functions and time delays to animate queen placements step-by-step and implemented clear visual cues to indicate valid/invalid moves.",
    longDescription: `This N-Queen Visualizer helps users understand how the classic N-Queen problem is solved using backtracking. The key features include:
  
    • Interactive board with adjustable N value  
    • Step-by-step animation of the backtracking process  
    • Real-time placement and removal of queens  
    • Highlighting of conflicts for better clarity  
    • Clean and responsive UI for all screen sizes  
    • Educational tool for learning recursion and backtracking algorithms`,
  },
  {
    id: "techhive",
    title: "TechHive",
    description:
      "A conceptual design project showcasing a modern and intuitive tech product discovery platform, crafted with detailed wireframes and high-fidelity mockups in Figma.",
    image: techhiveMockup, // Replace with actual path to Figma mockup image
    tags: ["Figma", "UX/UI Design", "Wireframing", "Prototyping", "User Flows"],
    demoLink:
      "https://www.figma.com/design/61maH5YRsSiT151S4Xy9Vf/High-Fidility--TechHive-?node-id=1-4&p=f", // Replace with actual Figma link
    githubLink: "", // Optional or leave empty if not applicable
    featured: false,
    role: "UI/UX Designer",
    challenges:
      "Creating a user-centric experience for browsing and filtering tech products while maintaining a clean and professional aesthetic.",
    solutions:
      "Developed clear low-fidelity wireframes to define structure, followed by high-fidelity prototypes with interactive components. Focused on accessibility, visual hierarchy, and intuitive navigation.",
    longDescription: `TechHive is a user-focused platform designed to help users discover, compare, and engage with the latest in tech products. This Figma-based design project includes:
  
    • Low-fidelity wireframes outlining basic layout and user flow  
    • High-fidelity mockups with real content, colors, and UI components  
    • Interactive prototype to demonstrate user journey and feature accessibility  
    • Organized pages for homepage, product listings, product detail, and filters  
    • Emphasis on responsive layout, modern UI, and UX best practices  
    • Built with scalable design system elements and reusable components`,
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id) || null;
};
