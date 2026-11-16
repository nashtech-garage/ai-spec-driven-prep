# 4. Verifying AI Output

**Estimated reading time:** 5 minutes

AI can give you a confident answer that is wrong. It may invent a library name, use an API that does not exist in your version or skip a special case. Your job is to check the result.

## Checklist when AI writes code

1. **Read and explain the change.** If you cannot explain a line, ask the assistant to explain it or simplify it.
2. **Check names and APIs against official documentation.** Libraries change between versions.
3. **Run the program.** Try the normal path first.
4. **Test edge cases.** Empty input, very long input, missing data, duplicate values and failure cases.
5. **Protect sensitive data.** Do not paste passwords, API keys, tokens, personal data or private source code into a tool unless your organization allows it. Read the tool's data policy.

## Tests show evidence, not proof

A passing test means that the behavior you tested passed. It does not prove the whole program is correct. Write tests for behavior that matters, and say what you did not test.

## Example

A student asks an AI tool to remove completed tasks from a list.

- **Normal case:** two completed tasks are removed and two active tasks remain.
- **Edge case:** there are no completed tasks. Nothing should be removed and the app should not crash.
- **Edge case:** all tasks are completed. The list becomes empty and the app shows an empty state.

If the generated code handles only the normal case, it is not finished.

## Ask the AI to challenge itself

- "What assumptions did you make?"
- "Which requirement might this implementation miss?"
- "Which test would most likely fail?"

These questions do not replace your own review, but they often reveal gaps quickly.

## Red flags

- The answer names a function, option or package you cannot find in the official docs.
- The code deletes, overwrites or sends data without you asking for it.
- The explanation sounds certain but gives no evidence.
- The assistant says "this should work" but did not run anything.

Next: [5. Assistants vs coding agents](/05-assistants-vs-agents).
