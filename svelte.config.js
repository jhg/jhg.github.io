import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),

		// Para GitHub Pages
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : ''
		},

		// Inline CSS for better FCP (no external CSS requests)
		inlineStyleThreshold: 8192,

		prerender: {
			entries: ['*'],
			handleHttpError: 'warn',
			origin: 'https://jesushernandez.net'
		}
	},

	preprocess: vitePreprocess(),

	compilerOptions: {
		runes: true
	}
};

export default config;
