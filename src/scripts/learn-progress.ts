const VISITED_KEY = 'cc-learn-visited-v1';
const RESOURCES_KEY = 'cc-learn-resources-v1';

export type Locale = 'zh-cn' | 'en';

export function normalizePath(pathname: string): string | null {
	const match = pathname.match(/^\/(zh-cn|en)\/(.+?)\/?$/);
	if (!match) return null;
	return `/${match[1]}/${match[2]}/`;
}

export function getLocaleFromPath(pathname: string): Locale | null {
	if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
	if (pathname.startsWith('/zh-cn/') || pathname === '/zh-cn') return 'zh-cn';
	return null;
}

export function markVisited(pathname: string): void {
	const normalized = normalizePath(pathname);
	if (!normalized) return;
	try {
		const visited = getVisited();
		visited.add(normalized);
		localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
	} catch {
		/* private mode */
	}
}

export function getVisited(): Set<string> {
	try {
		const raw = localStorage.getItem(VISITED_KEY);
		if (!raw) return new Set();
		return new Set(JSON.parse(raw) as string[]);
	} catch {
		return new Set();
	}
}

export function getResourceChecked(): Record<string, boolean> {
	try {
		const raw = localStorage.getItem(RESOURCES_KEY);
		if (!raw) return {};
		return JSON.parse(raw) as Record<string, boolean>;
	} catch {
		return {};
	}
}

export function setResourceChecked(id: string, checked: boolean): void {
	try {
		const state = getResourceChecked();
		if (checked) state[id] = true;
		else delete state[id];
		localStorage.setItem(RESOURCES_KEY, JSON.stringify(state));
	} catch {
		/* private mode */
	}
}

export function prefersReducedMotion(): boolean {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isInternalDocLink(href: string): boolean {
	if (!href.startsWith('/') || href.startsWith('//')) return false;
	return /^\/(zh-cn|en)\//.test(href);
}

function updateProgressCounts(): void {
	document.querySelectorAll('[data-progress-count]').forEach((el) => {
		if (!(el instanceof HTMLElement)) return;
		const total = Number(el.dataset.progressTotal);
		const pathsRaw = el.dataset.progressPaths;
		if (!total || !pathsRaw) return;
		const paths: string[] = JSON.parse(pathsRaw);
		const visited = getVisited();
		const count = paths.filter((p) => visited.has(p)).length;
		const filled = el.querySelector('[data-progress-filled]');
		if (filled) filled.textContent = String(count);
	});
}

function updateLearningPathStates(): void {
	document.querySelectorAll('[data-learning-step]').forEach((li) => {
		if (!(li instanceof HTMLElement)) return;
		const href = li.dataset.href;
		if (!href) return;
		const path = normalizePath(href);
		li.classList.toggle('is-visited', Boolean(path && getVisited().has(path)));
	});
}

function updateContinueBanner(): void {
	const banner = document.querySelector('[data-continue-learning]');
	if (!(banner instanceof HTMLElement)) return;
	const stepsRaw = banner.dataset.continueSteps;
	const locale = banner.dataset.continueLocale as Locale | undefined;
	const resourcesHref = banner.dataset.continueResources;
	if (!stepsRaw || !locale || !resourcesHref) return;

	const steps: { href: string; title: string }[] = JSON.parse(stepsRaw);
	const visited = getVisited();
	const next = steps.find((s) => {
		const path = normalizePath(s.href);
		return path && !visited.has(path);
	});

	const label = banner.querySelector('[data-continue-label]');
	const link = banner.querySelector<HTMLAnchorElement>('[data-continue-link]');

	if (next && label && link) {
		banner.classList.remove('is-complete');
		banner.hidden = false;
		const isEn = locale === 'en';
		label.textContent = isEn ? `Continue: ${next.title}` : `继续：${next.title}`;
		link.href = next.href;
		link.textContent = isEn ? 'Open lesson' : '继续学习';
	} else if (label && link) {
		banner.classList.add('is-complete');
		const isEn = locale === 'en';
		label.textContent = isEn
			? 'You finished the learning path — explore curated resources next.'
			: '学习路径已完成 — 去看看精选资源吧。';
		link.href = resourcesHref;
		link.textContent = isEn ? 'Browse resources' : '查看精选资源';
		banner.hidden = false;
	}
}

function updateResourceChecklists(): void {
	const checked = getResourceChecked();
	document.querySelectorAll<HTMLInputElement>('[data-resource-check]').forEach((input) => {
		const id = input.dataset.resourceCheck;
		if (id) input.checked = Boolean(checked[id]);
	});
}

export function refreshProgressUI(): void {
	updateProgressCounts();
	updateLearningPathStates();
	updateContinueBanner();
	updateResourceChecklists();
}

export function initProgressTracking(): void {
	if (typeof window === 'undefined') return;

	markVisited(window.location.pathname);
	refreshProgressUI();

	if (document.querySelector('.home-showcase')) {
		document.body.classList.add('page-hub');
	}

	document.addEventListener('click', (event) => {
		const target = event.target;
		if (!(target instanceof Element)) return;
		const anchor = target.closest('a[href]');
		if (!(anchor instanceof HTMLAnchorElement)) return;
		if (anchor.target === '_blank') return;
		const href = anchor.getAttribute('href');
		if (!href || !isInternalDocLink(href)) return;
		try {
			const url = new URL(href, window.location.origin);
			if (url.origin === window.location.origin) {
				markVisited(url.pathname);
			}
		} catch {
			/* invalid href */
		}
	});

	document.addEventListener('change', (event) => {
		const target = event.target;
		if (!(target instanceof HTMLInputElement)) return;
		if (!target.dataset.resourceCheck) return;
		setResourceChecked(target.dataset.resourceCheck, target.checked);
	});

	document.addEventListener('astro:page-load', () => {
		markVisited(window.location.pathname);
		refreshProgressUI();
	});
}
