import { isTopNavActive } from '../data/site-nav';

export function initTopNav(): void {
	const toggle = document.querySelector<HTMLButtonElement>('[data-learn-nav-toggle]');
	const mobile = document.querySelector<HTMLElement>('[data-learn-nav-mobile]');
	if (!toggle || !mobile) return;

	const setOpen = (open: boolean) => {
		toggle.setAttribute('aria-expanded', String(open));
		mobile.hidden = !open;
		document.documentElement.classList.toggle('learn-nav-mobile-open', open);
	};

	toggle.addEventListener('click', () => {
		setOpen(toggle.getAttribute('aria-expanded') !== 'true');
	});

	mobile.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => setOpen(false));
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') setOpen(false);
	});

	const syncActive = () => {
		const pathname = window.location.pathname;
		document.querySelectorAll<HTMLAnchorElement>('[data-nav-href]').forEach((link) => {
			const href = link.dataset.navHref;
			if (!href) return;
			link.classList.toggle('is-active', isTopNavActive(pathname, href));
		});
	};

	syncActive();
	document.addEventListener('astro:page-load', syncActive);
}
