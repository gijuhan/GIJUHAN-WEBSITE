"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

interface ScrambleTextProps {
  text: string;
  trigger?: boolean;
  className?: string;
  duration?: number;
}

export default function ScrambleText({
  text,
  trigger = true,
  className = "",
  duration = 0.8,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    let frameId: number;
    const startTime = performance.now();
    const durationMs = duration * 1000;
    
    // Calculate iterations per character to stagger the reveal
    // Assuming 60fps, we want the whole effect to last durationMs
    const updateScramble = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      if (progress === 1) {
        setDisplayText(text);
        return;
      }

      const currentText = text.split("").map((char, index) => {
        // If it's a space, keep the space
        if (char === " ") return " ";
        
        // Character reveal logic: reveal from left to right based on progress
        const revealThreshold = (index / text.length) * 0.8;
        if (progress > revealThreshold) {
          // Add a chance to be the real character even before full reveal for a glitchy look
          if (Math.random() < (progress - revealThreshold) * 2) {
            return char;
          }
        }
        
        // Return random character
        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      });

      setDisplayText(currentText.join(""));
      frameId = requestAnimationFrame(updateScramble);
    };

    frameId = requestAnimationFrame(updateScramble);

    return () => cancelAnimationFrame(frameId);
  }, [text, trigger, duration]);

  return <span className={className}>{displayText}</span>;
}
