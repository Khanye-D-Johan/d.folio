import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define a `loader` and `schema` for each collection
const blogs = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/blog', pattern: '**/*.{md,md}' }),
  schema: z.object({
		title: z.string(),
		publishedOn: z.date(),
		description: z.string(),
		author: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string()
		}),
		tags: z.array(z.string())
	})
});
// Export a single `collections` object to register your collection(s)
export const collections = { blogs };
