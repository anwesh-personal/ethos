"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Crown, Minus, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

type Verdict = "dominates" | "competitive" | "behind";

interface CompetitorData {
  name: string;
  type: string;
  color: string;
  factors: { label: string; term4sale: number; competitor: number; detail: string; verdict: Verdict }[];
}

const competitors: CompetitorData[] = [
  {
    name: "Traditional Lead Aggregators",
    type: "e.g. QuoteWizard, NetQuote",
    color: "#fb7185",
    factors: [
      { label: "Lead Quality", term4sale: 95, competitor: 35, detail: "Aggregators sell same lead to 8-12 agents. Term4Sale caps at 3 and lead is self-initiated.", verdict: "dominates" },
      { label: "Consumer Trust", term4sale: 92, competitor: 25, detail: "Consumers know aggregators sell their data. Term4Sale is perceived as a neutral tool.", verdict: "dominates" },
      { label: "Lead Volume", term4sale: 60, competitor: 90, detail: "Aggregators aggressively acquire traffic via paid ads. Term4Sale relies on organic only.", verdict: "behind" },
      { label: "Cost per Lead", term4sale: 98, competitor: 30, detail: "Term4Sale's organic traffic = near-zero acquisition cost. Aggregators spend $20-80 per lead in paid ads.", verdict: "dominates" },
      { label: "Agent Satisfaction", term4sale: 88, competitor: 40, detail: "Term4Sale leads convert 5-10x higher because they're self-qualified. Aggregator leads are often tire-kickers.", verdict: "dominates" },
    ],
  },
  {
    name: "Modern InsurTech Platforms",
    type: "e.g. Policygenius, Ladder, Bestow",
    color: "#a78bfa",
    factors: [
      { label: "UX Design", term4sale: 30, competitor: 95, detail: "InsurTech apps are sleek, mobile-first, beautifully designed. Term4Sale looks like 2005.", verdict: "behind" },
      { label: "Data Breadth", term4sale: 95, competitor: 40, detail: "Term4Sale compares 100+ carriers. Most InsurTech platforms only offer products from their own underwriters.", verdict: "dominates" },
      { label: "Objectivity", term4sale: 95, competitor: 35, detail: "InsurTech platforms have financial incentives to promote specific carriers. Term4Sale has zero commission conflicts.", verdict: "dominates" },
      { label: "Mobile Experience", term4sale: 35, competitor: 92, detail: "InsurTech apps are built for mobile-first. Term4Sale is responsive but desktop-primary.", verdict: "behind" },
      { label: "Domain Authority", term4sale: 97, competitor: 70, detail: "40 years of backlinks vs 5-10 years of VC-funded content marketing. Term4Sale's authority is irreplaceable.", verdict: "dominates" },
    ],
  },
  {
    name: "Carrier Direct Websites",
    type: "e.g. State Farm, Northwestern Mutual",
    color: "#fbbf24",
    factors: [
      { label: "Product Range", term4sale: 98, competitor: 15, detail: "Carrier sites show only THEIR products. Term4Sale shows the entire market — the ultimate advantage.", verdict: "dominates" },
      { label: "Brand Recognition", term4sale: 50, competitor: 95, detail: "Household name carriers dominate brand awareness. Term4Sale is known mainly by informed shoppers.", verdict: "behind" },
      { label: "Price Competition", term4sale: 95, competitor: 20, detail: "Consumers on carrier sites can't compare. Term4Sale shows exactly where each carrier ranks on price.", verdict: "dominates" },
      { label: "Trust (Institutional)", term4sale: 85, competitor: 88, detail: "Major carriers have decades of brand trust. Term4Sale matches via third-party objectivity positioning.", verdict: "competitive" },
      { label: "Conversion Path", term4sale: 80, competitor: 75, detail: "Both have clear conversion paths, but Term4Sale's comparison → agent route is more efficient for informed buyers.", verdict: "competitive" },
    ],
  },
];

const verdictConfig = {
  dominates: { icon: Crown, color: "#34d399", label: "DOMINATES" },
  competitive: { icon: Minus, color: "#fbbf24", label: "COMPETITIVE" },
  behind: { icon: ArrowUpRight, color: "#fb7185", label: "BEHIND" },
};

export default function CompetitiveSection() {
  const [activeComp, setActiveComp] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const current = competitors[activeComp];

  return (
    <SectionHeader
      title="Competitive Landscape"
      subtitle="Term4Sale doesn't compete on design — it competes on trust, data breadth, and an impossible-to-replicate time advantage."
      badge="Market Position"
      badgeColor="#fb7185"
      number="06"
    >
      <div ref={ref}>
        {/* Competitor selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
          {competitors.map((comp, i) => (
            <AnimatedSection key={comp.name} delay={i * 0.06}>
              <motion.button
                onClick={() => setActiveComp(i)}
                style={{
                  textAlign: "left" as const,
                  padding: "12px 18px",
                  borderRadius: "var(--radius-sm)",
                  border: `1px solid ${activeComp === i ? `${comp.color}30` : "var(--border-subtle)"}`,
                  background: activeComp === i ? `${comp.color}0a` : "transparent",
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.2s ease",
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div style={{ fontWeight: 600, fontSize: 13, color: activeComp === i ? comp.color : "var(--text-secondary)" }}>
                  {comp.name}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                  {comp.type}
                </div>
              </motion.button>
            </AnimatedSection>
          ))}
        </div>

        {/* Comparison bars */}
        <motion.div
          key={current.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="glass-card"
          style={{ padding: "clamp(24px, 3vw, 36px)" }}
        >
          {/* Legend */}
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: "#4f8ff7" }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)" }}>Term4Sale</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: current.color }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)" }}>{current.name}</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {current.factors.map((factor, fi) => {
              const vc = verdictConfig[factor.verdict];
              const VerdictIcon = vc.icon;

              return (
                <motion.div
                  key={fi}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: fi * 0.06 }}
                >
                  {/* Label row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontWeight: 600, fontSize: 13, color: "rgba(232,236,244,0.82)" }}>
                      {factor.label}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 9,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: 999,
                        background: `${vc.color}0c`,
                        color: vc.color,
                        border: `1px solid ${vc.color}1a`,
                      }}
                    >
                      <VerdictIcon size={9} />
                      {vc.label}
                    </span>
                  </div>

                  {/* Bars */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, width: 28, textAlign: "right" as const, color: "#4f8ff7" }}>
                        {factor.term4sale}
                      </span>
                      <div style={{ flex: 1, height: 6, borderRadius: 4, overflow: "hidden", background: "rgba(255,255,255,0.03)" }}>
                        <motion.div
                          style={{ height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #4f8ff7, #74a8fa)" }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${factor.term4sale}%` } : { width: 0 }}
                          transition={{ duration: 0.7, delay: 0.2 + fi * 0.08 }}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, width: 28, textAlign: "right" as const, color: current.color }}>
                        {factor.competitor}
                      </span>
                      <div style={{ flex: 1, height: 6, borderRadius: 4, overflow: "hidden", background: "rgba(255,255,255,0.03)" }}>
                        <motion.div
                          style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${current.color}, ${current.color}80)` }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${factor.competitor}%` } : { width: 0 }}
                          transition={{ duration: 0.7, delay: 0.3 + fi * 0.08 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Detail */}
                  <p style={{ fontSize: 12, marginTop: 8, lineHeight: 1.6, color: "var(--text-muted)" }}>
                    {factor.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionHeader>
  );
}
