import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import CaseStudyArticle from "@/components/work/CaseStudyArticle";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

const title = "Lettuce Eat";
const path = "/work/lettuce-eat";

export const metadata: Metadata = {
  title: "Lettuce Eat Case Study | GIJUHAN",
  description:
    "See how GIJUHAN built a custom Shopify storefront for Lettuce Eat, a Delhi NCR health-food brand focused on subscriptions, nutrition trust, and repeat orders.",
  alternates: {
    canonical: "https://gijuhan.com/work/lettuce-eat",
  },
  openGraph: {
    title: "Lettuce Eat Case Study | GIJUHAN",
    description:
      "A Shopify case study covering UX, subscription design, and conversion architecture for Lettuce Eat.",
    url: "https://gijuhan.com/work/lettuce-eat",
    siteName: "GIJUHAN",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/le1.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lettuce Eat Case Study | GIJUHAN",
    description:
      "How GIJUHAN designed and built a conversion-focused Shopify storefront for Lettuce Eat.",
    images: ["https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/le1.png"],
  },
};

export default function LettuceEatCaseStudyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Work", item: absoluteUrl("/work") },
    { name: title, item: absoluteUrl(path) },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="lettuce-eat-breadcrumb-schema" />
      <CaseStudyArticle
        title={title}
        client="Lettuce Eat"
        industry="Health Food E-Commerce"
        summary="Lettuce Eat needed more than a menu website. They needed a storefront that could explain the value of healthy eating, build trust around nutrition-led meal plans, and convert curious visitors into repeat subscribers across Delhi NCR."
        website="https://lettuceeat.in"
        serviceLinks={[
          { href: "/services/development/shopify-development", label: "Shopify Development" },
          { href: "/services/design/ui-ux-design", label: "UI/UX Design" },
          { href: "/services/marketing/seo-aio", label: "SEO & AIO" },
        ]}
        techStack={["Shopify", "Liquid", "Custom Theme Development", "Subscription UX", "Conversion Design"]}
        screenshots={[
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/le1.png",
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/le2.png",
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/le3.png",
        ]}
        sections={[
          {
            title: "Client Overview",
            paragraphs: [
              "Lettuce Eat operates in a category where purchase decisions are shaped by more than taste. The brand sits at the intersection of convenience, clinical nutrition, and urban lifestyle, serving health-conscious buyers who want practical meal plans rather than another generic food listing. Their audience includes working professionals, fitness-focused consumers, and people actively looking for structured eating options in Delhi NCR. That meant the website had to function as both a storefront and an education layer.",
              "Before the GIJUHAN engagement, the brand challenge was clear: people could discover the food, but the digital experience did not yet translate the full business model. A standard restaurant presentation would have reduced the offer to individual items, while Lettuce Eat’s real value came from a disciplined system built around recurring orders, plan selection, and nutrition confidence. The site needed to explain that logic quickly, especially for first-time users comparing multiple food options on the same day.",
              "Our brief therefore started with positioning. We framed the platform less like a casual takeaway brand and more like a trusted health-commerce destination. The visual system, copy hierarchy, navigation flow, and product storytelling all had to reinforce that customers were not just buying meals, but choosing a repeatable routine. That framing shaped every downstream decision across Shopify architecture, page layouts, checkout pathways, and content structure.",
            ],
          },
          {
            title: "The Challenge",
            paragraphs: [
              "The hardest part of the project was compressing a relatively sophisticated offer into a fast, easy purchase journey. Lettuce Eat had multiple meal-plan tiers, time-based commitments, and a value proposition rooted in health outcomes rather than impulse buying. If we overloaded the product pages with detail, users would drop. If we simplified too aggressively, the offer would look interchangeable with countless food-ordering experiences. The solution needed to balance credibility with speed.",
              "There was also a channel challenge. Lettuce Eat did not exist in a single-commerce environment. Customers might first encounter the brand on Instagram, hear about it from a friend, discover it while searching for healthy meals, or already know it from aggregator platforms such as Zomato and Swiggy. The website therefore needed to work as a central conversion hub while still acknowledging the role of these external ordering channels. We could not pretend the customer journey started and ended on one page.",
              "Operational clarity mattered as much as visual polish. The business needed a structure that could support future campaigns, product updates, and promotional storytelling without becoming difficult to maintain. A theme-heavy quick fix would have made short-term publishing easier but long-term optimisation harder. We approached the build as a scalable commerce system, not a temporary marketing microsite.",
            ],
          },
          {
            title: "Our Solution",
            paragraphs: [
              "GIJUHAN built a custom Shopify storefront designed around decision support. Instead of forcing the visitor into a catalogue-first experience, we structured the homepage and key landing sections to answer the three questions most likely to block conversion: what the brand offers, who it is for, and how the meal plans work. We used clear visual segmentation to separate health-focused education, subscription plan logic, product discovery, and order actions, so the site could guide the user step by step rather than all at once.",
              "One of the most valuable experience layers was the dynamic plan architecture. We translated the Lite, Standard, and Pro offer structure into a format that felt intuitive on first visit, while preserving enough detail to communicate the commercial differences between weekly and monthly commitments. Supporting calculators and score-driven interactions helped the product feel less static and more personal, which was important for a category where users want reassurance that the plan matches their goals, not just their appetite.",
              "On the front end, the visual language stayed clean, appetising, and conversion-minded. We avoided cluttered wellness clichés and built a premium-but-practical tone instead. Product imagery, typography, spacing, and scroll rhythm were tuned to make the brand feel disciplined and trustworthy. At the same time, the integration paths to aggregator platforms remained obvious, so users could choose the ordering route that felt most convenient without losing trust in the Lettuce Eat brand itself.",
            ],
          },
          {
            title: "Launch, Optimisation, and Conversion Architecture",
            paragraphs: [
              "The build was not treated as a one-time design exercise. We planned the structure so the Lettuce Eat team could continue using the storefront as a growth asset. Collection pages, merchandising space, and promotional blocks were arranged to support seasonal changes, new menu pushes, and future campaigns without forcing a redesign. This is where our experience with Shopify development and UI/UX design mattered most: we were designing for today’s launch while preserving tomorrow’s merchandising flexibility.",
              "We also focused on conversion architecture at the micro level. Calls to action were placed where intent naturally rises, not merely where templates usually place buttons. Repetition was used strategically so visitors could enter the purchase path from wherever they felt convinced, whether that happened after reading about benefits, comparing plans, or scanning featured products. This created a smoother journey for high-intent visitors while still giving cautious buyers enough context to make a decision.",
              "The final experience gave Lettuce Eat a digital property that matched the seriousness of the business behind it. Instead of appearing like a small menu site or a lightweight experiment, the brand now has a commerce foundation that supports trust, recurring revenue logic, and long-term content-led growth. The platform turned a complex health-food proposition into a credible, user-friendly store built to perform in a competitive Delhi NCR market.",
            ],
          },
        ]}
        results={[
          "Created a structured Shopify storefront that clearly communicates subscriptions, plan tiers, and the brand’s nutrition-first value proposition.",
          "Improved the path from discovery to order by aligning landing sections, product education, and calls to action around buyer intent.",
          "Established a scalable commerce framework that can support future campaigns, new offers, and merchandising changes without a rebuild.",
          "Strengthened the brand’s credibility by giving Lettuce Eat a digital experience that feels disciplined, premium, and operationally reliable.",
        ]}
      />
    </>
  );
}
