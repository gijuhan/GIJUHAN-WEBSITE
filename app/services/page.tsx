import type { Metadata } from "next";
import ServicesExperienceWrapper from "@/components/services/ServicesExperienceWrapper";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services | Web Design, AI Development & Marketing — GIJUHAN India",
  description:
    "GIJUHAN offers full-spectrum digital services: UI/UX Design, Full-Stack Development, AI Automation, SEO, Social Media Marketing, and CRM Support across India.",
  keywords: [
    "digital agency services India",
    "web design India",
    "AI development India",
    "SEO agency Delhi",
    "Shopify development India",
  ],
  alternates: { canonical: "https://gijuhan.com/services" },
  openGraph: {
    title: "Services | Web Design, AI Development & Marketing — GIJUHAN India",
    description:
      "Explore GIJUHAN's service stack across design, development, marketing, AI automation, and technical support.",
    url: "https://gijuhan.com/services",
    type: "website",
    locale: "en_IN",
    siteName: "GIJUHAN",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIJUHAN Services | Web Design, AI Development & Marketing",
    description:
      "Explore our full-spectrum digital services across design, development, automation, marketing, and support.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Services", item: absoluteUrl("/services") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="services-breadcrumb-schema" />
      <ServicesExperienceWrapper />
    </>
  );
}
