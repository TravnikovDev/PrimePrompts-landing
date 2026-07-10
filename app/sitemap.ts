import type { MetadataRoute } from "next";
import { allCategories, allPrompts } from "@/lib/prompts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://primeprompts.app";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    ...allCategories().map((c) => ({
      url: `${base}/category/${c.id}/`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...allPrompts().map((p) => ({
      url: `${base}/prompt/${p.id}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
