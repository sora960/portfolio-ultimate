"use client";

import React from "react";
import { Badge } from "./Badge";
import { Card } from "./Card";

/**
 * GlassLabel — text that feels embedded inside the glass material.
 * Uses a color-matched text-shadow glow so the letters look like they're
 * refracting light from inside the glass, not painted on the surface.
 */
interface GlassLabelProps {
  title: string;
  subtitle: string;
  titleColor: string;
  glowRgb: string;
}

const GlassLabel: React.FC<GlassLabelProps> = ({ title, subtitle, titleColor, glowRgb }) => (
  <div className="flex flex-col items-center justify-center text-center gap-2">
    <span
      className={`${titleColor} font-black text-[18px] tracking-tight leading-none block`}
      style={{
        opacity: 0.9,
        textShadow: `0 0 20px rgba(${glowRgb}, 0.6), 0 1px 3px rgba(255,255,255,0.4)`,
      }}
    >
      {title}
    </span>
    <span
      className="font-sans text-[12px] leading-snug block font-medium"
      style={{
        color: `rgba(${glowRgb}, 0.6)`,
        textShadow: `0 1px 2px rgba(255,255,255,0.7), 0 0 10px rgba(${glowRgb}, 0.25)`,
      }}
    >
      {subtitle}
    </span>
  </div>
);

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden">
      {/* Ambient glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* ── DESKTOP BUBBLE COMPOSITION ──────────────────────────────── */}
      <div className="hidden md:block w-full max-w-4xl h-[650px] relative z-10 mx-auto">

        {/* Left Bubble — Clean Code */}
        <div className="absolute top-[200px] left-[40px] w-[190px] h-[190px] z-30 animate-entrance-satellite-1">
          <div className="w-full h-full animate-orbit-left">
          <Card
            thickness="thick"
            glowColor="emerald"
            className="w-full h-full rounded-full flex items-center justify-center cursor-pointer p-6"
          >
            <GlassLabel
              title="Clean Code"
              subtitle="Type-Safe Systems"
              titleColor="text-emerald-600 dark:text-emerald-400"
              glowRgb="5,150,105"
            />
          </Card>
          </div>
        </div>

        {/* Top-Right Bubble — Full-Stack */}
        <div className="absolute top-[40px] right-[80px] w-[210px] h-[210px] z-30 animate-entrance-satellite-2">
          <div className="w-full h-full animate-orbit-right">
          <Card
            thickness="thick"
            glowColor="blue"
            className="w-full h-full rounded-full flex items-center justify-center cursor-pointer p-6"
          >
            <GlassLabel
              title="Full-Stack"
              subtitle="Web Architect"
              titleColor="text-blue-600 dark:text-sky-400"
              glowRgb="37,99,235"
            />
          </Card>
          </div>
        </div>

        {/* Bottom Pill — "Hire Me" CTA */}
        <div className="absolute bottom-[90px] right-[100px] w-[280px] h-[90px] z-30 animate-entrance-satellite-3">
          <div className="w-full h-full animate-orbit-pill">
          <Card
            thickness="thick"
            glowColor="pink"
            className="w-full h-full rounded-[50px] flex items-center justify-center cursor-pointer"
          >
            <span
              className="font-black text-[22px] tracking-tight leading-none"
              style={{
                color: "rgba(219,39,119,0.85)",
                textShadow: "0 0 24px rgba(219,39,119,0.5), 0 1px 4px rgba(255,255,255,0.5)",
              }}
            >
              Hire Me
            </span>
          </Card>
          </div>
        </div>

        {/* Central Squircle Card */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[520px] h-[390px] z-20 animate-entrance-squircle">
          <Card
            thickness="thick"
            glowColor="indigo"
            className="w-full h-full rounded-[60px] p-10 flex flex-col justify-between items-center text-center"
          >
            {/* Top Label */}
            <Badge label="software engineer" variant="default" className="text-[10px]" />

            {/* Brand + Description */}
            <div className="space-y-3">
              <h1
                className="text-display font-sans text-neutral-900 dark:text-neutral-50"
                style={{
                  textShadow: "0 2px 14px rgba(99,102,241,0.18), 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                Jairzon
              </h1>
              <p className="max-w-sm text-[15px] text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
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
                  className="px-6 py-2.5 rounded-full text-[13px] font-sans font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
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

      {/* ── MOBILE LAYOUT ──────────────────────────────────────────── */}
      <div className="md:hidden w-full max-w-sm mx-auto space-y-4 z-10 flex flex-col items-center px-4">
        <Card thickness="thick" glowColor="indigo" className="p-7 flex flex-col justify-between items-center text-center gap-5 w-full rounded-[36px] min-h-[360px]">
          <Badge label="software engineer" variant="default" />
          <div className="space-y-3">
            <h1
              className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-neutral-50 leading-none"
              style={{ textShadow: "0 2px 12px rgba(99,102,241,0.12), 0 1px 0 rgba(255,255,255,0.4)" }}
            >
              Jairzon
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
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
          <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 pt-1.5 border-t border-neutral-200/40 dark:border-white/5 w-full">
            <a href="https://github.com/sora960" target="_blank" rel="noopener noreferrer">[GITHUB]</a>
            <a href="https://linkedin.com/in/jairzon-gimeno" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a>
            <a href="https://indeed.com" target="_blank" rel="noopener noreferrer">[INDEED]</a>
          </div>
        </Card>

        {/* Mobile Hire Me CTA Card */}
        <div className="w-full">
          <Card thickness="regular" glowColor="pink" className="w-full py-4 rounded-full flex items-center justify-center px-6">
            <span className="font-black text-[18px] tracking-tight" style={{ color: "rgba(219,39,119,0.85)", textShadow: "0 0 18px rgba(219,39,119,0.4), 0 1px 3px rgba(255,255,255,0.5)" }}>
              Hire Me
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
};
