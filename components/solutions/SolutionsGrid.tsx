"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrambleText from "@/components/ui/ScrambleText";
import GlobalCTA from "@/components/ui/GlobalCTA";

const SOLUTIONS_DATA = [
  {
    id: "ai-automation",
    kanji: "人工",
    title: "AI Automation",
    tagline: "LLMs, Custom Agents & Intelligent Pipelines",
    description: "We deploy state-of-the-art language models and autonomous agents to eliminate manual tasks, optimize workflows, and scale your operational capability beyond human limits.",
    color: "#818CF8"
  },
  {
    id: "data-migration",
    kanji: "移行",
    title: "Data Migration",
    tagline: "Zero-downtime massive data transfers",
    description: "Seamless, secure, and structured data migration across complex ecosystems. We ensure absolute data integrity without disrupting your ongoing business operations.",
    color: "#C9A84C"
  },
  {
    id: "etl-elt-pipeline",
    kanji: "抽出",
    title: "ETL & ELT Pipelines",
    tagline: "Data engineering at enterprise scale",
    description: "Architecting robust pipelines that Extract, Transform, and Load your data in real-time. Turning unstructured noise into structured, queryable assets.",
    color: "#60A5FA"
  },
  {
    id: "ci-cd-pipeline",
    kanji: "配備",
    title: "CI/CD Infrastructure",
    tagline: "Automated deployment flows & DevOps",
    description: "Accelerate your development cycle with bulletproof Continuous Integration and Continuous Deployment infrastructure. Ship faster, break nothing.",
    color: "#34D399"
  },
  {
    id: "advanced-analytics-bi",
    kanji: "分析",
    title: "Advanced Analytics & BI",
    tagline: "Actionable intelligence from raw data",
    description: "Custom business intelligence dashboards and predictive analytics that transform your dark data into decisive, revenue-driving insights.",
    color: "#E63946"
  }
];

export default function SolutionsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-bg py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 lg:gap-24 relative">
        
        {/* Sticky Left Sidebar */}
        <div className="md:w-5/12 lg:w-5/12 self-start md:sticky md:top-28 md:h-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-[family-name:var(--font-shippori)] text-8xl lg:text-[10rem] font-bold opacity-5 leading-none absolute -top-12 -left-8 pointer-events-none select-none">
              解決
            </span>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl lg:text-5xl font-black uppercase text-text mb-6 tracking-tight">
              A Unified <br /> Architecture.
            </h2>
            <p className="font-[family-name:var(--font-syne)] text-muted/80 text-lg max-w-md border-l-2 border-border pl-6 leading-relaxed">
              Our bespoke solutions merge deep technical expertise with strategic vision. We build the silent engines that drive modern enterprises forward.
            </p>
          </motion.div>
        </div>

        {/* Scrolling Right Side Bento Cards */}
        <div className="md:w-7/12 lg:w-7/12 flex flex-col gap-12 lg:gap-16">
          {SOLUTIONS_DATA.map((solution, i) => (
            <SolutionCard key={solution.id} data={solution} index={i} />
          ))}
        </div>

      </div>

      {/* Contact CTA — Unified Global Component */}
      <GlobalCTA />
    </section>
  );
}

function SolutionCard({ data, index }: { data: typeof SOLUTIONS_DATA[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative p-8 md:p-10 border border-border bg-surface/30 backdrop-blur-sm overflow-hidden hover:border-border/80 transition-all duration-700"
    >
      <Link href={`/solutions/${data.id}`} className="absolute inset-0 z-20" aria-label={`View ${data.title} Details`} />
      {/* Background Matrix Hover Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(45deg, ${data.color} 0, ${data.color} 1px, transparent 1px, transparent 10px)`
        }}
      />

      {/* Decorative Index */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <span className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.2em] uppercase text-muted group-hover:text-text transition-colors">
          Sol_0{index + 1}
        </span>
        <span 
          className="font-[family-name:var(--font-shippori)] text-3xl font-bold opacity-30"
          style={{ color: data.color }}
        >
          {data.kanji}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold uppercase mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-muted transition-all duration-500">
          <ScrambleText text={data.title} trigger={isInView} duration={1.2} />
        </h3>
        <p className="font-[family-name:var(--font-syne)] text-sm tracking-widest uppercase mb-6" style={{ color: data.color }}>
          {data.tagline}
        </p>
        <p className="text-muted leading-relaxed mb-10 group-hover:text-muted/90 transition-colors">
          {data.description}
        </p>
      </div>

      {/* CTA Line */}
      <div className="relative z-10 flex items-center justify-between border-t border-border pt-6 mt-auto">
        <span className="font-[family-name:var(--font-syne)] text-xs tracking-[0.3em] uppercase text-muted group-hover:text-white transition-colors">
          Explore Architecture
        </span>
        <ArrowRight size={20} className="text-muted group-hover:-rotate-45 group-hover:text-white transition-all duration-500" />
      </div>

      {/* Accent Glow Line */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
        style={{ backgroundColor: data.color }}
      />
    </motion.div>
  );
}
