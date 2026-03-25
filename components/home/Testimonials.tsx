"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/AnimatedText";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  return (
    <section className="py-24 md:py-32 bg-bg" id="testimonials">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">What Our Clients Say</span>
          </div>
        </FadeIn>

        <div className="relative">
          <Quote
            className="absolute -top-4 left-0 text-gold/10"
            size={80}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center py-8"
            >
              <blockquote className="font-[family-name:var(--font-shippori)] text-2xl md:text-3xl lg:text-4xl text-text italic leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>
              <div className="space-y-1">
                <p className="font-[family-name:var(--font-syne)] text-base font-semibold text-text">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-sm text-muted">
                  {TESTIMONIALS[current].role},{" "}
                  {TESTIMONIALS[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-2 border border-border rounded-full hover:border-gold/40 hover:text-gold text-muted transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gold w-6"
                      : "bg-border hover:bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 border border-border rounded-full hover:border-gold/40 hover:text-gold text-muted transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
