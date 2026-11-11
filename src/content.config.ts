import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección "blog": cada post es un archivo .md dentro de src/content/blog/
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: ['**/*.md', '!README.md'] }),
	schema: ({ image }) =>
		z
			.object({
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
				// Foto de portada (recomendada): ruta relativa al .md, p. ej. ./img/mi-post.jpg
				// Si falta, el build muestra un aviso. Si hay portada, coverAlt es obligatorio.
				cover: image().optional(),
				coverAlt: z.string().optional(),
			})
			.refine((d) => !d.cover || !!d.coverAlt?.trim(), {
				message: 'Si pones `cover`, agrega también `coverAlt` (texto alternativo de la foto).',
				path: ['coverAlt'],
			}),
});

export const collections = { blog };
