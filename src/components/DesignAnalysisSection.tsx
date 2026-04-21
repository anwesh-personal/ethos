"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormInput, Table, Palette, Layers, Check, AlertTriangle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const designElements = [
  {
    category: "Form Design",
    icon: FormInput,
    color: "#4f8ff7",
    verdict: "Genius in Simplicity",
    score: "A+",
    analysis: [
      { point: "5-field single-page form", type: "strength" as const, detail: "Gender, DOB, State, Health Class, Coverage Amount. That's it. No multi-step wizard, no progress bars, no 'what's your email?' gates." },
      { point: "No registration wall", type: "strength" as const, detail: "Zero friction to value. User goes from landing → results in under 30 seconds. Average insurance site: 3-5 minutes of form filling." },
      { point: "Health class selector", type: "strength" as const, detail: "Instead of medical questionnaires, a simple dropdown (Average/Above Average/Excellent/Exceptional). Reduces cognitive load by 90%." },
      { point: "No visual polish on form fields", type: "weakness" as const, detail: "Default browser form styles. Could increase engagement with custom-styled inputs, better visual hierarchy, and animated transitions." },
    ],
  },
  {
    category: "Results Display",
    icon: Table,
    color: "#a78bfa",
    verdict: "Data-Dense & Functional",
    score: "A",
    analysis: [
      { point: "Sortable comparison tables", type: "strength" as const, detail: "100+ carrier results in a clean table with monthly/annual premiums, carrier names, and ratings. Users can sort by any column." },
      { point: "Immediate value delivery", type: "strength" as const, detail: "Results appear instantly — no 'processing...' screens, no 'we'll email your quotes'. The value is IMMEDIATE and REAL." },
      { point: "Select and Continue flow", type: "strength" as const, detail: "After seeing all quotes freely, users CHOOSE to click 'Select and Continue' to see agents. Contact info requested only at this point." },
      { point: "Dense table formatting", type: "weakness" as const, detail: "On mobile, the data tables are hard to parse. Modern card-based layouts would improve mobile scannability significantly." },
    ],
  },
  {
    category: "Visual Design",
    icon: Palette,
    color: "#22c5d9",
    verdict: "Intentionally Utilitarian",
    score: "C+",
    analysis: [
      { point: "No visual noise", type: "strength" as const, detail: "No stock photos, no hero banners, no testimonial carousels. Every pixel serves the comparison tool. This IS a strategic choice." },
      { point: "Trust-first aesthetic", type: "strength" as const, detail: "The 'boring' design signals 'we're a serious tool, not a marketing gimmick'. In insurance, boring = trustworthy." },
      { point: "Dated visual language", type: "weakness" as const, detail: "Default fonts, no spacing refinement, generic layout. A modern redesign could preserve utility while dramatically improving perceived authority." },
      { point: "No brand consistency suite", type: "weakness" as const, detail: "Inconsistent heading sizes, spacing, and color usage across pages. A design system would elevate the overall experience." },
    ],
  },
  {
    category: "Page Architecture",
    icon: Layers,
    color: "#34d399",
    verdict: "Conversion-Optimized Structure",
    score: "A-",
    analysis: [
      { point: "Tool-first homepage", type: "strength" as const, detail: "The comparison tool IS the homepage. No hero section with 'Learn More'. User lands → Tool is right there. Minimum distance to value." },
      { point: "Clear information hierarchy", type: "strength" as const, detail: "Quote form → Results → Agent Selection → Contact. Each step is a natural progression with zero confusion about what to do next." },
      { point: "Educational content sections", type: "strength" as const, detail: "News, Reviews, About pages provide SEO content and trust signals without interfering with the primary conversion path." },
      { point: "Limited navigation depth", type: "weakness" as const, detail: "Secondary pages could be better organized. Information architecture for non-tool pages feels like an afterthought." },
    ],
  },
];

export default function DesignAnalysisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader
      title="UX & Design Autopsy"
      subtitle="Don't mistake 'ugly' for 'bad'. Every design decision on Term4Sale is a deliberate conversion optimization — and the numbers prove it."
      badge="Design Analysis"
      badgeColor="#fb7185"
      number="05"
    >
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {designElements.map((el, i) => {
          const Icon = el.icon;
          return (
            <AnimatedSection key={el.category} delay={i * 0.08}>
              <motion.div
                className="glass-card"
                style={{ padding: "24px 26px", height: "100%" }}
                whileHover={{ borderColor: `${el.color}25` }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "var(--radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `${el.color}0e`,
                        border: `1px solid ${el.color}20`,
                      }}
                    >
                      <Icon size={16} color={el.color} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: 14, color: "rgba(232,236,244,0.88)" }}>
                        {el.category}
                      </h3>
                      <p style={{ fontSize: 11, color: el.color, marginTop: 2 }}>
                        {el.verdict}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      fontFamily: "var(--font-mono)",
                      color: el.color,
                      lineHeight: 1,
                    }}
                  >
                    {el.score}
                  </div>
                </div>

                {/* Analysis points */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {el.analysis.map((point, pi) => (
                    <motion.div
                      key={pi}
                      initial={{ opacity: 0, x: -8 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + pi * 0.06 + i * 0.08 }}
                      style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                          background: point.type === "strength" ? "rgba(52,211,153,0.1)" : "rgba(251,191,36,0.1)",
                          border: `1px solid ${point.type === "strength" ? "rgba(52,211,153,0.22)" : "rgba(251,191,36,0.22)"}`,
                        }}
                      >
                        {point.type === "strength" ? (
                          <Check size={10} color="#34d399" />
                        ) : (
                          <AlertTriangle size={9} color="#fbbf24" />
                        )}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 12, color: "rgba(232,236,244,0.82)", marginBottom: 3 }}>
                          {point.point}
                        </div>
                        <p style={{ fontSize: 11, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                          {point.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionHeader>
  );
}
