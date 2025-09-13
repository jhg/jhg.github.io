<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Jesus Hernandez - Digital Products Creator</title>
	<meta name="description" content="Digital products creator, software developer, and business innovator specialized in creating innovative digital solutions." />

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
<section class="text-center py-8 min-h-[200px]" aria-labelledby="main-heading">
	<h1 id="main-heading" class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
		Jesus Hernandez
	</h1>
	<p class="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
		Digital products creator, software developer, and business innovator.
	</p>
</section>

<!-- About Section - Visible content -->
<section class="py-8" aria-labelledby="about-heading">
	<h2 id="about-heading" class="text-center text-2xl font-bold text-white mb-6">About</h2>
	<p class="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
		Experienced digital products creator with expertise in software development,
		business innovation, and technology solutions. Specializing in creating
		cutting-edge digital experiences and innovative software solutions.
	</p>

	<div class="text-center max-w-4xl mx-auto">
		<h3 class="text-xl font-semibold text-white mb-4">Services</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-200">
			<div class="p-4 rounded border border-gray-400">Digital Product Development</div>
			<div class="p-4 rounded border border-gray-400">Software</div>
			<div class="p-4 rounded border border-gray-400">Business Innovation Consulting</div>
			<div class="p-4 rounded border border-gray-400">Technology Strategy</div>
            <div class="p-4 rounded border border-gray-400">Web</div>
            <div class="p-4 rounded border border-gray-400">Mobile & Desktop</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-8 min-h-[300px]" aria-labelledby="contact-heading">
    <h2 id="contact-heading" class="text-center text-2xl font-bold text-white mb-4">
        Contact me
    </h2>
    <p class="text-lg text-gray-200 max-w-lg mx-auto mb-8">
        If you have any questions or would like to collaborate, please fill out the form below.
    </p>

    <ContactForm />
</section>
