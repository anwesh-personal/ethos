"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Eye,
  FileText,
  BarChart3,
  UserCheck,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const funnelStages = [
  {
    id: "awareness",
    icon: Eye,
    title: "Consumer Discovery",
    subtitle: "Organic Search Entry",
    color: "#4f8ff7",
    percentage: 100,
    description:
      "Consumer searches for 'term life insurance quotes' or 'compare life insurance rates'. Term4Sale ranks due to 40+ years of domain authority and thousands of organic backlinks from financial publications, books, and media outlets.",
    tactics: [
      "High-intent keyword targeting (bottom-funnel)",
      "Decades of backlink authority from financial press",
      "Domain age trust signal (established ~1985)",
      "Zero paid acquisition — 100% organic",
    ],
    insight:
      "They don't chase keywords. The keywords chase them. 40 years of utility = unstoppable domain authority.",
  },
  {
    id: "interest",
    icon: FileText,
    title: "Quote Request",
    subtitle: "Frictionless Data Capture",
    color: "#a78bfa",
    percentage: 72,
    description:
      "Single-page form with only essential fields: gender, DOB, state, health class, coverage amount. No multi-step wizard, no registration wall, no email gate. The form IS the product.",
    tactics: [
      "Single-page, 5-field form (zero friction)",
      "No account creation required",
      "No email gate before results",
      "Progressive disclosure — complexity hidden",
    ],
    insight:
      "Most sites gate results behind email capture. Term4Sale gives value FIRST. That's why people trust it enough to share contact info AFTER.",
  },
  {
    id: "comparison",
    icon: BarChart3,
    title: "Instant Value Delivery",
    subtitle: "Real-Time Quote Engine",
    color: "#22c5d9",
    percentage: 58,
    description:
      "Immediate display of 100+ carrier quotes in a sortable, filterable table. The user gets genuine, actionable value before any lead capture happens. This is the psychological trigger — reciprocity at scale.",
    tactics: [
      "100+ carrier database comparison",
      "Real-time results, zero loading",
      "Sortable by premium, term, carrier",
      "Genuine value before any lead capture",
    ],
    insight:
      "The quote table IS the product AND the lead magnet. No fake 'free guide' — actual insurance intelligence worth thousands.",
  },
  {
    id: "conversion",
    icon: UserCheck,
    title: "Agent Connection",
    subtitle: "Lead Routing & Capture",
    color: "#34d399",
    percentage: 34,
    description:
      "'Select and Continue' routes user to ≤3 local Compulife-subscribing agents. Contact details requested ONLY after full value delivery. Agent gets an email notification with the lead specs. Consumer chose to connect — they weren't tricked.",
    tactics: [
      "Max 3 agents per lead (exclusivity)",
      "Zip-code based agent matching",
      "Contact capture AFTER value delivery",
      "Agent notified via email instantly",
    ],
    insight:
      "Lead quality >> quantity. By capping to 3 agents and requiring user-initiated contact, conversion rates per lead are 5-10x industry average.",
  },
];

export default function FunnelSection() {
  const [activeStage, setActiveStage] = useState<string>("awareness");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const active = funnelStages.find((s) => s.id === activeStage)!;

  return (
    <SectionHeader
      title="The Conversion Funnel"
      subtitle="How a 'boring' comparison tool outperforms million-dollar lead gen operations — by giving value before asking for anything."
      badge="User Journey"
      badgeColor="#a78bfa"
      number="01"
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 24 }}>
        {/* Funnel visualization */}
        <div className="lg:col-span-5">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {funnelStages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;

              return (
                <AnimatedSection key={stage.id} delay={i * 0.08}>
                  <motion.button
                    onClick={() => setActiveStage(stage.id)}
                    style={{
                      width: "100%",
                      textAlign: "left" as const,
                      borderRadius: "var(--radius-card)",
                      padding: "16px 18px",
                      border: `1px solid ${isActive ? `${stage.color}35` : "transparent"}`,
                      background: isActive ? `${stage.color}0a` : "var(--bg-glass)",
                      cursor: "pointer",
                      outline: "none",
                      transition: "all 0.25s ease",
                    }}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      {/* Icon */}
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: "var(--radius-sm)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          background: `${stage.color}12`,
                          border: `1px solid ${stage.color}25`,
                        }}
                      >
                        <Icon size={18} color={stage.color} />
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3 }}>
                          <span style={{ fontWeight: 600, fontSize: 13, color: "rgba(232,236,244,0.9)" }}>
                            {stage.title}
                          </span>
                          <span
                            style={{
                              fontSize: 11,
                              fontFamily: "var(--font-mono)",
                              fontWeight: 600,
                              color: stage.color,
                            }}
                          >
                            {stage.percentage}%
                          </span>
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>
                          {stage.subtitle}
                        </div>

                        {/* Progress bar */}
                        <div
                          style={{
                            height: 4,
                            borderRadius: 4,
                            overflow: "hidden",
                            background: "rgba(255,255,255,0.04)",
                          }}
                        >
                          <motion.div
                            style={{ height: "100%", borderRadius: 4, background: stage.color }}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${stage.percentage}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                          />
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        size={14}
                        style={{
                          flexShrink: 0,
                          color: isActive ? stage.color : "var(--text-muted)",
                          transition: "color 0.2s",
                        }}
                      />
                    </div>
                  </motion.button>

                  {/* Connector line */}
                  {i < funnelStages.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "2px 0" }}>
                      <motion.div
                        style={{
                          width: 1.5,
                          height: 12,
                          borderRadius: 2,
                          background: `${stage.color}25`,
                        }}
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ delay: 0.4 + i * 0.12 }}
                      />
                    </div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-7">
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-card"
              style={{
                padding: "clamp(24px, 3vw, 36px)",
                borderColor: `${active.color}18`,
                height: "100%",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "var(--radius-xs)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${active.color}12`,
                    border: `1px solid ${active.color}25`,
                  }}
                >
                  <active.icon size={17} color={active.color} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#e8ecf4" }}>
                    {active.title}
                  </h3>
                  <p style={{ fontSize: 12, color: active.color, marginTop: 1 }}>
                    {active.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: 24,
                }}
              >
                {active.description}
              </p>

              {/* Tactics */}
              <div style={{ marginBottom: 24 }}>
                <h4
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    marginBottom: 14,
                  }}
                >
                  Key Tactics
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 10,
                  }}
                >
                  {active.tactics.map((tactic, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                    >
                      <ArrowRight
                        size={12}
                        style={{ marginTop: 3, flexShrink: 0 }}
                        color={active.color}
                      />
                      <span style={{ fontSize: 13, color: "rgba(232,236,244,0.75)", lineHeight: 1.5 }}>
                        {tactic}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Insight callout */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                style={{
                  borderRadius: "var(--radius-sm)",
                  padding: "16px 18px",
                  background: `${active.color}06`,
                  border: `1px solid ${active.color}18`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                  <Sparkles size={12} color={active.color} />
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: active.color,
                    }}
                  >
                    Strategic Insight
                  </span>
                </div>
                <p style={{ fontSize: 13, fontStyle: "italic", lineHeight: 1.6, color: "rgba(232,236,244,0.6)" }}>
                  &ldquo;{active.insight}&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </SectionHeader>
  );
}
