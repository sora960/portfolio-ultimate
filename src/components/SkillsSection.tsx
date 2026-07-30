"use client";

import React, { useState, useRef } from "react";
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
  const [isSwapping, setIsSwapping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories[activeCategoryIdx];

  const handleCategorySwitch = (idx: number) => {
    if (idx === activeCategoryIdx) return;
    setIsSwapping(true);
    setTimeout(() => {
      setActiveCategoryIdx(idx);
      setIsSwapping(false);
    }, 150);
  };

  return (
    <section id="skills" ref={sectionRef} className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section header — aligned with Works layout */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-200/30 dark:border-white/5">
            <div className="space-y-1.5">
              <h2 className="text-display font-sans text-neutral-900 dark:text-neutral-50">
                Skills
              </h2>
              <p className="text-descriptor max-w-xs">
                Click a skill to find related projects below.
              </p>
            </div>

            {/* Filter control pill bar matching Works navigation */}
            <div className="w-full sm:w-auto glass-card glass-thickness-thin p-1 rounded-full flex items-center justify-between sm:justify-start gap-1 overflow-x-auto">
              {categories.map((cat, idx) => {
                const isActive = activeCategoryIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleCategorySwitch(idx)}
                    className={`flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 sm:py-1.5 min-h-[44px] sm:min-h-0 flex items-center justify-center rounded-full text-[11px] font-sans transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-neutral-900/90 text-white dark:bg-white/90 dark:text-neutral-950 font-semibold shadow-sm"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Skills pill cloud — centered monochromatic glass */}
        <Reveal delay={150}>
          <div
            className={`flex flex-wrap justify-center sm:justify-start gap-2.5 sm:gap-3 transition-all duration-300 ${
              isSwapping ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {activeCategory.skills.map((skill, sIdx) => {
              const isSelected = selectedSkill === skill.name;

              return (
                <Card
                  key={`${activeCategoryIdx}-${sIdx}`}
                  thickness="regular"
                  onClick={() => onSelectSkill(isSelected ? null : skill.name)}
                  className={`rounded-full py-2.5 px-4 sm:py-3 sm:px-5 min-h-[44px] flex items-center gap-2 cursor-pointer select-none transition-all duration-300 ${
                    isSelected
                      ? "ring-1 ring-neutral-900/40 dark:ring-white/40 shadow-sm scale-105"
                      : "hover:scale-[1.03]"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-sans font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse shrink-0" />
                    )}
                    {skill.name}
                  </span>
                </Card>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

