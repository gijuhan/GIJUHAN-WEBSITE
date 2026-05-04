import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import WorkPageClient from "./WorkPageClient";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Work | Case Studies & Digital Projects — GIJUHAN",
  description:
    "Explore GIJUHAN case studies across Shopify development, WordPress websites, AI platforms, and digital product builds for brands in India.",
  alternates: {
    canonical: "https://gijuhan.com/work",
  },
  openGraph: {
    title: "Work | Case Studies & Digital Projects — GIJUHAN",
    description:
      "Browse selected GIJUHAN work across e-commerce, web development, AI automation, and digital product design.",
    url: "https://gijuhan.com/work",
    siteName: "GIJUHAN",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | GIJUHAN Case Studies",
    description:
      "Browse selected GIJUHAN work across e-commerce, web development, AI automation, and digital product design.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
};

export default function WorkPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Work", item: absoluteUrl("/work") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="work-breadcrumb-schema" />
      <WorkPageClient />
    </>
  );
}
