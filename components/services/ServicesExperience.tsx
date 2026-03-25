"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ServiceHero from "./ServiceHero";
import ServiceUniverse from "./ServiceUniverse";
import ServiceDetailPanel from "./ServiceDetailPanel";
import ServiceCTA from "./ServiceCTA";

// Visual transition divider between sections
function SectionDivider({ color = "#C9A84C", text }: { color?: string; text?: string }) {
  return (
    <div className="relative py-4 overflow-hidden">
      {/* Animated gradient line */}
      <motion.div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color}40 50%, transparent 100%)`,
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      {text && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-[family-name:var(--font-syne)] text-[9px] tracking-[0.5em] text-muted/40 uppercase">
            {text}
          </span>
        </motion.div>
      )}
    </div>
  );
}

export default function ServicesExperience() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const universeRef = useRef<HTMLDivElement>(null);

  const handleExplore = useCallback(() => {
    universeRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleServiceClick = useCallback((id: string) => {
    setActiveService(id);
  }, []);

  const handleClosePanel = useCallback(() => {
    setActiveService(null);
  }, []);

  return (
    <div className="relative bg-bg">
      {/* Section 1: Immersive Hero */}
      <ServiceHero onExplore={handleExplore} />


      {/* Section 2: 3D Service Universe */}
      <div ref={universeRef}>
        <ServiceUniverse
          activeService={activeService}
          onServiceClick={handleServiceClick}
        />
      </div>

      {/* Section 3: Detail Panel Overlay */}
      <ServiceDetailPanel
        activeService={activeService}
        onClose={handleClosePanel}
      />


      {/* Section 4: Conversion CTA */}
      <ServiceCTA />
    </div>
  );
}
