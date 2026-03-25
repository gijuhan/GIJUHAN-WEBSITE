"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, PenTool, Code2, Megaphone, Cpu, Headphones } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { PenTool, Code2, Megaphone, Cpu, Headphones };

interface InteractiveServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    subServices: readonly string[];
    href: string;
  };
  index: number;
  spanClass: string;
  iconName: string;
}

export default function InteractiveServiceCard({
  service,
  index,
  spanClass,
  iconName,
}: InteractiveServiceCardProps) {
  const Icon = iconMap[iconName];
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth 3D tilt
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Parallax transforms for the background icon
  const iconParallaxX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const iconParallaxY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  const spotX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const spotY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    return spotX.on("change", (latest) => setSpotlightPos((prev) => ({ ...prev, x: (latest + 0.5) * 100 })));
  }, [spotX]);

  useEffect(() => {
    return spotY.on("change", (latest) => setSpotlightPos((prev) => ({ ...prev, y: (latest + 0.5) * 100 })));
  }, [spotY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized mouse position from -0.5 to 0.5 relative to center
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className={`${spanClass} h-full perspective-1000`}
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <Link
        href={service.href}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="block h-full cursor-none transform-style-3d outline-none"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="group relative structural-border bg-surface/50 h-full p-8 lg:p-12 overflow-hidden hover:bg-gold/5 transition-colors duration-700 flex flex-col justify-between"
        >
          {/* Spotlight Effect overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
            style={{
              background: `radial-gradient(circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(201,168,76,0.15) 0%, transparent 60%)`,
            }}
          />

          {/* Huge background animated icon with Parallax */}
          <motion.div 
            className="absolute -right-10 -bottom-10 opacity-[0.02] text-gold group-hover:opacity-[0.1] transition-opacity duration-1000"
            style={{ 
              transform: "translateZ(30px)",
              x: iconParallaxX,
              y: iconParallaxY
            }}
          >
            {Icon && React.createElement(Icon, { size: 400, strokeWidth: 1 } as any)}
          </motion.div>

          <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <span className="font-[family-name:var(--font-syne)] text-sm tracking-[0.2em] text-gold uppercase font-bold drop-shadow-md">
                0{index + 1}
              </span>
              <ArrowUpRight 
                size={32} 
                className="text-muted group-hover:text-gold transition-all duration-500" 
                style={{ 
                  transform: hovered ? "rotate(45deg) translateZ(10px)" : "rotate(0deg)"
                }} 
              />
            </div>
            
            <h3 className="font-[family-name:var(--font-shippori)] text-4xl lg:text-5xl font-bold text-text mb-6 leading-none mix-blend-difference">
              {service.title}
            </h3>
            
            <p className="text-muted text-base lg:text-lg mb-8 leading-relaxed max-w-lg shadow-black/50 drop-shadow-sm">
              {service.description}
            </p>
          </div>
          
          <div 
            style={{ transform: "translateZ(20px)" }} 
            className="flex flex-wrap gap-2 relative z-10 mt-auto"
          >
            {service.subServices.slice(0, 4).map((sub, i) => (
              <motion.span
                key={sub}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hovered ? 1 : 0.8, y: hovered ? 0 : 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`px-4 py-2 border text-[10px] font-[family-name:var(--font-syne)] tracking-widest uppercase transition-colors ${hovered ? 'bg-gold/10 border-gold/50 text-gold' : 'bg-bg/80 border-border/50 text-text/80'}`}
              >
                {sub}
              </motion.span>
            ))}
            {service.subServices.length > 4 && (
              <span className="px-4 py-2 border border-border/50 text-[10px] text-gold font-[family-name:var(--font-syne)] tracking-widest bg-bg/50">
                +{service.subServices.length - 4} MORE
              </span>
            )}
          </div>
          
        </motion.div>
      </Link>
    </motion.div>
  );
}
