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

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Dynamic splash preloader */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Main page content layout with smooth entrance fade-in */}
      <div 
        className={`relative min-h-screen flex flex-col items-center bg-neutral-50 dark:bg-neutral-950 transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Dynamic mouse-tracking ambient glow flares */}
        <AmbientFlares />

        {/* Floating Header */}
        <Header />

        {/* Main Content Container with Proper Centering and Padding */}
        <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col space-y-16 pb-24 relative z-10">
          <Hero />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
