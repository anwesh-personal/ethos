"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Copy, Palette, FileQuestion, ChevronRight, Sparkles, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const builderBlocks = [
  "Hero (headline + sub + CTA)", "Text (WYSIWYG)", "Image / Video", "CTA Button (Link Engine wired)",
  "Testimonial Carousel", "Comparison Table", "FAQ Accordion", "Countdown Timer",
  "Form / Lead Capture", "Quiz Block", "Custom HTML/CSS/JS",
];

const clonerSteps = [
  { step: "Paste URL", desc: "Drop any competitor page URL into the cloner" },
  { step: "Scrape & Extract", desc: "Puppeteer captures HTML, CSS, images, fonts" },
  { step: "Strip Scripts", desc: "Auto-remove tracking codes, analytics, third-party scripts" },
  { step: "Import to Builder", desc: "Cloned page becomes editable blocks + custom code" },
  { step: "Customize & Publish", desc: "Swap copy, add your tracking links, publish to your domain" },
];

const templates = [
  { cat: "Insurance", items: ["Pre-lander", "Quiz funnel", "Comparison", "Review"], color: "#fb7185" },
  { cat: "Finance", items: ["Credit card", "Loan", "Investing pre-lander"], color: "#fbbf24" },
  { cat: "Health", items: ["Supplement review", "Fitness quiz"], color: "#34d399" },
  { cat: "E-commerce", items: ["Product review", "Comparison table", "Countdown"], color: "#4f8ff7" },
  { cat: "Lead Gen", items: ["Generic quiz", "Survey", "Calculator"], color: "#a78bfa" },
  { cat: "Advertorial", items: ["News-style", "Blog-style", "Native ad"], color: "#22c5d9" },
];

export default function AosPageEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader title="Page Engine" subtitle="Build from scratch, clone any page on the internet, or start from battle-tested templates. Mobile-first, fast, affiliate-optimized." badge="Core Module #2" badgeColor="#4f8ff7" number="03">
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Builder blocks */}
        <AnimatedSection>
          <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 30px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Layout size={15} color="#4f8ff7" />
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>Block-Based Builder</h3>
              <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, background: "rgba(79,143,247,0.08)", color: "#4f8ff7", fontWeight: 600 }}>11 BLOCKS</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {builderBlocks.map((b, i) => (
                <motion.div key={b} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.1 + i * 0.03 }}
                  style={{ padding: "7px 14px", borderRadius: 6, fontSize: 11, fontWeight: 500, background: "rgba(79,143,247,0.04)", border: "1px solid rgba(79,143,247,0.1)", color: "rgba(232,236,244,0.7)" }}>
                  {b}
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16 }}>
              {["Mobile preview toggle", "Dynamic Text Replacement (UTM)", "Global styles system", "One-click publish", "Version history + rollback", "Custom meta/favicon/tracking"].map((f, i) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Check size={10} color="#34d399" />
                  <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Page Cloner */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 30px)", borderColor: "rgba(251,191,36,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Copy size={15} color="#fbbf24" />
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>Page Cloner</h3>
              <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, background: "rgba(251,191,36,0.08)", color: "#fbbf24", fontWeight: 600 }}>KILLER FEATURE</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {clonerSteps.map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, x: -8 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.06 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 8, background: "rgba(255,255,255,0.015)" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.18)", fontSize: 12, fontWeight: 800, fontFamily: "var(--font-mono)", color: "#fbbf24", flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 13, color: "#fbbf24" }}>{s.step}</span>
                    <span style={{ fontSize: 12, color: "var(--text-secondary)", marginLeft: 8 }}>— {s.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Template Library */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card" style={{ padding: "clamp(22px, 3vw, 30px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Palette size={15} color="#a78bfa" />
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "rgba(232,236,244,0.88)" }}>Template Library</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
              {templates.map((t, i) => (
                <motion.div key={t.cat} initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 + i * 0.05 }}
                  style={{ padding: "14px 16px", borderRadius: 8, background: `${t.color}04`, border: `1px solid ${t.color}10` }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: t.color, marginBottom: 8 }}>{t.cat}</div>
                  {t.items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <ChevronRight size={10} color={t.color} />
                      <span style={{ fontSize: 11, color: "rgba(232,236,244,0.6)" }}>{item}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionHeader>
  );
}
