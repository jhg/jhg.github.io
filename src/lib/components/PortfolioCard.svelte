<script>
	import { onMount } from 'svelte';

	let { leftContent, rightContent } = $props();

	let cardElement = $state(null);
	let isInView = $state(false);
	let scrollY = $state(0);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isInView = entry.isIntersecting;
				});
			},
			{
				threshold: 0.4,
				rootMargin: '-10% 0px -10% 0px'
			}
		);

		if (cardElement) {
			observer.observe(cardElement);
		}

		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const cardClasses = $derived(
		`transition-all duration-1000 ease-out ${
			isInView
				? 'scale-100 opacity-100'
				: 'scale-80 opacity-60'
		}`
	);
</script>

<article
	bind:this={cardElement}
	class="max-w-4xl mx-auto mb-8 bg-glass rounded-lg overflow-hidden {cardClasses}"
>
	<div class="flex flex-col lg:flex-row min-h-[400px]">
		{#if leftContent}
			<div class="w-full lg:w-1/2 h-64 lg:h-auto">
				{@render leftContent()}
			</div>
		{/if}

		<div class="{leftContent ? 'w-full lg:w-1/2' : 'w-full'} p-6 lg:p-8 flex flex-col justify-start">
			{@render rightContent()}
		</div>
	</div>
</article>