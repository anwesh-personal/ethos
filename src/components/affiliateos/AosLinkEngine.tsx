"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link2, Shield, Globe, Bot, Radio, BarChart3, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const subModules = [
  {
    id: "shortener", icon: Link2, title: "URL Shortener", color: "#fb7185",
    features: ["Custom domains (trk.yourbrand.com/go/offer-a)", "Custom slugs or auto-generated short codes", "Bulk link creation via CSV import", "Link grouping by campaign/offer/network", "QR code generation for offline-to-online"],
  },
  {
    id: "cloaking", icon: Shield, title: "Link Cloaking", color: "#fbbf24",
    features: ["Full URL masking — destination never visible", "Referrer stripping — networks can't see your pre-lander", "Meta tag spoofing — custom OG previews for social", "Redirect types: 301, 302, 307, meta refresh, JS, double-meta", "iframe cloaking — your domain stays in address bar"],
  },
  {
    id: "routing", icon: Globe, title: "Smart Routing", color: "#4f8ff7",
    features: ["Geo-targeting by country/state/city (MaxMind GeoIP2)", "Device routing — mobile vs desktop vs tablet", "OS/browser detection — serve different destinations", "Day-parting — different URLs at different times", "Weighted rotation — 50/30/20 traffic splits", "Frequency capping — limit per unique user", "Fallback URLs — auto-failover if destination down"],
  },
  {
    id: "bot", icon: Bot, title: "Bot & Fraud Filtering", color: "#34d399",
    features: ["Bot detection — IAB list + behavioral heuristics", "VPN/proxy/datacenter traffic detection", "Click fraud detection — rapid-fire pattern matching", "Safe page routing — clean page for bots, real page for humans", "User-agent allow/block lists", "IP blacklisting and whitelisting (auto + manual)"],
  },
  {
    id: "pixel", icon: Radio, title: "Pixel & Postback", color: "#a78bfa",
    features: ["Server-side pixel firing (Meta CAPI, Google, TikTok)", "Postback URLs — receive conversions from networks", "Sub-ID passthrough — match clicks to conversions", "Multi-pixel support — retargeting + conversion simultaneously", "Custom webhooks — POST data to any endpoint", "S2S tracking — zero client-side dependency"],
  },
  {
    id: "analytics", icon: BarChart3, title: "Per-Link Analytics", color: "#22c5d9",
    features: ["Real-time click counter", "Unique vs repeat visitor breakdown", "Geographic distribution heatmap", "Device/OS/browser breakdown", "Referrer analysis", "Conversion rate + revenue tracking", "Time-series graphs (hourly/daily/weekly)"],
  },
];

export default function AosLinkEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState("shortener");

  const activeModule = subModules.find(m => m.id === active)!;

  return (
    <SectionHeader title="Link Engine" subtitle="The backbone. URL shortener + tracker + cloaker + rotator + geo/device router + bot filter + pixel firing. All in one." badge="Core Module #1" badgeColor="#fb7185" number="02">
      <div ref={ref}>
        {/* Tab selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {subModules.map((m, i) => {
            const Icon = m.icon;
            const isActive = m.id === active;
            return (
              <motion.button key={m.id} onClick={() => setActive(m.id)}
                initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.04 }}
                whileHover={{ y: -1 }}
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, border: `1px solid ${isActive ? m.color + "30" : "rgba(255,255,255,0.04)"}`, background: isActive ? m.color + "0c" : "rgba(255,255,255,0.015)", cursor: "pointer", transition: "all 0.2s" }}>
                <Icon size={12} color={isActive ? m.color : "var(--text-muted)"} />
                <span style={{ fontSize: 11, fontWeight: isActive ? 700 : 500, color: isActive ? m.color : "var(--text-muted)" }}>{m.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active module detail */}
        <AnimatedSection key={active}>
          <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 32px)", borderColor: `${activeModule.color}0c` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", background: `${activeModule.color}0e`, border: `1px solid ${activeModule.color}20` }}>
                <activeModule.icon size={17} color={activeModule.color} />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "rgba(232,236,244,0.88)" }}>{activeModule.title}</h3>
                <p style={{ fontSize: 11, color: activeModule.color, marginTop: 2 }}>Link Engine sub-module</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 8 }}>
              {activeModule.features.map((f, fi) => (
                <motion.div key={fi} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + fi * 0.04 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", borderRadius: 6, background: "rgba(255,255,255,0.01)" }}>
                  <ChevronRight size={12} color={activeModule.color} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "rgba(232,236,244,0.72)", lineHeight: 1.5 }}>{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Visual: Link flow */}
        <AnimatedSection delay={0.1} style={{ marginTop: 16 }}>
          <div className="glass-card" style={{ padding: "20px 24px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 14 }}>Link Flow</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              {["User Clicks Ad", "→", "Tracking Link", "→", "Bot Check", "→", "Geo/Device Route", "→", "Cloaked Redirect", "→", "Offer Page", "→", "Postback Fires"].map((step, i) => (
                <motion.span key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 + i * 0.05 }}
                  style={{ fontSize: step === "→" ? 14 : 11, padding: step === "→" ? "0" : "6px 12px", borderRadius: step === "→" ? 0 : 6, background: step === "→" ? "transparent" : "rgba(251,113,133,0.06)", border: step === "→" ? "none" : "1px solid rgba(251,113,133,0.12)", color: step === "→" ? "var(--text-muted)" : "#fb7185", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                  {step}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionHeader>
  );
}
