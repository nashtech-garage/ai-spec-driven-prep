# AI & Spec-Driven Development: Workshop Preparation

A VitePress guide that helps students prepare for the AI-Driven Mobile App Development workshop. The content is in English and covers AI basics, safe use of AI tools, and the spec-driven workflow.

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
  index.md                       Landing page
  01-ai-basics.md                AI, LLMs and generative AI
  02-prompts-and-context.md      Prompts, tokens and context
  03-verify-ai-output.md         Verifying AI output
  04-assistants-vs-agents.md     Chat assistants vs coding agents
  05-spec-driven-development.md  Specifying before coding
  06-setup-checklist.md          Setup before the workshop
  07-self-check-and-exercise.md  Self-check and warm-up exercise
  glossary.md                    Glossary
  resources.md                   Optional reading
  .vitepress/config.mts          Site configuration and sidebar
```

## Updating content

- Add a page under `docs/`, then add it to the sidebar in `docs/.vitepress/config.mts`.
- Tool names, commands and product features change. Recheck the setup and tool details before each workshop.
