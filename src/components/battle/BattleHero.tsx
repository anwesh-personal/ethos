"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Crosshair, ArrowDown } from "lucide-react";

export default function BattleHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative flex items-center justify-center overflow-hidden grid-bg" style={{ minHeight: "100vh", paddingTop: 80 }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ width: 600, height: 400, top: -150, left: -150, background: "radial-gradient(ellipse, rgba(251,191,36,0.06), transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -100, right: -100, background: "radial-gradient(ellipse, rgba(52,211,153,0.05), transparent 70%)" }} />
      </div>

      <motion.div className="relative z-10 text-center" style={{ y, opacity, maxWidth: 800, padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 32 }}>
          <span className="tag-pill" style={{ borderColor: "rgba(251,191,36,0.25)" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fbbf24", display: "inline-block" }} />
            Paid Traffic × Ethos Affiliate
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}
          style={{ fontSize: "clamp(38px, 6.5vw, 72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: 20 }}>
          <span style={{ color: "#fbbf24" }}>Battle Plan</span>
          <br />
          <span style={{ color: "rgba(232,236,244,0.9)" }}>Insurance Domination</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }}
          style={{ fontSize: "clamp(15px, 2vw, 18px)", maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.7, color: "var(--text-secondary)" }}>
          The complete playbook for driving{" "}
          <span style={{ color: "#e8ecf4", fontWeight: 600 }}>paid traffic through Ethos&apos;s affiliate funnel</span>{" "}
          to sell a shit ton of insurance — ad creative, landing pages, unit economics, and execution roadmap.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(24px, 4vw, 48px)", marginBottom: 56 }}>
          {[
            { label: "Target CPA", value: "<$25", color: "#34d399" },
            { label: "Insurance CPC", value: "$10-50", color: "#fb7185" },
            { label: "Conv. Rate Goal", value: "8-15%", color: "#4f8ff7" },
            { label: "ROAS Target", value: "3x+", color: "#fbbf24" },
          ].map((stat, i) => (
            <motion.div key={i} style={{ textAlign: "center" }} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400 }}>
              <div className="stat-value" style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, color: stat.color, marginBottom: 4 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", fontWeight: 500 }}>
            Scroll to explore
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={16} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
