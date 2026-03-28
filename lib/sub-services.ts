export const SUB_SERVICES = {
  design: [
    {
      slug: "figma-prototyping",
      title: "Figma Prototyping",
      description: "High-fidelity interactive models that visualize your product before a single line of code is written.",
      features: ["Auto-layout optimization", "Interactive components", "Design systems", "User flow mapping"],
      icon: "Figma",
      accent: "gold"
    },
    {
      slug: "ui-ux-design",
      title: "UI & UX Design",
      description: "Human-centric interfaces blending breathtaking aesthetics with intuitive navigation.",
      features: ["User research", "Wireframing", "Visual identity", "Accessibility audits"],
      icon: "Layout",
      accent: "gold"
    },
    {
      slug: "graphic-designing",
      title: "Graphic Designing",
      description: "Visual storytelling that commands attention and defines your brand's digital presence.",
      features: ["Brand identity", "Digital assets", "Typography", "Color theory"],
      icon: "Palette",
      accent: "gold"
    }
  ],
  development: [
    {
      slug: "full-stack-development",
      title: "Full Stack Development",
      description: "End-to-end engineering from reactive frontends to high-performance server architectures.",
      features: ["Next.js/React", "Node.js ecosystems", "TypeScript/Rust", "Global edge deployment"],
      icon: "Code2",
      accent: "gold"
    },
    {
      slug: "frontend-development",
      title: "Frontend Development",
      description: "Award-winning interfaces with pixel-perfect precision and fluid motion.",
      features: ["WebGL/Three.js", "GSAP animations", "Core Web Vitals", "Responsive mastery"],
      icon: "MousePointer2",
      accent: "gold"
    },
    {
      slug: "backend-development",
      title: "Backend Development",
      description: "Secure, scalable, and resilient server-side logic and API architectures.",
      features: ["PostgreSQL/Redis", "GraphQL/gRPC", "Authentication/OAuth", "Microservices"],
      icon: "Terminal",
      accent: "gold"
    },
    {
      slug: "craft-cms",
      title: "Craft CMS",
      description: "Bespoke content management solutions that empower editors and developers alike.",
      features: ["Custom schemas", "Headless CMS", "Templating engines", "Asset management"],
      icon: "Database",
      accent: "gold"
    },
    {
      slug: "devops",
      title: "DevOps",
      description: "Streamlined infrastructure and automated workflows for continuous reliability.",
      features: ["AWS/Vercel", "Monitoring/Logging", "Security hardening", "Scaling strategies"],
      icon: "Workflow",
      accent: "gold"
    },
    {
      slug: "docker",
      title: "Docker",
      description: "Containerized environments ensuring consistency from local dev to global production.",
      features: ["Container orchestration", "Build optimization", "Environment parity", "Kubernetes"],
      icon: "Container",
      accent: "gold"
    },
    {
      slug: "wordpress-development",
      title: "WordPress Development",
      description: "Custom themes and enterprise-grade WordPress solutions built for speed and security.",
      features: ["Custom theme development", "Plugin optimization", "Headless WP architecture", "Security hardening"],
      icon: "Layout",
      accent: "gold"
    },
    {
      slug: "shopify-development",
      title: "Shopify Development",
      description: "High-conversion e-commerce storefronts built on the world's leading retail platform.",
      features: ["Liquid customization", "Shopify Plus setups", "App integrations", "Conversion optimization"],
      icon: "ShoppingBag",
      accent: "gold"
    }
  ],
  marketing: [
    {
      slug: "seo-aio",
      title: "SEO & AIO",
      description: "Dominating search results through technical optimization and AI-ready content strategies.",
      features: ["Keyword research", "Technical audits", "Backlink building", "AIO optimization"],
      icon: "Search",
      accent: "gold"
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      description: "Strategic engagement that builds communities and drives viral growth.",
      features: ["Campaign strategy", "Content creation", "Community management", "Analytics"],
      icon: "Share2",
      accent: "gold"
    },
    {
      slug: "pay-per-click",
      title: "Pay Per Click",
      description: "Precision-targeted ad campaigns that maximize ROI and conversion rates.",
      features: ["Google Ads", "Meta Ads", "Retargeting", "Conversion tracking"],
      icon: "TrendingUp",
      accent: "gold"
    }
  ],
  solutions: [
    {
      slug: "data-migration",
      title: "Data Migration",
      description: "Seamless move of complex datasets across legacy and cloud infrastructures.",
      features: ["Gap analysis", "Mapping & ETL", "Validation suites", "Post-move monitoring"],
      icon: "Database",
      accent: "gold"
    },
    {
      slug: "ai-automation",
      title: "AI Automation",
      description: "Intelligent workflows that eliminate manual overhead and scale operations.",
      features: ["LLM integration", "Internal AI tools", "Natural language processing", "Automated reasoning"],
      icon: "Brain",
      accent: "gold"
    },
    {
      slug: "etl-elt-pipeline",
      title: "ETL & ELT Pipeline",
      description: "High-performance data pipelines for real-time transformation and loading.",
      features: ["Data cleaning", "Real-time streaming", "Warehouse syncing", "Accuracy audits"],
      icon: "Layers",
      accent: "gold"
    },
    {
      slug: "ci-cd-pipeline",
      title: "CI/CD Pipeline",
      description: "Optimized deployment cycles with automated testing and integration.",
      features: ["Build automation", "Deployment hooks", "Test suites", "Release management"],
      icon: "GitBranch",
      accent: "gold"
    },
    {
      slug: "advanced-analytics-bi",
      title: "Advanced Analytics & BI",
      description: "Actionable insights through predictive modeling and visual dashboards.",
      features: ["Data viz", "Predictive modeling", "Business audits", "Real-time reporting"],
      icon: "BarChart3",
      accent: "gold"
    }
  ],
  support: [
    {
      slug: "zoho-full-support",
      title: "Zoho Full Support",
      description: "Comprehensive Zoho ecosystem management and custom implementation.",
      features: ["Custom modules", "Deluge scripting", "Flow automation", "User training"],
      icon: "Cpu",
      accent: "gold"
    },
    {
      slug: "crm-support",
      title: "CRM Support",
      description: "Maximizing the impact of your customer relationship management systems.",
      features: ["Pipeline audit", "Data hygiene", "Reporting setups", "Integration hooks"],
      icon: "Unplug",
      accent: "gold"
    },
    {
      slug: "cms-support",
      title: "CMS Support",
      description: "Dedicated assistance for your content infrastructure and platform health.",
      features: ["Security patches", "Speed optimization", "SEO monitoring", "Helpdesk access"],
      icon: "Settings",
      accent: "gold"
    },
    {
      slug: "server-domain-management",
      title: "Server & Domain Management",
      description: "Total oversight of your digital infrastructure, ensuring 100% uptime and domain security.",
      features: ["DNS optimization", "SSL management", "Server health monitoring", "Migration support"],
      icon: "Globe",
      accent: "gold"
    }
  ]
};

export type SubService = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  accent: string;
};
