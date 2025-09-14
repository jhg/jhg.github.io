<script>
	let { children, backSide } = $props();
	let flipped = $state(false);
</script>

<div class="service-card-container perspective-1000 min-h-32 text-stroke">
	<div
		class="service-card relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer {flipped ? 'rotate-y-180' : ''}"
		role="button"
		tabindex="0"
		onclick={() => flipped = !flipped}
		onkeydown={(e) => e.key === 'Enter' && (flipped = !flipped)}
	>
		<!-- Front Side -->
		<div class="service-card-face front-face p-4 rounded border border-gray-400/25 flex items-center justify-center bg-glass shadow-glass">
			{@render children?.()}
		</div>

		<!-- Back Side -->
		<div class="service-card-face back-face p-3 landscape:p-6 rounded border border-gray-400/25 flex text-left text-justify items-start justify-center bg-glass shadow-glass rotate-y-180">
			{@render backSide?.()}
		</div>
	</div>
</div>

<style>
	.perspective-1000 {
		perspective: 1000px;
	}

	.preserve-3d {
		transform-style: preserve-3d;
	}

	.service-card-face {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.rotate-y-180 {
		transform: rotateY(180deg);
	}
</style>