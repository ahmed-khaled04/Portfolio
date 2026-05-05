export const projects = [
  {
    title: "Sync Clash",
    slug: "sync-clash",
    summary:
      "A multiplayer networking game implementing real-time state synchronization over UDP with loss and jitter handling.",

    tags: ["Networking", "UDP", "Game Sync"],
    stack: ["Python", "UDP Sockets", "Netem", "Wireshark"],

    featured: true,

    problem:
      "Traditional TCP introduces latency for real-time games. The challenge was achieving smooth multiplayer gameplay over unreliable UDP connections.",

    solution: [
      "Designed a snapshot-based game state synchronization model",
      "Implemented client-side interpolation for smooth movement",
      "Handled packet loss, duplication, and reordering",
    ],

    architecture: [
      "UDP snapshot server",
      "Multiple game clients",
      "Client-side interpolation & prediction",
    ],

    contributions: [
      "Designed the synchronization protocol",
      "Implemented server–client communication logic",
      "Tested network conditions using netem and Wireshark",
    ],

    highlights: [
      "Low-latency real-time synchronization",
      "Resilient to packet loss and jitter",
      "Scalable client snapshot handling",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/Sync-Clash",
      demo: "https://drive.google.com/file/d/1zP9zMdLr9Zl5M0YNb94adNFzISFu7Hci/view?usp=sharing",
      report: "",
      docs: "",
    },
    media: {
      hero: "/projects/sync-clash/hero.png",
      caption:
        "Multiplayer grid snapshot — real-time UDP state synchronization.",
      gallery: ["/projects/sync-clash/1.png"],
    },
  },

  {
    title: "Door Lock Security System (Tiva-C)",
    slug: "door-lock-tivac",
    summary:
      "Embedded dual-ECU security system with password authentication, EEPROM storage, and motor control.",

    tags: ["Embedded", "Tiva-C", "Security"],
    stack: ["C", "TM4C123", "UART", "EEPROM", "Timers"],

    featured: false,

    problem:
      "Designing a reliable embedded security system with secure password handling and fault tolerance.",

    solution: [
      "Separated system into HMI ECU and Control ECU",
      "Stored password securely in EEPROM",
      "Implemented alarm and lockout mechanisms",
    ],

    architecture: [
      "HMI ECU (keypad + LCD)",
      "Control ECU (motor + buzzer)",
      "UART communication between ECUs",
    ],

    contributions: [
      "Implemented UART communication",
      "Developed motor and buzzer drivers",
      "Developed LCD and keypad drivers",
    ],

    highlights: [
      "Modular ECU design",
      "Persistent secure storage",
      "Robust error handling",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/door_lock_security_system",
      demo: "https://drive.google.com/file/d/108d8d44TCn1XDm-Hh2sNHW6GdtRMm-7O/view?usp=sharing",
      report: "",
      docs: "",
    },
    media: {
      hero: "/projects/door-lock-security/hero.jpg",
      caption:
        "Dual-ECU embedded door-lock system with secure password authentication and motor control (Tiva-C)..",
      gallery: [
        "/projects/door-lock-security/1.png",
        "/projects/door-lock-security/2.png",
        "/projects/door-lock-security/3.png",
      ],
    },
  },

  {
    title: "Python Compiler (Lexer & Parser)",
    slug: "python-compiler-lexer-parser",
    summary:
      "A C++ compiler front-end implementing lexical analysis and parsing for a Python-like language.",

    tags: ["Compilers", "C++", "Parsing"],
    stack: ["C++", "Lexer", "Parser", "AST"],

    featured: true,

    problem:
      "Understanding how high-level languages are translated into structured representations.",

    solution: [
      "Implemented a full lexical analyzer",
      "Built a grammar-based parser",
      "Generated abstract syntax trees (AST)",
    ],

    architecture: ["Lexer", "Parser", "AST generation"],

    contributions: [
      "Grammar design",
      "Parser implementation",
      "Syntax validation and error handling",
    ],

    highlights: [
      "Clean grammar rules",
      "Accurate tokenization",
      "Extensible compiler design",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/python_compiler_cpp",
      demo: "",
      report: "",
      docs: "",
    },
    media: {
      hero: "/projects/compiler/hero.jpg",
      caption:
        "C++ compiler front-end implementing lexical analysis and parsing for a Python-like language.",
      gallery: [
        "/projects/compiler/1.png",
        "/projects/compiler/3.png",
        "/projects/compiler/4.png",
      ],
    },
  },

  // ===== Normalized: Banking System =====
  {
    title: "Banking System",
    slug: "banking-system",
    summary:
      "Banking GUI application for managing accounts, transactions, loans, and admin workflows.",

    tags: ["Java", "JavaFX", "PostgreSQL", "Testing"],
    stack: ["Java", "JavaFX", "PostgreSQL", "Maven", "JUnit 5"],

    featured: false,

    problem:
      "Build a structured banking application with a clean UI, persistent storage, and testable business logic.",

    solution: [
      "Implemented account and transaction workflows with a GUI",
      "Integrated PostgreSQL for persistence",
      "Used Maven + JUnit 5 for maintainable testing",
    ],

    architecture: [
      "JavaFX UI layer",
      "Service/logic layer for banking operations",
      "PostgreSQL persistence layer",
    ],

    contributions: [
      "Designed and implemented core banking workflows",
      "Integrated database operations for persistence",
      "Wrote tests for key business logic components",
    ],

    highlights: [
      "Account management (create/update/delete + history)",
      "Transactions (deposit/withdraw/transfer + history)",
      "Loan requests + approval/rejection + payment calculations",
      "Admin dashboard + audit reports",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/Banking_System",
      demo: "",
      report: "",
      docs: "",
    },
    media: {
      hero: "/projects/bank/hero.png",
      caption: "",
      gallery: [],
    },
  },

  // ===== Normalized: Verilog Lint Checker =====
  {
    title: "Verilog Lint Checker",
    slug: "verilog-lint-checker",
    summary:
      "Verilog lint checker aimed at detecting common RTL issues using rule-based checks and reporting.",

    tags: ["Verilog", "Static Analysis", "EDA"],
    stack: ["C++", "Verilog"],

    featured: false,

    problem:
      "RTL bugs are expensive to debug late. The goal was to detect common Verilog issues early using automated lint rules.",

    solution: [
      "Implemented rule-based lint checks for Verilog designs",
      "Generated reports to help identify RTL issues quickly",
      "Provided examples and artifacts to validate lint outputs",
    ],

    architecture: [
      "Parser / analyzer pipeline",
      "Rule engine for lint checks",
      "Report generation output",
    ],

    contributions: [
      "Configured and extended lint rules/checks",
      "Validated output using sample Verilog inputs",
      "Documented findings and produced reports",
    ],

    highlights: [
      "Lint-style checks on Verilog designs",
      "Useful for catching issues early in RTL development",
      "Includes report artifact in repository",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/Verilog_Lint_Checker",
      demo: "",
      report: "",
      docs: "https://github.com/ahmed-khaled04/Verilog_Lint_Checker/blob/main/LOLINTA%20REPORT.pdf",
    },
    media: {
      hero: "/projects/verilog/hero.png",
      caption: "",
      gallery: [],
    },
  },

  // ===== Normalized: UMS =====
  {
    title: "University Management System",
    slug: "ums-agile-scrum",
    summary:
      "University Management System built using an agile Scrum workflow with separated backend and frontend modules.",

    tags: ["Agile", "Full-Stack", "University", "Scrum"],
    stack: ["Node.js", "Express", "MongoDB (Mongoose)", "React", "Vite"],

    featured: false,

    problem:
      "Build a university management platform with a clear modular structure while working in Scrum-style iterations.",

    solution: [
      "Developed a backend API with Express and MongoDB",
      "Built a React frontend consuming API endpoints",
      "Structured the project for maintainability and team collaboration",
    ],

    architecture: [
      "React frontend (Vite)",
      "Express REST API backend",
      "MongoDB database (Mongoose models)",
    ],

    contributions: [
      "Implemented frontend pages and API integration",
      "Worked within Scrum process (tasks, iterations, deliverables)",
      "Helped structure modules for maintainability",
    ],

    highlights: [
      "Backend/Frontend split with clear modular structure",
      "Auth flows (login/signup) + API services pattern",
      "Environment-based configuration",
      "Built with incremental, user-focused iterations",
    ],

    links: {
      github:
        "https://github.com/Saifeldinsais/Agile---University-Management-System",
      demo: "",
      report: "",
      docs: "",
    },
    media: {
      hero: "/projects/ums/hero.png",
      caption: "",
      gallery: [],
    },
  },

  // ===== Normalized: Reddit Clone =====
  {
    title: "Reddit Clone",
    slug: "reddit-clone",
    summary:
      "Reddit-like clone with separated frontend/backend and an API documentation file included in the repository.",

    tags: ["Full-Stack", "Clone", "API"],
    stack: ["React.js", "Node.js", "MongoDB"],

    featured: false,

    problem:
      "Build a social content platform clone to practice full-stack patterns: APIs, data models, and client UX.",

    solution: [
      "Implemented a backend service exposing documented REST endpoints",
      "Built a frontend that consumes the API",
      "Maintained API documentation for clarity and collaboration",
    ],

    architecture: [
      "Frontend app",
      "Backend API service",
      "MongoDB-based persistence layer",
    ],

    contributions: [
      "Implemented features across frontend/backend structure",
      "Worked with API routes and data flow",
      "Maintained documentation and project structure",
    ],

    highlights: [
      "Clear separation of frontend and backend",
      "API documentation provided in-repo",
      "Good foundation for posts, comments, voting, and auth flows",
    ],

    links: {
      github: "https://github.com/ucouldcallmeEL/RedditClone",
      demo: "",
      report:
        "https://github.com/ucouldcallmeEL/RedditClone/blob/main/API_DOCUMENTATION.md",
    },
    media: {
      hero: "/projects/reddit/hero.png",
      caption: "",
      gallery: [],
    },
  },
  {
    title: "Syncro – Real-Time Collaborative Code Editor",
    slug: "syncro-collab-editor",
    summary:
      "A full-stack real-time collaborative code editor with Yjs CRDT synchronization, per-file version history, role-based access control, and persistent PostgreSQL snapshots.",

    tags: ["Real-Time", "CRDT", "Collaboration", "Full-Stack"],
    stack: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "Yjs",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    featured: true,

    problem:
      "Traditional collaborative systems struggle with concurrency, versioning, and real-time synchronization. The challenge was building a scalable, low-latency editor that supports concurrent editing, file management, locking, and persistent history.",

    solution: [
      "Implemented CRDT-based synchronization using Yjs",
      "Built WebSocket layer using Socket.IO for real-time updates",
      "Designed a per-file snapshot/versioning system stored in PostgreSQL",
      "Added role-based locking and edit permission controls",
      "Implemented full virtual file system using Yjs shared maps",
    ],

    architecture: [
      "React frontend with modular hooks (useYjsSync, useRoomLanguage)",
      "Socket.IO real-time communication layer",
      "Yjs CRDT document model",
      "PostgreSQL snapshot + version persistence layer",
      "Room-based permission & locking system",
    ],

    contributions: [
      "Designed full client–server architecture",
      "Implemented Yjs synchronization layer",
      "Built file explorer with nested folder structure",
      "Implemented snapshot history & restore system",
      "Developed role-based access control (owner/editor/viewer)",
    ],

    highlights: [
      "Real-time multi-user editing",
      "Per-file version history with restore capability",
      "Room locking + edit request system",
      "Persistent auto-snapshots with debouncing",
      "Export entire project as ZIP",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/syncro",
      demo: "",
      report: "",
      docs: "",
    },

    media: {
      hero: "/projects/syncro/hero.png",
      caption:
        "Syncro collaborative editor — CRDT-based real-time editing with snapshot history and role-based access control.",
      gallery: [
        "/projects/syncro/1.png",
        "/projects/syncro/2.png",
        "/projects/syncro/3.png",
      ],
    },
  },

  {
    title: "Kora – Live Football Social Platform",
    slug: "kora-live",
    summary:
      "A real-time sports social platform where users follow live matches, react with emoji, predict scorelines, and compete on a global leaderboard.",

    tags: ["Real-Time", "Full-Stack", "Social", "WebSockets"],
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "TanStack Query",
      "Cloudinary",
      "Resend",
    ],

    featured: true,

    problem:
      "Sports apps are passive — users scroll scores but can't engage with the moment. The challenge was building a live social layer on top of real football data with low-latency reactions and a fair prediction scoring system.",

    solution: [
      "Integrated API-Football to poll live, upcoming, and finished match data",
      "Built WebSocket broadcast layer for real-time comments and emoji reactions",
      "Implemented a prediction engine — exact score earns 5 pts, correct outcome earns 2 pts",
      "Auto-scores predictions when a match finishes using BullMQ background jobs",
      "Designed a global leaderboard ranked by total prediction points",
    ],

    architecture: [
      "React 19 + TanStack Query frontend with Tailwind CSS v4",
      "Express 5 REST API + Socket.IO real-time layer",
      "PostgreSQL via Prisma ORM for persistence",
      "Redis + BullMQ for caching and background job queues",
      "Cloudinary for avatar storage, Resend for email notifications",
    ],

    contributions: [
      "Designed full client–server architecture",
      "Built match polling service and live data pipeline",
      "Implemented prediction scoring and leaderboard system",
      "Developed real-time social features (reactions, comments, notifications)",
      "Integrated third-party services (Cloudinary, Resend, API-Football)",
    ],

    highlights: [
      "Live match reactions and comments via WebSockets",
      "Score prediction system with automatic point scoring",
      "Follow system with in-app and email notifications",
      "Global leaderboard with real-time updates",
      "Background job queue for match state polling",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/kora-live",
      demo: "",
      report: "",
      docs: "",
    },

    media: {
      hero: "/projects/kora/hero.png",
      caption: "Kora — live match feed with real-time reactions and score predictions.",
      gallery: [
        "/projects/kora/1.png",
        "/projects/kora/2.png",
        "/projects/kora/3.png",
        "/projects/kora/4.png",
      ],
    },
  },

  {
    title: "Traffic Sign Recognition",
    slug: "traffic-sign-detection",
    summary:
      "Classical computer vision pipeline for traffic sign classification using HOG feature extraction and an SVM classifier — 90.2% accuracy across 43 classes on the GTSRB dataset.",

    tags: ["ML/Data", "Computer Vision", "Python"],
    stack: [
      "Python",
      "scikit-learn",
      "OpenCV",
      "HOG",
      "SVM",
      "Streamlit",
      "NumPy",
    ],

    featured: false,

    problem:
      "Traffic sign classification without deep learning — achieving high accuracy using only classical CV techniques on a 43-class imbalanced dataset.",

    solution: [
      "Cropped and resized ROI regions, normalized to [0,1], converted BGR→HSV",
      "Applied HSV color masking to segment red, blue, and yellow signs",
      "Extracted HOG features (9 orientations, 8×8 cells, 2×2 blocks, L2-Hys norm)",
      "Trained an RBF-kernel SVM (C=10, γ=0.001) on scaled features",
      "Built an interactive Streamlit demo for single-image inference",
    ],

    architecture: [
      "Preprocessing pipeline (crop, resize, normalize, HSV conversion)",
      "Segmentation module (HSV color masking)",
      "HOG feature extraction",
      "StandardScaler + SVM classifier",
      "Streamlit demo app",
    ],

    contributions: [
      "Designed the full preprocessing and feature extraction pipeline",
      "Tuned SVM hyperparameters to reach 90.2% test accuracy",
      "Built the Streamlit demo for interactive inference",
      "Produced confusion matrix and metrics artifacts",
    ],

    highlights: [
      "90.2% test accuracy across 43 sign classes",
      "No deep learning — pure classical CV pipeline",
      "Interactive Streamlit demo app",
      "Full confusion matrix and metrics exported to results/",
    ],

    links: {
      github: "https://github.com/ahmed-khaled04/traffic-sign-detection",
      demo: "",
      report: "",
      docs: "",
    },

    media: {
      hero: "/projects/traffic/hero.png",
      caption: "",
      gallery: [
        "/projects/traffic/1.png",
        "/projects/traffic/2.png",
        "/projects/traffic/3.png",
      ],
    },
  },
];
