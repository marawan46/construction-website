import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum([
      "Projects",
      "Tips & Guides",
      "Industry News",
      "Case Studies",
      "Company Updates",
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Editorial Team"),
    featured: z.boolean().default(false), // ← CMS toggle per article
    draft: z.boolean().default(false),
  }),
});
const services = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    slug: z.string(),
  }),
});
const projects = defineCollection({
  type: "data",                        // JSON files, no markdown body
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum([
      "Infrastructure",
      "Commercial",
      "Residential",
      "Industrial",
      "Mixed-Use",
      "Renovation",
    ]),
    location: z.string(),
    year: z.string(),
    size: z.string(),
    status: z.enum(["Completed", "In Progress", "Planning"]),
    description: z.string(),
    image: z.string().optional(),
    imageUpload: z.string().optional(),
    featured: z.boolean().default(false),
    articleSlug: z.string().optional(), // ← links to a /blog/[slug] article
  }),
});
export const collections = { blog,services,projects  };
