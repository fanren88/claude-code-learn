# Claude Code Learn

面向初学者的 [Claude Code](https://code.claude.com/docs/en/quickstart) 中文学习站 — 安装、配置、原理与精选文章。

> 社区学习站，非 Anthropic 官方文档。

## 本地开发

```bash
npm install
npm run dev
```

在浏览器打开 [http://localhost:4321/](http://localhost:4321/)。

## 构建

```bash
npm run build
npm run preview
```

## 部署

### Vercel（推荐）

1. 在 [Vercel](https://vercel.com) 导入本仓库
2. Framework preset：**Astro**
3. Build command：`npm run build`
4. Output directory：`dist`

### GitHub Pages

1. 启用 **Pages** → Source：**GitHub Actions**
2. 推送到 `main` — 内置 workflow 会构建并部署 `dist`

若使用项目站点，在 `astro.config.mjs` 中设置 `base`：

```js
export default defineConfig({
  site: 'https://<user>.github.io',
  base: '/claude-code-doc',
  // ...
});
```

部署后请把 `public/llms.txt` 中的域名改成你的实际域名。

## 添加文章

- 在 [`src/data/articles.json`](src/data/articles.json) 中添加精选外链。
- 在 `src/content/docs/articles/` 下新建 `.mdx` 站内文章。
- 若需出现在侧边栏，在 `astro.config.mjs` 的 `sidebar` 中登记。

## 项目结构

```
src/content/docs/       # 中文文档内容
src/components/         # 首页与文档 UI 组件
src/data/articles.json  # 精选外链
```

## License

MIT
