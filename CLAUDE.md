# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Jesus Hernandez built with SvelteKit 5, Tailwind CSS 4, and heavily optimized for performance. The site is statically generated and deployed to GitHub Pages with aggressive optimization features including image compression, minification, and zero-CLS prevention.

## Key Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production with full optimizations
- `npm run preview` - Preview production build locally

### Build Process
The build process is heavily optimized with multiple Vite plugins:
- HTML/CSS/JS minification via `vite-plugin-html-minifier`
- Image optimization with quality reduction (PNG: 75%, JPEG: 85%)
- Gzip and Brotli compression for all assets >1KB
- Tree shaking with aggressive settings
- Critical CSS inlining (threshold: 2048 bytes)

## Architecture

### SvelteKit Configuration
- Uses `@sveltejs/adapter-static` for static site generation
- Svelte 5 runes enabled (`compilerOptions.runes: true`)
- Prerenders all routes (`prerender.entries: ['*']`)
- Critical CSS inlined for zero layout shift (CLS)

### Styling Architecture
- Tailwind CSS 4 with `@tailwindcss/vite` plugin
- No custom CSS files - everything uses Tailwind utilities
- Critical CSS is inlined in `app.html` for performance
- Font preloading and optimization for Roboto family

### Component Structure
```
src/
├── lib/components/
│   └── ContactForm.svelte     # Form using Svelte 5 runes ($state, $derived)
├── routes/
│   ├── +layout.svelte         # Main layout with SEO meta tags
│   └── +page.svelte           # Homepage with structured data
├── app.html                   # Base template with critical CSS
└── app.css                    # Simple Tailwind import
```

### Form Handling
The `ContactForm.svelte` component demonstrates modern Svelte 5 patterns:
- Uses `$state()` for reactive form data
- Uses `$derived()` for computed validation state
- Submits directly to external service without JavaScript interception
- No loading states or complex submission handling

### Performance Optimizations
- Image optimization: Automatic compression and format conversion
- Code splitting: Manual chunks for vendor/lib code
- Compression: Gzip + Brotli for all assets
- Tree shaking: Ultra-aggressive with manual pure function declarations
- Asset hashing: Custom naming scheme for optimal caching

## Deployment

### GitHub Actions
Automatic deployment via `.github/workflows/cd.yml`:
- Triggers on push to `main` branch
- Builds with `NODE_ENV=production`
- Deploys to GitHub Pages automatically
- Uses Node.js 20 with npm caching

### Static Assets
- `static/` directory contents are copied to build root
- `robots.txt` allows all crawlers
- No sitemap generation (simple single-page site)

## Development Notes

### Svelte 5 Usage
This project uses Svelte 5 with runes throughout:
- Prefer `$state()` over `let` for reactive variables
- Use `$derived()` for computed values
- Use `{@render children()}` instead of `<slot>`
- Use `$props()` for component props

### SEO Implementation
- Structured data (JSON-LD) for person schema
- OpenGraph and Twitter meta tags in layout
- Canonical URLs using SvelteKit's `$page.url`
- Screen reader content for additional SEO context

### Form Configuration
The contact form submits to `https://simpleforms.lenorix.com/api/01k51n9dtx4habbcv6aq9r72bq` - update this URL if changing form providers.

### Critical Performance Considerations
- Critical CSS is inlined in `app.html` to prevent layout shifts
- Font preloading prevents FOIT/FOUT
- Image optimization reduces bundle sizes by ~70%
- All build optimizations are production-only to maintain dev speed
- Code comments must be in english, never to tell what is obvious from names or code itself easy to see, must give additional information and context