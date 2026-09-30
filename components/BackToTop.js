import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 p-3.5 sm:p-4 rounded-2xl backdrop-blur-xl bg-black/60 border border-white/20 text-white shadow-[0_0_25px_rgba(95,77,255,0.45)] hover:shadow-[0_0_35px_rgba(95,77,255,0.85)] hover:border-purple-400/60 transition-all duration-300 ease-out group cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-90 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Neon arrow icon */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-white transition-all transform group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className="text-[9px] monu tracking-wider text-gray-300 group-hover:text-purple-300 transition-colors mt-0.5 hidden sm:block">
          TOP
        </span>
      </div>
    </button>
  );
}
