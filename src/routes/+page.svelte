<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ServicesGrid from "$lib/components/ServicesGrid.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";
	import PortraitImage from "$lib/components/PortraitImage.svelte";
</script>

<svelte:head>
	<title>Jesus Hernandez</title>
	<!-- Basic meta tags -->
	<meta name="author" content="Jesus Hernandez" />
	<meta name="keywords" content="jesus hernandez, developer, software, digital, innovation, bussines" />
	<meta name="description" content="Digital products creator, software developer, and business innovator. From idea to launch, to align technology with business." />

    <link rel="preload" as="image" href="/src/lib/assets/img/wb-jesus-hernandez.avif" />

	<!-- Structured Data for SEO -->
	{@html `
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Jesus Hernandez",
		"jobTitle": "Software Developer & Business Innovator",
		"description": "Software developer, CEO of lenorix, specializing in technology innovation and digital product development",
		"url": "https://jesushernandez.net",
		"sameAs": [
			"https://github.com/jhg",
			"https://linkedin.com/in/jesushdezhere"
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
<section class="text-center py-8 min-h-[200px] mt-50 sm:mt-56 md:mt-76 lg:mt-84 landscape:mt-26" aria-labelledby="main-heading">
	<h1 id="main-heading" class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-stroke">
		Jesus Hernandez
	</h1>
	<p class="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6 landscape:mb-18 mt-20 sm:mt-26 md:mt-30 lg:mt-34 landscape:mt-10 text-stroke">
		Digital products creator, software developer, and business innovator.
	</p>
</section>

<PortraitImage />

<!-- About Section - Visible content -->
<section class="py-8" aria-labelledby="about-heading">
	<h2 id="about-heading" class="text-center text-2xl font-bold text-white mb-6 text-stroke">About</h2>
	<p class="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 text-stroke">
		I craft digital products that are fast, reliable and easy to use.
		My focus is always on solving real problems and creating clear business value.
	</p>
	<p class="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 text-stroke">
		With the experience of building <a href="https://lenorix.com">lenorix</a>,
		a tech company with international projects,
		I bring both technical expertise and business insight.
		Every project is built to last and ready to grow.
	</p>

	<ServicesGrid />
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

<!-- Social Links Section -->
<section class="py-8 xl:landscape:py-0 text-center" aria-labelledby="social-heading">
    <h2 id="social-heading" class="text-xl font-semibold text-white mb-6 text-stroke xl:landscape:hidden">
        Connect with me
    </h2>
    <SocialLinks />
</section>
