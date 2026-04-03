"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


// Dynamic Abstract Texture for Hero
const generateAbstractTexture = (slug: string) => {
  const seed = slug.length * 5678;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"><rect width="1024" height="1024" fill="%230A0A0A"/><circle cx="512" cy="512" r="${(seed % 400) + 200}" fill="%23111111"/><path d="M0 0Q512 ${(seed % 1024)} 1024 1024" stroke="%23E63946" stroke-width="8" fill="none" opacity="0.4"/><path d="M1024 0Q512 ${(seed % 800)} 0 1024" stroke="%23C9A84C" stroke-width="4" fill="none" opacity="0.6"/></svg>`;
};

export default function WorkCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const projectIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const project = CASE_STUDIES[projectIndex];

  if (!project) notFound();

  // Find next project for the footer
  const nextProject = CASE_STUDIES[(projectIndex + 1) % CASE_STUDIES.length];

  return (
    <>
      {project.status === 'In Progress' && (
        <div className="fixed top-0 left-0 w-full bg-bg/80 backdrop-blur-md border-b border-border/50 z-50 py-3 text-center transition-all">
          <span className="font-[family-name:var(--font-syne)] text-[9px] tracking-[0.3em] uppercase text-gold">
            This project is currently in development. Check back soon.
          </span>
        </div>
      )}
      
      {/* 1. Massive Sticky Hero + WebGL Abstract Art */}
      <section className="relative h-[120svh] overflow-hidden">
        
        {/* Sticky Container */}
        <div className="sticky top-0 h-[100svh] w-full flex flex-col justify-end overflow-hidden bg-bg">
          
          {/* Abstract 3D Canvas Background mapped to this specific project */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            {(project as any).video ? (
              <video
                src={(project as any).video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={(project as any).image || generateAbstractTexture(slug)}
                alt={`${project.title} background`}
                fill
                className="object-cover scale-125 saturate-150 -rotate-[15deg] brightness-75"
                sizes="100vw"
                priority={false}
                loading="eager"
              />
            )}
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col pb-20 pt-32">
            <FadeIn>
              <Link href="/work" className="inline-flex items-center gap-4 mb-16 text-muted hover:text-gold transition-colors font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] uppercase">
                <ArrowLeft size={16} /> Back to Archive
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-[family-name:var(--font-shippori)] text-6xl md:text-7xl lg:text-[9rem] xl:text-[10rem] font-bold text-text mix-blend-difference mb-8 leading-[0.85] tracking-tighter w-full">
                {project.title}
              </h1>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end w-full border-t border-border pt-12">
               <div className="lg:col-span-8 flex flex-wrap gap-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-6 py-3 border border-border/50 bg-bg/50 backdrop-blur-md text-[10px] text-text uppercase tracking-widest font-[family-name:var(--font-syne)]"
                    >
                      {tag}
                    </span>
                  ))}
               </div>
               <div className="lg:col-span-4 text-left lg:text-right">
                 <span className="font-[family-name:var(--font-shippori)] text-6xl text-gold/30 block mb-2 leading-none">
                    0{projectIndex + 1}
                 </span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Challenge & Solution Context */}
      <section className="py-32 bg-surface relative z-20 overflow-hidden">
        {/* Decorative structural grid background */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px)",
            backgroundSize: "1px 8rem",
          }}
        />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                {/* Stats Sticky Side */}
                <div className="lg:col-span-4 max-lg:order-2">
                    <div className="sticky top-32 space-y-12">
                       <FadeIn delay={0.1}>
                           <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] uppercase block mb-4 border-b border-border/50 pb-2">Primary Metric</span>
                           <span className="font-[family-name:var(--font-shippori)] text-5xl text-text font-bold block">{project.stat}</span>
                       </FadeIn>
                       <FadeIn delay={0.2}>
                           <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] uppercase block mb-4 border-b border-border/50 pb-2">Services Rendered</span>
                           <div className="flex flex-col gap-2 mt-4 text-muted">
                              {project.services?.map((service: string, i: number) => (
                                <span key={i}>{service}</span>
                              ))}
                           </div>
                       </FadeIn>
                        <FadeIn delay={0.3}>
                           {project.status === 'Completed' && project.website.startsWith('http') ? (
                             <Button href={project.website} variant="outline" size="lg" className="w-full justify-between items-center group">
                               Visit Website <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                             </Button>
                           ) : (
                             <Button disabled={true} variant="outline" size="lg" className="w-full justify-between items-center opacity-50 cursor-not-allowed hover:bg-transparent hover:text-text">
                               In Development <span className="w-1.5 h-1.5 rounded-full bg-gold/50 ml-auto animate-pulse"></span>
                             </Button>
                           )}
                       </FadeIn>
                    </div>
                </div>

                {/* Main Content Side */}
                <div className="lg:col-span-8 max-lg:order-1 space-y-24">
                    <FadeIn direction="up">
                        <h2 className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 tracking-tighter">
                            The Challenge
                        </h2>
                        <div className="text-xl md:text-2xl text-muted leading-relaxed font-[family-name:var(--font-syne)] border-l-2 border-gold pl-6">
                            {project.challenge}
                        </div>
                    </FadeIn>

                    {/* Full Width Visual */}
                    {!(project as any).hideGallery && (
                        <FadeIn direction="up" className="w-full aspect-[16/9] structural-border bg-bg relative overflow-hidden flex items-center justify-center group">
                            <Image
                                src={(project as any).gallery?.[0] || `https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/portfolio/${project.slug}-1.jpg`}
                                alt={`${project.title} - Visual 1`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 1200px) 100vw, 80vw"
                                loading="lazy"
                            />
                            <div className="absolute top-4 left-4 text-[10px] tracking-widest text-gold opacity-50 z-10 mix-blend-difference">SCREEN_01</div>
                        </FadeIn>
                    )}

                    <FadeIn direction="up">
                        <h2 className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 tracking-tighter">
                            The Solution
                        </h2>
                        <div className="text-xl text-muted leading-relaxed space-y-6">
                            <p>
                                {project.solution}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Two Column Visuals */}
                    {!(project as any).hideGallery && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <FadeIn direction="up" className="w-full aspect-square structural-border bg-bg relative flex items-center justify-center overflow-hidden group">
                               <Image
                                   src={(project as any).gallery?.[1] || `https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/portfolio/${project.slug}-2.jpg`}
                                   alt={`${project.title} - Visual 2`}
                                   fill
                                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                                   sizes="(max-width: 768px) 100vw, 40vw"
                                   loading="lazy"
                               />
                               <div className="absolute top-4 left-4 text-[10px] tracking-widest text-gold opacity-50 z-10 mix-blend-difference">SCREEN_02</div>
                           </FadeIn>
                           <FadeIn direction="up" delay={0.2} className="w-full aspect-square structural-border bg-bg relative flex items-center justify-center overflow-hidden group">
                               <Image
                                   src={(project as any).gallery?.[2] || `https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/portfolio/${project.slug}-3.jpg`}
                                   alt={`${project.title} - Visual 3`}
                                   fill
                                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                                   sizes="(max-width: 768px) 100vw, 40vw"
                               />
                               <div className="absolute top-4 left-4 text-[10px] tracking-widest text-gold opacity-50 z-10 mix-blend-difference">SCREEN_03</div>
                           </FadeIn>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>

      {/* 3. Next Project Footer CTA */}
      <section className="h-[70vh] bg-bg relative flex flex-col justify-center items-center text-center z-20 group cursor-none">
         <Link href={`/work/${nextProject.slug}`} className="absolute inset-0 z-10 block" />
         
         <div className="relative z-10 px-6">
            <span className="section-label group-hover:text-gold transition-colors block mb-12">Next Project</span>
            <div className="overflow-hidden">
               <h2 className="font-[family-name:var(--font-shippori)] text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-text leading-none tracking-tight group-hover:-translate-y-8 transition-transform duration-700 mx-auto">
                 {nextProject.title}
               </h2>
               <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 group-hover:bottom-0 transition-all duration-700 opacity-0 group-hover:opacity-100 flex items-center gap-4 text-gold">
                   <span className="font-[family-name:var(--font-syne)] text-sm tracking-[0.4em] uppercase font-bold">Explore</span>
                   <ArrowDownRight size={24} className="-rotate-90"/>
               </div>
            </div>
         </div>
      </section>
      
      {/* Global Contact Request Fallback */}
      <div className="relative z-20 border-t border-border">
        <ContactCTA />
      </div>
    </>
  );
}
