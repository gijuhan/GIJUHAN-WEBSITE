"use client";

import { useRef } from "react";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import { PHILOSOPHY } from "@/lib/constants";
import ContactCTA from "@/components/home/ContactCTA";
import { useScroll, useTransform, motion } from "framer-motion";

export default function AboutClient() {
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
                  Founded with the belief that the best digital experiences come from the intersection of technical excellence and creative strategy, GIJUHAN was built to do more than make brands look modern.
                </p>
                <p>
                  Based in Delhi, India and serving clients globally, we reject the bloated, corporate approach to digital execution. Instead, we draw from Japanese design philosophy: simplicity that sharpens focus, continuous improvement that compounds results, and purposeful execution that keeps every decision tied to business impact.
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

      <section className="relative z-10 border-y border-border bg-surface py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="section-label mb-6 block">Mission</span>
              <h2 className="font-[family-name:var(--font-shippori)] text-4xl font-bold text-text md:text-5xl">
                Why we exist
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-8">
              <p>
                Our mission is to help ambitious businesses use design, development, AI, and marketing as one connected growth system instead of four disconnected vendors. We believe digital work should create leverage, not noise.
              </p>
              <p>
                Every GIJUHAN engagement is designed to simplify the path from idea to execution. That means sharper user journeys, faster websites, clearer messaging, and automation that removes operational drag rather than adding more software for your team to manage.
              </p>
              <p>
                We work from Delhi with a global mindset, pairing local market understanding with production standards expected by modern startups, D2C brands, and growing companies everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-bg py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="section-label mb-6 block">Why GIJUHAN</span>
              <h2 className="font-[family-name:var(--font-shippori)] text-4xl font-bold text-text md:text-6xl">
                The name is the model
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
              <p>
                The name GIJUHAN comes from two core disciplines that shape every engagement: <span className="text-text">Giju</span>, representing technology, and <span className="text-text">Han</span>, representing marketing. We chose that structure deliberately because the strongest digital outcomes never come from code or campaigns in isolation.
              </p>
              <p>
                When engineering decisions understand acquisition, retention, and conversion, products become easier to use and easier to grow. When marketing understands platform constraints, performance budgets, and analytics architecture, campaigns stop overpromising and start compounding. GIJUHAN exists in that overlap.
              </p>
              <p>
                The result is an agency model built for clarity. We can shape the brand, design the experience, build the system, and scale the traffic with one point of view instead of forcing clients to translate between disconnected teams.
              </p>
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
