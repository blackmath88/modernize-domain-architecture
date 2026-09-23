# Semantic Compiler + JEV Connection

## Working concept

**Semantic Compiler**

> A probabilistic front-end that compiles messy semantic input into typed software primitives.

Conceptually:

```text
fuzzy input
    ↓
semantic recognition
    ↓
typed intermediate representation
    ↓
deterministic / bounded operators
    ↓
validated result
```

## Why this matters

LLMs are often used as the lazy solution for work that could eventually become:
- typed
- deterministic
- specialized
- reusable
- testable

The better architecture is not necessarily "a deterministic LLM".

The LLM can stay probabilistic.

The goal is to **shrink the surface where probabilistic reasoning is needed**.

## JEV lens

The JEV discussion maps well onto this.

Today:

```text
repo
  ↓
LLM + SKILL.md
  ↓
LLM follows procedure
  ↓
typed-ish JSON
```

Future:

```text
repo
  ↓
domain recognizer / semantic compiler
  ↓
typed software primitives
  ↓
LLM reasons only over ambiguity
```

## Where this applies in Modernize

Candidates that may eventually move from Skills into typed analyzers/operators:
- project recon
- dependency mapping
- configuration inventory
- framework/version detection
- DAG generation
- code-shape classification
- migration-pattern recognition

## Intermediate representation

`report.json` and `tasks.json` can be viewed as early forms of an IR:

```text
natural-language intent
      ↓
assessment
      ↓
report.json
      ↓
planning
      ↓
tasks.json
      ↓
execution
```

A mature architecture may strengthen that IR so less meaning has to be re-inferred by the model at each step.

## Key principle

> Bring deterministic structure into an inherently probabilistic LLM loop.

Or:

> typed/deterministic where we can, LLM ambiguity where we need it.
