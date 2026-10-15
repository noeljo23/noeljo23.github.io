import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      badge: z.string().optional(),
      context: z.string(),
      period: z.string(),
      role: z.string(),
      stack: z.array(z.string()).min(1),
      metric: z.string().optional(),
      order: z.number().int(),
      size: z.enum(["wide", "normal"]).default("normal"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      repo: z.url().optional(),
      // Copied verbatim from scripts/cv.html or site.ts. Never write new numbers here.
      result: z.string().optional(),
      thumb: image().optional(),
      thumbAlt: z.string().optional(),
    })
    .refine((d) => !d.cover || Boolean(d.coverAlt), {
      message: "coverAlt is required when cover is set",
      path: ["coverAlt"],
    })
    .refine((d) => !d.thumb || Boolean(d.thumbAlt), {
      message: "thumbAlt is required when thumb is set",
      path: ["thumbAlt"],
    }),
});

export const collections = { projects };
