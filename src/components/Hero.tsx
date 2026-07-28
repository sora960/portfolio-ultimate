"use client";

import React, { useEffect } from "react";
import { Badge } from "./Badge";
import { Card } from "./Card";

export const Hero: React.FC = () => {
  useEffect(() => {
    const target = document.getElementById("hero-parallax-bg");
    if (!target) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          // Very subtle offset factor (0.12) to keep the movement sophisticated and non-distracting
          target.style.transform = `translate3d(-50%, ${scrolled * 0.12}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* 3D Glass Bubbles Parallax Background Layer */}
      <div 
        id="hero-parallax-bg"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[850px] h-[650px] opacity-[0.55] dark:opacity-[0.22] pointer-events-none select-none z-0 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: "url('/glass-hero.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* Premium Apple Minimalist Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-8 z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2">
          <Badge label="Open for Opportunities" variant="active" />
          <Badge label="Software Developer" variant="default" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          Jairzon <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 dark:from-sky-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Software Developer
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
          Building clean, reliable web applications and software systems built for performance and pleasure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-4">
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

          {/* Social & Hiring Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <a
              href="https://github.com/sora960"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [GITHUB]
            </a>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <a
              href="https://linkedin.com/in/jairzon-gimeno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [LINKEDIN]
            </a>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <a
              href="https://jobstreet.com.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [JOBSTREET]
            </a>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <a
              href="https://indeed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [INDEED]
            </a>
          </div>
        </div>

        {/* Architectural Highlights Pill */}
        <div className="pt-8 max-w-xl mx-auto relative group">
          {/* Backstage Refraction Shapes */}
          <div className="absolute inset-0 liquid-goo-container pointer-events-none select-none">
            <div className="absolute top-1/2 left-6 -translate-y-1/2 w-32 h-6 bg-blue-500 rounded-full shadow-md border border-blue-400/20 group-hover:scale-x-110 group-hover:-translate-x-3 transition-transform duration-500" />
            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-28 h-6 bg-emerald-500 rounded-full shadow-md border border-emerald-400/20 group-hover:scale-x-110 group-hover:translate-x-3 transition-transform duration-500" />
          </div>

          <Card className="flex items-center justify-around text-xs font-mono text-neutral-500 dark:text-neutral-400 py-3 relative z-10">
            <div>
              <span className="block text-sm font-bold text-neutral-900 dark:text-neutral-100">Full-Stack</span>
              Web Development
            </div>
            <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
            <div>
              <span className="block text-sm font-bold text-neutral-900 dark:text-neutral-100">Clean Code</span>
              Type-Safe Systems
            </div>
            <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
            <div>
              <span className="block text-sm font-bold text-neutral-900 dark:text-neutral-100">Optimization</span>
              Fast & Responsive
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
