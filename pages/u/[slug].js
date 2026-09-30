import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { MEMBERS_DATA } from "./index";
import { MemberJsonLd } from "../../components/SEO/JsonLd";
import MemberIdBadge from "../../components/MemberIdBadge";

export default function MemberProfile() {
  const router = useRouter();
  const { slug } = router.query;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [badgeModalOpen, setBadgeModalOpen] = useState(false);

  // Lookup member by slug (case-insensitive)
  const member = slug
    ? MEMBERS_DATA.find((m) => m.slug.toLowerCase() === String(slug).toLowerCase())
    : null;

  const displayName = member ? member.name : slug ? String(slug) : "Developer";

  return (
    <>
      <Head>
        <title>{`${displayName} | XD Code Club - SRCEM`}</title>
        <meta
          name="description"
          content={
            member
              ? `${member.name} (${member.role}) - Engineering profile, tech stack, and software projects at XD Code Club, SRCEM (ShriRam Group of Colleges).`
              : `Explore student developer profiles at XD Code Club, ShriRam College of Engineering & Management, Banmore (near Gwalior).`
          }
        />
        <meta property="og:title" content={`${displayName} | XD Code Club - SRCEM`} />
        <meta
          property="og:description"
          content={
            member
              ? member.bio
              : `Explore student developer profiles at XD Code Club, ShriRam College of Engineering & Management, Banmore (near Gwalior).`
          }
        />
        <meta property="og:image" content={member?.avatar || "/xdcodeclub-logo2.png"} />
        <link
          rel="canonical"
          href={`https://xdcodeclub.netlify.app/u/${member?.slug || slug || ""}`}
        />
        <meta
          property="og:url"
          content={`https://xdcodeclub.netlify.app/u/${member?.slug || slug || ""}`}
        />
      </Head>
      <MemberJsonLd member={member} />

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

        {/* Back Link */}
        <div className="mx-5 sm:mx-10 md:mx-20 mt-6 mb-4">
          <Link href="/u">
            <a className="monu text-xs text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors">
              <span>←</span>
              <span>Back to Member Registry</span>
            </a>
          </Link>
        </div>

        {member ? (
          /* Verified Member Profile Card */
          <div className="mx-5 sm:mx-10 md:mx-20 mb-28">
            {/* Profile Hero Card */}
            <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden mb-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Avatar */}
                <div className="relative">
                  {member.avatar ? (
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 border-purple-500/50 shadow-[0_0_25px_rgba(95,77,255,0.35)]">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-purple-600/40 to-blue-600/40 border-2 border-purple-500/50 flex items-center justify-center monu text-4xl font-bold text-white shadow-[0_0_25px_rgba(95,77,255,0.35)]">
                      {member.initials}
                    </div>
                  )}

                  {/* Online Node Pill */}
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-black/80 border border-emerald-500/40 text-[10px] text-emerald-400 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Node</span>
                  </div>
                </div>

                {/* Identity Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${member.badgeColor} uppercase tracking-wider monu`}
                    >
                      {member.badge}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 border border-white/10 font-mono">
                      @{member.slug}
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold comfort">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified XD Member
                    </span>
                  </div>

                  <h1 className="monu text-2xl sm:text-4xl text-white font-extrabold mb-1">
                    {member.name}
                  </h1>
                  <p className="text-sm sm:text-base text-blue-400 font-semibold mb-3 comfort">
                    {member.role} —{" "}
                    <span className="text-gray-300 font-normal">
                      SRCEM — ShriRam Group of Colleges, Banmore (near Gwalior)
                    </span>
                  </p>
                  <p className="text-[#9ca0d2] text-sm sm:text-base leading-relaxed comfort max-w-3xl mb-5">
                    {member.bio}
                  </p>

                  {/* Social Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="ripple px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/20 text-white border border-white/15 text-xs font-semibold monu flex items-center gap-2 transition-all"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="ripple px-4 py-2 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white text-xs font-semibold monu flex items-center gap-2 transition-all"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {member.links.linktree && (
                      <a
                        href={member.links.linktree}
                        target="_blank"
                        rel="noreferrer"
                        className="ripple px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/20 text-white border border-white/15 text-xs font-semibold monu flex items-center gap-2 transition-all"
                      >
                        <span>Linktree ↗</span>
                      </a>
                    )}

                    {/* Holographic Member ID Pass Trigger */}
                    <button
                      onClick={() => setBadgeModalOpen(true)}
                      className="ripple px-4 py-2 rounded-xl bg-gradient-to-r from-[#5F4DFF] via-indigo-600 to-[#00E5FF] hover:brightness-110 text-white text-xs font-semibold monu flex items-center gap-2 shadow-[0_0_20px_rgba(95,77,255,0.4)] transition-all cursor-pointer border border-cyan-400/40"
                      title="Generate official holographic verification card"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                      <span>Holographic ID Pass 🪪</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics HUD Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="text-xs text-gray-400 comfort">Projects Contributed</span>
                <h3 className="monu text-2xl sm:text-3xl text-purple-400 font-bold mt-1">
                  {member.metrics.projects}+
                </h3>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="text-xs text-gray-400 comfort">Hackathons & Sprints</span>
                <h3 className="monu text-2xl sm:text-3xl text-blue-400 font-bold mt-1">
                  {member.metrics.hackathons} Podiums
                </h3>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="text-xs text-gray-400 comfort">Code Consistency</span>
                <h3 className="monu text-2xl sm:text-3xl text-emerald-400 font-bold mt-1">
                  {member.metrics.codeStreak}
                </h3>
              </div>
            </div>

            {/* Two-Column Grid: Tech Arsenal & Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tech Arsenal */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">⚡</span>
                  <h2 className="monu text-xl text-white font-bold">Tech Arsenal</h2>
                </div>
                <p className="text-xs text-[#9ca0d2] mb-6 comfort">
                  Core programming languages, frameworks, and developer toolchains used in daily software sprints.
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/25 font-mono text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects Lead / Built */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    <h2 className="monu text-xl text-white font-bold">Key Projects</h2>
                  </div>
                  <Link href="/projects">
                    <a className="monu text-xs text-blue-400 hover:underline">All Projects →</a>
                  </Link>
                </div>
                <p className="text-xs text-[#9ca0d2] mb-6 comfort">
                  Production apps and prototypes built with XD Code Club engineering peers.
                </p>

                <div className="space-y-3">
                  {member.projects.map((proj) => (
                    <div
                      key={proj}
                      className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:border-purple-500/40 transition-colors"
                    >
                      <div>
                        <h4 className="monu text-sm text-white font-bold">{proj}</h4>
                        <span className="text-xs text-gray-400 comfort">XD Club Flagship</span>
                      </div>
                      <Link href="/projects">
                        <a className="monu text-xs text-purple-400 hover:text-white px-3 py-1 rounded-lg bg-purple-600/20 border border-purple-500/30">
                          View →
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Dynamic Fallback Card for Unclaimed Handles */
          <div className="mx-5 sm:mx-10 md:mx-20 mb-28">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 max-w-2xl mx-auto text-center backdrop-blur-xl">
              <div className="w-20 h-20 mx-auto rounded-full bg-purple-600/20 border-2 border-purple-500/40 flex items-center justify-center text-3xl mb-4">
                🚀
              </div>
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                Unclaimed Student Slug
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white font-bold mt-2 mb-3">
                @{slug || "developer"}
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base leading-relaxed comfort mb-8">
                This member profile has not been activated yet. If you are an engineering student at Shri Ram College of Engineering & Management, you can claim this handle by joining XD Code Club.
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a
                  href="https://forms.gle/vjS6yrbdoLu89uHA9"
                  target="_blank"
                  rel="noreferrer"
                  className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 py-3 monu text-sm shadow-xl shadow-purple-600/40"
                >
                  Claim Handle & Join
                </a>
                <Link href="/u">
                  <a className="ripple px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs monu border border-white/20 transition-all">
                    Browse All Members
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}

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
                <Link href="/u">
                  <a className="mr-4 hover:underline md:mr-6">Members</a>
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
          member={member}
          isOpen={badgeModalOpen}
          onClose={() => setBadgeModalOpen(false)}
        />
      </main>
    </>
  );
}