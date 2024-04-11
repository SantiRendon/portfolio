import type { Post } from '$lib/types';
import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export async function load({ fetch }) {
	const response = await fetch('/api/posts?latest=true');
	const posts: Post[] = await response.json();
	return {
		posts
	};
}

export const _handle: Handle = async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.split(',')[0];
	console.log(lang)
	if (lang) {
	  locale.set(lang);
	}
	return resolve(event);
  };

