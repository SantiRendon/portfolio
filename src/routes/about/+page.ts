export const load = async () => {
	const about = await import('../../../about/about.md');
	const acerca = await import('../../../about/acerca.md');

	return {
		about: {
			content: about.default,
			meta: about.metadata
		},
		acerca: {
			content: acerca.default,
			meta: acerca.metadata
		}
	};
};
