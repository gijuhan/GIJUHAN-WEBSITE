"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";

const tags = [
  "Machine Learning",
  "LLM Integration",
  "Predictive Analytics",
  "Automation",
  "BI Dashboards",
];

const nodes = [
  { id: "data", label: "Data", x: 60, y: 150 },
  { id: "ai", label: "AI", x: 200, y: 80 },
  { id: "insight", label: "Insight", x: 340, y: 150 },
  { id: "action", label: "Action", x: 480, y: 80 },
];

const edges = [
  { from: "data", to: "ai" },
  { from: "ai", to: "insight" },
  { from: "insight", to: "action" },
];

export default function AIHighlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden" id="ai-highlight">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <StaggeredText
              text={"AI-Powered.\nHuman-Driven."}
              tag="h2"
              className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-[1.1]"
              staggerDelay={0.15}
            />
            <FadeIn delay={0.4}>
              <p className="text-muted text-lg leading-relaxed">
                We embed AI automation, intelligent pipelines, and data
                intelligence into everything we build — so your business
                doesn&apos;t just keep up, it leads.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-border rounded-full text-sm text-text/70 font-[family-name:var(--font-syne)] hover:border-gold/40 hover:text-gold transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Network visualization */}
          <FadeIn delay={0.3} direction="right">
            <div className="relative">
              <svg
                viewBox="0 0 540 230"
                className="w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Edges */}
                {edges.map((edge, i) => {
                  const from = nodes.find((n) => n.id === edge.from)!;
                  const to = nodes.find((n) => n.id === edge.to)!;
                  return (
                    <motion.line
                      key={i}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="var(--color-gold)"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.3 }}
                    />
                  );
                })}

                {/* Pulse circles on edges */}
                {edges.map((edge, i) => {
                  const from = nodes.find((n) => n.id === edge.from)!;
                  const to = nodes.find((n) => n.id === edge.to)!;
                  return (
                    <motion.circle
                      key={`pulse-${i}`}
                      r="3"
                      fill="var(--color-accent)"
                      initial={{ opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              cx: [from.x, to.x],
                              cy: [from.y, to.y],
                              opacity: [0, 1, 1, 0],
                            }
                          : { opacity: 0 }
                      }
                      transition={{
                        duration: 2,
                        delay: 1.5 + i * 0.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => (
                  <g key={node.id}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="28"
                      fill="var(--color-surface)"
                      stroke="var(--color-gold)"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                    />
                    <motion.text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      fill="var(--color-text)"
                      fontSize="11"
                      fontFamily="var(--font-syne)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
                    >
                      {node.label}
                    </motion.text>
                  </g>
                ))}
              </svg>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
