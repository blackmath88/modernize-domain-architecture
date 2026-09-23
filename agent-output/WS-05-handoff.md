# WS-05 Handoff

## STATUS

`review` on `agent/ws-05-domain-economics`, based on publication main at `65e4dd09b7b6b337d6a3eb7190067d486f050948`. Implementation commit: `9ebf3d0`, pushed to `publish/agent/ws-05-domain-economics`. PR: [#5](https://github.com/blackmath88/modernize-domain-architecture/pull/5), open for orchestrator review. No publication blocker.
Worktree: `/tmp/achim-ws-05-domain-economics`. Local validation passed. The user's existing branch and WS-04 edits were not changed.

## WHAT I DID

Built a zero-dependency Node.js interval calculator, three explicitly hypothetical scenarios and a source-linked economic model. Compared maintained encoding/hybrid workflows against model-plus-native-tool inference, including both sides' setup and upkeep, partial coverage, adopter integration, review, validation, audit work, residual errors and correlated-loss allowances. Prices, maintenance demand and error rates can change over the horizon.

## FILES CHANGED

- [research/domain-knowledge-economics.md](../research/domain-knowledge-economics.md): equations, scenarios, evidence, interpretation and measurement plan.
- [prototype/economics-calculator/calculator.mjs](../prototype/economics-calculator/calculator.mjs): input checks, interval costs, conditional break-even threshold, sensitivity and JSON CLI.
- [prototype/economics-calculator/scenarios.json](../prototype/economics-calculator/scenarios.json): three ranges, twenty-nine variable definitions and twelve source records.
- [prototype/economics-calculator/calculator.test.mjs](../prototype/economics-calculator/calculator.test.mjs): eighteen reproducible tests.
- [WORKSTREAMS.md](../WORKSTREAMS.md) and [structured/workstreams.json](../structured/workstreams.json): WS-05 status only.
- [agent-output/WS-05-handoff.md](WS-05-handoff.md): this handoff.

## KEY FINDINGS

- **Most important threshold, INFERRED:** Covered repeat volume must repay differential setup and ongoing upkeep from positive per-task savings. If those savings may be nonpositive, more volume does not guarantee a win. The optimistic supplied profile has a computed encode-above threshold enclosed by 4-645 tasks per consumer per year; this is conditional on that profile, not a general target.
- **OBSERVED, synthetic calculations:** Two-year savings enclosures rounded outward: conservative -$193k to -$18k; expected/working -$122k to +$194k; aggressive +$35k to +$3,209k. Preferences are infer, uncertain and encode. These are not measured business results or confidence intervals.
- **OBSERVED, local sensitivity:** Working-case task demand and inference review time produce the largest one-at-a-time swings, about $23k and $22k; encoding setup follows at about $13k. Ranking depends on selected ranges.
- **Least defensible input, HYPOTHESIS:** Post-validation escape probabilities and correlated incident losses, including future changes. Benchmark performance and token prices cannot calibrate these for the target task.

## EVIDENCE

The scenario catalog contains all variable units, definitions and `HYPOTHESIS` labels, plus source locators and limitations. Sources include current retrieved API rate cards, BLS wage/compensation data, historical price trends, METR's time-sensitive productivity evidence, NIST risk-assessment guidance, native lifecycle/logging documentation and published WS-03/WS-04 interpretations. External facts contextualize assumptions; they are not presented as measured calculator inputs. Preserved source notes and canonical synthesis are unchanged.

Validation: `node --test prototype/economics-calculator/calculator.test.mjs` passed 18/18 on Node.js 25.9.0; bundled CLI ran without dependencies or network access. Tests cover encode/infer/uncertain outcomes, invalid inputs, temporal factors, discounting, cost units, encoded failures, correlated-loss accounting, source/variable coverage, point accounting, sampled interval containment and CLI errors. Research bounds were checked against calculations; source metadata, local links, token arithmetic, repository validation and git whitespace checks passed. Editor diagnostics reported no errors in all seven changed files. Exact handoff headings, matched review statuses and unchanged other workstream objects passed before publication.

No real model workloads, production migrations, customer interviews or safety evaluations were run. API pricing and documentation are mutable snapshots, not archived evidence. The Node.js 20 minimum is a compatibility target; only 25.9.0 was executed.

## WHAT CHANGED MY MIND

Cheap API calls do not make the total task cheap when accepted outputs require human review. Conversely, encoding can lose even with substantial reuse if review, maintenance or residual errors do not improve. Wide middle-case uncertainty is a useful decision result, not a defect to hide with a midpoint. Native software can capture the benefit without validating a new portable format or business.

## OPEN QUESTIONS

What eligible volume is committed rather than imagined? How much review is actually avoided at equal quality? Who funds shared upkeep, and how does work change across two real updates? What residual errors survive independent checks? Are customer tail-risk and audit constraints satisfied? Which assumed relationships between quality, spend and coverage are invalid?

## RECOMMENDED NEXT STEP

Measure one bounded task with paired model-plus-native-tool and native-encoding/hybrid workflows. Capture every API attempt, human review/rework, validation and audit minute; independently assess acceptance. Have a second maintainer integrate and update the operator twice. Replace the most decision-sensitive inputs with observed ranges and obtain risk-owner estimates for post-validation losses before deciding to scale. WS-09/WS-10 should use this to cost a small native operator, not treat it as approval for a registry.

## RISKS / WEAKNESSES

Interval bounds can overestimate uncertainty and are not probability distributions. Midpoints used for sensitivity are arithmetic conveniences, not expected values; one-at-a-time analysis misses interactions. The model holds adoption, coverage, non-model unit costs and encoded review constant within each run, assumes equivalent fallback and comparable per-incident severity, and does not model deployment ramp or tail-loss distributions. The common-cause allowance must be recalibrated at the proposed rollout scale. Financial preference is never authority or safety approval, and combined resource savings do not establish a payer or vendor margin.