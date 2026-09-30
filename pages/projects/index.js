import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { ProjectsJsonLd } from "../../components/SEO/JsonLd";

const DEMO_PROJECTS = [
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
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const CATEGORIES = ["All", "Web Apps", "AI & ML", "Web3", "IoT & Systems"];

export default function Projects() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = DEMO_PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Projects | XD Code Club - SRCEM</title>
        <meta
          name="description"
          content="Explore open-source, hackathon-winning, AI agents, and full-stack projects built by the student engineers of XD Code Club, SRCEM."
        />
        <meta property="og:title" content="Projects | XD Code Club - SRCEM" />
        <meta
          property="og:description"
          content="Multiplayer DSA battlegrounds, AI resume analyzers, campus automation ERPs, and Web3 protocols built by SRCEM coders."
        />
        <link rel="canonical" href="https://xdcodeclub.netlify.app/projects" />
        <meta property="og:url" content="https://xdcodeclub.netlify.app/projects" />
        <meta property="og:image" content="/xdcodeclub-logo2.png" />
        <meta name="twitter:title" content="Projects | XD Code Club - SRCEM" />
        <meta
          name="twitter:description"
          content="Explore production software and hackathon winners built by XD Code Club students."
        />
        <meta name="twitter:image" content="/xdcodeclub-logo2.png" />
      </Head>
      <ProjectsJsonLd projects={DEMO_PROJECTS} />

      <main className="min-h-screen bg-[#060607] relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-1" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-1" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-1" />

        {/* Sticky Glass Navbar */}
        <div className="p-5 w-full sticky top-2 left-0 right-0 z-50">
          <div className="backdrop-blur-lg bg-white bg-opacity-5 p-4 lg:px-8 px-4 rounded-2xl border border-white/10 shadow-2xl">
            <div className="w-full m-auto flex justify-between items-center">
              {/* Logo */}
              <div className="flex gap-x-2 items-center">
                <Link href={"/"}>
                  <a>
                    <img
                      className="cursor-pointer h-14 md:h-16 hover:animate-pulse hover:rotate-[-360deg] transition-all ease-in-out"
                      src="/xdcodeclub-logo2.png"
                      alt="XD Code Club Logo"
                    />
                  </a>
                </Link>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex justify-center items-center gap-5 monu text-white">
                <Link href={"/"}>
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                    Home
                  </h1>
                </Link>
                <Link href={"/about"}>
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                    About
                  </h1>
                </Link>
                <Link href={"/projects"}>
                  <h1 className="cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    Projects
                  </h1>
                </Link>
                <Link href={"/rules"}>
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                    Rules
                  </h1>
                </Link>
                <Link href={"/contact"}>
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                    Contact
                  </h1>
                </Link>

                <a
                  href="https://forms.gle/8q4ZmyutMPViSBaY8"
                  target="_blank"
                  rel="noreferrer"
                  className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 sm:px-10 py-2 monu text-sm shadow-lg shadow-purple-600/30"
                >
                  Join
                </a>
              </div>

              {/* Mobile Hamburger Toggle */}
              <div className="flex items-center gap-3 md:hidden">
                <a
                  href="https://forms.gle/8q4ZmyutMPViSBaY8"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-gradient px-4 py-1.5 text-xs monu rounded-lg shadow-md"
                >
                  Join
                </a>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-gray-300 hover:text-white focus:outline-none bg-white/5 rounded-xl border border-white/10"
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 monu text-sm text-gray-200">
                <Link href="/">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Home</a>
                </Link>
                <Link href="/about">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">About</a>
                </Link>
                <Link href="/projects">
                  <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">Projects</a>
                </Link>
                <Link href="/rules">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Rules</a>
                </Link>
                <Link href="/contact">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Contact</a>
                </Link>
              </div>
            )}
          </div>
        </div>


        {/* Hero Section */}
        <section className="text-white comfort mx-5 sm:mx-10 md:mx-20 mt-12 mb-10">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                Innovation & Showcase
              </span>
            </div>

            <h1 className="monu text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] uppercase box-with-text leading-tight tracking-wider">
              Projects
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold mt-2 monu">
              Crafted by <span className="text-[#9ca0d2]">XD Code Club</span> developers.
            </p>

            <p className="text-[#9ca0d2] text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
              From competitive coding sandboxes and college automation tools to prize-winning AI agents
              and Web3 protocols. Explore the flagship products built by SRCEM coders during our sprint bootcamps and hackathons.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-blue-400">12+</div>
                <div className="text-xs text-gray-400 mt-1">Projects Shipped</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-purple-400">4x</div>
                <div className="text-xs text-gray-400 mt-1">Hackathons Won</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-emerald-400">100%</div>
                <div className="text-xs text-gray-400 mt-1">Student Built</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-amber-400">3.5k+</div>
                <div className="text-xs text-gray-400 mt-1">Students Impacted</div>
              </div>
            </div>
          </div>
        </section>

        {/* Controls: Search & Category Filters */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-5 pb-6 border-b border-white/10">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap monu cursor-pointer ${isActive
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search projects or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.06] text-white placeholder-gray-400 text-sm px-4 py-2.5 pl-10 rounded-xl border border-white/15 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all comfort"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Cards Grid */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl comfort">
              <p className="text-xl text-gray-300 monu">No projects matched your search</p>
              <p className="text-sm text-[#9ca0d2] mt-2">
                Try selecting "All" or searching for a different keyword like "React" or "Python".
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs monu hover:bg-blue-500 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 ${project.accentGlow} transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(95,77,255,0.2)] flex flex-col justify-between overflow-hidden`}
                >
                  {/* Visual Banner Header */}
                  <div
                    className={`h-44 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between relative overflow-hidden border-b border-white/10`}
                  >
                    {/* Background Pattern Decors */}
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                      <div className="w-24 h-24 border border-white/20 rounded-full" />
                    </div>

                    {/* Top Row: Icon + Badge */}
                    <div className="flex justify-between items-start z-10">
                      <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                        {project.icon}
                      </div>

                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.badgeColor} shadow-md uppercase tracking-wider monu`}
                      >
                        {project.badge}
                      </span>
                    </div>

                    {/* Banner Bottom: Stats Pill */}
                    <div className="z-10 flex justify-between items-center">
                      <span className="text-xs px-2.5 py-1 rounded-md bg-black/50 text-gray-300 border border-white/10 font-mono">
                        {project.stats}
                      </span>
                      <span className="text-xs text-gray-400 comfort">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Project Title */}
                      <h3 className="monu text-xl text-white font-bold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 mb-3 comfort font-medium">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-[#9ca0d2] text-sm leading-relaxed comfort line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-5">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300 comfort">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.8 text-[11px] rounded-md bg-white/[0.05] text-blue-300 border border-blue-500/20 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Contributor Row */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs comfort mb-4">
                        <span className="text-gray-400">Lead:</span>
                        <span className="text-gray-200 font-semibold">{project.contributors}</span>
                      </div>

                      {/* Action Links */}
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="ripple flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-semibold monu transition-all text-center"
                        >
                          <span>Live Demo</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="ripple flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-white/15 text-gray-200 border border-white/15 text-xs font-semibold monu transition-all text-center"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action: Pitch or Build with Us */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-white/15 overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                Build & Ship Together
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white mt-2 mb-4">
                Have an Idea for the next XD Project?
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base comfort leading-relaxed mb-8">
                XD Code Club incubates student projects from ideation to deployment. Receive guidance
                from alumni software developers, cloud resources, code reviews, and a passionate team to build with.
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a
                  href="https://forms.gle/8q4ZmyutMPViSBaY8"
                  target="_blank"
                  rel="noreferrer"
                  className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 py-3 monu text-sm shadow-xl shadow-purple-600/40"
                >
                  Submit Project Idea
                </a>

                <a
                  href="https://discord.gg/vVh32R6t"
                  target="_blank"
                  rel="noreferrer"
                  className="ripple px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm monu border border-white/20 transition-all flex items-center gap-2"
                >
                  <img
                    className="h-4 w-4"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/discord--v1.png"
                    alt="Discord"
                  />
                  <span>Join Discord</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-6 md:px-12 border-t border-gray-800 bg-[#060607]">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/">
              <a className="flex items-center mb-4 sm:mb-0">
                <img
                  src="/logo2.png"
                  className="h-8 mr-3 cursor-pointer"
                  alt="XD Logo"
                />
                <span className="text-white font-extrabold monu text-xl">
                  XD<span className="text-gray-400 font-extrabold monu"> Code Club, SRCEM</span>
                </span>
              </a>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 comfort">
              <li>
                <a
                  href="https://www.linkedin.com/company/xd-code-club/"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 hover:underline md:mr-6"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/vVh32R6t"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Discord
                </a>
              </li>
              <li>
                <Link href="/about">
                  <a className="mr-4 hover:underline md:mr-6">About</a>
                </Link>
              </li>
              <li>
                <Link href="/rules">
                  <a className="mr-4 hover:underline md:mr-6">Rules</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:underline">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-800 sm:mx-auto" />
          <span className="block text-sm text-gray-400 comfort sm:text-center">
            © XD Code Club 2026, SRCEM. All Rights Reserved.
          </span>
        </footer>
      </main>
    </>
  );
}