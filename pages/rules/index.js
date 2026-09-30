import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Rules() {
  const [pledged, setPledged] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Rules & Code of Conduct | XD Code Club - SRCEM</title>
        <meta
          name="description"
          content="Official rules, workspace discipline, and ethical standards for all members of XD Code Club at ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior)."
        />
        <meta property="og:title" content="Rules & Code of Conduct | XD Code Club - SRCEM" />
        <meta
          property="og:description"
          content="Mutual respect, lab discipline, fact-checking integrity, and the XD Code of Honor."
        />
        <link rel="canonical" href="https://xdcodeclub.netlify.app/rules" />
        <meta property="og:url" content="https://xdcodeclub.netlify.app/rules" />
        <meta property="og:image" content="/xdcodeclub-logo2.png" />
        <meta name="twitter:title" content="Rules & Code of Conduct | XD Code Club - SRCEM" />
        <meta
          name="twitter:description"
          content="Official standards of technical excellence and member guidelines for XD Code Club, SRCEM."
        />
        <meta name="twitter:image" content="/xdcodeclub-logo2.png" />
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
                <Link href={"/rules"}>
                  <h1 className="cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
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
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Projects</a>
                </Link>
                <Link href="/rules">
                  <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">Rules</a>
                </Link>
                <Link href="/contact">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Contact</a>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-white comfort mx-5 sm:mx-10 md:mx-20 mt-12 mb-14">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                Standards of Excellence
              </span>
            </div>

            <h1 className="monu text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] uppercase box-with-text leading-tight tracking-wider">
              Club Rules
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold mt-2 monu">
              Code of Conduct & <span className="text-[#9ca0d2]">Workspace Guidelines</span>.
            </p>

            <p className="text-[#9ca0d2] text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
              Every member of XD Code Club at ShriRam College of Engineering & Management (SRCEM, ShriRam Group of Colleges, Banmore near Gwalior) is expected
              to uphold these professional standards. We build high-impact software through mutual respect,
              uncompromising integrity, and technical discipline.
            </p>
          </div>
        </section>

        {/* 3 Glass Category Cards Grid */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Community & Conduct */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6 text-2xl">
                  🤝
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase text-purple-400 font-bold tracking-widest">
                    SECTION 01
                  </span>
                </div>
                <h3 className="monu text-xl text-white font-bold mb-4">
                  Community & Conduct
                </h3>
                <p className="text-[#9ca0d2] text-xs sm:text-sm comfort leading-relaxed mb-6">
                  Our guild is built on collaborative growth and psychological safety.
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-200 comfort">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span><strong>Mutual Respect:</strong> Respect every member's ideas, backgrounds, and coding proficiency levels.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span><strong>Constructive Feedback:</strong> Be receptive to code reviews, constructive critique, and mentorship.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span><strong>Zero Toxicity:</strong> Strict zero-tolerance policy towards harassment, discrimination, or gatekeeping.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span><strong>Help Newcomers:</strong> Be willing to teach what you know and assist juniors in their learning journey.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 text-xs text-purple-300 font-mono">
                #MutualRespect #Inclusivity
              </div>
            </div>

            {/* Card 2: Lab & Sprint Discipline */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 text-2xl">
                  💻
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase text-blue-400 font-bold tracking-widest">
                    SECTION 02
                  </span>
                </div>
                <h3 className="monu text-xl text-white font-bold mb-4">
                  Lab & Sprint Discipline
                </h3>
                <p className="text-[#9ca0d2] text-xs sm:text-sm comfort leading-relaxed mb-6">
                  Engineering excellence requires commitment, punctuality, and clean habits.
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-200 comfort">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>Punctuality & Schedules:</strong> Be aware of the club’s meeting timetable, sprint milestones, and location in Lab 304.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>Active Sprint Participation:</strong> Actively engage in hackathons, workshops, and team pair programming sessions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>Workspace Hygiene:</strong> Treat campus computer labs, hardware kits, and club peripherals with care.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span><strong>Clean Repositories:</strong> Follow Git hygiene: write descriptive commit messages and meaningful PR descriptions.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 text-xs text-blue-300 font-mono">
                #LabDiscipline #CleanCode
              </div>
            </div>

            {/* Card 3: Integrity & Communication */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 text-2xl">
                  🛡️
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-widest">
                    SECTION 03
                  </span>
                </div>
                <h3 className="monu text-xl text-white font-bold mb-4">
                  Integrity & Ethics
                </h3>
                <p className="text-[#9ca0d2] text-xs sm:text-sm comfort leading-relaxed mb-6">
                  Truth, ownership, and academic honesty are non-negotiable.
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-200 comfort">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Fact-Checking First:</strong> Must clarify and verify information before spreading rumors or announcements into the community.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Academic Honesty:</strong> Zero tolerance for code plagiarism or submitting copied work in hackathons or coursework.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Credit Peer Work:</strong> Always acknowledge libraries, teammates' contributions, and attribution licenses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Official Channels:</strong> Keep all project repositories, announcements, and sprint logs on official club channels.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 text-xs text-emerald-300 font-mono">
                #AcademicIntegrity #Trust
              </div>
            </div>
          </div>
        </section>

        {/* "Code of Honor" Pledge Card */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-white/15 overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                The Member's Commitment
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white mt-2 mb-3">
                XD Code of Honor
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base comfort leading-relaxed mb-6">
                "As an engineer of XD Code Club, SRCEM, I commit to technical rigor, collaborative respect,
                and building software that uplifts our community."
              </p>

              {pledged ? (
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 monu text-sm shadow-xl shadow-emerald-500/20">
                  <span>✓</span>
                  <span>Honorary XD Coder Verified 🛡️</span>
                </div>
              ) : (
                <button
                  onClick={() => setPledged(true)}
                  className="ripple btn btn-primary btn-gradient py-3.5 px-8 rounded-xl monu text-sm font-bold text-white shadow-xl shadow-purple-600/30 hover:scale-105 transition-all cursor-pointer"
                >
                  I Pledge to Uphold the Standards ✍️
                </button>
              )}
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