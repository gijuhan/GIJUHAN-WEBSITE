import BlogListClient from "./BlogListClient";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Blog | AI, Design & Digital Marketing Insights — GIJUHAN",
  description:
    "Strategic insights on AI automation, design architecture, digital marketing, and modern web development from the GIJUHAN team.",
  keywords: [
    "AI blog India",
    "design insights",
    "digital marketing articles",
    "web development blog",
    "GIJUHAN blog",
  ],
  alternates: { canonical: "https://gijuhan.com/blog" },
  openGraph: {
    title: "Blog | AI, Design & Digital Marketing Insights — GIJUHAN",
    description:
      "Read strategic insights on automation, design systems, digital marketing, and modern web development from the GIJUHAN team.",
    url: "https://gijuhan.com/blog",
    type: "website",
    locale: "en_IN",
    siteName: "GIJUHAN",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIJUHAN Blog | AI, Design & Digital Marketing Insights",
    description:
      "Strategy and execution notes on AI automation, design architecture, and digital growth from the GIJUHAN team.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
};

export default function BlogList() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Blog", item: absoluteUrl("/blog") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="blog-breadcrumb-schema" />
      <BlogListClient />
    </>
  );
}
