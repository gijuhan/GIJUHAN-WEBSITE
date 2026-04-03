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

export const metadata = {
  title: "GIJUHAN | AI-Powered Tech & Creative Digital Agency",
  description: "GIJUHAN is a global AI tech and creative agency delivering high-impact web design, full-stack development, digital marketing, and intelligent automation solutions. Rooted in Kanso, Kaizen & Iki.",
  keywords: ["AI digital agency","tech and marketing agency","web design agency","full stack development agency","AI automation agency","digital marketing agency","creative tech agency","GIJUHAN","Japanese design philosophy","Kanso Kaizen Iki","brand digital experience","global digital agency","UI UX design agency","web development company","data-driven marketing"],
  alternates: { canonical: "https://gijuhan.com" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "GIJUHAN — Technology Meets Artistry",
    description: "We build immersive, brand-led digital experiences powered by AI and driven by Japanese design philosophy. Design. Development. Marketing. Solutions.",
    url: "https://gijuhan.com",
    type: "website",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630, alt: "GIJUHAN — AI Tech & Creative Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheGijuhan",
    creator: "@TheGijuhan",
    title: "GIJUHAN | AI Tech & Creative Agency",
    description: "High-impact digital products built with AI automation, full-stack engineering, and data-driven marketing. Let's build together.",
    images: ["https://gijuhan.com/og-image.jpg"],
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
