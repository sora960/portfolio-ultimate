"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Always show header when at/near the top of the viewport
      if (currentScrollPos < 50) {
        setVisible(true);
      } else if (prevScrollPos > currentScrollPos) {
        // Scrolling up -> show
        setVisible(true);
      } else {
        // Scrolling down -> hide
        setVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`fixed top-4 inset-x-0 z-50 flex justify-center px-4 transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <nav className="glass-card glass-thickness-thin flex items-center justify-between gap-6 px-6 py-3 rounded-full max-w-4xl w-full shadow-lg">
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
          <span className="font-mono text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 transition-colors">
            Jairzon
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-5 md:gap-7 text-[13px] font-sans font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
          <a href="#about" className="relative py-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group cursor-pointer">
            About
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 dark:bg-neutral-100 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          <a href="#skills" className="relative py-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group cursor-pointer">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 dark:bg-neutral-100 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          <a href="#projects" className="relative py-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group cursor-pointer">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 dark:bg-neutral-100 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
          <a href="#contact" className="relative py-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group cursor-pointer">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 dark:bg-neutral-100 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
