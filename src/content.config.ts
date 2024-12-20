import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const about = defineCollection({
  loader: glob({ base: "./src/content/about", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()),
    avatar: z.string().url(),
  }),
});

const jobs = defineCollection({
  loader: glob({ base: "./src/content/jobs", pattern: "**/*.md" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.string(),
  }),
});

const featured = defineCollection({
  // loader: glob({ base: "./src/content/featured", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: z.string(),
      cover: image(),
      github: z.string().url().optional(),
      external: z.string().url().optional(),
      tech: z.array(z.string()),
    }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    image: z.string().optional(),
    github: z.string().optional(),
    external: z.string().optional(),
    tech: z.array(z.string()),
    show: z.string(),
  }),
});

const contact = defineCollection({
  loader: glob({ base: "./src/content/contact", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { about, jobs, featured, projects, contact };
