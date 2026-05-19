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
				'面向初学者的 Claude Code 学习站 — 安装、配置、原理与精选文章。',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			customCss: ['./src/styles/custom.css', './src/styles/motion.css'],
			components: {
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				ThemeSelect: './src/components/starlight/ThemeSelect.astro',
			},
			sidebar: [
				{
					label: '入门',
					items: [
						{ label: '什么是 Claude Code', slug: 'start/intro' },
						{ label: '5 分钟入门', slug: 'start/quickstart' },
						{ label: '安装', slug: 'start/install' },
						{ label: '登录与账号', slug: 'start/authentication' },
						{ label: '使用界面', slug: 'start/interfaces' },
					],
				},
				{
					label: '原理',
					items: [
						{ label: '工作原理', slug: 'concepts/how-it-works' },
						{ label: '工具与权限', slug: 'concepts/tools-and-permissions' },
						{ label: '上下文与 CLAUDE.md', slug: 'concepts/context' },
						{ label: '会话', slug: 'concepts/sessions' },
						{ label: 'Skills 与 Hooks', slug: 'concepts/skills-and-hooks' },
						{ label: 'MCP', slug: 'concepts/mcp' },
					],
				},
				{
					label: '配置',
					items: [
						{ label: '配置概览', slug: 'configure/settings-overview' },
						{ label: 'settings.json', slug: 'configure/settings-json' },
						{ label: '权限', slug: 'configure/permissions' },
					],
				},
				{
					label: '实践',
					items: [
						{ label: '提示词技巧', slug: 'guides/prompting' },
						{ label: 'Git 工作流', slug: 'guides/git-workflows' },
					],
				},
				{
					label: '收藏',
					items: [
						{ label: '精选文章', slug: 'resources' },
						{ label: '站内文章', slug: 'articles' },
						{ label: '第一次怎么问', slug: 'articles/first-use' },
						{ label: 'Obsidian 实操', slug: 'articles/obsidian-claude-code' },
					],
				},
				{
					label: '帮助',
					items: [
						{ label: '常见问题', slug: 'help/faq' },
						{ label: '关于本站', slug: 'help/about' },
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
