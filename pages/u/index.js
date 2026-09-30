import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import MemberIdBadge from "../../components/MemberIdBadge";
import siteContent, { MEMBERS_DATA } from "../../data/siteContent";

export { MEMBERS_DATA };

export default function MembersDirectory() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDomain, setActiveDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBadgeMember, setSelectedBadgeMember] = useState(null);

  const { club, forms, members, footer } = siteContent;
  const memberList = members.list;
  const domains = members.domains;

  const filteredMembers = memberList.filter((m) => {
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
        <title>{members.meta.title}</title>
        <meta name="description" content={members.meta.description} />
        <meta property="og:title" content={members.meta.title} />
        <meta property="og:description" content={members.meta.ogDescription} />
        <link rel="canonical" href={`${club.websiteUrl}/u`} />
        <meta property="og:url" content={`${club.websiteUrl}/u`} />
        <meta property="og:image" content={club.logo} />
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

        {/* Hero Section */}
        <section className="text-white comfort mx-5 sm:mx-10 md:mx-20 mt-12 mb-10">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                {members.hero.eyebrow}
              </span>
            </div>

            <h1 className="monu text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] uppercase box-with-text leading-tight tracking-wider">
              {members.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold mt-2 monu">
              {members.hero.subtitle}
            </p>

            <p className="text-[#9ca0d2] text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
              {members.hero.description}
            </p>
          </div>
        </section>

        {/* Filter Controls: Domains & Search */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-5 pb-6 border-b border-white/10">
            {/* Domain Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {domains.map((dom) => {
                const isActive = activeDomain === dom;
                return (
                  <button
                    key={dom}
                    onClick={() => setActiveDomain(dom)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap monu cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                  >
                    {dom}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] md:min-w-[320px]">
              <input
                type="text"
                placeholder={members.hero.searchPlaceholder}
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

        {/* Member Cards Grid */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl comfort">
              <p className="text-xl text-gray-300 monu">No members found</p>
              <p className="text-sm text-[#9ca0d2] mt-2">
                Try selecting "All" domains or clearing your search query.
              </p>
              <button
                onClick={() => {
                  setActiveDomain("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs monu hover:bg-blue-500 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((m) => (
                <div
                  key={m.slug}
                  className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(95,77,255,0.2)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Avatar, Name, Badge */}
                    <div className="flex items-start gap-4 mb-4">
                      {m.avatar ? (
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 shrink-0">
                          <img
                            src={m.avatar}
                            alt={m.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 border border-white/20 shrink-0 flex items-center justify-center text-xl text-white font-bold monu">
                          {m.initials || m.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="monu text-lg text-white font-bold truncate">
                            {m.name}
                          </h3>
                        </div>
                        <p className="text-xs text-blue-400 font-medium comfort truncate">
                          {m.role}
                        </p>
                        <span className={`inline-block mt-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${m.badgeColor} monu`}>
                          {m.badge}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-[#9ca0d2] text-xs leading-relaxed comfort line-clamp-3 mb-4">
                      {m.bio}
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {m.skills.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono"
                        >
                          {s}
                        </span>
                      ))}
                      {m.skills.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-400 font-mono">
                          +{m.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer of Card: Quick Links & View Profile */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {m.links.github && (
                        <a
                          href={m.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 transition-colors"
                          aria-label="GitHub"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                      {m.links.linkedin && (
                        <a
                          href={m.links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                          </svg>
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedBadgeMember(m)}
                        className="px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-[11px] font-mono border border-purple-500/30 transition-colors"
                      >
                        🪪 ID Badge
                      </button>
                    </div>

                    <Link href={`/u/${m.slug}`}>
                      <a className="text-xs text-blue-400 hover:text-blue-300 font-semibold monu flex items-center gap-1 group/btn">
                        <span>Profile</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Bottom CTA: Claim Handle / Join Guild */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-white/15 overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                {members.claimCta.eyebrow}
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white mt-2 mb-4">
                {members.claimCta.title}
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base comfort leading-relaxed mb-8">
                {members.claimCta.description}
              </p>

              <a
                href={forms.membershipRegistration}
                target="_blank"
                rel="noreferrer"
                className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-10 py-3 monu text-sm shadow-xl shadow-purple-600/40"
              >
                {members.claimCta.buttonText}
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

        {/* Member ID Badge Modal */}
        <MemberIdBadge
          member={selectedBadgeMember}
          isOpen={Boolean(selectedBadgeMember)}
          onClose={() => setSelectedBadgeMember(null)}
        />
      </main>
    </>
  );
}