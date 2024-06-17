<script>
	import { locale } from 'svelte-i18n';

	export let data;

	let { about, acerca } = data;

	$: isEn = $locale?.includes('en');
</script>

{#if isEn}
	<div class="mb-20 mdsvex" id="mdsvex">
		<svelte:component this={about.content} />
	</div>
{:else}
	<div class="mb-20 mdsvex" id="mdsvex">
		<svelte:component this={acerca.content} />
	</div>
{/if}
