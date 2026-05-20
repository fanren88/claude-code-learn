export type GlossaryTerm = {
  term: string;
  meaning: string;
  category?: "基础" | "Claude Code" | "国产模型";
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "模型（Model）",
    meaning: "只会「思考」的 AI 大脑，例如 Claude、GPT、DeepSeek、GLM。单独一个模型不能替你改文件或跑命令。",
    category: "基础",
  },
  {
    term: "Chatbot（聊天机器人）",
    meaning: "模型 + 对话界面。你能问它问题，但它通常不能直接操作你电脑上的项目。",
    category: "基础",
  },
  {
    term: "Agent（智能体）",
    meaning: "模型 + 工具 + 执行能力。Claude Code 就是 Agent：能读代码、写文件、跑终端、按步骤完成任务。",
    category: "基础",
  },
  {
    term: "Token",
    meaning: "AI 处理文字的最小单位。中文大约 1 个字 ≈ 1–2 个 Token。对话越长，消耗的 Token 越多。学习阶段不必过度节省，先把任务跑通更重要。",
    category: "基础",
  },
  {
    term: "上下文（Context）",
    meaning: "当前这一轮对话里，模型能「看见」的全部信息：你的提问、项目文件、工具返回结果、CLAUDE.md 等。",
    category: "基础",
  },
  {
    term: "上下文窗口",
    meaning: "模型一次能处理的上下文上限。窗口越大，能同时参考的资料越多。",
    category: "基础",
  },
  {
    term: "上下文污染",
    meaning: "在同一个会话里混聊多个不相关话题，导致 AI 回答跑偏。建议：一个会话专注一件事，换话题就 `/clear` 或开新会话。",
    category: "基础",
  },
  {
    term: "Harness / 上下文工程",
    meaning: "驾驭 AI 的一整套方法：怎么组织信息、控制权限、验证结果。Claude Code 把这套流程产品化了，所以比单纯聊天更「能干活」。",
    category: "基础",
  },
  {
    term: "Skill",
    meaning: "写给 Claude 的「标准作业流程（SOP）」：先做什么、用什么工具、怎样算完成。Claude Code 支持项目级 Skills，可重复调用。",
    category: "Claude Code",
  },
  {
    term: "Agent 循环",
    meaning: "理解任务 → 制定计划 → 调用工具 → 观察结果 → 继续下一步，直到完成或需要你确认。",
    category: "Claude Code",
  },
  {
    term: "MCP",
    meaning: "Model Context Protocol，用于连接外部工具和数据源的协议，例如数据库、浏览器、设计稿等。",
    category: "Claude Code",
  },
  {
    term: "CLAUDE.md",
    meaning: "项目级上下文文件，用于告诉 Claude 技术栈、目录约定、测试命令和禁止事项。",
    category: "Claude Code",
  },
  {
    term: "Slash command",
    meaning: "会话内以 `/` 开头的命令，如 `/help`、`/clear`、`/status`，用于管理会话与权限。",
    category: "Claude Code",
  },
  {
    term: "Permission",
    meaning: "限制工具、命令和文件访问的安全边界。涉及删文件、装依赖、访问网络时应人工确认。",
    category: "Claude Code",
  },
  {
    term: "Diff",
    meaning: "Git 展示的代码变更。接受 Agent 改动前，应优先审查 diff 和验证结果。",
    category: "Claude Code",
  },
  {
    term: "ANTHROPIC_BASE_URL",
    meaning: "把 Claude Code 的 API 请求转发到第三方兼容地址（如 DeepSeek、智谱），界面不变，后端模型可换。",
    category: "国产模型",
  },
  {
    term: "CC Switch",
    meaning: "图形化配置工具，用来管理多套 API（官方 / 国产），一键切换，避免手改环境变量出错。",
    category: "国产模型",
  },
];
