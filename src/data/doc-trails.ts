/** Keep in sync with sidebar order in astro.config.mjs */
export interface TrailItem {
	slug: string;
	label: string;
}

export const trail: TrailItem[] = [
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
];

const SKIP_NEXT = new Set(['resources']);

const trailPaths = trail.map((item) => `/${item.slug}/`);

export function getTrailContext(pathname: string): {
	slug: string;
	next: TrailItem | null;
	trailPaths: string[];
	isHub: boolean;
} | null {
	const normalized =
		pathname === '/' || pathname === ''
			? '/'
			: pathname.endsWith('/')
				? pathname
				: `${pathname}/`;

	if (normalized === '/') {
		return { slug: '', next: null, trailPaths: [], isHub: true };
	}

	const match = normalized.match(/^\/(.+?)\/?$/);
	if (!match) return null;

	const slug = match[1];
	const index = trail.findIndex((item) => item.slug === slug);

	if (index < 0) return { slug, next: null, trailPaths, isHub: false };

	if (SKIP_NEXT.has(slug) || index >= trail.length - 1) {
		return { slug, next: null, trailPaths, isHub: false };
	}

	return {
		slug,
		next: trail[index + 1] ?? null,
		trailPaths,
		isHub: false,
	};
}
