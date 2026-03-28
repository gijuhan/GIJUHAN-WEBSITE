"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";

export default function AboutTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-surface relative overflow-hidden" id="about">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
        
        {/* Asymmetrical grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 relative z-10 order-2 lg:order-1 mt-12 lg:mt-0">
            <FadeIn>
              <span className="section-label font-[family-name:var(--font-syne)] tracking-[0.2em] text-gold uppercase border border-gold/30 px-4 py-1 rounded-full text-[10px]">
                02 — The Laboratory
              </span>
            </FadeIn>
            
            <StaggeredText
              text={"Simplicity.\nImprovement.\nPurpose."}
              tag="h2"
              className="font-[family-name:var(--font-shippori)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-text mt-8 leading-[0.9] tracking-tighter mix-blend-difference"
              staggerDelay={0.15}
              startDelay={0.1}
            />
            
            <motion.div style={{ y: y2 }} className="mt-12 bg-bg/50 backdrop-blur-sm border-l-2 border-accent p-6 max-w-lg">
              <p className="text-text/90 text-lg leading-relaxed font-[family-name:var(--font-syne)]">
                Rooted in <span className="text-gold font-bold">Kanso (簡素)</span>, 
                driven by <span className="text-gold font-bold">Kaizen (改善)</span>, 
                and designed with <span className="text-gold font-bold">Iki (粋)</span>.
              </p>
              <p className="text-muted mt-4 text-sm leading-loose">
                We are a Tokyo-inspired, global digital agency. We reject the bloated, corporate approach to engineering and design. Instead, we craft minimal, high-impact digital products designed to convert.
              </p>
            </motion.div>
          </div>

          {/* Right Deep Parallax Image Element */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full">
             
             {/* Deepest background element */}
             <motion.div 
               style={{ y: y1 }}
               className="absolute right-0 top-0 w-4/5 h-full bg-bg border border-border overflow-hidden"
             >
                {/* Structural Grid lines inside the box */}
                <div
                  className="absolute inset-0 opacity-[0.2] pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
                    backgroundSize: "6rem 6rem",
                  }}
                />
                
                <div className="absolute top-8 left-8">
                  <span className="font-[family-name:var(--font-syne)] text-[10px] text-muted tracking-widest uppercase">Abstract_Vis_01</span>
                </div>
             </motion.div>

             {/* Foreground parallax element */}
             <motion.div 
               style={{ scale, y: y2 }}
               className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] aspect-square bg-gradient-to-br from-surface to-bg border border-border/50 shadow-2xl flex items-center justify-center overflow-hidden mix-blend-screen"
             >
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>
                {/* Huge Kanji */}
                <span className="font-[family-name:var(--font-shippori)] text-[12rem] md:text-[18rem] text-gold/20 select-none">
                  粋
                </span>
                
                {/* Noise overlay specific to this box */}
                 <div
                  className="absolute inset-0 opacity-[0.1]"
                  style={{ backgroundImage: "url('/grain.svg')" }}
                />
             </motion.div>

          </div>
        </div>

        {/* Floating crosshairs for structural feel */}
        <div className="absolute top-10 left-10 w-4 h-4 text-border flex items-center justify-center z-0">
          <div className="w-full h-[1px] bg-border absolute top-1/2 -translate-y-1/2"></div>
          <div className="h-full w-[1px] bg-border absolute left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute bottom-10 right-10 w-4 h-4 text-border flex items-center justify-center z-0">
          <div className="w-full h-[1px] bg-border absolute top-1/2 -translate-y-1/2"></div>
          <div className="h-full w-[1px] bg-border absolute left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
}
