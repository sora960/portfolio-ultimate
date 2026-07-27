export type ProjectStatus = "Live" | "In Development" | "Placeholder";

export interface Project {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string | null;
}

export interface SkillItem {
  name: string;
  status: "Core Competency" | "Active Focus";
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  period: string;
  highlights: string[];
  skills: string[];
}
