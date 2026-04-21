"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Crosshair } from "lucide-react";

const navItems = [
  { label: "Funnel", href: "#funnel" },
  { label: "Trust", href: "#trust" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "SEO", href: "#seo" },
  { label: "Design", href: "#design" },
  { label: "Competition", href: "#competition" },
  { label: "Takeaways", href: "#takeaways" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(7, 8, 14, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(232,236,244,0.88)",
            fontWeight: 700,
            fontSize: 14,
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <Crosshair size={16} color="#4f8ff7" />
          <span>
            T4S <span style={{ color: "rgba(232,236,244,0.25)", fontWeight: 400 }}>Analysis</span>
          </span>
        </motion.a>

        {/* Nav links */}
        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 500,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
              }}
              whileHover={{
                color: "var(--text-primary)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {item.label}
            </motion.a>
          ))}

          {/* Battle Plan CTA */}
          <motion.a
            href="/battle-plan"
            style={{
              marginLeft: 10,
              padding: "7px 16px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: "#07080e",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              textDecoration: "none",
              boxShadow: "0 0 16px rgba(251,191,36,0.25), 0 2px 8px rgba(0,0,0,0.3)",
              transition: "box-shadow 0.3s, transform 0.2s",
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 24px rgba(251,191,36,0.4), 0 4px 12px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            ⚡ Battle Plan
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
