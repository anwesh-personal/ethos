"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Zap, Globe, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const testTypes = [
  { name: "Page-level A/B/n", desc: "Route traffic to completely different page variants via Link Engine", color: "#34d399" },
  { name: "Element-level tests", desc: "Swap individual blocks — headlines, CTAs, images — within same page", color: "#4f8ff7" },
  { name: "Link-level rotation", desc: "Test multiple offer URLs through the same tracking link", color: "#fbbf24" },
  { name: "Funnel-level tests", desc: "Test entire sequences: Pre-lander A + Quiz A vs Pre-lander B + Quiz B", color: "#a78bfa" },
];

const intelligence = [
  "Bayesian statistical significance — faster results for low traffic",
  "Auto-winner promotion — route 100% to winner at confidence threshold",
  "Revenue optimization — optimize for $/click, not just conversion %",
  "Visual confidence indicators: Not Enough Data → Trending → Winner → Loser",
  "Slack/email alerts when tests reach significance or variants tank",
];

const trafficRules = [
  { rule: "Geo-split", desc: "Different pages by country/region", icon: Globe },
  { rule: "Device-split", desc: "Mobile vs desktop experiences", icon: Globe },
  { rule: "Source-split", desc: "Different pages for FB vs Google vs TikTok", icon: Globe },
  { rule: "Day-parting", desc: "Different variants by time of day", icon: Globe },
];

export default function AosTestEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Test Engine" subtitle="Native A/B/n testing baked into everything — pages, links, funnels. Auto-significance, auto-winner, revenue optimization." badge="Core Module #3" badgeColor="#34d399" number="04">
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Test types */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {testTypes.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.06}>
              <div className="glass-card" style={{ padding: "20px", height: "100%", borderColor: `${t.color}08` }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: t.color, marginBottom: 8 }}>{t.name}</div>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: "var(--text-secondary)" }}>{t.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Intelligence */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 30px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Zap size={15} color="#34d399" />
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>Intelligence Layer</h3>
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {intelligence.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.04 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 12px", borderRadius: 6 }}>
                  <ChevronRight size={12} color="#34d399" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "rgba(232,236,244,0.7)", lineHeight: 1.5 }}>{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Traffic rules visual */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card" style={{ padding: "20px 24px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 12 }}>Advanced Traffic Rules</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {trafficRules.map((r, i) => (
                <motion.div key={r.rule} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.25 + i * 0.05 }}
                  style={{ padding: "10px 16px", borderRadius: 8, background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.1)" }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: "#34d399" }}>{r.rule}</div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{r.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionHeader>
  );
}
