import type { Metadata } from "next";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Gijuhan to engineer your next digital experience. Operating globally from the heart of India.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Header Array */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-bg z-10">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col gap-6">
             <FadeIn>
              <div className="flex items-center gap-4">
                <span className="section-label tracking-[0.2em] font-bold">Initiate Protocol</span>
                <span className="w-24 h-[1px] bg-gold/50"></span>
              </div>
            </FadeIn>
            
            <StaggeredText
              text={"START A\nPROJECT"}
              tag="h1"
              className="font-[family-name:var(--font-shippori)] text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-text leading-[0.8] tracking-tighter"
              staggerDelay={0.1}
              startDelay={0.1}
            />
            
            <FadeIn delay={0.6}>
              <div className="max-w-xl border-l-[3px] border-gold pl-8 py-2 mt-12 bg-surface/20 backdrop-blur-sm">
                <p className="text-muted text-lg tracking-widest font-[family-name:var(--font-syne)] uppercase leading-relaxed text-text/90">
                  Ready to engineer your next digital product? Fill out the matrix below to open a direct line to our lead architects.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Structural Interaction Matrix */}
      <section className="py-20 bg-surface border-t border-border relative z-10 overflow-hidden">
         {/* Decorative Grid SVG Background */}
         <div
           className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
             backgroundSize: "6rem 6rem",
           }}
         />
         
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left: Terminal Input Form */}
            <div className="lg:col-span-8">
              <FadeIn>
                <div className="structural-border bg-bg/90 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-50 flex gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500"></span>
                       <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                       <span className="w-2 h-2 rounded-full bg-green-500"></span>
                   </div>
                   <h2 className="font-[family-name:var(--font-syne)] text-sm tracking-[0.3em] font-bold text-gold uppercase mb-12 border-b border-border/50 pb-4">
                     Input Parameters
                   </h2>
                   {/* Form component handles the internal states */}
                   <ContactForm />
                </div>
              </FadeIn>
            </div>

            {/* Right: Structural Intelligence Node Data */}
            <div className="lg:col-span-4 space-y-12">
               
               <FadeIn delay={0.2} direction="right">
                 <div className="structural-border bg-bg/50 p-8">
                     <div className="flex items-center gap-4 mb-6 text-gold">
                        <MapPin size={24} />
                        <h3 className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] font-bold uppercase">Location Node</h3>
                     </div>
                     <p className="font-[family-name:var(--font-shippori)] text-3xl font-bold text-text leading-tight mb-2">
                        Pune, India
                     </p>
                     <p className="text-muted tracking-widest text-[10px] uppercase">
                       Operating Globally (UTC+5:30)
                     </p>
                 </div>
               </FadeIn>

               <FadeIn delay={0.4} direction="right">
                 <div className="structural-border bg-bg/50 p-8">
                     <div className="flex items-center gap-4 mb-6 text-gold">
                        <Mail size={24} />
                        <h3 className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] font-bold uppercase">Direct Access</h3>
                     </div>
                     <a href="mailto:hello@gijuhan.com" className="font-[family-name:var(--font-shippori)] text-3xl font-bold text-text leading-tight mb-2 hover:text-gold transition-colors block">
                        hello@gijuhan.com
                     </a>
                     <p className="text-muted tracking-widest text-[10px] uppercase">
                       Avg Response: within 24 hours
                     </p>
                 </div>
               </FadeIn>

               <FadeIn delay={0.6} direction="right">
                 <div className="structural-border bg-bg/50 p-8">
                     <div className="flex items-center gap-4 mb-6 text-gold">
                        <Globe size={24} />
                        <h3 className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] font-bold uppercase">Network Hubs</h3>
                     </div>
                     <div className="space-y-4">
                        <a href="#" className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.2em] text-text hover:text-gold transition-colors uppercase block">
                           LinkedIn ↗
                        </a>
                        <a href="#" className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.2em] text-text hover:text-gold transition-colors uppercase block">
                           Twitter ↗
                        </a>
                        <a href="#" className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.2em] text-text hover:text-gold transition-colors uppercase block">
                           Instagram ↗
                        </a>
                     </div>
                 </div>
               </FadeIn>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
