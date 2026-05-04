import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import CaseStudyArticle from "@/components/work/CaseStudyArticle";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

const title = "Chandini & Priyanka";
const path = "/work/chandini-priyanka";

export const metadata: Metadata = {
  title: "Chandini & Priyanka Case Study | GIJUHAN",
  description:
    "See how GIJUHAN built a luxury Shopify storefront for Chandini & Priyanka with premium brand storytelling, refined UX, and a polished D2C buying experience.",
  alternates: {
    canonical: "https://gijuhan.com/work/chandini-priyanka",
  },
  openGraph: {
    title: "Chandini & Priyanka Case Study | GIJUHAN",
    description:
      "A luxury fashion Shopify case study covering premium UX, storytelling, and brand-aligned e-commerce design.",
    url: "https://gijuhan.com/work/chandini-priyanka",
    siteName: "GIJUHAN",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/C%26P1.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandini & Priyanka Case Study | GIJUHAN",
    description:
      "How GIJUHAN translated a premium fashion label into a custom Shopify storefront.",
    images: ["https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/C%26P1.png"],
  },
};

export default function ChandiniPriyankaCaseStudyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Work", item: absoluteUrl("/work") },
    { name: title, item: absoluteUrl(path) },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="chandini-priyanka-breadcrumb-schema" />
      <CaseStudyArticle
        title={title}
        client="Chandini & Priyanka"
        industry="Luxury Fashion E-Commerce"
        summary="Chandini & Priyanka needed a digital storefront that felt as composed and premium as the garments themselves. GIJUHAN designed a Shopify experience that supports storytelling, elevates brand perception, and turns product discovery into a confident luxury purchase journey."
        website="https://chandiniandpriyanka.com"
        serviceLinks={[
          { href: "/services/development/shopify-development", label: "Shopify Development" },
          { href: "/services/design/graphic-designing", label: "Graphic Designing" },
          { href: "/services/design/ui-ux-design", label: "UI/UX Design" },
        ]}
        techStack={["Shopify", "Luxury UX Strategy", "Custom Theme Design", "Editorial Storytelling", "Mobile Commerce"]}
        screenshots={[
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/C%26P1.png",
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/c%26p2.png",
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/c%26p3.png",
        ]}
        sections={[
          {
            title: "Client Overview",
            paragraphs: [
              "Chandini & Priyanka operates in a category where brand perception is inseparable from commercial performance. For a premium fashion label, the product itself is only part of the purchase decision. The rest comes from how the collection is presented, how the buyer experiences the brand online, and whether the website creates the same sense of authority that a customer would expect from a luxury retail environment. The digital storefront therefore had to do more than list products beautifully.",
              "The label already had a strong visual identity and a clear point of view. What it needed was a commerce experience capable of carrying that identity without flattening it into a standard Shopify template. In luxury retail, sameness is expensive. The wrong hierarchy, a crowded product page, or generic merchandising patterns can make premium collections feel ordinary. Our role was to protect the brand language while still making the store easy to browse, search, and buy from.",
              "This called for a careful balance between editorial presentation and retail functionality. Customers needed to move through the catalogue with confidence, but they also needed enough atmosphere to feel the brand before making a purchase. That blend of restraint and richness became the foundation of the entire build.",
            ],
          },
          {
            title: "The Challenge",
            paragraphs: [
              "Luxury fashion websites often fail in one of two ways. Some over-index on aesthetics and make the path to purchase slow, unclear, or frustrating. Others over-optimise for transactions and strip away the emotional value that justifies a premium price point. Chandini & Priyanka could not afford either mistake. The site had to support product-led buying while still reinforcing exclusivity, taste, and brand confidence at every step.",
              "Another challenge was device behaviour. A meaningful share of premium fashion browsing now happens on mobile, where visual storytelling has to work within tighter space and faster decision windows. Product imagery, collection navigation, spacing, typography, and add-to-cart flows all had to feel refined on smaller screens without becoming ornamental or slow. Mobile was not a secondary adaptation. It was a primary commerce environment.",
              "We also needed to give the team a platform that could evolve with future launches. Seasonal drops, collection refreshes, campaigns, and merchandising changes should not require structural rework. The architecture needed enough discipline to scale cleanly while preserving the emotional tone of the brand.",
            ],
          },
          {
            title: "Our Solution",
            paragraphs: [
              "GIJUHAN approached the project as a luxury commerce system rather than a themed storefront. We built the Shopify experience around visual cadence, product framing, and friction-aware retail UX. That meant using editorial composition where it added value, but keeping product discovery, navigation, and purchase mechanics direct enough that the shopper never had to work to understand the store. The design language stayed elevated without becoming distant.",
              "We gave special attention to typography, whitespace, and image treatment because those details carry disproportionate weight in premium fashion. Collections needed space to breathe. Product pages needed to feel intentional, not stacked. The interface was therefore designed to pace the customer through the catalogue instead of overwhelming them with dense grids and competing elements. Every layout decision aimed to make the product feel more desirable and the buying process more assured.",
              "On the technical side, the storefront was structured for stability and flexibility. The build supports ongoing merchandising updates, new campaigns, and collection management while keeping the customer-facing experience coherent. That combination of brand control and platform practicality is what made Shopify the right foundation, and what made a custom build necessary instead of a faster off-the-shelf approach.",
            ],
          },
          {
            title: "Commerce Experience and Brand Impact",
            paragraphs: [
              "The most important outcome of the project was alignment. The website now speaks in the same tone as the label itself. Instead of feeling like a sales layer attached to the brand, it feels like an extension of the brand. That matters because luxury conversion does not come purely from urgency mechanics; it comes from trust, presentation quality, and the confidence that the purchase environment matches the standards of the product being sold.",
              "We designed the site to support browsing behaviour that is common in premium fashion: users move between discovery, comparison, and reaffirmation before purchasing. The storefront therefore gives them room to explore while keeping commerce controls accessible. The result is an experience that does not force the shopper to choose between atmosphere and usability. Both are present, and both reinforce the other.",
              "By the end of the engagement, Chandini & Priyanka had a digital flagship capable of supporting D2C growth without sacrificing brand equity. The platform now helps the team present collections with authority, maintain a premium visual standard, and run future campaigns from a stronger technical and UX foundation.",
            ],
          },
        ]}
        results={[
          "Delivered a custom Shopify storefront that reflects premium brand positioning instead of relying on a generic luxury theme.",
          "Improved the mobile and desktop buying experience by balancing editorial storytelling with a clean, conversion-friendly product journey.",
          "Created a scalable structure for future collections, campaigns, and merchandising updates without compromising visual consistency.",
          "Strengthened D2C credibility by giving the label a digital flagship that feels aligned with the quality of its products.",
        ]}
      />
    </>
  );
}
