import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import MemberIdBadge from "../../components/MemberIdBadge";

export const MEMBERS_DATA = [
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
      linkedin: "https://www.linkedin.com/company/xd-code-club/",
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
      linkedin: "https://www.linkedin.com/company/xd-code-club/",
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
      linkedin: "https://www.linkedin.com/company/xd-code-club/",
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
      linkedin: "https://www.linkedin.com/company/xd-code-club/",
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
      linkedin: "https://www.linkedin.com/company/xd-code-club/",
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
      linkedin: "https://www.linkedin.com/company/xd-code-club/",
    },
  },
];

const DOMAINS = ["All", "Executive", "Full-Stack", "DevOps & Systems", "Design", "AI & ML", "IoT"];

export default function MembersDirectory() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDomain, setActiveDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBadgeMember, setSelectedBadgeMember] = useState(null);

  const filteredMembers = MEMBERS_DATA.filter((m) => {
    const matchesDomain = activeDomain === "All" || m.domain === activeDomain;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Member Registry & Builders | XD Code Club - SRCEM</title>
        <meta
          name="description"
          content="Meet the student developers, software architects, and open-source contributors of XD Code Club at ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior)."
        />
        <meta property="og:title" content="Member Registry & Builders | XD Code Club - SRCEM" />
        <meta
          property="og:description"
          content="Explore student profiles, technical skills, and project contributions from XD Code Club engineers at SRCEM."
        />
        <link rel="canonical" href="https://xdcodeclub.netlify.app/u" />
        <meta property="og:url" content="https://xdcodeclub.netlify.app/u" />
        <meta property="og:image" content="/xdcodeclub-logo2.png" />
      </Head>

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
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                    Projects
                  </h1>
                </Link>
                <Link href={"/u"}>
                  <h1 className="cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    Members
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
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">About</a>
                </Link>
                <Link href="/projects">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Projects</a>
                </Link>
                <Link href="/u">
                  <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">Members</a>
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
        <section className="text-white comfort mx-5 sm:mx-10 md:mx-20 mt-12 mb-12">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                Student Roster & Builders
              </span>
            </div>
            <h1 className="monu text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Community Registry
            </h1>
            <p className="text-[#9ca0d2] text-sm sm:text-base leading-relaxed max-w-3xl comfort">
              Meet the student developers, designers, and software engineers powering XD Code Club at ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior). Explore individual slug portfolios, active contributions, and tech stacks.
            </p>
          </div>
        </section>

        {/* Filters and Search Bar */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-12">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
            {/* Domain Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {DOMAINS.map((domain) => {
                const isActive = activeDomain === domain;
                return (
                  <button
                    key={domain}
                    onClick={() => setActiveDomain(domain)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap monu cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                  >
                    {domain}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] md:min-w-[280px]">
              <input
                type="text"
                placeholder="Search member or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.06] text-white placeholder-gray-400 text-xs sm:text-sm px-4 py-2.5 pl-10 rounded-xl border border-white/15 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all comfort"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-3"
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

        {/* Member Cards Grid */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl comfort">
              <p className="text-xl text-gray-300 monu">No members matched your search</p>
              <p className="text-sm text-[#9ca0d2] mt-2">
                Try selecting "All" or searching for a different keyword like "React" or "Docker".
              </p>
              <button
                onClick={() => {
                  setActiveDomain("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs monu hover:bg-purple-500 transition-all"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.slug}
                  className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(95,77,255,0.2)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Avatar + Badge */}
                    <div className="flex items-start justify-between mb-4">
                      {member.avatar ? (
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-purple-400 transition-colors shadow-lg">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500/30 to-blue-500/30 border-2 border-white/20 flex items-center justify-center monu text-xl font-bold text-white group-hover:border-purple-400 transition-colors">
                          {member.initials}
                        </div>
                      )}

                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${member.badgeColor} uppercase tracking-wider monu`}
                      >
                        {member.badge}
                      </span>
                    </div>

                    {/* Name & Role */}
                    <h3 className="monu text-lg text-white font-bold group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-blue-400 font-semibold mb-3 comfort">
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="text-[#9ca0d2] text-xs leading-relaxed comfort line-clamp-3 mb-4">
                      {member.bio}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1 mb-5">
                      {member.skills.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-gray-300 border border-white/10 font-mono"
                        >
                          {s}
                        </span>
                      ))}
                      {member.skills.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-gray-400 font-mono">
                          +{member.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions & Profile Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link href={`/u/${member.slug}`}>
                      <a className="monu text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 hover:underline">
                        <span>Profile</span>
                        <span>→</span>
                      </a>
                    </Link>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedBadgeMember(member)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 transition-all flex items-center gap-1 text-[11px] font-mono cursor-pointer"
                        title="View Holographic ID Pass"
                      >
                        <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        <span className="hidden sm:inline">ID Pass</span>
                      </button>
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          title="GitHub Profile"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          title="LinkedIn Profile"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Claim Your Profile CTA */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-white/15 overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                Student Engineers at SRCEM
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white mt-2 mb-4">
                Want to Claim Your Official Slug?
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base comfort leading-relaxed mb-8">
                Join XD Code Club, collaborate on open-source sprints, and get your developer card showcased in our official campus registry.
              </p>

              <a
                href="https://forms.gle/vjS6yrbdoLu89uHA9"
                target="_blank"
                rel="noreferrer"
                className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-10 py-3 monu text-sm shadow-xl shadow-purple-600/40"
              >
                Apply for Membership
              </a>
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
                <Link href="/about">
                  <a className="mr-4 hover:underline md:mr-6">About</a>
                </Link>
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
        {/* Holographic Member ID Badge Modal */}
        <MemberIdBadge
          member={selectedBadgeMember}
          isOpen={!!selectedBadgeMember}
          onClose={() => setSelectedBadgeMember(null)}
        />
      </main>
    </>
  );
}