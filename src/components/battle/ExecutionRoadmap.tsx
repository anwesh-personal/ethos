"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const phases = [
  {
    phase: "Week 1-2", title: "Foundation", color: "#4f8ff7",
    tasks: [
      "Sign up for Ethos affiliate program via Impact",
      "Set up tracking: UTM params, Impact pixel, GA4 events",
      "Build pre-lander page (advertorial style, mobile-first)",
      "Build quiz funnel (4 questions, one per screen)",
      "Build results/handoff page with Ethos affiliate CTA",
      "Set up Meta Business Manager + ad account",
    ],
    milestone: "Funnel live with tracking verified end-to-end",
  },
  {
    phase: "Week 3-4", title: "Testing", color: "#a78bfa",
    tasks: [
      "Launch 3 ad angles: Identity, Fear, Value ($30/day each)",
      "Test 3 creatives per angle (9 total ads running)",
      "Monitor daily: CTR, quiz completion %, Ethos click-through",
      "Kill ads below 1% CTR after 48 hours",
      "A/B test pre-lander headline (match vs. mismatch)",
      "Install Meta pixel on quiz completion + Ethos handoff",
    ],
    milestone: "Identify 2-3 winning ad creatives with CTR >2%",
  },
  {
    phase: "Month 2", title: "Optimization", color: "#fbbf24",
    tasks: [
      "Double budget on winning ads ($50-100/day per winner)",
      "Build Lookalike audiences from quiz completers",
      "Add retargeting campaign for quiz abandoners",
      "Optimize quiz flow: test question order, copy, design",
      "A/B test CTA copy on results page",
      "Add email capture before Ethos handoff for retargeting",
    ],
    milestone: "Achieve 2x+ ROAS consistently over 14 days",
  },
  {
    phase: "Month 3", title: "Scale", color: "#34d399",
    tasks: [
      "Scale winning campaigns to $200-500/day",
      "Launch Google Ads on long-tail insurance keywords",
      "Test TikTok ads with UGC-style video content",
      "Build automated email sequence for non-converters",
      "Negotiate custom payout rates with Ethos (volume-based)",
      "Hire VA for creative production (5-10 new ads/week)",
    ],
    milestone: "Hit $10K+/mo revenue at 3x+ ROAS",
  },
  {
    phase: "Month 4-6", title: "Domination", color: "#fb7185",
    tasks: [
      "Expand to additional insurance verticals if available",
      "Build content/SEO layer for organic traffic (long game)",
      "Launch YouTube pre-roll ads for high-intent audiences",
      "Test influencer partnerships for social proof at scale",
      "Build custom CRM for lead nurturing and reactivation",
      "Systematize creative testing: weekly new angles",
    ],
    milestone: "Hit $30K+/mo revenue, diversified across 3+ channels",
  },
];

export default function ExecutionRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Execution Roadmap" subtitle="The exact week-by-week plan from zero to profitable insurance affiliate operation. No fluff — just the steps." badge="Go-To-Market" badgeColor="#34d399" number="06">
      <div ref={ref}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {phases.map((p, i) => (
            <AnimatedSection key={p.phase} delay={i * 0.08}>
              <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 30px)", borderColor: `${p.color}0c` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 8, background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20`, whiteSpace: "nowrap" as const }}>
                      {p.phase}
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "rgba(232,236,244,0.88)" }}>{p.title}</h3>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 8, marginBottom: 18 }}>
                  {p.tasks.map((task, ti) => (
                    <motion.div key={ti} initial={{ opacity: 0, x: -6 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + ti * 0.04 + i * 0.06 }}
                      style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 12px", borderRadius: 6, background: "rgba(255,255,255,0.01)" }}>
                      <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <div style={{ width: 6, height: 6, borderRadius: 2, background: `${p.color}40` }} />
                      </div>
                      <span style={{ fontSize: 12, color: "rgba(232,236,244,0.68)", lineHeight: 1.5 }}>{task}</span>
                    </motion.div>
                  ))}
                </div>

                <div style={{ padding: "12px 16px", borderRadius: "var(--radius-xs)", background: `${p.color}06`, border: `1px solid ${p.color}14` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <Sparkles size={10} color={p.color} />
                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: p.color }}>Milestone</span>
                  </div>
                  <p style={{ fontSize: 12, color: "rgba(232,236,244,0.55)", lineHeight: 1.5 }}>{p.milestone}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3}>
          <div className="animated-border">
            <div className="glass-card" style={{ padding: "clamp(32px, 4vw, 48px)", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.18)" }}>
                <Rocket size={20} color="#fbbf24" />
              </div>
              <h3 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#e8ecf4", marginBottom: 10 }}>
                The playbook is ready. Execute.
              </h3>
              <p style={{ fontSize: 14, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                Every day you wait, someone else is running these exact ads. The insurance affiliate space rewards speed and iteration.
                Start with $30/day, test 3 angles, kill losers fast, scale winners hard.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Ethos Affiliate Battle Plan — Paid Traffic Strategy</span>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>© {new Date().getFullYear()} Ethos Research</span>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
