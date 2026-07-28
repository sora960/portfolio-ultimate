import React from "react";
import skillsData from "@/content/skills.json";
import { SkillCategory } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

interface SkillsSectionProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedSkill, onSelectSkill }) => {
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
            My structured matrix of software skills, network administration, and systems competencies. Click any skill to locate matching projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Card key={idx} className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 border-b border-neutral-200/50 dark:border-white/5 pb-2">
                {cat.name}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <li 
                      key={sIdx} 
                      onClick={() => onSelectSkill(isSelected ? null : skill.name)}
                      className={`flex items-center justify-between text-xs cursor-pointer p-2 rounded-lg -mx-2 transition-all duration-300 ${
                        isSelected 
                          ? "bg-blue-500/15 dark:bg-sky-500/15 border border-blue-500/30 dark:border-sky-500/30 font-semibold" 
                          : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span className="font-sans text-neutral-900 dark:text-neutral-100 font-medium">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 animate-pulse" />
                        )}
                        <Badge
                          label={skill.status}
                          variant={skill.status === "Core Competency" ? "active" : "default"}
                          className="text-[9px] py-0 px-1.5"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
