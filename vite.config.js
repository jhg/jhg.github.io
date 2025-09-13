import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import htmlMinifier from 'vite-plugin-html-minifier';
import compression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		enhancedImages(), // Must come before SvelteKit plugin
		tailwindcss(),
		sveltekit(),

		htmlMinifier({
			minify: true,
			collapseWhitespace: true,
			removeComments: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: false, // Keep for Svelte
			removeOptionalTags: false, // Keep for compatibility
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: true,
			processConditionalComments: true,
			keepClosingSlash: true,
			sortAttributes: true,
			sortClassName: true,
			removeAttributeQuotes: false, // Keep quotes for Tailwind
			removeTagWhitespace: true,
			trimCustomFragments: true,
			html5: true,
		}),

		compression({
			algorithm: 'gzip',
			deleteOriginFile: false,
			threshold: 1024
		}),
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
			deleteOriginFile: false,
			threshold: 1024
		})
	],

	build: {
		target: 'es2022',
		minify: 'esbuild',
		cssMinify: true,
		sourcemap: false,

		rollupOptions: {
			// Ultra-aggressive tree shaking
			treeshake: {
				preset: 'smallest',
				moduleSideEffects: false,
				propertyReadSideEffects: false,
				unknownGlobalSideEffects: false,
				manualPureFunctions: ['console.log', 'console.warn', 'assert', 'invariant']
			},

			output: {
				// Custom hash for cache busting
				entryFileNames: 'assets/js/[name]-[hash].js',
				chunkFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: ({ name }) => {
					if (/\.(css|jpg|jpeg|png|gif|svg|webp|avif)$/i.test(name)) {
						return `assets/[hash][extname]`;
					}
					return 'assets/[name]-[hash][extname]';
				},

				// Smart chunking
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						return 'vendor';
					}
					if (id.includes('src/lib')) {
						return 'lib';
					}
				}
			}
		}
	},

	esbuild: {
		minify: true,
		target: 'es2022',
		legalComments: 'none',
		treeShaking: true,
		minifyIdentifiers: true,
		minifySyntax: true,
		minifyWhitespace: true
	},

	// CSS optimizations
	css: {
		devSourcemap: false,
		minify: true
	},

	// Development server optimizations
	server: {
		fs: {
			strict: true
		}
	}
});
