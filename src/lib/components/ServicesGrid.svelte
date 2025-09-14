<script>
import ServiceCard from "$lib/components/ServiceCard.svelte";
</script>

<div class="text-center max-w-3xl mx-auto">
	<h3 class="text-xl font-semibold text-white mb-4 text-stroke">Services</h3>
	<p class="text-gray-400/50 font-normal text-xs mb-2 text-right mx-2 select-none lg:hidden" aria-hidden="true">touch a block to flip it</p>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3.5 md:gap-4 lg:gap-4.5 text-gray-200">
		<ServiceCard>
			Digital Product<br>Development
			{#snippet backSide()}
				From idea to launch, I build complete digital products caring the UX/UI.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			Web<br>Applications
			{#snippet backSide()}
				Fast and user-friendly web apps & APIs. With SEO in mind from the beginning.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			Technology<br>Strategy
			{#snippet backSide()}
				Clear guidance to choose the right tech for your goals.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			Mobile & Desktop<br>Apps
			{#snippet backSide()}
				Apps for mobile and desktop, built to scale.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			AI<br>Integrations
			{#snippet backSide()}
				AI tools for your app. MCP servers to integrate your service with AI apps.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			Servers<br>High-Performance
			{#snippet backSide()}
				Powerful and scalable server solutions.
			{/snippet}
		</ServiceCard>
	</div>
</div>