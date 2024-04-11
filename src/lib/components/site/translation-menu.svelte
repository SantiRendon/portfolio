<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Languages } from 'lucide-svelte';
	import { locale } from 'svelte-i18n';
</script>

<div class="absolute bottom-4 right-4 hidden lg:block">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder class="md:w-9 md:h-9 p-0">
			<Button builders={[builder]} variant="secondary" class="p-2 focus:scale-90">
				<Languages size="24" />
			</Button>
			<!-- <span class="sr-only">Toggle theme</span> -->
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="z-[100] -ml-7">
			<DropdownMenu.Item
				on:click={() => {
					$locale = 'en';
				}}
				class="flex items-center space-x-2"
			>
				<span>English</span>
			</DropdownMenu.Item>

			<DropdownMenu.Item
				on:click={() => {
					$locale = 'es';
				}}
				class="flex items-center space-x-2"
			>
				<span>Spanish</span>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>

<style>
</style>
