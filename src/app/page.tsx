import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
        <Features />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InfoCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
