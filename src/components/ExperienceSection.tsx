import React from "react";
import experienceData from "@/content/experience.json";
import { Experience } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

export const ExperienceSection: React.FC = () => {
  const experiences = experienceData as Experience[];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <Badge label="#about" variant="default" />
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Background & Engineering Journey
          </h2>
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
            Academic foundation and specialized IT competencies
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/50 dark:border-white/5 pb-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {exp.role}
                </h3>
                <Badge label={exp.period} variant="active" />
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 list-disc list-inside font-sans leading-relaxed">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} label={skill} variant="default" className="text-[10px]" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
