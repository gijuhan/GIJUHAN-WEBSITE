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
    slug: "ai-automation-future",
    title: "The Future of AI Automation in Business",
    excerpt:
      "How intelligent automation is reshaping industries and creating new opportunities for growth.",
    category: "AI & Technology",
    date: "2025-03-15",
    readTime: "5 min read",
    image: "/images/blog/ai-automation.jpg",
  },
  {
    slug: "design-principles-2025",
    title: "Design Principles That Drive Conversion",
    excerpt:
      "A deep dive into the design patterns that turn visitors into customers.",
    category: "Design",
    date: "2025-03-10",
    readTime: "4 min read",
    image: "/images/blog/design-principles.jpg",
  },
  {
    slug: "seo-strategies-modern-web",
    title: "SEO Strategies for the Modern Web",
    excerpt:
      "Beyond keywords — building sustainable organic growth through technical excellence.",
    category: "Marketing",
    date: "2025-03-05",
    readTime: "6 min read",
    image: "/images/blog/seo-strategies.jpg",
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
