"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, MousePointer, ScrollText, Video, TrendingDown, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    icon: MousePointer, title: "Heatmaps", color: "#a78bfa",
    features: ["Click heatmaps overlaid on actual page screenshots", "Move maps — mouse movement tracking", "Segmented by source, device, converter vs bouncer"],
  },
  {
    icon: ScrollText, title: "Scroll Maps", color: "#4f8ff7",
    features: ["Gradient overlay showing exact scroll drop-off", "See where users stop reading", "Compare scroll depth: converting vs non-converting traffic"],
  },
  {
    icon: Video, title: "Session Replay", color: "#34d399",
    features: ["Record individual user sessions (rrweb)", "Playback with speed controls (1x, 2x, 4x)", "Tag by outcome: converted / bounced / abandoned", "Rage-click detection highlights frustration"],
  },
  {
    icon: TrendingDown, title: "Funnel Analytics", color: "#fbbf24",
    features: ["Step-by-step drop-off visualization", "Source A funnel vs Source B funnel comparison", "Time-in-step analysis", "Revenue attribution per funnel step"],
  },
];

const dashboardMetrics = [
  { label: "Live Visitors", value: "247", color: "#34d399" },
  { label: "Clicks Today", value: "3,841", color: "#4f8ff7" },
  { label: "Conversions", value: "89", color: "#fbbf24" },
  { label: "Revenue", value: "$4,270", color: "#fb7185" },
];

export default function AosIntelEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Intel Engine" subtitle="Built-in heatmaps, scroll maps, session replay, and funnel analytics. No Hotjar. No GA4. All first-party, correlated to conversions." badge="Core Module #4" badgeColor="#a78bfa" number="05">
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Dashboard preview */}
        <AnimatedSection>
          <div className="glass-card" style={{ padding: "20px 24px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 14 }}>Real-Time Dashboard Preview</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              {dashboardMetrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.06 }}
                  style={{ textAlign: "center", padding: "16px 10px", borderRadius: 8, background: `${m.color}05`, border: `1px solid ${m.color}10` }}>
                  <div style={{ fontSize: 22, fontWeight: 800, fontFamily: "var(--font-mono)", color: m.color }}>{m.value}</div>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginTop: 4 }}>{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Capability cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimatedSection key={c.title} delay={0.1 + i * 0.06}>
                <div className="glass-card" style={{ padding: "22px", height: "100%", borderColor: `${c.color}08` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: `${c.color}0c`, border: `1px solid ${c.color}1a` }}>
                      <Icon size={14} color={c.color} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 14, color: c.color }}>{c.title}</span>
                  </div>
                  {c.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 6 }}>
                      <ChevronRight size={10} color={c.color} style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: "rgba(232,236,244,0.65)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </SectionHeader>
  );
}
