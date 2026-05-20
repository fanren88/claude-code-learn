export type ReadingArticleLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ReadingArticle = {
  id: string;
  title: string;
  source: string;
  lang: string;
  format: string;
  url: string;
  summary: string;
  audience: string;
  tags: string[];
  relatedLinks: ReadingArticleLink[];
};

export const readingSelectionCriteria =
  "与 Claude Code / Agent 强相关、论述完整、能补充本站未覆盖的角度（如官方工程实践、生态工具评测）。";

export const readingArticles: ReadingArticle[] = [
  {
    id: "agent-skills",
    title: "Equipping agents for the real world with Agent Skills",
    source: "Anthropic Engineering",
    lang: "英文",
    format: "工程博客",
    url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
    summary:
      "介绍 Agent Skills 的核心设计：用目录与 SKILL.md 把指令、脚本和资源打包给代理；通过渐进式披露控制上下文占用；说明 Skills 与代码执行、MCP 的协作关系及安全审计要点。",
    audience: "想理解 Skill 原理、编写或审计项目级 Skills 的 Claude Code 用户。",
    tags: ["Agent Skills", "SKILL.md", "渐进式披露", "MCP"],
    relatedLinks: [
      { label: "术语表 · Skill", href: "/glossary" },
      { label: "编写 CLAUDE.md", href: "/learn/context" },
      { label: "MCP 扩展", href: "/concepts/mcp" },
      { label: "工具与权限", href: "/concepts/tools-and-permissions" },
    ],
  },
];
