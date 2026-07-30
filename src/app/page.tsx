"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Preloader } from "@/components/Preloader";
import { AmbientFlares } from "@/components/AmbientFlares";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <>
      {/* Dynamic splash preloader */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Main page content layout with smooth entrance fade-in & mesh gradient background */}
      <div 
        className={`relative min-h-screen flex flex-col items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-neutral-50 to-neutral-100/30 dark:from-indigo-950/30 dark:via-neutral-950 dark:to-neutral-900/10 transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Dynamic mouse-tracking ambient glow flares */}
        <AmbientFlares />

        {/* Floating Header */}
        <Header />

        {/* Main Content Container with Proper Centering and Padding */}
        <main className="w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col space-y-0 sm:space-y-16 pb-12 sm:pb-24 relative z-10">
          <Hero />
          <ExperienceSection />
          <SkillsSection selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
          <ProjectsSection selectedSkill={selectedSkill} />
          <ContactSection />
        </main>

        {/* Floating Scroll to top glass bubble */}
        <ScrollToTop />
      </div>
    </>
  );
}
