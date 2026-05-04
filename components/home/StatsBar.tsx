import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section
      className="py-16 md:py-20 bg-surface border-y border-border"
      id="stats"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <span className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl lg:text-6xl font-bold text-gold tabular-nums">
                {stat.value}
                {stat.suffix}
              </span>
              <p className="text-sm text-muted font-[family-name:var(--font-syne)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
