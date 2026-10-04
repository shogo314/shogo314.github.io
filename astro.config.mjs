// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://shogo314.github.io',
	integrations: [
		starlight({
			title: 'shogo314',
			defaultLocale: 'root',
			locales: {
				root: { label: '日本語', lang: 'ja' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/shogo314' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/shogo3142' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@shogo3142' },
			],
			sidebar: [
				{ label: 'トップ', link: '/' },
				{ label: '作ったもの', slug: 'projects' },
				{ label: '戦績・受賞', slug: 'results' },
				{ label: 'アカウント', slug: 'accounts' },
			],
		}),
	],
});
