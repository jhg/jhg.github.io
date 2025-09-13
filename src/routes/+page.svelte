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
		"jobTitle": "Digital Products Creator",
		"description": "Software developer and business innovator specialized in creating innovative digital solutions",
		"url": "https://jhg.github.io",
		"sameAs": [
			"https://github.com/jhg"
		],
		"knowsAbout": [
			"Software Development",
			"Digital Products",
			"Business Innovation",
			"Web Development",
			"Technology Solutions"
		],
		"alumniOf": {
			"@type": "Organization",
			"name": "Technology Industry"
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

<!-- Contact Section -->
<section class="text-center py-8 min-h-[300px]" aria-labelledby="contact-heading">
	<h2 id="contact-heading" class="text-2xl font-bold text-white mb-4">
		Contact me
	</h2>
	<p class="text-lg text-gray-200 max-w-lg mx-auto mb-8">
		If you have any questions or would like to collaborate, please fill out the form below.
	</p>

	<ContactForm />
</section>

<!-- Invisible content for SEO -->
<div class="sr-only">
	<h3>About Jesus Hernandez</h3>
	<p>
		Experienced digital products creator with expertise in software development,
		business innovation, and technology solutions. Specializing in creating
		cutting-edge digital experiences and innovative software solutions.
	</p>

	<h3>Services</h3>
	<ul>
		<li>Digital Product Development</li>
		<li>Software Architecture</li>
		<li>Business Innovation Consulting</li>
		<li>Web Development</li>
		<li>Technology Strategy</li>
	</ul>

	<h3>Contact Information</h3>
	<p>
		Available for collaboration on innovative projects and technology solutions.
		Reach out through the contact form above for project inquiries and partnerships.
	</p>
</div>

<!-- All styles now use Tailwind CSS -->
