# BuildRadar Case Context

## Repo

https://github.com/blackmath88/buildradar

## Current role

BuildRadar is evolving into a **case-based knowledge base + mission control**.

A hackathon is a Case.

Lifecycle:

```text
PREP → WORK → AFTERSPACE
```

## Authority model

External systems remain authoritative:

- GitHub = code / commits / PRs
- Azure = cloud resources / runtime
- VS Code / ChatGPT / Claude / Copilot = execution and reasoning
- BuildRadar = case context, synthesis, evidence index, decisions, memory

## Current implementation

Claude implemented:
- case layer
- case schema
- PREP UI
- readiness
- agenda
- resources
- command deck
- learning notes
- timeline
- case decisions
- typed case action registry
- UI writes
- MCP reads/writes
- provenance

## Key architectural principle

```text
UI / MCP
   ↓
applyCaseAction
   ↓
canonical domain write
+
exactly one timeline event
```

## MCP principle

Agents do not mutate D1 directly.

They write through typed actions such as:
- note add
- evidence add
- link add
- readiness set
- next action set
- decision add

Provenance is derived from transport:
- UI → USER
- MCP → AGENT

Agent does not get to claim its own identity/provenance.

## PREP learning notebook

The PREP UI now contains modular learning notes marked:

- `NEW`
- `CONNECTION`
- `CHALLENGE`
- `QUESTION`

This is intended to become the case-specific architecture field notebook.

## Current important BuildRadar docs

- `docs/case-management-mission-control.md`
- `docs/research/case-management-open-source-scan.md`
- `docs/events/2026-09-23-microsoft-agentic-ai-hackathon.md`
- `docs/case-prep.md`
- `docs/mcp-case-tools.md`

## Current concept

BuildRadar should persist what matters after agent/chat sessions end.

Agents are transient.

The Case persists.
