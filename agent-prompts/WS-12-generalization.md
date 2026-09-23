# WS-12 — Generalization

## WORKSTREAM ID

`WS-12`

## MISSION

Test whether the architecture generalizes beyond modernization without claiming universality.

## WHY THIS MATTERS

A useful architecture should transfer by explicit mapping, while failed mappings reveal which concepts are modernization-specific.

## QUESTIONS

For each selected domain, can we identify observation, domain knowledge, provider/vendor knowledge, organization policy, user intent, legal transitions, agent judgment, validation, and authority? Which concepts fail or change meaning?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `ARCHITECTURE.md`
- `structured/architecture.json`
- WS-03, WS-04, and WS-06 outputs if available
- primary technical and governance sources for selected domains

## TASKS

1. Select two or three domains from cybersecurity, compliance, infrastructure operations, enterprise configuration, and data engineering.
2. Justify selection for contrast rather than convenience.
3. Map every required layer with concrete examples and authority.
4. Identify mismatches, missing primitives, and false analogies.
5. Compare validation strength and cost across domains.
6. Conclude where the architecture transfers, requires adaptation, or fails.

## EXPECTED OUTPUTS

- `research/generalization.md`
- `structured/generalization.json`
- `agent-output/WS-12-handoff.md`

## BOUNDARIES

- Do not claim universality from two or three examples.
- Do not use generic domain descriptions without executable or decision examples.
- Do not change the core architecture directly; recommend changes for orchestrator review.

## DEFINITION OF DONE

- Two or three domains are mapped across every required dimension.
- Transfer, adaptation, and failure are separately identified.
- Claims use domain-specific evidence and uncertainty labels.
- JSON parses and supports comparison across domains.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. State the strongest successful transfer, strongest failure, and whether generalization strengthens or narrows the thesis.