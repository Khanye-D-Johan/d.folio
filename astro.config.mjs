// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: "https://khanyej.netlify.app/",
	integrations: [
		icon(), mdx(), sitemap(), preact()
	],
});
