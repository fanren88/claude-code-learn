export function initHeaderScroll(): void {
	const root = document.documentElement;
	const onScroll = () => {
		root.classList.toggle('is-header-scrolled', window.scrollY > 8);
	};
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
}
