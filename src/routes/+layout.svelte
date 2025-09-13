<script>
	// Main layout with basic SEO
	import { page } from '$app/stores';
	import '../app.css';

	// Svelte 5 children prop
	let { children } = $props();
</script>

<svelte:head>
	<!-- Basic meta tags -->
	<meta name="author" content="Jesus Hernandez" />
	<meta name="description" content="Digital products creator, software developer, and business innovator." />
	<meta name="keywords" content="jesus hernandez, developer, software, digital products, innovation" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:title" content="Jesus Hernandez - Digital Products Creator" />
	<meta property="og:description" content="Digital products creator, software developer, and business innovator." />
	<meta property="og:site_name" content="Jesus Hernandez" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content={$page.url.toString()} />
	<meta property="twitter:title" content="Jesus Hernandez - Digital Products Creator" />
	<meta property="twitter:description" content="Digital products creator, software developer, and business innovator." />

	<!-- Canonical URL -->
	<link rel="canonical" href={$page.url.toString()} />
</svelte:head>

<!-- Layout container using Tailwind -->
<div class="bg-black text-white min-h-screen">
	<div class="relative z-10">
		<main class="max-w-4xl mx-auto px-4 py-8 min-h-screen">
			{@render children()}
		</main>
	</div>
</div>
