import { LinkedIn, X } from '$lib/components/site/icons';
import { FileText, Github, Mail } from 'lucide-svelte';

type routesType = {
	name: string;
	link: string;
};

type socialsType = {
	href: string;
	icon: typeof Github;
	display: string;
	class?: string;
};

// nav routes
export const routes: routesType[] = [
	// {
	// 	name: 'Blog',
	// 	link: '/blog'
	// },
	// {
	// 	name: 'Tags',
	// 	link: '/tags'
	// },
	{
		name: 'Projects',
		link: '/projects'
	},
	{
		name: 'About',
		link: '/about'
	}
];

// social icons with links
export const socials: socialsType[] = [
	{
		href: 'https://github.com/SantiRendon',
		icon: Github,
		display: 'GitHub'
	},
	{
		href: 'https://linkedin.com/in/santiago-rendon-castrillon-06056a230',
		icon: LinkedIn,
		display: 'LinkedIn'
	},
	{
		href: 'https://x.com/xantiRendon',
		icon: X,
		display: 'Twitter',
		class: 'h-4 w-4'
	},
	{
		href: 'mailto:xantirendonc@gmail.com',
		icon: Mail,
		display: 'Mail',
		class: 'h-4 w-4'
	},
];

export const getSocials = ({ exclude }: { exclude?: string } = {}): socialsType[] => {
	if (exclude) {
		return socials.filter((social) => social.display !== exclude);
	}
	return socials;
};


// resume icons with links
export const resume : socialsType[] = [
	{
		href: '/cv/EN.pdf',
		icon: FileText,
		display: 'English'
	},
	{
		href: '/cv/ES.pdf',
		icon: FileText,
		display: 'Español'
	}
];

export const githubConfig = {
	username: 'SantiRendon',
	repo: 'prabhukirankonda-portfolio',
	branch: 'main'
};

export const author = {
	name: 'Santiago Rendon Castrillon',
	tagline: 'I train machines to learn and build software to solve problems.',
	avatar: `https://github.com/${githubConfig.username}.png`,
	twt: 'xantiRendon'
};

export const whatsNew: string = `
Currently working on 100 Days of AI. A 100 day challenge to learn, teach and build AI
@ <a href='https://neuralchemie.com' class="underline hover:underline-offset-4">Neuralchemie</a>`;
