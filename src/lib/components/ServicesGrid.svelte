<script>
import ServiceCard from "$lib/components/ServiceCard.svelte";
</script>

<div class="text-center max-w-3xl mx-auto">
	<h3 class="text-xl font-semibold text-white mb-4 text-stroke">Services</h3>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3.5 md:gap-4 lg:gap-4.5 text-gray-200">
		<ServiceCard>
			Digital Product<br>Development
		</ServiceCard>
		<ServiceCard>
			Web<br>Applications
		</ServiceCard>
		<ServiceCard>
			Technology<br>Strategy
		</ServiceCard>
		<ServiceCard>
			Mobile & Desktop<br>Apps
		</ServiceCard>
		<ServiceCard>
			AI<br>Integrations
		</ServiceCard>
		<ServiceCard>
			Servers<br>High-Performance
		</ServiceCard>
	</div>
</div>