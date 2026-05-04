import type { FaqItem } from "@/lib/seo";

export type ServiceCategoryPage = {
  title: string;
  subtitle: string;
  hero: string;
  kanji: string;
  tech: string[];
  seoTitle: string;
  seoDescription: string;
  serviceType: string;
  summary: string;
  url: string;
  faqs: FaqItem[];
};

export const SERVICE_CATEGORY_PAGES: Record<string, ServiceCategoryPage> = {
  design: {
    title: "Design",
    subtitle: "Digital Aesthetics",
    hero: "Interfaces that captivate, inform, and convert — blending high-end aesthetics with flawless usability.",
    kanji: "設計",
    tech: ["Figma", "Framer", "WebGL", "Three.js", "GSAP", "Adobe CC"],
    seoTitle: "UI/UX Design Services in India | Web, Mobile & Figma Design — GIJUHAN",
    seoDescription:
      "GIJUHAN delivers UI/UX design, design systems, and Figma prototyping for startups and growing brands in India. We create high-conversion web and mobile experiences grounded in research and visual clarity.",
    serviceType: "UI UX Design",
    summary:
      "GIJUHAN designs conversion-focused interfaces for websites, mobile apps, dashboards, and digital products. Our Delhi-based team combines research, wireframing, prototyping, and brand design to create experiences that feel premium and perform in the Indian market.",
    url: "/services/design",
    faqs: [
      {
        question: "How much does UI/UX design cost in India?",
        answer:
          "Our UI/UX design engagements typically start at ₹35,000 for focused interface work and scale based on research depth, screen count, and product complexity.",
      },
      {
        question: "What tools do you use for design projects?",
        answer:
          "We primarily use Figma for wireframes, prototypes, and design systems, and Adobe Creative Cloud for visual assets, illustration, and production-ready graphics.",
      },
      {
        question: "Do you design for both web and mobile products?",
        answer:
          "Yes. We design responsive web platforms, mobile apps, dashboards, and product ecosystems with layouts tailored for desktop, tablet, iOS, and Android devices.",
      },
      {
        question: "How long does a design project usually take?",
        answer:
          "A typical design sprint takes 2 to 6 weeks depending on the number of user journeys, the level of research required, and whether a design system is being created from scratch.",
      },
      {
        question: "Can GIJUHAN redesign an existing website or app?",
        answer:
          "Yes. We regularly handle redesign projects to improve usability, visual consistency, mobile performance, and conversion rates without losing what already works in your business.",
      },
    ],
  },
  development: {
    title: "Development",
    subtitle: "Precision Engineering",
    hero: "From scalable architectures to complex interactive frontends — we build digital products that perform flawlessly.",
    kanji: "開発",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
    ],
    seoTitle: "Web Development Services in India | Full-Stack, Shopify & WordPress — GIJUHAN",
    seoDescription:
      "GIJUHAN builds high-performance websites and applications for Indian businesses using Next.js, Shopify, WordPress, and modern full-stack tooling. We handle architecture, frontend, backend, and launch support.",
    serviceType: "Web Development",
    summary:
      "GIJUHAN engineers websites, e-commerce builds, custom apps, and scalable backend systems for brands across India. From Shopify storefronts to enterprise-grade full-stack platforms, we focus on speed, maintainability, and measurable business outcomes.",
    url: "/services/development",
    faqs: [
      {
        question: "What types of development projects does GIJUHAN handle?",
        answer:
          "We build marketing websites, Shopify stores, WordPress platforms, custom web apps, internal dashboards, APIs, and end-to-end full-stack products for startups and established businesses.",
      },
      {
        question: "How much does web development cost in India?",
        answer:
          "Project pricing usually starts around ₹75,000 for focused website builds and increases with custom integrations, backend complexity, e-commerce requirements, and platform scale.",
      },
      {
        question: "Do you work with Shopify, WordPress, and custom stacks?",
        answer:
          "Yes. Our team works across Shopify, WordPress, Next.js, React, Node.js, and custom backend architectures depending on your business goals and technical requirements.",
      },
      {
        question: "How long does a typical development project take?",
        answer:
          "Most website and application builds take 4 to 12 weeks. We define scope, milestones, and launch timelines before development begins so expectations stay clear.",
      },
      {
        question: "Do you provide post-launch maintenance and support?",
        answer:
          "Yes. We offer deployment support, performance optimization, bug fixes, feature iterations, and ongoing technical maintenance after launch.",
      },
    ],
  },
  marketing: {
    title: "Marketing",
    subtitle: "Growth & Strategy",
    hero: "Data-driven creative strategies that command attention, boost visibility, and drive qualified global traffic.",
    kanji: "販売",
    tech: [
      "SEO/AIO",
      "Google Ads",
      "Meta Ads",
      "Analytics",
      "HubSpot",
      "Programmatic",
    ],
    seoTitle: "Digital Marketing Services in India | SEO, Social Media & PPC — GIJUHAN",
    seoDescription:
      "GIJUHAN helps Indian brands grow through SEO, AI-ready content, social media marketing, paid media, and conversion strategy. Our campaigns are built to improve visibility, leads, and revenue.",
    serviceType: "Digital Marketing",
    summary:
      "GIJUHAN runs performance-minded digital marketing for businesses that need stronger visibility and better lead quality in India. We combine SEO, paid acquisition, content strategy, analytics, and social media execution into one measurable growth system.",
    url: "/services/marketing",
    faqs: [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "We provide SEO, AI-ready content strategy, social media marketing, PPC campaign management, analytics reporting, and conversion-focused growth planning.",
      },
      {
        question: "How much do digital marketing services cost in India?",
        answer:
          "Monthly retainers typically start at ₹30,000 for focused campaigns and grow based on ad spend, channel mix, reporting requirements, and campaign scale.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a medium-term channel. Most businesses begin seeing meaningful traction within 3 to 6 months when technical fixes, content, and authority building are executed consistently.",
      },
      {
        question: "Do you manage both organic and paid acquisition?",
        answer:
          "Yes. We manage organic search, content optimization, Google Ads, Meta campaigns, and reporting so your brand can balance long-term visibility with short-term lead generation.",
      },
      {
        question: "Can GIJUHAN work with startups and local service businesses?",
        answer:
          "Yes. We tailor strategy for startups, D2C brands, professional services, and local businesses that need stronger positioning and demand generation in competitive markets.",
      },
    ],
  },
  support: {
    title: "Support",
    subtitle: "Always By Your Side",
    hero: "Dedicated platform support and continuous optimization ensuring your digital infrastructure scales flawlessly.",
    kanji: "支援",
    tech: ["Datadog", "Sentry", "Vercel", "Kubernetes", "CI/CD", "Cloudflare"],
    seoTitle: "Technical Support Services in India | CRM, CMS & Platform Support — GIJUHAN",
    seoDescription:
      "GIJUHAN provides CRM support, CMS maintenance, Zoho support, and server management for Indian businesses that need reliable technical operations. We keep your stack stable, secure, and current.",
    serviceType: "Technical Support",
    summary:
      "GIJUHAN supports the day-to-day health of websites, CRMs, CMS platforms, servers, and business systems. Our team helps Indian companies reduce downtime, improve reliability, and keep critical digital infrastructure under control.",
    url: "/services/support",
    faqs: [
      {
        question: "What does technical support from GIJUHAN include?",
        answer:
          "Our support work covers CMS updates, CRM optimization, Zoho assistance, bug resolution, server monitoring, domain management, and performance troubleshooting.",
      },
      {
        question: "Do you offer monthly support retainers?",
        answer:
          "Yes. We offer ongoing support retainers for businesses that need dependable technical coverage, quick issue resolution, and planned maintenance every month.",
      },
      {
        question: "Can you support websites built by another agency?",
        answer:
          "Yes. We frequently step into existing systems, audit the current setup, document risk areas, and take over support without requiring a full rebuild.",
      },
      {
        question: "How quickly can support requests be handled?",
        answer:
          "Response times depend on the support plan, but most standard requests are acknowledged within one business day and urgent platform issues are prioritized immediately.",
      },
      {
        question: "Do you manage domains, hosting, and deployment environments?",
        answer:
          "Yes. We help manage DNS, SSL, hosting environments, deployment pipelines, uptime monitoring, and related infrastructure tasks that keep your platform running smoothly.",
      },
    ],
  },
};

export function getServiceCategoryPage(slug: string) {
  return SERVICE_CATEGORY_PAGES[slug];
}
