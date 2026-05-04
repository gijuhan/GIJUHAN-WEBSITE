"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import RamenAnimation from "@/components/ui/RamenAnimation";

export default function WorkPageClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<"Completed" | "In Progress">("Completed");

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-bg pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col gap-6">
            <FadeIn>
              <div className="flex items-center gap-4">
                <span className="section-label tracking-[0.2em] font-bold">The Archive</span>
                <span className="h-[1px] w-24 bg-gold/50"></span>
              </div>
            </FadeIn>

            <StaggeredText
              text={"SELECTED\nWORKS"}
              tag="h1"
              className="font-[family-name:var(--font-shippori)] text-[6rem] font-bold leading-[0.8] tracking-tighter text-text md:text-[8rem] lg:text-[12rem]"
              staggerDelay={0.1}
              startDelay={0.1}
            />

            <FadeIn delay={0.6}>
              <div className="mt-12 max-w-xl border-t-[3px] border-gold pt-8 mix-blend-difference">
                <p className="font-[family-name:var(--font-syne)] text-lg leading-relaxed tracking-widest text-muted uppercase">
                  A curated collection of digital products, immersive experiences, and data-driven platforms engineered globally.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {["Completed", "In Progress"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status as "Completed" | "In Progress")}
                    className={`rounded-full border px-6 py-2 font-[family-name:var(--font-syne)] text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      filter === status
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-border/50 bg-bg/50 text-muted hover:border-gold/50 hover:text-text"
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

      <section className="relative z-10 bg-bg py-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col gap-32">
            {CASE_STUDIES.map((study, originalIndex) => ({ ...study, originalIndex }))
              .filter((study) => study.status === filter)
              .map((study, index) => {
                const isHovered = hoveredIndex === study.originalIndex;
                const isEven = index % 2 === 0;
                const isCompleted = study.status === "Completed";

                const cardContent = (
                  <div
                    className={`relative flex flex-col items-center gap-8 lg:gap-24 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    onMouseEnter={() => setHoveredIndex(study.originalIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`relative aspect-video w-full overflow-hidden structural-border bg-surface transition-all duration-700 lg:w-[60%] lg:aspect-[4/3] ${isHovered && isCompleted ? "scale-[1.02] border-gold" : ""}`}
                    >
                      {(study as { video?: string }).video ? (
                        <video
                          src={(study as { video?: string }).video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 z-0 h-full w-full object-cover"
                        />
                      ) : (
                        <>
                          <Image
                            src={(study as { image: string }).image}
                            alt={study.title}
                            fill
                            className={`z-0 object-cover transition-all duration-700 ${
                              isHovered && isCompleted
                                ? "scale-105 brightness-110 saturate-[1.2]"
                                : "scale-100 brightness-[0.8] saturate-100"
                            }`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 33vw"
                            loading="lazy"
                          />
                          <div
                            className={`pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700 ${
                              isHovered && isCompleted ? "opacity-100" : "opacity-0"
                            }`}
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(230,57,70,0.08) 0%, rgba(201,168,76,0.12) 100%)",
                              mixBlendMode: "overlay",
                            }}
                          />
                        </>
                      )}

                      <div className="pointer-events-none absolute top-6 left-6 right-6 z-10">
                        <div className="flex flex-wrap gap-2">
                          <span className="flex items-center gap-2 rounded-full border border-border/50 bg-bg/90 px-4 py-1.5 font-[family-name:var(--font-syne)] text-[10px] tracking-widest text-text uppercase shadow-xl backdrop-blur-md">
                            {isCompleted ? (
                              <>
                                <span className="h-1.5 w-1.5 rounded-full bg-gold/50"></span>
                                Completed
                              </>
                            ) : (
                              <>
                                <span className="h-1.5 w-1.5 rounded-full bg-[#E63946] shadow-[0_0_10px_rgba(230,57,70,0.5)] animate-pulse"></span>
                                In Progress
                              </>
                            )}
                          </span>

                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border/50 bg-bg/70 px-3 py-1.5 font-[family-name:var(--font-syne)] text-[10px] tracking-widest text-text uppercase backdrop-blur-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-6 right-6 z-10 mix-blend-overlay transition-opacity duration-700 ${isCompleted ? "opacity-30 group-hover:opacity-100" : "opacity-20"}`}
                      >
                        <span className="select-none font-[family-name:var(--font-shippori)] text-9xl font-bold leading-none text-gold">
                          0{study.originalIndex + 1}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`flex w-full flex-col lg:w-[40%] ${isEven ? "lg:items-start" : "lg:items-end lg:text-right"} ${!isCompleted ? "opacity-70" : ""}`}
                    >
                      <div
                        className={`mb-6 flex items-center gap-4 transition-all duration-500 ${isCompleted ? "opacity-50 group-hover:-translate-y-2 group-hover:opacity-100" : "opacity-40"}`}
                      >
                        <span className="font-[family-name:var(--font-syne)] text-xs font-bold tracking-[0.3em] text-gold uppercase">
                          {study.stat}
                        </span>
                      </div>

                      <h2
                        className={`mb-8 font-[family-name:var(--font-shippori)] text-5xl font-bold leading-none tracking-tighter text-text transition-colors duration-500 md:text-7xl ${isCompleted ? "group-hover:text-gold" : ""}`}
                      >
                        {study.title}
                      </h2>

                      <p className="mb-12 max-w-md text-lg leading-relaxed text-muted">
                        {study.description}
                      </p>

                      <div
                        className={`w-full border-b pb-6 transition-colors md:w-auto ${isCompleted ? "overflow-hidden border-border hover:border-gold" : "group border-border/30"}`}
                      >
                        <span
                          className={`inline-flex w-full items-center justify-between gap-12 text-sm font-bold tracking-widest uppercase transition-transform duration-500 ${isCompleted ? "translate-y-2 text-text group-hover:translate-y-0" : "text-muted"}`}
                        >
                          {isCompleted ? (
                            <span>Ramen is Cooked</span>
                          ) : (
                            <span className="relative flex h-10 items-center overflow-visible">
                              <span className="transition-all duration-500 transform group-hover:-translate-y-8 group-hover:opacity-0">
                                Ramen is Cooking 🍜
                              </span>
                              <span className="absolute top-1/2 left-0 flex -translate-y-1/2 translate-y-6 items-center gap-2 opacity-0 transition-all duration-500 group-hover:-translate-y-1/2 group-hover:translate-y-0 group-hover:opacity-100">
                                <RamenAnimation />
                                <span className="whitespace-nowrap text-gold">Cooking...</span>
                              </span>
                            </span>
                          )}
                          {isCompleted && (
                            <ArrowDownRight
                              size={24}
                              className="text-gold transition-transform duration-500 group-hover:rotate-45"
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <FadeIn key={study.slug} delay={0.1} direction="up">
                    {isCompleted ? (
                      <Link href={`/work/${study.slug}`} className="block group cursor-none">
                        {cardContent}
                      </Link>
                    ) : (
                      <div className="block group cursor-default">{cardContent}</div>
                    )}
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
