"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        setMobileMenuOpen(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-4 inset-x-0 z-50 flex flex-col items-center px-4 transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <nav className="glass-card glass-thickness-thin glass-specular-edge glass-specular-thin flex items-center justify-between gap-4 px-5 sm:px-6 py-2.5 rounded-full max-w-2xl w-full shadow-lg relative z-20">
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer min-h-[36px]">
          <span className="font-mono text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
            sora
          </span>
        </a>

        {/* Actions: Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
