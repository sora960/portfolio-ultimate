import React from "react";
import { Badge } from "./Badge";
import { Card } from "./Card";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2">
          <Badge label="SYSTEM_ONLINE" variant="active" />
          <Badge label="Software & IT Engineer" variant="default" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          Architecting Resilient <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent">
            Backend Systems & Network Infrastructure
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
          Information Technology Graduate specializing in high-performance Web APIs, low-level systems programming, and scalable static architecture with zero database dependencies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-sm font-mono font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-md"
          >
            Explore Projects →
          </a>
          <a
            href="#contact"
            className="glass-card px-6 py-3 rounded-full text-sm font-mono font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
          >
            Initiate Contact
          </a>
        </div>

        {/* Architectural Highlights Pill */}
        <div className="pt-8">
          <Card className="max-w-xl mx-auto flex items-center justify-around text-xs font-mono text-neutral-500 dark:text-neutral-400 py-3">
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
