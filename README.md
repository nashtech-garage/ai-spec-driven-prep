# AI & Spec-Driven Development: Workshop Preparation

A VitePress guide that helps students prepare for the AI-Driven Mobile App Development workshop. The guide is available in **English** (root) and **Tiếng Việt** (`/vi/`). It covers AI concepts, safe use of AI tools, the spec-driven workflow, and the software needed before the session.

## Local development

```bash
npm ci
npm run docs:dev      # live preview at http://localhost:5173/ai-spec-driven-prep/
npm run docs:build    # static output in docs/.vitepress/dist
npm run docs:preview  # preview the production build
```

## Deployment

The workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) builds the site and deploys it to GitHub Pages on every push to `main`.

One-time repository setup:

1. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. The base path is derived from the repository name (`/<repo-name>/`). If the repository name changes, the workflow adapts automatically. For local builds, set `DOCS_BASE_PATH` if you need a different base.

## Structure

```text
docs/
  index.md                          Landing page (English)
  01-what-is-ai.md                  What AI is, machine learning, neural networks
  02-how-llms-work.md               How LLMs predict text, training and inference
  03-prompts-tokens-context.md      Prompts, tokens and context windows
  04-verify-ai-output.md            Verifying AI output
  05-assistants-vs-agents.md        Chat assistants vs coding agents
  06-spec-driven-development.md     Specifying before coding
  07-setup-checklist.md             Required software, AI accounts, mobile tech stacks
  08-self-check-and-exercise.md     Self-check and warm-up exercise
  glossary.md                       Glossary
  resources.md                      Optional reading
  vi/                               Vietnamese version, same filenames as above
  .vitepress/config.mts             Site configuration, locales, navigation and sidebars
```

## Updating content

- Add a page under `docs/`, then add it to the sidebar in `docs/.vitepress/config.mts` for **both** locales.
- Keep the Vietnamese pages in `docs/vi/` in sync with the English pages. Use the same filename, and link internal pages with `/vi/...`.
- Tool names, commands and product features change. Recheck the setup and tool details before each workshop.

