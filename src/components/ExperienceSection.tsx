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
    <section id="about" className="py-6 sm:py-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section header — aligned with Skills & Works layout */}
        <Reveal>
          <div className="pb-6 border-b border-neutral-200/30 dark:border-white/5 space-y-1.5">
            <h2 className="text-display font-sans text-neutral-900 dark:text-neutral-50">
              Background
            </h2>
            <p className="text-descriptor max-w-sm">
              Academic milestones, internships, and professional engineering history.
            </p>
          </div>
        </Reveal>

        {/* Experience cards stack */}
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 120}>
              <Card
                thickness="regular"
                className="rounded-[28px] p-6 sm:p-8 space-y-5 w-full"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="text-headline font-sans text-neutral-900 dark:text-neutral-50">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono font-medium tracking-wider text-neutral-400 dark:text-neutral-500 uppercase shrink-0 pt-0.5">
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="text-sm sm:text-[15px] text-neutral-700 dark:text-neutral-200 font-sans font-medium leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

