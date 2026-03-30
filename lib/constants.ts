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
    slug: "nova-energy",
    title: "Nova Energy",
    category: "Design & Development",
    tags: ["UI/UX", "Full Stack", "AI"],
    description:
      "Complete digital transformation for a renewable energy startup.",
    stat: "3x Lead Generation",
    image: "/images/work/nova-energy.jpg",
  },
  {
    slug: "kaze-fashion",
    title: "Kaze Fashion",
    category: "Marketing & Design",
    tags: ["Branding", "SEO", "Social Media"],
    description: "From zero to 50K monthly visitors in 6 months.",
    stat: "50K Monthly Visitors",
    image: "/images/work/kaze-fashion.jpg",
  },
  {
    slug: "apex-fintech",
    title: "Apex Fintech",
    category: "Development & Solutions",
    tags: ["AI Automation", "Data Pipeline", "DevOps"],
    description: "AI-powered analytics dashboard for financial services.",
    stat: "40% Cost Reduction",
    image: "/images/work/apex-fintech.jpg",
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
  { label: "Instagram", href: "https://instagram.com/gijuhan", icon: "Instagram" },
  { label: "X / Twitter", href: "https://x.com/gijuhan", icon: "Twitter" },
  { label: "GitHub", href: "https://github.com/gijuhan", icon: "Github" },
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
