"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { StaggeredText, FadeIn } from "@/components/ui/AnimatedText";

const HeroOrb = dynamic(() => import("@/components/three/HeroOrb"), {
  ssr: false,
});

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax effects for extreme typography
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden px-4 lg:px-8">
      {/* 3D Orb Background - Pushed deeper back and larger to fill the screen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] md:w-[120vw] md:h-[130vh] opacity-[0.9] z-0 pointer-events-auto mix-blend-screen">
        <HeroOrb />
      </div>

      {/* Extreme Typography Layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full structural-grid max-w-[1600px] mx-auto pointer-events-none">
        <div className="col-span-12 flex flex-col gap-2">

          <motion.div style={{ y: y1 }} className="flex flex-wrap justify-between items-end border-b border-border/50 pb-4 mb-4 gap-4">
            <FadeIn>
              <div className="flex items-center gap-4">
                <span className="section-label text-gold font-bold tracking-[0.2em] text-[10px] sm:text-xs">Let's Build</span>
                <span className="w-12 h-[1px] bg-gold/50"></span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <span className="font-[family-name:var(--font-shippori)] text-gold/40 text-2xl md:text-3xl">
                技術販
              </span>
            </FadeIn>
          </motion.div>

          <StaggeredText
            text="TECHNOLOGY"
            tag="h1"
            className="text-massive leading-[0.9] text-text mix-blend-difference relative z-10"
            staggerDelay={0.08}
            startDelay={0.3}
          />

          <motion.div style={{ y: y2 }} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6 lg:mt-2 relative z-20">
            <FadeIn delay={0.6} direction="up" className="md:w-5/12 lg:w-1/3 z-30">
              <p className="font-[family-name:var(--font-syne)] text-sm md:text-base text-text/80 uppercase tracking-[0.15em] leading-[1.8] border-l-2 border-gold pl-6 py-4 bg-bg/60 backdrop-blur-md rounded-r-lg shadow-2xl">
                We build immersive, brand-led digital experiences that wow and work hard. The kind that raises eyebrows and sparks emotion.
              </p>
            </FadeIn>

            <StaggeredText
              text="MARKETING"
              tag="h1"
              className="text-massive leading-[0.9] text-text text-right mix-blend-difference relative z-10"
              staggerDelay={0.08}
              startDelay={0.5}
            />
          </motion.div>

        </div>
      </motion.div>

      {/* Floating Action Elements */}
      <FadeIn delay={1} className="absolute bottom-8 left-4 lg:left-8 z-30">
        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="group flex flex-col items-center justify-center w-24 h-24 rounded-full border border-border bg-surface/50 backdrop-blur-md hover:border-gold hover:bg-gold/10 transition-all duration-500 hover:scale-105 cursor-pointer"
          >
            <ArrowDownRight size={28} className="text-gold group-hover:rotate-45 transition-transform duration-500" />
            <span className="text-[10px] font-[family-name:var(--font-syne)] uppercase tracking-[0.2em] mt-2 group-hover:text-gold transition-colors">
              Scroll
            </span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
