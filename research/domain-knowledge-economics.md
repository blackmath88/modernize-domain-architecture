# WS-05: Domain Knowledge Economics

## Decision rule

**OPINION:** Encode a bounded, repeated decision when its avoided inference, review, validation, audit and residual-error costs exceed its additional authoring, integration, maintenance, support and execution costs over a realistic reuse horizon. Prefer native rules, analyzers and project-local scripts before paying for a portable package layer. Keep novel or insufficiently observed cases on an explicitly reviewed inference path.

Neither stable knowledge nor cheap tokens settles this question. A stable rule used twice may not pay back; an expensive-to-maintain rule used thousands of times might. An encoded workflow can retain LLM use. Conversely, a capable inference workflow can use retrieval, caching, native tools and deterministic checks. Compare equivalent accepted outcomes and permissions, not software against an artificially weak bare prompt.

**OBSERVED, calculator execution:** The supplied hypothetical ranges produce an inference-favoring case, an uncertain case and an encoding-favoring case. This is arithmetic evidence about the model, **not measured project ROI**. No customer demand, task success rate or incident-loss distribution has been measured here.

## Run it

Requires Node.js 20 or newer; validated with Node.js 25.9.0. No dependencies, network calls, API credentials, UI or deployment are needed. From the repository root:

```sh
node --test prototype/economics-calculator/calculator.test.mjs
node prototype/economics-calculator/calculator.mjs
node prototype/economics-calculator/calculator.mjs /absolute/path/to/your-scenarios.json
```

For a shorter view using the repository's existing `jq` prerequisite:

```sh
node prototype/economics-calculator/calculator.mjs | jq '.results[] | {
  name, savings_usd, financial_preference, volume_threshold,
  dominant_inputs: .sensitivity[0:5]
}'
```

Implementation: [calculator.mjs](../prototype/economics-calculator/calculator.mjs). Inputs, units, definitions and source references: [scenarios.json](../prototype/economics-calculator/scenarios.json). Executable checks: [calculator.test.mjs](../prototype/economics-calculator/calculator.test.mjs). Each parameter accepts a scalar for a measured/controlled case or `[low, high]` bounds. All supplied decision inputs are labeled `HYPOTHESIS`, including values motivated by external sources. Missing inputs, unknown parameter names, reversed bounds, nonfinite values and invalid probabilities fail instead of silently defaulting to zero.

The output is an **incremental cost difference**, not absolute total cost, ROI percentage, confidence level or execution approval. Positive `savings_usd` favors encoding. `financial_preference` is `encode` only if the entire computed interval is positive, `infer` only if it is negative, and `uncertain` otherwise. Raw machine-readable digits are calculation precision, not confidence in the assumptions; use rounded ranges in decisions.

## What is being compared

**INFERRED:** The unit is one bounded modernization decision delivered at the same acceptance standard, such as a dependency/version compatibility finding with checked output, not an entire application migration or one model call. Freeze that unit and the eligible support profile before estimating inputs. Different task classes need separate scenarios; averaging a cheap classification and a destructive migration can conceal risk.

- **Inference:** repeated model-mediated interpretation with native tools, validation, review and its own setup/upkeep.
- **Encoding:** a maintained operator or rule, independent tests and the same acceptance requirements, possibly with residual model use.
- **Hybrid:** only the `eligible_fraction` earns savings; other cases use the same fallback as inference. Setup, adapters and support are still charged. Any extra fallback-routing overhead must be added to encoding's support/runtime budget rather than quietly canceled.

The perspective is combined producer/adopter resource cost in USD. It includes opportunity-cost labor even when a community supplies it for free. Already-sunk and truly identical native-tool costs cancel on both sides. This is not a vendor-margin model or proof that the party paying for authoring captures the downstream savings. Re-run with the relevant buyer's cash costs for procurement; do not mix cash and resource perspectives. A mandatory license, independent gate or audit service that differs between options must be priced into the applicable setup, support or per-task cost, with any conversion documented.

The [preserved semantic compiler/JEV notes](../docs/source-notes/handoff/docs/04_SEMANTIC_COMPILER_AND_JEV.md) propose shrinking probabilistic work, not eliminating it. [WS-03's published native-tool comparison](https://github.com/blackmath88/modernize-domain-architecture/blob/2607deb/research/executable-domain-precedents.md) makes the baseline credible; [WS-04's published red team](https://github.com/blackmath88/modernize-domain-architecture/blob/62e6f34/research/thesis-red-team.md) motivates counting update cycles, external review and common-cause losses. These are prior interpretations, not empirical cost measurements. Their branches are not merge dependencies of this calculator.

## Model and units

**INFERRED accounting model:** Let `consumers` be active adopters, `tasks` annual tasks per adopter and `eligible` the covered fraction. Initial extra cost is:

$$
F = labor \times (setup_{encode}-setup_{infer}+consumers\times integration_{extra}).
$$

For year index $year=0,\ldots,years-1$, compute per-eligible-task savings $benefit_{year}$ and extra annual costs $upkeep_{year}$:

$$
\Delta = -F + \sum_{year} \frac{consumers\times tasks\times eligible\times benefit_{year}-upkeep_{year}}{(1+discount)^{year+1}}.
$$

$$
upkeep_{year}=labor\times(changes\times growth^{year}\times maintenance_{extra}+consumers\times support_{extra})+commonLoss_{extra}.
$$

The six per-task benefit terms are:

| Term | Calculation and accounting boundary |
| --- | --- |
| Model bill avoided | `llm_usd_task * price_factor^year * (1 - encode_llm_fraction)`; bill includes all attempts and paid tools, not one successful call. Both workflows benefit from the price change. |
| Review/rework avoided | `labor_usd_hour / 60 * (infer_review_minutes * review_factor^year - encode_review_minutes)`; routine human corrections, not incident loss. |
| Validation avoided | `infer_validation_usd_task - encode_validation_usd_task`; independent check labor/compute not already included in review. Negative savings are allowed. |
| Audit work avoided | `labor_usd_hour / 60 * (infer_audit_minutes - encode_audit_minutes)`; actual work saved on equivalent evidence tasks, not an arbitrary premium for provenance. |
| Residual loss avoided | `(min(1, infer_escape_probability * infer_error_factor^year) - min(1, encode_escape_probability * encode_error_factor^year)) * loss_usd_escape`; errors after checks, with an explicitly assumed common severity distribution. |
| Runtime expense | `-encode_runtime_usd_task`; additional deterministic execution beyond common native tooling. |

All twenty-nine input definitions, units, bounds and evidence references are in the `assumptions` object of the input file. Important interpretations:

- Domain stability is operationalized as **material changes per year times extra hours per change**, not a subjective stability score. `change_growth_factor` allows maintenance demand to accelerate or decline.
- `integration_extra_hours_consumer`, `maintenance_extra_hours_change`, `support_extra_hours_consumer_year` and `common_loss_extra_usd_year` are signed **encode minus infer** differences. Negative values are valid when encoding reduces those costs.
- `price_factor`, `review_factor`, `infer_error_factor` and `encode_error_factor` vary separately. A factor of 0.7 retains 70% of the preceding year's quantity; 1 is constant; above 1 worsens it. A zero factor takes effect after year one. Cheaper tokens do not mechanically reduce errors or reviewer effort.
- `consumers` and task frequency are constant per run. Consumer count may be fractional when modeling average active consumer-equivalents, not literal partial organizations. Integration is charged for the same equivalent count; model staggered adoption separately before a real investment decision.
- Setup is paid at time zero; annual benefits and upkeep occur at year end. Two years is the illustrative horizon. Non-model unit prices and encoded review remain constant within each run; widen bounds or run distinct shorter-horizon cases for changes. This is not a detailed cash-flow schedule.

## Ranges, not invented probabilities

The calculator propagates intervals through the arithmetic, including sign-changing differences. Bounds form a rectangular uncertainty set, **not independent random variables**. No distribution, percentile, Monte Carlo probability or statistical expected value is asserted. "Expected" is the required middle scenario's name; it means working assumptions only.

Repeated appearances of a variable and regrouping across years can widen the interval. The result is a conservative enclosure for the stated formula, subject to ordinary floating-point precision, not necessarily attainable best/worst cases and not a formally rounded interval proof. Component bounds are diagnostic and need not sum to the tighter regrouped total bounds; at point inputs the accounting balances. Correlated assumptions should be represented by separate coherent scenarios rather than interpreting every rectangle corner as equally plausible. A wide uncertain result is a reason to collect information, not to select its midpoint.

One-at-a-time sensitivity varies each input between its endpoints while holding all others at arithmetic midpoints. The reported swing is in discounted USD savings. It identifies local leverage **within the chosen ranges**; it is not variance attribution, a global importance ranking, or a recommendation to believe the midpoint. Joint changes in reuse, coverage, review and drift still matter.

## Worked scenarios

Every range below is **HYPOTHESIS**, selected to expose the boundary rather than represent a sampled population. All cases use two years and a fully burdened labor assumption of $100-180/hour or $100-160/hour. They represent different settings for bounded decisions, not three measured companies.

| Input or result | Conservative About Encoding | Expected / Working Case | Aggressive About Encoding |
| --- | --- | --- | --- |
| Situation | Sparse use, changing knowledge, little review saved | Shared bounded findings with uncertain adoption and review benefit | Repeated checks across a larger supported fleet |
| Active consumers | 1-2 | 3-6 | 8-12 |
| Tasks per consumer per year | 10-50 | 100-300 | 1,000-2,000 |
| Eligible fraction | 30-60% | 60-90% | 80-95% |
| Encoding setup hours | 160-320 | 80-180 | 60-120 |
| Material changes in year one | 4-12 | 2-6 | 1-3 |
| Extra maintenance hours/change | 8-24 | 4-12 | 2-6 |
| Inference review minutes/task, year one | 1-5 | 6-15 | 10-20 |
| Encoded review minutes/task | 2-6 | 2-6 | 1-3 |
| API bill/task, year one | $0.02-0.50 | $0.05-2 | $0.10-3 |
| Next-year API bill multiplier | 0.3-0.8 | 0.4-1.0 | 0.4-1.0 |
| Computed savings enclosure, rounded outward | -$193k to -$18k | -$122k to +$194k | +$35k to +$3,209k |
| Conditional financial preference | infer | uncertain | encode |
| Guaranteed encode-above demand threshold | not bounded | not bounded | threshold enclosed by 4-645 tasks/consumer/year |

**OBSERVED, synthetic execution:** The aggressive profile's unrounded threshold enclosure is approximately 4.27-644.79 annual tasks per consumer. With other assumptions held inside that profile, annual demand above the upper bound clears the modeled financial break-even. It does **not** establish safe deployment or that 645 tasks is a universal threshold. Consumer count, coverage, review savings and common-loss allowance must remain in that profile; changing rollout scale may require changing the loss budget too.

The conservative and middle cases do not have a bounded guaranteed encode-above threshold because the interval for per-task benefit includes nonpositive values. This does not mean every point case can never break even. It means adding volume alone cannot guarantee a win across that entire input box. If encoded per-task work is worse, more reuse can multiply the disadvantage.

**Exact arithmetic sanity case, not a forecast:** $1,000 additional setup and $10 saved per task, with no differential upkeep or losses, break even at 100 tasks. Ten tasks favor inference by $900; 200 favor encoding by $1,000. The tests verify this and the zero-coverage, zero-savings and negative-unit-benefit boundaries.

## Which inputs dominate

**OBSERVED, local sensitivity on hypothetical inputs:**

| Scenario | Largest one-at-a-time savings swings, rounded |
| --- | --- |
| Conservative | Labor rate about $41k; change frequency and maintenance hours/change about $34k each; initial encoding about $22k |
| Expected / working | Task demand about $23k; infer-side review about $22k; initial encoding about $13k; encoded review about $10k; consumer count about $10k |
| Aggressive | Task demand about $551k; infer-side review about $480k; consumer count about $327k; labor rate about $320k; audit effort about $151k |

These rankings are artifacts of the declared ranges, not universal economic laws. The middle case's strongest practical information need is **accepted repeat volume times review/rework actually avoided**, alongside authoring and two real maintenance cycles. A five-minute saving at $120/hour is $10: API token savings can be secondary. A decision dominated by assumed error-loss savings is less defensible until those residual errors and impacts are independently estimated.

The least defensible inputs are post-validation escape probabilities, their future trends and correlated incident loss. Next are adoption/eligible volume, real review savings and exception-maintenance effort. Public benchmark performance cannot substitute for these measurements. A single organization may rationally reject an apparent financial win because its unacceptable-outcome constraint fails.

## Source grounding and limits

The machine-readable source catalog gives URLs, access date 2026-09-23, locators, findings and limitations. No live price or benchmark is silently imported into a scenario.

| Evidence | What it supports, and what it does not |
| --- | --- |
| [OpenAI API pricing](https://openai.com/api/pricing/), E-S01 | The retrieved standard rate cards span $0.10-10 per million input tokens and $0.50-50 output for the listed tiers below 272k context. Cached, batch and residency terms differ. The returned page was German-localized. This is a mutable price snapshot, not equal capability or total workflow cost. |
| [BLS developer wages](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm), E-S02 | The May 2025 software-developer median is $135,980 annually; do not confuse it with the page's combined-occupation headline. Dividing by an assumed 2,080 paid hours is roughly $65/hour of wages, not a fully burdened productive-hour rate. |
| [BLS employer compensation](https://www.bls.gov/news.release/ecec.nr0.htm), E-S03 | June 2026 private-industry averages separate $32.82/hour wages and $14.07 benefits. These are not software-specific and must not be mechanically multiplied into the developer median. Our $100-180/hour values remain explicit hypotheses. |
| [Stanford 2025 AI Index](https://hai.stanford.edu/ai-index/2025-ai-index-report), E-S04 | Historical inference-price improvement motivates time-varying bills, not extrapolation of a 280-fold workflow improvement. |
| [METR early-2025 RCT](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) and [2026 follow-up](https://metr.org/blog/2026-02-24-uplift-update/), E-S05/E-S06 | The older 19% slowdown is explicitly outdated for current productivity. The follow-up describes selection/timing problems despite signs of improvement. Neither provides this task's review time or residual error rate. |
| [NIST SP 800-30 Rev. 1 publication record](https://csrc.nist.gov/pubs/sp/800/30/r1/final), E-S07 | Risk assessment supports organizational decisions about residual risk and controls. The publication record supplies no numerical AI-loss calibration and does not endorse this model. |
| [Helm CRD guidance](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/), E-S10 | Deliberately excluded lifecycle automation illustrates maintenance and correctness obligations, not an hourly estimate. |
| [OPA decision logs](https://www.openpolicyagent.org/docs/management-decision-logs), E-S11 | Native lineage, masking and dropping demonstrate existing audit capabilities and tradeoffs; incremental audit savings or willingness to pay remain unobserved. |

**Illustrative token conversion:** 20,000 input and 4,000 output tokens cost $0.004-0.40 per call at the two listed endpoint rate pairs. Two to six such calls give $0.008-2.40 before other paid tools or special terms. Token budgets and retry counts here are assumptions, not measurements; do not infer that the cheapest tier can complete the same work. Price the observed full trace, including failures, before using `llm_usd_task` in a real decision.

## Risk and double-counting rules

**OPINION:** Financial comparison is subordinate to acceptance, authority and safety gates. Expected monetary loss is not permission to violate a policy, corrupt irreplaceable data or accept an unbounded liability.

- Measure errors **after** review and validation. Do not apply a raw model-failure percentage as an incident probability while also claiming reviewers eliminate it.
- Count caught ordinary mistakes as review/rework; count escaped harm once as residual loss. Keep audit labor, validation labor and incident response out of overlapping buckets.
- `loss_usd_escape` assumes comparable conditional severity on both sides. If software's errors have a different severity distribution, split task classes or extend the model before using its answer.
- Shared-rule errors, producer compromise and outages belong in a separate portfolio allowance. It is not multiplied by task count, and must be recalibrated at the proposed scale. This does not estimate a tail distribution or prove independence of remaining incidents.
- Do not enter zero for unknown catastrophic risk. Use a clearly labeled stress allowance and a separate hard acceptability gate; report the decision as unresolved if neither is defensible.
- Auditability has value only through a measured avoided expense or required acceptance outcome. A provenance graph is not revenue, compliance certification or semantic truth.

## Evidence to collect next

1. Freeze one bounded task class and supported profiles. Count actual eligible demand and adopter commitments over a realistic horizon; record excluded and abandoned tasks.
2. Compare model-plus-native-tools and native-encoding/hybrid workflows at equal acceptance standards. Log all API attempts, elapsed human review/rework, independent validation and audit effort. Blind the acceptance review where practical.
3. Have a second person integrate the operator, then maintain it across two pinned upstream changes. Record setup, adapter, support and recertification costs for both alternatives, including the baseline's prompt/retrieval updates.
4. Independently adjudicate residual failures and near misses. Collect severity ranges and a fleet-wide stress scenario with accountable risk owners; do not infer rare-event safety from a small clean pilot.
5. Replace the largest decision-sensitive hypotheses with measured ranges. Refresh API traces and quality evidence together when the model or workload changes. Re-run before enlarging the support surface.

**OPINION:** When the interval straddles zero, keep a cheap reversible inference/native-tool workflow and buy information before a broad encoding effort. A small native rule may still be worth building as an experiment; the calculator is not a ban on learning. When encoding wins, implement the smallest supported operator and retain explicit unresolved cases. Its economics do not by themselves justify a portable format, registry or independent business.

## Validation and limits

The committed tests exercise both financial outcomes, uncertainty, parameter validation, yearly change factors, discounting, differential integration/support/maintenance, audit and validation units, encoded mistakes, probability caps, correlated-loss charging, nonpositive unit savings, signed cost advantages, source/variable coverage, shipped scenarios, point accounting, sampled interval containment and CLI behavior. These are reproducible calculator checks, not measured modernization results.

The model omits deployment ramp, demand growth, queueing/latency value, heterogeneous labor rates, distribution/network effects, taxes, financing detail, option value and endogenous relationships between quality and spend. It does not optimize a task portfolio or promise a global optimum. Equal fallback and fixed support coverage are material assumptions. Interval overestimation can be substantial; one-at-a-time sensitivity misses interactions. No customer interviews, production migrations, model benchmark or safety evaluation was run. Canonical thesis and other workstreams were left unchanged.