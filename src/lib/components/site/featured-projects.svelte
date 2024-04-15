<script lang="ts">
	import { projects } from '$lib/projects';
	import { Masonry, ProjectCard } from '.';
	import { Button } from '$lib/components/ui/button';
	import { _, isLoading } from 'svelte-i18n';
	const featured = projects.filter((project) => {
		return project.featured;
	});
</script>

<div class="flex flex-col items-start py-10 md:items-center md:container space-y-5">
	<div class="items-start px-4 flex flex-col gap-3 md:items-center">
		<h1
			class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl"
		>
			{#if $isLoading}
				<span
					class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"
				/>
			{:else}
				{$_('home_featured-projects--title')}
			{/if}
		</h1>
		<p class="text-muted-foreground">{$_('home_featured-projects--subtitle')}</p>
		<div>
			<Button href="/projects" class="text-base">
				{#if $isLoading}
					<span
						class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"
					/>
				{:else}
					{$_('home_featured-projects--call-to-action')}
				{/if}
			</Button>
		</div>
	</div>
</div>

<div class="max-w-7xl md:mx-auto gap-x-[5px]">
	<Masonry items={featured} reset gridGap={'0.9rem'}>
		{#each featured as project}
			<ProjectCard {project} />
		{/each}
	</Masonry>
</div>
