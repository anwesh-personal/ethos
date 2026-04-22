"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Rocket, Zap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter", price: 49, color: "#4f8ff7", popular: false,
    features: ["50 tracking links", "5 pages", "100K clicks/mo", "Heatmaps", "3 active A/B tests", "1 custom domain", "1 user"],
  },
  {
    name: "Pro", price: 149, color: "#fbbf24", popular: true,
    features: ["500 tracking links", "25 pages", "1M clicks/mo", "Heatmaps + session replay", "Unlimited A/B tests", "5 custom domains", "3 users", "Page cloner", "CAPI integrations"],
  },
  {
    name: "Scale", price: 349, color: "#34d399", popular: false,
    features: ["Unlimited links", "Unlimited pages", "5M clicks/mo", "Full Intel Engine", "Unlimited tests", "Unlimited domains", "10 users", "Page cloner", "Priority support"],
  },
  {
    name: "Agency", price: 699, color: "#a78bfa", popular: false,
    features: ["Everything in Scale", "20M clicks/mo", "Unlimited users", "Sub-accounts (client isolation)", "White-label option", "Dedicated support", "Custom integrations"],
  },
];

const replacements = [
  { tool: "ClickMagick", cost: "$79/mo", what: "Links only" },
  { tool: "Voluum", cost: "$149/mo", what: "Tracking only" },
  { tool: "Unbounce", cost: "$99/mo", what: "Pages only" },
  { tool: "Hotjar", cost: "$39/mo", what: "Heatmaps only" },
  { tool: "VWO", cost: "$199/mo", what: "Testing only" },
];

export default function AosPricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const totalReplaced = replacements.reduce((a, r) => a + parseInt(r.cost.replace(/\D/g, "")), 0);

  return (
    <SectionHeader title="Pricing" subtitle="Replace $400-1,200/mo in fragmented tools. One subscription. Everything included." badge="Business Model" badgeColor="#fbbf24" number="08">
      <div ref={ref}>
        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 32 }}>
          {plans.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.06}>
              <div className="glass-card" style={{ padding: "24px", height: "100%", borderColor: p.popular ? `${p.color}25` : undefined, position: "relative" }}>
                {p.popular && (
                  <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", padding: "3px 12px", borderRadius: "0 0 6px 6px", background: `${p.color}18`, border: `1px solid ${p.color}30`, borderTop: "none", fontSize: 9, fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: p.color }}>{p.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginTop: 8 }}>
                    <span style={{ fontSize: 36, fontWeight: 800, fontFamily: "var(--font-mono)", color: "rgba(232,236,244,0.9)" }}>${p.price}</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>/mo</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                      <Check size={12} color={p.color} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: "rgba(232,236,244,0.65)", lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Replacement value */}
        <AnimatedSection delay={0.2}>
          <div className="animated-border">
            <div className="glass-card" style={{ padding: "clamp(24px, 3vw, 36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                <Zap size={15} color="#fbbf24" />
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>What You Replace</h3>
              </div>
              <div style={{ display: "grid", gap: 6, marginBottom: 18 }}>
                {replacements.map((r, i) => (
                  <motion.div key={r.tool} initial={{ opacity: 0, x: -8 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25 + i * 0.04 }}
                    style={{ display: "grid", gridTemplateColumns: "140px 90px 1fr", alignItems: "center", gap: 12, padding: "8px 14px", borderRadius: 6, background: "rgba(255,255,255,0.01)" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(232,236,244,0.7)", textDecoration: "line-through", textDecorationColor: "rgba(251,113,133,0.4)" }}>{r.tool}</span>
                    <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", fontWeight: 600, color: "#fb7185" }}>{r.cost}</span>
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{r.what}</span>
                  </motion.div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderRadius: 8, background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.15)" }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>You currently pay</div>
                  <div style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--font-mono)", color: "#fb7185", textDecoration: "line-through" }}>${totalReplaced}/mo</div>
                </div>
                <div style={{ fontSize: 24, color: "var(--text-muted)" }}>→</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>AffiliateOS Pro</div>
                  <div style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--font-mono)", color: "#34d399" }}>$149/mo</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionHeader>
  );
}
