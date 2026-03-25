import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  goldAccent?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  goldAccent = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-surface border border-border rounded-lg p-6 relative overflow-hidden
        ${hover ? "transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5" : ""}
        ${goldAccent ? "border-l-2 border-l-gold" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
