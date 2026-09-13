import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección "blog": cada post es un archivo .md dentro de src/content/blog/
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: ['**/*.md', '!README.md'] }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
