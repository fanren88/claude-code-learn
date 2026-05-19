/** 顶部横向主导航（对标 herms-agent SiteHeader） */
export const topNav = [
	{ href: '/learn/', label: '学习路径' },
	{ href: '/start/intro/', label: '入门' },
	{ href: '/concepts/how-it-works/', label: '原理' },
	{ href: '/configure/settings-overview/', label: '配置' },
	{ href: '/guides/prompting/', label: '实践' },
	{ href: '/resources/', label: '资源' },
	{ href: '/help/faq/', label: '帮助' },
] as const;

export const githubUrl = 'https://github.com/anthropics/claude-code';

export function isTopNavActive(pathname: string, href: string): boolean {
	const current = pathname.replace(/\/$/, '') || '/';

	if (href.startsWith('/#')) {
		return current === '/';
	}

	const target = href.replace(/\/$/, '') || '/';
	if (target === '/') return current === '/';

	return current === target || current.startsWith(`${target}/`);
}
