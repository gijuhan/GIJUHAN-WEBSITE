"use client";

import { BLOG_POSTS } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogTeaser() {
  return (
    <section className="py-32 bg-surface border-y border-border-strong relative" id="blog-teaser">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 dot-grid opacity-30 mix-blend-screen pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
                <BookOpen size={14} className="text-accent" />
                <span className="section-label text-xs">Intelligence Log</span>
              </div>
            </FadeIn>
            <StaggeredText
              text="From the Lab"
              tag="h2"
              className="font-[family-name:var(--font-space)] text-5xl md:text-6xl font-bold text-text tracking-tight"
              startDelay={0.1}
            />
            <FadeIn delay={0.3}>
              <p className="text-muted mt-4 max-w-lg font-[family-name:var(--font-inter)] leading-relaxed">
                Strategic insights on AI automation, design architecture, and modern marketing.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} direction="right">
            <Button href="/blog" variant="outline" size="md" className="hidden md:inline-flex">
              View Publication
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.15} className="h-full">
              <Link href={`/blog/${post.slug}`} className="group block h-full cursor-none">
                <article className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] border border-border-strong hover:border-accent/40 relative">
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Thumbnail placeholder */}
                  <div className="aspect-[16/10] bg-surface-2 relative overflow-hidden flex-shrink-0 border-b border-border-strong group-hover:border-accent/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
                    
                    {/* Abstract procedural pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)",
                        backgroundSize: `${20 + index * 5}px ${20 + index * 5}px`,
                      }}
                    />
                    
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-bg/80 backdrop-blur-md border border-border-strong rounded-full text-[10px] text-text uppercase tracking-widest font-[family-name:var(--font-inter)] font-semibold shadow-lg">
                      {post.category}
                    </span>
                    
                    {/* Reading time */}
                    <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-bg/80 backdrop-blur-md border border-border-strong rounded-md text-[10px] text-accent uppercase tracking-widest font-[family-name:var(--font-inter)] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted font-[family-name:var(--font-inter)] mb-4">
                      <span className="tracking-widest uppercase">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    
                    <h3 className="font-[family-name:var(--font-space)] text-2xl font-bold text-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-2 transition-all duration-300 leading-tight mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted leading-relaxed line-clamp-2 font-[family-name:var(--font-inter)] mt-auto border-l-2 border-border-strong pl-4 group-hover:border-accent/40 transition-colors">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button href="/blog" variant="outline" size="md" className="w-full">
            View Publication
          </Button>
        </div>
      </div>
    </section>
  );
}
