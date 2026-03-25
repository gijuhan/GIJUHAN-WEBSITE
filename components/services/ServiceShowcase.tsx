"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SHOWCASE_SERVICES = [
  {
    id: "design",
    title: "Design",
    kanji: "設計",
    color: "#C9A84C",
    desc: "Crafting intuitive digital experiences that captivate and convert.",
    items: ["Figma", "UI & UX Design", "Graphic Designing"],
    accentBg: "rgba(201,168,76,0.04)",
  },
  {
    id: "development",
    title: "Development",
    kanji: "開発",
    color: "#60A5FA",
    desc: "Robust, scalable digital products built for performance.",
    items: ["Full Stack", "Frontend", "Backend", "Craft CMS", "DevOps", "Docker"],
    accentBg: "rgba(96,165,250,0.04)",
  },
  {
    id: "marketing",
    title: "Marketing",
    kanji: "販売",
    color: "#E63946",
    desc: "Data-driven strategies that amplify and drive qualified growth.",
    items: ["SEO", "Social Media Marketing", "Pay Per Click"],
    accentBg: "rgba(230,57,70,0.04)",
  },
  {
    id: "solutions",
    title: "Solutions",
    kanji: "解決",
    color: "#818CF8",
    desc: "Intelligent automation and data pipelines at enterprise scale.",
    items: ["Data Migration", "AI Automation", "ETL & ELT Pipeline", "CI/CD", "Analytics & BI"],
    accentBg: "rgba(129,140,248,0.04)",
  },
  {
    id: "support",
    title: "Support",
    kanji: "支援",
    color: "#34D399",
    desc: "Reliable, expert support so your platforms never stop.",
    items: ["Zoho Full Support", "CRM Support", "CMS Support"],
    accentBg: "rgba(52,211,153,0.04)",
  },
];

function ServiceBlock({
  service,
  index,
  isReversed,
}: {
  service: (typeof SHOWCASE_SERVICES)[0];
  index: number;
  isReversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: service.accentBg }}
    >
      {/* Animated accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: isReversed ? "right" : "left", backgroundColor: service.color + "30" }}
      />

      {/* Floating kanji background */}
      <motion.div
        className="absolute pointer-events-none select-none font-[family-name:var(--font-shippori)] font-bold leading-none"
        style={{
          color: service.color,
          opacity: 0.03,
          fontSize: "clamp(12rem, 25vw, 28rem)",
          right: isReversed ? "auto" : "-5%",
          left: isReversed ? "-5%" : "auto",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        initial={{ opacity: 0, x: isReversed ? -100 : 100 }}
        animate={isInView ? { opacity: 0.03, x: 0 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {service.kanji}
      </motion.div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${service.color}40 1px, transparent 1px), linear-gradient(90deg, ${service.color}40 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Typography side */}
          <div
            className={`${isReversed ? "lg:col-start-7 lg:col-end-13" : "lg:col-span-6"}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span
                className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.4em] uppercase block mb-6"
                style={{ color: service.color }}
              >
                0{index + 1} / 05
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-shippori)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
                style={{ color: service.color }}
              >
                {service.title}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-lg leading-relaxed max-w-md border-l-2 pl-6 py-2"
              style={{ borderColor: service.color + "40" }}
            >
              {service.desc}
            </motion.p>
          </div>

          {/* Sub-services side */}
          <div
            className={`${isReversed ? "lg:col-start-1 lg:col-end-7 lg:row-start-1" : "lg:col-span-6"}`}
          >
            <div className="space-y-3">
              {service.items.map((item, j) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + j * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center gap-5 p-5 border border-border/30 hover:border-border bg-surface/20 hover:bg-surface/50 backdrop-blur-sm transition-all duration-500 cursor-default"
                >
                  {/* Animated dot */}
                  <motion.span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: service.color }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: j * 0.3,
                    }}
                  />

                  <span
                    className="font-[family-name:var(--font-syne)] text-[10px] tracking-widest opacity-30 flex-shrink-0"
                    style={{ color: service.color }}
                  >
                    {String(j + 1).padStart(2, "0")}
                  </span>

                  <span className="font-[family-name:var(--font-shippori)] text-lg font-bold text-text group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </span>

                  <span
                    className="ml-auto text-lg opacity-0 group-hover:opacity-60 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: service.color }}
                  >
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceShowcase() {
  return (
    <section className="relative">
      {/* Section header */}
      <div className="py-20 text-center relative overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block bg-bg px-8"
        >
          <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.5em] text-gold/60 uppercase">
            ● What We Build ●
          </span>
        </motion.div>
      </div>

      {SHOWCASE_SERVICES.map((service, i) => (
        <ServiceBlock
          key={service.id}
          service={service}
          index={i}
          isReversed={i % 2 !== 0}
        />
      ))}
    </section>
  );
}
