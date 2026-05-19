# Claude Code Learn

Beginner-friendly documentation for [Claude Code](https://code.claude.com/docs/en/quickstart) — install, configure, concepts, and curated articles. Available in **简体中文** and **English**.

> Community learning site. Not official Anthropic documentation.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/zh-cn/](http://localhost:4321/zh-cn/) (default locale).

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel (recommended)

1. Import this repository in [Vercel](https://vercel.com)
2. Framework preset: **Astro**
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages

1. Enable **Pages** → Source: **GitHub Actions**
2. Push to `main` — the included workflow builds and deploys `dist`

For project sites, set `base` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://<user>.github.io',
  base: '/claude-code-doc',
  // ...
});
```

Update `public/llms.txt` with your real domain after deploy.

## Add articles

- Add curated external links in [`src/data/articles.json`](src/data/articles.json).
- Add site-owned articles as `.mdx` files under `src/content/docs/zh-cn/articles/` and `src/content/docs/en/articles/`.
- Add new article pages to `astro.config.mjs` if they should appear in the sidebar.

## Project structure

```
src/content/docs/zh-cn/   # Chinese content
src/content/docs/en/      # English content
src/components/           # Hub UI components
src/data/articles.json    # Curated external links
```

## License

MIT
