"use client";

import React, { useState, useEffect, useRef } from "react";
import skillsData from "@/content/skills.json";
import { SkillCategory } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

interface SkillsSectionProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

const ScoreCounter: React.FC<{ targetScore: number; delayMs?: number }> = ({ targetScore, delayMs = 0 }) => {
  const [score, setScore] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      let start = 0;
      const duration = 800; // ms
      const stepTime = 16; // ~60fps
      const steps = duration / stepTime;
      const increment = targetScore / steps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= targetScore) {
          setScore(targetScore);
          clearInterval(interval);
        } else {
          setScore(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [hasStarted, targetScore, delayMs]);

  return <span ref={ref}>{score}</span>;
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedSkill, onSelectSkill }) => {
  const categories = skillsData.categories as SkillCategory[];
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories[activeCategoryIdx];

  const skillScores: Record<string, number> = {
    "JavaScript / TypeScript": 92,
    "React": 90,
    "Node.js (Express)": 88,
    "Python & Flask": 82,
    "RESTful APIs & Firebase": 85,
    "SQLite": 75,
    "Linux Administration": 80,
    "Git & GitHub": 88,
    "CI/CD (GitHub Workflows)": 72,
    "OS Deployment (Win/Linux/macOS)": 85,
    "TCP/IP & DNS/DHCP": 88,
    "Subnetting": 85,
    "Routing & Switching": 80,
    "Hardware Diagnostics & IT Support": 90
  };

  const glowColors = ["blue", "emerald", "violet"] as const;
  const glowColor = glowColors[activeCategoryIdx] ?? "blue";

  const handleCategorySwitch = (idx: number) => {
    if (idx === activeCategoryIdx) return;
    setIsSwapping(true);
    setTimeout(() => {
      setActiveCategoryIdx(idx);
      setIsSwapping(false);
    }, 150);
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      {/* ── Command Panel: vertical left tabs + right bubble cloud ── */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* LEFT: Sticky section header + vertical category tabs */}
        <div className="lg:sticky lg:top-28 lg:w-64 shrink-0 space-y-6">
          <Reveal>
            <Badge label="skills" variant="default" />
            <h2 className="text-display font-sans text-neutral-900 dark:text-neutral-50 mt-3">
              Skills
            </h2>
            <p className="text-descriptor mt-3 max-w-[200px]">
              Click a skill to find related projects below.
            </p>
          </Reveal>

          {/* Liquid Glass Segmented Control Tabs */}
          <Reveal delay={100}>
            <div className="glass-card glass-thickness-regular rounded-[24px] p-1.5 flex flex-col gap-1 w-full shadow-md">
              {categories.map((cat, idx) => {
                const isActive = activeCategoryIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleCategorySwitch(idx)}
                    className={`relative text-left px-4 py-2.5 rounded-[18px] text-xs sm:text-sm font-sans font-semibold transition-all duration-300 cursor-pointer min-h-[44px] flex items-center justify-between ${
                      isActive
                        ? "bg-white/80 dark:bg-white/15 text-neutral-950 dark:text-white shadow-sm backdrop-blur-md border border-white/60 dark:border-white/20"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-white/30 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse shrink-0" />
                      )}
                      <span>{cat.name}</span>
                    </span>
                    <span className="text-[10px] font-mono opacity-50 font-normal">
                      {cat.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Flowing bubble cloud */}
        <Reveal delay={150} className="flex-1 w-full">
          <div
            className={`flex flex-wrap gap-2.5 sm:gap-3 transition-all duration-300 ${
              isSwapping ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {activeCategory.skills.map((skill, sIdx) => {
              const score = skillScores[skill.name] ?? 80;
              const isSelected = selectedSkill === skill.name;

              return (
                <Card
                  key={`${activeCategoryIdx}-${sIdx}`}
                  thickness="regular"
                  onClick={() => onSelectSkill(isSelected ? null : skill.name)}
                  className={`rounded-full py-2.5 px-4 sm:py-3 sm:px-5 flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none transition-all duration-300 ${
                    isSelected
                      ? "ring-1 ring-blue-500/40 dark:ring-sky-400/40 shadow-[0_0_14px_rgba(59,130,246,0.15)] scale-105"
                      : "hover:scale-[1.03]"
                  }`}
                >
                  {/* Score badge with CountUp animation */}
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-950/[0.06] dark:bg-white/10 flex items-center justify-center text-[10px] sm:text-[11px] font-black font-mono text-neutral-700 dark:text-neutral-200 shrink-0">
                    <ScoreCounter targetScore={score} delayMs={sIdx * 40} />
                  </span>

                  {/* Skill name */}
                  <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 animate-pulse shrink-0" />
                    )}
                    {skill.name}
                  </span>

                  {/* Core competency dot */}
                  {skill.status === "Core Competency" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  )}
                </Card>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
