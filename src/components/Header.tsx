import React from "react";
import { Badge } from "./Badge";
import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass-card flex items-center justify-between gap-6 px-6 py-3 rounded-full max-w-4xl w-full border border-white/40 dark:border-white/10 shadow-lg">
        {/* Brand / Monogram */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-mono text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 transition-colors">
            sora960<span className="text-emerald-500">.dev</span>
          </span>
          <Badge label="v1.0" variant="active" className="hidden sm:inline-flex" />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 md:gap-6 text-xs font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            #about
          </a>
          <a href="#skills" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            #skills
          </a>
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            #projects
          </a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            #contact
          </a>
        </div>

        {/* Actions: Theme Toggle & Resume */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity"
          >
            Resume.pdf
          </a>
        </div>
      </nav>
    </header>
  );
};
