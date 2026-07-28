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
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);
  const [animateProgress, setAnimateProgress] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2 text-center">
            <Badge label="skills" variant="default" />
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Technical Proficiencies
            </h2>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              Select categories to filter skill bubbles. Click a skill bubble to locate related projects.
            </p>
          </div>
        </Reveal>

        {/* Category Capsule Filter Bar */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => {
              const isActive = activeCategoryIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-bold border-neutral-950 dark:border-white shadow-md scale-105"
                      : "bg-white/40 dark:bg-white/5 border-neutral-200/50 dark:border-white/5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Bubble Cluster Layout */}
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {activeCategory.skills.map((skill, sIdx) => {
              const score = skillScores[skill.name] || 80;
              const isSelected = selectedSkill === skill.name;
              
              // Color theme mapping based on category for rich glass styling
              const glowColor = activeCategoryIdx === 0 ? "blue" : activeCategoryIdx === 1 ? "emerald" : "violet";

              return (
                <Card
                  key={sIdx}
                  thickness="regular"
                  glowColor={glowColor}
                  onClick={() => onSelectSkill(isSelected ? null : skill.name)}
                  className={`rounded-full py-3.5 px-6 flex items-center gap-3 cursor-pointer transition-all duration-300 select-none border ${
                    isSelected
                      ? "border-blue-500/50 dark:border-sky-400/50 ring-1 ring-blue-500/30 dark:ring-sky-400/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-105"
                      : "border-neutral-200/30 dark:border-white/5 hover:border-neutral-400/40 dark:hover:border-white/20"
                  }`}
                >
                  {/* Circular proficiency index badge */}
                  <span className="w-6 h-6 rounded-full bg-neutral-950/5 dark:bg-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-neutral-800 dark:text-neutral-200">
                    {score}
                  </span>
                  
                  {/* Skill Label */}
                  <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 animate-pulse" />
                    )}
                    {skill.name}
                  </span>

                  {/* Core badge indicator (small dot) */}
                  {skill.status === "Core Competency" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Core Competency" />
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
