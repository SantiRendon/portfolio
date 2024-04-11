import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';
import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';

export const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');

const defaultLocale = 'en';

register('en', () => import('./lang/en.json'));
register('es', () => import('./lang/es.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale
});
