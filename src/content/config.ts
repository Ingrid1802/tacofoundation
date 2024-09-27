import { defineCollection, z } from "astro:content";
// z -> zod schema/tipo de datos

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    github: z.string(),
    huggingface: z.string(),
    }),
  })

export const collections = { books }