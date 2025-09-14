<script>
import ServiceCard from "$lib/components/ServiceCard.svelte";
</script>

<div class="text-center max-w-3xl mx-auto">
	<h3 class="text-xl font-semibold text-white mb-4 text-stroke">Services</h3>
	<p class="text-gray-400 font-normal text-xs mb-2 text-right mx-2 select-none lg:hidden" aria-hidden="true">touch a block to flip it</p>
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
				Guidance to align technology with business. Managing opportunities and risks.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			Mobile & Desktop<br>Apps
			{#snippet backSide()}
				Apps for mobile and desktop. Offline support and integration with native platform.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			AI<br>Integrations
			{#snippet backSide()}
				AI tools for your app. And MCP servers to integrate your service with AI apps.
			{/snippet}
		</ServiceCard>
		<ServiceCard>
			High-Performance<br>Services
			{#snippet backSide()}
				Network services optimized for performance and concurrency. Scalable and reliable.
			{/snippet}
		</ServiceCard>
	</div>
</div>