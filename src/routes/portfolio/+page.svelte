<script>
	import PortraitImage from "$lib/components/PortraitImage.svelte";
	import NavMenu from "$lib/components/NavMenu.svelte";
    import SocialLinks from "$lib/components/SocialLinks.svelte";
	import PortfolioCard from "$lib/components/PortfolioCard.svelte";
	import PhotoCarousel from "$lib/components/PhotoCarousel.svelte";

    import ImgSimpleforms1 from "$lib/assets/img/portfolio/simpleforms-1.png";
    import ImgSimpleforms2 from "$lib/assets/img/portfolio/simpleforms-2.png";

    import ImgTrophyBot1 from "$lib/assets/img/portfolio/trophy-bot-1.png";
    import ImgTrophyBot2 from "$lib/assets/img/portfolio/trophy-bot-2.png";

    import ImgFilamentLayoutManager1 from "$lib/assets/img/portfolio/filament-layout-manager-1.png";
    import ImgLenorix1 from "$lib/assets/img/portfolio/lenorix-1.png";
</script>

<svelte:head>
	<title>Portfolio - Jesus Hernandez</title>
	<meta name="description" content="Portfolio of digital products and software projects by Jesus Hernandez - Software Developer & Business Innovator." />
	<meta name="keywords" content="portfolio, projects, digital products, web applications, software development, jesus hernandez" />
</svelte:head>

<NavMenu />
<PortraitImage />

<main class="px-4 py-8 mt-24">
	<h1 class="text-4xl md:text-5xl font-bold text-white mb-16 text-center text-stroke max-w-4xl mx-auto">
		Portfolio
	</h1>

	<PortfolioCard>
		{#snippet leftContent()}
			<PhotoCarousel>
				<div class="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-900/20 carousel-slide">
					<img src="{ImgSimpleforms1}" alt="simple forms dashboard" class="w-full h-full object-cover" />
				</div>
				<div class="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-900/20 carousel-slide">
					<img src="{ImgSimpleforms2}" alt="simple forms edit view" class="w-full h-full object-cover" />
				</div>
			</PhotoCarousel>
		{/snippet}

		{#snippet rightContent()}
			<h2 class="text-2xl lg:text-3xl font-bold text-white mb-4 text-stroke">
				Simple Forms
			</h2>
			<div class="text-gray-200 mb-6 space-y-3">
				<p class="leading-relaxed text-stroke mb-8">
					A simple way to receive forms, surveys and emails. With spam protection system and customizable dashboard.
				</p>
				<a href="https://simpleforms.lenorix.com"
				   class="px-4 py-2 bg-glass rounded border border-gray-400 text-white hover:bg-gray-400/50 transition-colors duration-300 font-medium">
                    Visit Simple Forms
				</a>
			</div>
		{/snippet}
	</PortfolioCard>

	<PortfolioCard>
		{#snippet leftContent()}
			<PhotoCarousel>
				<div class="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-900/20 carousel-slide">
					<img src="{ImgTrophyBot2}" alt="Trophy bot in top.gg" class="w-full h-full object-cover" />
				</div>
                <div class="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-900/20 carousel-slide">
                    <img src="{ImgTrophyBot1}" alt="Discord Trophy bot profile" class="w-full h-full object-cover" />
                </div>
			</PhotoCarousel>
		{/snippet}

		{#snippet rightContent()}
			<h2 class="text-2xl lg:text-3xl font-bold text-white mb-4 text-stroke">
				Current Trophy bot maintainer
			</h2>
			<div class="text-gray-200 mb-6 space-y-3">
				<p class="leading-relaxed text-stroke">
					A discord bot in +1500 servers, to give trophies to users for their achievements and milestones.
                    It helps communities to engage and reward their members.
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<a href="https://discord.com/oauth2/authorize?client_id=985134052665356299&permissions=34816&scope=applications.commands%20bot" rel="noopener noreferrer"
				   class="px-4 py-2 bg-glass rounded border border-gray-400 text-white hover:bg-gray-400/50 transition-colors duration-300 font-medium">
					Add Trophy to your server
				</a>
			</div>
		{/snippet}
	</PortfolioCard>

	<PortfolioCard>
		{#snippet leftContent()}
			<PhotoCarousel>
				<div class="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-900/20 carousel-slide">
					<img src="{ImgFilamentLayoutManager1}" alt="Dashboard layout in Filament v4" class="w-full h-full object-cover" />
				</div>
			</PhotoCarousel>
		{/snippet}

		{#snippet rightContent()}
			<h2 class="text-2xl lg:text-3xl font-bold text-white mb-4 text-stroke">
				Filament Layout Manager contributor
			</h2>
			<div class="text-gray-200 mb-6 space-y-3">
				<p class="leading-relaxed text-stroke">
					An open-source package to create custom dashboard layouts.
				</p>
				<p class="leading-relaxed text-stroke">
					<a href="https://github.com/asosick/filament-layout-manager/pull/7" rel="noopener noreferrer" class="underline">I fixed styles to support Filament v4.</a>
				</p>
			</div>
		{/snippet}
	</PortfolioCard>

	<PortfolioCard>
		{#snippet rightContent()}
			<h2 class="text-2xl lg:text-3xl font-bold text-white mb-4 text-stroke">
				Other packages & tools
			</h2>
			<div class="text-gray-200 mb-6">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="space-y-2">
                        <h3 class="text-lg font-semibold text-white text-stroke">CarvBin2Lite</h3>
                        <p class="text-sm text-stroke">
                            I contributed in this to optimize performance. It's a binary carving tool in Python to extract SQLite databases from binary files.
                        </p>
                        <a href="https://github.com/jhg/CarvBin2Lite" target="_blank" rel="noopener noreferrer"
                           class="text-xs text-blue-300 hover:text-blue-200 transition-colors duration-300 underline text-stroke">
                            View on GitHub
                        </a>
                    </div>
                    <div class="space-y-2">
                        <h3 class="text-lg font-semibold text-white text-stroke">Scanf RS</h3>
                        <p class="text-sm text-stroke">
                            Rust's package to parse simple text inputs, like scanf function in C.
                        </p>
                        <a href="https://crates.io/crates/scanf" target="_blank" rel="noopener noreferrer"
                           class="text-xs text-blue-300 hover:text-blue-200 transition-colors duration-300 underline text-stroke">
                            View on crates.io
                        </a>
                    </div>
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-white text-stroke">Opaque Pointer</h3>
						<p class="text-sm text-stroke">
							Harnessing generics with opaque pointers for seamless Rust FFI interoperability with C and C++.
						</p>
						<a href="https://crates.io/crates/opaque-pointer" target="_blank" rel="noopener noreferrer"
						   class="text-xs text-blue-300 hover:text-blue-200 transition-colors duration-300 underline text-stroke">
							View on crates.io
						</a>
					</div>
				</div>
			</div>
		{/snippet}
	</PortfolioCard>

    <PortfolioCard>
        {#snippet leftContent()}
            <PhotoCarousel>
                <div class="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-900/20 carousel-slide">
                    <img src="{ImgLenorix1}" alt="lenorix website" class="w-full h-full object-cover" />
                </div>
            </PhotoCarousel>
        {/snippet}

        {#snippet rightContent()}
            <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4 text-stroke">
                Web of lenorix
            </h2>
            <!--<div class="text-gray-200 mb-6 space-y-3">
                <p class="leading-relaxed text-stroke">
                    An open-source package to create custom dashboard layouts.
                </p>
            </div>-->
            <div class="mb-4">
                <a href="https://lenorix.com"
                   class="text-white hover:text-gray-300 transition-colors duration-300 underline mr-4 text-stroke">
                    Visit lenorix.com
                </a>
            </div>
        {/snippet}
    </PortfolioCard>
</main>

<SocialLinks />