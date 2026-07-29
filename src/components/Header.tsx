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
      <nav className="glass-card glass-thickness-thin glass-specular-edge glass-specular-thin flex items-center justify-between gap-4 px-5 sm:px-6 py-3 rounded-full max-w-4xl w-full shadow-lg relative z-20">
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer min-h-[44px]">
          <span className="font-mono text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
            Jairzon
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 md:gap-7 text-[13px] font-sans font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1 transition-colors group cursor-pointer ${
                  isActive
                    ? "text-neutral-950 dark:text-white font-semibold"
                    : "hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-950 dark:bg-white origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Actions: Theme Toggle & Mobile Hamburger Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 w-full max-w-4xl glass-card glass-thickness-regular glass-specular-edge glass-specular-regular rounded-[24px] p-4 flex flex-col space-y-2 shadow-xl animate-entrance-squircle">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full min-h-[44px] px-4 rounded-xl flex items-center justify-between text-sm font-sans font-medium transition-colors ${
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold"
                    : "text-neutral-600 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono opacity-60">→</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
