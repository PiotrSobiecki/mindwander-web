import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { HowItWorks } from "@/components/ui/how-it-works";
import { ProblemSolution } from "@/components/ui/problem-solution";
import { ForProfessionals } from "@/components/ui/for-professionals";
import { Pricing } from "@/components/ui/pricing";
import { FaqSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import { PopularServices } from "@/components/ui/popular-services";
import { UserReviews } from "@/components/ui/user-reviews";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top CTA bar */}
      <div className="bg-primary text-white py-2 text-center">
        <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
          <p className="hidden md:block font-medium">
            Znajdź fachowca już dziś! Pobierz aplikację DOMIDO
          </p>
          <Link
            href="#jak-to-dziala"
            className="flex items-center gap-2 bg-white text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            <Download className="h-4 w-4" />
            Pobierz aplikację
          </Link>
        </div>
      </div>

      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <PopularServices />
      <ForProfessionals />
      <UserReviews />
      <Pricing />
      <FaqSection />
      <Footer />
    </main>
  );
}
