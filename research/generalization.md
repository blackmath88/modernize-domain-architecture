# Generalization beyond modernization

WS-12, Generalization. Primary sources were re-read on 2026-09-23. This synthesis consumes merged outputs from [WS-03](./executable-domain-precedents.md), [WS-04](./thesis-red-team.md), and [WS-06](./authority-model.md), plus their linked source catalogs. No new runtime, buyer, or deployment experiment was executed.

## Verdict

**INFERRED:** The architecture transfers best where typed observations, separately versioned rules, independent policy evaluation, and deterministic validators already exist. The strongest successful transfer is **cybersecurity rule-and-policy enforcement**: Semgrep rules, OPA bundles, test fixtures, and enforced decision points already separate community knowledge, organization policy, agent assistance, and runtime authority.

**INFERRED:** The architecture requires adaptation in **infrastructure operations**. Kubernetes operators and Terraform providers do not behave like passive packages that answer once and disappear; they are active control loops and API-specific executors with ongoing state reconciliation, side effects, credentials, and drift.

**INFERRED:** The architecture fails if it assumes one neutral scan is enough to derive safe transitions across targets. The sharpest failure appears in **data engineering / schema evolution**, where Alembic autogenerate produces candidate migrations that require manual review and cannot prove data preservation, rename intent, or downstream compatibility by themselves.

**OPINION:** Generalization **narrows** the thesis rather than proving universality. Durable value is more likely to live in typed artifacts, conformance suites, approval bindings, enforcement, provenance, and exception handling than in a universal domain-package format.

## Why these three domains

These domains were selected for contrast, not convenience:

| Domain | Why it contrasts with modernization |
| --- | --- |
| Cybersecurity rule-and-policy enforcement | Portable rule artifacts and explicit policy engines already exist, so this is the best case for "domain knowledge as infrastructure". |
| Infrastructure operations | Knowledge is executable, but it lives inside active reconcilers, provider plugins, admission chains, and credentials, not just passive packages. |
| Data engineering / schema evolution | Migration graphs and validators exist, but semantic correctness and data safety are expensive to validate and often require human judgment. |

The contrast matters because WS-04 argued that existing native artifacts may already capture the useful knowledge while WS-06 argued that authority is the primary organizing abstraction. A useful generalization test should therefore include one favorable case, one adaptation case, and one failure mode rather than three near-modernization examples. See [WS-04](./thesis-red-team.md) and [WS-06](./authority-model.md).

## Domain 1: Cybersecurity rule-and-policy enforcement

**INFERRED overall result:** Transfers well, with one important adaptation: "no findings" and "policy allowed" must remain distinguishable from skipped checks, dropped logs, and untested coverage.

| Layer | Mapping | Evidence |
| --- | --- | --- |
| Observation | Source code, manifests, dependency inputs, and match locations can be turned into typed scan inputs and finding records. | **DOCUMENTED:** [Semgrep rule tests](https://docs.semgrep.dev/writing-rules/testing-rules) describe `ruleid` / `ok` annotations and expected `.fixed` outputs; [OPA decision logs](https://www.openpolicyagent.org/docs/management-decision-logs) describe logged inputs, results, and revisions. |
| Domain knowledge | Community or vendor-authored rules capture repeatable security knowledge. | **DOCUMENTED:** [Semgrep rule syntax](https://docs.semgrep.dev/writing-rules/rule-syntax) exposes rule IDs, severities, metadata, `fix`, and engine version bounds. |
| Provider knowledge | Engine/version behavior and bundle verification configuration matter separately from the rule text. | **DOCUMENTED:** [Semgrep rule syntax](https://docs.semgrep.dev/writing-rules/rule-syntax) documents `min-version` / `max-version`; [OPA bundles](https://www.openpolicyagent.org/docs/management-bundles) describe bundle loading and optional signature verification. |
| Organization policy | Severity thresholds, exception handling, repository scope, and deployment blocking are organization-owned. | **DOCUMENTED:** [OPA philosophy](https://www.openpolicyagent.org/docs/philosophy) and [NIST ABAC](https://csrc.nist.gov/projects/attribute-based-access-control) describe decoupled policy evaluation over caller-supplied attributes. |
| User intent | "Autofix low-risk findings only" and "block merges on policy X" are run-specific instructions, not rule content. | **INFERRED:** This matches the separation between externally supplied rules and caller-provided execution scope described in [WS-03](./executable-domain-precedents.md) and [WS-06](./authority-model.md). |
| Legal transitions | Report a finding, apply a narrowly defined autofix, or deny an action at an enforcement point. | **DOCUMENTED:** [Semgrep rule tests](https://docs.semgrep.dev/writing-rules/testing-rules) validate fix output; [OPA bundles](https://www.openpolicyagent.org/docs/management-bundles) describe separately distributed policy decisions. |
| Agent judgment | Triage false positives, explain tradeoffs, or propose a remediation when no deterministic fix exists. | **INFERRED:** This is consistent with the LLM-versus-deterministic boundary in [ARCHITECTURE.md](../ARCHITECTURE.md) and with WS-03's distinction between native executable rules and agent access. |
| Validation | Rule fixtures and policy tests are cheap; whole-system security assurance is still incomplete. | **DOCUMENTED:** [Semgrep rule tests](https://docs.semgrep.dev/writing-rules/testing-rules) and [OPA policy testing](https://www.openpolicyagent.org/docs/policy-testing) support repeatable tests. **INFERRED:** They do not prove absence of exploitable behavior. |
| Authority | Rule authors do not own repository write access or deployment credentials; enforcement must be external. | **DOCUMENTED:** [OPA bundles](https://www.openpolicyagent.org/docs/management-bundles) prevent ordinary API writes to bundle-owned content by default, while [WS-06](./authority-model.md) shows that evaluator configuration and the real executor still matter. |

### What transfers

- **INFERRED:** "Domain knowledge as infrastructure" is strongest here because rules, tests, and policy bundles are already versioned artifacts that an agent can call without quietly redefining them.
- **INFERRED:** WS-06's authority split generalizes cleanly: the rule publisher, policy owner, agent, and enforcer can remain separate principals.

### What must adapt

- **DOCUMENTED:** [Semgrep rule syntax](https://docs.semgrep.dev/writing-rules/rule-syntax) allows version-bounded rules, which means a skipped incompatible rule is not the same thing as "secure".
- **DOCUMENTED:** [OPA decision logs](https://www.openpolicyagent.org/docs/management-decision-logs) can be masked, dropped, or rate-limited; logs are useful evidence, not perfect audit truth.

### Where durable product value would live

**OPINION:** Maintained rule catalogs, exception workflows, independent enforcement, replayable evidence capture, and clear "skipped / unknown / denied" semantics are more defensible than a new generic package format.

## Domain 2: Infrastructure operations and runtime reconciliation

**INFERRED overall result:** Transfers only with major adaptation. The layer model still helps, but the package metaphor becomes too passive unless it is widened to include active controllers, credentials, and continuous reconciliation.

| Layer | Mapping | Evidence |
| --- | --- | --- |
| Observation | Desired state, current cluster state, provider schemas, drift, and request context are all relevant observations. | **DOCUMENTED:** [Kubernetes admission control](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/) runs after authentication and authorization but before persistence; [Terraform Plugin Framework](https://developer.hashicorp.com/terraform/plugin/framework) defines providers, resources, data sources, and functions. |
| Domain knowledge | Operational expertise lives in operator code and provider implementations. | **DOCUMENTED:** [Kubernetes operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) says operators capture how a human operator deploys, upgrades, backs up, and recovers a service; [Terraform Plugin Framework](https://developer.hashicorp.com/terraform/plugin/framework) exposes provider-specific schemas and API translations. |
| Provider knowledge | Cloud/API semantics enter early and remain active during planning, execution, and reconciliation. | **DOCUMENTED:** [Terraform dependency lock](https://developer.hashicorp.com/terraform/language/files/dependency-lock) documents provider-only locking and trust-on-first-use checksum verification. |
| Organization policy | Admission plugins, allowed regions, secret rules, and no-public-database constraints are external to the provider artifact. | **DOCUMENTED:** [Kubernetes admission control](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/) says only cluster administrators configure admission controllers. |
| User intent | Preserve availability, deploy to a named target, or upgrade within a maintenance window. | **INFERRED:** This matches the target-selection and no-public-database examples already modeled in [prototype/control-plane/README.md](../prototype/control-plane/README.md) and [WS-06](./authority-model.md). |
| Legal transitions | Create/update/delete resources, reconcile toward desired state, mutate/validate API requests, or apply provider plans. | **DOCUMENTED:** [Kubernetes operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) and [admission control](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/) both describe active mutation, validation, and recovery semantics. |
| Agent judgment | Choose rollout order, interpret drift, or escalate when policy, provider, and state disagree. | **INFERRED:** WS-06's "supported / feasible / permitted / selected / authorized" split is necessary here because technical feasibility and organizational permission diverge frequently. |
| Validation | Unit-like controller tests exist, but high-confidence checks require live APIs, credentials, and side-effect handling. | **DOCUMENTED:** [Kubebuilder envtest](https://book.kubebuilder.io/reference/envtest) omits built-in controllers and kubelet; [Terraform acceptance tests](https://developer.hashicorp.com/terraform/plugin/testing/acceptance-tests) run real plan/apply/refresh/destroy operations and require credentials. |
| Authority | The effective authority boundary is the execution gate and credential holder, not the provider or operator author. | **DOCUMENTED:** [Kubernetes admission control](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/) notes side effects and reconciliation needs; **INFERRED:** this reinforces WS-06's claim that a package cannot self-authorize production effects. |

### What transfers

- **INFERRED:** The distinction between domain knowledge, provider knowledge, organization policy, user intent, validation, and authority is still useful.
- **INFERRED:** WS-04's warning about provider semantics changing what must be observed applies strongly here. The architecture remains explanatory even when the package abstraction weakens.

### What must adapt

- **DOCUMENTED:** [Kubernetes operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) makes the controller itself an active long-lived client of the API, not a passive ruleset.
- **DOCUMENTED:** [Kubernetes admission control](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/) and [Terraform acceptance tests](https://developer.hashicorp.com/terraform/plugin/testing/acceptance-tests) show that validation includes real side effects, reconciliation, and partial-failure handling.

### Strongest failure in this domain

**INFERRED:** A "scan once, evaluate once, then execute" architecture is too weak for a reconciler domain. Drift, retries, side effects, and continuously changing external state mean the observation set must be refreshed and the authority check re-bound at execution time.

### Where durable product value would live

**OPINION:** Provider adapters, protected execution gates, drift/exceptions handling, live validation harnesses, and auditable approval bindings are more plausible value locations than a universal passive package.

## Domain 3: Data engineering and schema evolution

**INFERRED overall result:** Transfers for typed artifacts and staged validation, but fails if the architecture equates a machine-generated migration path with semantic safety.

| Layer | Mapping | Evidence |
| --- | --- | --- |
| Observation | Current database revision, ORM metadata, schema documents, and current data shape are explicit inputs. | **DOCUMENTED:** [Alembic tutorial](https://alembic.sqlalchemy.org/en/latest/tutorial.html) describes revision history and the `alembic_version` table; [JSON Schema 2020-12](https://json-schema.org/draft/2020-12) separates vocabularies, meta-schemas, and output schemas. |
| Domain knowledge | Migration graphs and validation vocabularies encode repeatable structural knowledge. | **DOCUMENTED:** [Alembic autogenerate](https://alembic.sqlalchemy.org/en/latest/autogenerate.html) generates candidate migrations from metadata/database comparison; [JSON Schema 2020-12](https://json-schema.org/draft/2020-12) defines reusable constraint vocabularies. |
| Provider knowledge | SQL dialect behavior, warehouse/runtime quirks, validator configuration, and reference resolution remain provider-specific. | **INFERRED:** WS-03's Alembic and JSON Schema precedents show that schema content and engine behavior are separate versioned concerns. |
| Organization policy | Destructive changes, retention windows, downtime budgets, and rollback requirements are local policy. | **INFERRED:** WS-06's authority model applies because "supported by migration graph" is different from "permitted for this system and time window". |
| User intent | Add a column, preserve backward compatibility, or reject breaking changes without an exception. | **INFERRED:** Intent changes which migrations are acceptable even with the same current revision and schema metadata. |
| Legal transitions | Create a candidate migration, review or edit it, apply ordered revisions, and validate payload/schema compatibility. | **DOCUMENTED:** [Alembic autogenerate](https://alembic.sqlalchemy.org/en/latest/autogenerate.html) explicitly says autogenerated output is a candidate that must be reviewed and corrected by hand. |
| Agent judgment | Recognize renames, design data backfills, or explain compatibility tradeoffs that metadata diffing does not settle. | **DOCUMENTED:** [Alembic autogenerate](https://alembic.sqlalchemy.org/en/latest/autogenerate.html) says renames can appear as add/drop operations and always require review. |
| Validation | Cheap deterministic checks exist, but they are narrow. Semantic correctness and data preservation remain expensive. | **DOCUMENTED:** [Alembic autogenerate](https://alembic.sqlalchemy.org/en/latest/autogenerate.html) and the [JSON Schema Test Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite) support repeatable checks. **INFERRED:** Neither proves that production data, downstream consumers, or backfill logic remain correct. |
| Authority | Database credentials and release approval decide whether a migration actually runs. | **INFERRED:** WS-06's authority split again holds: migration authorship, validator success, and deploy permission remain different authorities. |

### What transfers

- **INFERRED:** Typed observations, explicit migration graphs, and conformance suites support the "agent is a client of the domain" thesis.
- **INFERRED:** Validation belongs in deterministic tools, not in agent prose.

### What must adapt

- **DOCUMENTED:** [Alembic autogenerate](https://alembic.sqlalchemy.org/en/latest/autogenerate.html) says autogenerated migrations are candidate output that must be hand-reviewed.
- **DOCUMENTED:** [JSON Schema 2020-12](https://json-schema.org/draft/2020-12) and the [JSON Schema Test Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite) show strong structural validation, but that does not extend to data backfills, historical correctness, or business meaning.

### Strongest failure in this domain

**INFERRED:** The architecture fails if "legal transition" is interpreted as "safe to execute". A migration graph can tell us that a path exists; it cannot, by itself, prove that the path preserves user-visible behavior, analytics correctness, or recoverability.

### Where durable product value would live

**OPINION:** Reviewable migration planning, shadow/backfill orchestration, compatibility evidence, rollback proofs, and downstream-consumer impact analysis are stronger value candidates than a generic migration package wrapper.

## Cross-domain findings

### Strongest successful transfer

**INFERRED:** The strongest reusable pattern is not "package everything"; it is **typed artifacts plus independent authority plus deterministic validation**. Cybersecurity already demonstrates this shape with tested rules, policy bundles, and external enforcement.

### Strongest failure

**INFERRED:** The weakest assumption is that one neutral observation set will remain sufficient through target selection and execution. Infrastructure operations breaks this because state drifts during reconciliation, and data engineering breaks it because semantic safety exceeds what metadata diffs can show.

### Validation strength and cost

| Domain | Strong deterministic checks | What they do not establish | Relative cost |
| --- | --- | --- | --- |
| Cybersecurity | Semgrep rule fixtures, rule-defined fix tests, OPA policy tests | Complete exploit absence, complete coverage, or immutable audit completeness | Low to medium |
| Infrastructure operations | envtest, admission rejection, Terraform acceptance tests, lockfile checks | Safe production behavior under all drift/side-effect conditions, or correct approvals | Medium to high |
| Data engineering | Alembic check/autogenerate review, JSON Schema validator/test-suite conformance | Data preservation, business invariants, downstream compatibility, or safe rollback | Medium to high |

### Transfer, adaptation, and failure separated

- **Transfers:** typed domain artifacts; explicit user-intent separation; deterministic validators; challengeable evidence records; external authority.
- **Requires adaptation:** long-lived control loops; skipped/unknown-state handling; repeated observation refresh; provider-specific execution constraints.
- **Fails if treated as universal:** passive package metaphor; single-scan sufficiency; "validator passed" as proof of semantic safety; package-published transitions as local permission.

## Implication for the repository thesis

**INFERRED:** Generalization strengthens the narrow thesis and weakens the universal one.

- It **strengthens** the claim that domain knowledge can become infrastructure when it is versioned, testable, and challengeable by an agent that remains a client of the domain.
- It **weakens** any claim that one package abstraction or one observation pass can cover domains with active reconciliation, partial effects, or semantic safety beyond structural checks.

**OPINION:** The next architecture step should emphasize comparison contracts, approval bindings, explicit `unknown` / `skipped` / `unsupported` states, and execution-gate enforcement before proposing a general-purpose package standard.
