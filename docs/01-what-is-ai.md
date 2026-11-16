# 1. What Is AI?

**Estimated reading time:** 8 minutes

This page builds the vocabulary you need for the workshop. You do not need math or programming background for it.

## AI in one sentence

**Artificial intelligence (AI)** is software that performs tasks that normally require human judgment, such as recognizing a face in a photo, translating a sentence, recommending a video or writing a paragraph.

AI is not one technology. It is a broad field that contains several approaches.

## Three nested layers

```text
Artificial Intelligence
  └── Machine Learning
        └── Deep Learning
              └── Large Language Models (LLMs), a kind of deep learning
```

Each inner circle is a more specific way of building AI.

## Layer 1: Rule-based AI

The programmer writes every rule by hand:

```text
if the cart total is over 100 dollars:
    apply a 10% discount
```

This is ordinary programming. It works well when the rules are clear and complete. It fails when the rules are too many or too hard to describe, such as deciding whether a photo shows a cat.

## Layer 2: Machine learning

In **machine learning (ML)**, you do not write the rules. You give the program many examples and let it find the patterns itself.

Example: a spam filter. Instead of writing "emails with the word *prize* are spam," you show the system thousands of emails labeled *spam* or *not spam*. It learns which patterns usually appear in spam.

Three ingredients appear in almost every ML system:

1. **Data:** examples to learn from.
2. **A model:** a mathematical function with adjustable numbers called **parameters** (or *weights*). A model with millions or billions of parameters is common in modern AI.
3. **A learning method:** a procedure that adjusts the parameters so the model makes fewer mistakes on the examples.

**Analogy:** teaching a child what a dog is. You point at many dogs and say "dog." You do not give a list of rules such as "has four legs and barks," because many exceptions exist.

ML is often grouped into three styles:

| Style | How it learns | Example |
| --- | --- | --- |
| Supervised learning | From examples with correct answers (labels) | Spam or not spam |
| Unsupervised learning | Finds groups in data without labels | Grouping customers with similar buying habits |
| Reinforcement learning | Learns from rewards and penalties | A game agent that learns to win |

## Layer 3: Deep learning

**Deep learning** is machine learning that uses **neural networks** with many layers.

A neural network is made of simple units arranged in layers. Each unit combines its inputs using its parameters and passes the result to the next layer. Training adjusts all of these parameters together.

**Analogy:** a stack of filters. In an image model, early layers respond to simple things such as edges. Later layers combine them into shapes, then object parts, then whole objects. Nobody programs those layers by hand; training discovers them.

Deep learning needs a lot of data and computing power, which is why it became practical only in the last decade or so.

## Two kinds of output: predictive and generative

This distinction matters for the rest of the guide.

- **Predictive AI** answers a question about something that already exists. Its output is a label, a score or a number.
- **Generative AI** creates new content, such as text, code, images, audio or video.

| Situation | Predictive AI | Generative AI |
| --- | --- | --- |
| Email | Is this spam? (yes or no) | Draft a reply to this email |
| Photo | What object is in this photo? | Create a picture from a description |
| Sales data | Will sales rise next month? (forecast) | Write a summary of this month's sales |
| Code | Is this function likely to contain a bug? | Write a function that sorts a list |

A **large language model (LLM)** is a generative model specialized in language. Chat assistants and coding assistants usually use an LLM. Page 2 explains how it works.

## Where you already use AI

- **Maps apps** estimate travel time from traffic patterns (ML).
- **Phone keyboards** suggest the next word (language models).
- **Video and music apps** recommend what to watch or listen to next (ML).
- **Face unlock** on a phone recognizes your face (deep learning).
- **Chat and coding assistants** write text and code (generative AI with LLMs).

## Common misunderstandings

**"AI understands things the way people do."**
Whether current models understand in the human sense is a matter of debate. For practical work, treat AI output as a prediction that you must check.

**"AI always knows the latest information."**
A model learned from data up to a certain date. Unless a tool gives it access to current sources, it may not know recent changes.

**"AI is a brand-new idea."**
The term *artificial intelligence* was used at a research workshop at Dartmouth College in 1956. Many ideas are older than the current wave of tools.

**"AI means robots."**
Most AI you use is software with no physical body.

## Key takeaways

- AI is the broad field. Machine learning learns from data. Deep learning uses many-layer neural networks.
- Predictive AI outputs a judgment about existing data. Generative AI creates new content.
- An LLM is a generative model for language, so it can write text and code.

Next: [2. How LLMs work](/02-how-llms-work).
