"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef<number>(0);

  const animate = useCallback(() => {
    if (!dotRef.current || !ringRef.current) return;

    // Smooth ring follow
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

    // Direct DOM manipulation — no React re-renders
    dotRef.current.style.transform = `translate3d(${mousePos.current.x - 8}px, ${mousePos.current.y - 8}px, 0) scale(${isHovering.current ? 0 : 1})`;
    ringRef.current.style.transform = `translate3d(${ringPos.current.x - 24}px, ${ringPos.current.y - 24}px, 0) scale(${isHovering.current ? 1.5 : 1})`;
    ringRef.current.style.backgroundColor = isHovering.current
      ? "rgba(201, 168, 76, 0.1)"
      : "rgba(0,0,0,0)";

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Only show custom cursor on desktop devices that support hover
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (!dotRef.current || !ringRef.current) return;

    isVisible.current = true;
    dotRef.current.style.opacity = "1";
    ringRef.current.style.opacity = "1";

    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".group") !== null;
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gold pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: 0, willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-gold/50 pointer-events-none z-[9998] mix-blend-difference"
        style={{ opacity: 0, willChange: "transform", transition: "background-color 0.2s ease" }}
      />
    </>
  );
}
