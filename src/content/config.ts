import { defineCollection, z } from 'astro:content';

const games = defineCollection({
  type: 'content',
  schema: z.object({
    title:          z.string(),
    description:    z.string(),
    thumbnail:      z.string(),
    tags:           z.array(z.string()),
    featured:       z.boolean().default(false),
    publishDate:    z.date(),
    unity: z.object({
      loaderUrl:      z.string(),
      dataUrl:        z.string(),
      frameworkUrl:   z.string(),
      codeUrl:        z.string(),
      width:          z.number().default(960),
      height:         z.number().default(600),
      productName:    z.string(),
      productVersion: z.string().optional(),
      companyName:    z.string().optional(),
    }),
  }),
});

export const collections = { games };
