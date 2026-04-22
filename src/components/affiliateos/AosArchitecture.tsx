"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Cloud, Globe, Shield, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const stack = [
  { layer: "Frontend", tech: "Next.js 16 (App Router)", why: "SSR dashboard, RSC data views", color: "#4f8ff7", icon: Globe },
  { layer: "Backend API", tech: "Next.js Routes + Hono (VPS)", why: "Dashboard API + sub-5ms link redirects", color: "#fb7185", icon: Server },
  { layer: "Database", tech: "Supabase (PostgreSQL)", why: "Auth, RLS multi-tenancy, real-time, storage", color: "#34d399", icon: Database },
  { layer: "Page Hosting", tech: "Cloudflare Workers/Pages", why: "Edge-rendered, <100ms globally", color: "#fbbf24", icon: Cloud },
  { layer: "Page Cloner", tech: "Puppeteer on VPS", why: "Headless Chrome, asset extraction", color: "#a78bfa", icon: Server },
  { layer: "Session Replay", tech: "rrweb (open source)", why: "Industry-standard DOM recording", color: "#22c5d9", icon: Server },
  { layer: "GeoIP", tech: "MaxMind GeoIP2 (VPS)", why: "Country/state/city for routing", color: "#fb7185", icon: Globe },
  { layer: "Payments", tech: "Stripe", why: "Subscriptions + usage billing", color: "#4f8ff7", icon: Shield },
  { layer: "CDN", tech: "Cloudflare", why: "300+ POPs, edge caching", color: "#34d399", icon: Cloud },
];

const tenancy = [
  "Row Level Security (RLS) on ALL tables — zero cross-tenant data leakage",
  "Separate storage buckets per tenant (page assets, cloned pages)",
  "Isolated tracking namespaces per organization",
  "Tenant-level rate limiting and usage metering",
  "Custom domains per tenant (pages + links)",
  "Wildcard subdomain support",
];

export default function AosArchitecture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Architecture" subtitle="Clean-slate build. Supabase handles 80%. VPS handles the hot path. Cloudflare handles the edge." badge="Tech Stack" badgeColor="#22c5d9" number="06">
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Stack table */}
        <AnimatedSection>
          <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 30px)" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 16 }}>Technology Stack</div>
            <div style={{ display: "grid", gap: 6 }}>
              {stack.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.layer} initial={{ opacity: 0, x: -8 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + i * 0.04 }}
                    style={{ display: "grid", gridTemplateColumns: "110px 200px 1fr", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 8, background: "rgba(255,255,255,0.01)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Icon size={12} color={s.color} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: s.color }}>{s.layer}</span>
                    </div>
                    <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", fontWeight: 600, color: "rgba(232,236,244,0.8)" }}>{s.tech}</span>
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.why}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Multi-tenancy */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 30px)", borderColor: "rgba(52,211,153,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Shield size={15} color="#34d399" />
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>Multi-Tenant Isolation</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 8 }}>
              {tenancy.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15 + i * 0.04 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 12px", borderRadius: 6 }}>
                  <ChevronRight size={12} color="#34d399" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "rgba(232,236,244,0.7)", lineHeight: 1.5 }}>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Architecture diagram */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card" style={{ padding: "20px 24px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 14 }}>Data Flow</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              {["User", "→", "Cloudflare CDN", "→", "Next.js Dashboard", "→", "Supabase (Auth + DB)", "↕", "VPS Worker (Redirects + Cloner)", "↕", "Cloudflare Pages (Published Sites)"].map((s, i) => (
                <motion.span key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.25 + i * 0.04 }}
                  style={{ fontSize: "→↕".includes(s) ? 14 : 10, padding: "→↕".includes(s) ? "0" : "5px 10px", borderRadius: "→↕".includes(s) ? 0 : 6, background: "→↕".includes(s) ? "transparent" : "rgba(34,197,217,0.06)", border: "→↕".includes(s) ? "none" : "1px solid rgba(34,197,217,0.12)", color: "→↕".includes(s) ? "var(--text-muted)" : "#22c5d9", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionHeader>
  );
}
