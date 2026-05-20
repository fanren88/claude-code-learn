export type DomesticProvider = {
  id: string;
  name: string;
  models: string;
  baseUrl: string;
  signupUrl: string;
  /** 平台提供的 Claude Code 接入说明（外链） */
  docsUrl?: string;
  note: string;
  envExample: string;
};

export const domesticProviders: DomesticProvider[] = [
  {
    id: "deepseek",
    name: "DeepSeek",
    models: "deepseek-chat / deepseek-reasoner 等（以平台文档为准）",
    baseUrl: "https://api.deepseek.com/anthropic",
    signupUrl: "https://platform.deepseek.com/api_keys",
    note: "性价比高，适合日常改代码。本站有完整接入教程。",
    envExample: `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<你的 API Key>
export ANTHROPIC_MODEL=deepseek-chat`,
  },
  {
    id: "glm",
    name: "智谱 GLM",
    models: "glm-4-plus 等（以智谱开放平台为准）",
    baseUrl: "https://open.bigmodel.cn/api/anthropic",
    signupUrl: "https://open.bigmodel.cn/usercenter/apikeys",
    docsUrl: "https://docs.bigmodel.cn/cn/coding-plan/tool/claude",
    note: "国内访问稳定，支持 GLM Coding Plan；官方文档含环境变量、settings.json 与模型映射说明。",
    envExample: `export ANTHROPIC_BASE_URL=https://open.bigmodel.cn/api/anthropic
export ANTHROPIC_AUTH_TOKEN=<你的 API Key>
export ANTHROPIC_MODEL=glm-4-plus`,
  },
  {
    id: "kimi",
    name: "Kimi（月之暗面）",
    models: "以 Moonshot / Kimi 开放平台当前列表为准",
    baseUrl: "https://api.moonshot.cn/anthropic（示例，请以官方文档为准）",
    signupUrl: "https://platform.moonshot.cn/",
    note: "长文本场景表现好，配置前请核对官方最新的 Anthropic 兼容地址。",
    envExample: `export ANTHROPIC_BASE_URL=<官方文档中的 Anthropic 兼容地址>
export ANTHROPIC_AUTH_TOKEN=<你的 API Key>
export ANTHROPIC_MODEL=<平台提供的模型名>`,
  },
  {
    id: "qwen",
    name: "通义千问（阿里云）",
    models: "qwen-max 等（以百炼 / DashScope 文档为准）",
    baseUrl: "以阿里云「Claude Code 接入」文档为准",
    signupUrl: "https://dashscope.aliyun.com/",
    note: "企业用户多，注意区分通用 API 与 Anthropic 兼容端点。",
    envExample: `# 请打开阿里云最新「Claude Code」集成文档复制 Base URL 与模型名`,
  },
  {
    id: "minimax",
    name: "MiniMax",
    models: "以 MiniMax 开放平台文档为准",
    baseUrl: "以官方 Anthropic 兼容文档为准",
    signupUrl: "https://platform.minimaxi.com/",
    note: "适合作为备选线路，上线前用简单对话验证连通性。",
    envExample: `export ANTHROPIC_BASE_URL=<官方兼容地址>
export ANTHROPIC_AUTH_TOKEN=<你的 API Key>
export ANTHROPIC_MODEL=<模型名>`,
  },
];

export const paymentOptions = [
  {
    title: "Claude 官方订阅（Pro / Team）",
    desc: "在终端运行 claude 后按提示浏览器登录。体验最接近官方，但需要可用的 Anthropic 账号与网络环境。",
    fit: "已有官方账号、希望完整能力的用户",
  },
  {
    title: "Anthropic API（按量计费）",
    desc: "在 Console 创建 API Key，写入环境变量或 settings.json。适合自动化与精确控费。",
    fit: "开发者、CI、需要 API 集成的场景",
  },
  {
    title: "国产模型 API + 兼容接口",
    desc: "通过 ANTHROPIC_BASE_URL 把请求转到 DeepSeek、GLM 等。保留 Claude Code 界面与工具，按国内平台计费。",
    fit: "国内用户、想先低成本练手的初学者",
  },
];
