<script lang="ts">
	import { Menu, Search, X } from 'lucide-svelte';
	import { ThemeToggle } from '.';
	import { Button } from '../ui/button';
	import { openMobileMenu, searchOpen } from '$lib/stores';
	import { Toc } from './table-of-contents';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let themeClass: string;

	onMount(() => {
		if (localStorage.getItem('mode')?.replace(/^"(.*)"$/, '$1') === 'light') {
			themeClass = 'light-mode--filter';
		} else {
			themeClass = 'dark-mode--filter';
		}
	});
</script>

<div class="items-center h-16 px-2 bg-gray-300 border rounded-lg grid grid-cols-3 dark:bg-zinc-800">
	<div class="flex">
		<a
			href="/"
			class="text-3xl font-semibold tracking-wider md:text-4xl"
			style="font-family: 'Fuggles', cursive;"
		>
		<img
		src="../../../../static/logo/png/logo-no-background.png"
		class="{themeClass} w-24"
		alt="logo"
	/>
		</a>
	</div>

	<div class="mx-auto">
		{#if !$openMobileMenu && $page.url.pathname === `/blog/${$page.params.slug}`}
			<div>
				<Toc />
			</div>
		{/if}
		{#if $page.url.pathname === '/blog'}
			<div>
				<Button
					variant="ghost"
					size="icon"
					on:click={() => {
						$searchOpen = true;
					}}
				>
					<Search />
				</Button>
			</div>
		{/if}
	</div>

	<div class="flex items-center justify-end space-x-1 no-highlight">
		<ThemeToggle />
		<button on:click={() => ($openMobileMenu = !$openMobileMenu)} class="p-1 bg-none">
			{#if !$openMobileMenu}
				<Menu />
			{:else}
				<X />
			{/if}
		</button>
	</div>
</div>

<style>
	.dark-mode--filter {
		filter: invert(99%) sepia(1%) saturate(974%) hue-rotate(246deg) brightness(116%) contrast(100%);
	}
	.light-mode--filter {
		filter: invert(0%) sepia(0%) saturate(1%) hue-rotate(135deg) brightness(101%) contrast(101%);
	}
</style>