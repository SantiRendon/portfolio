import { browser } from '$app/environment';
import { addMessages, init, register } from 'svelte-i18n';
import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';
import en from "$lib/lang/en.json"
import es from "$lib/lang/es.json"

export const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');

const defaultLocale = 'en';

addMessages('en', en)
addMessages('es', es)

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale
});
