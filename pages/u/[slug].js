import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { MemberJsonLd } from "../../components/SEO/JsonLd";
import MemberIdBadge from "../../components/MemberIdBadge";
import siteContent, { MEMBERS_DATA } from "../../data/siteContent";

export default function MemberProfile() {
  const router = useRouter();
  const { slug } = router.query;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [badgeModalOpen, setBadgeModalOpen] = useState(false);

  const { club, forms, memberProfile, footer } = siteContent;

  // Lookup member by slug (case-insensitive)
  const member = slug
    ? MEMBERS_DATA.find((m) => m.slug.toLowerCase() === String(slug).toLowerCase())
    : null;

  const displayName = member ? member.name : slug ? String(slug) : "Developer";

  return (
    <>
      <Head>
        <title>{`${displayName} | ${club.name} - ${club.collegeShort}`}</title>
        <meta
          name="description"
          content={
            member
              ? `${member.name} (${member.role}) - Engineering profile, tech stack, and software projects at ${club.name}, ${club.collegeShort} (${club.group}).`
              : `Explore ${club.name} student developer handles and open-source profiles.`
          }
        />
        <meta property="og:title" content={`${displayName} | ${club.name} - ${club.collegeShort}`} />
        <meta
          property="og:description"
          content={
            member
              ? member.bio
              : `Student software engineering handle registered at ${club.name}.`
          }
        />
        <link rel="canonical" href={`${club.websiteUrl}/u/${slug || ""}`} />
        <meta property="og:url" content={`${club.websiteUrl}/u/${slug || ""}`} />
        <meta property="og:image" content={member?.avatar || club.logo} />
        <meta name="twitter:title" content={`${displayName} | ${club.name}`} />
        <meta name="twitter:description" content={member ? member.bio : "Student Developer"} />
        <meta name="twitter:image" content={member?.avatar || club.logo} />
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
                      src={club.logo}
                      alt={club.logoAlt}
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
                  href={forms.membershipRegistration}
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
                  href={forms.membershipRegistration}
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
        <div className="mx-5 sm:mx-10 md:mx-20 mt-6 mb-8">
          <Link href="/u">
            <a className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#9ca0d2] hover:text-white monu transition-colors">
              <span>{memberProfile.backButtonText}</span>
            </a>
          </Link>
        </div>

        {member ? (
          /* Valid Member Profile Showcase */
          <div className="mx-5 sm:mx-10 md:mx-20 mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Avatar & Quick Info Card (5 cols) */}
              <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  {member.avatar ? (
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl mb-5">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 border-2 border-white/20 shadow-2xl mb-5 flex items-center justify-center text-3xl font-bold text-white monu">
                      {member.initials || member.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <h1 className="monu text-2xl sm:text-3xl text-white font-bold mb-1">
                    {member.name}
                  </h1>
                  <p className="text-sm text-blue-400 font-semibold comfort mb-3">
                    {member.role}
                  </p>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${member.badgeColor} shadow-md uppercase tracking-wider monu mb-5`}>
                    {member.badge}
                  </span>

                  {/* Open ID Badge Button */}
                  <button
                    onClick={() => setBadgeModalOpen(true)}
                    className="w-full mb-6 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/40 text-purple-200 text-xs monu transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{memberProfile.badgeButtonText}</span>
                  </button>

                  {/* Activity Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 w-full pt-5 border-t border-white/10 mb-6">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="monu text-lg text-blue-400">{member.metrics.projects}</div>
                      <div className="text-[10px] text-gray-400 comfort">Projects</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="monu text-lg text-purple-400">{member.metrics.hackathons}</div>
                      <div className="text-[10px] text-gray-400 comfort">Hackathons</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                      <div className="monu text-xs sm:text-sm text-emerald-400 mt-1">{member.metrics.codeStreak}</div>
                      <div className="text-[10px] text-gray-400 comfort">Streak</div>
                    </div>
                  </div>

                  {/* Connect Links */}
                  <div className="flex items-center gap-3">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-white/[0.06] hover:bg-white/15 text-white transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-white/[0.06] hover:bg-white/15 text-white transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                        </svg>
                      </a>
                    )}
                    {member.links.linktree && (
                      <a
                        href={member.links.linktree}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-white/[0.06] hover:bg-white/15 text-white transition-colors"
                        aria-label="Linktree"
                      >
                        <img className="h-5 w-5" src="https://img.icons8.com/pulsar-line/48/FFFFFF/linktree.png" alt="Linktree" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Bio, Skills, and Projects (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* About / Bio Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md">
                  <h2 className="monu text-lg text-white font-bold mb-3">
                    Engineering Background
                  </h2>
                  <p className="text-[#9ca0d2] text-sm sm:text-base leading-relaxed comfort">
                    {member.bio}
                  </p>
                </div>

                {/* Tech Stack Matrix */}
                <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md">
                  <h2 className="monu text-lg text-white font-bold mb-4">
                    Core Technical Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs text-blue-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects Contributed */}
                <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md">
                  <h2 className="monu text-lg text-white font-bold mb-4">
                    Software & Repositories
                  </h2>
                  <div className="space-y-3">
                    {member.projects.map((proj) => (
                      <div
                        key={proj}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-purple-500/40 transition-colors"
                      >
                        <div>
                          <h3 className="monu text-sm text-white font-bold">{proj}</h3>
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
          </div>
        ) : (
          /* Dynamic Fallback Card for Unclaimed Handles */
          <div className="mx-5 sm:mx-10 md:mx-20 mb-28">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 max-w-2xl mx-auto text-center backdrop-blur-xl">
              <div className="w-20 h-20 mx-auto rounded-full bg-purple-600/20 border-2 border-purple-500/40 flex items-center justify-center text-3xl mb-4">
                🚀
              </div>
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                {memberProfile.unclaimed.eyebrow}
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white font-bold mt-2 mb-3">
                @{slug || "developer"}
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base leading-relaxed comfort mb-8">
                {memberProfile.unclaimed.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a
                  href={forms.handleClaim}
                  target="_blank"
                  rel="noreferrer"
                  className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 py-3 monu text-sm shadow-xl shadow-purple-600/40"
                >
                  {memberProfile.unclaimed.claimButtonText}
                </a>
                <Link href="/u">
                  <a className="ripple px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs monu border border-white/20 transition-all">
                    {memberProfile.unclaimed.browseAllButtonText}
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
                  src={club.logo}
                  className="h-10 mr-3 cursor-pointer"
                  alt={club.logoAlt}
                />
                <span className="text-white font-extrabold monu text-xl">
                  {footer.brandText}<span className="text-gray-400 font-extrabold monu">{footer.brandSubText}</span>
                </span>
              </a>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 comfort">
              {footer.links.map((link, idx) => (
                <li key={idx}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 hover:underline md:mr-6"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <a className="mr-4 hover:underline md:mr-6">{link.label}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-800 sm:mx-auto" />
          <span className="block text-sm text-gray-400 comfort sm:text-center">
            {footer.copyright}
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