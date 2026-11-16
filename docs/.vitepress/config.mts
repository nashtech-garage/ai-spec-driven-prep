import { defineConfig } from "vitepress";

// GitHub Pages serves project sites from /<repo-name>/. The deploy workflow sets DOCS_BASE_PATH.
const base = process.env.DOCS_BASE_PATH ?? "/ai-spec-driven-prep/";

const sidebar = [
  {
    text: "Start here",
    items: [
      { text: "Welcome", link: "/" },
      { text: "Setup checklist", link: "/06-setup-checklist" },
    ],
  },
  {
    text: "Core concepts",
    items: [
      { text: "1. AI, LLMs and generative AI", link: "/01-ai-basics" },
      { text: "2. Prompts, tokens and context", link: "/02-prompts-and-context" },
      { text: "3. Verifying AI output", link: "/03-verify-ai-output" },
      { text: "4. Assistants vs coding agents", link: "/04-assistants-vs-agents" },
    ],
  },
  {
    text: "Spec-driven development",
    items: [
      { text: "5. Specifying before coding", link: "/05-spec-driven-development" },
    ],
  },
  {
    text: "Practice",
    items: [
      { text: "Self-check and warm-up exercise", link: "/07-self-check-and-exercise" },
      { text: "Glossary", link: "/glossary" },
      { text: "Resources", link: "/resources" },
    ],
  },
];

export default defineConfig({
  title: "AI & Spec-Driven Development",
  description: "Preparation guide for the AI-Driven Mobile App Development workshop.",
  lang: "en-US",
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Start", link: "/" },
      { text: "Core concepts", link: "/01-ai-basics" },
      { text: "Spec-driven", link: "/05-spec-driven-development" },
      { text: "Setup", link: "/06-setup-checklist" },
      { text: "Glossary", link: "/glossary" },
    ],
    sidebar,
    outline: { level: [2, 3] },
    search: { provider: "local" },
    footer: {
      message: "Prepared for workshop participants. Verify tool versions and product features before use.",
      copyright: "Workshop preparation guide",
    },
    docFooter: { prev: "Previous", next: "Next" },
  },
});
