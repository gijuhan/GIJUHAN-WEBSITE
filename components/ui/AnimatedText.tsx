"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface StaggeredTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  staggerDelay?: number;
  startDelay?: number;
  /** If true, text renders immediately visible (no animation on initial paint) — use for LCP elements */
  isLCP?: boolean;
}

export function StaggeredText({
  text,
  className = "",
  tag: Tag = "h2",
  staggerDelay = 0.1,
  startDelay = 0,
  isLCP = false,
}: StaggeredTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split("\n");

  // For LCP elements: render text immediately visible in the DOM
  // The animation still plays, but the initial state is visible (opacity: 1)
  // This ensures Lighthouse sees the text painted immediately
  if (isLCP) {
    return (
      <div ref={ref}>
        <Tag className={className}>
          {words.map((line, i) => (
            <span key={i} className="block w-fit whitespace-nowrap overflow-hidden pb-6 -mb-6 pr-8 -mr-8 pt-4 -mt-4">
              <motion.span
                className="block"
                initial={{ y: 0, opacity: 1 }}
                animate={
                  isInView
                    ? { y: 0, opacity: 1 }
                    : { y: 0, opacity: 1 }
                }
              >
                {line}
              </motion.span>
            </span>
          ))}
        </Tag>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((line, i) => (
          <span key={i} className="block w-fit whitespace-nowrap overflow-hidden pb-6 -mb-6 pr-8 -mr-8 pt-4 -mt-4">
            <motion.span
              className="block"
              initial={{ y: "150%", opacity: 0 }}
              animate={
                isInView
                  ? { y: 0, opacity: 1 }
                  : { y: "150%", opacity: 0 }
              }
              transition={{
                duration: 0.7,
                delay: startDelay + i * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directions[direction].y,
              x: directions[direction].x,
            }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
