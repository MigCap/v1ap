// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const jobs = defineCollection({
  loader: glob({ base: "./src/content/jobs", pattern: "**/*.md" }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { jobs };
