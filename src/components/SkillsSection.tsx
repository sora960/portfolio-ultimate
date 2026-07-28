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

export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedSkill, onSelectSkill }) => {
  const categories = skillsData.categories as SkillCategory[];
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
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

          {/* Vertical category tabs */}
          <Reveal delay={100}>
            <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
              {categories.map((cat, idx) => {
                const isActive = activeCategoryIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIdx(idx)}
                    className={`relative text-left px-4 py-2.5 rounded-2xl text-sm font-sans font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-md"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {/* Active bar indicator on left edge */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-violet-500 dark:bg-violet-400" />
                    )}
                    <span className="ml-1">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Flowing bubble cloud */}
        <Reveal delay={150} className="flex-1">
          <div className="flex flex-wrap gap-3">
            {activeCategory.skills.map((skill, sIdx) => {
              const score = skillScores[skill.name] ?? 80;
              const isSelected = selectedSkill === skill.name;

              return (
                <Card
                  key={`${activeCategoryIdx}-${sIdx}`}
                  thickness="regular"
                  glowColor={glowColor}
                  onClick={() => onSelectSkill(isSelected ? null : skill.name)}
                  className={`rounded-full py-3 px-5 flex items-center gap-2.5 cursor-pointer select-none transition-all duration-300 ${
                    isSelected
                      ? "ring-1 ring-blue-500/40 dark:ring-sky-400/40 shadow-[0_0_14px_rgba(59,130,246,0.15)] scale-105"
                      : "hover:scale-[1.03]"
                  }`}
                >
                  {/* Score badge */}
                  <span className="w-8 h-8 rounded-full bg-neutral-950/[0.06] dark:bg-white/10 flex items-center justify-center text-[11px] font-black font-mono text-neutral-700 dark:text-neutral-200 shrink-0">
                    {score}
                  </span>

                  {/* Skill name */}
                  <span className="text-sm font-sans font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
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
