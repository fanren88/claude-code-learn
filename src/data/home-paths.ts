/** 首页三条学习入口（对标 herms-agent 首页 PathCard） */
export const homePaths = [
	{
		href: '/start/quickstart/',
		title: '入门路径',
		description: '安装、登录、第一次对话与界面概览 — 先跑通再深入。',
		count: '5 篇教程',
		duration: '约 45 分钟',
		icon: 'learn' as const,
	},
	{
		href: '/learn/',
		title: '完整学习路径',
		description: '按推荐顺序走完原理、配置与核心能力，建立系统认知。',
		count: '12 篇教程',
		duration: '约 2 小时',
		icon: 'path' as const,
	},
	{
		href: '/resources/',
		title: '实践与收藏',
		description: '提示词与 Git 工作流，外加社区精选文章与站内实操。',
		count: '指南 + 文章',
		duration: '按需阅读',
		icon: 'resources' as const,
	},
] as const;
