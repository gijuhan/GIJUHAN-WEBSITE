import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="py-6 border-y border-border overflow-hidden bg-bg" aria-label="Services ticker">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 font-[family-name:var(--font-shippori)] text-lg md:text-xl text-text/70 italic tracking-wide"
          >
            {item}
            <span className="mx-8 text-gold/40">·</span>
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="mx-8 font-[family-name:var(--font-shippori)] text-lg md:text-xl text-text/70 italic tracking-wide"
          >
            {item}
            <span className="mx-8 text-gold/40">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
