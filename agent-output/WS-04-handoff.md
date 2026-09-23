# WS-04 Handoff

## STATUS

`review` on `agent/ws-04-thesis-red-team`, based on publication repository main at `65e4dd09b7b6b337d6a3eb7190067d486f050948`.
Work completed in an isolated worktree at `/tmp/achim-ws-04-thesis-red-team`; the user's current workspace branch and newer work were not changed. Local validation passed. Publication is pending the commit and PR step; no publication blocker has been observed.

## WHAT I DID

- **Strongest thesis-killing argument, HYPOTHESIS:** Native tools plus model-assisted work may beat the portable layer after adapters, maintenance, independent review, support and residual failures are counted. Reject that product boundary if it cannot pay back in a preregistered buyer segment and horizon.
- **Weakest mitigation, INFERRED:** "Only encode domains where it pays" is circular if the domain and rejection threshold are chosen after seeing results. Excluding disagreeing clients after testing has the same problem.
- **Most decisive next experiment, OPINION:** WS04-E01, four-arm full-cost comparison against credible native and project-local baselines, followed by two update cycles. Do not treat a two-client happy path as evidence of demand or ROI.

Produced thirteen ranked critiques spanning every required attack surface, nineteen evidence sources and five proposed rejection experiments. Every risk records severity, evidence limits, impact, mitigation, mitigation failure, conditional `kills_thesis`, scope and a rejection condition. Recommendations challenge the package product without rewriting canonical synthesis.

## FILES CHANGED

- [research/thesis-red-team.md](../research/thesis-red-team.md): analysis, cost/loss model, contradictions, experiments and recommendations.
- [structured/thesis-risks.json](../structured/thesis-risks.json): risk register, source catalog and experiment designs.
- [WORKSTREAMS.md](../WORKSTREAMS.md) and [structured/workstreams.json](../structured/workstreams.json): WS-04 status only.
- [agent-output/WS-04-handoff.md](WS-04-handoff.md): this handoff.

## KEY FINDINGS

- **INFERRED:** Useful executable knowledge already exists in native ecosystems; that weakens novelty without proving that native composition meets every proposed requirement.
- **INFERRED:** Target semantics can require new observations. Richer staged acquisition is a valid concession, not proof of one sufficient neutral scan.
- **INFERRED:** Deterministic validation can share the transform's wrong assumptions. Fleet-wide reuse can correlate errors; the loss rate is unknown.
- **INFERRED:** Enforcement requires an independently controlled execution boundary. Provenance and signatures cannot establish semantic correctness or willingness to pay.
- **OPINION:** Do not broaden the package schema or build a registry before the economic and buyer tests. If native composition wins, retain useful recipes and abandon the extra product layer.

## EVIDENCE

The structured catalog identifies sources RT-S01 through RT-S19 with access dates and section locators. Principal adverse evidence: Helm CRD lifecycle exclusions; Kubernetes compatibility constraints; Alembic/Cargo validation limits; SLSA's malicious-producer boundary; the primary xz incident disclosure; OPA logging/privacy tradeoffs; historical inference-price change and METR's conflicting, time-sensitive productivity evidence. Repository proposals are evidence of claims, not external confirmation. No raw evidence or source notes were changed.

Validation: repository script passed; JSON parsed; all thirteen required surfaces covered; unique risk/source/experiment IDs and resolved references; allowed severity/kill labels; priority order; prose/register title, status and test parity; nineteen source destinations and labeled links; local links; proposed experiment fields; illustrative arithmetic; git whitespace checks. Editor diagnostics reported no errors in the research and risk register. Final handoff headings and status scope are checked before publication.

No proposed experiment, cloud deployment, Modernize workflow, native migration engine, buyer interview or production security test was run. ROI, incident rates, buyer budgets and cross-client conformance remain unobserved. `kills_thesis: yes` denotes conditional rejection of a named claim, never an already-proven universal failure.

## WHAT CHANGED MY MIND

METR now explicitly marks its early-2025 slowdown result as outdated. Its February 2026 update suggests improved productivity but warns that selection and timing problems make effect-size estimates unreliable. The old result cannot defend the package against current model-assisted alternatives. Mature systems deliberately limiting lifecycle automation also made maintenance, independent validation and governance more central than authoring convenience.

## OPEN QUESTIONS

Which budget owner and reuse volume justify the layer? Does independent integration beat thin native adapters? What observations are actually stable across targets? Who funds update obligations and owns exceptions? Can retained evidence satisfy real audit needs after privacy restrictions? No reviewed source answers these product-specific questions.

## RECOMMENDED NEXT STEP

Orchestrator: adopt explicit rejection thresholds before approving more architecture work. WS-05 should cost WS04-E01 and WS04-E04; WS-09/WS-10 should compare native composition and test a frozen support profile; WS-06 should define the execution trust boundary; WS-11 should test actual provenance outcomes with budget-owning buyers. These are recommendations, not edits or status changes to other workstreams.

## RISKS / WEAKNESSES

This is desk research with bounded analogies, not measured MEDP failure. Messaging examples do not automatically refute the narrower hosting prototype. External documentation can drift and was not archived; pinned source/license revisions are supplied where available. Early incident reports and productivity studies have explicit limits. The proposed twelve-repository pilot cannot establish rare-loss rates; five buyer teams cannot establish market-wide demand. The original value-in-trust-and-integration thesis could survive failure of the package-layer product, and those claims must not be conflated.