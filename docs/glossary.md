# Glossary

| Term | Meaning |
| --- | --- |
| **Acceptance criteria** | Concrete examples or conditions that show a feature meets its requirements. |
| **AGENTS.md** | A Markdown file in a repository that gives AI coding tools project instructions, such as build commands and coding rules. |
| **Agent skill** | A folder with instructions and optional scripts that an AI tool loads only when a task needs them (for example, a `SKILL.md` file). |
| **AI agent** | A model placed in a loop with tools. It plans, acts, observes the result and repeats until the goal is reached or it needs your decision. |
| **AI (Artificial Intelligence)** | The field of building systems that perform tasks that normally need human judgment. |
| **AI observability** | Monitoring of what an AI feature did: prompts, retrieved documents, tool calls, outputs, token use and latency, usually recorded as traces. |
| **Agent mode** | A mode in which an AI assistant plans and performs several steps, such as reading files and editing code, within the permissions you grant. |
| **Chunk** | A piece of a document, usually a few paragraphs, that is embedded and stored for retrieval. |
| **Coding agent** | An AI system that works through several steps in a project, using tools such as reading files, editing code or running commands. |
| **Context** | Everything a model receives for a request, such as the prompt, earlier messages and any files the tool sends. |
| **Context engineering** | Deciding what goes into a model's context (instructions, files, retrieved text, tool results) and when. |
| **Context window** | The limit on how much text (in tokens) a model can handle in one request. |
| **Deep learning** | Machine learning that uses neural networks with many layers. |
| **Embedding** | A list of numbers that represents the meaning of a text. Texts with similar meanings get nearby vectors. |
| **Eval** | A repeatable test of AI behavior, using a set of inputs with expected results or a scoring rubric. |
| **Fine-tuning** | Further training of a model on additional examples, to change its behavior or style. |
| **Function calling** | Another name for tool use: the model returns a structured request to call a function, and your app runs it. |
| **Generative AI** | AI that creates new content such as text, code, images, audio or video. |
| **Guardrail** | A check around a model, such as an input or output filter, an allow-list of actions, or a required human approval. |
| **Hallucination** | An output that is false or unsupported but presented confidently. |
| **Harness engineering** | Building the environment around a model (tests, linters, docs, clear done criteria) so an agent succeeds more often and its results can be verified. |
| **Inference** | Using a trained model to produce an output from an input. |
| **Knowledge cutoff** | The date after which a model has no training data. |
| **Latency** | How long a user waits for a response. Streaming the answer as it is written makes it feel faster. |
| **LLM (Large Language Model)** | A generative model trained on large amounts of text, used for chat and coding assistants. |
| **LLM-as-a-judge** | Using one model to score another model's output against a rubric. Useful, but spot-check its scores. |
| **Machine learning (ML)** | A way of building AI systems by learning patterns from data instead of writing every rule. |
| **MCP (Model Context Protocol)** | An open standard for connecting AI applications to external tools and data through MCP servers. |
| **Model** | A mathematical function with adjustable parameters, produced by training. |
| **Multimodal model** | A model that accepts more than text, such as images, audio or video. |
| **Neural network** | A model made of layers of simple connected units whose parameters are adjusted during training. |
| **Next-token prediction** | The core task of an LLM: predicting the most likely next token given the text so far. |
| **Non-goal** | Something a feature deliberately does not include. |
| **On-device AI** | AI that runs on the user's device instead of in the cloud. It can work offline, but on-device models are smaller. |
| **Parameter (weight)** | An adjustable number inside a model. Training changes parameters. |
| **Plan (technical plan)** | A description of how a feature will be built: affected code, tools, storage and risks. |
| **Pre-training** | The first training stage, in which a model learns patterns from a very large amount of data. |
| **Predictive AI** | AI that outputs a judgment, label or number about existing data. |
| **Prompt** | The request or information sent to a model. |
| **Prompt injection** | An attack in which text inside data (a web page, email or issue) tries to override the AI's instructions. |
| **RAG (Retrieval-Augmented Generation)** | Retrieving relevant documents at question time and adding them to the prompt, so the model answers from them. |
| **Reasoning model** | A model trained to spend extra tokens reasoning before it answers. Often better on multi-step problems, but slower and more costly. |
| **Responsible AI** | Practices for privacy, fairness, transparency, safety and licensing when AI is used in a product. |
| **Semantic search** | Searching by meaning, usually with embeddings, rather than by exact keywords. |
| **Small language model (SLM)** | A language model with fewer parameters, small enough to run on a phone or laptop. |
| **Specification (spec)** | A document describing what to build, its scope, rules and acceptance criteria. |
| **Spec Kit** | GitHub's open-source toolkit for a spec-driven workflow with AI coding tools. |
| **Spec-driven development** | A workflow in which the specification, plan and tasks are written and reviewed before an AI tool writes code. |
| **Structured output** | Model output constrained to a schema, such as JSON, so that code can parse it reliably. |
| **Supervised learning** | Machine learning from examples that come with correct answers (labels). |
| **Token** | A chunk of text that a model reads and writes. It is not always the same as a word. |
| **Token cost** | The money or quota used by input and output tokens. Longer prompts and retrieved text cost more. |
| **Tool use** | An agent's ability to call an external capability such as reading a file or running a command. |
| **Training** | The process in which a model adjusts its parameters using data, before it is used. |
| **Trace** | A record of each step in one AI request (prompt, tool calls, retrieved text, output), used for debugging. |
| **Vector database** | A database that stores embeddings and quickly finds the nearest ones to a query, such as Chroma, pgvector or Qdrant. |
