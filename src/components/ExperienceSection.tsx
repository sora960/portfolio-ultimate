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
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2">
            <Badge label="about" variant="default" />
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Background & Engineering Journey
            </h2>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              Academic milestones, internships, and professional software development history.
            </p>
          </div>
        </Reveal>

        {/* Staggered Timeline Grid */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 150}>
              <div className="relative group w-full h-full">
                {/* Backstage Refraction Shape */}
                <div className="absolute top-10 left-16 w-52 h-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full select-none pointer-events-none shadow-lg border border-indigo-500/20 group-hover:scale-x-110 group-hover:-translate-x-4 transition-transform duration-500" />
                
                <Card className="space-y-4 relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/50 dark:border-white/5 pb-3">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    <Badge label={exp.period} variant="active" />
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-indigo-500 dark:text-indigo-400 font-mono select-none mt-1">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} label={skill} variant="default" className="text-[10px]" />
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
