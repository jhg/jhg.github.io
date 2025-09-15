<script>
	import PortraitImage from "$lib/components/PortraitImage.svelte";
	import NavMenu from "$lib/components/NavMenu.svelte";
</script>

<svelte:head>
	<title>Portfolio - Jesus Hernandez</title>
	<meta name="description" content="Portfolio of digital products and software projects by Jesus Hernandez - Software Developer & Business Innovator." />
	<meta name="keywords" content="portfolio, projects, digital products, web applications, software development, jesus hernandez" />
</svelte:head>

<NavMenu />
<PortraitImage />

<!-- Portfolio content will go here -->
<main class="max-w-4xl mx-auto px-4 py-8 mt-10 min-h-screen">
	<h1 class="text-4xl md:text-5xl font-bold text-white mb-8 text-center text-stroke">
		Portfolio
	</h1>

	<!-- Content placeholder -->
	<div class="text-center text-gray-400 py-16">
		<p>Portfolio content coming soon...</p>
	</div>
</main>