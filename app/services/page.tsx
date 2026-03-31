import type { Metadata } from "next";
import ServicesExperienceWrapper from "@/components/services/ServicesExperienceWrapper";

export const metadata = {
  title: "Our Services | Web Design, Development & Marketing — GIJUHAN",
  description: "Explore GIJUHAN's full suite of services: UI/UX design, full-stack development, SEO & digital marketing, and platform support. Built for brands that demand results.",
  keywords: ["digital agency services","web design services","web development services","digital marketing services","UI UX design services","full stack development","SEO services","platform support services","branding services","Shopify development","WordPress development","CRM support","DevOps services","creative agency services","technology agency"],
  alternates: { canonical: "https://gijuhan.com/services" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "GIJUHAN Services — Design. Dev. Marketing. Support.",
    description: "From Figma prototypes to AI-powered deployments — every GIJUHAN service is engineered for performance, conversion, and global scale.",
    url: "https://gijuhan.com/services",
    type: "website",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630, alt: "GIJUHAN Services" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheGijuhan",
    creator: "@TheGijuhan",
    title: "GIJUHAN Services | Design, Dev & Marketing",
    description: "Explore our full-spectrum digital services. Crafted with precision. Delivered with purpose.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesExperienceWrapper />;
}
