# 9. Self-Check and Warm-Up Exercise

Try these before the workshop. There are no grades. The goal is to notice what you already understand and what to ask about.

## Part A: Self-check

<details>
<summary>1. Is AI the same thing as machine learning?</summary>

**No.** Machine learning is one way to build AI. Rule-based programs can also be AI in a broad sense, but they do not learn from data.

</details>

<details>
<summary>2. What does an LLM do, one step at a time?</summary>

**It predicts the next token** given the text so far, then repeats that step to build the answer.

</details>

<details>
<summary>3. Does a confident AI answer guarantee that the code is correct?</summary>

**No.** Check it by reading, running and testing, and by comparing with official documentation.

</details>

<details>
<summary>4. Does the model automatically read every file on your computer when you open VS Code?</summary>

**Not by default.** It works with the context and the tool permissions it is given.

</details>

<details>
<summary>5. Must an app built with AI include a chatbot feature?</summary>

**No.** Using AI to help build an app is different from adding AI features to the app.

</details>

<details>
<summary>6. What makes an acceptance example useful?</summary>

**It describes expected behavior that you can observe or test**, such as "given no completed tasks, clearing completed tasks changes nothing."

</details>

<details>
<summary>7. Why does an agent ask for approval before some commands?</summary>

**Because a command can change files, delete data or access the network.** Approval lets you check the action before it runs.

</details>

## Part B: Warm-up exercise (about 15 minutes)

Choose one small feature: **clear completed tasks** in a to-do app.

1. **Write a user outcome.** One sentence describing what the user wants and why.
2. **Write two acceptance examples.** One normal case and one edge case. Hint: what happens when there are no completed tasks?
3. **Write one non-goal.** For example, "undo is not included."
4. **List two questions** you would ask the product owner before building it.

### Possible answer (for discussion, not the only answer)

- **Outcome:** a user can remove all completed tasks at once to keep the list tidy.
- **Example 1:** given two completed tasks and one active task, when the user clears completed tasks, only the active task remains.
- **Example 2:** given no completed tasks, when the user clears completed tasks, the list is unchanged and no error appears.
- **Non-goal:** undo is not included.
- **Questions:** Should the user confirm before deleting? Should deleted tasks be recoverable?

## Part C: Ask an AI tool (optional)

If you have access to a chat assistant, send this prompt:

```text
I want to add a "clear completed tasks" feature to a simple to-do app.
Before writing any code, ask me the questions you need answered, and list
the edge cases I should specify. Do not write code yet.
```

Compare its questions with yours. Did it find something you missed? Did it suggest anything you do not want in scope?

## Bring to the workshop

- One question about AI or specs.
- One example where an AI answer was wrong, incomplete or unclear.
- Your chosen mobile stack and AI account, so the organizers can plan support.
