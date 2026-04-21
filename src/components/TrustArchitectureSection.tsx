"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Eye,
  Award,
  BookOpen,
  Lock,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const trustPillars = [
  {
    id: "transparency",
    icon: Eye,
    title: "Radical Transparency",
    color: "#4f8ff7",
    score: 95,
    findings: [
      {
        label: "No insurance sold directly",
        detail: "Openly states they make zero commissions from carriers. Revenue comes from software subscriptions to agents, not from consumer data.",
        impact: "HIGH" as const,
      },
      {
        label: "Published agent listing rules",
        detail: "The criteria for which agents appear is publicly documented. No 'who pays more gets shown' — it's zip-code + subscription based.",
        impact: "HIGH" as const,
      },
      {
        label: "Unbiased positioning",
        detail: "Every page reinforces objectivity. The word 'unbiased' appears in headers, meta descriptions, and FAQs. It's a core brand identity, not a tagline.",
        impact: "MEDIUM" as const,
      },
    ],
  },
  {
    id: "authority",
    icon: Award,
    title: "Institutional Authority",
    color: "#fbbf24",
    score: 98,
    findings: [
      {
        label: "40+ year operating history",
        detail: "Compulife has been producing insurance comparison data since the 1980s. This isn't a startup — it's an institution. Google treats it accordingly.",
        impact: "HIGH" as const,
      },
      {
        label: "Referenced in publications & books",
        detail: "Financial advisors, academics, and journalists cite Term4Sale in books, articles, and educational content. Each citation = a high-authority backlink.",
        impact: "HIGH" as const,
      },
      {
        label: "Industry-standard database",
        detail: "The Compulife database is used by thousands of professional agents across the US and Canada. Term4Sale is the consumer-facing window into professional-grade tools.",
        impact: "HIGH" as const,
      },
    ],
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy-First Approach",
    color: "#34d399",
    score: 90,
    findings: [
      {
        label: "Anonymous comparison",
        detail: "Users can compare 100+ carriers without providing ANY personal contact information. This is extremely rare in insurance lead gen.",
        impact: "HIGH" as const,
      },
      {
        label: "No data selling",
        detail: "Unlike lead aggregators that sell your info to 5-10+ agents, Term4Sale caps at 3 and doesn't resell data to third-party lead buyers.",
        impact: "HIGH" as const,
      },
      {
        label: "User-initiated contact only",
        detail: "The consumer CHOOSES to share contact info and connect with agents. No forced opt-in, no pre-checked consent boxes.",
        impact: "MEDIUM" as const,
      },
    ],
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Educational Authority",
    color: "#a78bfa",
    score: 85,
    findings: [
      {
        label: "News & Reviews section",
        detail: "Long-form educational content explaining insurance concepts (conversion options, level premiums, why cheapest isn't always best). This captures informational traffic.",
        impact: "MEDIUM" as const,
      },
      {
        label: "Financial literacy content",
        detail: "Teaches consumers to be informed buyers rather than impulse leads. This INCREASES lead quality because educated buyers convert at higher rates.",
        impact: "HIGH" as const,
      },
      {
        label: "Agent education via Compulife",
        detail: "The software side trains agents to use comparison data effectively, ensuring the consumer experience on the other end of the lead is excellent.",
        impact: "MEDIUM" as const,
      },
    ],
  },
];

export default function TrustArchitectureSection() {
  const [activePillar, setActivePillar] = useState("transparency");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const active = trustPillars.find((p) => p.id === activePillar)!;

  return (
    <SectionHeader
      title="Trust Architecture"
      subtitle="In an industry built on distrust, Term4Sale weaponizes transparency. Every design decision reinforces one message: we're on your side."
      badge="Trust Systems"
      badgeColor="#34d399"
      number="02"
    >
      <div ref={ref}>
        {/* Pillar selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
          {trustPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;

            return (
              <AnimatedSection key={pillar.id} delay={i * 0.06}>
                <motion.button
                  onClick={() => setActivePillar(pillar.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: "var(--radius-sm)",
                    fontSize: 13,
                    fontWeight: 500,
                    border: `1px solid ${isActive ? `${pillar.color}30` : "var(--border-subtle)"}`,
                    background: isActive ? `${pillar.color}0c` : "transparent",
                    color: isActive ? pillar.color : "var(--text-secondary)",
                    cursor: "pointer",
                    outline: "none",
                    transition: "all 0.2s ease",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={14} />
                  <span>{pillar.title}</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: `${pillar.color}12`,
                      color: pillar.color,
                    }}
                  >
                    {pillar.score}
                  </span>
                </motion.button>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Trust score meter */}
        <AnimatedSection delay={0.15}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginBottom: 28 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "var(--text-muted)" }}>
                Trust Score
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: active.color }}>
                {active.score}
                <span style={{ fontSize: 13, color: "rgba(232,236,244,0.2)" }}>/100</span>
              </span>
            </div>
            <div style={{ height: 5, borderRadius: 5, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
              <motion.div
                style={{ height: "100%", borderRadius: 5, background: `linear-gradient(90deg, ${active.color}, ${active.color}80)` }}
                initial={{ width: 0 }}
                animate={{ width: `${active.score}%` }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Findings grid */}
        <motion.div
          key={active.id + "-findings"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {active.findings.map((finding, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card"
              style={{
                padding: "22px 24px",
                borderColor: `${active.color}0c`,
              }}
            >
              {/* Impact badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <CheckCircle2 size={16} color={active.color} />
                <span
                  style={{
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: 999,
                    background: finding.impact === "HIGH" ? "rgba(52,211,153,0.08)" : "rgba(251,191,36,0.08)",
                    color: finding.impact === "HIGH" ? "#34d399" : "#fbbf24",
                    border: `1px solid ${finding.impact === "HIGH" ? "rgba(52,211,153,0.18)" : "rgba(251,191,36,0.18)"}`,
                  }}
                >
                  {finding.impact} IMPACT
                </span>
              </div>

              <h4 style={{ fontWeight: 600, fontSize: 14, color: "rgba(232,236,244,0.88)", marginBottom: 8 }}>
                {finding.label}
              </h4>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                {finding.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionHeader>
  );
}
