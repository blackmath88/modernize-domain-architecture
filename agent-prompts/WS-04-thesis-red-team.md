# WS-04 — Thesis Red Team

## WORKSTREAM ID

`WS-04`

## MISSION

Try to kill the thesis that stable domain expertise should become portable machine-executable infrastructure consumed by agents.

## WHY THIS MATTERS

A prototype built only from confirming arguments would demonstrate its assumptions rather than test them.

## QUESTIONS

- Is domain encoding economically rational as models improve and inference gets cheaper?
- Are domain and provider knowledge actually separable?
- Do maintenance, conflicts, hidden assumptions, governance, and package complexity overwhelm benefits?
- Does provenance create customer value or only research comfort?
- Do existing tools already solve the useful part?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `RESEARCH_THESIS.md`, `ARCHITECTURE.md`
- `structured/thesis.json`, `structured/claims.json`
- `docs/concepts/domain-packages.md`
- relevant empirical studies, incident reports, maintenance histories, and technical precedents

## TASKS

1. Attack domain encoding cost, maintenance cost, combinatorial complexity, model improvement, inference cost, error economics, separability, governance, conflicts, hidden rule assumptions, dependency ecosystems, provenance value, and existing alternatives.
2. For every critique record severity, evidence, impact, mitigation, and `kills_thesis: yes | no | partially`.
3. Identify critiques the architecture cannot mitigate without becoming circular or too complex.
4. Propose decisive experiments rather than rhetorical defenses.
5. Preserve contradictions and recommend thesis changes where warranted.

## EXPECTED OUTPUTS

- `research/thesis-red-team.md`
- `structured/thesis-risks.json`
- `agent-output/WS-04-handoff.md`

## BOUNDARIES

- Do not straw-man the thesis as “encode everything deterministically.”
- Do not defend the thesis; mitigation quality must be evaluated skeptically.
- Do not rewrite canonical synthesis directly; recommend changes in the handoff for orchestrator review.

## DEFINITION OF DONE

- Every required attack surface has at least one evidence-backed critique.
- Critiques are prioritized by severity and thesis impact.
- At least one plausible thesis-killing condition is articulated.
- JSON parses and mirrors the risk analysis.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. Lead with the strongest thesis-killing argument, weakest proposed mitigation, and most decisive next experiment.