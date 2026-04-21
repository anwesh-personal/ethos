"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowDown,
} from "lucide-react";

const floatingIcons = [
  { icon: Search, x: "12%", y: "22%", delay: 0, color: "#4f8ff7" },
  { icon: TrendingUp, x: "82%", y: "18%", delay: 0.5, color: "#a78bfa" },
  { icon: Users, x: "72%", y: "68%", delay: 1.0, color: "#22c5d9" },
  { icon: Shield, x: "16%", y: "72%", delay: 1.5, color: "#34d399" },
  { icon: Zap, x: "48%", y: "12%", delay: 0.3, color: "#fbbf24" },
  { icon: Globe, x: "88%", y: "48%", delay: 0.8, color: "#fb7185" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden grid-bg"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 500,
            top: -180,
            left: -180,
            background: "radial-gradient(ellipse, rgba(79,143,247,0.06), transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: -80,
            right: -80,
            background: "radial-gradient(ellipse, rgba(167,139,250,0.05), transparent 70%)",
          }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: item.delay + 0.8, duration: 0.8, type: "spring" }}
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={28 + i * 3} color={item.color} strokeWidth={1.2} />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center"
        style={{ y, opacity, maxWidth: 800, padding: "0 24px" }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 32 }}
        >
          <span className="tag-pill" style={{ borderColor: "rgba(79,143,247,0.25)" }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4f8ff7",
                display: "inline-block",
              }}
            />
            Interactive Visual Analysis
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            marginBottom: 20,
          }}
        >
          <span className="gradient-text">Term4Sale</span>
          <br />
          <span style={{ color: "rgba(232,236,244,0.9)" }}>Lead Machine</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
        >
          How a no-frills insurance comparison tool generates{" "}
          <span style={{ color: "#e8ecf4", fontWeight: 600 }}>massive organic leads</span>{" "}
          through utility-first design, trust architecture, and a self-reinforcing
          ecosystem—deconstructed visually.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "clamp(24px, 4vw, 48px)",
            marginBottom: 56,
          }}
        >
          {[
            { label: "Insurance Carriers", value: "100+", color: "#4f8ff7" },
            { label: "Years Operating", value: "40+", color: "#a78bfa" },
            { label: "Agents Subscribed", value: "1000s", color: "#22c5d9" },
            { label: "Lead Cost", value: "$0", color: "#34d399" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              style={{ textAlign: "center" }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div
                className="stat-value"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 700,
                  color: stat.color,
                  marginBottom: 4,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              fontWeight: 500,
            }}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
