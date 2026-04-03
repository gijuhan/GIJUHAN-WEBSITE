"use client";

import { useState } from "react";
import { CASE_STUDIES } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function FeaturedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-bg relative" id="work">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="mb-20">
          <FadeIn>
            <div className="flex items-center gap-4">
              <span className="w-16 h-[1px] bg-border"></span>
            </div>
          </FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mt-6 gap-8">
            <StaggeredText
              text="WORK THAT SPEAKS"
              tag="h2"
              className="font-[family-name:var(--font-shippori)] text-5xl md:text-7xl lg:text-[6rem] font-bold text-text leading-[0.9] tracking-tighter"
              startDelay={0.1}
            />
            <FadeIn delay={0.3} direction="right">
              <Button href="/work" variant="outline" size="lg" className="rounded-full">
                See All Projects
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* Brutalist overlapping grid approach */}
        <div className="flex flex-col gap-12 lg:gap-32">
          {CASE_STUDIES.filter(study => study.status === 'Completed').slice(0, 3).map((study, index) => {
            const isHovered = hoveredIndex === index;
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={study.slug} delay={0.1} direction="up">
                <div
                  className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 cursor-pointer`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image — CSS effects replace Three.js ImageDistortion */}
                  <div className={`relative w-full lg:w-[65%] aspect-[4/3] overflow-hidden bg-surface border border-border transition-colors duration-500 ${isHovered ? 'border-gold/50' : ''}`}>
                      <Image
                        src={(study as any).image}
                        alt={study.title}
                        fill
                        className={`object-cover z-0 transition-all duration-700 ${
                          isHovered
                            ? 'scale-105 brightness-110 saturate-[1.2]'
                            : 'scale-100 brightness-[0.8] saturate-100'
                        }`}
                        sizes="(max-width: 768px) 100vw, 65vw"
                        loading="lazy"
                      />

                    {/* Hover color overlay — replaces Three.js chromatic aberration */}
                    <div
                      className={`absolute inset-0 z-[1] pointer-events-none transition-opacity duration-700 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(230,57,70,0.08) 0%, rgba(201,168,76,0.12) 100%)',
                        mixBlendMode: 'overlay',
                      }}
                    />

                    {/* Tags overlay */}
                    <div className="absolute top-6 left-6 right-6 z-10 pointer-events-none">
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-bg/80 backdrop-blur-md border border-border rounded-full text-[10px] text-text uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Strong structural typography block */}
                  <div className={`w-full lg:w-[35%] flex flex-col ${isEven ? 'lg:items-start' : 'lg:items-end lg:text-right'}`}>
                    <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
                      <span className="text-gold font-bold font-[family-name:var(--font-syne)] tracking-widest uppercase text-xs">{study.stat}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl font-bold text-text group-hover:text-gold transition-colors duration-500 leading-none mb-6">
                      {study.title}
                    </h3>

                    <p className="text-base text-muted leading-relaxed max-w-sm">
                      {study.description}
                    </p>

                    <div className="mt-8 overflow-hidden">
                      <span className="inline-flex items-center gap-2 text-text font-bold uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        View Case Study <ArrowDownRight size={16} className="text-gold" />
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
