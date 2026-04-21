"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor?: string;
  number: string;
  children: ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  badgeColor = "#4f8ff7",
  number,
  children,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className={`relative ${className}`}
      style={{ padding: "var(--space-section) 0" }}
    >
      {/* Section number watermark — pushed to far right, properly contained */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "var(--space-section)",
          right: "clamp(16px, 5vw, 64px)",
          fontSize: "clamp(100px, 14vw, 180px)",
          fontWeight: 800,
          lineHeight: 1,
          color: "rgba(255, 255, 255, 0.02)",
          letterSpacing: "-0.04em",
          fontFamily: "var(--font-mono)",
        }}
      >
        {number}
      </div>

      <div className="section-container relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{ marginBottom: "16px" }}
        >
          <span
            className="tag-pill"
            style={{ borderColor: `${badgeColor}35`, color: badgeColor }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: badgeColor,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          style={{
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "12px",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          style={{
            fontSize: "clamp(14px, 1.8vw, 17px)",
            maxWidth: "600px",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-content)",
          }}
        >
          {subtitle}
        </motion.p>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
