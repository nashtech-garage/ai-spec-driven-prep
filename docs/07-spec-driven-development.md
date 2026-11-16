# 7. Spec-Driven Development

**Estimated reading time:** 7 minutes

A **specification (spec)** describes what to build: who needs it, what is in scope, what is out of scope and how you will know it works. A spec gives people and AI tools one reviewable document to agree on. It does not replace conversations with users or testing.

## Why write a spec before code?

Without a spec, an AI tool fills the gaps with its own assumptions. It may choose a default you did not want, add a feature nobody asked for, or change data in a way that breaks old records. A spec makes those assumptions visible while they are still cheap to change.

## The spec-driven workflow

```mermaid
flowchart LR
    P["Principles"] --> S["Specify"]
    S --> C["Clarify"]
    C --> PL["Plan"]
    PL --> T["Tasks"]
    T --> I["Implement"]
    I --> V["Verify"]
    V -->|"Gaps found"| S
    C -->|"Open questions"| S
```

| Step | Question it answers | Typical output |
| --- | --- | --- |
| Principles | What rules must every change follow? | Project principles (a "constitution") |
| Specify | What should the user be able to do? | Requirements and acceptance criteria |
| Clarify | What is still ambiguous? | Answers added to the spec |
| Plan | How will we build it, and what could break? | Technical plan |
| Tasks | What small steps will we take? | Ordered task list |
| Implement | What changed in the code? | Code and tests |
| Verify | Does it meet the spec, and was it checked? | Test results and review notes |

You review each artifact before moving to the next step. Problems are cheaper to fix in a document than after code has been written.

## Anatomy of a good spec

- **User outcome:** what the user can do and why it matters.
- **Scope:** the behavior you want now.
- **Non-goals:** what you are deliberately not building.
- **Rules:** defaults, validation, and what happens to existing data.
- **Acceptance criteria:** concrete examples that can be checked.
- **Quality requirements:** for example, accessibility labels for screen readers or clear error messages.

## Worked example: task priority

Imagine a small task app where users can add tasks but cannot mark how important they are.

- **Outcome:** a user can mark a task as `High` or `Normal` when creating it, and change it later.
- **Scope:** priority is shown in the task list.
- **Rule:** tasks created before this feature have no priority and are treated as `Normal`.
- **Non-goal:** no accounts, backend, due dates or notifications.
- **Acceptance example:** given an old task without a priority, when the list opens, the task appears with `Normal` priority and can still be edited.
- **Accessibility:** the priority control has a label that a screen reader can announce.

Notice the questions the spec forces you to answer: *What is the default? What happens to old data? Is filtering included?* Those questions are much of the value.

## Write a spec in five minutes

Use this template for any small feature:

```text
User outcome:
Scope:
Non-goals:
Rules and defaults:
Acceptance example 1 (normal case):
Acceptance example 2 (edge case):
Quality requirement (for example, accessibility):
Open questions:
```

## Spec-driven development is not tied to one stack

The workshop demo uses Expo and React Native, but the method works with any mobile stack. Your user outcome and acceptance criteria stay the same. Your technical plan, tools, build steps and tests must match your stack. For example, a Flutter or native Android project needs its own plan and its own test commands.

## Key takeaways

- Write what and why before how.
- Make acceptance examples specific enough to check.
- Name non-goals so the AI does not invent extra features.
- Review the plan and tasks before implementation starts.

Next: [8. Setup checklist](/08-setup-checklist).
