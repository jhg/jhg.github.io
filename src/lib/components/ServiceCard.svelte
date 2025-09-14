<script>
	let { children } = $props();
</script>

<div class="p-4 rounded border border-gray-400/25 min-h-32 flex items-center justify-center bg-glass shadow-glass">
	{@render children?.()}
</div>