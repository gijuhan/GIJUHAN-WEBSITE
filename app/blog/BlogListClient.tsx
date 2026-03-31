"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";

export default function BlogListClient() {
  return (
    <>
      {/* 1. Header Array */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-bg z-10">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col gap-6">
             <FadeIn>
              <div className="flex items-center gap-4">
                <span className="section-label tracking-[0.2em] font-bold">Insights</span>
                <span className="w-24 h-[1px] bg-gold/50"></span>
              </div>
            </FadeIn>
            
            <StaggeredText
              text={"THE\nJOURNAL"}
              tag="h1"
              className="font-[family-name:var(--font-shippori)] text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-text leading-[0.8] tracking-tighter mix-blend-difference"
              staggerDelay={0.1}
              startDelay={0.1}
            />
            
            <FadeIn delay={0.6}>
              <div className="max-w-xl border-l-[3px] border-gold pl-8 py-2 mt-12 mix-blend-difference">
                <p className="text-muted text-lg tracking-widest font-[family-name:var(--font-syne)] uppercase leading-relaxed">
                  Essays on engineering, design architecture, and the future of digital product growth.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Brutalist List View Archive */}
      <section className="py-20 bg-surface border-t border-border relative z-10 overflow-hidden">
         {/* Decorative Grid */}
         <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px)",
              backgroundSize: "1px 8rem",
            }}
          />

         <div className="mx-auto max-w-[1600px] relative">
            <div className="flex flex-col border-t border-border/50">
               {BLOG_POSTS.map((post, index) => (
                  <FadeIn key={post.slug} delay={0.1}>
                     <Link href={`/blog/${post.slug}`} className="group block cursor-none">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 px-6 lg:px-12 border-b border-border/50 hover:bg-gold/5 transition-colors duration-500 relative overflow-hidden">
                           
                           {/* Hover Abstract Overlay */}
                           <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-surface/50 transition-all duration-700 pointer-events-none z-0 mix-blend-overlay"></div>

                           <div className="lg:col-span-2 relative z-10">
                              <span className="text-gold font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] font-bold uppercase">{post.date}</span>
                           </div>

                           <div className="lg:col-span-8 relative z-10">
                              <h2 className="font-[family-name:var(--font-shippori)] text-4xl lg:text-5xl font-bold text-text group-hover:-translate-y-2 transition-transform duration-500 mb-4 tracking-tighter line-clamp-2">
                                 {post.title}
                              </h2>
                              <p className="text-muted text-lg line-clamp-1 max-w-2xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
                                {post.excerpt}
                              </p>
                           </div>

                           <div className="lg:col-span-2 flex lg:justify-end relative z-10">
                              <div className="flex gap-2">
                                 <span className="px-4 py-2 bg-bg/50 border border-border/50 text-[10px] text-text uppercase tracking-widest font-[family-name:var(--font-syne)] group-hover:border-gold/50 transition-colors">
                                    {post.category}
                                 </span>
                              </div>
                           </div>
                           
                           {/* Huge Index Watermark */}
                           <div className="absolute right-[-2%] top-[-20%] opacity-[0.02] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
                               <span className="font-[family-name:var(--font-shippori)] text-[12rem] text-text font-bold leading-none select-none">
                                  0{index + 1}
                               </span>
                           </div>

                        </div>
                     </Link>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      <div className="relative z-20">
        <ContactCTA />
      </div>
    </>
  );
}
