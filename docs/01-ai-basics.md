# 1. AI, LLMs and Generative AI

**Estimated reading time:** 5 minutes

## Key terms

**Artificial intelligence (AI)** is the broad field of building systems that perform tasks normally associated with intelligence, such as recognizing images, making predictions or producing text.

**Machine learning** is one way to build AI systems: instead of writing every rule by hand, you train a model to find patterns in data.

**Deep learning** is a type of machine learning that uses neural networks with many layers.

**Generative AI** creates new content, such as text, code, images or audio.

**Large language model (LLM)** is a model trained to work with language. Many chat assistants use an LLM to produce their answers. Not every AI system is an LLM or a chatbot.

## Example

You ask a chat assistant: *"Explain a `for` loop with a JavaScript example."*

The assistant generates an explanation and some code. That output is generated content. It is useful, but it is not a guarantee that the code is correct in every situation. You still need to check it.

## Training and inference

- **Training** is when a model learns from data. This happens before you use it.
- **Inference** is when a trained model produces an output for your input. Almost every time you chat with an AI tool, you are using inference.

Sending a prompt does not retrain the model. The model answers based on what it learned during training and on the context it receives in the current request.

## Why answers can be wrong

A model produces text that is likely to fit the request. A fluent answer can still be:

- **Incorrect**, for example a wrong function signature or a made-up library name.
- **Incomplete**, for example missing an edge case such as an empty list.
- **Outdated**, because it was trained on older information.

When a model produces information that is false or not supported by its sources, this is often called a **hallucination**. Adding relevant documentation to the context can make answers better grounded, but it does not prove that they are correct.

## Key takeaways

- Generative AI produces content; it does not automatically produce verified truth.
- An LLM is one type of AI system. Use the right word for the right thing.
- Treat every answer as a draft to review.

Next: [2. Prompts, tokens and context](/02-prompts-and-context).
