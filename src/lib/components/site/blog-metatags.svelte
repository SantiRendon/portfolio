<script lang="ts">
	import { page } from '$app/stores';
	import type { Post } from '$lib/types';
	import { MetaTags } from 'svelte-meta-tags';

	export let meta: Post;
</script>

<MetaTags
	title={meta.title}
	description={meta.description}
	openGraph={{
		url: $page.url.href,
		title: meta.title,
		description: meta.description,
		images: [
			{
				url: typeof meta.image === 'string' ? meta.image : meta.image[0],
				width: 800,
				height: 600,
				alt: meta.title
			}
		],
		siteName: 'Santiago Rendon Castrillon'
	}}
	twitter={{
		handle: '@xantiRendon',
		cardType: 'summary_large_image',
		title: meta.title,
		description: meta.description,
		image: typeof meta.image === 'string' ? meta.image : meta.image[0],
		imageAlt: meta.title
	}}
/>
