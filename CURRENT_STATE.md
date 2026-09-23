# Current State

Last reviewed: 2026-09-23

## What we know

- **Observed:** The supplied PhotoAlbum notes report an AppCAT assessment with 28 typed incidents and fields including rule identifiers, targets, and severity. The raw assessment artifact is not yet present in this repository. Source: `docs/source-notes/handoff/COPILOT_HANDOFF.md` and `docs/source-notes/handoff/docs/03_MODERNIZE_ARCHITECTURE.md` after source preservation is complete.
- **Documented in the supplied research:** Modernize is described as an orchestrated pipeline spanning assessment, typed findings, planning, task execution, and validation. Source: `modernize-domain-architecture-handoff/docs/03_MODERNIZE_ARCHITECTURE.md`.
- **Observed:** The supplied corpus contains research notes and visual explainers, but no raw Modernize assessment, plan, task, execution, or validation artifacts.

## What we think

- **Hypothesis:** GitHub Copilot Modernize combines relatively portable application-modernization knowledge with an opinionated Azure-target modernization path.
- **Inferred:** Deployment execution occurs late, while provider target and constraints can shape architecture and planning earlier.
- **Opinion:** Stable domain knowledge should become typed, testable, machine-executable infrastructure when repeated ambiguity costs more than encoding it.

## What is still unknown

- Where provider assumptions first enter an actual Modernize run.
- Whether assessment begins with provider-neutral facts or target-aware findings.
- Whether AWS, Azure, and provider-neutral requests receive symmetric treatment.
- Which planning decisions are deterministic, LLM-mediated, or enforced by tools behind MCP.
- How much of the product's durable differentiation resides in provider expertise, orchestration, validation, integration, UX, or operational learning.

## What experiment should happen next

Run the same application through the seven intents in `EXPERIMENT_PLAN.md`. Preserve each prompt, tool version, assessment, plan, task graph, selected skills, generated files, validation output, repair behavior, and final diff. Record observations without filling absent evidence with inference.