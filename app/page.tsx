import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import AboutTeaser from "@/components/home/AboutTeaser";
import Philosophy from "@/components/home/Philosophy";
import StatsBar from "@/components/home/StatsBar";
import ScrollObjectWrapper from "@/components/three/ScrollObjectWrapper";

// Below-fold sections: lazy loaded to reduce initial JS bundle
const ServicesGrid = dynamic(() => import("@/components/home/ServicesGrid"), {
  ssr: true,
});
const SolutionsMatrix = dynamic(
  () => import("@/components/home/SolutionsMatrix"),
  { ssr: true }
);
const FeaturedWork = dynamic(() => import("@/components/home/FeaturedWork"), {
  ssr: true,
});
const AIHighlight = dynamic(() => import("@/components/home/AIHighlight"), {
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  ssr: true,
});
const BlogTeaser = dynamic(() => import("@/components/home/BlogTeaser"), {
  ssr: true,
});
const ContactCTA = dynamic(() => import("@/components/home/ContactCTA"), {
  ssr: true,
});

export const metadata: Metadata = {
  title:
    "GIJUHAN | AI-Powered Digital Agency — Design, Development & Marketing in India",
  description:
    "GIJUHAN is a Delhi-based AI tech and creative digital agency offering web design, full-stack development, AI automation, and digital marketing services across India.",
  keywords:
    "AI agency India, digital agency Delhi, web design India, Shopify development India, AI automation agency, UI UX design Delhi",
  openGraph: {
    title: "GIJUHAN | AI-Powered Digital Agency in India",
    description: "We build immersive, brand-led digital experiences powered by AI and driven by Japanese design philosophy. Design. Development. Marketing. Solutions.",
    url: "https://gijuhan.com",
    siteName: "GIJUHAN",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIJUHAN | AI-Powered Digital Agency",
    description:
      "Tokyo-inspired digital agency in Delhi — Design, Development, AI & Marketing.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://gijuhan.com",
  },
};

export default function Home() {
  return (
    <>
      <ScrollObjectWrapper />
      <Hero />
      <Marquee />
      <AboutTeaser />
      <ServicesGrid />
      <SolutionsMatrix />
      <Philosophy />
      <StatsBar />
      <FeaturedWork />
      <AIHighlight />
      <Testimonials />
      <BlogTeaser />
      <ContactCTA />
    </>
  );
}
