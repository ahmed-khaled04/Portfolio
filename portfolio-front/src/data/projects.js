export const projects = [
  {
    title: "Sync Clash",
    slug: "sync-clash",
    summary:
      "A multiplayer networking game with UDP state synchronization, snapshots, and smooth client-side interpolation.",
    tags: ["Networking", "UDP", "Game Sync"],
    stack: ["Python", "UDP Sockets", "Netem/Wireshark"],
    featured: true,
    links: {
      github: "https://github.com/ahmed-khaled04/Sync-Clash", 
      demo: "",   
    },
  },
  {
    title: "Door Lock Security System (Tiva-C)",
    slug: "door-lock-tivac",
    summary:
      "Dual-ECU embedded security system with password access, UART communication, EEPROM storage, and motor + alarm control.",
    tags: ["Embedded", "Tiva-C", "Security"],
    stack: ["C", "TM4C123", "UART", "EEPROM", "Timers/PWM"],
    featured: true,
    links: {
      github: "https://github.com/ahmed-khaled04/door_lock_security_system",
      demo: "",
    },
  },
  {
    title: "Python Compiler (Lexer + Parser)",
    slug: "python-compiler-lexer-parser",
    summary:
      "A C++ compiler front-end implementing lexical analysis and parsing for a Python-like language.",
    tags: ["Compilers", "C++", "Parsing"],
    stack: ["C++", "Lexer", "Parser"],
    featured: true,
    links: {
      github: "https://github.com/ahmed-khaled04/python_compiler_cpp",
      demo: "",
    },
  },
];
