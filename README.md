# Claude Code 中文学习指南

面向初学者的 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 中文学习站，采用 Next.js App Router 结构，首页与导航对齐参考项目的六大栏目：

- 学习路径（含概念扫盲 6 步）
- 零基础新手线（国产模型 + 第一个小工具）
- 学习路线
- 场景教程
- 实战工坊
- 资源
- 命令速查

> 社区学习站，非 Anthropic 官方文档。
> 内容最后核对日期：2026-05-20。命令、安装方式和权限配置请以官方英文文档为准。

## 本地开发

```bash
npm install
npm run dev
```

浏览器访问 [http://localhost:3000/](http://localhost:3000/)。

## 构建

```bash
npm run build
npm run start
```

## 技术栈

- Next.js 15（App Router）
- React 19
- Tailwind CSS v4
- TypeScript

## 目录结构

```txt
app/           # 页面路由
components/    # 站点组件（Hero、Header、PathCard 等）
lib/           # 配置与工具函数
```

## License

MIT
