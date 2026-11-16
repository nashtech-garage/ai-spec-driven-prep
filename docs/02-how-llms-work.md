# 2. How LLMs Work

**Estimated reading time:** 8 minutes

This page explains what happens when a chat assistant answers you. Understanding this makes it easier to predict when the assistant will be helpful and when it will be wrong.

## The core idea: predict the next token

A large language model (LLM) does one basic thing: given some text, it predicts what comes next.

```text
Input:  "The capital of France is"
Output: "Paris"   (the most likely continuation)
```

To write a full answer, the model predicts one piece, adds it to the text, and predicts the next piece again. It repeats this many times until it reaches a stopping point.

```text
"The capital" -> " of"
"The capital of" -> " France"
"The capital of France" -> " is"
"The capital of France is" -> " Paris"
```

The following example is simplified and the numbers are invented for illustration. Suppose the input is *"Students learn to"* and the model estimates these probabilities:

| Candidate next token | Estimated probability |
| --- | --- |
| code | 30% |
| read | 20% |
| think | 10% |
| (many other options) | 40% |

The model does not look up a fixed answer. It chooses from likely continuations, and the choice can vary between runs. This is one reason the same question can produce different wording.

## Tokens: the units the model reads

The model does not read whole words or letters in the same way you do. It reads **tokens**, which are chunks of text. A token can be a whole common word, part of a longer word, punctuation or a space.

- Common words are often a single token.
- Long or unusual words may be split into several tokens.
- Code, numbers and non-English text can split differently from English prose.

Do not assume that one token equals one word. How text is split depends on the model. Tokens also matter for cost and limits, because most tools count tokens.

## How the model learned: training

Training happens before you use a model. It usually has stages:

1. **Pre-training.** The model reads a very large amount of text, such as books, articles, websites and source code. Each time, it tries to predict the next token and adjusts its parameters when it is wrong. Over billions of such adjustments, it learns grammar, common facts, writing styles and typical code patterns.
2. **Fine-tuning and alignment.** The model is trained further on examples of helpful, well-structured answers, often with human feedback. This is why it can follow instructions such as "explain this in three bullet points" rather than only continuing the text.
3. **Inference.** This is the stage you use. The model receives your input and generates output. In a normal chat, the model's trained parameters do not change because of your message. Some products offer memory or data-use settings, so check the privacy settings of the tool you use.

## Why an LLM can write code

Source code is text with strict patterns: keywords, brackets, function names and common structures. The training data included a large amount of code and documentation, so the model learned many of these patterns.

This explains both strengths and weaknesses:

- **Strength:** it can produce a plausible function, explain an error message or translate code between languages.
- **Weakness:** it produces code that *looks* right. Unless a tool runs the code, the model does not know whether it works.

## Limits you should know

### Knowledge cutoff

Training data ends at some date. The model may not know about newer library versions, APIs or product changes. Tools with web search can help, but you still need to check sources.

### No automatic access to your files

The model sees the text it receives. If you do not provide a file, or a tool does not send it, the model cannot know what the file contains.

### Hallucinations

A **hallucination** is an output that is false or unsupported but presented confidently. Examples include an invented function name, a made-up library, or a citation that does not exist.

Hallucinations happen because the model is designed to produce likely text. When it lacks the information, it can still produce something that sounds likely. This is a known limitation of current models, not something you can switch off with one setting.

### Not a database

A database returns exactly what was stored. An LLM generates text from patterns learned during training. It may merge details, get numbers wrong or describe a feature that does not exist. Treat it as a fluent writer and reasoner that needs verification, not as an encyclopedia that is always accurate.

## A useful mental model

A helpful, if imperfect, picture is an extremely well-read autocomplete. It has absorbed patterns from a huge amount of text, so it can continue a sentence in many useful ways. Its answers are only as reliable as the patterns it learned and the context it receives.

Use this picture to decide what to ask:

- Good tasks: explaining a concept, drafting text, suggesting options, finding a bug pattern to check.
- Risky tasks without checking: exact API details, security decisions, legal or medical advice, numbers you will publish.

## Key takeaways

- An LLM predicts the next token repeatedly to build an answer.
- Training teaches patterns from large amounts of text. Inference uses those patterns on your input.
- Hallucinations, knowledge cutoffs and lack of access to your files are normal limitations. Plan for them.

Next: [3. Prompts, tokens and context](/03-prompts-tokens-context).
