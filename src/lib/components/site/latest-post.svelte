<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Post } from '$lib/types';
	import Blogcard from './blogcard.svelte';
	import { _, isLoading } from 'svelte-i18n';
	export let data: {
		posts: Post[];
	};

	let post = data.posts[0];
</script>

<div class="mt-12">
	<div class="md:container">
		<div class="flex flex-col items-start justify-between md:flex-row md:items-center space-y-7">
			<div class="space-y-3 md:w-[80%]">
				<div class="text-start">
					<h1
						class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl"
					>
						{#if $isLoading}
							<span
								class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"
							/>
						{:else}
							{$_('home_latest-post--title')}
						{/if}
					</h1>
				</div>
				<p class="text-muted-foreground">{$_('home_latest-post--subtitle')}</p>
				<div>
					<Button href="/blog" class="text-base">
						{#if $isLoading}
							<span
								class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"
							/>
						{:else}
							{$_('home_latest-post--call-to-action')}
						{/if}
					</Button>
				</div>
			</div>
			<div class="-mx-2 shadow-xl space-y-2 md:max-w-sm lg:max-w-md rounded-2xl no-highlight">
				<Blogcard {post} shallow={true} />
			</div>
		</div>
	</div>
</div>
