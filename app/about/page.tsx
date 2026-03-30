"use client";

import { useRef } from "react";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import { PHILOSOPHY } from "@/lib/constants";
import ContactCTA from "@/components/home/ContactCTA";
import { useScroll, useTransform, motion } from "framer-motion";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={containerRef}>
      {/* 1. Massive Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden mix-blend-difference z-10">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-24 h-[1px] bg-gold/50"></span>
            </div>
          </FadeIn>

          <StaggeredText
            text={"TECHNOLOGY\nMEETS ARTISTRY"}
            tag="h1"
            className="font-[family-name:var(--font-shippori)] text-massive font-bold text-text leading-[0.85] tracking-tighter"
            staggerDelay={0.08}
            startDelay={0.1}
          />

          <FadeIn delay={0.5}>
            <div className="max-w-2xl border-l-[3px] border-gold pl-8 py-4 mt-12 bg-surface/20 backdrop-blur-sm">
              <p className="text-muted text-xl lg:text-2xl leading-relaxed font-[family-name:var(--font-syne)]">
                GIJUHAN is a fusion of two forces — <span className="text-gold italic font-[family-name:var(--font-shippori)]">Giju</span> (Technology) and <span className="text-gold italic font-[family-name:var(--font-shippori)]">Han</span> (Marketing). We engineer digital experiences driven by deep technical precision and fierce creative ambition.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Deep Structural Timeline (Story) */}
      <section className="py-32 relative z-10 bg-bg/90 backdrop-blur-xl border-t border-border overflow-hidden">
        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
            backgroundSize: "6rem 6rem",
          }}
        />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Text Block */}
            <div className="lg:col-span-5 relative">
              <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 block">
                Origin
              </span>
              <h2 className="font-[family-name:var(--font-shippori)] text-5xl md:text-6xl font-bold text-text mb-8">
                Born from a<br />Vision
              </h2>

              <div className="space-y-6 text-muted text-lg leading-relaxed border-l border-border pl-6">
                <p>
                  Founded with the belief that the best digital experiences come from the intersection of technical excellence and creative strategy, Gijuhan was born to be completely different.
                </p>
                <p>
                  We reject the bloated, corporate approach to engineering. Instead, we draw deep inspiration from Japanese design philosophy—the elegance of simplicity, continuous improvement, and purposeful execution.
                </p>
              </div>
            </div>

            {/* Right Deep Parallax Element */}
            <div className="lg:col-span-7 relative h-[60vh] structural-border p-8 bg-surface/30 mix-blend-screen flex items-center justify-center overflow-hidden">
              <motion.div style={{ y: y1, backgroundImage: "url('/grain.svg')" }} className="absolute inset-0 opacity-10" />

              <motion.div style={{ y: y2 }} className="absolute z-10">
                <span className="font-[family-name:var(--font-shippori)] text-[15rem] md:text-[25rem] text-gold opacity-10 select-none mix-blend-overlay">
                  技
                </span>
              </motion.div>

              <div className="absolute top-8 left-8">
                <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-widest text-muted uppercase">SYS_LOG_01</span>
              </div>
              <div className="absolute bottom-8 right-8">
                <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-widest text-muted uppercase">GIJUHAN_INT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Philosophy Matrix */}
      <section className="py-32 relative z-10 bg-surface border-y border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative">

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <span className="section-label">The Core Code</span>
                <span className="w-16 h-[1px] bg-border"></span>
              </div>
              <h2 className="font-[family-name:var(--font-shippori)] text-5xl md:text-7xl font-bold text-text leading-none">
                Our Principles
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((pillar, index) => (
              <FadeIn key={pillar.romanji} delay={index * 0.15} className="h-full">
                <div className="group h-full bg-bg border border-border p-10 relative overflow-hidden flex flex-col justify-between hover:bg-gold/5 transition-colors duration-700 cursor-none">

                  {/* Background Massive Kanji */}
                  <div className="absolute right-[-20%] top-[-10%] opacity-[0.03] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                    <span className="font-[family-name:var(--font-shippori)] text-[18rem] text-gold select-none leading-none">
                      {pillar.kanji}
                    </span>
                  </div>

                  <div className="relative z-10 mb-20">
                    <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-widest uppercase mb-4 block">
                      Principle 0{index + 1}
                    </span>
                    <h3 className="font-[family-name:var(--font-shippori)] text-4xl lg:text-5xl font-bold text-text mb-2">
                      {pillar.english}
                    </h3>
                    <h4 className="font-[family-name:var(--font-syne)] text-sm tracking-[0.3em] text-muted uppercase">
                      {pillar.romanji}
                    </h4>
                  </div>

                  <div className="relative z-10 border-t border-border/50 pt-6">
                    <p className="text-muted text-base leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Contact Request */}
      <div className="relative z-20">
        <ContactCTA />
      </div>
    </div>
  );
}
