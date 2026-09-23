# WS-03 — OSS Precedents

## WORKSTREAM ID

`WS-03`

## MISSION

Find systems that already encode executable technical or domain knowledge and determine whether established terminology makes our proposed concept unnecessary.

## WHY THIS MATTERS

The project should compose existing standards and ecosystems rather than rename familiar ideas or build an avoidable package format.

## QUESTIONS

For each precedent: What knowledge is encoded? Who owns it? How is it packaged, versioned, and tested? Can machines execute it? Can agents consume it? Does it expose provenance?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `RESEARCH_THESIS.md`
- `docs/concepts/domain-packages.md`
- preserved Camel and domain-package visual artifacts under `docs/source-notes/root-artifacts/`
- primary project documentation, specifications, schemas, and repositories

## TASKS

1. Inspect at minimum OpenRewrite, CodeQL, Renovate, Roslyn analyzers/code fixes, rustfix/cargo fix, Semgrep, OPA/Rego, Terraform providers, Kubernetes operators, schema/constraint systems, package managers, and migration tooling.
2. Use one consistent comparison matrix and preserve primary-source links.
3. Distinguish declarative knowledge, executable transformations, policy, orchestration, and validation.
4. Identify reusable standards, missing capabilities, and terminology collisions.
5. Conclude whether “MEDP” adds a necessary composition boundary or merely renames existing forms.

## EXPECTED OUTPUTS

- `research/executable-domain-precedents.md`
- `structured/open-source-precedents.json`
- `agent-output/WS-03-handoff.md`

## BOUNDARIES

- Avoid superficial feature lists and unsourced product claims.
- Do not require every precedent to fit the thesis.
- Do not design the MEDP specification; provide constraints and precedent inputs to WS-09.

## DEFINITION OF DONE

- Every required precedent is evaluated against every comparison question.
- Primary sources support material claims.
- Existing terminology and standards are explicitly assessed.
- JSON parses and preserves source URLs and access dates.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. Name the closest existing abstraction, strongest counterexample, and concrete implication for WS-09 and WS-10.
