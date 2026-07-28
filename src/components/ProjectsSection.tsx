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
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, selectedSkill, isFeatured = false }) => {
  const isPlaceholder = project.status === "Placeholder" || project.status === "In Development";
  const hasSelectedSkill = selectedSkill ? project.techStack.includes(selectedSkill) : false;

  return (
    <div className="relative group w-full h-full">
      <Card
        glowColor={isFeatured ? "indigo" : project.title.includes("Portal") ? "blue" : "rose"}
        className={`flex flex-col justify-between space-y-6 relative overflow-hidden z-10 min-h-[350px] rounded-[45px] p-8 transition-all duration-500 ${
          isPlaceholder ? "opacity-75" : ""
        } ${
          hasSelectedSkill 
            ? "border-blue-500/50 dark:border-sky-400/50 ring-1 ring-blue-500/30 dark:ring-sky-400/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-[1.01]" 
            : selectedSkill 
            ? "opacity-45" 
            : ""
        }`}
      >
        <div className={`flex flex-col ${isFeatured ? "md:flex-row md:gap-8 md:items-start" : "space-y-4"}`}>
          
          {/* Left Block: Meta & Title & Summary */}
          <div className={isFeatured ? "md:w-1/2 space-y-3" : "space-y-3"}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {project.category}
              </span>
              {isPlaceholder ? (
                <Badge label="[BUILD IN PROGRESS]" variant="warning" className="text-[8px]" />
              ) : (
                <Badge label="[LIVE_SYSTEM]" variant="active" className="text-[8px]" />
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-neutral-50 group-hover:text-emerald-500 transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Right Block: Highlights & Badges */}
          <div className={isFeatured ? "md:w-1/2 space-y-4 md:pt-4" : "space-y-4"}>
            {/* Highlights bullets (limit to max 2 items to prevent text bogging) */}
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              {project.highlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-mono select-none mt-0.5">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Badges Cluster */}
            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech, idx) => {
                const isHighlighted = selectedSkill === tech;
                return (
                  <Badge 
                    key={idx} 
                    label={tech} 
                    variant={isHighlighted ? "active" : "default"} 
                    className={`text-[9px] py-0 px-1.5 transition-transform duration-300 ${
                      isHighlighted ? "scale-105 font-bold" : ""
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer actions row */}
        <div className="pt-4 border-t border-neutral-200/50 dark:border-white/5 w-full flex items-center justify-between text-xs font-mono">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-semibold flex items-center gap-1 cursor-pointer"
          >
            Source Code →
          </a>

          {project.liveUrl && !isPlaceholder ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold cursor-pointer"
            >
              Live Demo ↗
            </a>
          ) : (
            <span className="text-neutral-400 dark:text-neutral-600 cursor-not-allowed flex items-center gap-1 select-none">
              Live Demo (N/A)
            </span>
          )}
        </div>
      </Card>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ selectedSkill }) => {
  const projects = projectsData as Project[];
  const [filter, setFilter] = useState<"all" | "software" | "iot">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "iot") return project.category.toLowerCase().includes("iot");
    if (filter === "software") return !project.category.toLowerCase().includes("iot");
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200/30 dark:border-white/5 pb-6">
          <div className="space-y-2">
            <Badge label="projects" variant="default" />
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Featured Systems & Engineering Works
            </h2>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              A curated collection of my software applications, hardware systems, and web projects.
            </p>
          </div>

          {/* Apple-style Glass Segmented Control Filter */}
          <div className="glass-card p-1 rounded-full flex gap-1 bg-black/5 dark:bg-white/5 border border-white/20 dark:border-white/5 shadow-sm max-w-[280px] w-full self-start md:self-auto">
            {(["all", "software", "iot"] as const).map((opt) => {
              const labelMap = {
                all: "All",
                software: "Software",
                iot: "IoT"
              };
              const isActive = filter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={`flex-1 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-bold shadow-sm"
                      : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  }`}
                >
                  {labelMap[opt]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && filter === "all";
            return (
              <Reveal 
                key={project.id} 
                delay={index * 150}
                className={isFeatured ? "col-span-1 md:col-span-2" : ""}
              >
                <ProjectCard 
                  project={project} 
                  selectedSkill={selectedSkill} 
                  isFeatured={isFeatured}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
