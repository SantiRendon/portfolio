import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from '@huntabyte/mdsvex';
import { mdsvexOptions } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess({})],

	kit: {
		adapter: adapter({
			images: true,
			runtime:"node@20"
		})
	}
};

export default config;
