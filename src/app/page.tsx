"use client";

import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import FunnelSection from "@/components/FunnelSection";
import TrustArchitectureSection from "@/components/TrustArchitectureSection";
import EcosystemSection from "@/components/EcosystemSection";
import SEOSection from "@/components/SEOSection";
import DesignAnalysisSection from "@/components/DesignAnalysisSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import TakeawaysSection from "@/components/TakeawaysSection";
import VerdictSection from "@/components/VerdictSection";

function Divider() {
  return (
    <div className="section-container">
      <div className="section-divider" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main>
        <HeroSection />
        <Divider />
        <div id="funnel"><FunnelSection /></div>
        <Divider />
        <div id="trust"><TrustArchitectureSection /></div>
        <Divider />
        <div id="ecosystem"><EcosystemSection /></div>
        <Divider />
        <div id="seo"><SEOSection /></div>
        <Divider />
        <div id="design"><DesignAnalysisSection /></div>
        <Divider />
        <div id="competition"><CompetitiveSection /></div>
        <Divider />
        <div id="takeaways"><TakeawaysSection /></div>
        <Divider />
        <VerdictSection />
      </main>
    </>
  );
}
