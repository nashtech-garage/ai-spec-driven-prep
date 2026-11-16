# 5. Specifying Before Coding

**Estimated reading time:** 6 minutes

A **specification (spec)** describes what to build: who needs it, what is in scope, what is out of scope, and how you will know it works. A spec gives people and AI tools one reviewable document to agree on. It does not replace conversation with users or testing.

## The spec-driven workflow

```text
Principles -> Specify -> Clarify -> Plan -> Tasks -> Implement -> Verify
```

| Step | Question it answers | Typical output |
| --- | --- | --- |
| Principles | What rules must every change follow? | Project constitution |
| Specify | What should the user be able to do? | Requirements and acceptance criteria |
| Clarify | What is still ambiguous? | Answers added to the spec |
| Plan | How will we build it, and what could break? | Technical plan |
| Tasks | What small steps will we take? | Ordered task list |
| Implement | What changed in the code? | Code and tests |
| Verify | Does it meet the spec, and was it checked? | Test results and review notes |

You review each artifact before moving on. The workflow exists so that problems are found in the document, when they are cheaper to fix, not after the code is written.

## Anatomy of a good spec

- **User outcome:** what the user can do, and why it matters.
- **Scope:** the behavior you want now.
- **Non-goals:** what you are deliberately not doing.
- **Rules:** defaults, validation, and what happens to existing data.
- **Acceptance criteria:** concrete examples that can be checked.
- **Accessibility and quality requirements:** for example, labels for screen readers or clear error messages.

## Worked example: task priority

Imagine a small task app where users can add tasks but cannot mark their importance.

- **Outcome:** a user can mark a task as `High` or `Normal` when creating it and change it later.
- **Scope:** priority is shown in the task list.
- **Rule:** tasks created before this feature have no priority and are treated as `Normal`.
- **Non-goal:** no accounts, backend, due dates or notifications.
- **Acceptance example:** given an old task without a priority, when the list opens, then the task appears with `Normal` priority and is still editable.
- **Accessibility:** the priority control has a label that a screen reader can announce.

Notice what the spec asks: *What is the default? What happens to old data? Is filtering included?* Those questions are the value of the workflow.

## Write a spec in 5 minutes

Use this template for any small feature:

```text
User outcome:
Scope:
Non-goals:
Rules and defaults:
Acceptance example 1 (normal case):
Acceptance example 2 (edge case):
Accessibility requirement:
Open questions:
```

## Spec-driven development and mobile apps

The workshop example uses Expo and React Native, but the method is not limited to that stack. A Flutter or native app can use the same user outcome and acceptance criteria. The technical plan, tools, build steps and tests must be chosen for that stack.

## Key takeaways

- Write what and why before how.
- Make acceptance examples specific enough to check.
- Name non-goals so the AI does not invent extra features.
- Review the plan and tasks before implementation starts.

Next: [Self-check and warm-up exercise](/07-self-check-and-exercise).
