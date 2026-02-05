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
        caption: "Multiplayer grid snapshot — real-time UDP state synchronization.",
        gallery: [
            "/projects/sync-clash/1.png",
        ],
    },
  },

  {
    title: "Door Lock Security System (Tiva-C)",
    slug: "door-lock-tivac",
    summary:
      "Embedded dual-ECU security system with password authentication, EEPROM storage, and motor control.",

    tags: ["Embedded", "Tiva-C", "Security"],
    stack: ["C", "TM4C123", "UART", "EEPROM", "Timers"],

    featured: true,

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
        caption: "Dual-ECU embedded door-lock system with secure password authentication and motor control (Tiva-C)..",
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
        caption: "C++ compiler front-end implementing lexical analysis and parsing for a Python-like language.",
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
      github: "https://github.com/Saifeldinsais/Agile---University-Management-System",
      demo: "",
      report: "",
      docs: "",
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
      report: "https://github.com/ucouldcallmeEL/RedditClone/blob/main/API_DOCUMENTATION.md",
    },
  },
];
