"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, TrendingUp, Timer } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const verdictItems = [
  {
    metric: "Overall Lead Gen Effectiveness",
    score: 94, color: "#34d399", icon: Target,
    verdict: "Term4Sale doesn't generate leads — it attracts them. The system is so well-designed that consumers voluntarily hand over their contact info after receiving genuine value.",
  },
  {
    metric: "Competitive Defensibility",
    score: 97, color: "#4f8ff7", icon: Shield,
    verdict: "The 40-year moat of domain authority + proprietary data + network effects makes this one of the most defensible lead gen operations in any industry.",
  },
  {
    metric: "Scalability",
    score: 72, color: "#fbbf24", icon: TrendingUp,
    verdict: "Growth is limited by organic reach ceiling. No paid acquisition channel, limited content marketing, and mobile UX needs work. But the quality/cost ratio is unbeatable.",
  },
  {
    metric: "Replicability",
    score: 15, color: "#fb7185", icon: Timer,
    verdict: "You can copy the UI in a week. You cannot copy 40 years of trust, 10,000+ backlinks, and a proprietary database. The moat IS time itself.",
  },
];

export default function VerdictSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ position: "relative", padding: "var(--space-section) 0" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 400,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(79,143,247,0.035), transparent 70%)",
          }}
        />
      </div>

      <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="tag-pill" style={{ borderColor: "rgba(52,211,153,0.25)", color: "#34d399", marginBottom: 16, display: "inline-flex" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
            Final Assessment
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 12,
            marginTop: 16,
          }}>
            The Verdict
          </h2>
          <p style={{
            fontSize: "clamp(14px, 1.8vw, 17px)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
          }}>
            A machine that turns organic traffic into high-quality insurance leads at near-zero cost, protected by an irreplicable time moat.
          </p>
        </AnimatedSection>

        {/* Verdict cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
            marginBottom: 48,
          }}
        >
          {verdictItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="glass-card"
                  style={{ padding: "24px 26px", height: "100%" }}
                  whileHover={{ borderColor: `${item.color}20` }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "var(--radius-sm)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `${item.color}0c`,
                          border: `1px solid ${item.color}1a`,
                        }}
                      >
                        <Icon size={16} color={item.color} />
                      </div>
                      <span style={{ fontWeight: 600, fontSize: 13, color: "rgba(232,236,244,0.88)" }}>
                        {item.metric}
                      </span>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 800, color: item.color, lineHeight: 1 }}>
                      {item.score}
                    </span>
                  </div>

                  {/* Score bar */}
                  <div style={{ height: 4, borderRadius: 4, overflow: "hidden", marginBottom: 16, background: "rgba(255,255,255,0.04)" }}>
                    <motion.div
                      style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${item.color}, ${item.color}60)` }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.score}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                  </div>

                  <p style={{ fontSize: 12, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                    {item.verdict}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom line */}
        <AnimatedSection delay={0.4}>
          <div className="animated-border">
            <div className="glass-card" style={{ padding: "clamp(32px, 4vw, 56px)", textAlign: "center" }}>
              <motion.div
                className="gradient-text"
                style={{
                  fontSize: "clamp(40px, 6vw, 64px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: 12,
                  display: "inline-block",
                  letterSpacing: "-0.04em",
                }}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                10/10
              </motion.div>
              <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(232,236,244,0.8)", fontWeight: 600, marginBottom: 10 }}>
                Lead Generation Architecture
              </p>
              <p style={{ fontSize: 14, maxWidth: 520, margin: "0 auto", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                Term4Sale is proof that the best lead generation doesn&apos;t look like marketing at all.
                It looks like a tool so useful that people can&apos;t help but use it — and once they do,
                they trust it enough to take the next step.{" "}
                <span style={{ color: "rgba(232,236,244,0.55)", fontWeight: 500 }}>That&apos;s the playbook.</span>
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
              Visual analysis built for strategic understanding
            </span>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Ethos Research
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
