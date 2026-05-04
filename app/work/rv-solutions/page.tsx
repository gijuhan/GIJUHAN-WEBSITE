import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import CaseStudyArticle from "@/components/work/CaseStudyArticle";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

const title = "RV Solutions";
const path = "/work/rv-solutions";

export const metadata: Metadata = {
  title: "RV Solutions Case Study | GIJUHAN",
  description:
    "See how GIJUHAN rebuilt RV Solutions' web presence with WordPress, better service architecture, clearer lead generation flows, and stronger SEO foundations.",
  alternates: {
    canonical: "https://gijuhan.com/work/rv-solutions",
  },
  openGraph: {
    title: "RV Solutions Case Study | GIJUHAN",
    description:
      "A WordPress and B2B website case study focused on service clarity, trust-building, and inbound lead generation.",
    url: "https://gijuhan.com/work/rv-solutions",
    siteName: "GIJUHAN",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/rv2.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Solutions Case Study | GIJUHAN",
    description:
      "How GIJUHAN built a stronger B2B website foundation for RV Solutions using WordPress and SEO-led information architecture.",
    images: ["https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/rv2.jpg"],
  },
};

export default function RvSolutionsCaseStudyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Work", item: absoluteUrl("/work") },
    { name: title, item: absoluteUrl(path) },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="rv-solutions-breadcrumb-schema" />
      <CaseStudyArticle
        title={title}
        client="RV Solutions"
        industry="B2B Corporate Website"
        summary="RV Solutions needed a corporate website that could explain its service capabilities clearly, build trust with B2B buyers, and generate higher-quality enquiries from a more structured digital presence. GIJUHAN rebuilt the experience around clarity, authority, and search-ready architecture."
        website="https://rvsolutions.org.in"
        serviceLinks={[
          { href: "/services/development/wordpress-development", label: "WordPress Development" },
          { href: "/services/marketing/seo-aio", label: "SEO & AIO" },
          { href: "/services/support/cms-support", label: "CMS Support" },
        ]}
        techStack={["WordPress", "Custom Page Architecture", "SEO Foundations", "Lead Capture UX", "Content Structuring"]}
        screenshots={[
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/rv2.jpg",
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/rv3.jpg",
          "https://3ogl08hjksjgbrka.public.blob.vercel-storage.com/images/rv1.jpg",
        ]}
        sections={[
          {
            title: "Client Overview",
            paragraphs: [
              "RV Solutions operates in a B2B environment where trust, clarity, and responsiveness matter more than visual novelty. Buyers arriving on the website are not looking for entertainment. They want to understand what the company does, whether it looks credible, and how quickly they can determine if the team is relevant to their operational requirement. That places unusual pressure on structure: every navigation label, service page, and contact touchpoint has to work hard.",
              "The company needed a website that could serve as a dependable first filter for inbound enquiries. The old experience did not communicate the breadth of capability clearly enough, and it did not create a strong enough sense of authority for a business trying to win professional conversations. In B2B sectors, vague messaging or thin page structure can quietly erode trust before a prospect ever reaches out.",
              "Our objective was therefore not simply to modernise the design. It was to build a digital presence that could act like a business development asset: clear in positioning, direct in service explanation, easy to manage internally, and technically sound enough to support search visibility and future content growth.",
            ],
          },
          {
            title: "The Challenge",
            paragraphs: [
              "One challenge was audience intent. Unlike consumer websites, where visitors may browse casually, B2B visitors often arrive with a specific need. They want to know whether the company understands their problem and whether the website demonstrates enough professionalism to justify a conversation. That meant RV Solutions could not rely on broad marketing language or generic page layouts. The site needed service clarity from the first few scrolls.",
              "There was also a content hierarchy challenge. Businesses like RV Solutions often have multiple offerings that overlap in how they are described internally, but online those overlaps can confuse buyers. We had to separate services cleanly, reduce ambiguity, and make the most important commercial information easier to scan. This required stronger information architecture, clearer call-to-action placement, and content framing that reflected how a prospect evaluates vendors.",
              "Finally, the platform had to remain manageable for the internal team after launch. The business needed the flexibility to update pages, add content, and respond to new opportunities without becoming dependent on developers for every small change. WordPress was therefore a strategic decision as much as a technical one.",
            ],
          },
          {
            title: "Our Solution",
            paragraphs: [
              "GIJUHAN rebuilt the RV Solutions website on WordPress with an emphasis on authority-led communication. We structured the page system around service understanding first, visual polish second. That did not mean the site became plain. It meant every visual choice served comprehension, trust, and lead flow. The layout system, spacing, headings, and component rhythm were all tuned to make the company appear organised, serious, and easy to evaluate.",
              "We redesigned the information architecture so that prospects could move from homepage to service understanding without friction. Core services were separated more clearly, supporting content was reorganised, and enquiry opportunities were placed at the moments where intent naturally increases. This reduced the cognitive work required from the visitor and made the site more useful as a pre-sales touchpoint. The website now helps qualify conversations instead of merely collecting them.",
              "From an SEO and content perspective, we laid a stronger technical foundation for future discovery. Pages were planned with cleaner hierarchy, clearer topical focus, and a more disciplined structure for headings and sections. That gives RV Solutions a better base for organic growth over time while also making the current site easier to read, easier to maintain, and easier to expand.",
            ],
          },
          {
            title: "Operational Impact After Launch",
            paragraphs: [
              "The finished site gives RV Solutions a more credible digital front door. Prospects can now understand the business faster, evaluate key services more confidently, and contact the company through clearer pathways. For a B2B brand, that is a substantial advantage because the website often shapes the tone of the first interaction before sales ever gets involved.",
              "Internally, the WordPress setup also improves control. The team can update service copy, publish supporting content, and maintain the site more independently than before. That matters because a website only becomes a long-term business asset when it can evolve without friction. A static site that looks good on launch day but becomes difficult to maintain usually degrades quickly as the business changes.",
              "Overall, the project moved RV Solutions from having a basic web presence to owning a more structured, more persuasive, and more search-ready B2B platform. The site now supports credibility, lead generation, and future growth in a way that is far better aligned with the company’s commercial goals.",
            ],
          },
        ]}
        results={[
          "Rebuilt the site around clear B2B service communication so prospects can understand capability faster and with more confidence.",
          "Improved lead-generation readiness through stronger CTAs, cleaner page hierarchy, and more deliberate enquiry pathways.",
          "Created a maintainable WordPress foundation that allows the internal team to update content without heavy developer dependency.",
          "Established stronger SEO and content architecture for long-term organic visibility and authority building.",
        ]}
      />
    </>
  );
}
