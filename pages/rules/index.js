import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import siteContent, { RULES_DATA } from "../../data/siteContent";

export { RULES_DATA };

export default function Rules() {
  const [pledged, setPledged] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { club, forms, rules, footer } = siteContent;

  return (
    <>
      <Head>
        <title>{rules.meta.title}</title>
        <meta name="description" content={rules.meta.description} />
        <meta property="og:title" content={rules.meta.title} />
        <meta property="og:description" content={rules.meta.ogDescription} />
        <link rel="canonical" href={`${club.websiteUrl}/rules`} />
        <meta property="og:url" content={`${club.websiteUrl}/rules`} />
        <meta property="og:image" content={club.logo} />
        <meta name="twitter:title" content={rules.meta.title} />
        <meta name="twitter:description" content={rules.meta.description} />
        <meta name="twitter:image" content={club.logo} />
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
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                    Members
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
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Members</a>
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
                {rules.hero.eyebrow}
              </span>
            </div>

            <h1 className="monu text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] uppercase box-with-text leading-tight tracking-wider">
              {rules.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold mt-2 monu">
              {rules.hero.subtitle}
            </p>

            <p className="text-[#9ca0d2] text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
              {rules.hero.description}
            </p>
          </div>
        </section>

        {/* 3 Glass Category Cards Grid */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rules.sections.map((section, idx) => {
              const borderHover =
                section.color === "purple"
                  ? "hover:border-purple-500/50"
                  : section.color === "blue"
                  ? "hover:border-blue-500/50"
                  : "hover:border-emerald-500/50";

              const badgeColor =
                section.color === "purple"
                  ? "text-purple-400"
                  : section.color === "blue"
                  ? "text-blue-400"
                  : "text-emerald-400";

              const dotColor =
                section.color === "purple"
                  ? "bg-purple-400"
                  : section.color === "blue"
                  ? "bg-blue-400"
                  : "bg-emerald-400";

              const iconBg =
                section.color === "purple"
                  ? "bg-purple-500/20 border-purple-500/30"
                  : section.color === "blue"
                  ? "bg-blue-500/20 border-blue-500/30"
                  : "bg-emerald-500/20 border-emerald-500/30";

              return (
                <div
                  key={idx}
                  className={`p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 ${borderHover} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${iconBg} border flex items-center justify-center mb-6 text-2xl`}>
                      {section.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] font-mono uppercase ${badgeColor} font-bold tracking-widest`}>
                        {section.number}
                      </span>
                    </div>
                    <h3 className="monu text-xl text-white font-bold mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#9ca0d2] text-xs sm:text-sm comfort leading-relaxed mb-6">
                      {section.summary}
                    </p>

                    <ul className="space-y-3.5 text-xs sm:text-sm text-gray-200 comfort">
                      {section.rules.map((rule, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 shrink-0`} />
                          <span><strong>{rule.title}:</strong> {rule.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-8 pt-5 border-t border-white/10 text-xs ${badgeColor} font-mono`}>
                    {section.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* "Code of Honor" Pledge Card */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-white/15 overflow-hidden text-center backdrop-blur-xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                {rules.pledge.eyebrow}
              </span>
              <h2 className="monu text-2xl sm:text-3xl text-white mt-2 mb-3">
                {rules.pledge.title}
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base comfort leading-relaxed mb-6">
                {rules.pledge.quote}
              </p>

              {pledged ? (
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 monu text-sm shadow-xl shadow-emerald-500/20">
                  <span>✓</span>
                  <span>{rules.pledge.acceptedText} 🛡️</span>
                </div>
              ) : (
                <button
                  onClick={() => setPledged(true)}
                  className="ripple btn btn-primary btn-gradient py-3.5 px-8 rounded-xl monu text-sm font-bold text-white shadow-xl shadow-purple-600/30 hover:scale-105 transition-all cursor-pointer"
                >
                  {rules.pledge.acceptText} ✍️
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
      </main>
    </>
  );
}