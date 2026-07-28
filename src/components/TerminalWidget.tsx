"use client";

import React, { useState, useRef, useEffect } from "react";

interface LogLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogLine[]>([
    { text: "Jairzon OS [Version 1.0.0]", type: "system" },
    { text: "Network Diagnostics and System Profiler initialized.", type: "system" },
    { text: "Type 'help' or click the shortcuts below to query technical details.", type: "system" },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { text: `jairzon@noc-node:~$ ${cmd}`, type: "input" as const }];

    switch (trimmed) {
      case "help":
        newHistory.push(
          { text: "Available profile queries:", type: "system" },
          { text: "  skills      - List core engineering and networking stack", type: "output" },
          { text: "  projects    - Query active capstone and software builds", type: "output" },
          { text: "  cert        - Display active IT Specialist certifications", type: "output" },
          { text: "  clear       - Flush diagnostic screen history", type: "output" }
        );
        break;
      case "skills":
        newHistory.push(
          { text: "[SOFTWARE & WEB DEV] JavaScript, TypeScript, React, Node.js, Express, Python, Flask, SQLite, Firebase", type: "output" },
          { text: "[SYSTEMS & INFRA]    Linux Admin, Git/GitHub, CI/CD, OS Deployment", type: "output" },
          { text: "[NETWORKING & IT]    TCP/IP, DNS/DHCP, Subnetting, Routing & Switching", type: "output" }
        );
        break;
      case "projects":
        newHistory.push(
          { text: "CAPSTONE: iPrages Smart Agriculture & AI Platform", type: "system" },
          { text: "  * Description: IoT farming analytics and AI CV pest detector", type: "output" },
          { text: "  * Stack: React 18, Node.js, Python, Flask, OpenCV, YOLOv8, Arduino, SQLite", type: "output" },
          { text: "  * Status: Live (https://gimeno-portfolio.onrender.com/)", type: "output" }
        );
        break;
      case "cert":
        newHistory.push(
          { text: "CERTIFICATE: IT Specialist - Networking", type: "system" },
          { text: "  * Issued: November 25, 2025", type: "output" },
          { text: "  * Expires: November 26, 2030", type: "output" },
          { text: "  * Scope: TCP/IP, topologies, subnet troubleshooting, routing protocols", type: "output" }
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({
          text: `bash: command not found: '${cmd}'. Type 'help' for options.`,
          type: "error",
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="glass-card w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 relative z-10 flex flex-col h-[280px]">
      {/* Terminal Title Bar */}
      <div className="bg-black/10 dark:bg-white/5 px-4 py-2 flex items-center justify-between border-b border-black/10 dark:border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[10px] font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          jairzon@noc-node:~
        </span>
        <div className="w-12" /> {/* Spacing spacer */}
      </div>

      {/* Screen logs */}
      <div className="flex-1 p-4 overflow-y-auto font-mono text-[11px] leading-relaxed space-y-1.5 scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={
              line.type === "input"
                ? "text-neutral-800 dark:text-neutral-100 font-semibold"
                : line.type === "error"
                ? "text-rose-500"
                : line.type === "system"
                ? "text-indigo-500 dark:text-sky-400"
                : "text-neutral-600 dark:text-neutral-300"
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Shortcuts pill tags */}
      <div className="px-4 py-2 border-t border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/10 flex flex-wrap gap-2 items-center">
        <span className="text-[10px] font-mono text-neutral-400">SHORTCUTS:</span>
        {["help", "skills", "projects", "cert", "clear"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-black/10 dark:bg-white/5 hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 font-mono text-[10px] uppercase transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Interactive prompt input */}
      <form onSubmit={onSubmit} className="px-4 pb-3 flex items-center bg-black/5 dark:bg-black/10">
        <span className="font-mono text-[11px] text-emerald-500 font-semibold mr-1.5 select-none">
          jairzon@noc-node:~$
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type command..."
          className="flex-1 bg-transparent border-none outline-none font-mono text-[11px] text-neutral-950 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 focus:ring-0 p-0"
        />
      </form>
    </div>
  );
};
