"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";

export default function SolutionsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
    >
      {/* Background Matrix / Grid lines */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E1E1E 1px, transparent 1px),
            linear-gradient(to bottom, #1E1E1E 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-gold/50" />
          <span className="font-[family-name:var(--font-syne)] text-xs tracking-[0.4em] text-gold uppercase">Engineered Intelligence</span>
          <span className="w-8 h-px bg-gold/50" />
        </motion.div>

        {/* Hero Title */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-syne)] text-massive uppercase font-black text-text leading-[0.9] tracking-tighter"
          >
            Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#C9A84C]">At Scale.</span>
          </motion.h1>
        </div>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 max-w-2xl mx-auto font-[family-name:var(--font-syne)] text-lg md:text-xl text-muted/80"
        >
          We architect intelligent data pipelines, AI automation agents, and zero-downtime infrastructure that gives your business an unfair competitive edge.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownRight size={24} className="text-muted" />
        </motion.div>
        <span className="font-[family-name:var(--font-syne)] text-[9px] uppercase tracking-[0.3em] text-muted">Scroll to Decode</span>
      </motion.div>
    </section>
  );
}
