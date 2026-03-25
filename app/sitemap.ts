import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gijuhan.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/design",
    "/services/development",
    "/services/marketing",
    "/services/solutions",
    "/services/support",
    "/work",
    "/work/nova-energy",
    "/work/kaze-fashion",
    "/work/apex-fintech",
    "/blog",
    "/blog/ai-automation-future",
    "/blog/design-principles-2025",
    "/blog/seo-strategies-modern-web",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/") ? 0.7 : 0.8,
  }));
}
