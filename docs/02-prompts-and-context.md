# 2. Prompts, Tokens and Context

**Estimated reading time:** 5 minutes

## Key terms

- **Prompt:** the request or information you send to the model, for example *"Explain this function to a beginner."*
- **Token:** a unit of text the model processes. A token can be a whole word, part of a word, or a symbol. Do not assume one token equals one word.
- **Context:** the information the model receives to answer your request. This can include your prompt, earlier messages in the conversation, and any files or snippets the tool actually sends.
- **Context window:** a limit on how much information the model can handle in one request. The exact limit depends on the model and the tool. In a long conversation, early details may no longer be fully available.

The model does not automatically know every file on your computer. It only works with the context the tool provides.

## Compare two prompts

> **Vague:** "Write a task management app."

> **Clearer:** "Design an add-task feature for students. The title cannot be empty. Data is stored only on the device; no accounts or sync yet. Give two examples I can check, and list questions you still need answered."

The second prompt states the goal, the limits and what a useful answer looks like. It can still be incomplete, so read the answer and add missing details.

## A simple prompt template

```text
Goal: what the user needs to achieve
Context: the project, stack, or files the tool should consider
Constraints: what must not change, or what is out of scope
Output: the format you want back, such as a list, a plan, or a code change
Check: how we will know the result is correct
```

## Practical habits

1. Start with the outcome, not the implementation.
2. Give only the context that is relevant, and never paste secrets.
3. If the answer goes off track, start a new focused request instead of piling on more messages.
4. Ask the assistant to list what it does not know before it writes code.

Next: [3. Verifying AI output](/03-verify-ai-output).
