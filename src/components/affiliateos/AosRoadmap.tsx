"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const phases = [
  {
    phase: "Phase 1", title: "Link Engine MVP", weeks: "Weeks 1-3", color: "#fb7185",
    tasks: [
      "Supabase project + auth + RLS policies",
      "Organization/team data model + CRUD",
      "Link creation UI (slug, destination, cloaking)",
      "Hono redirect worker on VPS (sub-5ms)",
      "GeoIP + device/OS/browser detection",
      "Click logging (async, batched to Supabase)",
      "Bot detection + IAB filtering",
      "Link analytics dashboard",
      "Custom domain setup + DNS verification",
    ],
    ship: "Users can create cloaked tracking links with geo/device routing and see analytics.",
  },
  {
    phase: "Phase 2", title: "Page Engine", weeks: "Weeks 4-7", color: "#4f8ff7",
    tasks: [
      "Block-based page editor (React, JSON schema)",
      "11 core blocks built and tested",
      "Page publish flow → Cloudflare Workers",
      "Custom domain binding for pages",
      "Page cloner — Puppeteer on VPS",
      "Asset extraction + CDN storage",
      "Script stripping pipeline",
      "Mobile preview + responsive output",
      "5 starter templates",
      "Dynamic Text Replacement (UTM-based)",
    ],
    ship: "Users can build pages, clone competitors, publish to custom domains.",
  },
  {
    phase: "Phase 3", title: "Test Engine + Postbacks", weeks: "Weeks 8-10", color: "#34d399",
    tasks: [
      "A/B test creation flow (page variants)",
      "Traffic splitting in redirect engine",
      "Bayesian significance calculator",
      "Auto-winner with confidence threshold",
      "Postback URL handler (network conversions)",
      "S2S pixel firing (Meta CAPI, Google, TikTok)",
      "Revenue attribution pipeline",
      "Link rotation with weighted splits",
      "Test dashboard with winner/loser indicators",
    ],
    ship: "Full A/B testing + conversion tracking + revenue attribution.",
  },
  {
    phase: "Phase 4", title: "Intel Engine", weeks: "Weeks 11-14", color: "#a78bfa",
    tasks: [
      "Heatmap JS collector SDK",
      "Heatmap rendering overlay",
      "Scroll depth visualization",
      "Session recording with rrweb",
      "Session playback UI with speed controls",
      "Rage-click detection",
      "Funnel visualization",
      "Quiz builder (branching + results)",
      "Segmented heatmaps (converter vs bouncer)",
    ],
    ship: "Heatmaps, session replay, funnel analytics, quiz funnels.",
  },
  {
    phase: "Phase 5", title: "Polish + Launch", weeks: "Weeks 15-18", color: "#fbbf24",
    tasks: [
      "Stripe billing (plans + usage metering)",
      "Plan limit enforcement",
      "Onboarding wizard",
      "Safe page routing (compliance detection)",
      "Team management (invite, roles)",
      "Bulk operations (import/export)",
      "Load testing redirect engine",
      "Security audit (RLS verification)",
      "5 more templates (10 total)",
      "Docs + help center",
    ],
    ship: "Production SaaS ready for paying customers.",
  },
];

export default function AosRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Execution Roadmap" subtitle="18 weeks from zero to production SaaS. 5 phases. Each phase ships independently valuable functionality." badge="Build Plan" badgeColor="#fbbf24" number="07">
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {phases.map((p, i) => (
          <AnimatedSection key={p.phase} delay={i * 0.06}>
            <div className="glass-card" style={{ padding: "clamp(20px, 3vw, 28px)", borderColor: `${p.color}0c` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, padding: "5px 10px", borderRadius: 6, background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20`, whiteSpace: "nowrap" as const }}>{p.weeks}</div>
                <div>
                  <span style={{ fontSize: 10, fontWeight: 600, color: p.color, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.phase}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "rgba(232,236,244,0.88)" }}>{p.title}</h3>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 6, marginBottom: 14 }}>
                {p.tasks.map((task, ti) => (
                  <motion.div key={ti} initial={{ opacity: 0, x: -4 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + ti * 0.03 + i * 0.04 }}
                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 4 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 3, border: `1.5px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <div style={{ width: 5, height: 5, borderRadius: 2, background: `${p.color}40` }} />
                    </div>
                    <span style={{ fontSize: 11, color: "rgba(232,236,244,0.65)", lineHeight: 1.4 }}>{task}</span>
                  </motion.div>
                ))}
              </div>

              <div style={{ padding: "10px 14px", borderRadius: 6, background: `${p.color}06`, border: `1px solid ${p.color}14` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Sparkles size={10} color={p.color} />
                  <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: p.color }}>Ships</span>
                  <span style={{ fontSize: 11, color: "rgba(232,236,244,0.55)", marginLeft: 4 }}>{p.ship}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionHeader>
  );
}
