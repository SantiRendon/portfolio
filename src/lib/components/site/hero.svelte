<script>
	import ProfilePicture from '$lib/assets/profile_picture.jpg';
	import { SocialButtons } from '$lib/components/site';
	import { whatsNew } from '$lib/config';
	import { Mailbox } from 'lucide-svelte';
	import { _ } from 'svelte-i18n';

	// const ProfilePicture = new URL('../../assets/profile_picture.jpg', import.meta.url).href
</script>

<div class="md:container">
	<div class="items-center justify-between mt-5 md:mt-12 md:flex md:flex-row">
		<!-- Image for mobile devices -->
		<img
			src={ProfilePicture}
			alt="Santiago Rendon Castrillon"
			class="block mx-auto rounded-full w-52 h-52 md:hidden"
		/>

		<div class="space-y-3 md:w-1/2 md:mr-4">
			<!-- <div
				class="flex flex-col gap-4 border border-border p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl mt-6 md:mt-0 text-primary"
			>
				<div class="flex items-center gap-4">
					<Mailbox />
					<h1 class="font-semibold">What's New?</h1>
				</div>

				<div>
					{@html whatsNew}
				</div>
			</div> -->

			<h1 class="font-bold md:text-xl">{$_('home_greeting')}</h1>
			<h1 class="text-2xl font-bold md:text-5xl">Santiago Rendón Castrillón</h1>
			<p>
				{$_('home_presentation')}
			</p>
			<SocialButtons />
		</div>

		<img
			src={ProfilePicture}
			alt="Santiago Rendon Castrillon"
			class="hidden rounded-full md:block h-28 w-28 md:h-64 md:w-64 md:self-center"
		/>
	</div>
</div>
