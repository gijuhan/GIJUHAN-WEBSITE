import Link from "next/link";
import Image from "next/image";
import ContactCTA from "@/components/home/ContactCTA";

type CaseStudySection = {
  title: string;
  paragraphs: string[];
};

type CaseStudyLink = {
  href: string;
  label: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export default function CaseStudyArticle({
  title,
  client,
  industry,
  summary,
  website,
  serviceLinks,
  techStack,
  screenshots,
  sections,
  results,
  testimonial,
}: {
  title: string;
  client: string;
  industry: string;
  summary: string;
  website?: string;
  serviceLinks: CaseStudyLink[];
  techStack: string[];
  screenshots: string[];
  sections: CaseStudySection[];
  results: string[];
  testimonial?: Testimonial;
}) {
  const heroImage = screenshots[0];
  const galleryImages = screenshots.slice(1);

  return (
    <>
      <article className="bg-bg">
        <section className="relative overflow-hidden pt-40 pb-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border bg-surface/60 px-4 py-2 font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-gold uppercase">
                Case Study
              </span>
              <span className="rounded-full border border-border bg-surface/60 px-4 py-2 font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-text uppercase">
                {industry}
              </span>
              <span className="rounded-full border border-border bg-surface/60 px-4 py-2 font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-text uppercase">
                {client}
              </span>
            </div>

            <h1 className="max-w-5xl font-[family-name:var(--font-shippori)] text-5xl font-bold leading-[0.95] tracking-tighter text-text md:text-7xl">
              {title} Case Study
            </h1>
            <p className="mt-10 max-w-3xl border-l-[3px] border-gold bg-surface/20 py-4 pl-6 font-[family-name:var(--font-syne)] text-lg leading-relaxed text-text/90 md:text-2xl">
              {summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border px-4 py-2 font-[family-name:var(--font-syne)] text-xs tracking-[0.25em] text-text uppercase transition-colors hover:border-gold hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              {website ? (
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gold/40 px-4 py-2 font-[family-name:var(--font-syne)] text-xs tracking-[0.25em] text-gold uppercase transition-colors hover:border-gold hover:bg-gold/10"
                >
                  Visit Website
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface/40 py-12">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="relative overflow-hidden structural-border bg-bg">
              <div className="relative aspect-[16/9]">
                <Image
                  src={heroImage}
                  alt={`${title} primary screenshot`}
                  fill
                  priority={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg py-20">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-4">
              <div className="sticky top-28 structural-border bg-surface/50 p-8">
                <span className="section-label mb-6 block">Tech Stack Used</span>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-4 py-2 font-[family-name:var(--font-syne)] text-xs tracking-[0.2em] text-text uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 border-t border-border pt-6">
                  <span className="section-label mb-4 block">Relevant Services</span>
                  <div className="space-y-3">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm tracking-[0.2em] text-text uppercase transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 lg:col-span-8">
              {sections.map((section) => (
                <article key={section.title} className="structural-border bg-surface/30 p-8 md:p-10">
                  <h2 className="font-[family-name:var(--font-shippori)] text-3xl font-bold tracking-tighter text-text md:text-4xl">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.title}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}

              <article className="structural-border bg-surface/30 p-8 md:p-10">
                <h2 className="font-[family-name:var(--font-shippori)] text-3xl font-bold tracking-tighter text-text md:text-4xl">
                  Results & Impact
                </h2>
                <ul className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
                  {results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </article>

              {testimonial ? (
                <article className="border border-gold/30 bg-gold/10 p-8 md:p-10">
                  <span className="section-label mb-6 block">Testimonial</span>
                  <blockquote className="font-[family-name:var(--font-shippori)] text-2xl leading-relaxed text-text md:text-3xl">
                    “{testimonial.quote}”
                  </blockquote>
                  <p className="mt-6 font-[family-name:var(--font-syne)] text-sm tracking-[0.2em] text-gold uppercase">
                    {testimonial.name} · {testimonial.role} · {testimonial.company}
                  </p>
                </article>
              ) : null}

              {galleryImages.length ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {galleryImages.map((image, index) => (
                    <div key={image} className="relative overflow-hidden structural-border bg-surface">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={image}
                          alt={`${title} screenshot ${index + 2}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </article>

      <div className="relative z-20 border-t border-border">
        <ContactCTA />
      </div>
    </>
  );
}
