import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="container mx-auto space-y-12">
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
