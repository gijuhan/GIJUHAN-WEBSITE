"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <article className="min-h-screen bg-bg relative">
        {/* 1. Deep Structural Hero */}
        <header className="relative pt-40 pb-20 border-b border-border/50 overflow-hidden mix-blend-difference z-10">
          {/* Background Grid Pattern */}
          <div
             className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
               backgroundSize: "6rem 6rem",
             }}
           />
           <div className="mx-auto max-w-[1200px] px-6 lg:px-12 relative z-10 flex flex-col gap-8">
             <FadeIn>
                <Link href="/blog" className="inline-flex items-center gap-4 text-muted hover:text-gold transition-colors font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] uppercase mb-12">
                  <ArrowLeft size={16} /> Back to Insights
                </Link>
             </FadeIn>
             
             <FadeIn delay={0.1}>
                 <div className="flex gap-4 mb-4">
                    <span className="px-3 py-1 bg-surface border border-border/50 text-[10px] text-gold uppercase tracking-widest font-[family-name:var(--font-syne)]">
                        {post.category}
                    </span>
                    <span className="px-3 py-1 flex items-center gap-2 border border-border/50 text-[10px] text-muted uppercase tracking-widest font-[family-name:var(--font-syne)]">
                        <Clock size={12}/> {post.readTime}
                    </span>
                 </div>
             </FadeIn>

             <StaggeredText
                text={post.title}
                tag="h1"
                className="font-[family-name:var(--font-shippori)] text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-text leading-[0.95] tracking-tighter"
                startDelay={0.2}
              />
              
              <FadeIn delay={0.6}>
                 <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center font-[family-name:var(--font-shippori)] text-gold font-bold">
                       G
                    </div>
                    <div>
                       <span className="block font-[family-name:var(--font-syne)] text-sm tracking-widest text-text uppercase font-bold">Gijuhan Team</span>
                       <span className="block text-[10px] text-muted tracking-widest uppercase">{post.date}</span>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </header>

        {/* 2. Editorial Content Body */}
        <section className="py-20 lg:py-32 relative z-10 bg-surface/50">
           <div className="mx-auto max-w-[800px] px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2}>
                 <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-[family-name:var(--font-shippori)] prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-text prose-p:text-muted prose-p:leading-relaxed prose-p:font-[family-name:var(--font-shippori)] prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-text">
                    {/* Simulated Content Block since we don't have full MDX integrated yet */}
                    <p className="lead text-2xl text-text !leading-snug !mb-12 border-l-[3px] border-gold pl-6 bg-surface/80 py-4">
                       {post.excerpt}
                    </p>
                    
                    <h3>The Engineering Perspective</h3>
                    <p>
                      In the rapidly evolving landscape of digital products, traditional methodologies are being systematically dismantled. At Gijuhan, we observe a distinct shift towards architectures that prioritize not just speed, but absolute minimal friction. The principle of Kanso (簡素) teaches us that true elegance is found not in abundance, but in the precise absence of the unnecessary.
                    </p>
                    <p>
                      When we analyze high-performing platforms, the delta between "good" and "exceptional" often lies in sub-second rendering techniques, WebGL integrations, and brutalist structural design. This isn't merely aesthetic—it is a functional requirement for modern attention spans.
                    </p>

                    <blockquote className="border-gold bg-bg p-8 my-12 structural-border italic text-2xl text-text/90">
                       "To build for tomorrow, you must engineer with purpose today. Kaizen demands continuous refinement."
                    </blockquote>

                    <h3>Architectural Shifts</h3>
                    <p>
                      Moving towards edge computing and heavily utilizing frameworks like Next.js allows agencies like ours to deploy server-rendered React applications that feel instantaneous. Coupled with Framer Motion for spring-physics-based UI animations, the resulting sensory experience completely overrides the static nature of standard DOM manipulation.
                    </p>
                    <ul>
                      <li>Server Components reducing client JS bundles by up to 40%.</li>
                      <li>WebGL (React Three Fiber) introducing previously impossible depth.</li>
                      <li>Tailwind CSS enabling rapid, design-system-driven iterations.</li>
                    </ul>
                    
                    <p>
                       As we move forward, the integration of these tools will become standard. The agencies that thrive will be those that master the invisible layers—the pipeline, the cache, the edge—while delivering stunning visual fronts.
                    </p>
                 </div>
              </FadeIn>
           </div>
        </section>
      </article>

      {/* Global Contact Action */}
      <div className="relative z-20 border-t border-border">
        <ContactCTA />
      </div>
    </>
  );
}
