import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import htmlMinifier from 'vite-plugin-html-minifier';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import { imageToWebpPlugin } from 'vite-plugin-image-to-webp';
import compression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
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

		ViteImageOptimizer({
			includePublic: true,
			png: {
				quality: 75,
				effort: 10 // Maximum compression effort
			},
			jpeg: {
				quality: 85,
				progressive: true,
				mozjpeg: true
			},
			gif: {
				quality: 75,
				interlaced: false,
				optimizationLevel: 3,
				colors: 256,
			},
			webp: {
				quality: 85,
				effort: 6
			},
			avif: {
				quality: 80,
				effort: 9
			},
			svg: {
				plugins: [
					{ name: 'removeViewBox', active: false },
					{ name: 'removeDimensions', active: true },
					{ name: 'removeComments', active: true },
					{ name: 'removeMetadata', active: true }
				]
			},
			optimizeImages: true,
			optimizeImagesInDev: false,
		}),

		// Automatic conversion to WebP/AVIF - Temporarily disabled
		// imageToWebpPlugin({
		// 	imageFormats: ['jpg', 'jpeg', 'png'],
		// 	webpQuality: { quality: 85 },
		// 	avifQuality: { quality: 80 },
		// 	destinationFolder: 'build'
		// }),

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
