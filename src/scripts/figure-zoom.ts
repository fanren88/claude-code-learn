function createLightbox(): HTMLDialogElement {
	const dialog = document.createElement('dialog');
	dialog.className = 'figure-lightbox';
	dialog.setAttribute('aria-modal', 'true');
	dialog.innerHTML = `
		<button type="button" class="figure-lightbox-close" aria-label="Close">×</button>
		<figure>
			<img alt="" />
			<figcaption></figcaption>
		</figure>
	`;
	document.body.append(dialog);

	const closeBtn = dialog.querySelector('.figure-lightbox-close');
	closeBtn?.addEventListener('click', () => dialog.close());

	dialog.addEventListener('click', (event) => {
		if (event.target === dialog) dialog.close();
	});

	dialog.addEventListener('cancel', () => dialog.close());

	return dialog;
}

let lightbox: HTMLDialogElement | null = null;

function openFigure(img: HTMLImageElement): void {
	if (!lightbox) lightbox = createLightbox();

	const figure = img.closest('figure');
	const caption = figure?.querySelector('figcaption')?.textContent ?? img.alt;

	const dialogImg = lightbox.querySelector('img');
	const dialogCaption = lightbox.querySelector('figcaption');
	if (dialogImg instanceof HTMLImageElement) {
		dialogImg.src = img.currentSrc || img.src;
		dialogImg.alt = img.alt;
	}
	if (dialogCaption) dialogCaption.textContent = caption;

	lightbox.showModal();
	lightbox.querySelector<HTMLButtonElement>('.figure-lightbox-close')?.focus();
}

export function initFigureZoom(): void {
	document.querySelectorAll('.doc-figure img').forEach((img) => {
		if (!(img instanceof HTMLImageElement)) return;
		if (img.loading !== 'lazy') img.loading = 'lazy';
		img.classList.add('doc-figure-zoomable');
		img.tabIndex = 0;
		img.setAttribute('role', 'button');
		img.setAttribute('aria-label', img.alt || 'Zoom image');

		const open = () => openFigure(img);
		img.addEventListener('click', open);
		img.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				open();
			}
		});
	});
}

