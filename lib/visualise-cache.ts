

import type { VisualisationResponse } from "@/types/visualiser";

const MAX_ENTRIES = 300;
const cache = new Map<string, VisualisationResponse>();

export function cacheKey(problemTitle: string, userInput: string, patternSlug?: string) {
  return `${problemTitle.trim().toLowerCase()}::${userInput.trim()}::${patternSlug ?? ""}`;
}

export function getCached(key: string): VisualisationResponse | null {
  return cache.get(key) ?? null;
}

export function setCached(key: string, value: VisualisationResponse) {
  if (cache.size >= MAX_ENTRIES) {
    const oldest = cache.keys().next().value;
    if (oldest !== undefined) cache.delete(oldest);
  }
  cache.set(key, value);
}