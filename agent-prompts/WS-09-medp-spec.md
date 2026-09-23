# WS-09 — MEDP v0 Spec

## WORKSTREAM ID

`WS-09`

## MISSION

Design the smallest useful machine-executable domain package abstraction, preferring established standards and composition over a large new specification.

## WHY THIS MATTERS

The prototype needs a narrow contract for portable knowledge, but premature standardization could encode the wrong abstraction or duplicate mature ecosystems.

## QUESTIONS

- Which primitives are essential among observation, fact, constraint, capability, transition, recipe, validator, policy, provenance, dependency, authority, version, and confidence?
- Which primitives should reference existing standards instead of being reinvented?
- What can a client rely on without trusting arbitrary package code?
- How are compatibility, authority, provenance, and unsupported cases represented?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `ARCHITECTURE.md`
- `docs/concepts/domain-packages.md`, `structured/architecture.json`
- WS-03 and WS-06 outputs if available; do not block if they are absent
- `prototype/control-plane/README.md`

## TASKS

1. Define explicit v0 goals and non-goals.
2. Minimize the primitives and explain every retained field.
3. Reuse or reference existing schema, policy, recipe, and provenance standards where suitable.
4. Write a JSON Schema and small valid/invalid examples.
5. Demonstrate one software, one organization-policy, and two deployment-package examples.
6. Describe versioning, dependencies, authority, and validation without designing a registry.

## EXPECTED OUTPUTS

- `spec/MEDP-v0.md`
- `spec/medp.schema.json`
- `spec/examples/`
- `agent-output/WS-09-handoff.md`

## BOUNDARIES

- Do not build a package registry, runtime, or broad standard.
- Do not require MCP.
- Do not duplicate standards without documenting the gap.
- Keep v0 intentionally small enough for WS-10 to implement or reject.

## DEFINITION OF DONE

- Schema validates positive examples and rejects meaningful invalid examples.
- Every primitive has a demonstrated need and authority semantics.
- Non-goals and trust boundaries are explicit.
- A client can identify legal moves, provenance, and validation criteria.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. State what was deliberately omitted, which standard was reused, and what evidence would justify a v1.
