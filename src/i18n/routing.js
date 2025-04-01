import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'fr', 'ja', 'de', 'ru', 'es',"fa","ar"],

	// Used when no locale matches
	defaultLocale: 'en'
});