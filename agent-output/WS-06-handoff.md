# WS-06 Handoff

## STATUS

`review` on `agent/ws-06-authority-model`, based on publication main at `65e4dd09b7b6b337d6a3eb7190067d486f050948`. Research commit: `798d922`, pushed to `publish/agent/ws-06-authority-model`. PR: [blackmath88/modernize-domain-architecture#6](https://github.com/blackmath88/modernize-domain-architecture/pull/6), open for orchestrator review. No publication blocker. Only WS-06's status and outputs changed.

## WHAT I DID

Traced eight boundaries from evidence acquisition through accepted result, distinguishing epistemic authority, policy authority, execution permission and verification authority. Modeled scoped decision rights, delegation, conflict, exceptions, appeal, revocation, accountability and provenance. Compared authority-first and package-first designs against thirteen primary technical sources and four hypothetical modernization decisions.

## FILES CHANGED

- [research/authority-model.md](../research/authority-model.md): argument, precedents, authority matrix, conflict semantics, four tabletop traces and prototype recommendations.
- [structured/authority-model.json](../structured/authority-model.json): matching model, field contract, four decision fixtures, fifteen proposed conformance cases and nineteen source records.
- [WORKSTREAMS.md](../WORKSTREAMS.md) and [structured/workstreams.json](../structured/workstreams.json): WS-06 status only.
- [agent-output/WS-06-handoff.md](WS-06-handoff.md): this handoff.

## KEY FINDINGS

- **INFERRED:** Authority supersedes packages as the organizing abstraction; MEDP remains subordinate as distribution. Treating package-supported transitions as locally authorized actions is the wrong framing.
- **INFERRED:** Provenance, publisher reputation, deterministic execution, user intent and credentials confer different things; none alone establishes entitlement to change production.
- **INFERRED:** No global actor hierarchy works. Policy cannot make an incompatibility disappear, and compiler success cannot authorize deployment or prove behavioral equivalence.
- **HYPOTHESIS / hardest conflict:** Telemetry requirements and privacy restrictions can both be legitimate while the proposed export satisfies neither jointly. Without a designated arbiter, obtain resolution from all affected entitled owners or block the export. Neither the LLM nor one owner can invent precedence or waive another's mandate.
- **OPINION:** Reuse OPA/ABAC, existing deployment gates, native recipes and provenance relations. Authority-first does not establish product novelty; reject a new envelope if native composition already handles these cases.

## EVIDENCE

Primary sources include OPA policy/bundle/log contracts, NIST ABAC, Kubernetes admission, AWS IAM evaluation, GitHub environment gates, W3C PROV-O, SLSA v1.1, NASA IV&V, OMG DMN 1.5, .NET compatibility documentation and OpenRewrite testing. Locators/access dates are in the structured catalog. Sibling WS-02/03/04 research is separately labeled and commit-pinned, not treated as independently replayed evidence.

Validation passed: JSON parsing; eight connected transitions with explicit actors/rights/guards; four complete T00-T07 traces; seven conflict rules; resolved actor/source/decision references; fifteen conformance cases with null actual results; required record fields; enum values; local research links; editor diagnostics; repository checks and whitespace checks. The existing repository validator prints an `rg` argument error in its secret check but exits successfully. A separate correctly parameterized repository-wide scan returned no matches; the unrelated validator was not changed.

No authority engine, policy runtime, modernization transform, cloud deployment or user study was executed. All four decisions are hypothetical; actual grants, artifact digests, execution evidence and verifier results remain absent/null. The proposed conformance tests were not run against an executor.

## WHAT CHANGED MY MIND

OPA and DMN make a new "decision-first" category hard to defend. Kubernetes and GitHub gates make the enforced action boundary more important than a package API. NASA's dimensions of independence show why merely putting deterministic validation after transformation cannot establish independent assurance.

## OPEN QUESTIONS

Who controls trusted authority configuration and the real execution path in an adopter? Which criteria may be waived, by whom, and at what cost? Can joint-owner appeals remain usable? How will distributed revocation and partially completed effects be reconciled? Does this add value beyond existing protected CI and policy services?

## RECOMMENDED NEXT STEP

WS-09: separate supported, feasible, permitted, selected and authorized states; do not let a package self-grant authority. WS-10: bind approval to source/evidence, target, plan/effect scope, policies/authority profile and criteria; enforce it at the actual executor; preserve per-check results and partial effects. Run the fifteen negative/positive conformance cases before expanding packaging. WS-11: expose owner, scope, evidence, denied alternatives, pending appeals, revoked approvals and exception consequences; never imply override permission where none exists.

## RISKS / WEAKNESSES

This is a proposed model, not demonstrated enforcement. The JSON is not a final implementation schema. A same-process demo cannot prove protection against its administrator. Live external documentation may drift; most pages were not archived. Authority cannot compensate for missing domain knowledge, a shared wrong specification or an untrustworthy runtime. Governance and independent checks may cost more than they save for low-risk changes. No economic or user-value claim was measured.
