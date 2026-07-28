import React from "react";
import skillsData from "@/content/skills.json";
import { SkillCategory } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

export const SkillsSection: React.FC = () => {
  const categories = skillsData.categories as SkillCategory[];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <Badge label="skills" variant="default" />
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Technical Proficiencies
          </h2>
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
            My structured matrix of software skills, network administration, and systems competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Card key={idx} className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 border-b border-neutral-200/50 dark:border-white/5 pb-2">
                {cat.name}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between text-xs">
                    <span className="font-sans text-neutral-900 dark:text-neutral-100 font-medium">
                      {skill.name}
                    </span>
                    <Badge
                      label={skill.status}
                      variant={skill.status === "Core Competency" ? "active" : "default"}
                      className="text-[9px] py-0 px-1.5"
                    />
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
