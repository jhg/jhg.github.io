<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import heroImage from '$lib/assets/img/wb-jesus-hernandez.avif';
</script>

<svelte:head>
	<title>Jesus Hernandez - Digital Products Creator</title>
	<!-- Basic meta tags -->
	<meta name="author" content="Jesus Hernandez" />
	<meta name="keywords" content="jesus hernandez, developer, software, digital products, innovation" />
	<meta name="description" content="Digital products creator, software developer, and business innovator specialized in creating innovative digital solutions." />

    <link rel="preload" as="image" href={heroImage} />

	<!-- Structured Data for SEO -->
	{@html `
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Jesus Hernandez",
		"jobTitle": "Software Developer & Business Innovator",
		"description": "Software developer, CEO of lenorix, specializing in technology innovation and digital product development",
		"url": "https://jhg.github.io",
		"sameAs": [
			"https://github.com/jhg"
		],
		"knowsAbout": [
			"Software Development",
			"Digital Products",
			"Business Innovation",
			"Technology Innovation",
			"Web Development",
			"Technology Solutions",
			"Business Leadership"
		],
		"worksFor": {
			"@type": "Organization",
			"name": "lenorix"
		}
	}
	</script>
	`}
</svelte:head>

<!-- Hero Section -->
<section class="text-center py-8 min-h-[200px] mt-50 sm:mt-56 md:mt-76 lg:mt-84 landscape:mt-20" aria-labelledby="main-heading">
	<h1 id="main-heading" class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-stroke">
		Jesus Hernandez
	</h1>
	<p class="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6 mt-20 sm:mt-26 md:mt-30 lg:mt-34 landscape:mt-6 text-stroke">
		Digital products creator, software developer, and business innovator.
	</p>
</section>

<img src={heroImage} alt="Jesus Hernandez in suit - White & Black Portrait taken in Beijing, China"
	class="fixed top-0 right-0 h-lvh z-[-1] object-cover"
	style="mask: linear-gradient(to left, white 0%, white 52%, transparent 93%);"
	fetchpriority="high"
/>

<!-- About Section - Visible content -->
<section class="py-8" aria-labelledby="about-heading">
	<h2 id="about-heading" class="text-center text-2xl font-bold text-white mb-6 text-stroke">About</h2>
	<p class="text-lg portrait:text-center text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 text-stroke">
		Experienced digital products creator with expertise in software development,
		business innovation, and technology solutions. Specializing in creating
		cutting-edge digital experiences and innovative software solutions.
	</p>

	<div class="text-center max-w-3xl mx-auto">
		<h3 class="text-xl font-semibold text-white mb-4 text-stroke">Services</h3>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3.5 md:gap-4 lg:gap-4.5 text-gray-200">
			<div class="p-4 rounded border border-gray-400/25 min-h-30 flex items-center justify-center bg-glass shadow-glass">Digital Product<br>Development</div>
			<div class="p-4 rounded border border-gray-400/25 min-h-30 flex items-center justify-center bg-glass shadow-glass">Webs</div>
			<div class="p-4 rounded border border-gray-400/25 min-h-30 flex items-center justify-center bg-glass shadow-glass">Technology<br>Strategy</div>
			<div class="p-4 rounded border border-gray-400/25 min-h-30 flex items-center justify-center bg-glass shadow-glass">Mobile / Desktop<br>Apps</div>
			<div class="p-4 rounded border border-gray-400/25 min-h-30 flex items-center justify-center bg-glass shadow-glass">MCP servers</div>
			<div class="p-4 rounded border border-gray-400/25 min-h-30 flex items-center justify-center bg-glass shadow-glass">AI API<br>integrations</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-8 min-h-[300px]" aria-labelledby="contact-heading">
    <h2 id="contact-heading" class="text-center text-2xl font-bold text-white mb-4 text-stroke">
        Contact me
    </h2>
    <p class="text-lg text-gray-200 max-w-3xl mx-auto mb-8 text-stroke">
        If you have any questions or would like to collaborate, please fill out the form below.
    </p>

    <ContactForm />
</section>
