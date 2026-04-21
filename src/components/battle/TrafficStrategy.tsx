"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Megaphone, Video, ArrowRight, TrendingUp, DollarSign, Target, AlertTriangle, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const channels = [
  {
    id: "meta", icon: Megaphone, name: "Meta (Facebook/IG)", color: "#4f8ff7",
    verdict: "PRIMARY CHANNEL", score: 92,
    metrics: { cpc: "$3-12", cpl: "$8-25", convRate: "8-15%", scalability: "Very High" },
    pros: [
      "Massive reach — 3B+ monthly users across FB/IG",
      "Lookalike audiences from Ethos pixel data are gold",
      "Video + carousel ads work exceptionally for insurance",
      "Retargeting capabilities for abandoned quote flows",
      "Lower CPC than Google for insurance keywords",
    ],
    cons: [
      "Special Ad Category limits age/gender targeting",
      "Cold traffic requires warming via pre-lander/quiz",
      "Creative fatigue — need 5-10 variants rotating constantly",
      "Compliance reviews can pause campaigns unexpectedly",
    ],
    strategy: "Run identity-driven video ads → quiz pre-lander → Ethos affiliate link. Build Lookalike audiences from your converters. Test 3 angles simultaneously: fear-based, value-based, identity-based. Kill losers fast, scale winners hard.",
  },
  {
    id: "google", icon: Search, name: "Google Ads (Search)", color: "#34d399",
    verdict: "HIGH INTENT", score: 78,
    metrics: { cpc: "$15-55", cpl: "$30-80", convRate: "12-20%", scalability: "Medium" },
    pros: [
      "Highest intent traffic — users actively searching for insurance",
      "Conversion rates 2-3x higher than social",
      "Long-tail keywords can lower CPC significantly",
      "Brand + competitor bidding strategies available",
    ],
    cons: [
      "CPC is brutal — $15-55 per click for insurance terms",
      "Dominated by carriers with unlimited budgets",
      "Quality Score wars — need excellent landing pages",
      "Limited creative differentiation (text ads only)",
    ],
    strategy: "Target long-tail keywords: 'affordable term life insurance no medical exam', 'life insurance for new parents under 40'. Avoid head terms — you'll bleed money against State Farm and Geico. Use exact match + aggressive negative keyword lists.",
  },
  {
    id: "tiktok", icon: Video, name: "TikTok Ads", color: "#fb7185",
    verdict: "EMERGING OPPORTUNITY", score: 65,
    metrics: { cpc: "$1-5", cpl: "$5-15", convRate: "3-8%", scalability: "High" },
    pros: [
      "Lowest CPCs in the insurance space by far",
      "Younger demographic = underserved insurance market",
      "Native video content feels organic, not 'ad-like'",
      "Algorithm finds audiences you didn't know existed",
    ],
    cons: [
      "Lower intent — users aren't searching for insurance",
      "Lead quality can be poor without strong pre-qualification",
      "Platform maturity for insurance vertical still developing",
      "Compliance/approval process can be unpredictable",
    ],
    strategy: "UGC-style video hooks: 'I just found out I can get $500K life insurance for $20/month' → story-driven content → quiz funnel → Ethos. The angle is 'I didn't know it was this easy/cheap'. Volume play — high quantity, filter for quality with your quiz.",
  },
];

export default function TrafficStrategy() {
  const [activeCh, setActiveCh] = useState("meta");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const ch = channels.find(c => c.id === activeCh)!;

  return (
    <SectionHeader title="Traffic Strategy" subtitle="Where to buy traffic, what it costs, and how to make each platform work for insurance affiliate conversions." badge="Paid Channels" badgeColor="#4f8ff7" number="02">
      <div ref={ref}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
          {channels.map((c, i) => {
            const Icon = c.icon;
            const isActive = activeCh === c.id;
            return (
              <AnimatedSection key={c.id} delay={i * 0.06}>
                <motion.button onClick={() => setActiveCh(c.id)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: "var(--radius-sm)", fontSize: 13, fontWeight: 500, border: `1px solid ${isActive ? `${c.color}30` : "var(--border-subtle)"}`, background: isActive ? `${c.color}0c` : "transparent", color: isActive ? c.color : "var(--text-secondary)", cursor: "pointer", outline: "none" }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Icon size={14} />
                  <span>{c.name}</span>
                  <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", fontWeight: 700, padding: "2px 8px", borderRadius: 6, background: `${c.color}12`, color: c.color }}>{c.score}</span>
                </motion.button>
              </AnimatedSection>
            );
          })}
        </div>

        <motion.div key={ch.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
          {/* Metrics row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 20 }}>
            {Object.entries(ch.metrics).map(([key, val], i) => (
              <AnimatedSection key={key} delay={i * 0.06}>
                <div className="glass-card" style={{ padding: "16px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 6 }}>
                    {key === "cpc" ? "Cost/Click" : key === "cpl" ? "Cost/Lead" : key === "convRate" ? "Conv Rate" : "Scale"}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "var(--font-mono)", color: ch.color }}>{val}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pros/Cons grid */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 14, marginBottom: 20 }}>
            <div className="glass-card" style={{ padding: "22px 24px" }}>
              <h4 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, color: "#34d399", marginBottom: 14 }}>Advantages</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {ch.pros.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <Check size={12} color="#34d399" style={{ marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "rgba(232,236,244,0.75)", lineHeight: 1.5 }}>{p}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="glass-card" style={{ padding: "22px 24px" }}>
              <h4 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, color: "#fbbf24", marginBottom: 14 }}>Watch Out For</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {ch.cons.map((c2, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <AlertTriangle size={11} color="#fbbf24" style={{ marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "rgba(232,236,244,0.75)", lineHeight: 1.5 }}>{c2}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy callout */}
          <div className="glass-card" style={{ padding: "20px 24px", borderColor: `${ch.color}18` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Target size={14} color={ch.color} />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: ch.color }}>Recommended Strategy</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)" }}>{ch.strategy}</p>
          </div>
        </motion.div>
      </div>
    </SectionHeader>
  );
}
