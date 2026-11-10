import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { caseStudies } from "@/content/work";
import { posts } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/schools", priority: 0.95, freq: "monthly" },
    { path: "/school-software", priority: 0.85, freq: "monthly" },
    { path: "/ai", priority: 0.8, freq: "monthly" },
    { path: "/products/studywise", priority: 0.8, freq: "monthly" },
    { path: "/pricing", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/services", priority: 0.7, freq: "monthly" },
    { path: "/work", priority: 0.6, freq: "monthly" },
    { path: "/process", priority: 0.5, freq: "yearly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/insights", priority: 0.6, freq: "weekly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/terms", priority: 0.2, freq: "yearly" },
  ];
  return [
    ...pages.map((p) => ({ url: `${siteUrl}${p.path === "/" ? "" : p.path}`, changeFrequency: p.freq, priority: p.priority })),
    ...caseStudies.map((c) => ({ url: `${siteUrl}/work/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
    ...posts.map((p) => ({ url: `${siteUrl}/insights/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
