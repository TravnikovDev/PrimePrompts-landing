import data from "@/data/prompts.json";
import type { Prompt } from "./types";

// Featured + trending, deduplicated by id: the full set of prompts that get
// their own /prompt/[slug] page.
export function allPrompts(): Prompt[] {
  const seen = new Set<string>();
  return [data.featured, ...data.trending].filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
}

export function getPrompt(slug: string): Prompt | undefined {
  return allPrompts().find((p) => p.id === slug);
}
