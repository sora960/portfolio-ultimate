import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="container mx-auto">
        <Hero />
      </main>
    </div>
  );
}
