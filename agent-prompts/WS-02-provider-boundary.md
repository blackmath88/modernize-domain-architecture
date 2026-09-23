# WS-02 — Provider Boundary

## WORKSTREAM ID

`WS-02`

## MISSION

Find the first point where provider-specific assumptions influence modernization, without starting from the conclusion that Modernize is an Azure funnel.

## WHY THIS MATTERS

Provider neutrality is the central falsifiable distinction between portable modernization and platform migration.

## QUESTIONS

- Does assessment begin with neutral facts or target-aware findings?
- When does a provider first affect recommendations, plans, tasks, code, IaC, or validation?
- Are Azure, AWS, provider-neutral, and preserve-current-hosting requests handled symmetrically?
- Which differences come from user intent, provider knowledge, the harness, or LLM inference?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `EXPERIMENT_PLAN.md`
- `experiments/runbooks/RUN_TEMPLATE.md`
- `structured/experiments.json`, `structured/provenance.json`
- `docs/product-analysis/provider-influence.md`
- preserved Modernize notes under `docs/source-notes/handoff/`

## TASKS

1. Prepare and, where access permits, execute controlled runs A-G: upgrade only; no cloud target; cloud unspecified; Azure; provider-neutral; AWS; preserve current hosting.
2. Start each run from the same clean source revision and record exact versions and prompts.
3. Preserve raw artifacts under `experiments/provider-boundary/` or linked `evidence/` paths.
4. Identify the earliest provider-shaped observation, recommendation, task, transformation, and validation criterion.
5. Record null and unsupported results without filling gaps with inference.
6. Compare results against thesis falsification criteria.

## EXPECTED OUTPUTS

- `research/provider-boundary.md`
- `structured/provider-boundary.json`
- `experiments/provider-boundary/`
- `agent-output/WS-02-handoff.md`

## BOUNDARIES

- Do not expose credentials or cloud authentication state.
- Do not vary the source application between runs.
- Do not present a planned or blocked run as evidence.
- Do not force symmetry into tools that do not support it.

## DEFINITION OF DONE

- All seven intents are completed, explicitly blocked, or unsupported with evidence.
- The earliest provider entry point is identified or honestly unresolved.
- Raw artifacts and interpretations are separated.
- JSON parses and each conclusion links to evidence.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. State which evidence strengthened, weakened, or failed to test the provider-boundary hypothesis.
