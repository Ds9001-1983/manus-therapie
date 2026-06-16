/*
 * DESIGN: "Organische Expertise" – Biophilic Professionalism
 * Waldgrün (#0D0D0D) + Sandbeige (#FAFAF8) + Terrakotta (#C9A84C)
 * Cormorant Garamond (Display) + Lato (Body)
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AlleinstellungSection from "@/components/AlleinstellungSection";
import KrankheitsbilderSection from "@/components/KrankheitsbilderSection";
import HinweisSection from "@/components/HinweisSection";
import DozentenSection from "@/components/DozentenSection";
import SeminareSection from "@/components/SeminareSection";
import AufbautrainingSection from "@/components/AufbautrainingSection";
import SelbstaendigSection from "@/components/SelbstaendigSection";
import UeberUnsSection from "@/components/UeberUnsSection";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AlleinstellungSection />
      <DozentenSection />
      <KrankheitsbilderSection />
      <HinweisSection />
      <SeminareSection />
      <AufbautrainingSection />
      <SelbstaendigSection />
      <UeberUnsSection />
      <KontaktSection />
      <Footer />
    </div>
  );
}
