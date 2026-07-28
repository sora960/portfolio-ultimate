"use client";

import React from "react";
import { Badge } from "./Badge";
import { Card } from "./Card";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 px-4 overflow-hidden">
      {/* Premium Apple Minimalist Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* 1. DESKTOP BUBBLE COMPOSITION: Squircle overlapped by Circles & Pill (Hidden on Mobile) */}
      <div className="hidden md:block w-full max-w-4xl h-[650px] relative z-10 mx-auto">
        
        {/* Left Floating Bubble Circle (overlaps middle-left edge) */}
        <div className="absolute top-[200px] left-[40px] w-[180px] h-[180px] z-30">
          <Card 
            thickness="thick" 
            glowColor="emerald"
            className="w-full h-full rounded-full flex flex-col justify-center items-center text-center p-4 cursor-pointer"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-sm">
              Clean Code
            </span>
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block mt-1.5 leading-relaxed">
              Type-Safe<br />Systems
            </span>
          </Card>
        </div>

        {/* Top-Right Floating Bubble Circle (overlaps top-right corner) */}
        <div className="absolute top-[40px] right-[80px] w-[200px] h-[200px] z-30">
          <Card 
            thickness="thick" 
            glowColor="blue"
            className="w-full h-full rounded-full flex flex-col justify-center items-center text-center p-4 cursor-pointer"
          >
            <span className="text-blue-600 dark:text-sky-400 font-bold block text-sm">
              Full-Stack
            </span>
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block mt-1.5 leading-relaxed">
              Web Application<br />Architect
            </span>
          </Card>
        </div>

        {/* Bottom Horizontal Pill Card (overlaps bottom-right corner) */}
        <div className="absolute bottom-[90px] right-[100px] w-[300px] h-[100px] z-30">
          <Card 
            thickness="thick" 
            glowColor="pink"
            className="w-full h-full rounded-[50px] flex flex-col justify-center items-center text-center px-6 cursor-pointer"
          >
            <Badge label="Open for Opportunities" variant="active" />
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block mt-2">
              Ready to Deploy
            </span>
          </Card>
        </div>

        {/* Central Squircle Card (Main Hub) */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[520px] h-[390px] z-20">
          <Card 
            thickness="thick"
            glowColor="indigo"
            className="w-full h-full rounded-[60px] p-10 flex flex-col justify-between items-center text-center"
          >
            {/* Top Label */}
            <Badge label="software engineer" variant="default" className="text-[10px]" />

            {/* Core Brand / Title */}
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-none">
                Jairzon
              </h1>
              <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                Building clean, reliable web applications and software systems built for performance and pleasure.
              </p>
            </div>

            {/* Actions & Links */}
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-xs font-mono font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="glass-card px-6 py-2.5 rounded-full text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Get in Touch
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                <a href="https://github.com/sora960" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">[GITHUB]</a>
                <span>/</span>
                <a href="https://linkedin.com/in/jairzon-gimeno" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">[LINKEDIN]</a>
                <span>/</span>
                <a href="https://indeed.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">[INDEED]</a>
              </div>
            </div>
          </Card>
        </div>

      </div>

      {/* 2. MOBILE RESPONSIVE LAYOUT: Clean stacked vertical view (Hidden on Desktop) */}
      <div className="md:hidden w-full max-w-md mx-auto space-y-6 z-10 flex flex-col items-center">
        
        {/* Main Profile Info Card */}
        <Card thickness="thick" glowColor="indigo" className="p-8 text-center space-y-6 w-full rounded-[40px]">
          <div className="flex flex-col items-center gap-2">
            <Badge label="Open for Opportunities" variant="active" />
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
              Jairzon
            </h1>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              Software Developer
            </span>
          </div>

          <p className="text-xs text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
            Building clean, reliable web applications and software systems built for performance and pleasure.
          </p>

          <div className="flex flex-col gap-3 w-full">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-xs font-mono font-semibold text-center text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 shadow-sm"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="glass-card w-full py-3 rounded-full text-xs font-mono font-semibold text-center text-neutral-800 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 pt-2 border-t border-neutral-200/50 dark:border-white/5">
            <a href="https://github.com/sora960" target="_blank" rel="noopener noreferrer">[GITHUB]</a>
            <a href="https://linkedin.com/in/jairzon-gimeno" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a>
            <a href="https://indeed.com" target="_blank" rel="noopener noreferrer">[INDEED]</a>
          </div>
        </Card>

        {/* Small Mobile Circular Badges Row */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <Card thickness="regular" glowColor="emerald" className="p-4 rounded-[24px] text-center flex flex-col justify-center items-center">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">Clean Code</span>
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Type-Safe</span>
          </Card>
          <Card thickness="regular" glowColor="blue" className="p-4 rounded-[24px] text-center flex flex-col justify-center items-center">
            <span className="text-blue-600 dark:text-sky-400 font-bold text-xs">Full-Stack</span>
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Systems Dev</span>
          </Card>
        </div>

      </div>

    </section>
  );
};
