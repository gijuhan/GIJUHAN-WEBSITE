"use client";

import { useState } from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import { ArrowDownRight } from "lucide-react";
import dynamic from "next/dynamic";
import RamenAnimation from "@/components/ui/RamenAnimation";

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
  const [filter, setFilter] = useState<'Completed' | 'In Progress'>('Completed');

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
            
            <FadeIn delay={0.7}>
               <div className="flex flex-wrap items-center gap-4 mt-8">
                 {['Completed', 'In Progress'].map((status) => (
                   <button
                     key={status}
                     onClick={() => setFilter(status as any)}
                     className={`px-6 py-2 border rounded-full text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-syne)] transition-all duration-300 ${
                       filter === status 
                         ? 'border-gold text-gold bg-gold/10' 
                         : 'border-border/50 text-muted hover:border-gold/50 hover:text-text bg-bg/50'
                     }`}
                   >
                     {status}
                   </button>
                 ))}
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Deep Structural Vertical Stack */}
      <section className="py-20 relative z-10 bg-bg">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          
          <div className="flex flex-col gap-32">
            {CASE_STUDIES.map((study, originalIndex) => ({ ...study, originalIndex }))
              .filter((study) => study.status === filter)
              .map((study, index) => {
               const isHovered = hoveredIndex === study.originalIndex;
               const isEven = index % 2 === 0;
               const isCompleted = study.status === 'Completed';
               const CardWrapper = isCompleted ? Link : "div";
               const wrapperProps = isCompleted ? { href: `/work/${study.slug}` } : {};
               
               return (
                <FadeIn key={study.slug} delay={0.1} direction="up">
                  <CardWrapper {...wrapperProps as any} className={`block group ${isCompleted ? 'cursor-none' : 'cursor-default'}`}>
                    <div 
                      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-24`}
                      onMouseEnter={() => setHoveredIndex(study.originalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Image Canvas */}
                      <div className={`relative w-full lg:w-[60%] aspect-video lg:aspect-[4/3] overflow-hidden structural-border bg-surface transition-all duration-700 ${isHovered && isCompleted ? 'border-gold scale-[1.02]' : ''}`}>
                        <ImageDistortion 
                          imageUrl={generatePlaceholderTexture(study.originalIndex + 5)} 
                          isHovered={isHovered && isCompleted} 
                        />
                        
                        {/* Tags */}
                        <div className="absolute top-6 left-6 right-6 z-10 pointer-events-none">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-1.5 bg-bg/90 backdrop-blur-md border border-border/50 rounded-full text-[10px] text-text uppercase tracking-widest font-[family-name:var(--font-syne)] flex items-center gap-2 shadow-xl">
                              {isCompleted ? (
                                <><span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span> Completed</>
                              ) : (
                                <><span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse shadow-[0_0_10px_rgba(230,57,70,0.5)]"></span> In Progress</>
                              )}
                            </span>

                            {study.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 bg-bg/70 backdrop-blur-md border border-border/50 rounded-full text-[10px] text-text uppercase tracking-widest font-[family-name:var(--font-syne)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Huge Index overlay */}
                        <div className={`absolute bottom-6 right-6 z-10 mix-blend-overlay transition-opacity duration-700 ${isCompleted ? 'opacity-30 group-hover:opacity-100' : 'opacity-20'}`}>
                           <span className="font-[family-name:var(--font-shippori)] text-9xl text-gold font-bold leading-none select-none">
                             0{study.originalIndex + 1}
                           </span>
                        </div>
                      </div>

                      {/* Info Block */}
                      <div className={`w-full lg:w-[40%] flex flex-col ${isEven ? 'lg:items-start' : 'lg:items-end lg:text-right'} ${!isCompleted ? 'opacity-70' : ''}`}>
                        <div className={`flex items-center gap-4 mb-6 transition-all duration-500 ${isCompleted ? 'opacity-50 group-hover:opacity-100 group-hover:-translate-y-2' : 'opacity-40'}`}>
                          <span className="text-gold font-bold font-[family-name:var(--font-syne)] tracking-[0.3em] uppercase text-xs">{study.stat}</span>
                        </div>
                        
                        <h2 className={`font-[family-name:var(--font-shippori)] text-5xl md:text-7xl font-bold text-text transition-colors duration-500 leading-none mb-8 tracking-tighter ${isCompleted ? 'group-hover:text-gold' : ''}`}>
                          {study.title}
                        </h2>
                        
                        <p className="text-lg text-muted leading-relaxed max-w-md mb-12">
                          {study.description}
                        </p>
                        
                        <div className={`border-b transition-colors pb-6 w-full md:w-auto ${isCompleted ? 'border-border hover:border-gold overflow-hidden' : 'border-border/30 group'}`}>
                           <span className={`inline-flex items-center justify-between gap-12 font-bold uppercase tracking-widest text-sm transition-transform duration-500 w-full ${isCompleted ? 'text-text translate-y-2 group-hover:translate-y-0' : 'text-muted'}`}>
                             {isCompleted ? (
                               <span>Ramen is Cooked</span>
                             ) : (
                               <span className="relative flex items-center h-10 overflow-visible">
                                 {/* Baseline text */}
                                 <span className="transition-all duration-500 transform group-hover:-translate-y-8 group-hover:opacity-0">
                                   Ramen is Cooking 🍜
                                 </span>
                                 {/* Hover animation text & bowl */}
                                 <span className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 transition-all duration-500 opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:-translate-y-1/2 group-hover:opacity-100">
                                   <RamenAnimation />
                                   <span className="text-gold whitespace-nowrap">Cooking...</span>
                                 </span>
                               </span>
                             )}
                             {isCompleted && <ArrowDownRight size={24} className="text-gold group-hover:rotate-45 transition-transform duration-500"/>}
                           </span>
                        </div>
                      </div>
                      
                    </div>
                  </CardWrapper>
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
