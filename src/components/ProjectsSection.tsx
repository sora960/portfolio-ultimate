"use client";

import React, { useState } from "react";
import projectsData from "@/content/projects.json";
import { Project } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

interface ProjectsSectionProps {
  selectedSkill: string | null;
}

interface ProjectCardProps {
  project: Project;
  selectedSkill: string | null;
  size?: "featured" | "wide" | "tall" | "compact";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, selectedSkill, size = "compact" }) => {
  const isPlaceholder = project.status === "Placeholder" || project.status === "In Development";
  const hasSelectedSkill = selectedSkill ? project.techStack.includes(selectedSkill) : false;

  const sizeClasses = {
    featured: "col-span-1 sm:col-span-2 row-span-1 min-h-0 sm:min-h-[300px] p-5 sm:p-8 rounded-[28px] sm:rounded-[40px]",
    wide:     "col-span-1 sm:col-span-2 min-h-0 sm:min-h-[240px] p-5 sm:p-7 rounded-[28px] sm:rounded-[36px]",
    tall:     "col-span-1 min-h-0 sm:min-h-[340px] p-5 sm:p-7 rounded-[28px] sm:rounded-[36px]",
    compact:  "col-span-1 min-h-0 sm:min-h-[260px] p-5 sm:p-6 rounded-[28px]",
  };

  return (
    <Card
      className={`flex flex-col justify-between transition-all duration-500 overflow-hidden ${sizeClasses[size]} ${
        isPlaceholder ? "opacity-75" : ""
      } ${
        hasSelectedSkill
          ? "ring-1 ring-blue-500/40 dark:ring-sky-400/40 shadow-[0_0_18px_rgba(59,130,246,0.15)] scale-[1.01]"
          : selectedSkill
          ? "opacity-45"
          : ""
      }`}
    >
      {/* Top meta row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          {project.category}
        </span>
        {isPlaceholder
          ? <Badge label="In Development" variant="warning" className="text-[8px]" />
          : <Badge label="Live" variant="active" className="text-[8px]" />
        }
      </div>

      {/* Title */}
      <div className="space-y-2 flex-1">
        <h3 className="text-headline font-sans text-neutral-900 dark:text-neutral-50 transition-colors">
          {project.title}
        </h3>

        {/* Summary only on larger cards */}
        {(size === "featured" || size === "wide" || size === "tall") && (
          <p className="text-sm font-sans text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {project.summary}
          </p>
        )}

        {/* Top highlight bullet — always shown */}
        {project.highlights[0] && (
          <div className="flex items-start gap-2 text-xs font-sans text-neutral-500 dark:text-neutral-400 leading-relaxed pt-1">
            <span className="text-neutral-400 dark:text-neutral-500 mt-0.5 shrink-0">•</span>
            <span>{project.highlights[0]}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 mt-3 border-t border-neutral-200/40 dark:border-white/5 flex items-center justify-between flex-wrap gap-2">
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1">
          {project.techStack.slice(0, size === "compact" ? 3 : 5).map((tech, idx) => (
            <Badge
              key={idx}
              label={tech}
              variant={selectedSkill === tech ? "active" : "default"}
              className="text-[9px] py-0 px-1.5"
            />
          ))}
        </div>

        {/* CTA links with 44px min tap area */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors font-semibold py-2 px-1 inline-flex items-center min-h-[44px]"
          >
            Code →
          </a>
          {project.liveUrl && !isPlaceholder && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 font-semibold py-2 px-1 inline-flex items-center min-h-[44px] underline underline-offset-4 decoration-neutral-400/50"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ selectedSkill }) => {
  const projects = projectsData as Project[];
  const [filter, setFilter] = useState<"all" | "software" | "iot">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "iot") return p.category.toLowerCase().includes("iot");
    return !p.category.toLowerCase().includes("iot");
  });

  // Assign staggered sizes for magazine layout
  const sizeMap = (index: number, total: number): "featured" | "wide" | "tall" | "compact" => {
    if (index === 0 && filter === "all") return "featured";
    if (index === 1) return "tall";
    if (index === 2) return "wide";
    return "compact";
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Section header — asymmetric: left-aligned with filter on same row */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-200/30 dark:border-white/5">
            <div className="space-y-1.5">
              <Badge label="projects" variant="default" />
              <h2 className="text-display font-sans text-neutral-900 dark:text-neutral-50">
                Works
              </h2>
              <p className="text-descriptor max-w-xs">
                Software applications, hardware systems, and web projects.
              </p>
            </div>

            {/* Filter control */}
            <div className="glass-card glass-thickness-thin p-1 rounded-full flex gap-1 self-start sm:self-auto shrink-0">
              {(["all", "software", "iot"] as const).map((opt) => {
                const labels = { all: "All", software: "Software", iot: "IoT" };
                const isActive = filter === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setFilter(opt)}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-sans font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
                        : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                    }`}
                  >
                    {labels[opt]}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Staggered Magazine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-auto">
          {filteredProjects.map((project, index) => {
            const size = sizeMap(index, filteredProjects.length);
            return (
              <Reveal
                key={project.id}
                delay={index * 120}
                className={size === "featured" || size === "wide" ? "sm:col-span-2" : ""}
              >
                <ProjectCard
                  project={project}
                  selectedSkill={selectedSkill}
                  size={size}
                />
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
