import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import LongformPage from "@/components/content/LongformPage";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Agency in Delhi | Web Design & Marketing — GIJUHAN",
  description:
    "GIJUHAN is a digital agency in Delhi helping Delhi NCR businesses with web design, development, AI automation, and digital marketing built for local and national growth.",
  alternates: {
    canonical: "https://gijuhan.com/digital-agency-delhi",
  },
};

export default function DigitalAgencyDelhiPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Digital Agency in Delhi", item: absoluteUrl("/digital-agency-delhi") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="digital-agency-delhi-breadcrumb-schema" />
      <LongformPage
        eyebrow="Delhi NCR"
        title="Digital Agency in Delhi"
        intro="GIJUHAN is a Delhi-based digital agency serving founders, local businesses, D2C brands, and growing companies across Delhi NCR with design, development, AI, and marketing built for real commercial use."
        supplemental={
          <div className="flex flex-wrap gap-3">
            <Link href="/services/design" className="rounded-full border border-border px-4 py-2 text-xs tracking-[0.2em] text-text uppercase hover:border-gold hover:text-gold">
              Design Services
            </Link>
            <Link href="/services/development" className="rounded-full border border-border px-4 py-2 text-xs tracking-[0.2em] text-text uppercase hover:border-gold hover:text-gold">
              Development Services
            </Link>
            <Link href="/services/marketing" className="rounded-full border border-border px-4 py-2 text-xs tracking-[0.2em] text-text uppercase hover:border-gold hover:text-gold">
              Marketing Services
            </Link>
            <Link href="/work/lettuce-eat" className="rounded-full border border-border px-4 py-2 text-xs tracking-[0.2em] text-text uppercase hover:border-gold hover:text-gold">
              Delhi Case Study
            </Link>
          </div>
        }
        sections={[
          {
            title: "A Delhi agency that understands the market on the ground",
            paragraphs: [
              "Searching for a digital agency in Delhi usually means you do not need theory. You need a team that understands how businesses in Delhi NCR actually sell, compete, and communicate. That includes working across fast-moving local markets, balancing Hindi and English audience behaviour, and making digital decisions that support both immediate lead generation and long-term brand positioning. GIJUHAN was built for that kind of work.",
              "Delhi businesses operate in one of the most crowded and opportunity-rich markets in India. Whether you are a service company in Dwarka, a D2C brand targeting Gurgaon and Noida buyers, or a founder building a product for a national audience from Delhi, your website and marketing systems cannot afford to feel generic. The local market is too competitive, customer attention is too fragmented, and buyers compare credibility quickly.",
              "Our advantage is that we combine local market awareness with a broader digital production mindset. We do not approach Delhi brands like one-city businesses with limited ambition. We help them build digital systems that perform locally and scale nationally, whether that means a better lead-generation website, a more persuasive Shopify build, stronger search visibility, or automation that reduces operating friction.",
            ],
          },
          {
            title: "What GIJUHAN does for Delhi NCR businesses",
            paragraphs: [
              "As a digital agency in Delhi, we work across the stack rather than only one discipline. Some clients need UI/UX design and web development because their current site looks dated or converts poorly. Others need SEO, paid campaigns, and social content support because they already have a website but no sustained traffic engine. Increasingly, companies also need AI automation and smarter operations, especially when enquiry handling, reporting, or internal workflows are consuming too much manual time.",
              "That is why our service model covers design, development, marketing, and support. We build custom websites, high-conversion landing pages, Shopify stores, WordPress platforms, content systems, and growth campaigns. We also help with AI integration, CRM support, and technical maintenance so businesses can work with one team that understands how all the pieces connect instead of coordinating disconnected specialists.",
              "For Delhi NCR businesses, this integrated model is practical. The local market moves quickly, and teams often do not have time to manage separate design, development, and marketing vendors while also running day-to-day operations. GIJUHAN acts as a focused execution partner, aligning the visual layer, technical layer, and acquisition layer around a single commercial objective.",
            ],
          },
          {
            title: "Bilingual support, local context, and growth beyond Delhi",
            paragraphs: [
              "One of the realities of working in Delhi is that communication often needs to flex between English-first brand language and more locally intuitive messaging. Even when the final website is in English, campaign framing, social positioning, and user expectations are shaped by regional context. We understand this because we work from inside the market rather than trying to interpret it from a distance.",
              "That local familiarity helps in practical ways. It improves how service businesses describe themselves, how D2C stores frame trust signals, how landing pages speak to buyer pain points, and how campaigns are structured for audiences who may move between Instagram, WhatsApp, Google Search, and direct referral channels in a single buying journey. Digital execution works better when the team building it understands how the audience really behaves.",
              "At the same time, our work is not limited to hyperlocal goals. Many Delhi-based companies want to look more credible nationally or globally without losing the sharpness of their local positioning. We help create that balance by designing systems that feel polished enough for wider growth while still being grounded in the realities of Delhi NCR buyer behaviour.",
            ],
          },
          {
            title: "Case-study-led execution, not vague agency promises",
            paragraphs: [
              "GIJUHAN is not interested in promising everything to everyone. We prefer showing how work maps to business needs. Our Delhi-linked experience with projects such as Lettuce Eat demonstrates how we approach local market nuance, conversion structure, and platform execution in a practical way. That same mindset carries into service websites, AI-led systems, and broader digital growth work for other brands.",
              "If you are evaluating a digital agency in Delhi, the useful question is not which agency says the most. It is which one can translate your business model into a system that customers understand and your team can actually use. That means better user journeys, faster performance, stronger content hierarchy, clearer offers, and more intelligent acquisition planning.",
              "GIJUHAN works best with businesses that want thoughtful execution and commercial clarity. If you need a Delhi digital agency that can design, build, optimise, and support the full digital layer of your business, we are structured to do exactly that.",
            ],
          },
        ]}
      />
    </>
  );
}
