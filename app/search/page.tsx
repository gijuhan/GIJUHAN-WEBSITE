import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { BLOG_POSTS, CASE_STUDIES, SERVICES } from "@/lib/constants";
import { SUB_SERVICES } from "@/lib/sub-services";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

type SearchResult = {
  href: string;
  title: string;
  description: string;
  category: string;
};

export const metadata: Metadata = {
  title: "Search | GIJUHAN",
  description: "Search GIJUHAN pages, case studies, and blog content.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://gijuhan.com/search",
  },
};

function buildResults(query: string): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const subServiceResults = Object.entries(SUB_SERVICES).flatMap(([group, services]) =>
    services.map((service) => ({
      href: group === "solutions" ? `/solutions/${service.slug}` : `/services/${group}/${service.slug}`,
      title: service.title,
      description: service.description,
      category: group === "solutions" ? "Solution" : "Service",
    }))
  );

  const results: SearchResult[] = [
    ...SERVICES.filter(
      (service) =>
        service.title.toLowerCase().includes(normalizedQuery) ||
        service.description.toLowerCase().includes(normalizedQuery)
    ).map((service) => ({
      href: service.href,
      title: service.title,
      description: service.description,
      category: "Service Category",
    })),
    ...subServiceResults.filter(
      (service) =>
        service.title.toLowerCase().includes(normalizedQuery) ||
        service.description.toLowerCase().includes(normalizedQuery)
    ),
    ...CASE_STUDIES.filter(
      (study) =>
        study.title.toLowerCase().includes(normalizedQuery) ||
        study.description.toLowerCase().includes(normalizedQuery) ||
        study.challenge.toLowerCase().includes(normalizedQuery) ||
        study.solution.toLowerCase().includes(normalizedQuery)
    ).map((study) => ({
      href: `/work/${study.slug}`,
      title: study.title,
      description: study.description,
      category: "Case Study",
    })),
    ...BLOG_POSTS.filter(
      (post) =>
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery)
    ).map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      category: "Blog",
    })),
  ];

  return results;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const results = buildResults(q);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Search", item: absoluteUrl("/search") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="search-breadcrumb-schema" />
      <section className="bg-bg pt-40 pb-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="section-label tracking-[0.2em] font-bold">Search</span>
            <span className="h-[1px] w-24 bg-gold/50"></span>
          </div>
          <h1 className="font-[family-name:var(--font-shippori)] text-5xl font-bold leading-[0.95] tracking-tighter text-text md:text-7xl">
            Search GIJUHAN
          </h1>
          <p className="mt-8 max-w-3xl border-l-[3px] border-gold bg-surface/20 py-4 pl-6 font-[family-name:var(--font-syne)] text-lg leading-relaxed text-text/90">
            Search across services, solutions, case studies, and insights using the query parameter in the URL. Example: <span className="text-gold">/search?q=shopify</span>
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-[1000px] space-y-6 px-6 lg:px-12">
          <div className="structural-border bg-bg/60 p-8">
            <span className="section-label mb-4 block">Query</span>
            <p className="font-[family-name:var(--font-shippori)] text-3xl text-text">
              {q ? `"${q}"` : "No query provided"}
            </p>
          </div>

          {results.length ? (
            results.map((result) => (
              <Link
                key={`${result.category}-${result.href}`}
                href={result.href}
                className="block structural-border bg-bg/60 p-8 transition-colors hover:border-gold/50 hover:bg-gold/5"
              >
                <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-gold uppercase">
                  {result.category}
                </span>
                <h2 className="mt-3 font-[family-name:var(--font-shippori)] text-3xl font-bold tracking-tighter text-text">
                  {result.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{result.description}</p>
              </Link>
            ))
          ) : (
            <div className="structural-border bg-bg/60 p-8">
              <p className="text-lg leading-relaxed text-muted">
                {q
                  ? "No matching results were found. Try a broader keyword such as design, Shopify, AI, or SEO."
                  : "Add a search query in the URL to see matching pages."}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
