import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "The GIJUHAN Journal | Insights on AI, Design & Digital Growth",
  description: "Strategic essays from the GIJUHAN lab on AI automation, web strategy, brand identity, digital marketing, and growth systems. Written for founders, marketers, and builders.",
  keywords: ["digital marketing blog","AI automation insights","web strategy blog","brand identity tips","growth strategy blog","design philosophy articles","tech agency blog","startup growth blog","digital transformation insights","marketing systems blog","Kanso simplicity business","AI marketing trends","website strategy tips","branding insights","agency thought leadership"],
  alternates: { canonical: "https://gijuhan.com/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "The GIJUHAN Journal — AI, Design & Marketing Insights",
    description: "Intelligence from the lab. Essays on engineering, design architecture, and the future of digital product growth — built for ambitious brands.",
    url: "https://gijuhan.com/blog",
    type: "website",
    images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630, alt: "The GIJUHAN Journal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheGijuhan",
    creator: "@TheGijuhan",
    title: "GIJUHAN Blog | AI, Branding & Growth Strategy",
    description: "Cut through the noise. Strategic insights on AI, brand building, web strategy, and systems that scale. From the GIJUHAN lab.",
    images: ["https://gijuhan.com/og-image.jpg"],
  },
};

export default function BlogList() {
  return <BlogListClient />;
}
