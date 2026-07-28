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
    <section id="about" className="py-20">
      {/* ── Bento Split: sticky left header + scrolling right timeline ── */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* LEFT: Sticky section identity column */}
        <div className="lg:sticky lg:top-28 lg:w-72 shrink-0 space-y-4">
          <Reveal>
            <Badge label="about" variant="default" />
            <h2 className="text-display font-sans text-neutral-900 dark:text-neutral-50 mt-3">
              Background
            </h2>
            <p className="text-descriptor mt-3 max-w-[220px]">
              Academic milestones, internships, and professional engineering history.
            </p>

            {/* Decorative vertical line connecting to cards */}
            <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-violet-400/60 to-transparent mt-6 ml-1" />
          </Reveal>
        </div>

        {/* RIGHT: Scrolling timeline cards */}
        <div className="flex-1 relative space-y-5 pl-4 lg:pl-0">
          {/* Timeline vertical thread (visible on all screens) */}
          <div className="absolute left-0 lg:-translate-x-6 top-2 bottom-2 w-px bg-neutral-300/80 dark:bg-neutral-800/80" />

          {experiences.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 150}>
              <div className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-4 lg:-left-6 top-7 flex items-center justify-center -translate-x-1/2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500 dark:bg-violet-400 block relative">
                    <span className="absolute inset-0 rounded-full bg-violet-400 dark:bg-violet-500 animate-ping opacity-50" />
                  </span>
                </div>

                <Card
                  thickness="regular"
                  glowColor="violet"
                  className="rounded-[28px] p-6 space-y-3 w-full"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <h3 className="text-headline font-sans text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    <Badge label={exp.period} variant="active" className="shrink-0 mt-0.5" />
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                        <span className="text-violet-400 font-mono select-none mt-0.5 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-neutral-200/40 dark:border-white/5">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} label={skill} variant="default" className="text-[9px] py-0 px-1.5" />
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
