// 메인 랜딩 페이지. 9개 섹션 + Navbar + Footer 조립
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ModesSection } from "@/components/sections/ModesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ModesSection />
        <FeaturesSection />
        <HowItWorksSection />

        <JoinSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
