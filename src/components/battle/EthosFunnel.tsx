"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MousePointerClick, SlidersHorizontal, Brain, ShieldCheck, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    id: "hook", icon: MousePointerClick, title: "Ad Click → Landing Page", subtitle: "Identity-driven hooks",
    color: "#fbbf24", pct: 100,
    desc: "Ethos uses emotion-first Facebook ads: 'Are you a 90s baby?', 'In your 40s?', '$50k coverage for $13/mo'. The CTA is always 'Check My Rates' — not 'Get a Quote'. This feels faster, safer, more personal. Your pre-lander must match the ad's emotional angle perfectly.",
    tactics: ["Identity-driven hooks (age, life-stage)", "'Check My Rates' CTA — low commitment language", "Ad-to-page message match is non-negotiable", "Emotional priming before showing any form"],
    insight: "Ethos never leads with product. They lead with identity. The user thinks 'that's me' before they think 'I need insurance'.",
  },
  {
    id: "qualify", icon: SlidersHorizontal, title: "Dynamic Quiz Flow", subtitle: "Intelligent interview",
    color: "#4f8ff7", pct: 65,
    desc: "Ethos's quote form isn't static — it's a dynamic interview that adapts questions based on previous answers. Only relevant questions are shown. This is their secret weapon: it feels conversational, not bureaucratic. Your pre-lander quiz should mimic this pattern before handing off to Ethos.",
    tactics: ["One question per screen (progressive disclosure)", "Dynamic branching based on answers", "3-5 qualifying questions max on your pre-lander", "Show progress indicator to reduce abandonment"],
    insight: "Every extra field you show costs you ~10% of conversions. The quiz should feel like a conversation, not a form.",
  },
  {
    id: "underwrite", icon: Brain, title: "Predictive Underwriting", subtitle: "Instant decision engine",
    color: "#a78bfa", pct: 42,
    desc: "Ethos replaces weeks-long medical exams with algorithmic underwriting. They pull data from MIB, prescription databases, and credit history to make instant decisions. This is the magic — users go from 'curious' to 'approved' in under 10 minutes. Your job: get qualified leads TO this step.",
    tactics: ["No medical exam required (Ethos handles this)", "Instant approval in minutes, not weeks", "Users see real pricing immediately", "This is where Ethos's tech moat lives"],
    insight: "You don't need to explain underwriting. You need to communicate ONE thing: 'Get covered in 10 minutes, no medical exam.' That's the killer value prop.",
  },
  {
    id: "convert", icon: ShieldCheck, title: "Policy Activation", subtitle: "Commission trigger",
    color: "#34d399", pct: 18,
    desc: "When a user completes the Ethos flow and activates a policy, you earn your affiliate commission. Ethos pays on activated policies, not just leads. This means lead QUALITY is everything — a thousand junk clicks that never convert = $0. Ten qualified leads that activate = real money.",
    tactics: ["Commission on activated policies (not clicks)", "Quality > quantity — every junk lead costs you ad spend", "180-day attribution window via Impact tracking", "Focus on audiences most likely to COMPLETE the flow"],
    insight: "This isn't a CPL play. It's a CPA play. You only win when policies activate. That changes everything about how you buy traffic.",
  },
];

export default function EthosFunnel() {
  const [active, setActive] = useState("hook");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const current = steps.find(s => s.id === active)!;

  return (
    <SectionHeader title="Ethos Funnel Anatomy" subtitle="Understand exactly what you're plugging into. Ethos's conversion engine is sophisticated — your job is to feed it qualified traffic that actually converts." badge="Your Pipeline" badgeColor="#fbbf24" number="01">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 24 }}>
        <div className="lg:col-span-5">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <AnimatedSection key={s.id} delay={i * 0.08}>
                  <motion.button onClick={() => setActive(s.id)} style={{ width: "100%", textAlign: "left" as const, borderRadius: "var(--radius-card)", padding: "16px 18px", border: `1px solid ${isActive ? `${s.color}35` : "transparent"}`, background: isActive ? `${s.color}0a` : "var(--bg-glass)", cursor: "pointer", outline: "none" }} whileHover={{ x: 3 }} whileTap={{ scale: 0.985 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 42, height: 42, borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
                        <Icon size={18} color={s.color} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3 }}>
                          <span style={{ fontWeight: 600, fontSize: 13, color: "rgba(232,236,244,0.9)" }}>{s.title}</span>
                          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", fontWeight: 600, color: s.color }}>{s.pct}%</span>
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>{s.subtitle}</div>
                        <div style={{ height: 4, borderRadius: 4, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
                          <motion.div style={{ height: "100%", borderRadius: 4, background: s.color }} initial={{ width: 0 }} animate={isInView ? { width: `${s.pct}%` } : { width: 0 }} transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }} />
                        </div>
                      </div>
                      <ChevronRight size={14} style={{ flexShrink: 0, color: isActive ? s.color : "var(--text-muted)" }} />
                    </div>
                  </motion.button>
                  {i < steps.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "2px 0" }}>
                      <motion.div style={{ width: 1.5, height: 12, borderRadius: 2, background: `${s.color}25` }} initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : { scaleY: 0 }} transition={{ delay: 0.4 + i * 0.12 }} />
                    </div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-7">
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div key={current.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="glass-card" style={{ padding: "clamp(24px, 3vw, 36px)", borderColor: `${current.color}18`, height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 38, height: 38, borderRadius: "var(--radius-xs)", display: "flex", alignItems: "center", justifyContent: "center", background: `${current.color}12`, border: `1px solid ${current.color}25` }}>
                  <current.icon size={17} color={current.color} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#e8ecf4" }}>{current.title}</h3>
                  <p style={{ fontSize: 12, color: current.color, marginTop: 1 }}>{current.subtitle}</p>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 24 }}>{current.desc}</p>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "var(--text-muted)", marginBottom: 14 }}>Key Points</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
                  {current.tactics.map((t, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <ArrowRight size={12} style={{ marginTop: 3, flexShrink: 0 }} color={current.color} />
                      <span style={{ fontSize: 13, color: "rgba(232,236,244,0.75)", lineHeight: 1.5 }}>{t}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} style={{ borderRadius: "var(--radius-sm)", padding: "16px 18px", background: `${current.color}06`, border: `1px solid ${current.color}18` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                  <Sparkles size={12} color={current.color} />
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: current.color }}>Strategic Insight</span>
                </div>
                <p style={{ fontSize: 13, fontStyle: "italic", lineHeight: 1.6, color: "rgba(232,236,244,0.6)" }}>&ldquo;{current.insight}&rdquo;</p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </SectionHeader>
  );
}
