import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaqJsonLd } from "../../components/SEO/JsonLd";

const FAQS = [
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
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState("experience");

  return (
    <>
      <Head>
        <title>About Us | XD Code Club - SRCEM</title>
        <meta
          name="description"
          content="Learn about XD Code Club, SRCEM—our story, core pillars, milestones, and how we empower student developers to build production software."
        />
        <meta property="og:title" content="About Us | XD Code Club - SRCEM" />
        <meta
          property="og:description"
          content="Discover how XD Code Club bridges classroom theory and real-world software engineering through hackathons, open source, and peer mentorship."
        />
        <link rel="canonical" href="https://xdcodeclub.netlify.app/about" />
        <meta property="og:url" content="https://xdcodeclub.netlify.app/about" />
        <meta property="og:image" content="/xdcodeclub-logo2.png" />
        <meta name="twitter:title" content="About Us | XD Code Club - SRCEM" />
        <meta
          name="twitter:description"
          content="Our story, core pillars, and milestones at ShriRam College of Engineering & Management (ShriRam Group of Colleges, Banmore near Gwalior)."
        />
        <meta name="twitter:image" content="/xdcodeclub-logo2.png" />
      </Head>
      <FaqJsonLd faqs={FAQS} />

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
                  <h1 className="cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    About
                  </h1>
                </Link>
                <Link href={"/projects"}>
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
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
                  href="https://forms.gle/vjS6yrbdoLu89uHA9"
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
                  href="https://forms.gle/vjS6yrbdoLu89uHA9"
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
                  <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">About</a>
                </Link>
                <Link href="/projects">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Projects</a>
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
        <section className="text-white comfort mx-5 sm:mx-10 md:mx-20 mt-12 mb-16">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                The Origin & Mission
              </span>
            </div>

            <h1 className="monu text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] uppercase box-with-text leading-tight tracking-wider">
              About Us
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold mt-2 monu">
              Building SRCEM’s most fearless <span className="text-[#9ca0d2]">developer guild</span>.
            </p>

            <p className="text-[#9ca0d2] text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
              XD Code Club was founded with a singular conviction: engineering should be defined by what you
              build, not just the exams you write. Born at ShriRam College of Engineering & Management (SRCEM, ShriRam Group of Colleges, Banmore near Gwalior),
              we are a tight-knit ecosystem of builders, mentors, designers, and innovators pushing each other to master modern technologies.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-blue-400">300+</div>
                <div className="text-xs text-gray-400 mt-1">Community Members</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-purple-400">15+</div>
                <div className="text-xs text-gray-400 mt-1">Production Projects</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-emerald-400">4x</div>
                <div className="text-xs text-gray-400 mt-1">National Hackathon Wins</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="monu text-2xl text-amber-400">100%</div>
                <div className="text-xs text-gray-400 mt-1">Peer Mentored</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-20">
          <div className="mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3" />
            <h2 className="monu text-2xl sm:text-3xl text-white font-bold">What We Stand For</h2>
            <p className="text-sm text-[#9ca0d2] mt-1 comfort">Our three foundational pillars that define every XD Coder.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-5 text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="monu text-lg text-white font-bold mb-2">Build in Public & Ship</h3>
                <p className="text-[#9ca0d2] text-sm leading-relaxed comfort">
                  We don’t believe in tutorial purgatory. Our members write code that runs in production—from college management ERPs and real-time coding arenas to smart IoT lab attendance systems.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 text-xs text-blue-300 font-mono">
                #ShipFast #ProductionReady
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-5 text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="monu text-lg text-white font-bold mb-2">Peer Mentorship</h3>
                <p className="text-[#9ca0d2] text-sm leading-relaxed comfort">
                  Juniors never struggle alone. Senior coders and alumni software developers guide members through DSA roadmap milestones, resume roasting, open-source pull requests, and mock technical interviews.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 text-xs text-purple-300 font-mono">
                #EachOneTeachOne #Mentorship
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="monu text-lg text-white font-bold mb-2">Hackathon Culture</h3>
                <p className="text-[#9ca0d2] text-sm leading-relaxed comfort">
                  We thrive under 36-hour caffeine-fueled hackathons. Our squads represent SRCEM across national platforms, solving complex societal challenges and bringing home podium trophies and grants.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 text-xs text-emerald-300 font-mono">
                #HackathonWinners #SpeedAndScale
              </div>
            </div>
          </div>
        </section>

        {/* Club Timeline / Milestones */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-24">
          <div className="mb-10">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3" />
            <h2 className="monu text-2xl sm:text-3xl text-white font-bold">Our Journey & Milestones</h2>
            <p className="text-sm text-[#9ca0d2] mt-1 comfort">How XD Code Club evolved from an idea into SRCEM's flagship developer hub.</p>
          </div>

          <div className="relative border-l border-white/15 pl-6 sm:pl-10 space-y-12">
            {/* Timeline Item 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#060607] group-hover:scale-125 transition-transform" />
              <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                2023 • FOUNDING PHASE
              </span>
              <h3 className="monu text-lg sm:text-xl text-white font-bold mt-2">The Seed at SRCEM</h3>
              <p className="text-[#9ca0d2] text-sm leading-relaxed mt-1 max-w-2xl comfort">
                Founded by passionate computer science undergraduates who wanted to break out of ordinary curricula and create a high-energy space where students build software together every single week.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#060607] group-hover:scale-125 transition-transform" />
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                2024 • RAPID GROWTH
              </span>
              <h3 className="monu text-lg sm:text-xl text-white font-bold mt-2">First Hackathon & 150+ Members</h3>
              <p className="text-[#9ca0d2] text-sm leading-relaxed mt-1 max-w-2xl comfort">
                Organized our first internal 24-Hour Code Sprint, launched our Discord server, and sent teams to national hackathons, winning our first inter-college trophy.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#060607] group-hover:scale-125 transition-transform" />
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                2025 • PRODUCT INCUBATION
              </span>
              <h3 className="monu text-lg sm:text-xl text-white font-bold mt-2">CampusMate & DevArena Launch</h3>
              <p className="text-[#9ca0d2] text-sm leading-relaxed mt-1 max-w-2xl comfort">
                Formally established the XD Product Incubator. Student teams engineered and deployed CampusMate for college resource sharing and DevArena for online multiplayer DSA duels.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#060607] group-hover:scale-125 transition-transform" />
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                2026 & BEYOND • HORIZONS
              </span>
              <h3 className="monu text-lg sm:text-xl text-white font-bold mt-2">Autonomous AI & Web3 Expansion</h3>
              <p className="text-[#9ca0d2] text-sm leading-relaxed mt-1 max-w-2xl comfort">
                Pioneering cutting-edge research tracks in generative AI copilot agents, decentralized IPFS media protocols, and student fellowship grants.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Guilds Section */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-24">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="max-w-2xl mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3" />
              <h2 className="monu text-2xl sm:text-3xl text-white font-bold">Tech Guilds & Domains</h2>
              <p className="text-sm text-[#9ca0d2] mt-1 comfort">The core engineering tracks our mentors teach and build in.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
                <h4 className="monu text-white text-base mb-2 flex items-center gap-2">
                  <span className="text-blue-400">⚡</span> Full-Stack Web
                </h4>
                <p className="text-xs text-[#9ca0d2] mb-3 comfort">Scalable, responsive web applications with rich user interfaces.</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-blue-300">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Next.js</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">React</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Node.js</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">TailwindCSS</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Docker</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
                <h4 className="monu text-white text-base mb-2 flex items-center gap-2">
                  <span className="text-purple-400">🧠</span> AI & Machine Learning
                </h4>
                <p className="text-xs text-[#9ca0d2] mb-3 comfort">Applied NLP, ATS resume parsers, copilot agents, and LLMs.</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-purple-300">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">Python</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">FastAPI</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">LangChain</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">OpenAI</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">PyTorch</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
                <h4 className="monu text-white text-base mb-2 flex items-center gap-2">
                  <span className="text-emerald-400">🌐</span> Web3 & Systems
                </h4>
                <p className="text-xs text-[#9ca0d2] mb-3 comfort">Decentralized contracts, peer-to-peer storage, and IoT beacons.</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-emerald-300">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Solidity</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Polygon</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">IPFS</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">ESP32</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">C++</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Accordion Section */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
              Got Questions? We've Got Answers
            </span>
            <h2 className="monu text-2xl sm:text-3xl text-white mt-1 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[#9ca0d2] text-sm max-w-2xl comfort">
              Clear answers for freshmen, prospective members, and student developers aspiring to join our engineering guild.
            </p>
          </div>

          <div className="mt-10 space-y-4 max-w-4xl">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden backdrop-blur-md ${
                    isOpen
                      ? "bg-gradient-to-b from-white/[0.09] to-white/[0.04] border-purple-500/60 shadow-[0_0_25px_rgba(95,77,255,0.22)]"
                      : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.06] text-purple-300 border border-purple-500/20 monu w-fit">
                        {faq.category}
                      </span>
                      <h3 className="monu text-sm sm:text-base text-white font-bold group-hover:text-purple-300 transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`p-2 rounded-xl border border-white/10 shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-purple-600/30 text-purple-300 rotate-180 border-purple-400/40"
                          : "bg-white/5 text-gray-400 rotate-0"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-[#9ca0d2] leading-relaxed comfort border-t border-white/10">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Card */}
          <div className="mt-8 p-5 rounded-2xl bg-white/[0.02] border border-white/10 max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">💬</span>
              <p className="text-xs sm:text-sm text-gray-300 comfort">
                Have a different question? Visit us in <span className="text-white font-bold">Lab 304</span> or drop us a message.
              </p>
            </div>
            <Link href="/contact">
              <a className="monu text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1.5 whitespace-nowrap hover:underline">
                <span>Contact Page</span>
                <span>→</span>
              </a>
            </Link>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-white/15 overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                Ready to Join the Movement?
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white mt-2 mb-4">
                Become a Member of XD Code Club
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base comfort leading-relaxed mb-8">
                Whether you just wrote your first "Hello World" or you're deploying distributed microservices,
                there is a seat for you at our table. Learn, collaborate, and build with us.
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a
                  href="https://forms.gle/vjS6yrbdoLu89uHA9"
                  target="_blank"
                  rel="noreferrer"
                  className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 py-3 monu text-sm shadow-xl shadow-purple-600/40"
                >
                  Join XD Code Club
                </a>

                <Link href="/projects">
                  <a className="ripple px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm monu border border-white/20 transition-all">
                    Explore Projects →
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Standardized Theme Footer */}
        <footer className="p-6 md:px-12 border-t border-gray-800 bg-[#060607]">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/">
              <a className="flex items-center mb-4 sm:mb-0">
                <img
                  src="/xdcodeclub-logo2.png"
                  className="h-10 mr-3 cursor-pointer"
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
                <Link href="/projects">
                  <a className="mr-4 hover:underline md:mr-6">Projects</a>
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