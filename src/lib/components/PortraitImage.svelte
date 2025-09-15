<script>
	import heroImage from '$lib/assets/img/wb-jesus-hernandez.avif';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';

	let shouldFadeIn = $state(true);

	$effect(() => {
		if ($navigating && $navigating.from && $navigating.to) {
			if ($navigating.from.route?.id && $navigating.to.route?.id) {
				shouldFadeIn = false;
			}
		}
	});
</script>

<figure class="select-none">
	<img src={heroImage} alt="Jesus Hernandez in suit - White & Black Portrait taken in 2024 in Beijing, China"
		class="fixed top-0 right-0 h-lvh w-auto z-[-1] object-cover {shouldFadeIn ? 'fade-in-1s' : ''}"
		style="mask: linear-gradient(to left, white 0%, white 52%, transparent 93%);"
		fetchpriority="high"
		width="5464"
		height="8192"
	/>
	<figcaption class="text-xs fixed bottom-0 right-0 mr-2 mb-1 z-[-1] text-gray-400/50" aria-hidden="true">Portrait taken in 2024 in Beijing, China</figcaption>
</figure>