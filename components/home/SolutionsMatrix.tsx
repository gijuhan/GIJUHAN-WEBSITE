"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  Brain,
  Layers,
  GitBranch,
  BarChart3,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import Link from "next/link";

const solutionsIconMap: Record<string, any> = {
  Database,
  Brain,
  Layers,
  GitBranch,
  BarChart3,
};

const solutionItems = [
  {
    title: "Data Migration",
    description: "Seamless move of complex datasets across legacy and cloud infrastructures.",
    icon: "Database",
    color: "from-blue-500/20 to-cyan-500/20",
    href: "/solutions/data-migration"
  },
  {
    title: "AI Automation",
    description: "Intelligent workflows that eliminate manual overhead and scale operations.",
    icon: "Brain",
    color: "from-purple-500/20 to-pink-500/20",
    href: "/solutions/ai-automation"
  },
  {
    title: "ETL & ELT Pipeline",
    description: "High-performance data pipelines for real-time transformation and loading.",
    icon: "Layers",
    color: "from-emerald-500/20 to-teal-500/20",
    href: "/solutions/etl-elt-pipeline"
  },
  {
    title: "CI/CD Pipeline",
    description: "Optimized deployment cycles with automated testing and integration.",
    icon: "GitBranch",
    color: "from-orange-500/20 to-red-500/20",
    href: "/solutions/ci-cd-pipeline"
  },
  {
    title: "Advanced Analytics & BI",
    description: "Actionable insights through predictive modeling and visual dashboards.",
    icon: "BarChart3",
    color: "from-gold/20 to-yellow-500/20",
    href: "/solutions/advanced-analytics-bi"
  }
];

const SolutionCard = ({ item, index }: { item: typeof solutionItems[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = solutionsIconMap[item.icon] || HelpCircle;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full flex flex-col p-8 border border-border/50 bg-surface/50 backdrop-blur-sm overflow-hidden hover:border-gold/30 transition-colors duration-500"
    >
      <Link href={item.href} className="absolute inset-0 z-20" />
      
      {/* Background Gradient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
      
      {/* Card Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 flex items-center justify-center border border-border/50 bg-bg mb-8 group-hover:border-gold/30 transition-colors duration-500">
          <Icon className="text-gold" size={24} />
        </div>
        
        <h3 className="font-[family-name:var(--font-shippori)] text-2xl font-bold text-text mb-4">
          {item.title}
        </h3>
        
        <p className="text-muted text-lg leading-relaxed mb-8">
          {item.description}
        </p>
      </div>

      <div className="mt-auto relative z-10 flex justify-between items-center group-hover:text-gold transition-colors duration-300">
        <span className="text-xs font-[family-name:var(--font-syne)] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
          Engineered Solution
        </span>
        <ArrowUpRight size={20} className="translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300" />
      </div>

      {/* Technical Accent Lines */}
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gold" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gold" />
      </div>
    </motion.div>
  );
};

export default function SolutionsMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-48 bg-bg relative overflow-hidden" id="solutions">
      {/* Structural Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Sticky Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-gold font-[family-name:var(--font-syne)] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
              The Engine of Growth
            </span>
            <StaggeredText
              text={"Intelligent\nSolutions."}
              tag="h2"
              className="font-[family-name:var(--font-shippori)] text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-none mb-10"
              staggerDelay={0.2}
            />
            <FadeIn delay={0.4}>
              <p className="text-muted text-lg leading-relaxed max-w-md">
                We engineer scalable data architectures and AI-driven automation that turn raw data into your most powerful strategic asset.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6} className="mt-12">
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-12 bg-border"></div>
                <span className="text-xs uppercase tracking-widest text-text/40">Technical Prowess</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: The Grid Matrix */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/20 border border-border/20">
              {solutionItems.map((item, index) => (
                <div key={item.title} className={index === solutionItems.length - 1 ? "md:col-span-2" : ""}>
                   <SolutionCard item={item} index={index} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
