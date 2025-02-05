// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
  schema: ({ image }) => z.object ({
  id: z.number(),
  title: z.string(),
  subtitle: z.string()
, description: z.string(),
  link: z.string(),
  pubDate: z.date(),
  cardImage: image(),
  cardImageAlt: z.string(),
  stars: z.number(),
  tags: z.array(z.string()).optional(),
  details: z.array(z.string().optional()),
  }),
});
const packagesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedTime: z.string(),
		modifiedTime: z.string(),
		
  }),
});
export const collections = {
  'services': servicesCollection,
  'packages' : packagesCollection,
  
};