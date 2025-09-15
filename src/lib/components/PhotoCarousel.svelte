<script>
	import { onMount } from 'svelte';

	let currentIndex = $state(0);
	let carouselElement = $state(null);
	let isTouch = $state(false);
	let startX = $state(0);
	let currentX = $state(0);
	let isDragging = $state(false);
	let imageElements = $state([]);
	let isHovered = $state(false);

	const totalImages = $derived(imageElements.length);

	onMount(() => {
		if (carouselElement) {
			const slides = carouselElement.querySelectorAll('.carousel-slide');
			imageElements = Array.from(slides);
		}
	});

	function nextImage() {
		currentIndex = (currentIndex + 1) % totalImages;
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + totalImages) % totalImages;
	}

	function goToImage(index) {
		currentIndex = index;
	}

	function handleTouchStart(e) {
		isTouch = true;
		startX = e.touches[0].clientX;
		isDragging = true;
	}

	function handleTouchMove(e) {
		if (!isDragging) return;
		currentX = e.touches[0].clientX;
	}

	function handleTouchEnd() {
		if (!isDragging) return;

		const diff = startX - currentX;
		const threshold = 50;

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				nextImage();
			} else {
				prevImage();
			}
		}

		isDragging = false;
		isTouch = false;
	}

	function handleMouseDown(e) {
		if (isTouch) return;
		startX = e.clientX;
		isDragging = true;
	}

	function handleMouseMove(e) {
		if (!isDragging || isTouch) return;
		currentX = e.clientX;
	}

	function handleMouseUp() {
		if (!isDragging || isTouch) return;

		const diff = startX - currentX;
		const threshold = 50;

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				nextImage();
			} else {
				prevImage();
			}
		}

		isDragging = false;
	}

	function handleClick(e) {
		if (isDragging) return;

		const rect = carouselElement.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const width = rect.width;

		if (clickX < width / 2) {
			prevImage();
		} else {
			nextImage();
		}
	}
</script>

<div class="relative w-full h-full group">
	<div
		bind:this={carouselElement}
		class="relative w-full h-full overflow-hidden cursor-pointer select-none"
		on:touchstart={handleTouchStart}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchEnd}
		on:mousedown={handleMouseDown}
		on:mousemove={handleMouseMove}
		on:mouseup={handleMouseUp}
		on:click={handleClick}
		on:mouseenter={() => isHovered = true}
		on:mouseleave={() => isHovered = false}
		role="button"
		tabindex="0"
	>
		<div
			class="flex transition-transform duration-300 ease-out h-full carousel-container"
			style="transform: translateX(-{currentIndex * 100}%)"
		>
			<slot></slot>
		</div>

	</div>

	{#if totalImages > 1}
		<!-- Previous button -->
		<button
			class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
			on:click|stopPropagation={prevImage}
			aria-label="Previous image"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
			</svg>
		</button>

		<!-- Next button -->
		<button
			class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
			on:click|stopPropagation={nextImage}
			aria-label="Next image"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
			</svg>
		</button>
	{/if}

	{#if totalImages > 1}
		<div class="flex justify-center gap-2 mt-3">
			{#each Array(totalImages) as _, index}
				<button
					class="w-2 h-2 rounded-full transition-colors duration-200 {index === currentIndex ? 'bg-white' : 'bg-white/30'}"
					on:click={() => goToImage(index)}
				/>
			{/each}
		</div>
	{/if}
</div>