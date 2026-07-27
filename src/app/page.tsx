import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Floating Header */}
      <Header />

      {/* Main Content Container with Proper Centering and Padding */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col space-y-16 pb-24">
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
