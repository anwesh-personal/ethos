"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Timer, Shield, Target, Zap, Users, Sparkles, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const keyTakeaways = [
  {
    icon: Brain, title: "Utility IS the Marketing", color: "#4f8ff7",
    description: "Term4Sale doesn't market a product — it IS the product. The comparison tool attracts, engages, and converts simultaneously. No separate 'marketing funnel' needed.",
    lesson: "Build something so useful that people come back and tell others. The tool IS the lead magnet.",
  },
  {
    icon: Timer, title: "Time is the Ultimate Moat", color: "#a78bfa",
    description: "40 years of domain authority, backlinks, and institutional trust can't be replicated with money. This is proof that the best SEO strategy is to start 20 years ago.",
    lesson: "Don't chase quick wins. Build systems that compound over decades.",
  },
  {
    icon: Shield, title: "Trust > Design", color: "#34d399",
    description: "Term4Sale proves that a 'ugly' site can outperform beautiful VC-backed platforms IF the trust architecture is superior. In YMYL categories, trust is everything.",
    lesson: "Design matters — but trust matters 10x more in high-stakes purchases.",
  },
  {
    icon: Target, title: "Lead Quality > Volume", color: "#fbbf24",
    description: "By capping leads to 3 agents and requiring user-initiated contact, Term4Sale produces leads worth $50-200 each. Aggregators sell $5 leads that nobody converts.",
    lesson: "A single high-intent lead beats 100 scraped contacts every time.",
  },
  {
    icon: Zap, title: "Value Before Capture", color: "#22c5d9",
    description: "They give you 100+ real quotes before asking for anything. This inverted funnel (value-first, capture-second) creates reciprocity and dramatically increases conversion rates.",
    lesson: "Invert your funnel. Give the best stuff away, then make the ask.",
  },
  {
    icon: Users, title: "Ecosystem > Product", color: "#fb7185",
    description: "The Compulife ↔ Term4Sale ↔ Agent ↔ Consumer ecosystem creates network effects. Each participant makes the system stronger. This is a platform, not just a website.",
    lesson: "Build ecosystems, not just products. Make every participant a growth driver.",
  },
];

const playbook = [
  { step: "01", title: "Build the Utility First", detail: "Create a tool so valuable that people would pay for it, then give it away free. The traffic will come.", color: "#4f8ff7" },
  { step: "02", title: "Position as Neutral Authority", detail: "Don't sell the thing you compare. Your revenue model must not conflict with user trust.", color: "#a78bfa" },
  { step: "03", title: "Value Before Capture", detail: "Deliver comprehensive, actionable value BEFORE asking for any contact information.", color: "#22c5d9" },
  { step: "04", title: "Cap Lead Distribution", detail: "Send each lead to max 3 providers. Exclusivity = quality. Quality = higher conversion. Higher conversion = happier providers who pay more.", color: "#34d399" },
  { step: "05", title: "Build the Flywheel", detail: "Create incentive structures where every participant grows the network. Agents who refer traffic earn more listings.", color: "#fbbf24" },
  { step: "06", title: "Let Time Compound", detail: "Domain authority, backlinks, and trust compound exponentially. The best time to start was 20 years ago. The second best time is now.", color: "#fb7185" },
];

export default function TakeawaysSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader
      title="Key Takeaways"
      subtitle="What you can steal from Term4Sale's playbook — and what you absolutely cannot replicate."
      badge="Strategic Insights"
      badgeColor="#fbbf24"
      number="07"
    >
      <div ref={ref}>
        {/* Takeaway cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
            marginBottom: 56,
          }}
        >
          {keyTakeaways.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.06}>
                <motion.div
                  className="glass-card"
                  style={{ padding: "24px", height: "100%" }}
                  whileHover={{ y: -3, borderColor: `${item.color}20` }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                      background: `${item.color}0c`,
                      border: `1px solid ${item.color}1a`,
                    }}
                  >
                    <Icon size={18} color={item.color} />
                  </div>

                  <h4 style={{ fontWeight: 600, fontSize: 14, color: "rgba(232,236,244,0.88)", marginBottom: 8 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)", marginBottom: 16 }}>
                    {item.description}
                  </p>

                  {/* Lesson callout */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: "var(--radius-xs)",
                      background: `${item.color}05`,
                      border: `1px solid ${item.color}12`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                      <Sparkles size={10} color={item.color} />
                      <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: item.color }}>
                        Lesson
                      </span>
                    </div>
                    <p style={{ fontSize: 12, fontStyle: "italic", color: "rgba(232,236,244,0.5)", lineHeight: 1.55 }}>
                      {item.lesson}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Playbook */}
        <AnimatedSection>
          <div className="animated-border">
            <div className="glass-card" style={{ padding: "clamp(24px, 3vw, 40px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(251,191,36,0.08)",
                    border: "1px solid rgba(251,191,36,0.18)",
                  }}
                >
                  <Rocket size={16} color="#fbbf24" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: "#e8ecf4" }}>The Replication Playbook</h3>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                    If you were building this from scratch in any niche
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 12,
                }}
              >
                {playbook.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    style={{
                      padding: "20px",
                      borderRadius: "var(--radius-xs)",
                      background: "rgba(255,255,255,0.015)",
                      transition: "background 0.2s",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 28,
                        fontWeight: 800,
                        color: `${step.color}30`,
                        marginBottom: 10,
                        lineHeight: 1,
                      }}
                    >
                      {step.step}
                    </div>
                    <h4 style={{ fontWeight: 600, fontSize: 13, color: "rgba(232,236,244,0.82)", marginBottom: 6 }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: 12, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                      {step.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionHeader>
  );
}
