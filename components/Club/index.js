import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import siteContent from "../../data/siteContent";

export default function Club() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { club, socialLinks, forms, home, projects, footer } = siteContent;

    // Filter featured projects from the master projects list
    const featuredProjects = projects.list.filter((p) => p.featured);

    return (
        <>
            <Head>
                <title>{home.meta.title}</title>
                <meta name="description" content={home.meta.description} />
                <link rel="canonical" href={club.websiteUrl + "/"} />
                <meta name="keywords" content={home.meta.keywords} />
                <meta property="og:title" content={home.meta.title} />
                <meta property="og:description" content={home.meta.description} />
                <meta property="og:url" content={club.websiteUrl + "/"} />
                <meta property="og:image" content={club.logo} />
                <meta name="twitter:title" content={home.meta.title} />
                <meta name="twitter:description" content={home.meta.description} />
                <meta name="twitter:image" content={club.logo} />
            </Head>

            <main className="min-h-screen bg-[#060607] relative overflow-hidden">
                {/* Subtle Ambient Background Gradients */}
                <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-1" />
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-1" />
                <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-1" />

                {/* Hero Globe Visual */}
                <div className="absolute top-0 right-0 w-full md:w-[62vw] lg:w-[52vw] h-[85vh] md:h-[95vh] pointer-events-none z-0 overflow-hidden flex items-start justify-end">
                    <div className="relative w-full h-full">
                        <img
                            className="w-full h-full object-contain md:object-cover rotate-180 mix-blend-screen opacity-85 filter contrast-125 brightness-110"
                            style={{
                                WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 55% 45%, black 25%, transparent 75%)",
                                maskImage: "radial-gradient(ellipse 75% 70% at 55% 45%, black 25%, transparent 75%)",
                            }}
                            src={club.globeVisual}
                            alt="Globe Visual"
                        />
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#060607] via-[#060607]/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#060607] to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060607]/70 to-transparent pointer-events-none" />
                    </div>
                </div>

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
                                    <h1 className="cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg bg-white/15 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
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
                                    <h1 className="ripple cursor-pointer text-sm sm:text-base px-2 py-2 rounded-md transition-colors hover:text-black">
                                        Contact
                                    </h1>
                                </Link>
                                <a
                                    href={forms.membershipRegistration}
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 sm:px-10 py-2 monu text-sm shadow-lg shadow-purple-600/30"
                                >
                                    {home.hero.joinButtonText}
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
                                    {home.hero.joinButtonMobileText}
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
                                    <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">Home</a>
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
                                    <a className="px-3 py-2 rounded-lg hover:bg-white/10">Contact</a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative overflow-hidden min-h-[70vh] flex items-center">
                    <div className="row align-items-center justify-content-between relative z-10 w-full">
                        <div className="col-xl-10">
                            <div className="text-white orbi mx-5 sm:mx-10 md:mx-20 my-10 flex justify-start items-start flex-col">
                                <div className="text-[2rem] comfort tracking-widest">
                                    {home.hero.eyebrowWords.map((word, idx) => (
                                        <h1 key={idx}>{word}</h1>
                                    ))}
                                </div>
                                <div className="w-32 h-[2px] bg-white my-5"></div>
                                <h1 className="monu text-[3rem] sm:text-[4rem] md:text-[4.5rem] uppercase box-with-text leading-tight">
                                    {home.hero.title}
                                </h1>
                                <div className="flex justify-center items-center gap-4">
                                    <h1 className="cursor-pointer monu text-[3rem] sm:text-[4rem] text-[#9ca0d2]">
                                        {home.hero.collegePill}
                                    </h1>
                                    <a target={"_blank"} rel="noreferrer" href={club.collegeWebsite}>
                                        <img
                                            className="cursor-pointer hover:scale-125 transition-transform ease-in-out"
                                            width="40"
                                            height="40"
                                            src="https://img.icons8.com/dotty/80/FFFFFF/internet.png"
                                            alt="internet"
                                        />
                                    </a>
                                </div>
                                <h1 className="monu text-[1.2rem] sm:text-[1.5rem] text-white mt-2">
                                    {home.hero.tagline}
                                </h1>
                                <div className="h-2 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full my-3"></div>
                                <div className="flex gap-4 mt-5 justify-start items-center">
                                    <a href={socialLinks.discord} target={"_blank"} rel="noreferrer" aria-label="Discord">
                                        <img className="h-9 w-9 hover:scale-[1.12] hover:brightness-150 transition-transform" src="https://img.icons8.com/ios-filled/50/FFFFFF/discord--v1.png" alt="Discord" />
                                    </a>
                                    <a href={socialLinks.instagram} target={"_blank"} rel="noreferrer" aria-label="Instagram">
                                        <img className="h-9 w-9 hover:scale-[1.12] hover:brightness-150 transition-transform" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="Instagram" />
                                    </a>
                                    <a href={socialLinks.linkedin} target={"_blank"} rel="noreferrer" aria-label="LinkedIn">
                                        <img className="h-9 w-9 hover:scale-[1.12] hover:brightness-150 transition-transform" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin--v1.png" alt="LinkedIn" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What Are We Section */}
                <div id="about" className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">{home.whatAreWe.eyebrow}</h2>
                        <p className="mt-4 mb-2 text-white font-semibold">{home.whatAreWe.subtitle}</p>
                    </div>
                    <p className="text-[#9ca0d2] text-base leading-relaxed max-w-4xl">
                        {home.whatAreWe.description}
                    </p>
                </div>

                {/* Featured Projects Teaser Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                        <div>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3"></div>
                            <h2 className="monu text-gray-100 text-[2rem]">{home.featuredProjects.title}</h2>
                            <p className="text-[#9ca0d2] text-sm mt-1">{home.featuredProjects.subtitle}</p>
                        </div>
                        <Link href={home.featuredProjects.exploreButtonHref}>
                            <a className="ripple px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold monu border border-white/20 transition-all self-start sm:self-auto flex items-center gap-2">
                                <span>{home.featuredProjects.exploreButtonText}</span>
                                <span>→</span>
                            </a>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-2xl"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.badgeColor} uppercase tracking-wider monu`}>
                                            {project.badge}
                                        </span>
                                    </div>
                                    <h3 className="monu text-xl text-white font-bold mb-1">{project.title}</h3>
                                    <p className="text-xs text-gray-400 mb-3 comfort">{project.subtitle}</p>
                                    <p className="text-[#9ca0d2] text-sm leading-relaxed mb-4 comfort">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-blue-300 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                                    <span className="text-gray-400 comfort">Lead: {project.contributors}</span>
                                    <Link href="/projects">
                                        <a className="text-blue-400 hover:underline monu">View Live Demo →</a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How Can I Join Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">{home.howToJoin.title}</h2>
                    </div>
                    <p className="text-[#9ca0d2] py-8 max-w-3xl leading-relaxed">
                        {home.howToJoin.description}
                    </p>

                    <a
                        href={forms.membershipRegistration}
                        target={"_blank"}
                        rel="noreferrer"
                        className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-10 py-3 monu text-sm shadow-xl shadow-purple-600/40"
                    >
                        {home.howToJoin.buttonText}
                    </a>
                </div>

                {/* Perks & Upgraded Swag Cards Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">{home.perks.title}</h2>
                    </div>
                    <p className="text-[#9ca0d2] pt-6 leading-relaxed max-w-3xl">
                        {home.perks.paragraph1}
                    </p>
                    <p className="text-[#9ca0d2] pt-4 leading-relaxed max-w-3xl">
                        {home.perks.paragraph2}
                    </p>

                    <p className="text-white pt-8 monu text-lg font-bold">
                        {home.perks.cherryHeading}
                    </p>
                    <p className="text-[#9ca0d2] pt-1">
                        {home.perks.cherrySubtitle}
                    </p>

                    {/* Upgraded Dark Frosted Swag Cards with Neon Glow */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 max-w-4xl">
                        {home.perks.swags.map((swag, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(95,77,255,0.25)] transition-all group hover:-translate-y-2 text-center"
                            >
                                <div className="bg-white/95 p-6 rounded-2xl mb-4 flex items-center justify-center h-44">
                                    <img className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" src={swag.image} alt={swag.title} />
                                </div>
                                <h4 className="monu text-sm text-white font-bold">{swag.title}</h4>
                                <p className="text-xs text-[#9ca0d2] mt-1 comfort">{swag.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">{home.benefits.title}</h2>
                    </div>
                    <p className="text-gray-100 py-6">
                        {home.benefits.subtitle}
                    </p>

                    <div className="space-y-3 max-w-3xl">
                        {home.benefits.list.map((item, idx) => (
                            <div key={idx} className="text-[#9ca0d2] flex gap-3 items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0"></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">{home.team.title}</h2>
                    </div>

                    {/* Executive Leads */}
                    <div className="my-10 flex flex-wrap justify-start items-center gap-10">
                        {home.team.executives.map((exec, idx) => (
                            <div key={idx} className="flex flex-row items-center gap-6">
                                <div className="card rounded-2xl relative group overflow-hidden border border-white/15 shadow-xl">
                                    <img className="w-full h-full object-cover" src={exec.avatar} alt={exec.name} />
                                    <a target={"_blank"} rel="noreferrer" href={exec.linkedin}>
                                        <div className="transition-all ease-in-out translate-y-full group-hover:translate-y-0 w-full h-full flex justify-center items-center bg-[#000000ad] z-10 absolute left-0 top-0">
                                            <img className="h-12 w-12" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <h3 className="monu text-lg text-blue-400 font-bold">{exec.name}</h3>
                                    <p className="font-extrabold text-white text-sm">{exec.role}</p>
                                    <p className="text-xs text-gray-400">{exec.subRole}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <a target={"_blank"} rel="noreferrer" href={exec.linkedin} aria-label="LinkedIn">
                                            <img className="h-7 w-7 hover:scale-110 transition-transform" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                                        </a>
                                        {exec.linktree && (
                                            <a target={"_blank"} rel="noreferrer" href={exec.linktree} aria-label="Linktree">
                                                <img className="h-6 w-6 hover:scale-110 transition-transform" src="https://img.icons8.com/pulsar-line/48/FFFFFF/linktree.png" alt="Linktree" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Core Members Section with Photo Cards */}
                    <div className="mt-16 mb-8">
                        <div className="w-20 h-[1px] bg-white mb-3"></div>
                        <h3 className="monu text-blue-400 text-lg font-bold">{home.team.coreCouncilHeading}</h3>
                        <p className="text-xs text-[#9ca0d2] mt-1">{home.team.coreCouncilSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                        {home.team.council.map((member, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-purple-500/50 hover:-translate-y-1.5 transition-all group"
                            >
                                {member.avatar ? (
                                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/20 mb-3 group-hover:border-purple-400 transition-colors">
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={member.avatar} alt={member.name} />
                                    </div>
                                ) : (
                                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-500/30 to-purple-500/30 border-2 border-white/20 mb-3 flex items-center justify-center text-xl text-white font-bold monu group-hover:border-amber-400 transition-colors">
                                        {member.initials}
                                    </div>
                                )}
                                <h4 className="monu text-sm text-white font-bold">{member.name}</h4>
                                <p className="text-[11px] text-purple-300 font-mono mt-0.5">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

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
        </>
    );
}