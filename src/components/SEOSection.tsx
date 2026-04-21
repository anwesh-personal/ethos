"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, FileText, Gauge, Clock, ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const seoFactors = [
  {
    category: "Domain Authority",
    icon: TrendingUp,
    color: "#4f8ff7",
    score: 97,
    factors: [
      { name: "Domain Age", value: "40+ years", detail: "One of the oldest insurance comparison domains. Google heavily rewards domain longevity in YMYL (Your Money Your Life) categories.", rating: 5 },
      { name: "Backlink Profile", value: "10,000+", detail: "Organic editorial links from financial publications, academic papers, consumer advocacy sites, and bestselling books. No link buying needed.", rating: 5 },
      { name: "Brand Searches", value: "High Volume", detail: "People search for 'Term4Sale' directly — a Google signal that the brand IS the category. Branded search is one of the strongest ranking signals.", rating: 5 },
      { name: "E-E-A-T Score", value: "Exceptional", detail: "Experience, Expertise, Authoritativeness, Trustworthiness — Term4Sale hits all four in Google's quality rater guidelines for financial content.", rating: 5 },
    ],
  },
  {
    category: "Content Strategy",
    icon: FileText,
    color: "#a78bfa",
    score: 82,
    factors: [
      { name: "Keyword Focus", value: "Bottom-Funnel", detail: "Targets transactional queries ('compare term life insurance', 'cheapest term life rates') where user intent = ready to act. Highest-value keyword tier.", rating: 5 },
      { name: "Content Depth", value: "Moderate", detail: "News & Reviews section covers insurance education. Not a content marketing powerhouse, but sufficient for E-E-A-T signals.", rating: 3 },
      { name: "Tool-as-Content", value: "Innovative", detail: "The comparison tool itself IS content. It generates unique, dynamic, personalized pages for every query — essentially infinite content at zero cost.", rating: 5 },
      { name: "Freshness", value: "Database-Driven", detail: "Rate data is continuously updated via Compulife database feeds. Google sees fresh data on every crawl without manual content updates.", rating: 4 },
    ],
  },
  {
    category: "Technical SEO",
    icon: Gauge,
    color: "#22c5d9",
    score: 68,
    factors: [
      { name: "Page Speed", value: "Fast", detail: "Minimal CSS, no heavy frameworks, no JS-heavy animations. The pages load fast because there's nothing extra to load. Brutally efficient.", rating: 4 },
      { name: "Mobile Experience", value: "Functional", detail: "Responsive but not optimized for mobile-first UX. The form works on mobile but isn't designed with thumb-first interaction in mind.", rating: 3 },
      { name: "Structured Data", value: "Minimal", detail: "Limited use of structured data markup. Opportunity missed for rich snippets in insurance-related SERPs.", rating: 2 },
      { name: "Core Web Vitals", value: "Good", detail: "Simple HTML pages naturally perform well on CWV metrics. LCP, FID, CLS all within green thresholds due to lightweight design.", rating: 4 },
    ],
  },
  {
    category: "Competitive Moat",
    icon: Clock,
    color: "#34d399",
    score: 95,
    factors: [
      { name: "Replicability", value: "Near Impossible", detail: "You can copy the design in a week. You cannot replicate 40 years of domain authority, institutional trust, and 10,000+ organic backlinks.", rating: 5 },
      { name: "Data Advantage", value: "Proprietary", detail: "Compulife's rate database is proprietary, maintained by industry relationships spanning decades. No startup can access this overnight.", rating: 5 },
      { name: "Network Effects", value: "Strong", detail: "More agents → more coverage → more leads → more agents. The flywheel creates an accelerating competitive advantage.", rating: 5 },
      { name: "Switching Cost", value: "High", detail: "Agents who subscribe to Compulife get Term4Sale leads as a bonus. Switching means losing both the software AND the leads.", rating: 4 },
    ],
  },
];

export default function SEOSection() {
  const [expandedCategory, setExpandedCategory] = useState<string>("Domain Authority");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader
      title="SEO & Traffic Anatomy"
      subtitle="Term4Sale doesn't do SEO — SEO serves Term4Sale. When you've been the definitive utility for 40 years, Google rewards you accordingly."
      badge="Organic Growth"
      badgeColor="#fbbf24"
      number="04"
    >
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {seoFactors.map((category, ci) => {
          const Icon = category.icon;
          const isExpanded = expandedCategory === category.category;

          return (
            <AnimatedSection key={category.category} delay={ci * 0.08}>
              <div
                className="glass-card"
                style={{
                  overflow: "hidden",
                  borderColor: isExpanded ? `${category.color}18` : "var(--border-subtle)",
                  transition: "border-color 0.3s",
                }}
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedCategory(isExpanded ? "" : category.category)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "18px 22px",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "inherit",
                    font: "inherit",
                    transition: "background 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "var(--radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: `${category.color}0e`,
                      border: `1px solid ${category.color}20`,
                    }}
                  >
                    <Icon size={16} color={category.color} />
                  </div>

                  <span style={{ flex: 1, textAlign: "left", fontWeight: 600, fontSize: 14, color: "rgba(232,236,244,0.88)" }}>
                    {category.category}
                  </span>

                  {/* Score */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <div className="hidden sm:block" style={{ width: 100, height: 4, borderRadius: 4, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
                      <motion.div
                        style={{ height: "100%", borderRadius: 4, background: category.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${category.score}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 + ci * 0.12 }}
                      />
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 17, fontWeight: 700, color: category.color, minWidth: 28 }}>
                      {category.score}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} color="var(--text-muted)" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 22px 22px",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: 12,
                    }}
                  >
                    {category.factors.map((factor, fi) => (
                      <motion.div
                        key={fi}
                        initial={{ opacity: 0, y: 8 }}
                        animate={isExpanded ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: fi * 0.06 }}
                        style={{
                          padding: "16px 18px",
                          borderRadius: "var(--radius-xs)",
                          background: "rgba(255,255,255,0.015)",
                          transition: "background 0.2s",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                          <span style={{ fontWeight: 600, fontSize: 13, color: "rgba(232,236,244,0.82)" }}>
                            {factor.name}
                          </span>
                          <span
                            style={{
                              fontSize: 11,
                              fontFamily: "var(--font-mono)",
                              fontWeight: 600,
                              padding: "2px 8px",
                              borderRadius: 5,
                              background: `${category.color}0e`,
                              color: category.color,
                            }}
                          >
                            {factor.value}
                          </span>
                        </div>

                        {/* Star rating */}
                        <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              style={{
                                width: 10,
                                height: 10,
                                borderRadius: 2,
                                background: star <= factor.rating ? category.color : "rgba(255,255,255,0.05)",
                              }}
                            />
                          ))}
                        </div>

                        <p style={{ fontSize: 12, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                          {factor.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionHeader>
  );
}
