"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface SubService {
  name: string;
  desc: string;
  icon: string;
}

const serviceDetails: Record<
  string,
  {
    title: string;
    kanji: string;
    color: string;
    tagline: string;
    subServices: SubService[];
  }
> = {
  design: {
    title: "Design",
    kanji: "設計",
    color: "#C9A84C",
    tagline: "Interfaces that captivate, inform, and convert.",
    subServices: [
      { name: "Figma", desc: "Collaborative design at scale", icon: "◆" },
      { name: "UI & UX Design", desc: "User-centric digital experiences", icon: "◇" },
      { name: "Graphic Designing", desc: "Visual identity & brand systems", icon: "◈" },
    ],
  },
  development: {
    title: "Development",
    kanji: "開発",
    color: "#60A5FA",
    tagline: "Scalable architectures. Flawless execution.",
    subServices: [
      { name: "Full Stack Development", desc: "End-to-end engineering", icon: "⬡" },
      { name: "Frontend Development", desc: "Pixel-perfect interactive UIs", icon: "⬢" },
      { name: "Backend Development", desc: "Robust APIs & microservices", icon: "⎔" },
      { name: "Craft CMS", desc: "Content-first digital platforms", icon: "⊞" },
      { name: "DevOps", desc: "CI/CD & infrastructure automation", icon: "⚙" },
      { name: "Docker", desc: "Containerized deployments", icon: "⊟" },
    ],
  },
  marketing: {
    title: "Marketing",
    kanji: "販売",
    color: "#E63946",
    tagline: "Data-driven strategies that command attention.",
    subServices: [
      { name: "SEO", desc: "Organic visibility & traffic growth", icon: "◉" },
      { name: "Social Media Marketing", desc: "Engagement-first content", icon: "◎" },
      { name: "Pay Per Click", desc: "High-ROI paid campaigns", icon: "◈" },
    ],
  },
  support: {
    title: "Support",
    kanji: "支援",
    color: "#34D399",
    tagline: "Always by your side. Always operational.",
    subServices: [
      { name: "Zoho Full Support", desc: "Complete Zoho management", icon: "⊞" },
      { name: "CRM Support", desc: "Customer relationship optimization", icon: "◇" },
      { name: "CMS Support", desc: "Content platform maintenance", icon: "⊟" },
    ],
  },
};

interface ServiceDetailPanelProps {
  activeService: string | null;
  onClose: () => void;
}

export default function ServiceDetailPanel({
  activeService,
  onClose,
}: ServiceDetailPanelProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  const service = activeService ? serviceDetails[activeService] : null;

  const panelContent = (
    <AnimatePresence>
      {activeService && service && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-gradient-to-r from-transparent to-black/80"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[55%] lg:w-[45%] bg-surface/95 backdrop-blur-xl border-l border-border z-[70]"
          >
            {/* Close button (Fixed inside panel) */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-gold hover:text-gold transition-colors z-[80] bg-surface/80 backdrop-blur-md"
            >
              <X size={18} />
            </button>

            {/* Scrolling Content */}
            <div className="h-full w-full overflow-y-auto overflow-x-hidden pt-24 md:pt-28 lg:pt-28 pb-24 px-8 md:px-12 lg:px-16">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span
                  className="font-[family-name:var(--font-shippori)] text-6xl md:text-8xl font-bold opacity-10 block mb-2 select-none"
                  style={{ color: service.color }}
                >
                  {service.kanji}
                </span>
                <h2
                  className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl font-bold mb-3 tracking-tighter"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h2>
                <p className="font-[family-name:var(--font-syne)] text-muted text-lg mb-12 border-l-2 pl-6 py-2" style={{ borderColor: service.color }}>
                  {service.tagline}
                </p>
              </motion.div>

              {/* Sub-service cards */}
              <div className="space-y-4">
                {service.subServices.map((sub, i) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group p-6 border border-border/50 bg-bg/40 hover:bg-bg/80 hover:border-border transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}08 0%, transparent 50%)`,
                      }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <span
                        className="text-2xl mt-0.5 opacity-30 group-hover:opacity-80 transition-opacity"
                        style={{ color: service.color }}
                      >
                        {sub.icon}
                      </span>
                      <div>
                        <h3 className="font-[family-name:var(--font-shippori)] text-xl font-bold text-text mb-1 group-hover:translate-x-1 transition-transform duration-300">
                          {sub.name}
                        </h3>
                        <p className="text-muted text-sm">{sub.desc}</p>
                      </div>
                    </div>

                    {/* Index */}
                    <span
                      className="absolute top-4 right-6 font-[family-name:var(--font-syne)] text-[10px] tracking-widest opacity-20"
                      style={{ color: service.color }}
                    >
                      0{i + 1}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <Link
                  href={`/services/${activeService}`}
                  className="inline-flex items-center gap-3 px-8 py-4 border rounded-full font-[family-name:var(--font-syne)] text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:scale-105"
                  style={{
                    borderColor: service.color + "60",
                    color: service.color,
                  }}
                >
                  <span>Deep Dive</span>
                  <span className="text-lg">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(panelContent, document.body);
}
