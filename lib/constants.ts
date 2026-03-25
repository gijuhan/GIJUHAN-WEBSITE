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
    subServices: ["Figma", "UI & UX Design", "Graphic Designing"],
    href: "/services/design",
  },
  {
    id: "development",
    title: "Development",
    icon: "Code2",
    description:
      "Robust, scalable digital products built for performance and growth.",
    subServices: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Craft CMS",
      "DevOps",
      "Docker",
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
      "Search Engine Optimization",
      "Social Media Marketing",
      "Pay Per Click",
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
      "Data Migration",
      "AI Automation",
      "ETL & ELT Pipeline",
      "CI/CD Pipeline",
      "Advanced Analytics & BI",
    ],
    href: "/services/solutions",
  },
  {
    id: "support",
    title: "Support",
    icon: "Headphones",
    description:
      "Reliable, expert support so your platforms perform without interruption.",
    subServices: ["Zoho Full Support", "CRM Support", "CMS Support"],
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
