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

  const categoryDescriptions: Record<number, string> = {
    0: "Building responsive, modern, type-safe web applications from front-end user interfaces to back-end RESTful services.",
    1: "Managing Unix/Linux operating systems, container automation pipelines, and robust git repositories.",
    2: "Configuring local networking protocols, subnetting schemas, switches, routers, and troubleshooting server hardware."
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
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2">
            <Badge label="skills" variant="default" />
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Technical Proficiencies
            </h2>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              Click categories on the left to inspect detailed specifications and progress meters. Select a skill to locate related projects.
            </p>
          </div>
        </Reveal>

        {/* Dashboard Card */}
        <Reveal delay={150}>
          <Card className="p-0 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
            
            {/* Left Column Category Switcher */}
            <div className="w-full md:w-1/3 bg-neutral-900/[0.02] dark:bg-white/[0.01] border-b md:border-b-0 md:border-r border-neutral-200/50 dark:border-white/5 p-6 flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                Categories
              </span>
              {categories.map((cat, idx) => {
                const isActive = activeCategoryIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIdx(idx)}
                    className={`text-left py-3 px-4 rounded-xl text-xs font-mono tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-bold shadow-md scale-[1.02]"
                        : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200/50 dark:hover:bg-white/5 hover:text-neutral-800 dark:hover:text-neutral-200"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Right Column Skills & Specifications Details */}
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  Specifications Inspector
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans italic">
                  {categoryDescriptions[activeCategoryIdx]}
                </p>

                {/* Skills Progress Grid */}
                <div className="space-y-4 pt-2">
                  {activeCategory.skills.map((skill, sIdx) => {
                    const score = skillScores[skill.name] || 80;
                    const isSelected = selectedSkill === skill.name;
                    return (
                      <div
                        key={sIdx}
                        onClick={() => onSelectSkill(isSelected ? null : skill.name)}
                        className={`group/item p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-blue-500/10 dark:bg-sky-500/10 border-blue-500/30 dark:border-sky-500/30"
                            : "hover:bg-neutral-100/50 dark:hover:bg-white/5 border-transparent"
                        }`}
                      >
                        {/* Name & Badge Row */}
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-sans font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 animate-pulse" />
                            )}
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                              {score}%
                            </span>
                            <Badge
                              label={skill.status}
                              variant={skill.status === "Core Competency" ? "active" : "default"}
                              className="text-[9px] py-0 px-1.5"
                            />
                          </div>
                        </div>

                        {/* Volumetric Glass Progress Capsule */}
                        <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden relative border border-neutral-300/30 dark:border-white/5">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: animateProgress ? `${score}%` : "0%" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Summary Info */}
              <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 pt-4 border-t border-neutral-200/50 dark:border-white/5">
                Ref: Jairzon Portfolios. Active system highlight sync enabled.
              </div>
            </div>

          </Card>
        </Reveal>
      </div>
    </section>
  );
};
