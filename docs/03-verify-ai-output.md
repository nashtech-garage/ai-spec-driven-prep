# 3. Verifying AI Output

**Estimated reading time:** 4 minutes

AI can give you a confident answer that is wrong. It may invent a library name, use an API that does not exist in your version, or skip a special case. Your job is to check the result.

## Checklist when using AI for code

1. **Read and explain the change.** If you cannot explain a line, ask the assistant to explain it or simplify it.
2. **Check names and APIs against official documentation.** Libraries and tools change between versions.
3. **Run the program.** Try the normal path first.
4. **Test edge cases.** Empty input, very long input, missing data, duplicate values, and failure cases.
5. **Protect sensitive data.** Do not paste passwords, API keys, tokens, personal data or private source code into a tool unless your organization allows it. Check the tool's data policy.

## Tests show evidence, not proof

A passing test means the behavior you tested passed. It does not prove the whole program is correct. Write tests for the behavior that matters, and say clearly what you did not test.

## Example

A student asks an AI tool to remove completed tasks from a list.

- **Normal case:** two completed tasks are removed; two active tasks remain.
- **Edge case:** there are no completed tasks; nothing should be removed and the app should not crash.
- **Edge case:** all tasks are completed; the list becomes empty and the app shows an empty state.

If the generated code only handles the normal case, it is not finished yet.

## Ask the AI to challenge itself

Useful follow-up prompts:

- "What assumptions did you make?"
- "Which requirement might this implementation miss?"
- "Which test would most likely fail?"

These questions do not replace your own review, but they often reveal gaps quickly.

Next: [4. Assistants vs coding agents](/04-assistants-vs-agents).
