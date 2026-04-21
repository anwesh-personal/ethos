"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Heart, DollarSign, Clock, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const angles = [
  {
    angle: "Identity Hook",
    icon: MessageSquare,
    color: "#4f8ff7",
    grade: "A+",
    examples: [
      { hook: "Are you a '90s baby?", body: "You can get $500K life insurance for the price of a Netflix subscription. No medical exam. 10 minutes.", cta: "Check My Rates →" },
      { hook: "New parent? Read this.", body: "The average funeral costs $12K. Don't leave that bill for your family. Get covered in 10 minutes.", cta: "See What You'd Pay →" },
      { hook: "In your 40s and uninsured?", body: "Every year you wait, your rates go up 8-10%. Lock in today's rates before your next birthday.", cta: "Check My Rates →" },
    ],
    why: "Identity hooks stop the scroll because the user self-selects. They think 'that's me' before they even read the body copy. This is Ethos's #1 performing ad format.",
  },
  {
    angle: "Fear / Urgency",
    icon: Heart,
    color: "#fb7185",
    grade: "A",
    examples: [
      { hook: "What happens to your mortgage if you die tomorrow?", body: "Your family keeps the house — or they don't. $1M coverage for $35/mo. Takes 10 minutes.", cta: "Protect Your Family →" },
      { hook: "Don't leave funeral costs behind.", body: "$7,000-$12,000 is the average funeral bill. Make sure your family doesn't pay it out of pocket.", cta: "Check My Rates →" },
      { hook: "Your rates go up 8% every birthday.", body: "A healthy 35-year-old pays $22/mo for $500K. At 45? $48/mo. Lock in today's price.", cta: "See Today's Rates →" },
    ],
    why: "Fear-based ads have the highest click-through rates in insurance. But they MUST be followed by a reassuring, easy landing experience — or bounce rates spike. The ad scares, the landing page soothes.",
  },
  {
    angle: "Value / Price Shock",
    icon: DollarSign,
    color: "#34d399",
    grade: "A",
    examples: [
      { hook: "$500K life insurance for $13/month", body: "Less than your daily coffee. No medical exam. Apply online in 10 minutes. Get approved today.", cta: "Check My Rates →" },
      { hook: "Life insurance is way cheaper than you think.", body: "Most people overestimate the cost by 300%. Find out what you'd actually pay — it takes 60 seconds.", cta: "See My Price →" },
      { hook: "I got $1M in coverage for $32/mo", body: "No blood test. No doctor visit. Applied on my phone during lunch. Here's how ↓", cta: "Check Your Rates →" },
    ],
    why: "People overestimate life insurance costs by 3x. When you show the real price, it creates a 'wait, that's it?' moment that drives action. Always use specific dollar amounts — never vague.",
  },
  {
    angle: "Ease / Speed",
    icon: Clock,
    color: "#fbbf24",
    grade: "B+",
    examples: [
      { hook: "Life insurance the easy way.", body: "No medical exam. No paperwork. No waiting weeks. Apply online in 10 minutes from your couch.", cta: "Get Started →" },
      { hook: "10 minutes. That's it.", body: "That's all it takes to get life insurance. No doctor's appointment. No blood test. Just your phone.", cta: "Check My Rates →" },
      { hook: "I kept putting off life insurance until I found this.", body: "No exam, no agent calling me, no 6-week wait. Got approved on my phone in 10 minutes.", cta: "Try It Yourself →" },
    ],
    why: "Ease hooks work best as a secondary angle after the user is already interested. They address the #1 objection: 'it's going to be a hassle'. Less effective as primary scroll-stoppers than identity or fear hooks.",
  },
];

export default function AdPlaybook() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Ad Creative Playbook" subtitle="The exact hooks, angles, and copy frameworks that convert cold traffic into insurance leads. Tested patterns from Ethos and top insurance advertisers." badge="Creative Strategy" badgeColor="#fb7185" number="03">
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {angles.map((a, ai) => {
          const Icon = a.icon;
          return (
            <AnimatedSection key={a.angle} delay={ai * 0.08}>
              <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 32px)", borderColor: `${a.color}0c` }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", background: `${a.color}0e`, border: `1px solid ${a.color}20` }}>
                      <Icon size={17} color={a.color} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>{a.angle}</h3>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Ad creative framework</p>
                    </div>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "var(--font-mono)", color: a.color, lineHeight: 1 }}>{a.grade}</div>
                </div>

                {/* Example ads */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {a.examples.map((ex, ei) => (
                    <motion.div key={ei} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + ei * 0.06 + ai * 0.08 }}
                      style={{ padding: "18px", borderRadius: "var(--radius-xs)", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)" }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: a.color, marginBottom: 8, lineHeight: 1.3 }}>
                        &ldquo;{ex.hook}&rdquo;
                      </div>
                      <p style={{ fontSize: 12, lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 12 }}>{ex.body}</p>
                      <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 8, fontSize: 11, fontWeight: 600, background: `${a.color}12`, color: a.color, border: `1px solid ${a.color}20` }}>
                        {ex.cta}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Why it works */}
                <div style={{ padding: "14px 18px", borderRadius: "var(--radius-xs)", background: `${a.color}05`, border: `1px solid ${a.color}12` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <Sparkles size={11} color={a.color} />
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: a.color }}>Why This Works</span>
                  </div>
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(232,236,244,0.55)" }}>{a.why}</p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionHeader>
  );
}
