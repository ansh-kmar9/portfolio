// data/projects.js
import dsasheet from "../assets/images/dsasheet.png";
import simon from "../assets/images/simon.png";
import nqueen from "../assets/images/nqueen.png";
import scholarsuites from "../assets/images/scholarsuits.png";
import techhiveMockup from "../assets/images/techhiveMockup.png";
import meetly from "../assets/images/meetly.png";

export const projects = [
  {
    id: "scholar-suites",
    title: "Scholar Suites",
    description:
      "A full-stack room booking platform for students and scholars to find, list, and review long-term accommodations.",
    image: scholarsuites, // Update with actual path
    tags: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript", "Bootstrap"],
    demoLink: "https://scholarsuites-demo.com", // Replace with actual link
    githubLink: "https://github.com/username/scholar-suites", // Replace with actual link
    featured: true,
    role: "Full-Stack Developer",
    challenges:
      "Designing an intuitive UX for room discovery and handling secure user authentication were key challenges.",
    solutions:
      "Implemented clean CRUD functionality, session-based login/logout, and dynamic rendering with EJS. Also used Bootstrap validations and enhanced review system.",
    longDescription: `Scholar Suites is a room booking platform built for students and scholars seeking long-term accommodation. It allows users to easily browse, list, and manage rental properties. Key features include:
  
    • User authentication with login/logout functionality  
    • Room listing with image uploads, title, description, and rent details  
    • Edit and delete functionality for listed rooms  
    • A dynamic review system with ratings and comments  
    • Admin-level control over listings and user actions  
    • A clean, mobile-responsive design with Bootstrap and custom CSS  
    • MongoDB integration for storing rooms, users, and reviews`,
  },
  {
    id: "meetly",
    title: "Meetly",
    description:
      "A secure and user-friendly video conferencing platform with real-time chat, meeting scheduling, and screen sharing features.",
    image: meetly, // Replace with your actual image path
    tags: ["React", "Socket.io", "WebRTC", "Node.js", "Express", "MongoDB"],
    demoLink: "https://meetly-demo.com", // Replace with your actual demo link
    githubLink: "https://github.com/username/meetly", // Replace with your actual GitHub link
    featured: true,
    role: "Full-Stack Developer",
    challenges:
      "Integrating WebRTC for peer-to-peer video communication and ensuring stable connections across different networks.",
    solutions:
      "Used WebRTC for video streams, Socket.io for signaling and real-time messaging, and implemented ICE negotiation handling for better connection reliability.",
    longDescription: `Meetly is a modern video conferencing app designed to facilitate remote meetings, online classes, and team collaborations. Core features include:
  
    • One-click meeting room creation and joining  
    • High-quality video and audio conferencing using WebRTC  
    • Real-time messaging and participant list  
    • Screen sharing functionality  
    • Meeting scheduling with calendar integration  
    • Unique meeting URLs with room ID and optional passcode  
    • Responsive UI for desktop and mobile users  
    • Backend integration with MongoDB for storing meeting history and user sessions`,
  },

  {
    id: "dsa-sheet",
    title: "DSA Sheet Tracker",
    description:
      "An interactive platform for tracking progress through curated DSA problem sets categorized by topic and difficulty.",
      image: dsasheet, // Replace with your actual image path
    tags: ["React", "LocalStorage", "Bootstrap", "JavaScript"],
    demoLink: "https://dsasheet-demo.com", // Replace with your actual demo link
    githubLink: "https://github.com/username/dsa-sheet-tracker", // Replace with your actual GitHub repo
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
    id: "simon-says-game",
    title: "Simon Says Game",
    description:
      "A classic memory-based game where users must repeat an increasingly long sequence of colors and sounds.",
    image: simon, // Replace with your actual image path
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://simonsays-demo.com", // Replace with your actual demo link
    githubLink: "https://github.com/username/simon-says-game", // Replace with your actual GitHub repo
    featured: false,
    role: "Frontend Developer",
    challenges:
      "Maintaining the correct sequence logic and providing instant feedback for user inputs.",
    solutions:
      "Implemented array-based sequence tracking, used event listeners for real-time interaction, and added visual/audio feedback with dynamic timing control.",
    longDescription: `The Simon Says game challenges users to test and improve their memory by mimicking sequences of color and sound. Features include:
  
    • Randomly generated color sequences  
    • Smooth animations and audio cues for each step  
    • Responsive design for desktop and mobile play  
    • Difficulty increases as the sequence grows  
    • Game over and restart logic with clean UI  
    • Encourages focus and memory training through fun interaction`,
  },
  {
    id: "n-queen-visualizer",
    title: "N-Queen Visualizer",
    description:
      "A visual tool that demonstrates how the N-Queen problem is solved using backtracking algorithms.",
    image: nqueen, // Replace with your actual image path
    tags: ["HTML", "CSS", "JavaScript", "Algorithms"],
    demoLink: "https://nqueen-visualizer-demo.com", // Replace with your actual live link
    githubLink: "https://github.com/username/n-queen-visualizer", // Replace with your actual GitHub repo
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
    demoLink: "https://www.figma.com/file/your-techhive-link", // Replace with actual Figma link
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
  }
  
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id) || null;
};
