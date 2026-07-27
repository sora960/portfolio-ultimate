import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="container mx-auto space-y-12">
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
