"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import SolutionsHero from "./SolutionsHero";
import SolutionsGrid from "./SolutionsGrid";

export default function SolutionsExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-bg text-text min-h-screen relative" ref={containerRef}>
      <SolutionsHero />
      {/* Inline divider */}
      <div className="relative py-4 overflow-hidden">
        <motion.div
          className="h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent 0%, #818CF840 50%, transparent 100%)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-[family-name:var(--font-syne)] text-[9px] tracking-[0.5em] text-muted/40 uppercase">
            Intelligent Systems
          </span>
        </motion.div>
      </div>
      <SolutionsGrid />
    </div>
  );
}
