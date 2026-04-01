export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "design",
    title: "Design",
    icon: "PenTool",
    description:
      "Crafting intuitive digital experiences that captivate and convert.",
    subServices: [
      { label: "Figma Prototyping", href: "/services/design/figma-prototyping" },
      { label: "UI & UX Design", href: "/services/design/ui-ux-design" },
      { label: "Graphic Designing", href: "/services/design/graphic-designing" },
    ],
    href: "/services/design",
  },
  {
    id: "development",
    title: "Development",
    icon: "Code2",
    description:
      "Robust, scalable digital products built for performance and growth.",
    subServices: [
      { label: "Full Stack Development", href: "/services/development/full-stack-development" },
      { label: "Frontend Development", href: "/services/development/frontend-development" },
      { label: "Backend Development", href: "/services/development/backend-development" },
      { label: "Craft CMS", href: "/services/development/craft-cms" },
      { label: "WordPress Development", href: "/services/development/wordpress-development" },
      { label: "Shopify Development", href: "/services/development/shopify-development" },
      { label: "DevOps", href: "/services/development/devops" },
      { label: "Docker", href: "/services/development/docker" },
    ],
    href: "/services/development",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: "Megaphone",
    description:
      "Data-driven strategies that amplify your brand and drive qualified growth.",
    subServices: [
      { label: "SEO & AIO", href: "/services/marketing/seo-aio" },
      { label: "Social Media Marketing", href: "/services/marketing/social-media-marketing" },
      { label: "Pay Per Click", href: "/services/marketing/pay-per-click" },
    ],
    href: "/services/marketing",
  },
  {
    id: "solutions",
    title: "Solutions",
    icon: "Cpu",
    description:
      "Intelligent automation and data pipelines that power your business at scale.",
    subServices: [
      { label: "Data Migration", href: "/solutions/data-migration" },
      { label: "AI Automation", href: "/solutions/ai-automation" },
      { label: "ETL & ELT Pipeline", href: "/solutions/etl-elt-pipeline" },
      { label: "CI/CD Pipeline", href: "/solutions/ci-cd-pipeline" },
      { label: "Advanced Analytics & BI", href: "/solutions/advanced-analytics-bi" },
    ],
    href: "/solutions",
  },
  {
    id: "support",
    title: "Support",
    icon: "Headphones",
    description:
      "Reliable, expert support so your platforms perform without interruption.",
    subServices: [
      { label: "Zoho Full Support", href: "/services/support/zoho-full-support" },
      { label: "CRM Support", href: "/services/support/crm-support" },
      { label: "CMS Support", href: "/services/support/cms-support" },
      { label: "Server & Domain Management", href: "/services/support/server-domain-management" },
    ],
    href: "/services/support",
  },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 5, suffix: "+", label: "Industries Covered" },
  { value: 100, suffix: "%", label: "Client Satisfaction Rate" },
] as const;

export const PHILOSOPHY = [
  {
    kanji: "簡素",
    romanji: "KANSO",
    english: "Simplicity",
    description: "Elegant solutions without clutter.",
  },
  {
    kanji: "改善",
    romanji: "KAIZEN",
    english: "Continuous Improvement",
    description: "Always refining, always evolving.",
  },
  {
    kanji: "粋",
    romanji: "IKI",
    english: "Purpose",
    description: "Meaningful design at every step.",
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "lettuce-eat",
    title: "Lettuce Eat",
    category: "E-Commerce",
    tags: ["Shopify", "E-Commerce", "UI/UX"],
    description:
      "Full Shopify storefront for a Delhi NCR health-food cloud kitchen.",
    stat: "Health-Tech Cloud Kitchen Platform",
    image: "/images/work/lettuce-eat.jpg",
    status: "Completed",
    services: ["Shopify Development", "Custom Theme Engineering", "Nutrition UX", "Conversion Optimization", "Zomato/Swiggy Integration"],
    website: "https://lettuceeat.in",
    challenge: "Lettuce Eat is a health-focused cloud kitchen in Delhi NCR that bridges clinical nutrition with everyday cooking. They needed more than a menu page — they needed a full storefront that communicated credibility, offered flexible meal plan subscriptions, and drove consistent daily orders across web and food-delivery platforms.",
    solution: "We engineered a custom Shopify storefront from the ground up — no generic templates. The build includes a dynamic BMI & health score calculator, a tiered subscription pricing system (Lite / Standard / Pro) with weekly and monthly toggles, video-first product showcases, and a seamless integration guiding users to Zomato and Swiggy. The UI leans into clean, appetite-stimulating visual design while maintaining conversion-focused hierarchy throughout every scroll."
  },
  {
    slug: "chandini-and-priyanka",
    title: "Chandini & Priyanka",
    category: "E-Commerce",
    tags: ["Shopify", "Branding", "E-Commerce"],
    description: "Elegant Shopify build for a premium Indian fashion label.",
    stat: "Premium D2C Fashion Store",
    image: "/images/work/chandini-and-priyanka.jpg",
    status: "Completed",
    services: ["Shopify Development", "Luxury Brand UX", "Custom Storefront", "Fashion E-Commerce"],
    website: "https://chandiniandpriyanka.com",
    challenge: "Chandini & Priyanka is a premium Indian fashion label requiring a digital home that matched the elegance of their physical products. Generic Shopify themes would have diluted their brand identity — they needed something architecturally distinct.",
    solution: "We crafted a premium Shopify experience that communicates exclusivity at every touchpoint. From editorial-style product layouts to refined typography and micro-animation choices, every decision was made to elevate the label's prestige. The result is a D2C storefront that converts browsers into buyers while maintaining the aesthetic authority of a luxury brand."
  },
  {
    slug: "rv-solutions",
    title: "RV Solutions",
    category: "Web Engineering",
    tags: ["WordPress", "Corporate", "SEO"],
    description: "Corporate WordPress website engineered for B2B outreach and lead capture.",
    stat: "B2B Lead Generation Website",
    image: "/images/work/rv-solutions.jpg",
    status: "Completed",
    services: ["WordPress Development", "B2B UI Design", "SEO Architecture", "Lead Generation"],
    website: "https://rvsolutions.org.in",
    challenge: "RV Solutions needed a professional corporate web presence that could communicate their service offerings to B2B clients and generate inbound leads — all on a platform the internal team could manage independently post-launch.",
    solution: "We built a fully custom WordPress website with a clean, authoritative B2B aesthetic. The information architecture was designed around lead capture — strategically placed CTAs, a services-first layout, and SEO-optimized page structure to drive organic discovery. The CMS setup ensures the client can update content without developer dependency."
  },
  {
    slug: "g-art-engineering",
    title: "G-Art Engineering",
    category: "Web Engineering",
    tags: ["WordPress", "Industrial", "Web Engineering"],
    description: "WordPress site for an engineering services firm targeting industrial clients.",
    stat: "Industrial Services Web Presence",
    image: "/images/work/g-art-engineering.jpg",
    status: "Completed",
    services: ["WordPress Development", "Industrial Web Design", "SEO", "Technical Copywriting"],
    website: "https://g-artengineering.com",
    challenge: "G-Art Engineering is an industrial services firm that lacked a credible digital presence to compete for larger contracts. Their old site failed to convey their technical expertise or inspire confidence among potential enterprise clients.",
    solution: "We delivered a precision-crafted WordPress website aligned with the visual language of industrial authority. Service pages were structured to answer procurement-level questions, and a project portfolio section was built to showcase past work. Technical copywriting was used throughout to communicate competency without jargon overload."
  },
  {
    slug: "dc-portal-academy",
    title: "DC Portal Academy",
    category: "Web Engineering",
    tags: ["Next.js", "SaaS", "Sports Tech", "Full Stack"],
    description: "Sports player analytics portal with multi-layer authentication for coaches, players & admins.",
    stat: "Multi-Role Sports Analytics Platform",
    image: "/images/work/dc-portal-academy.jpg",
    status: "In Progress",
    services: ["Next.js Development", "Multi-Role Auth System", "Sports Analytics UX", "Full Stack Engineering", "Dashboard Architecture"],
    website: "[Internal Platform — Not Public]",
    challenge: "DC Portal Academy needed a sophisticated sports analytics platform where coaches could evaluate football and multi-sport players in depth — but with strict access control. Admins, coaches, and players each required different views, permissions, and workflows, all interconnected in real time.",
    solution: "We architected a multi-layer authenticated Next.js platform with three distinct role tiers: Admin, Coach, and Player. Coaches can create detailed digital flip cards for each player — pre-filling stats like stamina, potential, goals scored, and physical metrics — which players can access on their personal dashboard. The platform also includes a homework assignment module, drill sessions embedded with YouTube videos, and a coaching content library. Every layer is permission-gated and seamlessly interlinked, making it a complete sports management ecosystem."
  },
  {
    slug: "eleganica",
    title: "Eleganica",
    category: "Web Engineering",
    tags: ["Next.js", "Event Management", "UI/UX"],
    description: "Feature-rich event management website built on Next.js with booking and showcase flows.",
    stat: "Premium Event Management Platform",
    image: "/images/work/eleganica.jpg",
    status: "In Progress",
    services: ["Next.js Development", "Event UX Design", "Booking Flow Engineering", "Brand Identity"],
    website: "[Platform in Development]",
    challenge: "The event management industry is saturated with generic booking platforms. Eleganica needed to stand apart — presenting premium event services with an experience that felt as refined as the events themselves.",
    solution: "We built Eleganica on Next.js with a focus on visual storytelling and intuitive booking flows. The site architecture guides visitors from inspiration to inquiry in minimal steps, with showcase sections for past events, service category pages, and a streamlined contact/booking system. The brand identity was woven into every component — from color palette choices to motion design — making Eleganica feel like a premium product, not just a website."
  },
  {
    slug: "brandwave",
    title: "BrandWave",
    category: "App Development",
    tags: ["App Development", "SaaS", "Influencer Marketing"],
    description: "Mobile-first platform connecting brands, agencies, and influencers for seamless collaboration.",
    stat: "Brand-Influencer Collaboration App",
    image: "/images/work/brandwave.jpg",
    status: "In Progress",
    services: ["App Development", "UI/UX Design", "Platform Architecture", "Influencer-Brand Matching System"],
    website: "[App in Development]",
    challenge: "The influencer marketing space is fragmented — brands struggle to find the right creators, agencies juggle multiple tools, and influencers have no unified space to showcase their value. BrandWave was built to solve all three problems on one platform.",
    solution: "BrandWave is a mobile-first collaboration platform where brands, agencies, and influencers can discover, connect, and work together within a single ecosystem. We designed a tri-sided marketplace with tailored dashboards for each user type, a match-and-connect flow, campaign management tools, and a clean profile system for creators to present their reach and engagement data. The architecture is built for scale — designed to grow from MVP to a full-featured collaboration suite."
  },
  {
    slug: "ai-mock-interview",
    title: "AI Mock Interview",
    category: "Web Engineering",
    tags: ["Next.js", "AI", "Full Stack", "SaaS"],
    description: "First-of-its-kind AI mock interview platform with live voice questions, camera recording & Stripe payments.",
    stat: "AI-Powered Interview Prep Platform",
    image: "/images/work/ai-mock-interview.jpg",
    status: "Completed",
    services: ["Next.js Development", "Gemini AI Integration", "Clerk Auth", "Drizzle + PostgreSQL", "Stripe Payments", "Camera/Mic API"],
    website: "https://lnkd.in/gtxguP4Y",
    challenge: "Traditional interview prep is static — flashcards, YouTube videos, mock humans. There was no platform that could simulate a real interview, speak questions aloud, record candidate responses, and deliver AI-powered feedback with ratings. We set out to build exactly that.",
    solution: "We engineered a full-stack AI interview platform on Next.js with Chakra UI and ShadCN components. Users sign up via Clerk, fill in their role and experience on the dashboard, and the system uses Google's Gemini AI to generate role-specific interview questions. The platform then requests camera and microphone access, records responses, and stores them in a PostgreSQL database via Drizzle ORM. After the session, a detailed feedback report is generated — showing the user's answers alongside AI-generated ideal responses with ratings. Stripe integration powers a multi-tier subscription model for access to advanced sessions. The full codebase is hosted on GitHub and deployed via Vercel."
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    category: "AI Automation",
    tags: ["AI Automation", "Python", "OpenAI", "Chatbot"],
    description: "Custom PDF-trained AI chatbot deployed for a global petrochemicals congress event.",
    stat: "Event-Specific AI ChatBot",
    image: "/images/work/grpc-chatbot.jpg",
    status: "Completed",
    services: ["AI Automation", "Python Backend", "OpenAI Integration", "Custom PDF Training", "HTML/CSS Frontend", "Render Deployment"],
    website: "https://lnkd.in/g-kiHfb5",
    challenge: "GRPC 2025 (Global Refining & Petrochemicals Congress) needed an intelligent, always-available assistant that could answer attendee and partner queries accurately — using event-specific knowledge from internal brochures, FAQs, and partnership documents, not generic web data.",
    solution: "We built a custom AI chatbot trained exclusively on curated internal PDFs including event brochures, FAQs, policy documents, and sponsorship/partnership packages. The Python backend handles natural language processing via OpenAI's API, while a clean HTML/CSS frontend delivers a simple, professional user interface. The bot provides context-aware, real-time responses that are grounded in GRPC 2025 content — not hallucinated generalities. Deployed live on Render, the chatbot served as a 24/7 event intelligence layer, handling high-volume queries without human support overhead."
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Gijuhan transformed our digital presence completely. Their attention to detail and technical excellence is unmatched.",
    name: "Sarah Chen",
    company: "Nova Energy",
    role: "CEO",
  },
  {
    quote:
      "The team at Gijuhan doesn't just build — they strategize, design, and deliver experiences that truly move the needle.",
    name: "Marcus Rivera",
    company: "Kaze Fashion",
    role: "Head of Marketing",
  },
  {
    quote:
      "Working with Gijuhan felt like having a world-class tech team embedded within our company. Exceptional results.",
    name: "Priya Sharma",
    company: "Apex Fintech",
    role: "CTO",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "website-most-powerful-salesperson",
    title: "Why Your Website Is Your Most Powerful Salesperson (And How to Make It Work 24/7)",
    excerpt:
      "Think about your best salesperson for a moment. They know your product inside out. Now ask yourself — does your website do any of that?",
    category: "Web Strategy",
    date: "2025-03-28",
    readTime: "7 min read",
    image: "/images/blog/website-salesperson-hero.png",
  },
  {
    slug: "brand-identity-isnt-a-logo",
    title: "Brand Identity Isn't a Logo — It's a Feeling. Here's How to Build One.",
    excerpt:
      "The brands that truly stick aren't just visually consistent — they feel consistent. And that's a very different thing.",
    category: "Branding",
    date: "2025-03-21",
    readTime: "6 min read",
    image: "/images/blog/brand-identity-mood.png",
  },
  {
    slug: "ai-automation-future-digital-marketing",
    title: "AI, Automation & the Future of Digital Marketing — What Businesses Need to Know Now",
    excerpt:
      "The words 'AI' and 'automation' get thrown around so much these days. Let's cut through the hype and talk about what actually matters.",
    category: "AI & Technology",
    date: "2025-03-14",
    readTime: "8 min read",
    image: "/images/blog/website-speed.png",
  },
  {
    slug: "brands-grow-fast-systems-not-marketing",
    title: "The Secret Behind Brands That Grow Fast: It's Not Just Marketing. It's Systems.",
    excerpt:
      "What you're actually looking at isn't just great marketing. It's great systems — and marketing that's built on top of them.",
    category: "Growth Strategy",
    date: "2025-03-07",
    readTime: "7 min read",
    image: "/images/blog/analytics-dashboard.png",
  },
  {
    slug: "simplicity-wins-kanso-approach",
    title: "Why Simplicity Wins in a World Full of Digital Noise — The Kanso Approach to Business Growth",
    excerpt:
      "Most businesses respond to digital noise by adding more. But the brands cutting through? They're doing the opposite — they're simplifying.",
    category: "Philosophy",
    date: "2025-02-28",
    readTime: "7 min read",
    image: "/images/blog/brand-visual-language.png",
  },
] as const;

export const MARQUEE_ITEMS = [
  "DESIGN",
  "DEVELOPMENT",
  "MARKETING",
  "AI SOLUTIONS",
  "SUPPORT",
  "技術",
  "販",
  "KANSO",
  "KAIZEN",
  "IKI",
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/gijuhan", icon: "Linkedin" },
  { label: "Instagram", href: "https://instagram.com/thegijuhan", icon: "Instagram" },
  { label: "X / Twitter", href: "https://x.com/TheGijuhan", icon: "Twitter" },
] as const;

export const BUDGET_OPTIONS = [
  "< $1K",
  "$1K – $5K",
  "$5K – $20K",
  "$20K+",
  "Let's Talk",
] as const;

export const SERVICE_OPTIONS = [
  "Design",
  "Development",
  "Marketing",
  "Solutions",
  "Support",
  "Not Sure",
] as const;
