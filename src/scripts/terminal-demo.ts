import { prefersReducedMotion } from './learn-progress';

const TYPEWRITER_MAX = 40;
const TYPEWRITER_MS = 28;

function revealLine(line: HTMLElement, delay: number): void {
	window.setTimeout(() => line.classList.add('is-visible'), delay);
}

async function typewriterLine(line: HTMLElement, text: string, startDelay: number): Promise<void> {
	const full = text;
	const truncated = full.slice(0, TYPEWRITER_MAX);
	let index = 0;

	await new Promise<void>((resolve) => {
		window.setTimeout(() => {
			line.classList.add('is-visible');
			const tick = () => {
				index += 1;
				line.replaceChildren();
				const prompt = document.createElement('span');
				prompt.textContent = '>';
				line.append(prompt, document.createTextNode(` ${truncated.slice(0, index)}`));
				if (index >= truncated.length) {
					if (truncated.length < full.length) {
						line.append(document.createTextNode(full.slice(truncated.length)));
					}
					resolve();
					return;
				}
				window.setTimeout(tick, TYPEWRITER_MS);
			};
			tick();
		}, startDelay);
	});
}

export function initTerminalDemo(): void {
	const card = document.querySelector('.terminal-card .terminal-body');
	if (!(card instanceof HTMLElement)) return;

	const lines = [...card.querySelectorAll<HTMLElement>('.terminal-line')];
	if (!lines.length) return;

	if (prefersReducedMotion()) {
		lines.forEach((line) => line.classList.add('is-visible'));
		return;
	}

	let delay = 120;
	lines.forEach((line, index) => {
		const isTyped = line.dataset.terminalTyped === 'true';
		if (isTyped) {
			const text = line.dataset.fullText ?? line.textContent ?? '';
			void typewriterLine(line, text.trim(), delay);
			delay += TYPEWRITER_MAX * TYPEWRITER_MS + 320;
			return;
		}
		revealLine(line, delay);
		delay += index < 2 ? 280 : 180;
	});
}
