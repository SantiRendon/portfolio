<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { Dialog, Separator, Label } from 'bits-ui';
	import { getSocials, resume } from '$lib/config';
	import { cn } from '$lib/utils';
	import { X, FileText } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let dialogOpen = false;
</script>

<div class="max-w-2xl py-4 mx-auto grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4">
	{#each getSocials({ exclude: 'Resume' }) as { display, href, icon }}
		<a
			{href}
			target="_blank"
			class={cn('justify-between gap-3', buttonVariants({ variant: 'outline' }))}
		>
			<svelte:component this={icon} />
			<p>{display}</p>
		</a>
	{/each}
	<button
		on:click={() => (dialogOpen = true)}
		class={cn('justify-between gap-3', buttonVariants({ variant: 'outline' }))}
	>
		<svelte:component this={FileText} />
		<p>{'Resume'}</p>
	</button>

	<Dialog.Root bind:open={dialogOpen}>
		<Dialog.Portal>
			<Dialog.Overlay
				transition={fade}
				transitionConfig={{ duration: 150 }}
				class="fixed inset-0 z-50 bg-black/80"
			/>
			<Dialog.Content
				class="fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-xl border bg-background p-5 shadow-popover outline-none sm:max-w-[490px] md:w-full"
			>
				<Dialog.Title
					class="flex w-full items-center justify-center text-lg font-semibold tracking-tight"
					>Pick Language</Dialog.Title
				>
				<Separator.Root class="-mx-5 mb-6 mt-5 block h-px bg-muted" />
				<div class="flex flex-row justify-center gap-10">
					{#each resume as { display, href, icon }}
						<a
							{href}
							target="_blank"
							class={cn('justify-between gap-3 w-1/2', buttonVariants({ variant: 'outline' }))}
						>
							<svelte:component this={icon} />
							<p>{display}</p>
						</a>
					{/each}
				</div>
				<div class="flex w-full justify-end">
					<Dialog.Close
						class="inline-flex h-input items-center justify-center rounded-input bg-dark px-[50px] text-[15px] font-semibold text-background shadow-mini hover:bg-dark/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
					>
						Save
					</Dialog.Close>
				</div>
				<Dialog.Close
					class="absolute right-5 top-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
				>
					<div>
						<!-- <X class="size-5 text-foreground" /> -->
						<svelte:component this={X} />
						<span class="sr-only">Close</span>
					</div>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
</div>
