# WS-11 — Challengeability UX

## WORKSTREAM ID

`WS-11`

## MISSION

Design a modernization decision interface around the question: “Why did this decision happen?”

## WHY THIS MATTERS

Provenance has product value only if a user can inspect, challenge, override, and understand consequences at the point of decision.

## QUESTIONS

- Why this decision, and why not an alternative?
- Who or what decided and had authority?
- Which observation, domain rule, company policy, target, or user choice applied?
- What did the LLM infer?
- What happens if the user overrides the decision?
- Which evidence and validation support the result?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `ARCHITECTURE.md`
- `structured/provenance.json`
- WS-06 and WS-10 outputs if available; do not block on them
- existing visual language in `site/`

## TASKS

1. Define the decision-detail information architecture.
2. Represent OBSERVED, DOMAIN RULE, COMPANY POLICY, TARGET, USER CHOICE, LLM INVOLVEMENT, EXECUTION, VALIDATION, and AUTHORITY.
3. Prototype “Why?”, “Why not?”, alternatives, override, and consequence flows.
4. Use realistic WS-10 modernization decisions and explicit unavailable-evidence states.
5. Validate desktop and mobile behavior, keyboard operation, visible focus, semantic labels/headings, and WCAG AA text contrast.
6. Document which provenance fields the prototype requires.

## EXPECTED OUTPUTS

- `research/challengeable-ai.md`
- interactive prototype under `prototype/ux/`
- `agent-output/WS-11-handoff.md`

## BOUNDARIES

- Do not build a generic AI governance dashboard.
- Keep every screen tied to a concrete modernization decision.
- Do not imply an override is permitted when authority denies it.
- Do not hide LLM involvement or missing evidence behind generic confidence scores.

## DEFINITION OF DONE

- A user can answer all required challenge questions for at least three decisions.
- Authority and provenance are distinguishable.
- Override consequences and validation state are visible.
- Desktop/mobile screenshots, keyboard operation, visible-focus checks, semantic landmark/name checks, and WCAG AA text-contrast results are preserved.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. Name the provenance fields that created user value, those that created clutter, and any missing contract required from WS-10.
