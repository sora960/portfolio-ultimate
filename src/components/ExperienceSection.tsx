"use client";

import React from "react";
import experienceData from "@/content/experience.json";
import { Experience } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

export const ExperienceSection: React.FC = () => {
  const experiences = experienceData as Experience[];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2 text-center">
            <Badge label="about" variant="default" />
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Background & Engineering Journey
            </h2>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              Academic milestones, internships, and professional software development history.
            </p>
          </div>
        </Reveal>

        {/* Staggered Timeline Grid of Glass Capsules */}
        <div className="relative md:grid md:grid-cols-2 gap-x-12 gap-y-10 space-y-6 md:space-y-0">
          
          {/* Vertical Center Thread Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Reveal 
                key={exp.id} 
                delay={index * 150}
                className={`md:col-span-1 ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}
              >
                <div className="relative group w-full h-full">
                  {/* Miniature connection point dot on the line thread */}
                  <div className={`absolute top-8 w-2 h-2 rounded-full bg-violet-500 dark:bg-violet-400 hidden md:block ${
                    isLeft ? "-right-[31px]" : "-left-[31px]"
                  }`} />
                  
                  <Card 
                    thickness="regular"
                    glowColor="violet" 
                    className="rounded-[36px] p-6 space-y-4 relative z-10 w-full h-full"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-neutral-200/50 dark:border-white/5 pb-2">
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.role}
                      </h3>
                      <Badge label={exp.period} variant="active" className="text-[9px]" />
                    </div>



                    {/* Simplified Bullet Highlights (trimmed to max 2 items to prevent text bogging) */}
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                      {exp.highlights.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-indigo-500 font-mono select-none mt-0.5">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/50 dark:border-white/5">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} label={skill} variant="default" className="text-[9px] py-0 px-1.5" />
                      ))}
                    </div>
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
