---
title: "Research assistant for solar investment"
summary: "A research assistant for solar investment in 10 emerging markets that only answers from official sources, and says so when it doesn't know."
badge: "1st place"
context: "PowerTrust GenAI Hackathon"
period: "Apr 2026"
role: "Data collection, agents, retrieval and the app"
stack: ["Python", "Groq (Llama 3)", "FastAPI", "pytest", "SLURM / H200"]
metric: "1st place"
order: 2
size: "normal"
repo: "https://github.com/noeljo23/solar-intelligence"
---

If you want to put solar panels into a new market, someone has to read that country's regulations first. Across ten countries, several languages and dozens of regions, that's weeks of reading. Asking a general chatbot doesn't help much: it mixes up laws from different countries and makes up numbers with total confidence.

I wanted the opposite. Something that would rather say "I don't know" than guess.

## How it works

The markets are Brazil, Mexico, Chile, Colombia, South Africa, Kenya, Nigeria, Malaysia, Indonesia and Vietnam, split into 38 regions and 6 things an investor cares about. Sources only come from government and regulator websites. I ran the collection as batch jobs on Northeastern's H200 cluster.

Before a fact is allowed into the knowledge base, five agents go through it: one collects, one validates, one writes it up, one looks for alternatives and one audits. A fact needs two independent sources to get in. Llama 3.3 70B does the writing and Llama 3.1 8B does the checking, both on Groq.

When you ask a question, it answers only from what got through. If nothing did, it tells you. If the answer came from a Portuguese, Spanish, Bahasa or Vietnamese source, it says it translated. Each region also gets a 0 to 100 feasibility score, and anything filled in because data was missing is marked as imputed.

## Getting it working

ChromaDB kept segfaulting on Windows. Instead of fighting it, I wrote a small in-memory search over hashed embeddings and moved on. The UI started as a Streamlit prototype and got rebuilt with a FastAPI backend once the core worked.

It took 1st place. The code, tests and methodology are on GitHub.
