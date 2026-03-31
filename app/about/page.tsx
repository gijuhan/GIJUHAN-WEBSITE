import AboutClient from "./AboutClient";

export const metadata = {
  title: "About GIJUHAN | AI Tech & Creative Agency Built Different",
  description: "Learn the story behind GIJUHAN — the fusion of Giju (Technology) and Han (Marketing). Built on Japanese design principles: Kanso (simplicity), Kaizen (improvement), and Iki (purpose).",
  keywords: ["about GIJUHAN","digital agency story","Japanese design agency","Kanso Kaizen Iki philosophy","tech and marketing fusion","creative tech agency","agency philosophy","digital agency India","global creative agency","purposeful design agency","minimal design agency","who is GIJUHAN","agency values","innovative digital agency","AI marketing agency"],
  alternates: { canonical: "https://gijuhan.com/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About GIJUHAN — Where Technology Meets Artistry",
    description: "Born from a vision that the best digital experiences emerge at the intersection of technical precision and creative strategy. Discover the GIJUHAN philosophy.",
    url: "https://gijuhan.com/about",
    type: "website",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630, alt: "About GIJUHAN" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheGijuhan",
    creator: "@TheGijuhan",
    title: "About GIJUHAN | Our Story & Philosophy",
    description: "We rejected the bloated corporate approach to digital. Instead we built GIJUHAN — precise, purposeful, and designed to win.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
