import React, { useState } from "react";

const INITIAL_LOGS = [
  { type: "cmd", text: "xd --status" },
  { type: "res", text: "> Connecting to SRCEM Lab 304 Node... Connected (4ms)" },
  { type: "res", text: "> Active Pods: DevArena, CampusMate, CogniScan" },
  { type: "res", text: "> Mesh: 250+ student developers online" },
  { type: "success", text: "> Ready to ship. Join the guild!" },
];

export default function TerminalTeaser() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let newLogs = [...logs, { type: "cmd", text: cmd }];

    if (cleanCmd === "clear" || cleanCmd === "xd --clear") {
      setLogs([]);
      return;
    } else if (cleanCmd === "xd --status") {
      newLogs.push(
        { type: "res", text: "> Connecting to SRCEM Lab 304 Node... Connected (4ms)" },
        { type: "res", text: "> Active Pods: DevArena, CampusMate, CogniScan" },
        { type: "success", text: "> Ready to ship. Join the guild!" }
      );
    } else if (cleanCmd === "xd --projects") {
      newLogs.push(
        { type: "res", text: "> [1] DevArena - Real-time DSA Duel Arena (Next.js + Docker)" },
        { type: "res", text: "> [2] SRCEM CampusMate - Academic ERP for 1.2k+ students" },
        { type: "res", text: "> [3] CogniScan AI - ATS Resume & Mock Interview Copilot" },
        { type: "success", text: "> View all at /projects" }
      );
    } else if (cleanCmd === "xd --join") {
      newLogs.push(
        { type: "res", text: "> Opening official membership registration form..." },
        { type: "success", text: "> Link: https://forms.gle/8q4ZmyutMPViSBaY8" }
      );
    } else if (cleanCmd === "xd --team") {
      newLogs.push(
        { type: "res", text: "> Vice President: Amit Mahor" },
        { type: "res", text: "> Technical Head: Jeevesh Para" },
        { type: "res", text: "> Core Council: Tanish, Suraj, Rahul, Saniya, Ananya, Yash" }
      );
    } else if (cleanCmd === "help" || cleanCmd === "xd --help") {
      newLogs.push(
        { type: "res", text: "Available commands:" },
        { type: "res", text: "  xd --status   : Query live club nodes" },
        { type: "res", text: "  xd --projects : List flagship student software" },
        { type: "res", text: "  xd --join     : Registration link" },
        { type: "res", text: "  xd --team     : Council leadership" },
        { type: "res", text: "  clear         : Clear screen" }
      );
    } else {
      newLogs.push({
        type: "error",
        text: `Command not found: "${cmd}". Type 'help' for command list.`,
      });
    }

    setLogs(newLogs);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
  };

  const handleCopy = () => {
    const textToCopy = logs.map((l) => l.text).join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg rounded-2xl backdrop-blur-xl bg-black/80 border border-purple-500/30 shadow-[0_0_40px_rgba(95,77,255,0.22)] overflow-hidden transition-all duration-300 hover:border-purple-500/60 font-mono text-xs sm:text-[13px]">
      {/* macOS / Linux Terminal Window Header */}
      <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between select-none">
        {/* Colorful Dot Controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)] cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)] cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)] cursor-pointer" />
          <span className="ml-2 text-gray-400 text-[11px] hidden sm:inline">
            bash — xd@srcem-lab304:~
          </span>
        </div>

        {/* Live Status + Copy button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Online (4ms)</span>
          </div>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white text-[11px] flex items-center gap-1 transition-colors"
            title="Copy terminal session"
          >
            {copied ? (
              <span className="text-emerald-400 font-bold">Copied!</span>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 sm:p-5 h-56 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-purple-600/30">
        {logs.map((log, index) => {
          if (log.type === "cmd") {
            return (
              <div key={index} className="flex items-center gap-2 text-white">
                <span className="text-purple-400 font-bold">$</span>
                <span className="font-semibold text-gray-100">{log.text}</span>
              </div>
            );
          }
          if (log.type === "success") {
            return (
              <div key={index} className="text-emerald-400 pl-4 font-semibold">
                {log.text}
              </div>
            );
          }
          if (log.type === "error") {
            return (
              <div key={index} className="text-rose-400 pl-4">
                {log.text}
              </div>
            );
          }
          return (
            <div key={index} className="text-[#9ca0d2] pl-4">
              {log.text}
            </div>
          );
        })}

        {/* Active Command Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1 text-white">
          <span className="text-purple-400 font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or click presets..."
            className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-xs sm:text-[13px]"
          />
          <span className="w-2 h-4 bg-purple-400 animate-pulse" />
        </form>
      </div>

      {/* Interactive Command Presets / Quick Chips */}
      <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between gap-2 overflow-x-auto">
        <span className="text-[10px] text-gray-400 uppercase tracking-wider shrink-0">
          Presets:
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => executeCommand("xd --status")}
            className="px-2 py-1 rounded bg-white/[0.05] hover:bg-purple-600/30 text-purple-300 hover:text-white border border-purple-500/20 text-[10px] transition-colors whitespace-nowrap"
          >
            xd --status
          </button>
          <button
            onClick={() => executeCommand("xd --projects")}
            className="px-2 py-1 rounded bg-white/[0.05] hover:bg-blue-600/30 text-blue-300 hover:text-white border border-blue-500/20 text-[10px] transition-colors whitespace-nowrap"
          >
            xd --projects
          </button>
          <button
            onClick={() => executeCommand("xd --join")}
            className="px-2 py-1 rounded bg-white/[0.05] hover:bg-emerald-600/30 text-emerald-300 hover:text-white border border-emerald-500/20 text-[10px] transition-colors whitespace-nowrap"
          >
            xd --join
          </button>
          <button
            onClick={() => executeCommand("clear")}
            className="px-2 py-1 rounded bg-white/[0.05] hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 text-[10px] transition-colors"
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
}
