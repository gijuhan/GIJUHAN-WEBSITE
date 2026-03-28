"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import Button from "@/components/ui/Button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowDownRight, Layers, Lightbulb, Rocket } from "lucide-react";
import Marquee from "react-fast-marquee";
import React from "react";

// WebGL dynamic import for abstract digital art
const ImageDistortion = dynamic(() => import("@/components/three/ImageDistortion"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-surface animate-pulse" />
});

// Seed-based abstract SVG generator for WebGL distortion base
const generateAbstractTexture = (slug: string) => {
  const seed = slug.length * 12345;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"><rect width="1024" height="1024" fill="%230A0A0A"/><circle cx="512" cy="512" r="${(seed % 400) + 200}" fill="%23111111"/><path d="M0 0Q512 ${(seed % 1024)} 1024 1024" stroke="%23E63946" stroke-width="8" fill="none" opacity="0.4"/><path d="M1024 0Q512 ${(seed % 800)} 0 1024" stroke="%23C9A84C" stroke-width="4" fill="none" opacity="0.6"/></svg>`;
};

const servicePages: Record<
  string,
  { title: string; subtitle: string; hero: string; kanji: string; tech: string[] }
> = {
  design: {
    title: "Design",
    subtitle: "Digital Aesthetics",
    hero: "Interfaces that captivate, inform, and convert — blending high-end aesthetics with flawless usability.",
    kanji: "設計",
    tech: ["Figma", "Framer", "WebGL", "Three.js", "GSAP", "Adobe CC"]
  },
  development: {
    title: "Development",
    subtitle: "Precision Engineering",
    hero: "From scalable architectures to complex interactive frontends — we build digital products that perform flawlessly.",
    kanji: "開発",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"]
  },
  marketing: {
    title: "Marketing",
    subtitle: "Growth & Strategy",
    hero: "Data-driven creative strategies that command attention, boost visibility, and drive qualified global traffic.",
    kanji: "販売",
    tech: ["SEO/AIO", "Google Ads", "Meta Ads", "Analytics", "HubSpot", "Programmatic"]
  },
  solutions: {
    title: "Solutions",
    subtitle: "AI & Automation",
    hero: "Intelligent systems, language models, and data pipelines that give your enterprise an unfair competitive edge.",
    kanji: "解決",
    tech: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Vector DBs", "Docker"]
  },
  support: {
    title: "Support",
    subtitle: "Always By Your Side",
    hero: "Dedicated platform support and continuous optimization ensuring your digital infrastructure scales flawlessly.",
    kanji: "支援",
    tech: ["Datadog", "Sentry", "Vercel", "Kubernetes", "CI/CD", "Cloudflare"]
  },
};

type Params = Promise<{ slug: string }>;

export default function ServicePage({ params }: { params: Params }) {
  // Safe unwrapping of params via React's `use`
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const page = servicePages[slug];

  if (!page) notFound();

  const service = SERVICES.find((s) => s.id === slug);

  return (
    <>
      {/* 1. Massive Sticky Hero + WebGL Abstract Art */}
      <section className="relative h-[120svh] overflow-hidden">

        {/* Sticky Container */}
        <div className="sticky top-0 h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-bg">

          {/* Abstract 3D Canvas Background mapped to this specific service */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            <ImageDistortion
              imageUrl={generateAbstractTexture(slug)}
              isHovered={true} // Auto-liquify abstractly
              className="scale-125 saturate-150 rotate-12"
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-20">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8 border border-border bg-surface/80 backdrop-blur-md w-fit px-6 py-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-text uppercase">
                  Service — {page.subtitle}
                </span>
              </div>
            </FadeIn>

            <StaggeredText
              text={page.title}
              tag="h1"
              className="font-[family-name:var(--font-shippori)] text-massive font-bold text-text mix-blend-difference"
              startDelay={0.1}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 md:mt-24 border-t border-border pt-12 items-end">
              <div className="md:col-span-8 lg:col-span-6">
                <FadeIn delay={0.4}>
                  <p className="text-xl md:text-2xl text-text leading-relaxed font-[family-name:var(--font-syne)] border-l-[3px] border-gold pl-6 bg-surface/40 backdrop-blur-sm py-4">
                    {page.hero}
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-4 lg:col-span-6 flex justify-end">
                <span className="font-[family-name:var(--font-shippori)] text-8xl md:text-[12rem] text-muted opacity-20 -mb-8 select-none">
                  {page.kanji}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Deliverables (Asymmetrical Grid) */}
      {service && (
        <section className="py-32 bg-surface border-y border-border relative z-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <FadeIn>
                <h2 className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl lg:text-7xl font-bold text-text mb-2">
                  Key Deliverables
                </h2>
                <div className="flex items-center gap-4">
                  <span className="section-label">What We Build</span>
                  <span className="w-16 h-[1px] bg-border"></span>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {service.subServices.map((sub: { label: string, href: string }, index) => (
                <FadeIn key={sub.href} delay={index * 0.1}>
                  <Link href={sub.href} className="block border-t border-border pt-6 group cursor-none">
                    <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-widest block mb-4">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 className="font-[family-name:var(--font-shippori)] text-2xl font-bold text-text group-hover:text-gold group-hover:-translate-y-2 transition-all duration-500">
                      {sub.label}
                    </h3>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. The Approach sequence (staggered phases) */}
      <section className="py-32 bg-bg relative z-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-24 flex justify-between items-center border-b border-border pb-8">
            <FadeIn>
              <h2 className="font-[family-name:var(--font-shippori)] text-4xl md:text-6xl font-bold text-text">
                Our Approach
              </h2>
            </FadeIn>
            <ArrowDownRight size={48} className="text-gold opacity-50 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Phase 1 */}
            <FadeIn delay={0.1} direction="up" className="structural-border p-8 bg-surface/30 relative overflow-hidden group">
              <Lightbulb size={120} className="absolute -right-10 -top-10 text-border opacity-20 group-hover:text-gold/20 group-hover:rotate-12 transition-all duration-700" strokeWidth={1} />
              <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] uppercase block mb-4">Phase 01</span>
              <h3 className="text-3xl font-bold text-text font-[family-name:var(--font-shippori)] mb-6">Discovery</h3>
              <p className="text-muted leading-relaxed">We audit your architecture, map your business logic, and define requirements. Heavy emphasis on Kanso (simplicity) to remove bloat before building.</p>
            </FadeIn>

            {/* Phase 2 */}
            <FadeIn delay={0.3} direction="up" className="structural-border p-8 bg-surface/30 relative overflow-hidden group">
              <Layers size={120} className="absolute -right-10 -top-10 text-border opacity-20 group-hover:text-gold/20 group-hover:rotate-12 transition-all duration-700" strokeWidth={1} />
              <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] uppercase block mb-4">Phase 02</span>
              <h3 className="text-3xl font-bold text-text font-[family-name:var(--font-shippori)] mb-6">Execution</h3>
              <p className="text-muted leading-relaxed">Agile sprint cycles focused on Kaizen (improvement). We engineer, test, and iterate rapidly, utilizing best-in-class tier 1 global tech stacks.</p>
            </FadeIn>

            {/* Phase 3 */}
            <FadeIn delay={0.5} direction="up" className="structural-border p-8 bg-surface/30 relative overflow-hidden group">
              <Rocket size={120} className="absolute -right-10 -top-10 text-border opacity-20 group-hover:text-gold/20 group-hover:rotate-12 transition-all duration-700" strokeWidth={1} />
              <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] uppercase block mb-4">Phase 03</span>
              <h3 className="text-3xl font-bold text-text font-[family-name:var(--font-shippori)] mb-6">Delivery</h3>
              <p className="text-muted leading-relaxed">Deployment, QA, and handoff. Infused with Iki (purpose), the final product doesn't just function — it elevates your brand's standing globally.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Technologies Marquee */}
      <section className="py-24 bg-surface border-y border-border overflow-hidden relative z-20">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold/30"></div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mb-12">
          <FadeIn>
            <span className="section-label">Core Technologies</span>
          </FadeIn>
        </div>

        <Marquee
          gradient={false}
          speed={40}
          className="overflow-hidden flex items-center"
        >
          {page.tech.map((tech, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-8 font-[family-name:var(--font-shippori)] text-5xl md:text-7xl font-bold text-text/90 italic tracking-tighter">
                {tech}
              </span>
              <span className="text-gold/50 mx-4">•</span>
            </React.Fragment>
          ))}
          {page.tech.map((tech, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="mx-8 font-[family-name:var(--font-shippori)] text-5xl md:text-7xl font-bold text-bg text-stroke-gold italic tracking-tighter">
                {tech}
              </span>
              <span className="text-gold/50 mx-4">•</span>
            </React.Fragment>
          ))}
        </Marquee>
      </section>

      {/* 5. Direct Service CTA */}
      <section className="py-24 md:py-48 bg-bg relative z-20 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-accent/5 rounded-full blur-[100px] opacity-30 pointer-events-none mix-blend-screen" />

        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 text-center relative z-10">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-shippori)] text-4xl md:text-6xl lg:text-[5rem] font-bold text-text mb-8 tracking-tighter mix-blend-difference">
              Ready to elevate your <span className="text-gold italic">{page.title}</span> framework?
            </h2>
            <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed border-b border-border pb-12">
              GIJUHAN partners with visionary brands. Let&apos;s map out your next move with a complimentary discovery call.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto h-16 text-lg px-12">
                Start a {page.title} Project
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Global Contact Footer Fallback */}
      <div className="relative z-20">
        <ContactCTA />
      </div>
    </>
  );
}
