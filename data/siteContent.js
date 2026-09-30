/**
 * ==============================================================================
 * XD CODE CLUB - MASTER WEBSITE CONTENT CONFIGURATION
 * ==============================================================================
 * 
 * Welcome to the central control file for XD Code Club's official web presence.
 * To change ANY text, links, descriptions, projects, members, rules, or contact
 * details across the entire website, edit the values in this single file.
 * 
 * Table of Contents:
 * 1. club          - General brand, institution, coordinates, & addresses
 * 2. socialLinks   - Discord, LinkedIn, Instagram, GitHub, WhatsApp, etc.
 * 3. forms         - Application portal, registration, & feedback forms
 * 4. navLinks      - Main header & mobile navigation links
 * 5. home          - Hero, What Are We, Featured Projects, Perks, Swag, Team
 * 6. about         - Story, Origin, Core Pillars, Milestones, FAQs, Bottom CTA
 * 7. projects      - Flagship student projects, categories, incubation CTA
 * 8. rules         - Honor Code, Conduct, Lab Discipline, Ethics, Pledge
 * 9. contact       - Channels, form copy, HQ location, meetup schedules
 * 10. members      - Member directory, domains, student profiles & metrics
 * 11. memberProfile- Profile view copy & handle claiming
 * 12. notFound     - 404 signal lost page copy
 * 13. terminal     - Interactive teaser commands & output lines
 * 14. footer       - Standardized footer copyright & links
 * ==============================================================================
 */

import React from "react";

export const siteContent = {
  // ----------------------------------------------------------------------------
  // 1. BRAND & INSTITUTION DETAILS
  // ----------------------------------------------------------------------------
  club: {
    name: "XD Code Club",
    shortName: "XD",
    acronym: "XDCC",
    badgeText: "Official Coding Club - SRCEM",
    motto: "Coding for creativity, curiosity & community.",
    established: "2024",
    currentYear: 2026,
    
    // Parent Institution
    college: "ShriRam College of Engineering & Management",
    collegeShort: "SRCEM",
    group: "ShriRam Group of Colleges",
    groupShort: "SRGOC",
    department: "Department of Computer Science & Engineering",
    affiliation: "ShriRam College of Engineering & Management (SRCEM), ShriRam Group of Colleges (SRGOC), Banmore (near Gwalior), Madhya Pradesh",
    collegeWebsite: "http://srgoc.org/",
    
    // Physical Headquarters & Coordinates
    headquarters: "XD Code Club, Department of Computer Science & Engineering, SRCEM Campus, National Expressway, AB Road, Banmore (near Gwalior), Madhya Pradesh - 476444, India.",
    labName: "XD Code Club",
    address: {
      street: "National Expressway, A.B. Road",
      locality: "Banmore (near Gwalior)",
      region: "Madhya Pradesh",
      postalCode: "476444",
      country: "India",
      countryCode: "IN",
      coordinates: {
        latitude: "26.3547",
        longitude: "78.1189",
      },
    },

    // Logos & Visual Assets
    logo: "/xdcodeclub-logo2.png",
    logoAlt: "XD Code Club Logo",
    globeVisual: "/globe.jpg",
    websiteUrl: "https://xdcodeclub.netlify.app",
  },

  // ----------------------------------------------------------------------------
  // 2. SOCIAL MEDIA & EXTERNAL CHANNELS
  // ----------------------------------------------------------------------------
  socialLinks: {
    discord: "https://discord.com/invite/ugrcasAu5",
    linkedin: "https://www.linkedin.com/company/xd-code-club",
    instagram: "https://www.instagram.com/xdcodeclub",
    github: "https://github.com/XDCodeClub",
    email: "xdcodeclub@gmail.com",
    whatsappNumber: "+91 7879194316",
    whatsappLink: "https://wa.me/917879194316",
    collegeSite: "http://srgoc.org/",
  },

  // ----------------------------------------------------------------------------
  // 3. APPLICATION & REGISTRATION FORMS
  // ----------------------------------------------------------------------------
  forms: {
    membershipRegistration: "https://forms.gle/8q4ZmyutMPViSBaY8",
    projectIdeaSubmission: "https://forms.gle/8q4ZmyutMPViSBaY8",
    handleClaim: "https://forms.gle/8q4ZmyutMPViSBaY8",
  },

  // ----------------------------------------------------------------------------
  // 4. MAIN NAVIGATION
  // ----------------------------------------------------------------------------
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Members", href: "/u" },
    { label: "Rules", href: "/rules" },
    { label: "Contact", href: "/contact" },
  ],

  // ----------------------------------------------------------------------------
  // 5. HOME PAGE
  // ----------------------------------------------------------------------------
  home: {
    meta: {
      title: "XD Code Club | Official Coding Club - SRCEM",
      description:
        "Official coding club of ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior). Coding for creativity, curiosity & community.",
      keywords:
        "XD Code Club, SRCEM, ShriRam College of Engineering & Management, ShriRam Group of Colleges, SRGOC, coding club Banmore, coding club Gwalior, student developer community, student hackathons, DevArena, CampusMate, software engineering mentorship",
    },

    hero: {
      eyebrowWords: ["eat.", "sleep."],
      title: "XD Code Club",
      collegePill: "SRCEM",
      tagline: "Coding for creativity, curiosity & community.",
      joinButtonText: "Join",
      joinButtonMobileText: "Join",
    },

    whatAreWe: {
      eyebrow: "what are we?",
      subtitle:
        "We are the official coding club of ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior)",
      description:
        "XD Code Club is a student-driven software development community that teaches and mentors aspiring coders. We organize 24-hour hackathons, open-source sprints, and peer-to-peer DSA problem-solving sessions. Our mission is to transform theoretical engineering into deployed, impactful software.",
    },

    featuredProjects: {
      title: "Featured Projects",
      subtitle: "Flagship software products built by our student developers.",
      exploreButtonText: "Explore all projects",
      exploreButtonHref: "/projects",
    },

    howToJoin: {
      title: "how can i join?",
      description:
        "Membership is open to all enthusiastic coders across all engineering branches at SRCEM. You can fill out our official registration form or join our active Discord community.",
      buttonText: "Register for Membership",
    },

    perks: {
      title: "perks of being an XD Coder",
      paragraph1:
        "Members receive structured guidance throughout their engineering journey—from first-year DSA fundamentals to high-stakes MNC interview preparation and national hackathons.",
      paragraph2:
        "Gain direct access to exclusive workshops led by industry software engineers, internal project incubator grants, and verified alumni referral networks.",
      cherryHeading: "and the cherry on the cake ✨",
      cherrySubtitle: "Active XD Coding Club members earn these official swag goodies:",
      swags: [
        {
          title: "Club T-Shirt",
          subtitle: "Signature Black Edition",
          image: "/14.png",
          glowColor: "purple",
        },
        {
          title: "Sticker Pack",
          subtitle: "Die-Cut Dev Vinyls",
          image: "/12.png",
          glowColor: "blue",
        },
        {
          title: "Member Kit",
          subtitle: "Custom Badges & Notebook",
          image: "/13.png",
          glowColor: "emerald",
        },
      ],
    },

    benefits: {
      title: "benefits of joining 🤔",
      subtitle: "Why students choose XD Code Club at SRCEM:",
      list: [
        "Collaborating with passionate peer developers and learning modern frameworks.",
        "Teaching others to reinforce your own deep software fundamentals.",
        "Building essential leadership, teamwork, public speaking, and project management skills.",
        "Networking with students across other institutions and technical communities.",
        "Direct mentorship and referral access from alumni working at top tech firms.",
        "Opportunities to compete in hackathons and sponsored technical contests.",
      ],
    },

    team: {
      title: "#team",
      executiveSubtitle: "Executive Leadership",
      executives: [
        {
          name: "Amit Mahor",
          role: "Vice President",
          subRole: "(XD Code Club, SRCEM)",
          avatar: "/logo.png",
          linkedin: "https://www.linkedin.com/in/amitmahor/",
          linktree: "https://linktr.ee/amitmahor",
        },
        {
          name: "Jeevesh Para",
          role: "Technical Head",
          subRole: "(XD Code Club, SRCEM)",
          avatar: "/jeevesh.jpg",
          linkedin: "https://www.linkedin.com/in/jeeveshpara/",
          linktree: "https://linktr.ee/jeeveshpara",
        },
      ],
      coreCouncilHeading: "core engineering council",
      coreCouncilSubtitle:
        "Student leads driving development, workshops, and community events.",
      council: [
        {
          name: "Tanish Rathore",
          role: "Full Stack Lead",
          avatar: "/tanish.jpg",
          color: "purple",
        },
        {
          name: "Suraj Sharma",
          role: "Open Source Lead",
          avatar: "/suraj.jpg",
          color: "blue",
        },
        {
          name: "Rahul Kumar",
          role: "Systems & DevOps",
          avatar: "/rahul.jpeg",
          color: "emerald",
        },
        {
          name: "Saniya Mirza",
          role: "UI/UX & Design",
          initials: "SM",
          color: "amber",
        },
        {
          name: "Ananya Sharma",
          role: "DSA & Contests",
          initials: "AS",
          color: "rose",
        },
        {
          name: "Yash Pathak",
          role: "IoT & Hardware",
          initials: "YP",
          color: "cyan",
        },
      ],
    },
  },

  // ----------------------------------------------------------------------------
  // 6. ABOUT PAGE
  // ----------------------------------------------------------------------------
  about: {
    meta: {
      title: "About Us | XD Code Club - SRCEM",
      description:
        "Learn about XD Code Club, SRCEM—our story, core pillars, milestones, and how we empower student developers to build production software.",
      ogDescription:
        "Discover how XD Code Club bridges classroom theory and real-world software engineering through hackathons, open source, and peer mentorship.",
    },

    hero: {
      eyebrow: "The Origin & Mission",
      title: "About Us",
      headline: "Building SRCEM’s most fearless developer guild.",
      description:
        "XD Code Club was founded with a singular conviction: engineering should be defined by what you build, not just the exams you write. Born at ShriRam College of Engineering & Management (SRCEM, ShriRam Group of Colleges, Banmore near Gwalior), we are a tight-knit ecosystem of builders, mentors, designers, and innovators pushing each other to master modern technologies.",
      stats: [
        { value: "300+", label: "Community Members", color: "text-blue-400" },
        { value: "15+", label: "Production Projects", color: "text-purple-400" },
        { value: "4x", label: "National Hackathon Wins", color: "text-emerald-400" },
        { value: "100%", label: "Peer Mentored", color: "text-amber-400" },
      ],
    },

    pillars: {
      heading: "What We Stand For",
      subtitle: "Our three foundational pillars that define every XD Coder.",
      items: [
        {
          title: "Build in Public",
          description:
            "We champion shipping code openly. Every student repo, design file, and architecture document is made accessible so others can learn and build upon it.",
          tag: "#OpenSource #ShipFast",
          color: "blue",
        },
        {
          title: "Radical Inclusivity",
          description:
            "Code knows no branch boundaries. Whether you are CSE, IT, Mechanical, or Civil, if you have curiosity, there is an open workstation and a mentor for you.",
          tag: "#ZeroGatekeeping #AllBranches",
          color: "purple",
        },
        {
          title: "Production Standards",
          description:
            "We don't stop at theoretical textbook exercises. We run Docker sandboxes, implement CI/CD, conduct code reviews, and ship applications used by actual campus students.",
          tag: "#CleanCode #RealImpact",
          color: "emerald",
        },
      ],
    },

    journey: {
      heading: "Our Journey & Milestones",
      subtitle: "How XD Code Club evolved from an idea into SRCEM's flagship developer hub.",
      milestones: [
        {
          year: "2023 • FOUNDING PHASE",
          title: "The Seed at SRCEM",
          description:
            "Founded by passionate computer science undergraduates who wanted to break out of ordinary curricula and create a high-energy space where students build software together every single week.",
          color: "blue",
        },
        {
          year: "2024 • RAPID GROWTH",
          title: "First Hackathon & 150+ Members",
          description:
            "Organized our first internal 24-Hour Code Sprint, launched our Discord server, and sent teams to national hackathons, winning our first inter-college trophy.",
          color: "purple",
        },
        {
          year: "2025 • PRODUCT INCUBATION",
          title: "CampusMate & DevArena Launch",
          description:
            "Formally established the XD Product Incubator. Student teams engineered and deployed CampusMate for college resource sharing and DevArena for online multiplayer DSA duels.",
          color: "emerald",
        },
        {
          year: "2026 & BEYOND • HORIZONS",
          title: "Autonomous AI & Web3 Expansion",
          description:
            "Pioneering cutting-edge research tracks in generative AI copilot agents, decentralized IPFS media protocols, and student fellowship grants.",
          color: "amber",
        },
      ],
    },

    guilds: {
      heading: "Tech Guilds & Domains",
      subtitle: "The core engineering tracks our mentors teach and build in.",
      items: [
        {
          icon: "⚡",
          title: "Full-Stack Web",
          description: "Scalable, responsive web applications with rich user interfaces.",
          tags: ["Next.js", "React", "Node.js", "TailwindCSS", "Docker"],
          color: "blue",
        },
        {
          icon: "🧠",
          title: "AI & Machine Learning",
          description: "Applied NLP, ATS resume parsers, copilot agents, and LLMs.",
          tags: ["Python", "FastAPI", "LangChain", "OpenAI", "PyTorch"],
          color: "purple",
        },
        {
          icon: "🌐",
          title: "Web3 & Systems",
          description: "Decentralized contracts, peer-to-peer storage, and IoT beacons.",
          tags: ["Solidity", "Polygon", "IPFS", "ESP32", "C++"],
          color: "emerald",
        },
      ],
    },

    quickHelp: {
      text: "Have a different question? Visit us in",
      room: "XD Code Club",
      actionText: "Contact Page",
      actionHref: "/contact",
    },

    faqs: [
      {
        id: "experience",
        question: "Do I need prior coding or DSA experience before joining?",
        answer:
          "Not at all! XD Code Club welcomes students at every stage of their technical journey. Whether you are a total beginner writing your first 'Hello World' in C or Python, or an experienced full-stack developer, our senior mentors guide you through foundational tracks, logic building, and hands-on beginner sprint workshops.",
        category: "Membership",
      },
      {
        id: "free",
        question: "Is membership free for all SRCEM engineering students?",
        answer:
          "Yes, 100% free. XD Code Club is a student-run technical community under ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior). We do not charge any membership fees or registration dues. All workshop sessions, hackathons, and mentorship initiatives are fully accessible to enrolled students.",
        category: "Access",
      },
      {
        id: "hackathons",
        question: "How are teams formed for Smart India Hackathon (SIH) and external hackathons?",
        answer:
          "We run internal 'Team Matchmaking & Ideation Mixers' prior to major hackathons. Senior council members review project problem statements, evaluate individual skill strengths (frontend, backend, AI/ML, pitch presentation), and form balanced cross-functional teams with assigned mentor guidance.",
        category: "Hackathons",
      },
      {
        id: "perks",
        question: "What hardware, cloud credits, or lab perks do members receive?",
        answer:
          "Active members get prioritized access to SRCEM Lab 304, high-speed campus fiber connectivity, IoT development boards (ESP32, Arduino kits, sensor modules), project incubation server compute, and official club swag goodies (die-cut dev stickers, member badges, and club t-shirts).",
        category: "Perks & Lab",
      },
      {
        id: "branches",
        question: "Can non-CSE / non-IT branch students join?",
        answer:
          "Absolutely! We believe some of the most innovative software emerges from interdisciplinary collaboration. Students from Mechanical, Civil, Electrical, and Management branches are actively coding with us—contributing to hardware automation, product design, and software systems.",
        category: "Inclusivity",
      },
      {
        id: "incubator",
        question: "How do I pitch my project idea to the XD Incubator?",
        answer:
          "Any member can submit a 1-page design proposal or prototype via our Discord #project-incubator channel or directly talk with Technical Head Jeevesh Para or VP Amit Mahor in Lab 304. Selected projects receive dedicated peer contributors, cloud infrastructure, and showcase slots on our official website.",
        category: "Incubator",
      },
    ],

    cta: {
      heading: "Ready to Level Up Your Engineering Career?",
      description:
        "Whether you just wrote your first \"Hello World\" or you're deploying distributed microservices, there is a seat for you at our table. Learn, collaborate, and build with us.",
      primaryButtonText: "Join XD Code Club",
      secondaryButtonText: "Meet the Team",
    },
  },

  // ----------------------------------------------------------------------------
  // 7. PROJECTS PAGE & FLAGSHIP PRODUCTS
  // ----------------------------------------------------------------------------
  projects: {
    meta: {
      title: "Projects | XD Code Club - SRCEM",
      description:
        "Explore open-source, hackathon-winning, AI agents, and full-stack projects built by the student engineers of XD Code Club, SRCEM.",
      ogDescription:
        "Multiplayer DSA battlegrounds, AI resume analyzers, campus automation ERPs, and Web3 protocols built by SRCEM coders.",
    },

    hero: {
      eyebrow: "Engineering Showcase",
      title: "Projects",
      subtitle: "Software Engineered by Students, Deployed for Impact.",
      description:
        "Every line of code in these projects was conceived, architected, and shipped by students of ShriRam College of Engineering & Management (SRCEM, ShriRam Group of Colleges, Banmore near Gwalior). From high-concurrency multiplayer DSA arenas to AI resume analyzers, our repositories solve real student and developer problems.",
      stats: [
        { label: "Active Repos", value: "15+" },
        { label: "Combined Users", value: "5k+" },
        { label: "Hackathon Podiums", value: "4" },
        { label: "Open Source", value: "100%" },
      ],
    },

    categories: ["All", "Web Apps", "AI & ML", "Web3", "IoT & Systems"],

    list: [
      {
        id: "devarena",
        title: "DevArena",
        subtitle: "Real-time Code Battles & Arena",
        category: "Web Apps",
        badge: "Featured 🚀",
        badgeColor: "from-purple-600 to-indigo-600 text-purple-100",
        description:
          "A competitive multiplayer code battleground where students challenge peers in real-time DSA duels, featuring automated test suites and live Elo ranking.",
        tags: ["Next.js", "Node.js", "Docker", "Socket.io", "TailwindCSS"],
        highlights: ["Interactive Monaco code editor", "Sandboxed Docker test runner", "Live spectator mode"],
        contributors: "Jeevesh Para & Dev Guild",
        liveUrl: "https://github.com/XDCodeClub",
        githubUrl: "https://github.com/XDCodeClub",
        stats: "2.4k Duels Played",
        gradient: "from-blue-600/30 via-indigo-900/40 to-black/80",
        accentGlow: "group-hover:border-indigo-500/60",
        featured: true,
      },
      {
        id: "campusmate",
        title: "SRCEM CampusMate",
        subtitle: "College ERP & Resource Hub",
        category: "Web Apps",
        badge: "Campus Utility 🎓",
        badgeColor: "from-emerald-600 to-teal-700 text-emerald-100",
        description:
          "An all-in-one digital companion for SRCEM engineering students. Centralizes lecture notes, previous year question papers, attendance forecast, and campus notices.",
        tags: ["React", "Firebase", "Express", "TailwindCSS", "PWA"],
        highlights: ["Verified PYQ archive", "Smart 75% attendance calculator", "Peer notes marketplace"],
        contributors: "Amit Mahor & Team",
        liveUrl: "https://github.com/XDCodeClub",
        githubUrl: "https://github.com/XDCodeClub",
        stats: "1.2k+ Active Students",
        gradient: "from-teal-600/30 via-emerald-900/40 to-black/80",
        accentGlow: "group-hover:border-teal-500/60",
        featured: true,
      },
      {
        id: "cogniscan",
        title: "CogniScan AI",
        subtitle: "Smart ATS & Voice Interview Copilot",
        category: "AI & ML",
        badge: "Hackathon Winner 🏆",
        badgeColor: "from-amber-600 to-yellow-600 text-amber-100",
        description:
          "Won 1st Place at National Hackathon. Evaluates engineering resumes against job descriptions with NLP embeddings and provides AI voice mock interview drills.",
        tags: ["Python", "FastAPI", "Next.js", "LangChain", "OpenAI"],
        highlights: ["Semantic resume scoring", "Real-time speech feedback", "Instant fix recommendations"],
        contributors: "XD AI Research Guild",
        liveUrl: "https://github.com/XDCodeClub",
        githubUrl: "https://github.com/XDCodeClub",
        stats: "98% ATS Match Accuracy",
        gradient: "from-amber-600/30 via-yellow-900/40 to-black/80",
        accentGlow: "group-hover:border-amber-500/60",
        featured: false,
      },
      {
        id: "nucast-dstream",
        title: "Nucast dStream",
        subtitle: "Web3 Decentralized Media Protocol",
        category: "Web3",
        badge: "Grant Winner ⚡",
        badgeColor: "from-violet-600 to-purple-800 text-purple-100",
        description:
          "Preserves cultural & public-domain student cinema permanently on IPFS with verifiable copyright provenance on Polygon, allowing fans to support creators directly.",
        tags: ["Solidity", "Polygon", "IPFS", "Ethers.js", "Next.js"],
        highlights: ["Decentralized media storage", "Low-gas micro-patronage", "Zero-censorship player"],
        contributors: "XD Web3 Chapter",
        liveUrl: "https://github.com/XDCodeClub",
        githubUrl: "https://github.com/XDCodeClub",
        stats: "Over 500+ NFTs Minted",
        gradient: "from-purple-700/30 via-fuchsia-950/40 to-black/80",
        accentGlow: "group-hover:border-violet-500/60",
        featured: false,
      },
      {
        id: "codesphere3d",
        title: "CodeSphere 3D",
        subtitle: "Interactive 3D Portfolio Engine",
        category: "Web Apps",
        badge: "Open Source 🌟",
        badgeColor: "from-cyan-600 to-blue-700 text-cyan-100",
        description:
          "An open-source portfolio generator that turns raw GitHub profiles into futuristic cyberpunk 3D spatial workstations with interactive mini-games and CLI terminals.",
        tags: ["Three.js", "React Three Fiber", "Next.js", "GLSL"],
        highlights: ["Real-time 3D lighting shaders", "Live GitHub contribution graph", "Custom theme synthesizer"],
        contributors: "Tanish Rathore & Core",
        liveUrl: "https://github.com/XDCodeClub",
        githubUrl: "https://github.com/XDCodeClub",
        stats: "350+ GitHub Stars",
        gradient: "from-cyan-600/30 via-sky-950/40 to-black/80",
        accentGlow: "group-hover:border-cyan-500/60",
        featured: false,
      },
      {
        id: "pulsetrack",
        title: "PulseTrack IoT",
        subtitle: "Smart Campus BLE Attendance",
        category: "IoT & Systems",
        badge: "Hardware Prototype 📡",
        badgeColor: "from-rose-600 to-red-800 text-rose-100",
        description:
          "A contactless lab and classroom check-in system utilizing ESP32 microcontroller beacons and encrypted Bluetooth Low Energy pings with automated attendance logs.",
        tags: ["ESP32", "C++", "Next.js", "PostgreSQL", "MQTT"],
        highlights: ["Sub-second beacon sync", "Anti-proxy biometric handshake", "Admin analytics dashboard"],
        contributors: "Hardware & Systems Wing",
        liveUrl: "https://github.com/XDCodeClub",
        githubUrl: "https://github.com/XDCodeClub",
        stats: "99.4% Sync Reliability",
        gradient: "from-rose-600/30 via-red-950/40 to-black/80",
        accentGlow: "group-hover:border-rose-500/60",
        featured: false,
      },
    ],

    ideaCta: {
      title: "Have an Idea for the next XD Project?",
      description:
        "XD Code Club incubates student projects from ideation to deployment. Receive guidance from alumni software developers, cloud resources, code reviews, and a passionate team to build with.",
      primaryButtonText: "Submit Project Idea",
      secondaryButtonText: "Pitch on Discord",
    },
  },

  // ----------------------------------------------------------------------------
  // 8. RULES & CODE OF CONDUCT PAGE
  // ----------------------------------------------------------------------------
  rules: {
    meta: {
      title: "Rules & Code of Conduct | XD Code Club - SRCEM",
      description:
        "Official rules, workspace discipline, and ethical standards for all members of XD Code Club at ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior).",
      ogDescription:
        "Mutual respect, lab discipline, fact-checking integrity, and the XD Code of Honor.",
    },

    hero: {
      eyebrow: "Standards of Excellence",
      title: "Club Rules",
      subtitle: "Code of Conduct & Workspace Guidelines.",
      description:
        "Every member of XD Code Club at ShriRam College of Engineering & Management (SRCEM, ShriRam Group of Colleges, Banmore near Gwalior) is expected to uphold these professional standards. We build high-impact software through mutual respect, uncompromising integrity, and technical discipline.",
    },

    sections: [
      {
        number: "SECTION 01",
        title: "Community & Conduct",
        icon: "🤝",
        color: "purple",
        tag: "#MutualRespect #Inclusivity",
        summary: "Our guild is built on collaborative growth and psychological safety.",
        rules: [
          {
            title: "Mutual Respect",
            text: "Respect every member's ideas, backgrounds, and coding proficiency levels.",
          },
          {
            title: "Constructive Feedback",
            text: "Be receptive to code reviews, constructive critique, and mentorship.",
          },
          {
            title: "Zero Toxicity",
            text: "Strict zero-tolerance policy towards harassment, discrimination, or gatekeeping.",
          },
          {
            title: "Help Newcomers",
            text: "Be willing to teach what you know and assist juniors in their learning journey.",
          },
        ],
      },
      {
        number: "SECTION 02",
        title: "Lab & Sprint Discipline",
        icon: "💻",
        color: "blue",
        tag: "#SprintDiscipline #LabEtiquette",
        summary: "Engineering excellence requires commitment, punctuality, and clean habits.",
        rules: [
          {
            title: "Punctuality & Schedules",
            text: "Be aware of the club’s meeting timetable, sprint milestones, and location in Lab 304.",
          },
          {
            title: "Active Sprint Participation",
            text: "Actively engage in hackathons, workshops, and team pair programming sessions.",
          },
          {
            title: "Workspace Hygiene",
            text: "Treat campus computer labs, hardware kits, and club peripherals with care.",
          },
          {
            title: "Clean Repositories",
            text: "Follow Git hygiene: write descriptive commit messages and meaningful PR descriptions.",
          },
        ],
      },
      {
        number: "SECTION 03",
        title: "Ethics & Integrity",
        icon: "🛡️",
        color: "emerald",
        tag: "#AcademicHonesty #EthicalHacking",
        summary: "We code responsibly and champion genuine intellectual ownership.",
        rules: [
          {
            title: "Fact-Checking & Truth",
            text: "Always verify claims, benchmark results, and tech documentation thoroughly.",
          },
          {
            title: "No Plagiarism",
            text: "Never pass off others' code as your own without proper licensing and attribution.",
          },
          {
            title: "Responsible Open Source",
            text: "Do not commit proprietary tokens, private API keys, or exploit vulnerabilities.",
          },
          {
            title: "Reputation Stewardship",
            text: "Represent SRCEM with pride and professionalism in all hackathons and competitions.",
          },
        ],
      },
    ],

    pledge: {
      eyebrow: "Member Commitment",
      title: "The XD Developer's Honor Pledge",
      quote:
        '"I commit to writing clean code, mentoring my peers, respecting my lab, and building technology that serves society with integrity."',
      acceptText: "I Accept the Honor Pledge",
      acceptedText: "Honor Pledge Signed",
      footerNote: "Digital signature logged for the 2025–2026 Academic Term.",
    },
  },

  // ----------------------------------------------------------------------------
  // 9. CONTACT PAGE & DISPATCH
  // ----------------------------------------------------------------------------
  contact: {
    meta: {
      title: "Contact | XD Code Club - SRCEM",
      description:
        "Connect with XD Code Club, SRCEM for collaborations, queries, sponsorships, and technical workshops. Reach us via WhatsApp, email, LinkedIn, or Discord.",
      ogDescription:
        "Get in touch with student tech leadership at ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior).",
    },

    hero: {
      eyebrow: "Reach Out to the Guild",
      title: "Contact Us",
      subtitle: "Got a question, project proposal, or want to collaborate? We're all ears.",
    },

    channels: [
      {
        title: "Discord Guild",
        status: "Active 🟢",
        description:
          "Join 250+ student coders in daily voice chats, code reviews, and project collaboration.",
        actionText: "Join Discord Channel",
        href: "https://discord.com/invite/ugrcasAu5",
        icon: "https://img.icons8.com/ios-filled/50/FFFFFF/discord--v1.png",
        color: "indigo",
      },
      {
        title: "LinkedIn Network",
        status: "Official 💼",
        description:
          "Connect with student leaders, explore official announcements, and engage with alumni across MNCs.",
        actionText: "Follow on LinkedIn",
        href: "https://www.linkedin.com/company/xd-code-club",
        icon: "https://img.icons8.com/ios-filled/50/FFFFFF/linkedin--v1.png",
        color: "blue",
      },
      {
        title: "Direct Inquiries",
        status: "< 24h reply ⚡",
        description:
          "Immediate assistance for official collaborations, event partnerships, and inquiries.",
        email: "xdcodeclub@gmail.com",
        phone: "+91 7879194316",
        whatsappHref: "https://wa.me/917879194316",
        color: "emerald",
      },
    ],

    form: {
      eyebrow: "Instant Message",
      title: "Send Us a Dispatch",
      subtitle:
        "Fill in the details below and a club lead will get back to your inbox promptly.",
      submitButtonText: "Send Message",
      submittingButtonText: "Dispatching...",
      successTitle: "Message Dispatched!",
      successMessage:
        "Thank you for reaching out. The XD Code Club leadership has received your inquiry and will follow up shortly.",
      resetButtonText: "Send Another Dispatch",
      subjects: [
        "General Query",
        "Membership Question",
        "Project Proposal / Incubator",
        "Sponsorship / Partnership",
        "Hackathon Team Collaboration",
      ],
    },

    coordinates: {
      eyebrow: "Campus Base",
      title: "Headquarters",
      college: "ShriRam College of Engineering & Management (SRCEM)",
      group: "Part of ShriRam Group of Colleges (SRGOC)",
      department: "Department of Computer Science & Engineering",
      addressLines: [
        "Department of Computer Science & Engineering",
        "National Expressway, A.B. Road",
        "Banmore (near Gwalior), Madhya Pradesh – 476444, India",
      ],
      labPill: "📍 XD Code Club",
      collegeSiteLabel: "SRCEM Official Site:",
      collegeSiteUrl: "http://srgoc.org/",
      collegeSiteDisplay: "srgoc.org ↗",
    },

    weeklyMeets: {
      title: "Weekly Code Sprints",
      description:
        "We host weekly physical coding meetups every Wednesday & Saturday at the SRCEM campus, along with Sunday evening Discord voice hack nights.",
      schedules: [
        { label: "Wednesdays: 3:30 PM", location: "Lab 304" },
        { label: "Sundays: 8:00 PM (Online)", location: "Discord Voice" },
      ],
    },
  },

  // ----------------------------------------------------------------------------
  // 10. MEMBERS DIRECTORY
  // ----------------------------------------------------------------------------
  members: {
    meta: {
      title: "Member Registry & Builders | XD Code Club - SRCEM",
      description:
        "Meet the student developers, software architects, and open-source contributors of XD Code Club at ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior).",
      ogDescription:
        "Explore student profiles, technical skills, and project contributions from XD Code Club engineers at SRCEM.",
    },

    hero: {
      eyebrow: "Student Developers & Leaders",
      title: "Member Registry",
      subtitle: "The Minds Architecting Code at SRCEM.",
      description:
        "From first-year tinkerers to senior full-stack architects, meet the student builders driving open-source software, hackathons, and research at ShriRam College of Engineering & Management (SRCEM, ShriRam Group of Colleges, Banmore near Gwalior).",
      searchPlaceholder:
        "Search member by name, role, or tech stack (e.g. Next.js, Docker, Python)...",
    },

    domains: ["All", "Executive", "Full-Stack", "DevOps & Systems", "Design", "AI & ML", "IoT"],

    list: [
      {
        slug: "jeevesh",
        name: "Jeevesh Para",
        role: "Technical Head",
        domain: "Executive",
        badge: "Core Architect ⚡",
        badgeColor: "from-purple-600 to-indigo-600 text-purple-100",
        avatar: "/jeevesh.jpg",
        bio: "Full-stack software architect specializing in distributed real-time systems, Docker sandboxing, and Next.js applications. Leading DevArena and internal club infrastructure.",
        skills: ["Next.js", "Node.js", "Docker", "Socket.io", "PostgreSQL", "TailwindCSS"],
        projects: ["DevArena", "XD Code Club Portal", "Mesh Network"],
        metrics: { projects: 8, hackathons: 6, codeStreak: "180+ Days" },
        links: {
          github: "https://github.com/jeeveshpara",
          linkedin: "https://www.linkedin.com/in/jeeveshpara/",
          linktree: "https://linktr.ee/jeeveshpara",
        },
      },
      {
        slug: "amit",
        name: "Amit Mahor",
        role: "Vice President",
        domain: "Executive",
        badge: "Club Leadership 🎓",
        badgeColor: "from-blue-600 to-cyan-600 text-blue-100",
        avatar: "/logo.png",
        bio: "Driving student tech culture and community mentorship across SRCEM. Full-stack developer leading the SRCEM CampusMate student resource portal.",
        skills: ["React", "Firebase", "Express", "REST APIs", "Community Ops"],
        projects: ["SRCEM CampusMate", "Attendance Predictor"],
        metrics: { projects: 6, hackathons: 4, codeStreak: "120+ Days" },
        links: {
          github: "https://github.com/amitmahor",
          linkedin: "https://www.linkedin.com/in/amitmahor/",
          linktree: "https://linktr.ee/amitmahor",
        },
      },
      {
        slug: "tanish",
        name: "Tanish Rathore",
        role: "Full Stack Lead",
        domain: "Full-Stack",
        badge: "3D & Shaders 🌟",
        badgeColor: "from-cyan-600 to-blue-700 text-cyan-100",
        avatar: "/tanish.jpg",
        bio: "Crafting spatial web experiences, Three.js shaders, and interactive frontend engines. Lead builder on the open-source CodeSphere 3D portfolio generator.",
        skills: ["Three.js", "React Three Fiber", "Next.js", "GLSL", "TypeScript"],
        projects: ["CodeSphere 3D", "WebVR Workstation"],
        metrics: { projects: 7, hackathons: 5, codeStreak: "140+ Days" },
        links: {
          github: "https://github.com/XDCodeClub",
          linkedin: "https://www.linkedin.com/company/xd-code-club",
        },
      },
      {
        slug: "suraj",
        name: "Suraj Sharma",
        role: "Open Source Lead",
        domain: "Full-Stack",
        badge: "OSS Advocate 🐙",
        badgeColor: "from-emerald-600 to-teal-700 text-emerald-100",
        avatar: "/suraj.jpg",
        bio: "Passionate open-source maintainer and web developer. Mentoring freshmen in git workflows, code hygiene, and building community-driven software tools.",
        skills: ["React", "Next.js", "Git", "GitHub Actions", "TailwindCSS"],
        projects: ["XD Git Workshops", "Community Templates"],
        metrics: { projects: 5, hackathons: 3, codeStreak: "95+ Days" },
        links: {
          github: "https://github.com/XDCodeClub",
          linkedin: "https://www.linkedin.com/company/xd-code-club",
        },
      },
      {
        slug: "rahul",
        name: "Rahul Kumar",
        role: "Systems & DevOps Lead",
        domain: "DevOps & Systems",
        badge: "Infra Engineer 🛠️",
        badgeColor: "from-rose-600 to-red-700 text-rose-100",
        avatar: "/rahul.jpeg",
        bio: "Containerizing student workloads, managing self-hosted club server nodes, and ensuring continuous delivery across hackathon sprint pipelines.",
        skills: ["Linux", "Docker", "Python", "CI/CD", "PostgreSQL", "Nginx"],
        projects: ["Lab 304 Cluster", "Docker Sandbox Daemon"],
        metrics: { projects: 5, hackathons: 4, codeStreak: "110+ Days" },
        links: {
          github: "https://github.com/XDCodeClub",
          linkedin: "https://www.linkedin.com/company/xd-code-club",
        },
      },
      {
        slug: "saniya",
        name: "Saniya Mirza",
        role: "UI/UX & Design Lead",
        domain: "Design",
        badge: "Design Systems 🎨",
        badgeColor: "from-amber-600 to-yellow-600 text-amber-100",
        avatar: null,
        initials: "SM",
        bio: "Designing cyberpunk glassmorphic interfaces, interactive design systems, and delightful student UX workflows across all XD Code Club products.",
        skills: ["Figma", "Design Tokens", "Wireframing", "TailwindCSS", "CSS Animations"],
        projects: ["XD Design System", "Club Merch & Badges"],
        metrics: { projects: 6, hackathons: 3, codeStreak: "80+ Days" },
        links: {
          github: "https://github.com/XDCodeClub",
          linkedin: "https://www.linkedin.com/company/xd-code-club",
        },
      },
      {
        slug: "ananya",
        name: "Ananya Sharma",
        role: "DSA & Contests Lead",
        domain: "AI & ML",
        badge: "Competitive Coder 🏆",
        badgeColor: "from-fuchsia-600 to-pink-600 text-pink-100",
        avatar: null,
        initials: "AS",
        bio: "Solving algorithmic challenges and hosting weekly DSA mock duels. Guiding students in dynamic programming, graphs, and MNC interview problem sets.",
        skills: ["C++", "Python", "Data Structures", "Algorithms", "Problem Solving"],
        projects: ["Weekly DSA Sprint", "Interview Problem Sheets"],
        metrics: { projects: 4, hackathons: 4, codeStreak: "210+ Days" },
        links: {
          github: "https://github.com/XDCodeClub",
          linkedin: "https://www.linkedin.com/company/xd-code-club",
        },
      },
      {
        slug: "yash",
        name: "Yash Pathak",
        role: "IoT & Hardware Lead",
        domain: "IoT",
        badge: "Hardware Hacker 📡",
        badgeColor: "from-indigo-600 to-purple-800 text-indigo-100",
        avatar: null,
        initials: "YP",
        bio: "Connecting microcontrollers, Bluetooth Low Energy beacons, and MQTT message brokers to modern Next.js dashboards for campus automation.",
        skills: ["ESP32", "Arduino", "C++", "MQTT", "BLE Protocols", "Sensors"],
        projects: ["PulseTrack IoT", "Smart Lab Monitor"],
        metrics: { projects: 5, hackathons: 3, codeStreak: "75+ Days" },
        links: {
          github: "https://github.com/XDCodeClub",
          linkedin: "https://www.linkedin.com/company/xd-code-club",
        },
      },
    ],

    claimCta: {
      eyebrow: "Student Engineers at SRCEM",
      title: "Want to Claim Your Official Slug?",
      description:
        "Join XD Code Club, collaborate on open-source sprints, and get your developer card showcased in our official campus registry.",
      buttonText: "Apply for Membership",
    },
  },

  // ----------------------------------------------------------------------------
  // 11. INDIVIDUAL MEMBER PROFILE ([slug].js)
  // ----------------------------------------------------------------------------
  memberProfile: {
    unclaimed: {
      eyebrow: "Unclaimed Student Slug",
      description:
        "This member profile has not been activated yet. If you are an engineering student at Shri Ram College of Engineering & Management, you can claim this handle by joining XD Code Club.",
      claimButtonText: "Claim Handle & Join",
      browseAllButtonText: "Browse All Members",
    },
    backButtonText: "← Back to Member Registry",
    badgeButtonText: "View Official ID Badge 🪪",
  },

  // ----------------------------------------------------------------------------
  // 12. 404 NOT FOUND PAGE
  // ----------------------------------------------------------------------------
  notFound: {
    meta: {
      title: "404: Signal Lost | XD Code Club - SRCEM",
      description:
        "The coordinates you requested do not exist in the XD Code Club node mesh. Return to headquarters.",
    },
    eyebrow: "Error 404: Node Disconnected",
    title: "Lost in the Code Mesh",
    description:
      "The route coordinates you transmitted cannot be resolved on the XD Code Club network. The page may have been deprecated, refactored, or quarantined.",
    returnButtonText: "Return to Base (Home)",
    tipText:
      "Tip: Navigate using the navbar above or explore our flagship open-source repositories at /projects.",
  },

  // ----------------------------------------------------------------------------
  // 13. TERMINAL TEASER COMPONENT
  // ----------------------------------------------------------------------------
  terminal: {
    title: "Terminal",
    initialLogs: [
      { type: "info", text: "> Antigravity Terminal v2.4 initialized." },
      {
        type: "info",
        text: "> Type 'help' or click suggestions below to run live commands.",
      },
    ],
    statusLines: [
      "> Connecting to SRCEM Node... Connected (4ms)",
      "> Active Pods: DevArena, CampusMate, CogniScan",
      "> Ready to ship. Join the guild!",
    ],
    projectLines: [
      "> [1] DevArena - Real-time DSA Duel Arena (Next.js + Docker)",
      "> [2] SRCEM CampusMate - Academic ERP for 1.2k+ students",
      "> [3] CogniScan AI - ATS Resume & Mock Interview Copilot",
      "> View all at /projects",
    ],
    joinLines: [
      "> Opening official membership registration form...",
      "> Link: https://forms.gle/8q4ZmyutMPViSBaY8",
    ],
    teamLines: [
      "> Vice President: Amit Mahor",
      "> Technical Head: Jeevesh Para",
      "> Core Council: Tanish, Suraj, Rahul, Saniya, Ananya, Yash",
    ],
    helpCommands: [
      { cmd: "xd --status", desc: "Query live club nodes" },
      { cmd: "xd --projects", desc: "List flagship student software" },
      { cmd: "xd --join", desc: "Registration link" },
      { cmd: "xd --team", desc: "Council leadership" },
      { cmd: "clear", desc: "Clear screen" },
    ],
  },

  // ----------------------------------------------------------------------------
  // 14. FOOTER
  // ----------------------------------------------------------------------------
  footer: {
    brandText: "XD",
    brandSubText: " Code Club, SRCEM",
    copyright: "© XD Code Club 2026, SRCEM. All Rights Reserved.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/xd-code-club", isExternal: true },
      { label: "Discord", href: "https://discord.com/invite/ugrcasAu5", isExternal: true },
      { label: "About", href: "/about", isExternal: false },
      { label: "Projects", href: "/projects", isExternal: false },
      { label: "Rules", href: "/rules", isExternal: false },
      { label: "Contact", href: "/contact", isExternal: false },
    ],
  },
};

// Convenient Named Exports for Direct Component Import
export const SITE_CONTENT = siteContent;
export const MEMBERS_DATA = siteContent.members.list;
export const DEMO_PROJECTS = siteContent.projects.list;
export const FAQS_DATA = siteContent.about.faqs;
export const RULES_DATA = siteContent.rules.sections;
export const NAV_LINKS = siteContent.navLinks;
export const SOCIAL_LINKS = siteContent.socialLinks;
export const FORMS = siteContent.forms;
export const CLUB_INFO = siteContent.club;

export default siteContent;
