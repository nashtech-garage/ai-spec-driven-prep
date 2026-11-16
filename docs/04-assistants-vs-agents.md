# 4. Chat Assistants vs Coding Agents

**Estimated reading time:** 3 minutes

## Chat assistant

A **chat assistant** answers questions and suggests code in a conversation. You decide what to copy, where to paste it and whether to run it.

Good for: explaining a concept, comparing options, drafting a small function, or reviewing a snippet you paste.

## Coding agent

A **coding agent** combines a model with instructions and tools so it can work in several steps. Depending on the product, mode and permissions, it may read project files, propose a plan, edit files, or run commands and tests.

Good for: multi-step tasks in a real project, such as adding a feature that touches several files, as long as you review each step.

## What agents do not change

An agent does not remove your responsibility. Before you accept a change, you should:

- Review every file it changes.
- Check any command before you allow it to run.
- Compare the result with the requirements you wrote down.
- Run the app and the tests yourself.

Capabilities depend on the product, its settings and the permissions you grant. Always check the current documentation for the tool you use.

## In the workshop

The demo uses **GitHub Copilot** in VS Code and **GitHub Spec Kit**. Spec Kit adds a structured workflow of specifications, plans and tasks. The thinking behind the workflow is not tied to one tool.

Next: [5. Specifying before coding](/05-spec-driven-development).
