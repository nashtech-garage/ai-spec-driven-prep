# 3. Prompts, Tokens and Context

**Estimated reading time:** 6 minutes

Your prompt and the context around it decide most of what the model can do for you.

## Key terms

- **Prompt:** the request or information you send to the model, for example *"Explain this function to a beginner."*
- **Context:** everything the model receives for the current request. This can include your prompt, earlier messages in the same conversation, instructions set by the tool, and any files or snippets the tool actually sends.
- **Context window:** a limit on how much text the model can handle in one request, measured in tokens. The exact size depends on the model and the tool. In a long conversation, early details may no longer be available to the model.

The model only works with the context it receives. It does not automatically know every file on your computer.

## Compare two prompts

> **Vague:** "Write a task management app."

> **Clearer:** "Design an add-task feature for students. The title cannot be empty. Data is stored only on the device; no accounts or sync yet. Give two examples I can check, and list the questions you still need answered."

The second prompt states the goal, the limits and what a useful answer looks like. It can still be incomplete. Read the result and add the missing details.

## Prompt patterns that help

### Give a role and a goal

```text
You are a mobile developer helping a first-year student.
Explain what a React component is, with one short example.
```

### Ask for steps before code

```text
Before writing code, list the files you would change and the risks.
Wait for my approval.
```

### Give an example of the output you want

```text
Format each test as:
Given: ...
When: ...
Then: ...
```

### Ask it to find its own gaps

```text
What information is missing from my request?
Which assumptions could be wrong?
```

## A simple prompt template

```text
Goal: what the user needs to achieve
Context: the project, stack or files the tool should consider
Constraints: what must not change, or what is out of scope
Output: the format you want back, such as a list, a plan or a code change
Check: how we will know the result is correct
```

## Practical habits

1. Start with the outcome, not the implementation.
2. Give only the context that is relevant. Never paste secrets such as passwords or API keys.
3. If the answer drifts off track, start a new focused request instead of adding more messages to a long conversation.
4. Ask for the assumptions before you accept a plan.

Next: [4. Verifying AI output](/04-verify-ai-output).
