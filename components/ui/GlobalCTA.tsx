"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GlobalCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-bg relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 border border-border bg-gradient-to-br from-surface to-bg rounded-lg text-center shadow-2xl"
        >
          <h3 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4 tracking-tight text-text">
            Ready to Scale?
          </h3>
          <p className="text-muted text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Let's architect a solution tailored to your operational bottlenecks.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-text text-bg font-bold font-[family-name:var(--font-syne)] uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-bg transition-colors duration-300 rounded-sm"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
