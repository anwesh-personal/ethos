"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, DollarSign, X } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const tools = [
  { name: "ClickFunnels", what: "Landing pages", cost: "$297/mo", pain: "Bloated, slow pages, not built for affiliates" },
  { name: "Voluum", what: "Link tracking", cost: "$149/mo", pain: "No page building, no behavioral analytics" },
  { name: "Hotjar", what: "Heatmaps", cost: "$99/mo", pain: "Separate tool, no conversion correlation" },
  { name: "VWO", what: "Split testing", cost: "$199/mo", pain: "Complex setup, no native tracking integration" },
  { name: "ClickMagick", what: "Link cloaking", cost: "$79/mo", pain: "Just links — no pages, no analytics" },
  { name: "GA4", what: "Analytics", cost: "Free", pain: "Data scattered, impossible to action" },
];

const gaps = [
  { tool: "ClickFunnels", gap: "Page builder pretending to be a marketing tool", color: "#fb7185" },
  { tool: "Voluum/RedTrack", gap: "Tracking-only. No pages, no heatmaps, no cloaking depth", color: "#fbbf24" },
  { tool: "Unbounce/Instapage", gap: "Enterprise CRO tools. Not built for affiliate workflows", color: "#4f8ff7" },
  { tool: "Binom/Keitaro", gap: "Self-hosted trackers. Complex setup, no behavioral layer", color: "#a78bfa" },
  { tool: "Heyflow", gap: "Closest competitor but lead-gen forms only, not full affiliate", color: "#34d399" },
];

export default function AosProblem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="The Problem" subtitle="Super affiliates Frankenstein their stack together. 5-7 tools, $400-1,200/mo, and data scattered everywhere." badge="Why This Exists" badgeColor="#fb7185" number="01">
      <div ref={ref}>
        {/* Tool stack table */}
        <AnimatedSection>
          <div className="glass-card" style={{ padding: "clamp(20px, 3vw, 32px)", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <DollarSign size={14} color="#fb7185" />
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "rgba(232,236,244,0.88)" }}>The Fragmented Stack</h3>
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {tools.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, x: -10 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + i * 0.05 }}
                  style={{ display: "grid", gridTemplateColumns: "120px 110px 90px 1fr", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 8, background: "rgba(255,255,255,0.01)" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(232,236,244,0.8)" }}>{t.name}</span>
                  <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{t.what}</span>
                  <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", fontWeight: 600, color: "#fb7185" }}>{t.cost}</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.pain}</span>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: "12px 16px", borderRadius: 8, background: "rgba(251,113,133,0.05)", border: "1px solid rgba(251,113,133,0.12)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fb7185" }}>Total stack cost</span>
                <span style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--font-mono)", color: "#fb7185" }}>$400-1,200/mo</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gap analysis */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card" style={{ padding: "clamp(20px, 3vw, 32px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <AlertTriangle size={14} color="#fbbf24" />
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "rgba(232,236,244,0.88)" }}>The Gap Nobody Has Filled</h3>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {gaps.map((g, i) => (
                <motion.div key={g.tool} initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 + i * 0.06 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", borderRadius: 8, background: `${g.color}04`, border: `1px solid ${g.color}10` }}>
                  <X size={14} color={g.color} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 13, color: g.color }}>{g.tool}</span>
                    <span style={{ fontSize: 12, color: "var(--text-secondary)", marginLeft: 8 }}>— {g.gap}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: "14px 18px", borderRadius: 8, background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.15)" }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#34d399", lineHeight: 1.6 }}>
                Nobody has built the unified system where page building, link cloaking, tracking, split testing, heatmaps, and analytics live in ONE product with affiliate-first workflows.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionHeader>
  );
}
