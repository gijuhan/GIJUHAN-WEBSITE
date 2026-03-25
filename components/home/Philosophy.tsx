"use client";

import { PHILOSOPHY } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import KanjiWatermark from "@/components/ui/KanjiWatermark";

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-bg relative overflow-hidden" id="philosophy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <StaggeredText
            text="The GIJUHAN Philosophy"
            tag="h2"
            className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl font-bold text-text"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {PHILOSOPHY.map((pillar, index) => (
            <FadeIn key={pillar.romanji} delay={index * 0.2} className="text-center relative">
              <div className="relative py-12">
                {/* Watermark kanji */}
                <KanjiWatermark
                  character={pillar.kanji}
                  className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  size="14rem"
                  opacity={0.04}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <span className="font-[family-name:var(--font-shippori)] text-5xl md:text-6xl text-gold/80 block">
                    {pillar.kanji}
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.3em] uppercase text-text mt-4">
                    {pillar.romanji}
                  </h3>
                  <p className="font-[family-name:var(--font-shippori)] text-xl text-text/80 mt-2">
                    {pillar.english}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mt-4 max-w-xs mx-auto">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
