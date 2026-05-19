/** Keep in sync with sidebar order in astro.config.mjs */
export interface TrailItem {
	slug: string;
	label: string;
}

export const trails: Record<'zh-cn' | 'en', TrailItem[]> = {
	'zh-cn': [
		{ slug: 'start/intro', label: '什么是 Claude Code' },
		{ slug: 'start/quickstart', label: '5 分钟入门' },
		{ slug: 'start/install', label: '安装' },
		{ slug: 'start/authentication', label: '登录与账号' },
		{ slug: 'start/interfaces', label: '使用界面' },
		{ slug: 'concepts/how-it-works', label: '工作原理' },
		{ slug: 'concepts/tools-and-permissions', label: '工具与权限' },
		{ slug: 'concepts/context', label: '上下文与 CLAUDE.md' },
		{ slug: 'concepts/sessions', label: '会话' },
		{ slug: 'concepts/skills-and-hooks', label: 'Skills 与 Hooks' },
		{ slug: 'concepts/mcp', label: 'MCP' },
		{ slug: 'configure/settings-overview', label: '配置概览' },
		{ slug: 'configure/settings-json', label: 'settings.json' },
		{ slug: 'configure/permissions', label: '权限' },
		{ slug: 'guides/prompting', label: '提示词技巧' },
		{ slug: 'guides/git-workflows', label: 'Git 工作流' },
		{ slug: 'resources', label: '精选文章' },
		{ slug: 'articles', label: '站内文章' },
		{ slug: 'articles/first-use', label: '第一次怎么问' },
		{ slug: 'articles/obsidian-claude-code', label: 'Obsidian 实操' },
		{ slug: 'help/faq', label: '常见问题' },
		{ slug: 'help/about', label: '关于本站' },
	],
	en: [
		{ slug: 'start/intro', label: 'What is Claude Code' },
		{ slug: 'start/quickstart', label: 'Quickstart' },
		{ slug: 'start/install', label: 'Installation' },
		{ slug: 'start/authentication', label: 'Authentication' },
		{ slug: 'start/interfaces', label: 'Interfaces' },
		{ slug: 'concepts/how-it-works', label: 'How it works' },
		{ slug: 'concepts/tools-and-permissions', label: 'Tools & permissions' },
		{ slug: 'concepts/context', label: 'Context & CLAUDE.md' },
		{ slug: 'concepts/sessions', label: 'Sessions' },
		{ slug: 'concepts/skills-and-hooks', label: 'Skills & Hooks' },
		{ slug: 'concepts/mcp', label: 'MCP' },
		{ slug: 'configure/settings-overview', label: 'Settings overview' },
		{ slug: 'configure/settings-json', label: 'settings.json' },
		{ slug: 'configure/permissions', label: 'Permissions' },
		{ slug: 'guides/prompting', label: 'Prompting' },
		{ slug: 'guides/git-workflows', label: 'Git workflows' },
		{ slug: 'resources', label: 'Curated articles' },
		{ slug: 'articles', label: 'Site articles' },
		{ slug: 'articles/first-use', label: 'First session prompt' },
		{ slug: 'articles/obsidian-claude-code', label: 'Obsidian workflow' },
		{ slug: 'help/faq', label: 'FAQ' },
		{ slug: 'help/about', label: 'About' },
	],
};

const SKIP_NEXT = new Set(['resources']);

export function getTrailContext(pathname: string): {
	locale: 'zh-cn' | 'en';
	slug: string;
	next: TrailItem | null;
	trailPaths: string[];
	isHub: boolean;
} | null {
	const hubMatch = pathname.match(/^\/(zh-cn|en)\/?$/);
	if (hubMatch) {
		const locale = hubMatch[1] as 'zh-cn' | 'en';
		return { locale, slug: '', next: null, trailPaths: [], isHub: true };
	}

	const match = pathname.match(/^\/(zh-cn|en)\/(.+?)\/?$/);
	if (!match) return null;

	const locale = match[1] as 'zh-cn' | 'en';
	const slug = match[2];
	const items = trails[locale];
	const trailPaths = items.map((item) => `/${locale}/${item.slug}/`);
	const index = items.findIndex((item) => item.slug === slug);

	if (index < 0) return { locale, slug, next: null, trailPaths, isHub: false };

	if (SKIP_NEXT.has(slug) || index >= items.length - 1) {
		return { locale, slug, next: null, trailPaths, isHub: false };
	}

	return {
		locale,
		slug,
		next: items[index + 1] ?? null,
		trailPaths,
		isHub: false,
	};
}
