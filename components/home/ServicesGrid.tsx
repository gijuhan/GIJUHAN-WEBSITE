"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { PenTool, Code2, Megaphone, Cpu, Headphones, ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const iconMap = { PenTool, Code2, Megaphone, Cpu, Headphones };

// Individual sticky service panel
const ServicePanel = ({ service, index, total }: { service: any, index: number, total: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax on the icon
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div 
      ref={containerRef} 
      className="sticky top-0 h-[100svh] flex items-center justify-center w-full"
      style={{ zIndex: index }}
    >
      <div className="absolute inset-0 bg-bg" /> {/* Opaque background to cover previous panels */}
      
      {/* Subtle grid pattern background */}
      <div
         className="absolute inset-0 opacity-[0.05] pointer-events-none"
         style={{
           backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
           backgroundSize: "4rem 4rem",
         }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left: Huge bold title + index */}
        <div className="flex-1 w-full order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-8">
             <span className="text-gold font-[family-name:var(--font-syne)] font-bold tracking-widest text-sm">
               0{index + 1} — 0{total}
             </span>
             <span className="h-px bg-border flex-1"></span>
          </div>
          
          <h2 className="font-[family-name:var(--font-shippori)] text-5xl md:text-7xl xl:text-[6rem] font-bold text-text leading-none tracking-tighter mb-8">
            {service.title}
          </h2>

          <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10 border-l-2 border-gold pl-6">
            {service.description}
          </p>
          
          <Button href={service.href} variant="outline" size="lg" className="group">
            Explore Capabilities
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>

        {/* Right: Structural service details with parallax icon */}
        <div className="flex-1 w-full order-1 lg:order-2 relative min-h-[50vh] lg:min-h-[70vh] h-auto border border-border bg-surface p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
           
           <motion.div style={{ y }} className="absolute -right-20 -top-20 opacity-[0.03] text-gold group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
             {Icon && <Icon size={400} strokeWidth={1} />}
           </motion.div>

           <div className="relative z-10 w-full">
              <h3 className="font-[family-name:var(--font-syne)] uppercase tracking-[0.2em] text-sm text-gold mb-8">
                Key Deliverables
              </h3>
              
              <ul className="flex flex-col gap-0">
                {service.subServices.map((sub: { label: string, href: string }, i: number) => (
                  <li key={i} className="group/item relative border-b border-border/50 last:border-0">
                    <Link 
                      href={sub.href} 
                      className="flex justify-between items-center w-full py-4 text-xl md:text-2xl font-[family-name:var(--font-shippori)] group-hover/item:text-gold group-hover/item:pl-2 transition-all duration-300"
                    >
                      <span className="relative z-10">{sub.label}</span>
                      <ArrowUpRight 
                        size={20} 
                        className="translate-y-1 -translate-x-1 group-hover/item:translate-y-0 group-hover/item:translate-x-0 opacity-0 group-hover/item:opacity-100 transition-all duration-500" 
                      />
                    </Link>
                  </li>
                ))}
              </ul>
           </div>
           
           {/* Bottom Kanji indicator */}
           <div className="relative z-10 mt-auto pt-12 flex justify-between items-end">
              <span className="font-[family-name:var(--font-shippori)] text-8xl text-border leading-none select-none">
                {['設計', '開発', 'マーケ', '解決', '支援'][index]}
              </span>
           </div>
        </div>
        
      </div>
    </div>
  );
};

export default function ServicesGrid() {
  const filteredServices = SERVICES.filter(service => service.id !== 'solutions');

  return (
    <section className="relative bg-bg w-full" id="services">
      {/* The container needs to be relative, and we map over services to create sticky panels */}
      {filteredServices.map((service, index) => (
        <ServicePanel 
          key={service.id} 
          service={service} 
          index={index} 
          total={filteredServices.length} 
        />
      ))}
    </section>
  );
}
