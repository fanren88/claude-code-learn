// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'https://claude-code-learn.vercel.app',
	integrations: [
		starlight({
			title: 'Claude Code Learn',
			description:
				'Beginner-friendly guides for Claude Code — install, configure, concepts, and curated articles.',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			defaultLocale: 'zh-cn',
			locales: {
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			customCss: ['./src/styles/custom.css', './src/styles/motion.css'],
			components: {
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
			},
			sidebar: [
				{
					label: '入门',
					translations: { en: 'Getting Started' },
					items: [
						{
							label: '什么是 Claude Code',
							translations: { en: 'What is Claude Code' },
							slug: 'start/intro',
						},
						{
							label: '5 分钟入门',
							translations: { en: 'Quickstart' },
							slug: 'start/quickstart',
						},
						{
							label: '安装',
							translations: { en: 'Installation' },
							slug: 'start/install',
						},
						{
							label: '登录与账号',
							translations: { en: 'Authentication' },
							slug: 'start/authentication',
						},
						{
							label: '使用界面',
							translations: { en: 'Interfaces' },
							slug: 'start/interfaces',
						},
					],
				},
				{
					label: '原理',
					translations: { en: 'Concepts' },
					items: [
						{
							label: '工作原理',
							translations: { en: 'How it works' },
							slug: 'concepts/how-it-works',
						},
						{
							label: '工具与权限',
							translations: { en: 'Tools & permissions' },
							slug: 'concepts/tools-and-permissions',
						},
						{
							label: '上下文与 CLAUDE.md',
							translations: { en: 'Context & CLAUDE.md' },
							slug: 'concepts/context',
						},
						{
							label: '会话',
							translations: { en: 'Sessions' },
							slug: 'concepts/sessions',
						},
						{
							label: 'Skills 与 Hooks',
							translations: { en: 'Skills & Hooks' },
							slug: 'concepts/skills-and-hooks',
						},
						{
							label: 'MCP',
							slug: 'concepts/mcp',
						},
					],
				},
				{
					label: '配置',
					translations: { en: 'Configure' },
					items: [
						{
							label: '配置概览',
							translations: { en: 'Settings overview' },
							slug: 'configure/settings-overview',
						},
						{
							label: 'settings.json',
							slug: 'configure/settings-json',
						},
						{
							label: '权限',
							translations: { en: 'Permissions' },
							slug: 'configure/permissions',
						},
					],
				},
				{
					label: '实践',
					translations: { en: 'Guides' },
					items: [
						{
							label: '提示词技巧',
							translations: { en: 'Prompting' },
							slug: 'guides/prompting',
						},
						{
							label: 'Git 工作流',
							translations: { en: 'Git workflows' },
							slug: 'guides/git-workflows',
						},
					],
				},
				{
					label: '收藏',
					translations: { en: 'Library' },
					items: [
						{
							label: '精选文章',
							translations: { en: 'Curated articles' },
							slug: 'resources',
						},
						{
							label: '站内文章',
							translations: { en: 'Site articles' },
							slug: 'articles',
						},
						{
							label: '第一次怎么问',
							translations: { en: 'First session prompt' },
							slug: 'articles/first-use',
						},
						{
							label: 'Obsidian 实操',
							translations: { en: 'Obsidian workflow' },
							slug: 'articles/obsidian-claude-code',
						},
					],
				},
				{
					label: '帮助',
					translations: { en: 'Help' },
					items: [
						{
							label: '常见问题',
							translations: { en: 'FAQ' },
							slug: 'help/faq',
						},
						{
							label: '关于本站',
							translations: { en: 'About' },
							slug: 'help/about',
						},
					],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: '/og-image.svg',
					},
				},
			],
		}),
	],
});
