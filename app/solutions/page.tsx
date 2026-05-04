import { Metadata } from "next";
import SolutionsExperience from "@/components/solutions/SolutionsExperience";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Enterprise AI & Data Solutions — Automation, ETL & BI | GIJUHAN",
  description: "GIJUHAN engineers intelligent data pipelines, AI automation agents, ETL/ELT systems, CI/CD infrastructure, and advanced BI dashboards for enterprise-scale growth.",
  keywords: ["AI automation solutions","enterprise data solutions","ETL pipeline development","ELT data engineering","CI/CD pipeline agency","data migration services","business intelligence dashboard","AI agent development","LLM integration services","predictive analytics agency","DevOps automation","data architecture agency","machine learning solutions","data pipeline engineering","AI workflow automation"],
  alternates: { canonical: "https://gijuhan.com/solutions" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enterprise Solutions — GIJUHAN | AI, Data & Automation",
    description: "We architect the silent engines of modern enterprise. AI automation, data migration, ETL pipelines, CI/CD, and predictive analytics built for scale.",
    url: "https://gijuhan.com/solutions",
    type: "website",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630, alt: "GIJUHAN Enterprise Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheGijuhan",
    creator: "@TheGijuhan",
    title: "GIJUHAN Solutions | AI Automation & Data Engineering",
    description: "From AI agents to enterprise data pipelines — we give your business an unfair competitive edge through intelligent system architecture.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
};

export default function SolutionsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Solutions", item: absoluteUrl("/solutions") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="solutions-breadcrumb-schema" />
      <SolutionsExperience />
    </>
  );
}
