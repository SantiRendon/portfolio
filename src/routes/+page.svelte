<script lang="ts">
	import { Hero, /*LatestPost,*/ FeaturedProjects } from '$lib/components/site';
	// import type { PageData } from './$types';
	// export let data: PageData;
</script>

<div>
	<div class="p-4 h-screen flex items-center">
		<Hero />
	</div>
	<!-- <div class="p-4">
		<LatestPost {data} />
	</div> -->
	<FeaturedProjects />
</div>
