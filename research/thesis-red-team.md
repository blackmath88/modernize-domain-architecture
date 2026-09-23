# WS-04: Thesis Red Team

## Verdict

**OPINION:** Do not invest in a new package standard or registry yet. First try to reproduce its useful outcomes with native tools and project-local automation, and give that alternative equal access to models, reviewers and enforcement. If it wins on full cost and satisfies the buyer, stop the package-layer product. Useful executable domain knowledge already exists; that is not evidence that another boundary creates value.

**Strongest thesis-killing condition, HYPOTHESIS:** Integration, maintenance, independent review and residual failure costs erase the reusable layer's savings within the buyer's actual reuse horizon. This rejects the proposed product boundary in the tested segment, not the existence of useful executable rules.

**Weakest mitigation, INFERRED:** "Choose the stable domains where encoding pays." Without committing to a domain and rejection threshold beforehand, this selects away every negative result. "Only compatible clients count" has the same problem if compatibility is defined after seeing disagreements.

**Most decisive next experiment, OPINION:** WS04-E01, a full-cost comparison against expert/native tooling, native tooling plus models, and project-local scripts plus models, followed by two update cycles. A happy-path two-client demo is insufficient.

## Scope and evidence discipline

**OBSERVED:** The repository contains distinct claims: an Azure-oriented Modernize product hypothesis; a proposal for portable executable domain infrastructure; and an opinion about encoding only when ambiguity costs exceed encoding costs. Evidence for the first does not establish the second or monetize the third. See [RESEARCH_THESIS.md](../RESEARCH_THESIS.md), [CURRENT_STATE.md](../CURRENT_STATE.md), and the [domain-package proposal](../docs/concepts/domain-packages.md). [RT-S01], [RT-S02]

This critique attacks the strongest plausible version: selectively encoded stable expertise, native execution engines where useful, explicitly unresolved cases, and a separately owned harness. It does **not** assume everything must be deterministic. The [architecture](../ARCHITECTURE.md) already acknowledges early provider influence, and the [prototype brief](../prototype/control-plane/README.md) assigns execution and approvals to the harness. Those concessions are sound, but limit what the package itself can claim. [RT-S03]

**DOCUMENTED** below means a source describes behavior, a study or a limitation. It does not mean this workstream ran that engine. **INFERRED** identifies our implications; **HYPOTHESIS** identifies unmeasured cost, adoption or failure mechanisms. Nineteen source records, section locators, limits and access dates are in [structured/thesis-risks.json](../structured/thesis-risks.json). External pages were reviewed on 2026-09-23; sources reused from the preceding WS-03 review retain primary URLs. They were not archived here. No existing raw evidence or source notes were modified.

No MEDP ROI, customer willingness to pay, production failure rate or cross-client conformance was observed. No Modernize run or proposed experiment was executed. Public documentation demonstrates constraints and precedents, not that this proposal fails in deployment. All experiment identifiers beginning `WS04-` are local proposals, not completed runs or changes to the canonical experiment registry.

## Ranked risk register

Priority is investigation order, not estimated probability. `critical` threatens safety or the product boundary; `high` threatens feasibility, scope or adoption. `kills_thesis` is **conditional** on the stated rejection result: `yes` rejects the explicitly scoped claim, `partially` rejects a stronger version or one component, and `no` would leave it intact. No `yes` below asserts that rejection has already happened.

| Priority | ID | Critique | Severity | kills_thesis | Test |
| --- | --- | --- | --- | --- | --- |
| 1 | RT-01 | No amortization before the workload changes | critical | yes | WS04-E01 |
| 2 | RT-02 | Incumbent artifacts already capture the useful knowledge | critical | yes | WS04-E01, WS04-E02, WS04-E05 |
| 3 | RT-03 | Target semantics change what must be observed | critical | partially | WS04-E02, WS04-E03 |
| 4 | RT-04 | Deterministic validation can repeat the same wrong assumption | critical | partially | WS04-E03, WS04-E01 |
| 5 | RT-05 | An authoritative package cannot police its client | critical | partially | WS04-E03 |
| 6 | RT-10 | Trustworthy origin is not trustworthy expertise | critical | partially | WS04-E03, WS04-E04 |
| 7 | RT-06 | Compatibility is a relation, not a version number | high | partially | WS04-E02, WS04-E04 |
| 8 | RT-07 | Knowledge ownership becomes a permanent service obligation | high | partially | WS04-E04, WS04-E01 |
| 9 | RT-08 | The model-assisted alternative improves during payback | high | yes | WS04-E01, WS04-E04 |
| 10 | RT-09 | Rule priority cannot resolve conflicting obligations | high | partially | WS04-E03, WS04-E04 |
| 11 | RT-11 | Provenance may be an expense buyers will not fund | high | yes | WS04-E05 |
| 12 | RT-12 | Portability lacks aligned distribution incentives | high | partially | WS04-E05 |
| 13 | RT-13 | The thesis can retreat until no result refutes it | high | yes | WS04-E01, WS04-E02, WS04-E05 |

### RT-01: No amortization before the workload changes

**HYPOTHESIS; critical; kills_thesis: yes, for the preregistered segment and horizon.** Rules must amortize more than their first implementation. Extraction, adapters, fixtures, recertification, support, exception review and residual failures are part of the product. **DOCUMENTED:** Helm excludes automatic CRD upgrade/deletion because of unintended data loss and unresolved lifecycle consensus; Kubernetes specifies coupled component upgrade constraints; Alembic requires manual review of generated migrations. These are concrete obligations, not measurements of MEDP cost. [RT-S07], [RT-S08], [RT-S16]

**Impact:** A reusable artifact can cost more than the work it avoids, especially for low-frequency migrations and heterogeneous applications. The relevant denominator is accepted outcomes within a buyer's horizon, not package downloads or rules authored. **Mitigation:** Select frequent stable tasks and use models to generate packages. **Why it may fail:** Review and ownership remain, and selecting a new domain after every failure is circular. **Reject:** Even optimistic credible savings are nonpositive at realistic volume and required safety. WS04-E01 tests this directly.

### RT-02: Incumbent artifacts already capture the useful knowledge

**INFERRED; critical; kills_thesis: yes, for the need for a new shared package layer.** **DOCUMENTED:** Camel Upgrade Recipes already distributes and tests modernization recipes; OPA already distributes policy bundles and records decisions with bundle revisions; Cargo fix consumes compiler diagnostics. These are executable expertise with native ownership boundaries, not just prose for an LLM. [RT-S15], [RT-S14], [RT-S13], [RT-S17]

**Impact:** A new contract can add translation, debugging and governance without changing outcomes. In .NET, the credible baseline is native compiler/analyzer/upgrade tooling, CI and approval gates, not a bare prompt; Camel is an existence proof in another ecosystem, not an assumed .NET migration engine. **Mitigation:** Offer unifying composition. **Why it may fail:** If thin native adapters already supply equivalent decisions, auditability and client access, standardization is overhead. **Reject:** Native or project-local composition meets the frozen requirements more cheaply and buyers identify no valuable portability difference. WS04-E01, WS04-E02 and WS04-E05.

### RT-03: Target semantics change what must be observed

**INFERRED; critical; kills_thesis: partially, for scan-once and clean late-stage separation.** **DOCUMENTED:** Lambda's SQS event source can process records more than once and requires idempotent handling; failures can retry a batch. Service Bus send-side duplicate detection depends on application-chosen message IDs, a configured time window, tier and partition/session settings. These are different mechanisms: send deduplication is not exactly-once business processing. [RT-S09], [RT-S10]

**Constructed counterexample:** An observation `uses_queue: true` does not establish whether retrying a debit is safe, whether message IDs reflect business identity, or whether deduplication outlives the retry horizon. A target can force new questions about the application. This is a stress case, not an observed failure of the narrower .NET hosting demonstrator. **Impact:** A frozen neutral assessment can be incomplete; a universal union of facts can be prohibitively expensive. **Mitigation:** Rich capability types and target-requested observation stages. **Why it may fail:** Technically valid, but it concedes one fixed scan and introduces provider-dependent acquisition work. **Reject:** A supported target needs missing facts or target rules inside the declared neutral core. WS04-E02 and WS04-E03; revise only the claim actually tested. [RT-S03]

### RT-04: Deterministic validation can repeat the same wrong assumption

**INFERRED; critical; kills_thesis: partially, for safety derived from types or tests alone.** **DOCUMENTED:** Alembic autogeneration cannot generally distinguish renames from add/drop changes, requires review, and its check command inherits detection limits. Cargo fix only analyzes compiled configurations; relevant features and targets may need separate runs. Passing these checks does not establish preservation of every business invariant. [RT-S16], [RT-S17]

**Impact:** A rule and its tests can agree because they share the error. Reuse then distributes correlated mistakes, not independent small risks. A single shared-rule defect can create a fleet-wide incident; no rate or loss estimate for that scenario is known here. **Mitigation:** Independent behavioral oracles, canaries, explicit assumptions and accountable approval. **Why it may fail:** Unspecified intent stays unspecified, realistic validation is costly, and a valid schema does not make destructive operations reversible. **Reject:** A seeded damaging change passes allegedly sufficient gates, or adequate safeguards erase the economic benefit. WS04-E03 and WS04-E01. Helm's deliberate lifecycle limits illustrate why refusing unsafe automation can be the correct mature product decision. [RT-S07]

### RT-05: An authoritative package cannot police its client

**INFERRED; critical; kills_thesis: partially, for authority intrinsic to a package.** **OBSERVED:** The prototype assigns approvals and execution to a harness. **DOCUMENTED:** OPA bundle verification has explicit configuration and loading boundaries; its evaluation/test CLI commands do not themselves verify bundle signatures. An independently published rule is not automatically enforced at every execution path. [RT-S03], [RT-S14]

**Impact:** An agent that can falsify observations, replace checks or execute outside the gate can change effective behavior while leaving the package intact. **Mitigation:** Independently administered execution control, constrained credentials, authenticated observations and durable override records. **Why it may fail:** It cannot be implemented by asking the same unconstrained agent to obey; it requires a real trusted boundary and operations. This is not evidence that the proposed harness is bypassable, since it was not tested. **Reject:** Any in-scope denied action is executed without separately authorized override and recorded provenance. WS04-E03. If the control plane supplies all differentiated value, acknowledge that product result rather than attributing it to the format.

### RT-10: Trustworthy origin is not trustworthy expertise

**INFERRED; critical; kills_thesis: partially, for provenance-as-sufficient-trust.** **DOCUMENTED:** SLSA separates source/build integrity and explicitly does not directly solve malicious-producer behavior. The initial xz disclosure documents compromised upstream releases and repository material, including differences between distributed tarballs and source views. This is a real supply-chain incident, not a MEDP attack or a claim that signatures cannot prevent tampering. [RT-S11], [RT-S12]

**Impact:** Pinning and authenticating a wrong rule can distribute the same error faithfully. Missing dependencies, compromised producers, revoked versions and offline consumers still require a response owner. **Mitigation:** Attestations, transitive pins, review, least privilege, revocation and rollback. **Why it may fail:** These address particular threats, not substantive correctness; even a familiar lockfile may exclude dependency classes, as Terraform's provider lock excludes remote module selection. [RT-S18] **Reject:** A correctly attributed but deliberately incorrect test package obtains automatic authority, or revocation misses the declared deadline. WS04-E03 and WS04-E04. Test with harmless fixtures, not actual malicious software.

### RT-06: Compatibility is a relation, not a version number

**INFERRED; high; kills_thesis: partially, for broad interchangeability.** **DOCUMENTED:** Kubernetes supports different skew relationships for API servers, kubelets, controllers and clients, and an HA cluster can further narrow permitted combinations. Terraform's lock does not freeze all module versions. [RT-S08], [RT-S18]

**Impact:** Schema, engine, framework, provider, policy and application-state compatibility cannot be reduced to a package version. As a purely illustrative upper-bound enumeration, 3 engines x 4 framework versions x 3 targets x 2 policy profiles x 3 schema versions x 2 state variants gives 432 combinations before pruning. This is neither a measured workload nor an assertion that exhaustive Cartesian testing is always necessary. **Mitigation:** Explicit profiles, pins, pairwise tests and refusal outside support. **Why it may fail:** Higher-order failures remain possible; refusing more cases reduces reuse and revenue. **Reject:** A predeclared supported profile diverges between clients, requires rule forks, or costs more to certify than it saves. WS04-E02 and WS04-E04. Define compatibility before observing agreement. [RT-S02]

### RT-07: Knowledge ownership becomes a permanent service obligation

**HYPOTHESIS; high; kills_thesis: partially, for low-maintenance community infrastructure.** **DOCUMENTED:** Helm's CRD lifecycle limitation persists despite an established package ecosystem; Kubernetes publishes a continuing support and upgrade policy; Camel recipes explicitly bound support, including a Camel Quarkus exclusion. None establishes the actual maintenance cost of this proposal. [RT-S07], [RT-S08], [RT-S15]

**Impact:** The most useful rules may need rare experts and repeated customer-specific exceptions. A registry can transfer costs to unpaid maintainers or conceal a consulting business behind artifacts. **Mitigation:** Fund ownership, narrow support and automate regression tests. **Why it may fail:** Funding requires recurring value, tests need maintained expectations, and successful authoring does not demonstrate a successful handoff. **Reject:** No independent maintainer meets the declared support budget, or two update cycles erase projected savings. WS04-E04 and WS04-E01.

### RT-08: The model-assisted alternative improves during payback

**HYPOTHESIS; high; kills_thesis: yes, for a durable cost advantage in the chosen segment.** **DOCUMENTED:** Stanford's 2025 AI Index reports over a 280-fold historical decline in inference cost at GPT-3.5-level performance between November 2022 and October 2024. That is neither migration cost nor a forecast for this product. [RT-S04]

**Contradiction preserved:** METR's early-2025 randomized study found a 19% slowdown on 246 issues from 16 experienced open-source developers. Its page now explicitly marks that result as outdated. The February 2026 follow-up reports time-change estimates of -18% for returning developers and -4% for new developers, with intervals crossing zero, and says selection and timing problems make the magnitude unreliable. We cannot use the old slowdown to dismiss current model-assisted work, or the new estimates to promise productivity. [RT-S05], [RT-S06]

**Impact:** A frozen weak model baseline can manufacture a package advantage that disappears before amortization. **Mitigation:** Compete on costly error reduction and use models to author/update packages. **Why it may fail:** Improvements also benefit native and local-script alternatives; cheap generation does not guarantee cheap review. Conversely, model progress may help the package as much as its competitor, so the net effect remains unknown. **Reject:** A qualifying current baseline beats full package cost, or a stated future sensitivity case would do so before payback. Label the latter conditional, not observed. WS04-E01 and WS04-E04.

### RT-09: Rule priority cannot resolve conflicting obligations

**INFERRED; high; kills_thesis: partially, for cheap automatic composition.** **OBSERVED:** The prototype separates organization prohibitions, target capabilities and user-selected hosting. **Constructed stress case:** A hard organization rule requires private connectivity while the requested target/profile supplies only a public endpoint; another owner forbids retaining the very evidence demanded by an audit policy. These are illustrative conflicts, not findings about a named provider or legal regime. [RT-S03]

**Impact:** A priority list can consistently violate one obligation. Deterministic resolution is not legitimate resolution, and repeated escalation can consume the saved labor. Helm's documented lack of lifecycle consensus is an example of governance affecting what an established tool is willing to automate. [RT-S07] **Mitigation:** Explicit contradictions, unsatisfiable outcomes, named waiver authorities and expiring overrides. **Why it may fail:** A solver does not confer authority to waive a prohibition. **Reject:** Contradictory hard constraints yield an executable plan, or required negotiations exceed the budget. WS04-E03 and WS04-E04.

### RT-11: Provenance may be an expense buyers will not fund

**HYPOTHESIS; high; kills_thesis: yes, for a provenance-led product in the tested buyer segment.** **DOCUMENTED:** OPA already logs decisions, inputs and bundle revisions, but supports redaction, event dropping and rate limits. Oversized nondeterministic-builtin caches may be omitted. These are explicit tradeoffs between useful records and operational/privacy limits, not defects in OPA. [RT-S13]

**Impact:** Rich lineage might help researchers without changing procurement, or fail to reconstruct decisions after permitted redaction. Origin also does not establish correctness. [RT-S11] **Mitigation:** Sell audit acceptance or faster incident resolution instead of metadata. **Why it may fail:** Actual requirements and retention permissions are customer-specific; generic compliance language is not buying evidence. **Reject:** Native records satisfy the actual task and buyers decline a cost-covering funded pilot for measured incremental benefits. WS04-E05. Current willingness to pay is `unknown`, not zero.

### RT-12: Portability lacks aligned distribution incentives

**HYPOTHESIS; high; kills_thesis: partially, for a broad neutral ecosystem or standalone vendor moat.** **DOCUMENTED:** Terraform's Business Source License includes an Additional Use Grant and change-license terms; availability of source does not imply unrestricted competitive reuse. Camel demonstrates community distribution within a bounded domain. Neither source establishes any vendor's MEDP intentions. [RT-S19], [RT-S15]

**Impact:** Incumbents may retain workflow distribution, support relationships and proprietary feedback while a neutral layer inherits integration costs. Buyers may never need to switch the clients whose interchangeability the project optimizes. That is a market hypothesis, not established behavior. **Mitigation:** Open governance, permissive building blocks and paid certification/support. **Why it may fail:** These do not create demand or maintainers, and certification is recurring work. **Reject:** No feasible licensing/distribution route or no payer for the shared layer at a cost-covering price. WS04-E05. If buyers fund only integrated delivery and accountability, the product may be a service, not portable knowledge infrastructure.

### RT-13: The thesis can retreat until no result refutes it

**INFERRED; high; kills_thesis: yes, as an empirically testable product claim if commitments are refused.** The repository's encoding-cost principle is conditional; its client-agreement criterion qualifies clients as compatible. These are reasonable design statements but insufficient research rejection criteria on their own. A two-client example can prove implementation consistency by construction while saying nothing about demand, independent integration or maintenance. [RT-S01], [RT-S02]

**Impact:** Every negative result can be classified as an unstable domain, an incompatible client or an inadequate harness. **Mitigation:** Freeze a buyer hypothesis, workload, support profile, horizon and stopping rule. **Why it may fail:** Changing the boundary after failure without recording rejection preserves the thesis at the expense of learning. **Reject:** The team refuses to name an acceptable disconfirming result or only redefines scope after one occurs. WS04-E01, WS04-E02 and WS04-E05. A failed bounded claim does not rule out every possible future niche; a new niche requires a new hypothesis, not a retroactive success.

## Economics and error model

**INFERRED, accounting framework, not fitted data:** For each approach `approach` over a fixed horizon `horizon`, compare:

$$
C_{approach}(horizon) = C_{setup} + C_{adapters} + C_{maintenance} + C_{governance\ and\ support} + \sum_{case}(C_{execution} + C_{review} + C_{rework}) + \mathbb{E}[L_{incidents}].
$$

Count expert/native tooling, model-assisted native tooling, shared packages and project-local automation symmetrically. Include failed attempts, approval delays and upstream work actually needed to operate each alternative; report who pays any donated/community labor. Do not charge existing native-tool development only to the baseline, or omit package-specific upkeep because it happens upstream. Compare completed, behaviorally accepted outcomes, not tokens or generated lines. If latency or auditability is independently valuable, price it with the buyer rather than assuming equal outcomes.

For a **simplified constant-cost sensitivity calculation** only, let incremental fixed cost be `fixed_cost`, per-case native cost `native_cost`, and per-case package cost `package_cost`. Then:

$$
N_{break\ even} = \frac{fixed\_cost}{native\_cost - package\_cost}.
$$

This has no positive finite payback when the denominator is nonpositive and incremental fixed cost is positive. In reality maintenance and losses vary with volume and time, so use the full horizon model. Historical inference-price improvement is a sensitivity input, not proof of lower review or incident cost.

Do not treat customer failures as independent Bernoulli trials when one shared rule can affect every adopter. Model common-cause incident scenarios, impact caps, rollout exposure and unacceptable outcomes separately from the mean. No small demonstration can estimate a rare catastrophic-loss rate. Avoid double counting the same incident as both rework and expected loss. A package that is cheaper only when consequential failures are priced at zero has not met the economic claim.

## Decisive experiments

These are **proposed**, not authorized cloud deployments, performed customer interviews or measured results. Full controls, measurements, rejection/inconclusive criteria and required artifacts are in the structured register. Suggested numeric gates below are **OPINION**, to be agreed before execution, not empirical findings.

| ID | Design and controls | Rejection and limits |
| --- | --- | --- |
| WS04-E01 | Four-arm full-cost comparison on a preregistered .NET 6 to .NET 10 workload. Start with 12 independent repositories and three hosting profiles as a feasibility pilot. Platform-team buyer hypothesis; six-month horizon; buyer-confirmed reuse volume. Same native tools, model and safety standards where applicable; isolated teams, blocked random assignment, blinded acceptance; count failures and updates. | Reject bounded economics if even optimistic credible savings are nonpositive. Suggested continuation gate: at least 20% full-cost savings and noninferior quality, fixed beforehand. Preregister sample size and repository-clustered uncertainty for confirmation; a small pilot cannot establish rare-loss rates. Unknown volume or overlapping uncertainty is inconclusive. |
| WS04-E02 | Second team independently integrates the frozen contract into a second client. Include hosting alternatives, unsupported versions, missing facts and denials. Add a separately labeled messaging stress case; record new target-specific observations. Same declared native engines are allowed. | One supported semantic disagreement, invented fact or neutral-core provider rule rejects the frozen profile. Two transports calling one shared facade do not demonstrate independent integration. Messaging failures do not automatically reject a hosting-only claim. |
| WS04-E03 | Independent reviewers seed wrong-but-well-formed rules, hidden invariants, contradictory hard policies, stale inputs, false success and out-of-gate execution attempts in disposable fixtures. Compare native gates at identical privileges; define the trusted boundary. | A damaging action passing supposedly sufficient checks or a denied action executed without authorized override rejects that guarantee. A decision-only simulation cannot prove execution isolation; successful fixtures do not establish general correctness. |
| WS04-E04 | Replay two pinned historical upstream changes and hand maintenance to a non-author. Include skew, changed constraints, exception disputes, dependency loss and harmless test-package revocation. Freeze support budget and deadline; run all baselines. | Reject claimed support after silent incompatible acceptance or missed revocation deadline; reject bounded economics when update costs erase E01 savings. Historical replay and future projections must be labeled separately. No cherry-picked easy releases. |
| WS04-E05 | Five independently budget-owning platform teams as a discovery sample. Blind comparison of native logs versus extra lineage on the same migration, plus an integration-switching task. Measure audit acceptance, incident reconstruction and redaction cost; offer a transparently priced funded pilot. | Stop a provenance-led product for this sampled segment if native records suffice and nobody funds incremental benefits at a cost-covering price. Praise is not purchase evidence; nonresponse and a five-team sample do not establish market-wide absence. If only managed delivery sells, record that service result. |

## Where architecture stops helping

**INFERRED:** Some mitigations are valid engineering but cannot preserve the strongest thesis unchanged:

- A trusted execution service can enforce authority, but the trust boundary and differentiated operations live in that service, not the package bytes. RT-05.
- Staged target-specific observations can improve correctness, but relinquish the promise of one sufficient fixed neutral scan. RT-03.
- Compatibility profiles and refusal can bound risk, but narrow reuse; certification still needs tests and accountable maintainers. RT-06 and RT-07.
- Independent validation and approval can reduce errors, but cannot derive unspecified intent or determine acceptable loss from types. RT-04.
- A conflict resolver can detect inconsistency, but cannot manufacture legitimate waiver authority. RT-09.
- Signatures and provenance can establish some origins, not producer correctness, commercial demand, retention rights or sustainable funding. RT-10, RT-11 and RT-12.
- "Encode only winners" and "exclude incompatible losers" cannot rescue an empirical claim after every failed test. RT-01 and RT-13.

Adding these obligations is not necessarily wrong. Treating their costs as external to the package business is wrong. If the result is a tightly coupled, full-service migration platform with packages as internal implementation details, stop calling that evidence for a valuable portable package layer.

## Contradictions and recommended thesis changes

**DOCUMENTED:** Native recipes, policy bundles and compiler fixes refute any suggestion that executable domain expertise is inherently impractical. They also weaken novelty. A native-engine baseline can benefit from precisely the separation this project advocates without adopting a new cross-domain contract. [RT-S14], [RT-S15], [RT-S17]

**INFERRED:** The original broader idea that value may live in integration, validation, trust and support could survive even if the portable-layer product fails. Do not claim that proving those ordinary product advantages also proves portability. Equally, shared engines with declared dependencies are a legitimate form of bounded portability; requiring engine-free semantics would attack a stronger thesis than necessary.

**OPINION, recommendations for the orchestrator; canonical synthesis unchanged:**

1. Replace the unrestricted portability claim with a named workload, supported profile, buyer hypothesis and payback horizon. Publish the rejection result before considering a new niche.
2. Treat MEDP as an optional composition hypothesis over native formats, not the presumed destination or a registry opportunity.
3. State authority as a deployment property of independently controlled execution and observations. Describe exactly which parts remain trustworthy if the client is compromised.
4. Replace "same observations imply the same valid modernization" with "declared inputs and dependencies imply the same bounded decision; missing facts stop execution." Count further observation work.
5. Fund an economic and buyer test before broadening the schema. Cancel the shared-layer product if native composition wins; retain useful recipes and evidence without relabeling that as a successful new abstraction.

## Source index

Source types, limits and precise locators are recorded in [structured/thesis-risks.json](../structured/thesis-risks.json). Repository proposals are evidence of claims, not external confirmation. Stanford is a report-author synthesis; METR supplies direct empirical reports; the other external sources are project documentation, a standard, a license and an initial incident disclosure.

| ID | Source and relevant location |
| --- | --- |
| RT-S01 | [Repository thesis][RT-S01]: conditional encoding principle and alternatives |
| RT-S02 | [Domain-package proposal][RT-S02]: compatible-client agreement criterion |
| RT-S03 | [Prototype brief][RT-S03]: harness ownership, scan-once demonstration |
| RT-S04 | [Stanford 2025 AI Index][RT-S04]: Top Takeaway 7, historical inference cost |
| RT-S05 | [METR July 2025 study][RT-S05]: methodology, results, out-of-date notice |
| RT-S06 | [METR February 2026 follow-up][RT-S06]: estimates, selection and timing caveats |
| RT-S07 | [Helm CRD guidance][RT-S07]: Method 1 caveats, lifecycle limits |
| RT-S08 | [Kubernetes version skew][RT-S08]: supported skew and upgrade order |
| RT-S09 | [Lambda with SQS][RT-S09]: polling, batch retry and at-least-once processing |
| RT-S10 | [Service Bus duplicate detection][RT-S10]: IDs, partitioning, tiers and window |
| RT-S11 | [SLSA 1.2 threat overview][RT-S11]: integrity scope, malicious producers and availability |
| RT-S12 | [Andres Freund xz disclosure][RT-S12]: 2024-03-29, upstream release/repository compromise |
| RT-S13 | [OPA decision logs][RT-S13]: revisions, masking, dropping and cache limits |
| RT-S14 | [OPA bundles][RT-S14]: distribution, ownership and verification boundaries |
| RT-S15 | [Camel Upgrade Recipes, pinned revision][RT-S15]: README usage, tests, support limits |
| RT-S16 | [Alembic autogenerate][RT-S16]: detection limitations and review |
| RT-S17 | [Cargo fix][RT-S17]: compiled configurations and edition migration |
| RT-S18 | [Terraform dependency lock][RT-S18]: provider versus module coverage |
| RT-S19 | [Terraform license, pinned revision][RT-S19]: Additional Use Grant and change terms |

[RT-S01]: ../RESEARCH_THESIS.md
[RT-S02]: ../docs/concepts/domain-packages.md
[RT-S03]: ../prototype/control-plane/README.md
[RT-S04]: https://hai.stanford.edu/ai-index/2025-ai-index-report
[RT-S05]: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
[RT-S06]: https://metr.org/blog/2026-02-24-uplift-update/
[RT-S07]: https://helm.sh/docs/chart_best_practices/custom_resource_definitions/
[RT-S08]: https://kubernetes.io/releases/version-skew-policy/
[RT-S09]: https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
[RT-S10]: https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection
[RT-S11]: https://slsa.dev/spec/v1.2/threats-overview
[RT-S12]: https://www.openwall.com/lists/oss-security/2024/03/29/4
[RT-S13]: https://www.openpolicyagent.org/docs/management-decision-logs
[RT-S14]: https://www.openpolicyagent.org/docs/management-bundles
[RT-S15]: https://github.com/apache/camel-upgrade-recipes/tree/35754b69cb0e65d94d985f708d7571913997e7ed
[RT-S16]: https://alembic.sqlalchemy.org/en/latest/autogenerate.html
[RT-S17]: https://doc.rust-lang.org/cargo/commands/cargo-fix.html
[RT-S18]: https://developer.hashicorp.com/terraform/language/files/dependency-lock
[RT-S19]: https://github.com/hashicorp/terraform/blob/f3658552eaa7c3646cd7bfd70dc21fd8ee5348b4/LICENSE