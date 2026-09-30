import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import siteContent from "../../data/siteContent";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Query",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { club, forms, contact, footer } = siteContent;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Interactive dispatch simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "General Query",
        message: "",
      });
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>{contact.meta.title}</title>
        <meta name="description" content={contact.meta.description} />
        <meta property="og:title" content={contact.meta.title} />
        <meta property="og:description" content={contact.meta.ogDescription} />
        <link rel="canonical" href={`${club.websiteUrl}/contact`} />
        <meta property="og:url" content={`${club.websiteUrl}/contact`} />
        <meta property="og:image" content={club.logo} />
        <meta name="twitter:title" content={contact.meta.title} />
        <meta name="twitter:description" content={contact.meta.description} />
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
                  <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                    Rules
                  </h1>
                </Link>
                <Link href={"/contact"}>
                  <h1 className="cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
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
                  <a className="px-3 py-2 rounded-lg hover:bg-white/10">Rules</a>
                </Link>
                <Link href="/contact">
                  <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">Contact</a>
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
                {contact.hero.eyebrow}
              </span>
            </div>

            <h1 className="monu text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] uppercase box-with-text leading-tight tracking-wider">
              {contact.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-[#9ca0d2] mt-3 max-w-2xl leading-relaxed">
              {contact.hero.subtitle}
            </p>
          </div>
        </section>

        {/* 3 Quick Connect Channels */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contact.channels.map((ch, idx) => {
              const borderHover =
                ch.color === "indigo"
                  ? "hover:border-indigo-500/60"
                  : ch.color === "blue"
                  ? "hover:border-blue-500/60"
                  : "hover:border-emerald-500/60";

              const textAction =
                ch.color === "indigo"
                  ? "text-indigo-300"
                  : ch.color === "blue"
                  ? "text-blue-300"
                  : "text-emerald-300";

              if (ch.href) {
                return (
                  <a
                    key={idx}
                    href={ch.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 ${borderHover} transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between`}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <img className="h-6 w-6" src={ch.icon} alt={ch.title} />
                      </div>
                      <h3 className="monu text-lg text-white font-bold mb-1 flex items-center gap-2">
                        <span>{ch.title}</span>
                        <span className="text-xs text-indigo-400 font-mono font-normal">{ch.status}</span>
                      </h3>
                      <p className="text-[#9ca0d2] text-sm comfort">{ch.description}</p>
                    </div>
                    <div className={`mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs ${textAction} monu`}>
                      <span>{ch.actionText}</span>
                      <span>→</span>
                    </div>
                  </a>
                );
              }

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 ${borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="monu text-lg text-white font-bold mb-1">{ch.title}</h3>
                    <p className="text-[#9ca0d2] text-sm comfort mb-4">{ch.description}</p>
                    <div className="space-y-2 text-xs">
                      <a
                        href={`mailto:${ch.email}`}
                        className="flex items-center gap-2 text-gray-200 hover:text-emerald-400 transition-colors comfort"
                      >
                        <span className="text-emerald-400 font-mono">✉️</span>
                        <span>{ch.email}</span>
                      </a>
                      <a
                        href={ch.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-200 hover:text-emerald-400 transition-colors comfort"
                      >
                        <span className="text-emerald-400 font-mono">💬</span>
                        <span>WhatsApp: {ch.phone}</span>
                      </a>
                    </div>
                  </div>
                  <div className={`mt-5 pt-4 border-t border-white/10 text-xs ${textAction} font-mono`}>
                    ⚡ Avg response time: {ch.status}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Main Content: Form & Campus Coordinates Grid */}
        <section className="mx-5 sm:mx-10 md:mx-20 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Glassmorphic Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold comfort">
                  {contact.form.eyebrow}
                </span>
                <h2 className="monu text-2xl text-white font-bold mt-1">{contact.form.title}</h2>
                <p className="text-xs sm:text-sm text-[#9ca0d2] comfort mt-1">
                  {contact.form.subtitle}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center comfort">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h3 className="monu text-xl text-white font-bold mb-2">{contact.form.successTitle}</h3>
                  <p className="text-sm text-[#9ca0d2] max-w-md mx-auto mb-6">
                    {contact.form.successMessage}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs monu transition-all"
                  >
                    {contact.form.resetButtonText}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 monu">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/[0.05] text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all comfort"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 monu">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white/[0.05] text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all comfort"
                      />
                    </div>
                  </div>

                  {/* Subject / Topic Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2 monu">
                      Topic / Inquiry Subject *
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#111116] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all comfort cursor-pointer"
                    >
                      {contact.form.subjects.map((sub, i) => (
                        <option key={i} value={sub} className="bg-[#111116] text-white">
                          {sub}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2 monu">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share details regarding your idea, collaboration proposal, or general query..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/[0.05] text-white placeholder-gray-500 text-sm p-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all comfort resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full ripple btn btn-primary btn-gradient py-3.5 px-6 rounded-xl monu text-sm font-bold text-white shadow-xl shadow-purple-600/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{contact.form.submittingButtonText}</span>
                      </>
                    ) : (
                      <>
                        <span>{contact.form.submitButtonText}</span>
                        <span>⚡</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Campus Coordinates & Location Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-blue-400 font-mono font-bold">
                      {contact.coordinates.eyebrow}
                    </span>
                    <h3 className="monu text-lg text-white font-bold">{contact.coordinates.title}</h3>
                  </div>
                </div>

                <div className="space-y-3 text-sm comfort text-[#9ca0d2] leading-relaxed">
                  <p className="font-semibold text-white">
                    {contact.coordinates.college}
                    <span className="block text-xs text-purple-400 font-mono mt-0.5 font-normal">
                      {contact.coordinates.group}
                    </span>
                  </p>
                  <p>
                    {contact.coordinates.addressLines.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-mono border border-blue-500/20">
                      {contact.coordinates.labPill}
                    </span>
                  </div>
                </div>

                {/* College Website Link */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 comfort">{contact.coordinates.collegeSiteLabel}</span>
                  <a
                    href={contact.coordinates.collegeSiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-400 hover:underline monu"
                  >
                    {contact.coordinates.collegeSiteDisplay}
                  </a>
                </div>
              </div>

              {/* Weekly Meetups Card */}
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <h4 className="monu text-white text-sm mb-2 flex items-center gap-2">
                  <span className="text-purple-400">⏱️</span> {contact.weeklyMeets.title}
                </h4>
                <p className="text-xs text-[#9ca0d2] comfort leading-relaxed mb-3">
                  {contact.weeklyMeets.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {contact.weeklyMeets.schedules.map((s, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-purple-300 border border-purple-500/20 font-mono">
                      {s.label}
                    </span>
                  ))}
                </div>
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