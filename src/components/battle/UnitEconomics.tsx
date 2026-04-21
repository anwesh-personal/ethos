"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const scenarios = [
  {
    name: "Conservative",
    color: "#fb7185",
    adSpend: 3000, cpc: 8, ctr: 1.5, quizComplete: 45, ethosClick: 60, policyRate: 8, avgCommission: 80,
  },
  {
    name: "Realistic",
    color: "#fbbf24",
    adSpend: 3000, cpc: 5, ctr: 2.5, quizComplete: 55, ethosClick: 65, policyRate: 12, avgCommission: 100,
  },
  {
    name: "Optimized",
    color: "#34d399",
    adSpend: 3000, cpc: 3.5, ctr: 3.5, quizComplete: 65, ethosClick: 72, policyRate: 18, avgCommission: 120,
  },
];

function calc(s: typeof scenarios[0]) {
  const clicks = Math.round(s.adSpend / s.cpc);
  const quizStarts = clicks;
  const quizCompletes = Math.round(quizStarts * (s.quizComplete / 100));
  const ethosClicks = Math.round(quizCompletes * (s.ethosClick / 100));
  const policies = Math.round(ethosClicks * (s.policyRate / 100));
  const revenue = policies * s.avgCommission;
  const roas = revenue / s.adSpend;
  const cpa = policies > 0 ? Math.round(s.adSpend / policies) : 0;
  const profit = revenue - s.adSpend;
  return { clicks, quizStarts, quizCompletes, ethosClicks, policies, revenue, roas, cpa, profit };
}

const kpis = [
  { label: "Break-Even CPA", value: "$80-120", detail: "Max you can spend per policy and still profit. Depends on avg commission.", color: "#fbbf24", icon: Calculator },
  { label: "Target ROAS", value: "3x+", detail: "Below 2x you're bleeding. 3x is healthy. 5x+ means scale aggressively.", color: "#34d399", icon: TrendingUp },
  { label: "Kill Threshold", value: "<1.5x ROAS", detail: "If a campaign is below 1.5x after $500 spend and 72 hours, kill it. No exceptions.", color: "#fb7185", icon: AlertTriangle },
  { label: "Scale Trigger", value: ">3x ROAS", detail: "If a campaign hits 3x+ ROAS over 7 days with 50+ conversions, increase budget 20% daily.", color: "#4f8ff7", icon: DollarSign },
];

export default function UnitEconomics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Unit Economics" subtitle="The math that determines if you make money or burn money. Know your numbers before you spend a single dollar on ads." badge="P&L Model" badgeColor="#34d399" number="05">
      <div ref={ref}>
        {/* Scenario cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14, marginBottom: 40 }}>
          {scenarios.map((s, i) => {
            const r = calc(s);
            return (
              <AnimatedSection key={s.name} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: "24px", borderColor: `${s.color}12` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: 15, color: s.color }}>{s.name}</h3>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>${s.adSpend}/mo ad spend</p>
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-mono)", color: r.profit > 0 ? "#34d399" : "#fb7185", lineHeight: 1 }}>
                      {r.roas.toFixed(1)}x
                    </div>
                  </div>

                  {/* Funnel breakdown */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                    {[
                      { label: "Ad Clicks", val: r.clicks.toLocaleString(), pct: 100 },
                      { label: "Quiz Completes", val: r.quizCompletes.toLocaleString(), pct: s.quizComplete },
                      { label: "Ethos Handoffs", val: r.ethosClicks.toLocaleString(), pct: Math.round((r.ethosClicks / r.clicks) * 100) },
                      { label: "Policies Activated", val: r.policies.toLocaleString(), pct: Math.round((r.policies / r.clicks) * 100) },
                    ].map((row, ri) => (
                      <div key={ri}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                          <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{row.label}</span>
                          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", fontWeight: 600, color: "rgba(232,236,244,0.7)" }}>{row.val}</span>
                        </div>
                        <div style={{ height: 3, borderRadius: 3, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
                          <motion.div style={{ height: "100%", borderRadius: 3, background: s.color }} initial={{ width: 0 }}
                            animate={isInView ? { width: `${row.pct}%` } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 + ri * 0.1 + i * 0.1 }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom line */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, padding: "14px", borderRadius: "var(--radius-xs)", background: "rgba(255,255,255,0.015)" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 4 }}>Revenue</div>
                      <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-mono)", color: "#34d399" }}>${r.revenue.toLocaleString()}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 4 }}>CPA</div>
                      <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-mono)", color: s.color }}>${r.cpa}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 4 }}>Profit</div>
                      <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-mono)", color: r.profit > 0 ? "#34d399" : "#fb7185" }}>
                        {r.profit > 0 ? "+" : ""}${r.profit.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* KPI rules */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {kpis.map((k, i) => {
            const Icon = k.icon;
            return (
              <AnimatedSection key={k.label} delay={0.2 + i * 0.06}>
                <div className="glass-card" style={{ padding: "20px 22px", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "var(--radius-xs)", display: "flex", alignItems: "center", justifyContent: "center", background: `${k.color}0c`, border: `1px solid ${k.color}1a` }}>
                      <Icon size={14} color={k.color} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: 12, color: "rgba(232,236,244,0.82)" }}>{k.label}</span>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800, fontFamily: "var(--font-mono)", color: k.color, marginBottom: 8 }}>{k.value}</div>
                  <p style={{ fontSize: 11, lineHeight: 1.6, color: "var(--text-muted)" }}>{k.detail}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </SectionHeader>
  );
}
