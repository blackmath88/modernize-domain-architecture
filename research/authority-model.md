# Authority before packages

## Verdict

**INFERRED:** Decision authority is the more useful organizing abstraction for consequential modernization. MEDP is **subordinate** as a distribution mechanism for knowledge and tools. It is the **wrong abstraction if a package's list of "legal transitions" is treated as permission to change an application**. An artifact cannot appoint its publisher as the adopting organization's decision-maker.

**OPINION:** Retain native recipes, analyzers, policy bundles and validators. Prototype a small, explicit decision record and an independently controlled execution gate before designing a new package format. This is a boundary correction, not evidence of a new product category or a reason to build a general governance platform.

The [current package concept](../docs/concepts/domain-packages.md) expects clients with identical observations and package versions to derive the same legal transitions, constraints, blockers and validation criteria. That condition omits the adopting authority configuration, policy revisions, delegation, environment, evidence freshness and accepted risk. Identical code and packages can legitimately produce different **permitted** actions in two organizations. Conversely, identical permissions cannot make an incompatible runtime compatible.

## Evidence and method

This is primary-source research and four **hypothetical tabletop traces**, accessed 2026-09-23. No Modernize run, authority service, OPA evaluation, transformation, cloud deployment or end-user test was executed. The JSON is a proposed design model, not an implemented authorization engine or final WS-09 schema. Sources and locators are mirrored in [structured/authority-model.json](../structured/authority-model.json).

- **OBSERVED in repository files:** [ARCHITECTURE.md](../ARCHITECTURE.md) separates knowledge layers but combines their output as legal moves; [structured/provenance.json](../structured/provenance.json) records derivation without grants, approval bindings, revocation or exception semantics. [The prototype brief](../prototype/control-plane/README.md) includes approval but does not yet specify those semantics. This is a finding about the base-branch design, not installed Modernize.
- **DOCUMENTED in sibling research, not independently replayed here:** [WS-02's pinned handoff](https://github.com/blackmath88/modernize-domain-architecture/blob/dcf11ccda66817cc01b728d17ebbb31303e511b4/agent-output/WS-02-handoff.md) reports quota-blocked plans despite exit-zero success messages. That is a useful example of why a wrapper's success statement must not substitute for a required artifact or validation result; it does not prove an authority bypass.
- [WS-03 research](https://github.com/blackmath88/modernize-domain-architecture/blob/66feef2a91cf87475e349ca5752e38e3a292ba9a/research/executable-domain-precedents.md) and the [WS-04 handoff](https://github.com/blackmath88/modernize-domain-architecture/blob/62e6f3437c7a994069f30bea7fdd588892b61299/agent-output/WS-04-handoff.md) were inspected as unmerged research. Their conclusions are not independent confirmation. Canonical synthesis and other workstream outputs are unchanged.

### Primary precedents: what already exists

All descriptions in this table are **DOCUMENTED**; the application to modernization is **INFERRED**.

| ID / source and locator | Established distinction | Consequence and limit |
| --- | --- | --- |
| S01 [OPA philosophy](https://www.openpolicyagent.org/docs/philosophy), Policy Decoupling / What Is OPA? | Policies can be managed separately from services; queries return decisions over supplied data. Policy is broader than authorization. | Reuse a policy decision point; the caller/enforcement point still has to obey. Correct evaluation of false inputs remains possible. |
| S02 [NIST ABAC](https://csrc.nist.gov/projects/attribute-based-access-control), definition | Decisions depend on subject, object, action and environment attributes, not just roles. | Bind permission to the application, operation, target and current context. ABAC does not establish whether the analyzer's technical claim is true. |
| S03 [Kubernetes admission](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/), introduction / Admission control phases | Admission follows authentication and authorization; mutation precedes validation; rejection prevents persistence of that request. Side effects can require reconciliation. | Permission to invoke a transform is not acceptance of its result. Do not assume our filesystem/cloud edits gain API-server atomicity. |
| S04 [AWS IAM evaluation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html), permission boundaries / explicit deny | Policy types have defined union/intersection and deny rules. | Combining authority requires specified semantics, not a generic priority number or "organization always wins." AWS semantics are not a universal cross-domain law. |
| S05 [GitHub deployment environments](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments), Required reviewers / bypass / Environment secrets | Required reviewers gate jobs and secret access; self-review prevention and administrator bypass are configurable. Only one listed reviewer is needed. | Approval is an enforced integration, not a prompt. Do not mistake a reviewer list for quorum or claim default settings prevent all bypasses. |
| S06 [W3C PROV-O](https://www.w3.org/TR/prov-o/#description-starting-point-terms), Starting Point Terms / actedOnBehalfOf | Entities, activities, agents and delegation describe derivation and responsibility. | Reuse provenance relations. Describing "acted on behalf of" does not authenticate or authorize that delegation. |
| S07 [SLSA v1.1 threats](https://slsa.dev/spec/v1.1/threats-overview), Summary / Real-world examples | Source/build integrity differs from threats from producers and usage; not all are addressed. | A correctly signed, faithfully built recipe can still be wrong or inappropriate. Provenance is not entitlement or correctness. |
| S08 [NASA IV&V overview](https://www.nasa.gov/ivv-overview/), Verification and Validation / Independence | Requirements conformance differs from meeting mission needs; independence has technical, managerial and financial dimensions. | A second deterministic test written from the same mistaken assumptions is not independent assurance. Use this as an analogy, not a claim of NASA compliance. |
| S09 [OMG DMN 1.5](https://www.omg.org/spec/DMN/1.5/About-DMN), description; [DMN overview](https://www.omg.org/dmn/) | Executable decision models and process models are established complementary concepts. | "Decision-first" is not new. DMN alone does not give the model author local permission to approve production changes. |
| S10 [OPA decision logs](https://www.openpolicyagent.org/docs/management-decision-logs), introduction / Mask / Drop Decision Logs | Queries can carry decision IDs, inputs, results and bundle revisions; logs can be masked, dropped and rate-limited. | Existing audit data is useful, but not necessarily complete or immutable. Store protected evidence references and make redaction/gaps explicit. |
| S11 [OPA bundles](https://www.openpolicyagent.org/docs/management-bundles), introduction | Bundles distribute policies/data separately and normally prevent ordinary API writes to bundle-owned content. | Packages can help implement an authority boundary. Whoever controls evaluator configuration and execution access still matters. |
| S12 [.NET 10 breaking changes](https://learn.microsoft.com/en-us/dotnet/core/compatibility/10), introduction / change categories | Binary, source and behavioral compatibility differ; the published list is explicitly incomplete. [Pinned source](https://github.com/dotnet/docs/blob/bdb2efc634ce2b2ceb53834e531cfbc5dde53571/docs/core/compatibility/10.md). | A successful build is evidence for a narrow claim, not behavioral equivalence; a 6-to-10 upgrade also needs intervening releases checked. |
| S13 [OpenRewrite recipe testing](https://docs.openrewrite.org/authoring-recipes/recipe-testing), introduction | Recipes should test expected changes and absence of unnecessary changes. | Keep recipe-owned tests, but add adopter-owned acceptance criteria rather than allowing a recipe to certify itself. |

Live pages may change; access dates and section locators, not invented content digests, are recorded. No external page snapshots were added to raw evidence.

## Authority is scoped, plural and revocable

The following is **proposed policy**, not a description of current product behavior.

| Dimension | What it can establish | What it cannot establish |
| --- | --- | --- |
| Epistemic | Admissibility of a claim for a stated method, revision, environment and scope. A compiler establishes a compile result; an analyzer provides findings with coverage/limitations; runtime observations describe an observed state. | Infallible truth, organizational permission, or facts beyond the measured scope. A maintainer's documented compatibility claim can be contradicted by a reproducer. |
| Policy | Which constraints apply, which outcomes are permitted, who can choose/authorize, what evidence is required and who may issue exceptions. | Technical feasibility, actual runtime state, or a passing test result. |
| Execution permission | Which authenticated principal may perform which bounded operation on which resources now, with specified side effects and credentials. | Business approval, technical correctness or the right to rewrite policy. Possessing credentials is necessary for some actions but insufficient as organizational authority. |
| Verification | Which verifier may attest which checks against which artifact and criteria; which evidence the adopter accepts for each claim. | Universal correctness or unilateral release approval. The acceptance owner decides whether evidence satisfies the pre-agreed criteria; accepting residual risk does not turn a failure into a pass. |

**Decision rights** (`choose`, `authorize_change`, `accept_result`, `issue_exception`, `amend_policy`, `delegate`) are separately scoped rights, primarily assigned by policy. They are not extra confidence scores. One person may hold several rights for a low-risk branch edit, but that must be explicit. Independence is justified by risk, not by drawing more boxes.

Candidate roles: compiler/analyzer/runtime, community maintainer, provider specialist, organization policy owner, application decision owner, authorized approver, executor/harness, verifier and LLM adviser. **A role name is not an authenticated identity or a grant.**

### Bootstrap and non-bypass boundary

The adopting organization must configure accountable owners, accepted evidence producers, authority scopes, conflict rules and approver grants **outside agent-writable proposal content**. It must also control the execution gateway and protected verification configuration. This trusted configuration is itself versioned and change-controlled; the agent cannot validate its own newly invented trust root.

The executor accepts only a bound, current authorization and enforces resource limits. A planner/LLM cannot have an alternate production credential path that bypasses it. A sandboxed branch-edit grant may be broad without carrying deployment permission. A package can submit rules for adoption, not install itself as trusted policy owner. A signed grant still needs issuer entitlement, audience, scope, expiry and revocation checks.

**Limit:** A local demo with one process, mutable files and a single administrator can demonstrate protocol errors, not prove resistance to that administrator. If we cannot control the actual write/deploy path, the result is an advisory model and must be labeled as such. Ultimate owners can change policy; the promise is no *quiet agent redefinition*, not immutable governance.

## Decision chain and transition semantics

The JSON uses T00-T07, including observation acquisition before the required chain and result acceptance after it. Every transition records proposer, entitled decider, enforcement point, evidence and failure behavior.

| ID / transition | Who may advise or supply evidence | Who has the relevant right, and why | Required guard and result |
| --- | --- | --- | --- |
| T00 source/context -> observed fact | Compiler, analyzer, runtime, user context; LLM may suggest a probe | Adopter-registered evidence producer under an evidence-admission policy; no tool has universal fact authority | Record revision, tool/version, method, scope, target assumptions and raw evidence reference. Missing or conflicting material facts stay `unknown`/`disputed`; inferred claims are not promoted to observations. |
| T01 observed fact -> applicable knowledge | Community/vendor rules, package matcher, LLM | Knowledge publisher asserts its own rule semantics; adopter's applicability evaluator accepts a rule for the bound evidence and version range | Record applicability predicates and unresolved prerequisites. A vendor is knowledgeable about its service but cannot impose adoption. Unsupported is not the same as technically impossible. |
| T02 applicable knowledge -> valid alternatives | Recipe/provider catalogs propose candidates; policy evaluators filter | Evidence-backed feasibility evaluation plus locally adopted policy, owned by named policy authorities | Keep `feasibility`, `policy` and `support` separate. Eligible options need feasible evidence and current policy permission. Show rejected and unknown options and coverage limits; never advertise catalog exhaustiveness. |
| T03 valid alternatives -> choice | LLM ranks/explains; harness can choose only under an explicit bounded delegation | Application decision owner, or a delegate using a recorded selection rule inside permitted options | A user preference is binding only within the user's decision scope. No implicit cloud choice. No valid options means blocked, not an invitation for the LLM to invent an exception. |
| T04 choice -> authorization | Planner prepares change proposal | Approver whose grant covers that application, operation, environment and risk; policy defines separation of duties | Bind source/observations, rule/policy revisions, target, plan/allowed-change scope, criteria and expiry. Selecting Azure is not permission to provision it; approving source edits is not merge or production permission. |
| T05 authorization -> transformation | Recipe or LLM proposes/executes bounded edits through executor | Executor with valid delegated action rights and runtime capabilities, constrained by the enforcement point | Recheck bindings, freshness, revocation and scope immediately before effects. Record actual diff/side effects. Outside-scope retry needs reauthorization; partial failure is not rolled back by declaration. |
| T06 transformation -> verification | Recipe tests, compiler, policy checks, integration probes, runtime | Accepted verifier for each pre-approved claim/criterion; independent ownership where required | Bind exact output and environment to actual check results. Missing/skipped/error is not pass. Executor cannot weaken criteria or substitute its summary for evidence. |
| T07 verification -> accepted result | Verifier reports; LLM summarizes limitations | Acceptance owner under adopter policy, distinct from verifier when required | Accept only covered, satisfied criteria, or a permitted explicit risk exception. Retain failures and unknowns. Repository acceptance is not deployment acceptance. |

**INFERRED:** There is no sound global precedence chain such as compiler > organization > user > LLM. A compiler wins a dispute about what it compiled, not where deployment is allowed. An approver can accept a known incompatibility's consequences, not decree that the incompatibility is absent.

## Conflict, delegation, override and appeal

The machine-readable conflict rules are C01-C07.

1. **C01 evidence conflict:** Preserve competing claims and their methods/revisions. Reproduce under the same context or obtain an additional probe. Only an entitled evidence-admission decision may supersede a claim, with a reason and retained lineage. Do not resolve by confidence averaging or publisher prestige.
2. **C02 user preference versus policy:** Apply the relevant adopted constraint. Reject the option and show its policy owner and exception route. The initiator's "ignore this" prompt does not create a grant.
3. **C03 policy versus policy:** For mandatory, jointly applicable constraints, intersect requirements. An explicit deny defeats an allow within that scope. If there is no compliant option, report the conflicting rule set. Do not pretend it is a computed minimal unsatisfiable core. Equal-rank owners cannot silently override one another; only a preconfigured conflict authority or all affected entitled owners may resolve it. Precedence and exceptionability must be established beforehand.
4. **C04 permission versus feasibility:** Keep permission, support and feasibility independent. An approver cannot manufacture a missing provider capability; catalog absence does not prove impossibility. Request evidence or a new implementation rather than execute an unsupported guess as a legal move.
5. **C05 stale or revoked authority:** Changed input, target, policy, plan, criteria, expired grant or revocation invalidates authorization. Re-evaluate and reauthorize; a matching filename or repeated prompt is not enough. Runtime enforcement still checks its own current permissions.
6. **C06 transform versus verifier:** A failed check, missing evidence or criteria edited by the transformer prevents clean acceptance. A risk owner can grant only an explicitly permitted exception to a criterion; the original result remains failed/unknown and acceptance becomes `accepted_with_exception`, never `passed`.
7. **C07 authority overreach:** Reject self-grants, grants from unentitled issuers, broader redelegation, wrong audiences or undeclared execution paths. Report the exact failing guard. An LLM cannot bootstrap choice or approval rights by writing a role field.

**Delegation:** Store issuer, subject, rights, application/resource/action/environment scope, audience, parent grant, issuance/expiry, revocation reference, constraints and redelegation permission. Child rights, scope and expiry must be no broader than the parent's; a revoked ancestor invalidates the chain. Defaults: no redelegation, no cross-application rights, no production rights, no policy edits. The issuer retains accountability for the delegation; the delegate is accountable for its actions. Identity verification and protected grant storage are implementation obligations, not properties of JSON.

**Override has three different meanings:** correction of bad evidence; a new choice among already eligible alternatives; or a policy/acceptance exception. Only the last is an exception. Policy amendment is a fourth, separately authorized action and triggers re-evaluation of affected decisions. None edits history.

**Exception:** Name the exact rule/criterion, entitled issuer, bound decision, rationale, allowed scope, compensating controls, expiry and reassessment obligation. Non-exceptionable constraints remain blocked. Expiry before action cancels permission; expiry after a deployment creates a reconciliation/incident obligation, not an assertion that already deployed state vanished.

**Appeal:** Any affected user can request review without gaining override rights. Route evidence disputes to the evidence owner and policy disputes to the policy owner/designated conflict authority. Record `open`, `upheld`, `amended` or `rejected`; pending appeal grants no permission. Approved amendments produce a new decision revision with `supersedes` lineage. Notify the original requester and affected owners. Only affected blocked actions need pause; unrelated authorized branch work need not stop.

## Four modernization decisions: adversarial tabletop traces

All facts, choices and outcomes below are **HYPOTHETICAL** test premises, not captured application state. Full T00-T07 traces and negative probes appear in the JSON. Actual artifact digests, authorization records and verification results are `null`. `expected_outcome` denotes a design assertion, never an executed result.

### D01 .NET 6 -> .NET 10 while preserving hosting

1. **T00:** A pinned source scan would establish `net6.0`; inventory must separately establish dependencies and actual runtime/OS. Reading a project file does not establish production runtime.
2. **T01:** Microsoft/community compatibility knowledge supplies conditional constraints across .NET 7-10; a recipe author supplies a supported transform. The adopter accepts applicability only with necessary evidence.
3. **T02:** In the fixture, the upgrade is conditionally feasible; deployment remains unknown until host evidence is supplied. Keep source-edit and deploy options separate.
4. **T03:** The application owner chooses a local upgrade branch while retaining current hosting. LLM may propose dependency substitutions, not silently retarget hosting.
5. **T04:** A scoped approver can authorize branch edits and tests, not merge/deploy, with fixed criteria.
6. **T05:** Executor edits only authorized files. A required out-of-scope dependency/configuration change returns for a revised plan.
7. **T06:** Build and regression tests attest distinct claims against the output. A build pass plus changed serialization behavior is not full success. S12 documents why compilation is insufficient.
8. **T07:** Clean acceptance is blocked if a required behavioral check fails. An entitled risk exception may accept a specifically waivable criterion, but cannot relabel the check or authorize deployment.

**LLM boundary:** Advises on a migration or proposes an additional test; cannot turn a behavior failure into a pass. **Discriminator:** Approve one diff/plan, change its target or acceptance criteria, and require reauthorization.

### D02 Preserve hosting versus Azure Container Apps versus AWS ECS

1. **T00:** Capture current host, region, state, dependencies and operational requirements. Treat missing target information as unknown, not a neutral fact.
2. **T01:** Provider specialists supply capability claims for their own target. They do not select it. Provider-specific probes may be needed.
3. **T02:** Suppose organization policy permits all three targets, but user-owned scope says preserve hosting. Display cloud options as outside current intent, not technically impossible or universally forbidden.
4. **T03:** A ranking model recommending Azure has no authority to amend that target constraint. The application owner can explicitly revise intent within organizational limits.
5. **T04:** Revised target, cost and operational effects require a newly bound plan and appropriately scoped approval.
6. **T05:** Branch-edit permission gives no cloud credentials. Runtime permissions could still reject an otherwise approved deployment; record that failure.
7. **T06:** Shared .NET tests cannot attest private networking, region or managed identity on a target not exercised. Target checks remain `not_run` in the local prototype.
8. **T07:** Accepting source changes does not imply any of the three deployments has been validated.

**LLM boundary:** May compare costs and surface missing facts; cannot convert a provider's recommendation into the user's choice. **Discriminator:** Same facts/packages, different organization or intent scope must be allowed to yield different eligible options.

### D03 Public database proposed for a deadline

1. **T00:** In the fixture, a generated plan contains public database exposure; source inspection alone does not prove live exposure.
2. **T01:** Provider mapping identifies network configuration; the organization's security owner supplies the adopted no-public-database constraint from the prototype brief.
3. **T02:** A technically supported public endpoint is forbidden by that policy. A private design can remain unknown pending connectivity evidence; do not make it eligible by optimism.
4. **T03:** A deadline-driven user or LLM request cannot choose the forbidden option into validity.
5. **T04:** In this fixture the security owner has explicitly declared the rule non-exceptionable for this deployment. An ordinary application approver cannot waive it.
6. **T05:** The executor refuses the public configuration even if a provider credential would allow its creation.
7. **T06:** If a revised private design is later approved, verify plan configuration and, separately, deployed exposure/connectivity where execution is in scope.
8. **T07:** No deployment acceptance before that evidence; an appeal stays blocked unless the responsible governance owner lawfully amends the rule and the decision is re-evaluated.

**LLM boundary:** Can propose private alternatives and draft an appeal; cannot approve an emergency exception that does not exist. **Discriminator:** A valid signature by the recipe publisher and a deployment credential must not bypass local policy.

### D04 Telemetry mandate versus personal-data export prohibition

This is the **hardest conflict**, because both requirements can be valid and both owners legitimate.

1. **T00:** Suppose the telemetry plan exports payload attributes, with data classification still disputed. Do not assert from a field name that it contains no personal data.
2. **T01:** Provider documentation supplies routing/filtering capabilities; observability and privacy owners supply independently adopted requirements.
3. **T02:** In the fixture observability requires specified diagnostic fields while privacy forbids exporting those fields to the configured external sink. The current plan has no demonstrated compliant option.
4. **T03:** The application owner cannot rank away a mandatory requirement; the LLM may propose redaction, local retention or reduced telemetry.
5. **T04:** Neither policy owner may waive the other's rule. With no configured arbiter, require both entitled owners to agree on amendments within their mandates; a non-waivable external obligation is outside their exception rights.
6. **T05:** No conflicting export action occurs while the appeal is open. A narrower local branch change may proceed only under its own independent authorization.
7. **T06:** A revised redacted/local design needs separate evidence of diagnostic adequacy and absence of prohibited exports, including collector configuration and runtime tests. A config-lint pass proves neither alone.
8. **T07:** Acceptance is blocked until both criteria are satisfied or permitted, explicitly recorded exceptions cover the outstanding obligations.

**LLM boundary:** Proposes compromises but does not invent precedence, declare data non-sensitive, or forge joint consent. **Discriminator:** Changing a field name or dropping a test cannot resolve a substantive policy conflict.

## Authority-first versus package-first

These are **INFERRED** tradeoffs, not measured product performance.

| Question | Package-first risk | Authority-first response and cost |
| --- | --- | --- |
| What are legal moves? | Catalog combines possibility, support and permission. | Separate those states; evaluate permitted actions in adopter context. More inputs and unknown states. |
| Who owns rules? | Namespace/publisher can be mistaken for authority. | Publisher owns an assertion; adopter grants applicability and policy jurisdiction. Requires maintained trust configuration. |
| How are conflicts resolved? | Load order, latest package or prompt silently wins. | Explicit scope, combination semantics, designated owners and appeal. Can block work and require costly coordination. |
| Why did the plan change? | Version diff explains content, not entitlement. | Bound decision revisions connect evidence, choice, authorization and result. Retention and privacy costs increase. |
| What proves success? | Transform and validator agree with each other. | Pre-approved criteria plus scoped evidence and independent ownership where warranted. Residual uncertainty remains. |
| What is portable? | Package bytes or deterministic outputs. | Claims, contracts and decision records can travel; institutional rights do not automatically travel. |
| Is a new platform necessary? | New standard and registry before value proof. | Existing policy engine, protected CI gate and recipes may suffice. A custom authority model may itself be redundant. |

**Counterargument preserved:** Authority-first cannot supply missing framework knowledge or a correct transform. For low-risk local refactors, existing branch protection and explicit user review may be enough; a full delegation/exception service can cost more than it saves. A "human approved" record can become approval theater. A shared wrong specification can fool independent executors. Provenance standards and policy engines already exist, so this framing does not establish durable product value.

**Rejection criterion:** If native recipes plus existing policy/CI controls can express and enforce the four cases and explain their failures without a new portable envelope, do not create an authority package standard. If the intended product cannot control enforcement, abandon the "agent cannot quietly redefine" guarantee and describe it as advisory.

## Concrete recommendations for WS-09, WS-10 and WS-11

**Proposed, not implemented:**

1. **WS-09:** Replace a single `legal_moves` concept with separate supported candidates, feasibility findings, policy evaluation and choice rights. A package declares publisher, version, applicability, effects and proposed criteria; it never grants itself execution or exception authority. Keep the authority profile separately adopted and bound by revision. Reuse native package formats unless an adapter gap is demonstrated.
2. **WS-10:** For the existing .NET/three-target demo, introduce one protected authority profile and one bound decision record; no registry, new policy language or production credential broker yet. Keep raw evidence ingestion separate from package suggestions. A local fixture must label simulated authorization as simulated.
3. **WS-10:** Gate the executor on exact current source/evidence, target, plan/scope, criteria and policy/authority versions, valid approval/delegation and current capability checks. Replanning or changing criteria invalidates approval. Record partial effects, reject implicit retries outside scope, and distinguish branch-edit, merge and deployment grants.
4. **WS-10:** Freeze adopter-owned criteria before execution; record results by check and output digest. Do not accept the executor's success text. Keep `not_run`, `error`, `fail`, `pass` and acceptance-with-exception distinct.
5. **WS-11:** Show "why applicable?", "technically possible?", "permitted by whom?", "who chose?", "who authorized?", "what actually ran?" and "what remains unverified?". Present evidence, accountable owner, scope, policy source, conflict, appeal/exception eligibility and consequences. Never render a functioning Override button when no such right exists.
6. **WS-11:** Pending appeal, revoked approval and unknown evidence are first-class states. Explain who may resolve each. Show corrected/superseded decisions without deleting prior failures, and disclose redacted/missing evidence instead of a generic confidence score.

The JSON's `record_contract`, four `decisions`, conflict rules and conformance cases provide concrete input for these workstreams. They are not a normative replacement for their implementation schemas.

## Verification plan and limits

Repository validation, JSON parsing, cross-reference/chain coverage, four example traces, handoff headings, status parity, local links and whitespace checks are run for this deliverable. A supplemental correctly parameterized secret-pattern scan compensates for the existing repository script's `rg` argument error; that unrelated script is not changed.

The JSON contains proposed negative conformance cases with `actual_result: null`. WS-10 should run them against the *actual* execution boundary, including a direct-write attempt, revoked ancestor, changed criteria, partial failure and missing verifier evidence. Passing JSON integrity checks does not prove those controls exist.

Unresolved: who will own protected authority configuration in a real adopter, whether multi-owner appeals are operationally tolerable, which validation independence is affordable, how grants are revoked atomically with distributed effects, and which acceptance criteria can legitimately be waived. There is no measured answer here.
