"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/home/ContactCTA";
import { SubService } from "@/lib/sub-services";
import * as Icons from "lucide-react";

const subServiceIconMap: Record<string, any> = {
  Figma: Icons.Figma,
  Layout: Icons.Layout,
  Palette: Icons.Palette,
  Code2: Icons.Code2,
  MousePointer2: Icons.MousePointer2,
  Terminal: Icons.Terminal,
  Database: Icons.Database,
  Workflow: Icons.Workflow,
  Container: Icons.Container,
  ShoppingBag: Icons.ShoppingBag,
  Search: Icons.Search,
  Share2: Icons.Share2,
  TrendingUp: Icons.TrendingUp,
  Brain: Icons.Brain,
  Layers: Icons.Layers,
  GitBranch: Icons.GitBranch,
  BarChart3: Icons.BarChart3,
  Cpu: Icons.Cpu,
  Unplug: Icons.Unplug,
  Settings: Icons.Settings,
  Globe: Icons.Globe,
};

export default function SubServiceDetail({ 
  service,
  categoryLabel,
  categoryHref 
}: { 
  service: SubService;
  categoryLabel: string;
  categoryHref: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const iconY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const Icon = subServiceIconMap[service.icon] || Icons.HelpCircle;

  return (
    <div className="bg-bg min-h-screen relative" ref={containerRef} style={{ backgroundColor: '#0A0A0A' }}>
      
      {/* 1. Interactive Hero */}
      <section className="relative h-[90vh] flex flex-col justify-center overflow-hidden border-b border-border">
        {/* Background Decorative Elements */}
        <motion.div 
          style={{ y: iconY, rotate: iconRotate, opacity }}
          className="absolute -right-24 -top-24 text-gold opacity-[0.05] pointer-events-none"
        >
          <Icon size={600} strokeWidth={0.5} />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link 
            href={categoryHref}
            className="group flex items-center gap-2 text-gold font-[family-name:var(--font-syne)] text-xs uppercase tracking-[0.3em] mb-12 hover:text-text transition-colors duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to {categoryLabel}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <StaggeredText
                text={service.title}
                tag="h1"
                className="font-[family-name:var(--font-shippori)] text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-text leading-[0.9] tracking-tighter mb-8"
              />
              <FadeIn delay={0.4}>
                <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed border-l-2 border-gold pl-8">
                  {service.description}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Technical Grid Background */}
        <div 
          className="absolute inset-x-0 bottom-0 h-32 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to top, var(--color-gold) 1px, transparent 1px)",
            backgroundSize: "100% 4rem"
          }}
        />
      </section>

      {/* 2. Technical Features & Capabilities */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Section Label */}
            <div className="lg:col-span-4">
              <span className="section-label mb-8 block">Capabilities</span>
              <h2 className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl font-bold text-text mb-8">
                Technical Highlights
              </h2>
              <p className="text-muted leading-relaxed">
                We push the boundaries of what's possible in <span className="text-text">{service.title}</span>, utilizing tier-1 global infrastructure and precision engineering to deliver unfair competitive advantages.
              </p>
            </div>

            {/* Right: Feature Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className="p-8 bg-surface border border-border/50 group hover:border-gold/30 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-surface/30 group-hover:bg-surface/50 transition-colors" />
                  <div className="relative z-10">
                    <CheckCircle2 className="text-gold mb-6 opacity-40 group-hover:opacity-100 transition-opacity" size={24} />
                    <h3 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-syne)] uppercase tracking-tight">
                      {feature}
                    </h3>
                    <div className="h-px w-8 bg-border group-hover:w-full transition-all duration-700" />
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
