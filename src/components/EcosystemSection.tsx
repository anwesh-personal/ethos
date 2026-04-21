"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Database,
  Users,
  RefreshCw,
  ArrowRight,
  Cpu,
  DollarSign,
  Target,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const flows = [
  { from: "Consumer", to: "Term4Sale", label: "Searches for quotes", color: "#4f8ff7", icon: Globe },
  { from: "Term4Sale", to: "Consumer", label: "Delivers instant value (100+ quotes)", color: "#a78bfa", icon: Database },
  { from: "Consumer", to: "Agents", label: "Chooses to connect (≤3 agents)", color: "#34d399", icon: Target },
  { from: "Agents", to: "Compulife", label: "Subscribe for software + listings", color: "#22c5d9", icon: DollarSign },
  { from: "Compulife", to: "Term4Sale", label: "Powers comparison database", color: "#a78bfa", icon: Cpu },
  { from: "Agents", to: "Term4Sale", label: "Refer out-of-state traffic → earn more listings", color: "#fbbf24", icon: RefreshCw },
];

const virtuesData = [
  {
    icon: Globe,
    title: "Consumer Magnet",
    color: "#4f8ff7",
    description: "Free, unbiased quotes attract high-intent consumers organically. No ad spend, no content marketing hustle.",
  },
  {
    icon: DollarSign,
    title: "Revenue Engine",
    color: "#34d399",
    description: "Revenue comes from agent subscriptions to Compulife software — not from selling consumer data or taking carrier commissions.",
  },
  {
    icon: RefreshCw,
    title: "Network Effect",
    color: "#a78bfa",
    description: "More agents subscribe → more zip codes covered → more leads routed → more agents subscribe. The flywheel spins itself.",
  },
  {
    icon: Target,
    title: "Lead Exchange",
    color: "#fbbf24",
    description: "Agents who refer out-of-state traffic to Term4Sale earn additional free zip code listings. Growth incentive built into the product.",
  },
];

export default function EcosystemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionHeader
      title="The Ecosystem Flywheel"
      subtitle="Term4Sale doesn't just generate leads — it operates a self-reinforcing ecosystem where every participant benefits, creating compounding growth."
      badge="Business Model"
      badgeColor="#22c5d9"
      number="03"
    >
      <div ref={ref}>
        {/* Flow diagram */}
        <AnimatedSection style={{ marginBottom: 40 }}>
          <div
            className="glass-card"
            style={{ padding: "clamp(24px, 3vw, 36px)" }}
          >
            <h3
              style={{
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: 24,
              }}
            >
              Value Flow Map
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {flows.map((flow, i) => {
                const Icon = flow.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.08 + i * 0.08, duration: 0.45 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      borderRadius: "var(--radius-xs)",
                      transition: "background 0.2s",
                    }}
                    className="group"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.015)" }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "var(--radius-xs)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: `${flow.color}0e`,
                        border: `1px solid ${flow.color}20`,
                      }}
                    >
                      <Icon size={14} color={flow.color} />
                    </div>

                    {/* From */}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 600,
                        flexShrink: 0,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.03)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {flow.from}
                    </span>

                    {/* Arrow */}
                    <motion.div
                      style={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                    >
                      <div style={{ width: 24, height: 1, background: `${flow.color}35` }} />
                      <ArrowRight size={12} color={flow.color} />
                    </motion.div>

                    {/* To */}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 600,
                        flexShrink: 0,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.03)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {flow.to}
                    </span>

                    {/* Label */}
                    <span
                      className="hidden md:block"
                      style={{ fontSize: 13, color: "rgba(232,236,244,0.5)", marginLeft: "auto" }}
                    >
                      {flow.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Virtuous cycle cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
          }}
        >
          {virtuesData.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="glass-card"
                  style={{
                    padding: "24px",
                    height: "100%",
                  }}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "var(--radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                      background: `${item.color}0c`,
                      border: `1px solid ${item.color}20`,
                      transition: "transform 0.3s",
                    }}
                  >
                    <Icon size={18} color={item.color} />
                  </div>
                  <h4 style={{ fontWeight: 600, fontSize: 14, color: "rgba(232,236,244,0.88)", marginBottom: 8 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </SectionHeader>
  );
}
