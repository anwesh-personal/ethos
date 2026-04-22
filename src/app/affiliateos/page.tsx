"use client";

import { motion } from "framer-motion";
import { Crosshair, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import AosHero from "@/components/affiliateos/AosHero";
import AosProblem from "@/components/affiliateos/AosProblem";
import AosLinkEngine from "@/components/affiliateos/AosLinkEngine";
import AosPageEngine from "@/components/affiliateos/AosPageEngine";
import AosTestEngine from "@/components/affiliateos/AosTestEngine";
import AosIntelEngine from "@/components/affiliateos/AosIntelEngine";
import AosArchitecture from "@/components/affiliateos/AosArchitecture";
import AosRoadmap from "@/components/affiliateos/AosRoadmap";
import AosPricing from "@/components/affiliateos/AosPricing";

export default function AffiliateOSPage() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>
      <Navigation />
      <ScrollProgress />
      <AosHero />
      <AosProblem />
      <AosLinkEngine />
      <AosPageEngine />
      <AosTestEngine />
      <AosIntelEngine />
      <AosArchitecture />
      <AosRoadmap />
      <AosPricing />

      {/* Footer */}
      <div className="section-container" style={{ paddingTop: 40, paddingBottom: 40, borderTop: "1px solid var(--border-subtle)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>AffiliateOS — Product Blueprint</span>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </main>
  );
}
