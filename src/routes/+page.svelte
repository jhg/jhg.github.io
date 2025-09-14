<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import heroImage from '$lib/assets/img/wb-jesus-hernandez.avif';
	import ServicesGrid from "$lib/components/ServicesGrid.svelte";
	import GithubIcon from '$lib/assets/img/social/github.svg?component';
	import DiscordIcon from '$lib/assets/img/social/discord.svg?component';
	import linkedinIcon from '$lib/assets/img/social/linkedin.png';
</script>

<svelte:head>
	<title>Jesus Hernandez</title>
	<!-- Basic meta tags -->
	<meta name="author" content="Jesus Hernandez" />
	<meta name="keywords" content="jesus hernandez, developer, software, digital, innovation, bussines" />
	<meta name="description" content="Digital products creator, software developer, and business innovator. From idea to launch, to align technology with business." />

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
<section class="text-center py-8 min-h-[200px] mt-50 sm:mt-56 md:mt-76 lg:mt-84 landscape:mt-26" aria-labelledby="main-heading">
	<h1 id="main-heading" class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-stroke">
		Jesus Hernandez
	</h1>
	<p class="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6 landscape:mb-18 mt-20 sm:mt-26 md:mt-30 lg:mt-34 landscape:mt-10 text-stroke">
		Digital products creator, software developer, and business innovator.
	</p>
</section>

<figure>
	<img src={heroImage} alt="Jesus Hernandez in suit - White & Black Portrait taken in 2024 in Beijing, China"
		class="fixed top-0 right-0 h-lvh w-auto z-[-1] object-cover fade-in-1s"
		style="mask: linear-gradient(to left, white 0%, white 52%, transparent 93%);"
		fetchpriority="high"
		width="5464"
		height="8192"
	/>
	<figcaption class="text-xs fixed bottom-0 right-0 mr-2 mb-1 z-[-1] text-gray-400/50 select-none" aria-hidden="true">Portrait taken in 2024 in Beijing, China</figcaption>
</figure>

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
    <div class="flex justify-center gap-6 bg-glass shadow-glass rounded-lg px-4 py-4 mx-auto w-fit xl:landscape:fixed xl:landscape:right-6 xl:landscape:top-1/2 xl:landscape:translate-y-16 xl:landscape:flex-col xl:landscape:gap-4 xl:landscape:pt-6 xl:landscape:pl-4">
        <a href="https://linkedin.com/in/jesushdezhere" class="social-link group" aria-label="LinkedIn Profile" rel="noopener noreferrer" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" width="840" height="779" class="md:landscape:w-10 md:landscape:h-auto w-auto h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a href="https://github.com/jhg" class="social-link group" aria-label="GitHub Profile" rel="noopener noreferrer" target="_blank">
            <GithubIcon class="w-10 h-10 fill-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a href="https://discord.gg/9xW8CDx87d" class="social-link group" aria-label="Discord Server" rel="nofollow noopener noreferrer" target="_blank">
            <DiscordIcon class="w-10 h-10 fill-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
    </div>
</section>
