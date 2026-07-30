"use client";

import React from "react";
import { Card } from "./Card";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-start pt-[116px] sm:pt-28 pb-0 sm:pb-10 overflow-hidden">
      {/* Ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 dark:bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* ── DESKTOP BUBBLE COMPOSITION (1:1 Crystal Glass - Pure Decorative Satellites) ── */}
      <div className="hidden md:block w-full max-w-4xl h-[650px] relative z-10 mx-auto">

        {/* Left Bubble Circle (Pure Volumetric Glass Decorative Frame) */}
        <div className="absolute top-[200px] left-[40px] w-[190px] h-[190px] z-30 animate-entrance-satellite-1">
          <div className="w-full h-full animate-orbit-left relative group">
            <Card
              thickness="thin"
              className="w-full h-full rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Top-Right Bubble Circle (Pure Volumetric Glass Decorative Frame) */}
        <div className="absolute top-[40px] right-[80px] w-[210px] h-[210px] z-30 animate-entrance-satellite-2">
          <div className="w-full h-full animate-orbit-right relative group">
            <Card
              thickness="thin"
              className="w-full h-full rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Pill Capsule (Pure Volumetric Glass Decorative Frame) */}
        <div className="absolute bottom-[90px] right-[100px] w-[280px] h-[90px] z-30 animate-entrance-satellite-3">
          <div className="w-full h-full animate-orbit-pill relative group">
            <Card
              thickness="thin"
              className="w-full h-full rounded-[50px] flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Central Squircle Card (Main Content Hub) */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[520px] h-[390px] z-20 animate-entrance-squircle">
          <Card
            thickness="thick"
            className="w-full h-full rounded-[60px] p-10 flex flex-col justify-between items-center text-center shadow-2xl"
          >
            {/* Top Label */}
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-medium">
              software engineer
            </span>

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
              <p className="max-w-sm text-[16px] text-neutral-700 dark:text-neutral-200 font-sans font-medium leading-relaxed">
                Building clean, reliable web applications and software systems.
              </p>
            </div>

            {/* Tinted Glass Action Buttons */}
            <div className="flex items-center justify-center gap-4 w-full pt-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-thickness-thin bg-black/5 dark:bg-white/10 border border-white/40 dark:border-white/20 backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-sans font-semibold text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="glass-card glass-thickness-thin bg-black/5 dark:bg-white/10 border border-white/40 dark:border-white/20 backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-sans font-semibold text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
          </Card>
        </div>
      </div>

      {/* ── MOBILE LAYOUT (Profile Card with 3 Floating Glass Satellites) ─────── */}
      <div className="md:hidden w-full max-w-md mx-auto z-10 px-4 relative pt-2 pb-2">
        {/* Top-Left Bubble Satellite */}
        <div className="absolute top-[50px] left-[-20px] w-[100px] h-[100px] z-0 animate-entrance-satellite-1 pointer-events-none">
          <div className="w-full h-full animate-orbit-left">
            <Card
              thickness="thin"
              className="w-full h-full rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Top-Right Bubble Satellite */}
        <div className="absolute top-0 right-0 w-[90px] h-[90px] z-0 animate-entrance-satellite-2 pointer-events-none">
          <div className="w-full h-full animate-orbit-right">
            <Card
              thickness="thin"
              className="w-full h-full rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Bottom-Right Pill Satellite */}
        <div className="absolute bottom-[-10px] right-0 w-[100px] h-[50px] z-20 animate-entrance-satellite-3 pointer-events-none">
          <div className="w-full h-full animate-orbit-pill">
            <Card
              thickness="thin"
              className="w-full h-full rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Central Profile Card */}
        <Card thickness="regular" className="p-8 flex flex-col justify-between items-center text-center gap-6 w-full rounded-[36px] shadow-xl relative z-10">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-medium">
            software engineer
          </span>
          <div className="space-y-2.5">
            <h1
              className="text-display font-sans text-neutral-900 dark:text-neutral-50"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.4)" }}
            >
              Jairzon
            </h1>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 font-sans font-medium leading-relaxed max-w-xs">
              Building clean, reliable web applications and software systems.
            </p>
          </div>
          <div className="flex flex-row gap-3 w-full pt-1">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-thickness-thin bg-black/5 dark:bg-white/10 border border-white/40 dark:border-white/20 backdrop-blur-md flex-1 py-3 rounded-full text-xs font-sans font-semibold text-center text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/20 transition-all shadow-sm min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="glass-card glass-thickness-thin bg-black/5 dark:bg-white/10 border border-white/40 dark:border-white/20 backdrop-blur-md flex-1 py-3 rounded-full text-xs font-sans font-semibold text-center text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/20 transition-all shadow-sm min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};
