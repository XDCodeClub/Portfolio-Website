import React, { useEffect, useState } from "react";

export default function SecurityGuard() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const triggerSecurityAlert = (msg) => {
    setAlertMessage(msg);
    setAlertVisible(true);
    if (window._xdSecurityTimeout) {
      clearTimeout(window._xdSecurityTimeout);
    }
    window._xdSecurityTimeout = setTimeout(() => {
      setAlertVisible(false);
    }, 2800);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Console Defense & Watermark
    try {
      const bannerStyle =
        "background: #060607; color: #5F4DFF; font-size: 16px; font-weight: 900; padding: 10px 16px; border-radius: 8px; border: 1px solid #5F4DFF;";
      const subStyle =
        "background: #121026; color: #00E5FF; font-size: 12px; padding: 6px 12px; border-radius: 4px; font-family: monospace;";
      const warnStyle =
        "color: #FF0055; font-size: 13px; font-weight: bold; font-family: monospace;";

      console.clear();
      console.log("%c[XD CODE CLUB — SECURITY SHIELD ACTIVE]", bannerStyle);
      console.log(
        "%cNode: SRCEM Lab 304 Mesh | Protected Production Build",
        subStyle
      );
      console.log(
        "%c⚠️ RESTRICTED ACCESS: Source code inspection, DOM manipulation, and automated scraping are monitored under the XD Code of Conduct. If you wish to inspect or contribute to our projects legitimately, join our open-source guild: https://xdcodeclub.netlify.app/projects",
        warnStyle
      );
    } catch (e) {
      // Ignore console restrictions
    }

    // 2. Intercept Context Menu (Right-Click)
    const handleContextMenu = (e) => {
      e.preventDefault();
      triggerSecurityAlert("Code inspection and right-click menus are restricted on this node.");
      return false;
    };

    // 3. Intercept DevTools & Source View Shortcuts
    const handleKeyDown = (e) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key ? e.key.toUpperCase() : "";
      const keyCode = e.keyCode || e.which;

      // F12 key
      if (keyCode === 123 || key === "F12") {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityAlert("Developer Tools shortcut (F12) is disabled.");
        return false;
      }

      // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect Element)
      if (isCtrlOrCmd && e.shiftKey && (key === "I" || key === "J" || key === "C" || keyCode === 73 || keyCode === 74 || keyCode === 67)) {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityAlert("Inspector shortcut (Ctrl+Shift+" + key + ") is disabled.");
        return false;
      }

      // Ctrl+U (View Page Source)
      if (isCtrlOrCmd && (key === "U" || keyCode === 85)) {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityAlert("View Source shortcut (Ctrl+U) is disabled.");
        return false;
      }

      // Ctrl+S (Save Page)
      if (isCtrlOrCmd && (key === "S" || keyCode === 83)) {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityAlert("Page archiving is disabled on this terminal.");
        return false;
      }
    };

    // 4. Prevent Image Drag / Extraction
    const handleDragStart = (e) => {
      if (e.target && e.target.nodeName === "IMG") {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("dragstart", handleDragStart);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("dragstart", handleDragStart);
      if (window._xdSecurityTimeout) {
        clearTimeout(window._xdSecurityTimeout);
      }
    };
  }, []);

  if (!alertVisible) return null;

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-none transition-all duration-300 animate-bounce">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0b0c16]/95 border border-[#5F4DFF] text-white shadow-[0_0_30px_rgba(95,77,255,0.45)] backdrop-blur-xl">
        <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0 text-purple-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#00E5FF] font-bold">
            XD Shield • Access Guard
          </span>
          <span className="text-xs text-gray-200 comfort font-medium">
            {alertMessage}
          </span>
        </div>
      </div>
    </div>
  );
}
