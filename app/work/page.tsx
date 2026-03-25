"use client";

import { useState } from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import { ArrowDownRight } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic WebGL distortion background for hover states
const ImageDistortion = dynamic(() => import("@/components/three/ImageDistortion"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-surface animate-pulse" />
});

// Procedural abstract generator
const generatePlaceholderTexture = (seed: number) => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="800" height="800" fill="%230A0A0A"/><circle cx="400" cy="400" r="${seed * 100 + 100}" fill="%23111111" opacity="0.8"/><path d="M0 0Q400 ${seed * 800} 800 0" stroke="%23C9A84C" stroke-width="4" fill="none" opacity="0.3"/></svg>`;
};

export default function WorkPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* 1. Header Array */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-bg z-10">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col gap-6">
             <FadeIn>
              <div className="flex items-center gap-4">
                <span className="section-label tracking-[0.2em] font-bold">The Archive</span>
                <span className="w-24 h-[1px] bg-gold/50"></span>
              </div>
            </FadeIn>
            
            <StaggeredText
              text={"SELECTED\nWORKS"}
              tag="h1"
              className="font-[family-name:var(--font-shippori)] text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-text leading-[0.8] tracking-tighter"
              staggerDelay={0.1}
              startDelay={0.1}
            />
            
            <FadeIn delay={0.6}>
              <div className="max-w-xl border-t-[3px] border-gold pt-8 mt-12 mix-blend-difference">
                <p className="text-muted text-lg leading-relaxed font-[family-name:var(--font-syne)] uppercase tracking-widest">
                  A curated collection of digital products, immersive experiences, and data-driven platforms engineered globally.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Deep Structural Vertical Stack */}
      <section className="py-20 relative z-10 bg-bg">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          
          <div className="flex flex-col gap-32">
            {CASE_STUDIES.map((study, index) => {
               const isHovered = hoveredIndex === index;
               const isEven = index % 2 === 0;
               
               return (
                <FadeIn key={study.slug} delay={0.1} direction="up">
                  <Link href={`/work/${study.slug}`} className="block group cursor-none">
                    <div 
                      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-24`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Image Canvas */}
                      <div className={`relative w-full lg:w-[60%] aspect-video lg:aspect-[4/3] overflow-hidden structural-border bg-surface transition-all duration-700 ${isHovered ? 'border-gold scale-[1.02]' : ''}`}>
                        <ImageDistortion 
                          imageUrl={generatePlaceholderTexture(index + 5)} 
                          isHovered={isHovered} 
                        />
                        
                        {/* Tags */}
                        <div className="absolute top-6 left-6 right-6 z-10 pointer-events-none">
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-bg/80 backdrop-blur-md border border-border/50 rounded-full text-[10px] text-text uppercase tracking-widest font-[family-name:var(--font-syne)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Huge Index overlay */}
                        <div className="absolute bottom-6 right-6 z-10 mix-blend-overlay opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                           <span className="font-[family-name:var(--font-shippori)] text-9xl text-gold font-bold leading-none select-none">
                             0{index + 1}
                           </span>
                        </div>
                      </div>

                      {/* Info Block */}
                      <div className={`w-full lg:w-[40%] flex flex-col ${isEven ? 'lg:items-start' : 'lg:items-end lg:text-right'}`}>
                        <div className="flex items-center gap-4 mb-6 opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
                          <span className="text-gold font-bold font-[family-name:var(--font-syne)] tracking-[0.3em] uppercase text-xs">{study.stat}</span>
                        </div>
                        
                        <h2 className="font-[family-name:var(--font-shippori)] text-5xl md:text-7xl font-bold text-text group-hover:text-gold transition-colors duration-500 leading-none mb-8 tracking-tighter">
                          {study.title}
                        </h2>
                        
                        <p className="text-lg text-muted leading-relaxed max-w-md mb-12">
                          {study.description}
                        </p>
                        
                        <div className="overflow-hidden border-b border-border hover:border-gold transition-colors pb-4 w-full md:w-auto">
                           <span className="inline-flex items-center justify-between gap-12 text-text font-bold uppercase tracking-widest text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-500 w-full">
                             <span>Explore Case</span> <ArrowDownRight size={24} className="text-gold group-hover:rotate-45 transition-transform duration-500"/>
                           </span>
                        </div>
                      </div>
                      
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      <div className="relative z-20">
        <ContactCTA />
      </div>
    </>
  );
}
