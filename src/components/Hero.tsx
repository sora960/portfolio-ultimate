import React from "react";
import { Badge } from "./Badge";
import { Card } from "./Card";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Premium Apple Minimalist Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-8 z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2">
          <Badge label="SYSTEM_ONLINE" variant="active" />
          <Badge label="Information Technology Graduate" variant="default" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          Software & IT Engineer <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 dark:from-sky-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">
            System Design & Backend
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
          Building reliable web applications, backend APIs, and connected IoT systems grounded in strong computer science fundamentals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-mono font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-md cursor-pointer"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="glass-card px-6 py-3 rounded-full text-sm font-mono font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            Get in Touch
          </a>
        </div>

        {/* Architectural Highlights Pill */}
        <div className="pt-8 max-w-xl mx-auto relative group">
          {/* Backstage Refraction Shapes */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2 w-32 h-6 bg-blue-500 rounded-full select-none pointer-events-none group-hover:scale-x-110 group-hover:-translate-x-3 transition-transform duration-500" />
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-28 h-6 bg-emerald-500 rounded-full select-none pointer-events-none group-hover:scale-x-110 group-hover:translate-x-3 transition-transform duration-500" />

          <Card className="flex items-center justify-around text-xs font-mono text-neutral-500 dark:text-neutral-400 py-3 relative z-10">
            <div>
              <span className="block text-sm font-bold text-neutral-900 dark:text-neutral-100">Next.js 16</span>
              App Router
            </div>
            <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
            <div>
              <span className="block text-sm font-bold text-neutral-900 dark:text-neutral-100">SSG Export</span>
              Sub-1.0s FCP
            </div>
            <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
            <div>
              <span className="block text-sm font-bold text-neutral-900 dark:text-neutral-100">TypeScript</span>
              Strict Mode
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
