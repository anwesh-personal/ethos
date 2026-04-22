"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Crosshair } from "lucide-react";

const analysisNav = [
  { label: "Funnel", href: "/#funnel" },
  { label: "Trust", href: "/#trust" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "SEO", href: "/#seo" },
  { label: "Design", href: "/#design" },
  { label: "Competition", href: "/#competition" },
  { label: "Takeaways", href: "/#takeaways" },
];

const battleNav = [
  { label: "Ethos Funnel", href: "/battle-plan#ethos-funnel" },
  { label: "Traffic", href: "/battle-plan#traffic" },
  { label: "Ads", href: "/battle-plan#ads" },
  { label: "Landing Pages", href: "/battle-plan#landing" },
  { label: "Economics", href: "/battle-plan#economics" },
  { label: "Roadmap", href: "/battle-plan#roadmap" },
];

const aosNav = [
  { label: "Problem", href: "/affiliateos#problem" },
  { label: "Link Engine", href: "/affiliateos#link-engine" },
  { label: "Page Engine", href: "/affiliateos#page-engine" },
  { label: "Testing", href: "/affiliateos#testing" },
  { label: "Intel", href: "/affiliateos#intel" },
  { label: "Architecture", href: "/affiliateos#architecture" },
  { label: "Roadmap", href: "/affiliateos#roadmap" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isBattlePlan = pathname === "/battle-plan";
  const isAos = pathname === "/affiliateos";

  const navItems = isAos ? aosNav : isBattlePlan ? battleNav : analysisNav;

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
          href="/"
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

          {/* CTA buttons */}
          {!isAos && (
            <motion.a
              href="/affiliateos"
              style={{
                marginLeft: 10,
                padding: "7px 16px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.01em",
                color: "#07080e",
                background: "linear-gradient(135deg, #fb7185, #f43f5e)",
                textDecoration: "none",
                boxShadow: "0 0 16px rgba(251,113,133,0.2), 0 2px 8px rgba(0,0,0,0.3)",
                transition: "box-shadow 0.3s",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(251,113,133,0.35), 0 4px 12px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              🚀 AffiliateOS
            </motion.a>
          )}
          <motion.a
            href={isBattlePlan || isAos ? "/" : "/battle-plan"}
            style={{
              marginLeft: isAos ? 10 : 6,
              padding: "7px 16px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: (isBattlePlan || isAos) ? "#e8ecf4" : "#07080e",
              background: (isBattlePlan || isAos) ? "rgba(79,143,247,0.12)" : "linear-gradient(135deg, #fbbf24, #f59e0b)",
              border: (isBattlePlan || isAos) ? "1px solid rgba(79,143,247,0.25)" : "none",
              textDecoration: "none",
              boxShadow: (isBattlePlan || isAos) ? "none" : "0 0 16px rgba(251,191,36,0.25), 0 2px 8px rgba(0,0,0,0.3)",
              transition: "box-shadow 0.3s",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {(isBattlePlan || isAos) ? "← Home" : "⚡ Battle Plan"}
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
