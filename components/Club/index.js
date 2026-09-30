import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Club() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <title>XD Code Club | Official Coding Club - SRCEM</title>
                <meta
                    name="description"
                    content="Official coding club of ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior). Coding for creativity, curiosity & community."
                />
                <link rel="canonical" href="https://xdcodeclub.netlify.app/" />
                <meta
                    name="keywords"
                    content="XD Code Club, SRCEM, ShriRam College of Engineering & Management, ShriRam Group of Colleges, SRGOC, coding club Banmore, coding club Gwalior, coding club Madhya Pradesh, student developer community, student hackathons, DevArena, CampusMate, software engineering mentorship, RGPV"
                />
                <meta property="og:title" content="XD Code Club | Official Coding Club - SRCEM" />
                <meta
                    property="og:description"
                    content="Official coding club of ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior)."
                />
                <meta property="og:url" content="https://xdcodeclub.netlify.app/" />
                <meta property="og:image" content="/xdcodeclub-logo2.png" />
                <meta name="twitter:title" content="XD Code Club | Official Coding Club - SRCEM" />
                <meta
                    name="twitter:description"
                    content="Coding for creativity, curiosity & community. Explore student projects, hackathons, and software engineering mentorship at SRCEM (ShriRam Group of Colleges)."
                />
                <meta name="twitter:image" content="/xdcodeclub-logo2.png" />
            </Head>
            <main className="min-h-screen bg-[#060607] relative overflow-hidden">
                {/* Subtle Ambient Background Gradients */}
                <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-1" />
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-1" />
                <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-1" />

                {/* Hero Globe Visual: Starts from top header underneath sticky menu with radial feathering so it blends seamlessly */}
                <div className="absolute top-0 right-0 w-full md:w-[62vw] lg:w-[52vw] h-[85vh] md:h-[95vh] pointer-events-none z-0 overflow-hidden flex items-start justify-end">
                    <div className="relative w-full h-full">
                        <img
                            className="w-full h-full object-contain md:object-cover rotate-180 mix-blend-screen opacity-85 filter contrast-125 brightness-110"
                            style={{
                                WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 55% 45%, black 25%, transparent 75%)",
                                maskImage: "radial-gradient(ellipse 75% 70% at 55% 45%, black 25%, transparent 75%)",
                            }}
                            src="/globe.jpg"
                            alt="Globe Visual"
                        />
                        {/* Feathering edge gradients to completely eliminate square boundaries */}
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#060607] via-[#060607]/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#060607] to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060607]/70 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Sticky Glass Navbar */}
                <div className="p-5 w-full sticky top-2 left-0 right-0 z-50">
                    <div className="backdrop-blur-lg bg-white bg-opacity-5 p-4 lg:px-8 px-4 rounded-2xl border border-white/10 shadow-2xl">
                        <div className='w-full m-auto flex justify-between items-center'>
                            {/* Logo */}
                            <div className='flex gap-x-2 items-center'>
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
                                    target={"_blank"}
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
                                    <a className="px-3 py-2 rounded-lg bg-white/15 text-white font-bold">Home</a>
                                </Link>
                                <Link href="/about">
                                    <a className="px-3 py-2 rounded-lg hover:bg-white/10">About</a>
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
                <div className="relative overflow-hidden min-h-[70vh] flex items-center">
                    <div className="row align-items-center justify-content-between relative z-10 w-full">
                        <div className="col-xl-10">
                            <div className="text-white orbi mx-5 sm:mx-10 md:mx-20 my-10 flex justify-start items-start flex-col">
                                <div className="text-[2rem] comfort tracking-widest">
                                    <h1>eat.</h1>
                                    <h1>sleep.</h1>
                                </div>
                                <div className="w-32 h-[2px] bg-white my-5"></div>
                                <h1 className="monu text-[3rem] sm:text-[4rem] md:text-[4.5rem] uppercase box-with-text leading-tight">XD Code Club</h1>
                                <div className="flex justify-center items-center gap-4">
                                    <h1 className="cursor-pointer monu text-[3rem] sm:text-[4rem] text-[#9ca0d2]">SRCEM</h1>
                                    <a target={"_blank"} rel="noreferrer" href={"http://srgoc.org/"}>
                                        <img className="cursor-pointer hover:scale-125 transition-transform ease-in-out" width="40" height="40" src="https://img.icons8.com/dotty/80/FFFFFF/internet.png" alt="internet" />
                                    </a>
                                </div>
                                <h1 className="monu text-[1.2rem] sm:text-[1.5rem] text-white mt-2">Coding for creativity, curiosity & community.</h1>
                                <div className="h-2 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full my-3"></div>
                                <div className="flex gap-4 mt-5 justify-start items-center">
                                    <a href="https://discord.gg/vVh32R6t" target={"_blank"} rel="noreferrer">
                                        <img className="h-9 w-9 hover:scale-[1.12] hover:brightness-150 transition-transform" src="https://img.icons8.com/ios-filled/50/FFFFFF/discord--v1.png" alt="Discord" />
                                    </a>
                                    <a href="https://www.instagram.com/xdcodeclub/" target={"_blank"} rel="noreferrer">
                                        <img className="h-9 w-9 hover:scale-[1.12] hover:brightness-150 transition-transform" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="Instagram" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/xd-code-club/" target={"_blank"} rel="noreferrer">
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
                        <h2 className="monu text-gray-100 text-[2rem]">what are we?</h2>
                        <p className="mt-4 mb-2 text-white font-semibold">We are the official coding club of ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior)</p>
                    </div>
                    <p className="text-[#9ca0d2] text-base leading-relaxed max-w-4xl">
                        XD Code Club is a student-driven software development community that teaches and mentors aspiring coders. We organize 24-hour hackathons, open-source sprints, and peer-to-peer DSA problem-solving sessions. Our mission is to transform theoretical engineering into deployed, impactful software.
                    </p>
                </div>

                {/* Featured Projects Teaser Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                        <div>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-3"></div>
                            <h2 className="monu text-gray-100 text-[2rem]">Featured Projects</h2>
                            <p className="text-[#9ca0d2] text-sm mt-1">Flagship software products built by our student developers.</p>
                        </div>
                        <Link href="/projects">
                            <a className="ripple px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold monu border border-white/20 transition-all self-start sm:self-auto flex items-center gap-2">
                                <span>Explore all projects</span>
                                <span>→</span>
                            </a>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1: DevArena */}
                        <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-2xl">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-purple-100 uppercase tracking-wider monu">
                                        Featured 🚀
                                    </span>
                                </div>
                                <h3 className="monu text-xl text-white font-bold mb-1">DevArena</h3>
                                <p className="text-xs text-gray-400 mb-3 comfort">Real-time Code Battles & Test Sandbox</p>
                                <p className="text-[#9ca0d2] text-sm leading-relaxed mb-4 comfort">
                                    Competitive multiplayer code battleground where students duel peers in real-time algorithmic showdowns with automated test runners.
                                </p>
                                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-blue-300 mb-6">
                                    <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Next.js</span>
                                    <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Socket.io</span>
                                    <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Docker</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                                <span className="text-gray-400 comfort">Lead: Jeevesh Para</span>
                                <Link href="/projects">
                                    <a className="text-blue-400 hover:underline monu">View Live Demo →</a>
                                </Link>
                            </div>
                        </div>

                        {/* Project 2: SRCEM CampusMate */}
                        <div className="p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-2xl">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-xl bg-teal-500/20 text-teal-400">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-emerald-100 uppercase tracking-wider monu">
                                        Campus Utility 🎓
                                    </span>
                                </div>
                                <h3 className="monu text-xl text-white font-bold mb-1">SRCEM CampusMate</h3>
                                <p className="text-xs text-gray-400 mb-3 comfort">College ERP & Academic Resource Vault</p>
                                <p className="text-[#9ca0d2] text-sm leading-relaxed mb-4 comfort">
                                    Centralizes lecture notes, previous year question papers, smart 75% attendance forecasts, and campus event notifications for 1,200+ students.
                                </p>
                                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-teal-300 mb-6">
                                    <span className="px-2.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">React</span>
                                    <span className="px-2.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">Firebase</span>
                                    <span className="px-2.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">TailwindCSS</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                                <span className="text-gray-400 comfort">Lead: Amit Mahor</span>
                                <Link href="/projects">
                                    <a className="text-teal-400 hover:underline monu">View Live Demo →</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How Can I Join Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">how can i join?</h2>
                    </div>
                    <p className="text-[#9ca0d2] py-8 max-w-3xl leading-relaxed">
                        Membership is open to all enthusiastic coders across all engineering branches at SRCEM. You can fill out our official registration form or join our active Discord community.
                    </p>

                    <a
                        href="https://forms.gle/vjS6yrbdoLu89uHA9"
                        target={"_blank"}
                        rel="noreferrer"
                        className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-10 py-3 monu text-sm shadow-xl shadow-purple-600/40"
                    >
                        Register for Membership
                    </a>
                </div>

                {/* Perks & Upgraded Swag Cards Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">perks of being an XD Coder</h2>
                    </div>
                    <p className="text-[#9ca0d2] pt-6 leading-relaxed max-w-3xl">
                        Members receive structured guidance throughout their engineering journey—from first-year DSA fundamentals to high-stakes MNC interview preparation and national hackathons.
                    </p>
                    <p className="text-[#9ca0d2] pt-4 leading-relaxed max-w-3xl">
                        Gain direct access to exclusive workshops led by industry software engineers, internal project incubator grants, and verified alumni referral networks.
                    </p>

                    <p className="text-white pt-8 monu text-lg font-bold">
                        and the cherry on the cake ✨
                    </p>
                    <p className="text-[#9ca0d2] pt-1">
                        Active XD Coding Club members earn these official swag goodies:
                    </p>

                    {/* Upgraded Dark Frosted Swag Cards with Neon Glow */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 max-w-4xl">
                        <div className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(95,77,255,0.25)] transition-all group hover:-translate-y-2 text-center">
                            <div className="bg-white/95 p-6 rounded-2xl mb-4 flex items-center justify-center h-44">
                                <img className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" src="/14.png" alt="Official Swag Merch" />
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Club T-Shirt</h4>
                            <p className="text-xs text-[#9ca0d2] mt-1 comfort">Signature Black Edition</p>
                        </div>

                        <div className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-blue-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(0,100,255,0.25)] transition-all group hover:-translate-y-2 text-center">
                            <div className="bg-white/95 p-6 rounded-2xl mb-4 flex items-center justify-center h-44">
                                <img className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" src="/12.png" alt="Official Swag Merch" />
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Sticker Pack</h4>
                            <p className="text-xs text-[#9ca0d2] mt-1 comfort">Die-Cut Dev Vinyls</p>
                        </div>

                        <div className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-emerald-500/60 shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all group hover:-translate-y-2 text-center">
                            <div className="bg-white/95 p-6 rounded-2xl mb-4 flex items-center justify-center h-44">
                                <img className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" src="/13.png" alt="Official Swag Merch" />
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Member Kit</h4>
                            <p className="text-xs text-[#9ca0d2] mt-1 comfort">Custom Badges & Notebook</p>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">benefits of joining 🤔</h2>
                    </div>
                    <p className="text-gray-100 py-6">
                        Why students choose XD Code Club at SRCEM:
                    </p>

                    <div className="space-y-3 max-w-3xl">
                        <div className="text-[#9ca0d2] flex gap-3 items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0"></div>
                            <span>Collaborating with passionate peer developers and learning modern frameworks.</span>
                        </div>
                        <div className="text-[#9ca0d2] flex gap-3 items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0"></div>
                            <span>Teaching others to reinforce your own deep software fundamentals.</span>
                        </div>
                        <div className="text-[#9ca0d2] flex gap-3 items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0"></div>
                            <span>Building essential leadership, teamwork, public speaking, and project management skills.</span>
                        </div>
                        <div className="text-[#9ca0d2] flex gap-3 items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0"></div>
                            <span>Networking with students across other institutions and technical communities.</span>
                        </div>
                        <div className="text-[#9ca0d2] flex gap-3 items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0"></div>
                            <span>Direct mentorship and referral access from alumni working at top tech firms.</span>
                        </div>
                        <div className="text-[#9ca0d2] flex gap-3 items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0"></div>
                            <span>Opportunities to compete in hackathons and sponsored technical contests.</span>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="w-[90%] text-white comfort mx-5 sm:mx-10 md:mx-20 my-24">
                    <div>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full my-2"></div>
                        <h2 className="monu text-gray-100 text-[2rem]">#team</h2>
                    </div>

                    {/* Executive Leads */}
                    <div className="my-10 flex flex-wrap justify-start items-center gap-10">
                        {/* Amit Mahor */}
                        <div className="flex flex-row items-center gap-6">
                            <div className="card rounded-2xl relative group overflow-hidden border border-white/15 shadow-xl">
                                <img className="w-full h-full object-cover" src="/logo.png" alt="Amit Mahor" />
                                <a target={"_blank"} rel="noreferrer" href={"https://www.linkedin.com/in/amitmahor/"}>
                                    <div className="transition-all ease-in-out translate-y-full group-hover:translate-y-0 w-full h-full flex justify-center items-center bg-[#000000ad] z-10 absolute left-0 top-0">
                                        <img className="h-12 w-12" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <h3 className="monu text-lg text-blue-400 font-bold">Amit Mahor</h3>
                                <p className="font-extrabold text-white text-sm">Vice President</p>
                                <p className="text-xs text-gray-400">(XD Code Club, SRCEM)</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <a target={"_blank"} rel="noreferrer" href={"https://www.linkedin.com/in/amitmahor/"}>
                                        <img className="h-7 w-7 hover:scale-110 transition-transform" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                                    </a>
                                    <a target={"_blank"} rel="noreferrer" href={"https://linktr.ee/amitmahor"}>
                                        <img className="h-6 w-6 hover:scale-110 transition-transform" src="https://img.icons8.com/pulsar-line/48/FFFFFF/linktree.png" alt="Linktree" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Jeevesh Para */}
                        <div className="flex flex-row items-center gap-6">
                            <div className="card rounded-2xl relative group overflow-hidden border border-white/15 shadow-xl">
                                <img className="w-full h-full object-cover" src="/jeevesh.jpg" alt="Jeevesh Para" />
                                <a target={"_blank"} rel="noreferrer" href={"https://www.linkedin.com/in/jeeveshpara/"}>
                                    <div className="transition-all ease-in-out translate-y-full group-hover:translate-y-0 w-full h-full flex justify-center items-center bg-[#000000ad] z-10 absolute left-0 top-0">
                                        <img className="h-12 w-12" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <h3 className="monu text-lg text-blue-400 font-bold">Jeevesh Para</h3>
                                <p className="font-extrabold text-white text-sm">Technical Head</p>
                                <p className="text-xs text-gray-400">(XD Code Club, SRCEM)</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <a target={"_blank"} rel="noreferrer" href={"https://www.linkedin.com/in/jeeveshpara/"}>
                                        <img className="h-7 w-7 hover:scale-110 transition-transform" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                                    </a>
                                    <a target={"_blank"} rel="noreferrer" href={"https://linktr.ee/jeeveshpara"}>
                                        <img className="h-6 w-6 hover:scale-110 transition-transform" src="https://img.icons8.com/pulsar-line/48/FFFFFF/linktree.png" alt="Linktree" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upgraded Core Members Section with Photo Cards */}
                    <div className="mt-16 mb-8">
                        <div className="w-20 h-[1px] bg-white mb-3"></div>
                        <h3 className="monu text-blue-400 text-lg font-bold">core engineering council</h3>
                        <p className="text-xs text-[#9ca0d2] mt-1">Student leads driving development, workshops, and community events.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                        {/* Member 1: Tanish */}
                        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-purple-500/50 hover:-translate-y-1.5 transition-all group">
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/20 mb-3 group-hover:border-purple-400 transition-colors">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="/tanish.jpg" alt="Tanish Rathore" />
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Tanish Rathore</h4>
                            <p className="text-[11px] text-purple-300 font-mono mt-0.5">Full Stack Lead</p>
                        </div>

                        {/* Member 2: Suraj */}
                        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-blue-500/50 hover:-translate-y-1.5 transition-all group">
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/20 mb-3 group-hover:border-blue-400 transition-colors">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="/suraj.jpg" alt="Suraj Sharma" />
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Suraj Sharma</h4>
                            <p className="text-[11px] text-blue-300 font-mono mt-0.5">Open Source Lead</p>
                        </div>

                        {/* Member 3: Rahul */}
                        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all group">
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/20 mb-3 group-hover:border-emerald-400 transition-colors">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="/rahul.jpeg" alt="Rahul Kumar" />
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Rahul Kumar</h4>
                            <p className="text-[11px] text-emerald-300 font-mono mt-0.5">Systems & DevOps</p>
                        </div>

                        {/* Member 4: Saniya Mirza */}
                        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-amber-500/50 hover:-translate-y-1.5 transition-all group">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-500/30 to-purple-500/30 border-2 border-white/20 mb-3 flex items-center justify-center text-xl text-white font-bold monu group-hover:border-amber-400 transition-colors">
                                SM
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Saniya Mirza</h4>
                            <p className="text-[11px] text-amber-300 font-mono mt-0.5">UI/UX & Design</p>
                        </div>

                        {/* Member 5: Ananya Sharma */}
                        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-rose-500/50 hover:-translate-y-1.5 transition-all group">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-rose-500/30 to-blue-500/30 border-2 border-white/20 mb-3 flex items-center justify-center text-xl text-white font-bold monu group-hover:border-rose-400 transition-colors">
                                AS
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Ananya Sharma</h4>
                            <p className="text-[11px] text-rose-300 font-mono mt-0.5">DSA & Contests</p>
                        </div>

                        {/* Member 6: Yash Pathak */}
                        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all group">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30 border-2 border-white/20 mb-3 flex items-center justify-center text-xl text-white font-bold monu group-hover:border-cyan-400 transition-colors">
                                YP
                            </div>
                            <h4 className="monu text-sm text-white font-bold">Yash Pathak</h4>
                            <p className="text-[11px] text-cyan-300 font-mono mt-0.5">IoT & Hardware</p>
                        </div>
                    </div>
                </div>

            </main>

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
        </>
    );
}