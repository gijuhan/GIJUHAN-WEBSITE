"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS_FULL, BlogSection } from "@/lib/blog-content";
import { FadeIn } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, CheckCircle2 } from "lucide-react";

function BlogContent({ sections }: { sections: BlogSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return (
              <p key={index}>
                {section.content}
              </p>
            );
          case "heading":
            return (
              <h2 key={index} className="!mt-16 !mb-6">
                {section.content}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={index} className="!mt-10 !mb-4">
                {section.content}
              </h3>
            );
          case "list":
            return (
              <ul key={index} className="!my-8 space-y-3">
                {section.items?.map((item, i) => (
                  <li key={i} className="!pl-2">{item}</li>
                ))}
              </ul>
            );
          case "checklist":
            return (
              <div key={index} className="!my-8 space-y-4 bg-bg/50 border border-border/30 p-8 rounded-sm">
                {section.items?.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={20} className="text-gold mt-1 shrink-0" />
                    <span className="text-muted text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            );
          case "blockquote":
            return (
              <blockquote key={index} className="!border-l-[3px] !border-gold bg-bg/80 !p-8 !my-12 italic text-xl text-text/90 leading-relaxed">
                {section.content}
              </blockquote>
            );
          case "image":
            return (
              <div key={index} className="!my-12 relative overflow-hidden rounded-sm border border-border/20">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={section.src!}
                    alt={section.alt || "Blog illustration"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </div>
                {section.alt && (
                  <div className="px-4 py-3 bg-surface/80 border-t border-border/20">
                    <span className="text-[11px] text-muted/70 font-[family-name:var(--font-syne)] tracking-widest uppercase">
                      {section.alt}
                    </span>
                  </div>
                )}
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const post = BLOG_POSTS_FULL.find((p) => p.slug === slug);

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

              <FadeIn delay={0.2}>
                 <h1 className="font-[family-name:var(--font-shippori)] text-3xl md:text-5xl lg:text-6xl font-bold text-text leading-[1.15] tracking-tighter">
                   {post.title}
                 </h1>
              </FadeIn>
              
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
                 <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-[family-name:var(--font-shippori)] prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-text prose-p:text-muted prose-p:leading-relaxed prose-p:font-[family-name:var(--font-shippori)] prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-text prose-li:text-muted prose-li:leading-relaxed prose-blockquote:border-gold">
                    {/* Lead Excerpt */}
                    <p className="lead text-2xl text-text !leading-snug !mb-12 border-l-[3px] border-gold pl-6 bg-surface/80 py-4">
                       {post.excerpt}
                    </p>
                    
                    {/* Full Blog Content */}
                    <BlogContent sections={post.content} />
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
