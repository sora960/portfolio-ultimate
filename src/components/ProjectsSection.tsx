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
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "stack">("overview");

  const isPlaceholder = project.status === "Placeholder" || project.status === "In Development";
  const hasSelectedSkill = selectedSkill ? project.techStack.includes(selectedSkill) : false;

  return (
    <div className="relative group w-full h-full">
      <Card
        glowColor={isFeatured ? "indigo" : project.title.includes("Portal") ? "blue" : "rose"}
        className={`flex flex-col justify-between space-y-6 relative overflow-hidden z-10 min-h-[350px] transition-all duration-500 ${
          isPlaceholder ? "opacity-70" : ""
        } ${
          hasSelectedSkill 
            ? "border-blue-500/50 dark:border-sky-400/50 ring-1 ring-blue-500/30 dark:ring-sky-400/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-[1.01]" 
            : selectedSkill 
            ? "opacity-45" 
            : ""
        }`}
      >
        <div className={`flex flex-col ${isFeatured ? "md:flex-row md:gap-8 md:items-start" : "space-y-4"}`}>
          
          {/* Left Block: Meta & Title */}
          <div className={isFeatured ? "md:w-1/2 space-y-4" : "space-y-4"}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {project.category}
              </span>
              {isPlaceholder ? (
                <Badge label="[BUILD IN PROGRESS]" variant="warning" />
              ) : (
                <Badge label="[LIVE_SYSTEM]" variant="active" />
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 transition-colors">
              {project.title}
            </h3>

            {/* Apple-style Tab Switcher */}
            <div className="flex border-b border-neutral-200/50 dark:border-white/5 pb-1 gap-4 text-xs font-mono">
              {(["overview", "features", "stack"] as const).map((tab) => {
                const active = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-1 border-b-2 transition-all cursor-pointer capitalize ${
                      active 
                        ? "border-neutral-950 text-neutral-950 dark:border-neutral-100 dark:text-neutral-100 font-semibold"
                        : "border-transparent text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Block: Content Details */}
          <div className={isFeatured ? "md:w-1/2 md:pt-8 min-h-[120px]" : "min-h-[110px]"}>
            {activeTab === "overview" && (
              <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {project.summary}
              </p>
            )}
            {activeTab === "features" && (
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-sans">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-emerald-500 dark:text-emerald-400 font-mono select-none mt-0.5">
                      →
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "stack" && (
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => {
                  const isHighlighted = selectedSkill === tech;
                  return (
                    <Badge 
                      key={idx} 
                      label={tech} 
                      variant={isHighlighted ? "active" : "default"} 
                      className={`text-[10px] py-0.5 px-2 transition-transform duration-300 ${
                        isHighlighted ? "scale-105 font-bold" : ""
                      }`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer actions row */}
        <div className="pt-4 border-t border-neutral-200/50 dark:border-white/5">
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-semibold flex items-center gap-1 cursor-pointer"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 inline text-neutral-400 dark:text-neutral-600"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Live Demo (N/A)
              </span>
            )}
          </div>
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
