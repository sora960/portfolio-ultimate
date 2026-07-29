"use client";

import React from "react";
import { Badge } from "./Badge";
import { Card } from "./Card";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden">
      {/* Ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 dark:bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* ── DESKTOP BUBBLE COMPOSITION (1:1 Crystal Glass - Pure Decorative Satellites) ── */}
      <div className="hidden md:block w-full max-w-4xl h-[650px] relative z-10 mx-auto">

        {/* Left Bubble Circle (Pure Volumetric Glass Decorative Frame) */}
        <div className="absolute top-[200px] left-[40px] w-[190px] h-[190px] z-30 animate-entrance-satellite-1">
          <div className="w-full h-full animate-orbit-left relative group">
            <Card
              thickness="thick"
              className="w-full h-full rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlap Refraction Crescent Lens (Right edge matching Image 1) */}
            <div className="absolute top-4 right-0 bottom-4 w-10 rounded-r-full pointer-events-none border-r-2 border-b border-white/90 dark:border-white/40 shadow-[inset_-3px_0_6px_rgba(255,255,255,0.95)] opacity-85" />
          </div>
        </div>

        {/* Top-Right Bubble Circle (Pure Volumetric Glass Decorative Frame) */}
        <div className="absolute top-[40px] right-[80px] w-[210px] h-[210px] z-30 animate-entrance-satellite-2">
          <div className="w-full h-full animate-orbit-right relative group">
            <Card
              thickness="thick"
              className="w-full h-full rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlap Refraction Crescent Lens (Bottom-Left edge matching Image 1) */}
            <div className="absolute bottom-2 left-2 w-16 h-16 rounded-full pointer-events-none border-l-2 border-b-2 border-white/90 dark:border-white/40 shadow-[inset_3px_-3px_8px_rgba(255,255,255,0.95)] opacity-85" />
          </div>
        </div>

        {/* Bottom Pill Capsule (Pure Volumetric Glass Decorative Frame) */}
        <div className="absolute bottom-[90px] right-[100px] w-[280px] h-[90px] z-30 animate-entrance-satellite-3">
          <div className="w-full h-full animate-orbit-pill relative group">
            <Card
              thickness="thick"
              className="w-full h-full rounded-[50px] flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlap Refraction Crescent Lens (Top-Left edge matching Image 1) */}
            <div className="absolute top-0 left-4 w-20 h-10 rounded-full pointer-events-none border-t-2 border-l-2 border-white/90 dark:border-white/40 shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95)] opacity-85" />
          </div>
        </div>

        {/* Central Squircle Card (Main Content Hub) */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[520px] h-[390px] z-20 animate-entrance-squircle">
          <Card
            thickness="thick"
            className="w-full h-full rounded-[60px] p-10 flex flex-col justify-between items-center text-center shadow-2xl"
          >
            {/* Top Label */}
            <Badge label="software engineer" variant="default" className="text-[10px]" />

            {/* Brand + Description */}
            <div className="space-y-3">
              <h1
                className="text-display font-sans text-neutral-900 dark:text-neutral-50"
                style={{
                  textShadow: "0 2px 14px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                Jairzon
              </h1>
              <p className="max-w-sm text-[15px] text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                Building clean, reliable web applications and software systems built for performance and pleasure.
              </p>
            </div>

            {/* CTAs + Socials */}
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-[13px] font-sans font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-md cursor-pointer"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="glass-card glass-thickness-thin px-6 py-2.5 rounded-full text-[13px] font-sans font-semibold text-neutral-700 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Get in Touch
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
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

      {/* ── MOBILE LAYOUT (Clean Focused Profile Hub) ──────────────── */}
      <div className="md:hidden w-full max-w-sm mx-auto space-y-4 z-10 flex flex-col items-center px-4">
        <Card thickness="thick" className="p-7 flex flex-col justify-between items-center text-center gap-5 w-full rounded-[36px] min-h-[360px] shadow-xl">
          <Badge label="software engineer" variant="default" />
          <div className="space-y-3">
            <h1
              className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-neutral-50 leading-none"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.4)" }}
            >
              Jairzon
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
              Building clean, reliable web applications and software systems built for performance and pleasure.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-sm font-sans font-semibold text-center text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 shadow-sm">
              View Resume
            </a>
            <a href="#contact"
              className="glass-card glass-thickness-thin w-full py-3 rounded-full text-sm font-sans font-semibold text-center text-neutral-700 dark:text-neutral-200">
              Get in Touch
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 pt-1.5 border-t border-neutral-200/40 dark:border-white/5 w-full">
            <a href="https://github.com/sora960" target="_blank" rel="noopener noreferrer">[GITHUB]</a>
            <a href="https://linkedin.com/in/jairzon-gimeno" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a>
            <a href="https://indeed.com" target="_blank" rel="noopener noreferrer">[INDEED]</a>
          </div>
        </Card>
      </div>
    </section>
  );
};
