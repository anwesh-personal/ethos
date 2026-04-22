"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Crosshair, Zap, Link2, Layout, FlaskConical, Eye } from "lucide-react";

const stats = [
  { label: "Modules", value: "4", color: "#4f8ff7" },
  { label: "Weeks to MVP", value: "18", color: "#a78bfa" },
  { label: "Tools Replaced", value: "7", color: "#34d399" },
  { label: "Target MRR", value: "$149K", color: "#fbbf24" },
];

const modules = [
  { icon: Link2, label: "Link Engine", color: "#fb7185", desc: "Cloak · Track · Route · Filter" },
  { icon: Layout, label: "Page Engine", color: "#4f8ff7", desc: "Build · Clone · Template · Quiz" },
  { icon: FlaskConical, label: "Test Engine", color: "#34d399", desc: "A/B · Split · Auto-Win · Rules" },
  { icon: Eye, label: "Intel Engine", color: "#a78bfa", desc: "Heatmap · Replay · Funnel · Dashboard" },
];

export default function AosHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} style={{ position: "relative", overflow: "hidden", paddingTop: "clamp(100px, 14vh, 160px)", paddingBottom: "clamp(60px, 8vh, 100px)" }}>
      {/* Background glow */}
      <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "600px", background: "radial-gradient(ellipse, rgba(251,113,133,0.06) 0%, rgba(79,143,247,0.03) 40%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(251,113,133,0.06)", border: "1px solid rgba(251,113,133,0.15)", marginBottom: 24 }}>
          <Crosshair size={12} color="#fb7185" />
          <span style={{ fontSize: 11, fontWeight: 600, color: "#fb7185", letterSpacing: "0.05em" }}>PRODUCT BLUEPRINT</span>
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16, maxWidth: 700 }}>
          <span style={{ background: "linear-gradient(135deg, #fb7185, #fbbf24, #4f8ff7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AffiliateOS</span>
          <br />
          <span style={{ color: "rgba(232,236,244,0.85)" }}>The Weapon System</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
          style={{ fontSize: "clamp(14px, 1.5vw, 17px)", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 560, marginBottom: 40 }}>
          Build pages. Clone competitors. Cloak links. Split-test everything. Track every conversion.
          One platform — zero duct-tape.
        </motion.p>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, maxWidth: 520, marginBottom: 48 }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.06 }}
              style={{ textAlign: "center", padding: "14px 8px", borderRadius: "var(--radius-xs)", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "var(--font-mono)", color: s.color, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Module cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, maxWidth: 900 }}>
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ y: -3, borderColor: `${m.color}30` }}
                style={{ padding: "20px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", cursor: "default", transition: "border-color 0.3s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: `${m.color}0c`, border: `1px solid ${m.color}1a` }}>
                    <Icon size={14} color={m.color} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "rgba(232,236,244,0.88)" }}>{m.label}</span>
                </div>
                <p style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
