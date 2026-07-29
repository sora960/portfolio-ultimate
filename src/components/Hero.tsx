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
        <div className="absolute top-[140px] left-1/2 -translate-x-1/2 w-[520px] h-[340px] z-20 animate-entrance-squircle">
          <Card
            thickness="thick"
            className="w-full h-full rounded-[60px] p-10 flex flex-col justify-center items-center text-center gap-6 shadow-2xl"
          >
            {/* Top Label */}
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-medium">
              software engineer
            </span>

            {/* Brand + Description */}
            <div className="space-y-4">
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
          </Card>
        </div>
      </div>

      {/* ── MOBILE LAYOUT (Clean Focused Profile Hub) ──────────────── */}
      <div className="md:hidden w-full max-w-sm mx-auto space-y-4 z-10 flex flex-col items-center px-4">
        <Card thickness="thick" className="p-8 flex flex-col justify-center items-center text-center gap-6 w-full rounded-[36px] min-h-[280px] shadow-xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-medium">
            software engineer
          </span>
          <div className="space-y-3">
            <h1
              className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-neutral-50 leading-none"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.4)" }}
            >
              Jairzon
            </h1>
            <p className="text-base text-neutral-700 dark:text-neutral-200 font-sans font-medium leading-relaxed">
              Building clean, reliable web applications and software systems.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
