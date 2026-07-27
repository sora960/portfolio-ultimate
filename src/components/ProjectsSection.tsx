import React from "react";
import projectsData from "@/content/projects.json";
import { Project } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

export const ProjectsSection: React.FC = () => {
  const projects = projectsData as Project[];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <Badge label="#projects" variant="default" />
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Featured Systems & Engineering Works
          </h2>
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
            Decoupled content pipeline driven by /src/content/projects.json
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const isPlaceholder = project.status === "Placeholder" || project.status === "In Development";

            return (
              <div key={project.id} className="relative group">
                {/* Backstage Refraction Shape - Rainbow Gradient */}
                <div className="absolute top-1/3 left-10 w-48 h-8 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 rounded-full select-none pointer-events-none group-hover:scale-x-110 group-hover:-translate-x-3 transition-transform duration-500" />
                
                <Card
                  className={`flex flex-col justify-between space-y-6 relative overflow-hidden z-10 ${
                    isPlaceholder ? "opacity-70" : ""
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Category & Status Badge */}
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

                    {/* Title & Summary */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300 list-disc list-inside font-sans">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Meta & Actions */}
                  <div className="space-y-4 pt-4 border-t border-neutral-200/50 dark:border-white/5">
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <Badge key={idx} label={tech} variant="default" className="text-[10px] py-0 px-2" />
                      ))}
                    </div>

                    {/* Links Row */}
                    <div className="flex items-center gap-4 text-xs font-mono pt-1">
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
          })}
        </div>
      </div>
    </section>
  );
};
