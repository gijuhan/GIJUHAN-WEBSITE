import type { MetadataRoute } from "next";
import { BLOG_POSTS, CASE_STUDIES, SERVICES } from "@/lib/constants";
import { SUB_SERVICES } from "@/lib/sub-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gijuhan.com";
  const lastModified = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/solutions",
    "/work",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/digital-agency-delhi",
    "/ai-agency-india",
    "/shopify-development-india",
  ];

  const serviceRoutes = SERVICES.filter((service) => service.id !== "solutions").flatMap(
    (service) => [service.href, ...service.subServices.map((subService) => subService.href)]
  );

  const solutionRoutes = SUB_SERVICES.solutions.map((service) => `/solutions/${service.slug}`);
  const blogRoutes = BLOG_POSTS.map((post) => `/blog/${post.slug}`);
  const workRoutes = CASE_STUDIES.map((study) => `/work/${study.slug}`);

  const routes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...blogRoutes,
    ...workRoutes,
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/work/") ? 0.75 : 0.8,
  }));
}
