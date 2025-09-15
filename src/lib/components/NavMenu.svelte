<script>
	import { page } from '$app/stores';
</script>

<nav class="fixed top-1 inset-x-4 max-w-4xl mx-auto z-50 bg-glass shadow-glass rounded-full px-6 py-2">
	<div class="flex justify-center gap-6">
		{#if $page.route.id === '/'}
			<span class="text-white font-medium border-b-2 border-white/50 pb-1 cursor-default">
				Home
			</span>
		{:else}
			<a href="/" class="text-white hover:text-gray-300 transition-colors duration-300 font-medium">
				Home
			</a>
		{/if}

		{#if $page.route.id === '/portfolio'}
			<span class="text-white font-medium border-b-2 border-white/50 pb-1 cursor-default">
				Portfolio
			</span>
		{:else}
			<a href="/portfolio" class="text-white hover:text-gray-300 transition-colors duration-300 font-medium">
				Portfolio
			</a>
		{/if}
	</div>
</nav>