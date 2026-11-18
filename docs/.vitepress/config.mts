import { withMermaid } from "vitepress-plugin-mermaid";

// GitHub Pages serves project sites from /<repo-name>/. The deploy workflow sets DOCS_BASE_PATH.
const base = process.env.DOCS_BASE_PATH ?? "/ai-spec-driven-prep/";

// Sidebar and nav links are root-relative; VitePress prefixes them with `base` and the locale prefix.
const enSidebar = [
  {
    text: "Start here",
    items: [
      { text: "Welcome", link: "/" },
      { text: "Setup checklist", link: "/08-setup-checklist" },
    ],
  },
  {
    text: "Core concepts",
    items: [
      { text: "1. What is AI?", link: "/01-what-is-ai" },
      { text: "2. How LLMs work", link: "/02-how-llms-work" },
      { text: "3. Prompts, tokens and context", link: "/03-prompts-tokens-context" },
      { text: "4. Verifying AI output", link: "/04-verify-ai-output" },
      { text: "5. Assistants vs coding agents", link: "/05-assistants-vs-agents" },
      { text: "6. AI building blocks", link: "/06-ai-building-blocks" },
    ],
  },
  {
    text: "Spec-driven development",
    items: [{ text: "7. Specifying before coding", link: "/07-spec-driven-development" }],
  },
  {
    text: "Practice",
    items: [
      { text: "9. Self-check and warm-up exercise", link: "/09-self-check-and-exercise" },
      { text: "Glossary", link: "/glossary" },
      { text: "Resources", link: "/resources" },
    ],
  },
];

const viSidebar = [
  {
    text: "Bắt đầu",
    items: [
      { text: "Chào mừng", link: "/vi/" },
      { text: "Danh sách chuẩn bị", link: "/vi/08-setup-checklist" },
    ],
  },
  {
    text: "Kiến thức nền tảng",
    items: [
      { text: "1. AI là gì?", link: "/vi/01-what-is-ai" },
      { text: "2. LLM hoạt động như thế nào", link: "/vi/02-how-llms-work" },
      { text: "3. Prompt, token và context", link: "/vi/03-prompts-tokens-context" },
      { text: "4. Kiểm chứng kết quả của AI", link: "/vi/04-verify-ai-output" },
      { text: "5. Trợ lý và coding agent", link: "/vi/05-assistants-vs-agents" },
      { text: "6. Các khối xây dựng AI", link: "/vi/06-ai-building-blocks" },
    ],
  },
  {
    text: "Spec-driven development",
    items: [{ text: "7. Viết spec trước khi code", link: "/vi/07-spec-driven-development" }],
  },
  {
    text: "Thực hành",
    items: [
      { text: "9. Tự kiểm tra và bài khởi động", link: "/vi/09-self-check-and-exercise" },
      { text: "Thuật ngữ", link: "/vi/glossary" },
      { text: "Tài liệu tham khảo", link: "/vi/resources" },
    ],
  },
];

export default withMermaid({
  base,
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "AI & Spec-Driven Development",
      description: "Preparation guide for the AI-Driven Mobile App Development workshop.",
      themeConfig: {
        nav: [
          { text: "Start", link: "/" },
          { text: "Core concepts", link: "/01-what-is-ai" },
          { text: "Spec-driven", link: "/07-spec-driven-development" },
          { text: "Setup", link: "/08-setup-checklist" },
          { text: "Glossary", link: "/glossary" },
        ],
        sidebar: enSidebar,
        docFooter: { prev: "Previous", next: "Next" },
      },
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi-VN",
      link: "/vi/",
      title: "AI & Spec-Driven Development",
      description: "Tài liệu chuẩn bị cho workshop Phát triển ứng dụng di động với AI.",
      themeConfig: {
        nav: [
          { text: "Bắt đầu", link: "/vi/" },
          { text: "Kiến thức nền", link: "/vi/01-what-is-ai" },
          { text: "Spec-driven", link: "/vi/07-spec-driven-development" },
          { text: "Chuẩn bị", link: "/vi/08-setup-checklist" },
          { text: "Thuật ngữ", link: "/vi/glossary" },
        ],
        sidebar: viSidebar,
        outline: { label: "Trên trang này" },
        docFooter: { prev: "Trang trước", next: "Trang sau" },
        lastUpdated: { text: "Cập nhật lần cuối" },
        returnToTopLabel: "Lên đầu trang",
        sidebarMenuLabel: "Menu",
        darkModeSwitchLabel: "Giao diện",
        langMenuLabel: "Đổi ngôn ngữ",
      },
    },
  },
  themeConfig: {
    outline: { level: [2, 3] },
    search: { provider: "local" },
    socialLinks: [],
    footer: {
      message: "Workshop preparation document · Nashtech 2026",
    },
  },
});
