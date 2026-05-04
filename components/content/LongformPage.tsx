import type { ReactNode } from "react";
import ContactCTA from "@/components/home/ContactCTA";

export type LongformSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export default function LongformPage({
  eyebrow,
  title,
  intro,
  sections,
  supplemental,
  showContactCta = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LongformSection[];
  supplemental?: ReactNode;
  showContactCta?: boolean;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-bg pt-40 pb-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="section-label tracking-[0.2em] font-bold">{eyebrow}</span>
            <span className="h-[1px] w-24 bg-gold/50"></span>
          </div>
          <h1 className="max-w-5xl font-[family-name:var(--font-shippori)] text-5xl font-bold leading-[0.95] tracking-tighter text-text md:text-7xl">
            {title}
          </h1>
          <p className="mt-10 max-w-3xl border-l-[3px] border-gold bg-surface/20 py-4 pl-6 font-[family-name:var(--font-syne)] text-lg leading-relaxed text-text/90 md:text-2xl">
            {intro}
          </p>
          {supplemental ? <div className="mt-10">{supplemental}</div> : null}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-[1000px] space-y-12 px-6 lg:px-12">
          {sections.map((section) => (
            <article key={section.title} className="structural-border bg-bg/60 p-8 md:p-10">
              <h2 className="font-[family-name:var(--font-shippori)] text-3xl font-bold tracking-tighter text-text md:text-4xl">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`}>{paragraph}</p>
                ))}
                {section.items ? (
                  <ul className="space-y-3 border-t border-border pt-6">
                    {section.items.map((item) => (
                      <li key={item} className="text-text/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {showContactCta ? (
        <div className="relative z-20 border-t border-border">
          <ContactCTA />
        </div>
      ) : null}
    </>
  );
}
