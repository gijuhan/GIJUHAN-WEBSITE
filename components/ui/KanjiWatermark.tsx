interface KanjiWatermarkProps {
  character: string;
  className?: string;
  size?: string;
  opacity?: number;
}

export default function KanjiWatermark({
  character,
  className = "",
  size = "20rem",
  opacity = 0.03,
}: KanjiWatermarkProps) {
  return (
    <span
      className={`absolute font-[family-name:var(--font-shippori)] leading-none select-none pointer-events-none ${className}`}
      style={{
        fontSize: size,
        opacity,
        color: "var(--color-gold)",
      }}
      aria-hidden="true"
    >
      {character}
    </span>
  );
}
