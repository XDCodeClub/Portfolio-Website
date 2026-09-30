import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleQuickReturn = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  return (
    <>
      <Head>
        <title>404: Signal Lost | XD Code Club - SRCEM</title>
        <meta
          name="description"
          content="The coordinates you requested do not exist in the XD Code Club node mesh. Return to headquarters."
        />
        <meta property="og:title" content="404: Signal Lost | XD Code Club - SRCEM" />
        <meta
          property="og:description"
          content="Error 404: Route not found. Return to XD Code Club headquarters."
        />
        <meta property="og:image" content="/xdcodeclub-logo2.png" />
      </Head>

      <main className="min-h-screen bg-[#060607] relative overflow-hidden flex flex-col justify-between">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-1" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-1" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none -z-1" />

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

        {/* 404 Main Cyber Body */}
        <section className="flex-1 flex items-center justify-center px-5 sm:px-10 py-12 relative z-10">
          <div className="max-w-2xl w-full text-center">
            {/* Holographic Error Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono mb-6 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>404: PACKET_ROUTED_TO_VOID</span>
            </div>

            {/* Large Glitch 404 Headline */}
            <h1 className="monu text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-rose-400 tracking-tighter leading-none mb-4 select-none">
              404
            </h1>

            <h2 className="monu text-xl sm:text-2xl text-white font-bold mb-3">
              Coordinates Lost in Cyber Void
            </h2>

            <p className="text-[#9ca0d2] text-sm sm:text-base leading-relaxed comfort max-w-lg mx-auto mb-8">
              The route or document you requested does not exist on the SRCEM Lab 304 node mesh. Either the frequency was decommissioned or the path was mistyped.
            </p>

            {/* Cyber Terminal Diagnostic Log */}
            <div className="max-w-lg mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-black/80 border border-white/10 font-mono text-left text-xs text-gray-300 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-1.5 pb-3 border-b border-white/10 mb-3 text-[11px] text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2">diagnostics — xd-router</span>
              </div>
              <p className="text-gray-400">
                <span className="text-purple-400">$</span> ping -c 1 {router.asPath || "/unknown"}
              </p>
              <p className="text-rose-400">
                &gt; Destination Host Unreachable: 404 Not Found
              </p>
              <p className="text-gray-400">
                &gt; Primary Gateway: SRCEM Lab 304 (Online 4ms)
              </p>
              <p className="text-emerald-400">
                &gt; Suggestion: Re-route packet to root node /
              </p>
            </div>

            {/* Navigation Actions */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={handleQuickReturn}
                disabled={isRedirecting}
                className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-8 sm:px-10 py-3.5 monu text-sm shadow-xl shadow-purple-600/40 flex items-center gap-2"
              >
                {isRedirecting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Re-routing...</span>
                  </>
                ) : (
                  <>
                    <span>← Return to Headquarters</span>
                  </>
                )}
              </button>

              <Link href="/projects">
                <a className="ripple px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs monu border border-white/20 transition-all">
                  Explore Projects →
                </a>
              </Link>
            </div>

            {/* Secondary Quick Jump Links */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400 comfort">
              <span>Quick jumps:</span>
              <Link href="/about">
                <a className="hover:text-white hover:underline">About Us</a>
              </Link>
              <span>•</span>
              <Link href="/u">
                <a className="hover:text-white hover:underline">Member Registry</a>
              </Link>
              <span>•</span>
              <Link href="/rules">
                <a className="hover:text-white hover:underline">Club Rules</a>
              </Link>
              <span>•</span>
              <Link href="/contact">
                <a className="hover:text-white hover:underline">Contact Dispatch</a>
              </Link>
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
      </main>
    </>
  );
}
