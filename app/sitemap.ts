import type { MetadataRoute } from "next";
import { allPrompts } from "@/lib/prompts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://primeprompts.app";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    ...allPrompts().map((p) => ({
      url: `${base}/prompt/${p.id}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
