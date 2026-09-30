import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaqJsonLd } from "../../components/SEO/JsonLd";
import siteContent from "../../data/siteContent";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState("experience");

  const { club, forms, about, footer } = siteContent;

  return (
    <>
      <Head>
        <title>{about.meta.title}</title>
        <meta name="description" content={about.meta.description} />
        <meta property="og:title" content={about.meta.title} />
        <meta property="og:description" content={about.meta.ogDescription} />
        <link rel="canonical" href={`${club.websiteUrl}/about`} />
        <meta property="og:url" content={`${club.websiteUrl}/about`} />
        <meta property="og:image" content={club.logo} />
        <meta name="twitter:title" content={about.meta.title} />
        <meta name="twitter:description" content={about.meta.description} />
        <meta name="twitter:image" content={club.logo} />
      </Head>
      <FaqJsonLd faqs={about.faqs} />

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
                  <h1 className="cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
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
                  <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">About</a>
                </Link>
                <Link href="/projects">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Projects</a>
                </Link>
                <Link href="/u">
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Members</a>
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
                {about.hero.eyebrow}
              </span>
            </div>

            <h1 className="monu text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] uppercase box-with-text leading-tight tracking-wider">
              {about.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold mt-2 monu">
              {about.hero.headline}
            </p>

            <p className="text-[#9ca0d2] text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
              {about.hero.description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
              {about.hero.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className={`monu text-2xl ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-20">
          <div className="mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3" />
            <h2 className="monu text-2xl sm:text-3xl text-white font-bold">{about.pillars.heading}</h2>
            <p className="text-sm text-[#9ca0d2] mt-1 comfort">{about.pillars.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.pillars.items.map((pillar, idx) => {
              const colorClasses =
                pillar.color === "purple"
                  ? { bg: "bg-purple-500/20", border: "border-purple-500/30", text: "text-purple-400", hoverBorder: "hover:border-purple-500/50" }
                  : pillar.color === "emerald"
                  ? { bg: "bg-emerald-500/20", border: "border-emerald-500/30", text: "text-emerald-400", hoverBorder: "hover:border-emerald-500/50" }
                  : { bg: "bg-blue-500/20", border: "border-blue-500/30", text: "text-blue-400", hoverBorder: "hover:border-blue-500/50" };

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 ${colorClasses.hoverBorder} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center mb-5 ${colorClasses.text}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="monu text-lg text-white font-bold mb-2">{pillar.title}</h3>
                    <p className="text-[#9ca0d2] text-sm leading-relaxed comfort">
                      {pillar.description}
                    </p>
                  </div>
                  <div className={`mt-5 pt-4 border-t border-white/10 text-xs ${colorClasses.text} font-mono`}>
                    {pillar.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Club Timeline / Milestones */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-24">
          <div className="mb-10">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3" />
            <h2 className="monu text-2xl sm:text-3xl text-white font-bold">{about.journey.heading}</h2>
            <p className="text-sm text-[#9ca0d2] mt-1 comfort">{about.journey.subtitle}</p>
          </div>

          <div className="relative border-l border-white/15 pl-6 sm:pl-10 space-y-12">
            {about.journey.milestones.map((item, idx) => {
              const dotColor =
                item.color === "purple"
                  ? "bg-purple-500 text-purple-400 bg-purple-500/10 border-purple-500/20"
                  : item.color === "emerald"
                  ? "bg-emerald-500 text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                  : item.color === "amber"
                  ? "bg-amber-500 text-amber-400 bg-amber-500/10 border-amber-500/20"
                  : "bg-blue-500 text-blue-400 bg-blue-500/10 border-blue-500/20";

              return (
                <div key={idx} className="relative group">
                  <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full ${item.color === "purple" ? "bg-purple-500" : item.color === "emerald" ? "bg-emerald-500" : item.color === "amber" ? "bg-amber-500" : "bg-blue-500"} border-4 border-[#060607] group-hover:scale-125 transition-transform`} />
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${dotColor}`}>
                    {item.year}
                  </span>
                  <h3 className="monu text-lg sm:text-xl text-white font-bold mt-2">{item.title}</h3>
                  <p className="text-[#9ca0d2] text-sm leading-relaxed mt-1 max-w-2xl comfort">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Guilds Section */}
        {about.guilds && (
          <section className="mx-5 sm:mx-10 md:mx-20 mb-24">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="max-w-2xl mb-8">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3" />
                <h2 className="monu text-2xl sm:text-3xl text-white font-bold">{about.guilds.heading}</h2>
                <p className="text-sm text-[#9ca0d2] mt-1 comfort">{about.guilds.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {about.guilds.items.map((guild, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
                    <h4 className="monu text-white text-base mb-2 flex items-center gap-2">
                      <span>{guild.icon}</span> {guild.title}
                    </h4>
                    <p className="text-xs text-[#9ca0d2] mb-3 comfort">{guild.description}</p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-blue-300">
                      {guild.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
            {about.faqs.map((faq) => {
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
          {about.quickHelp && (
            <div className="mt-8 p-5 rounded-2xl bg-white/[0.02] border border-white/10 max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <p className="text-xs sm:text-sm text-gray-300 comfort">
                  {about.quickHelp.text} <span className="text-white font-bold">{about.quickHelp.room}</span> or drop us a message.
                </p>
              </div>
              <Link href={about.quickHelp.actionHref}>
                <a className="monu text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1.5 whitespace-nowrap hover:underline">
                  <span>{about.quickHelp.actionText}</span>
                  <span>→</span>
                </a>
              </Link>
            </div>
          )}
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
                {about.cta.heading}
              </h2>
              <p className="text-[#9ca0d2] text-sm sm:text-base comfort leading-relaxed mb-8">
                {about.cta.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a
                  href={forms.membershipRegistration}
                  target="_blank"
                  rel="noreferrer"
                  className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 py-3 monu text-sm shadow-xl shadow-purple-600/40"
                >
                  {about.cta.primaryButtonText}
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