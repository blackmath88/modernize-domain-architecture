# WS-01 — Modernize Archaeology

## WORKSTREAM ID

`WS-01`

## MISSION

Map what GitHub Copilot Modernize actually does stage by stage, separating observable product behavior from documentation and architectural inference.

## WHY THIS MATTERS

The project cannot locate domain knowledge, product value, or provider influence without a defensible model of the current system.

## QUESTIONS

- What happens during assessment, typed findings, planning, tasks, skills, MCP/tools, transformation, validation, retry, deployment, and provenance?
- For each stage, what is deterministic, LLM-mediated, or unknown?
- Where does knowledge come from, and what artifacts cross stage boundaries?
- Can a human inspect and edit those artifacts?
- What evidence survives into later stages?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `ARCHITECTURE.md`, `structured/claims.json`
- `docs/source-notes/handoff/docs/03_MODERNIZE_ARCHITECTURE.md`
- `docs/source-notes/handoff/COPILOT_HANDOFF.md`
- public technical documentation and observable public artifacts

## TASKS

1. Build a stage table covering inputs, outputs, knowledge source, execution mode, inspectability, editability, provenance, and evidence.
2. Inspect public technical sources and available artifacts; do not rely only on marketing material.
3. Mark gaps as unknown and distinguish product facts from the proposed generic harness.
4. Encode the pipeline in JSON with source references.
5. Record contradictions with current canonical claims.
6. Update WS-01 status in both registries and write the handoff.

## EXPECTED OUTPUTS

- `research/modernize-architecture.md`
- `structured/modernize-pipeline.json`
- `agent-output/WS-01-handoff.md`

## BOUNDARIES

- Do not claim private product internals without evidence.
- Do not rewrite preserved source notes.
- Do not redesign the prototype or provider experiment.
- Do not treat MCP or a skill name as proof of where computation lives.

## DEFINITION OF DONE

- Every named stage is mapped or explicitly unknown.
- Every material claim has a status and verifiable source.
- JSON parses and mirrors the Markdown stage model.
- Deterministic, LLM-mediated, human, and unknown roles are explicit.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. Highlight the earliest typed artifact, least inspectable boundary, strongest contradiction, and next artifact needed.
