import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About GIJUHAN | Tokyo-Inspired AI Digital Agency in Delhi, India",
  description:
    "Learn about GIJUHAN — a Delhi-based digital agency founded on Japanese design philosophy (Kanso, Kaizen, Iki). We build AI-driven digital experiences that convert.",
  keywords: [
    "about GIJUHAN",
    "digital agency Delhi",
    "AI agency India",
    "Japanese design philosophy",
    "Kanso Kaizen Iki",
    "Delhi digital agency",
  ],
  alternates: { canonical: "https://gijuhan.com/about" },
  openGraph: {
    title: "About GIJUHAN | Tokyo-Inspired AI Digital Agency in Delhi, India",
    description:
      "Meet the Delhi-based team behind GIJUHAN and learn how Japanese design philosophy shapes our AI, design, and development work.",
    url: "https://gijuhan.com/about",
    type: "website",
    locale: "en_IN",
    siteName: "GIJUHAN",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About GIJUHAN | Tokyo-Inspired AI Digital Agency",
    description: "We rejected the bloated corporate approach to digital. Instead we built GIJUHAN — precise, purposeful, and designed to win.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
  other: {
    addressLocality: "Delhi",
    addressCountry: "India",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "About", item: absoluteUrl("/about") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="about-breadcrumb-schema" />
      <AboutClient />
    </>
  );
}
