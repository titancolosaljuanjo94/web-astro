import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección "blog": cada post es un archivo .md dentro de src/content/blog/
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: ['**/*.md', '!README.md'] }),
	schema: z.object({
		title: z.string(),
		// Opcional: <title> SEO (≤60 car.). Si falta, se usa "title | Juanjo Quintana".
		seoTitle: z.string().optional(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		// Opcional: preguntas frecuentes. Se pintan al final del post y
		// generan el schema FAQPage. No repetirlas en el cuerpo del .md.
		faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
	}),
});

export const collections = { blog };
