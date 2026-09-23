# WS-05 — Domain Economics

## WORKSTREAM ID

`WS-05`

## MISSION

Model when knowledge should be encoded in maintained software versus repeatedly inferred by an LLM.

## WHY THIS MATTERS

The architecture's deterministic boundary should follow costs, risks, and reuse rather than ideology.

## QUESTIONS

- How do domain stability, task frequency, model cost/error, error impact, engineering and maintenance cost, consumer count, auditability, validation cost, and expected model improvements affect the choice?
- At what ranges does encoding break even?
- Which variables dominate, and which cannot be estimated credibly yet?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `RESEARCH_THESIS.md`
- `docs/source-notes/handoff/docs/04_SEMANTIC_COMPILER_AND_JEV.md`
- WS-03 and WS-04 outputs if available
- credible model pricing, reliability, engineering-cost, and risk sources

## TASKS

1. Define a transparent scenario model, assumptions, units, and uncertainty ranges.
2. Include all required variables and allow sensitivity comparison.
3. Implement a small calculator under `prototype/economics-calculator/` using the repository's simplest viable tooling.
4. Provide conservative, expected, and aggressive scenarios rather than false point precision.
5. Test at least one case where encoding wins and one where repeated inference wins.

## EXPECTED OUTPUTS

- `research/domain-knowledge-economics.md`
- `prototype/economics-calculator/`
- `agent-output/WS-05-handoff.md`

## BOUNDARIES

- Do not present speculative inputs as measured values.
- Do not optimize the calculator into a product UI.
- Do not assume model prices, capabilities, or maintenance costs remain constant.

## DEFINITION OF DONE

- The model is inspectable, range-based, and reproducible.
- Every variable has a definition and provenance or an explicit speculative label.
- Sensitivity analysis identifies dominant variables.
- Calculator validation covers both encode and infer outcomes.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. State the most important threshold, least defensible input, and evidence needed to improve the model.
