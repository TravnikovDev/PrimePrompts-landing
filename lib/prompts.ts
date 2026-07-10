import data from "@/data/prompts.json";
import type { Category, Prompt } from "./types";

export function allPrompts(): Prompt[] {
  return data.prompts;
}

export function getPrompt(slug: string): Prompt | undefined {
  return data.prompts.find((p) => p.id === slug);
}

export function getFeatured(): Prompt {
  const featured = getPrompt(data.featuredId);
  if (!featured) throw new Error(`featuredId ${data.featuredId} not found`);
  return featured;
}

export function trendingPrompts(): Prompt[] {
  return data.prompts.filter((p) => p.trending);
}

export function allCategories(): Category[] {
  return data.categories;
}

export function getCategory(slug: string): Category | undefined {
  return data.categories.find((c) => c.id === slug);
}

// The "trending" category is a flag, not a categoryId.
export function promptsInCategory(categoryId: string): Prompt[] {
  if (categoryId === "trending") return trendingPrompts();
  return data.prompts.filter((p) => p.categoryId === categoryId);
}
