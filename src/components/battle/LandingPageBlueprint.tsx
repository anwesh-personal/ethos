"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, FileQuestion, ArrowRight, Shield, Zap, BarChart3, Check, X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const pageElements = [
  {
    title: "Pre-Lander / Advertorial",
    icon: Layout, color: "#4f8ff7",
    purpose: "Warm cold traffic before sending to Ethos. Facebook users aren't searching for insurance — they need education and emotional priming first.",
    elements: [
      { name: "Headline matching ad hook", must: true, detail: "If ad says 'In your 40s?' — the page headline must echo that exact identity" },
      { name: "2-3 pain points with stats", must: true, detail: "'Average funeral costs $12K' / 'Rates increase 8% per year after 35' / '40% of families struggle financially after a death'" },
      { name: "Social proof block", must: true, detail: "Star ratings, review count, trust badges. 'Rated 4.8/5 by 10,000+ customers'" },
      { name: "One clear CTA button", must: true, detail: "'Check My Rates in 60 Seconds' — single button, no navigation menu, no footer links" },
      { name: "Video testimonial", must: false, detail: "30-second UGC clip of someone sharing their experience. Boosts conversion 20-40%" },
      { name: "FAQ accordion", must: false, detail: "3-4 objection-handling questions. 'Do I need a medical exam?' 'How long does it take?'" },
    ],
  },
  {
    title: "Quiz Funnel (Pre-Qualifier)",
    icon: FileQuestion, color: "#a78bfa",
    purpose: "Filter cold traffic into qualified leads BEFORE sending to Ethos. This is where you protect your conversion economics — junk traffic dies here, quality traffic flows through.",
    elements: [
      { name: "Q1: Age range", must: true, detail: "'Under 30 / 30-39 / 40-49 / 50-59 / 60+' — this is the #1 qualifying factor for insurance pricing" },
      { name: "Q2: Coverage need", must: true, detail: "'Protect my family / Cover my mortgage / Leave inheritance / Not sure yet' — identifies intent level" },
      { name: "Q3: Health status", must: true, detail: "'Excellent / Good / Fair / Poor' — pre-qualifies for Ethos's underwriting" },
      { name: "Q4: Current coverage", must: true, detail: "'Yes, I have coverage / No, this would be my first policy' — first-timers convert 2x" },
      { name: "Progress bar", must: true, detail: "Visual indicator showing 'Step 2 of 4' — reduces abandonment by 28%" },
      { name: "One question per screen", must: true, detail: "Never show all questions at once. Progressive disclosure keeps momentum" },
    ],
  },
  {
    title: "Results / Handoff Page",
    icon: BarChart3, color: "#34d399",
    purpose: "The bridge between your quiz and Ethos's funnel. Show a personalized 'result' based on their quiz answers, then hand them off to Ethos with your affiliate link.",
    elements: [
      { name: "Personalized estimate", must: true, detail: "'Based on your answers, you may qualify for $500K coverage starting around $20/mo' — this creates commitment" },
      { name: "Ethos CTA button", must: true, detail: "'See My Exact Rate with Ethos →' — your affiliate link. Make it feel like a natural next step, not a redirect" },
      { name: "Trust transfer", must: true, detail: "'We've partnered with Ethos, rated 4.8★ and trusted by 500K+ families' — transfer YOUR trust to Ethos" },
      { name: "No-exam badge", must: true, detail: "'✓ No Medical Exam Required' — the #1 objection killer. Display prominently" },
      { name: "Urgency element", must: false, detail: "'Rates based on today\'s age — your next birthday could increase your cost by 8%'" },
      { name: "Email capture (optional)", must: false, detail: "Capture email BEFORE the Ethos handoff for retargeting abandoned flows" },
    ],
  },
];

const dosDonts = {
  dos: [
    "Match ad messaging to landing page word-for-word",
    "Use 'Check My Rates' — never 'Get a Quote' or 'Apply Now'",
    "Show specific dollar amounts ($13/mo, $500K coverage)",
    "Mobile-first design — 80%+ traffic is mobile",
    "Load under 2 seconds — every second costs 7% conversion",
    "Single CTA per page — zero distractions",
  ],
  donts: [
    "Never use navigation menus on landing pages",
    "Don't ask for email before showing any value",
    "Don't use stock photos of generic happy families",
    "Don't mention 'death' in the first screen — use 'protection'",
    "Don't send cold Facebook traffic directly to Ethos",
    "Don't show multiple insurance options — one path only",
  ],
};

export default function LandingPageBlueprint() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Landing Page Blueprint" subtitle="Your pre-lander is the bridge between cold paid traffic and Ethos's conversion engine. Get this wrong and your ad spend burns. Get it right and you print money." badge="Conversion Architecture" badgeColor="#a78bfa" number="04">
      <div ref={ref}>
        {/* Page flow */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {pageElements.map((el, i) => {
            const Icon = el.icon;
            return (
              <AnimatedSection key={el.title} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 32px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", background: `${el.color}0e`, border: `1px solid ${el.color}20` }}>
                      <Icon size={17} color={el.color} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>{el.title}</h3>
                      <p style={{ fontSize: 11, color: el.color, marginTop: 2 }}>Step {i + 1} of your funnel</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)", marginBottom: 20 }}>{el.purpose}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 10 }}>
                    {el.elements.map((item, ei) => (
                      <motion.div key={ei} initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + ei * 0.04 + i * 0.06 }}
                        style={{ padding: "14px 16px", borderRadius: "var(--radius-xs)", background: "rgba(255,255,255,0.015)" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontWeight: 600, fontSize: 12, color: "rgba(232,236,244,0.82)" }}>{item.name}</span>
                          <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", padding: "2px 8px", borderRadius: 999, background: item.must ? "rgba(52,211,153,0.08)" : "rgba(255,255,255,0.04)", color: item.must ? "#34d399" : "var(--text-muted)", border: `1px solid ${item.must ? "rgba(52,211,153,0.18)" : "rgba(255,255,255,0.06)"}` }}>
                            {item.must ? "MUST HAVE" : "NICE TO HAVE"}
                          </span>
                        </div>
                        <p style={{ fontSize: 11, lineHeight: 1.55, color: "var(--text-muted)" }}>{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Dos and Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 14 }}>
          <AnimatedSection delay={0.1}>
            <div className="glass-card" style={{ padding: "24px", height: "100%", borderColor: "rgba(52,211,153,0.1)" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#34d399", marginBottom: 18 }}>
                <Zap size={14} /> Landing Page Rules
              </h4>
              {dosDonts.dos.map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 + i * 0.05 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                  <Check size={12} color="#34d399" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "rgba(232,236,244,0.7)", lineHeight: 1.5 }}>{d}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card" style={{ padding: "24px", height: "100%", borderColor: "rgba(251,113,133,0.1)" }}>
              <h4 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#fb7185", marginBottom: 18 }}>
                <Shield size={14} /> Never Do This
              </h4>
              {dosDonts.donts.map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 + i * 0.05 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                  <X size={12} color="#fb7185" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "rgba(232,236,244,0.7)", lineHeight: 1.5 }}>{d}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </SectionHeader>
  );
}
