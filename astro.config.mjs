// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	site: "https://khanyej.netlify.app/",
	integrations: [
		mdx(), sitemap(), preact()
	],
});
