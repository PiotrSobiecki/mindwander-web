import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { HowItWorks } from "@/components/ui/how-it-works";
import { ProblemSolution } from "@/components/ui/problem-solution";
import { ForProfessionals } from "@/components/ui/for-professionals";
import { Pricing } from "@/components/ui/pricing";
import { Roadmap } from "@/components/ui/roadmap";
import { FaqSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <ForProfessionals />
      <Pricing />
      <Roadmap />
      <FaqSection />
      <Footer />
    </main>
  );
}
