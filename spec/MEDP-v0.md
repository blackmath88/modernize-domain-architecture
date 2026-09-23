# MEDP v0

Status: proposed design hypothesis for WS-09, intentionally narrow.

## Why this exists

**INFERRED:** WS-03 found no evidence that executable domain knowledge requires a brand-new universal package format; native recipe libraries, policy bundles, validators, and provenance systems already cover much of the ground. **INFERRED:** WS-06 found that authority is the controlling abstraction for consequential changes, so a package must never imply permission to execute. **INFERRED:** WS-12 found that the architecture transfers best when typed artifacts, explicit `unknown` / `skipped` / `unsupported` states, deterministic validation, and external enforcement remain separate.

MEDP v0 therefore defines the smallest useful shared descriptor for a machine-executable domain package:

- enough structure for a client to identify what a package is, what native artifacts it wraps, what observations it expects, what effects it may propose, what validation criteria it expects, and what provenance to retain;
- not enough structure to replace native recipe, policy, validation, or attestation formats;
- explicit enough that a client can consume the package without letting the package quietly redefine authority, provenance, or user intent.

This document is a hypothesis for the repository demonstrator, not a general standard.

## Goals

1. Describe a package's identity, publisher, scope, and version.
2. Preserve distinctions among community/software knowledge, provider/deployment knowledge, organization policy, user intent, authority, and provenance.
3. Reference native artifacts and callable interfaces instead of inventing a new rule DSL.
4. Declare expected observations, user-supplied inputs, compatibility requirements, proposed effects, and validation criteria.
5. Make unsupported, blocked, skipped, and unknown cases first-class.
6. Make provenance mandatory enough for another client to replay or challenge a decision basis.
7. Stay small enough that WS-10 can implement the descriptor or reject it.

## Non-goals

MEDP v0 does **not** define:

- a registry, marketplace, or publication workflow;
- a new transformation language, policy language, or validator language;
- a replacement for OpenRewrite recipes, Rego bundles, JSON Schema, SARIF, SLSA, in-toto, or PROV;
- authority grants, approval records, delegation, exception handling, or execution-gate policy;
- runtime sandboxing, credential brokerage, or deployment control loops;
- universal applicability outside this repository's narrow modernization demonstrator.

## Design constraints carried forward from prior work

- **WS-03 constraint:** preserve native artifacts and justify every wrapper field; do not translate recipe or policy logic into a new uniform DSL.
- **WS-06 constraint:** replace a single "legal moves" concept with separate notions of support, feasibility, permission, choice, and authorization.
- **WS-12 constraint:** represent transfer limits explicitly; do not treat one package abstraction or one observation pass as universal.

See [research/executable-domain-precedents.md](../research/executable-domain-precedents.md), [research/authority-model.md](../research/authority-model.md), and [research/generalization.md](../research/generalization.md).

## Normative shape

A MEDP v0 document is a JSON descriptor validated by [medp.schema.json](./medp.schema.json). It is an envelope around native artifacts, not a replacement for them.

### 1. Package identity

`package` identifies the descriptor itself.

| Field | Meaning | Why it stays |
| --- | --- | --- |
| `id` | Stable package identifier. | Clients need a durable key for dependencies and provenance. |
| `name` | Human-readable package name. | PRs, logs, and review UIs need a label distinct from the identifier. |
| `version` | Descriptor/package version. | Replay and compatibility require a versioned artifact. |
| `kind` | `software`, `deployment`, or `organization_policy`. | The client must keep community/software, provider/deployment, and organization policy distinct. |
| `knowledge_scope` | `community`, `provider`, or `organization`. | Scope is separate from package kind because ownership matters. |
| `summary` | Short statement of purpose. | Reviewers need a concise description without reading native artifacts first. |
| `publisher` | Publisher name and scope. | A package's publisher is not the same thing as the local authority that may adopt it. |

### 2. Native artifacts and interfaces

`native_artifacts` lists the concrete artifacts that carry executable knowledge. `interfaces` lists how a client can call them.

This is the core v0 boundary:

- MEDP describes native artifacts;
- MEDP does not restate their full semantics;
- a client should prefer the referenced native contract for execution details.

Examples:

- an OpenRewrite recipe bundle;
- a Rego bundle;
- a JSON Schema file;
- a CLI command surface;
- a container image or library entrypoint.

### 3. Observations and user inputs

`observations` declares the typed observations a client must already have before asking the package for supported behavior. These are not package-owned facts.

`expected_user_inputs` declares which run-specific choices the package expects a caller to provide, without embedding the actual user intent into the package. A package may say "target runtime version is required"; it may not silently supply that choice itself.

### 4. Capabilities

Each entry in `capabilities` is a proposed operation or decision surface exposed by the package. A capability may:

- analyze;
- transform;
- plan;
- evaluate policy;
- validate.

Each capability declares:

- referenced native artifact(s);
- required observations;
- declared effects;
- explicit unsupported cases;
- external rights required before effects may be executed;
- referenced validators.

Capabilities declare support, not permission.

### 5. Validation

`validation` declares the checks a client should run or preserve after using the package. This is intentionally a thin contract:

- the descriptor gives each check a stable identifier, summary, type, and referenced native artifact;
- the native tool remains authoritative for exact behavior;
- result states must not be collapsed into a generic success boolean.

Allowed check result states are:

- `pass`
- `fail`
- `error`
- `not_run`
- `skipped`
- `unknown`

**INFERRED:** These states are the minimum needed to satisfy WS-06 and WS-12's warning against success-shaped fallbacks.

### 6. Dependencies and compatibility

`dependencies.packages` records other MEDP descriptors this package expects.

`dependencies.engines` records required external engines or runtimes such as `openrewrite`, `opa`, `dotnet-sdk`, or a deployment CLI. This is separate from package dependencies because WS-03 showed that engine version and parser/runtime behavior can change outcomes even when package content does not.

### 7. Authority contract

`authority` is deliberately narrow:

- `self_authorizing` must be `false`;
- the package declares which external bindings must exist before its effects can be trusted or executed;
- the package may explain what it expects from an authority profile or execution gate;
- the package does not carry grants, exceptions, or approvals.

This is the most important negative capability in v0.

### 8. Provenance

`provenance` records enough source and artifact identity to challenge the package basis later.

MEDP v0 requires:

- source references with retrieval dates;
- artifact locators and digests when available;
- preservation of native artifact identity rather than replacement by a package-local summary.

**DOCUMENTED:** WS-03 and WS-06 both found that signatures, logs, and version labels are useful but not equivalent to correctness or authority. v0 therefore carries provenance references without claiming that provenance alone proves trustworthiness.

## Required distinctions

The client must preserve these distinctions even when one run combines all of them:

| Concern | Lives in MEDP? | Notes |
| --- | --- | --- |
| Community/software knowledge | Yes, via `package.kind=software` and `knowledge_scope=community`. | Example: .NET upgrade recipes. |
| Provider/deployment knowledge | Yes, via `package.kind=deployment`. | Example: Azure Container Apps or AWS ECS deployment package. |
| Organization policy | Yes, but separately typed as `package.kind=organization_policy`. | Evaluates local constraints; does not replace local approval. |
| User intent | No, except as declared expected inputs. | Actual user choice belongs to the run, not the package descriptor. |
| Authority configuration | No. | Referenced only as an external binding. |
| Execution permission | No. | Must be enforced outside the package. |
| Provenance | Yes, as references and digests. | Provenance does not imply authority or correctness. |

## What a client may rely on

Without trusting arbitrary package code, a client may rely on the descriptor for:

1. package identity and declared scope;
2. which native artifacts the package says it uses;
3. which observations and user-provided inputs it expects;
4. which effects it may propose;
5. which validators it expects;
6. which external authority bindings must exist;
7. which provenance references should be preserved.

A client may **not** rely on the descriptor alone for:

- correctness of the native artifact;
- local permission to execute changes;
- completeness of validation;
- semantic safety beyond the referenced validators;
- universal replay across changed engines, remote data, mutable references, or evolving runtime state.

## Relationship to existing standards

MEDP v0 reuses or references existing standards rather than duplicating them:

| Need | Reuse / reference |
| --- | --- |
| Descriptor validation | JSON Schema 2020-12 |
| Version strings | Semantic Versioning strings by convention |
| License identifiers | SPDX identifiers by convention where available |
| Policy logic | Native policy bundles such as Rego/OPA |
| Transform logic | Native recipe libraries or executable tools |
| Provenance / attestation | Existing systems such as PROV, SLSA, in-toto, or repository history, referenced rather than redefined |

If a future iteration cannot point to a concrete adapter gap, v0 should remain a thin envelope.

## Example set

The JSON examples under [spec/examples/](./examples/) intentionally cover one software package, one organization-policy package, two deployment packages, and two invalid cases:

| File | Purpose |
| --- | --- |
| `dotnet-6-to-10.package.json` | Community/software package for shared .NET modernization. |
| `acme-modernization-policy.package.json` | Organization policy package for local constraints. |
| `azure-container-apps.package.json` | Provider deployment package for Azure Container Apps. |
| `aws-ecs.package.json` | Provider deployment package for AWS ECS. |
| `invalid-self-authorizing.package.json` | Must fail because MEDP packages cannot self-authorize. |
| `invalid-policy-scope.package.json` | Must fail because an organization-policy package cannot claim community scope. |

## Versioning and compatibility rules

1. `medp_version` describes the descriptor contract version, not the package content version.
2. `package.version` versions the described package artifact.
3. Native artifacts keep their own versions and digests; MEDP does not replace them.
4. A client should treat missing required observations as `blocked`, not as "probably supported".
5. A client should treat incompatible engines as `unsupported` or `error`, depending on whether the incompatibility is declarative or observed at execution time.
6. A client should not reuse prior approvals if the source snapshot, selected target, policy revision, validator set, or package version changes.

## Trust boundaries

MEDP v0 assumes:

- a package descriptor may be distributed separately from execution authority;
- the caller can pin and inspect native artifacts before running them;
- the actual execution path is protected elsewhere if the change is consequential;
- provenance can be recorded even when authorization is denied or execution is skipped.

MEDP v0 does **not** assume:

- the agent controls or deserves the authority profile;
- packages are signed;
- package publication is centralized;
- one observation pass remains fresh in long-lived reconciler domains;
- a universal package metaphor fits active controllers or schema-migration semantics.

## Deliberately omitted from v0

The following were considered and intentionally omitted:

- an embedded rule language;
- cross-package authority delegation;
- registry semantics;
- workflow DAG modeling;
- challenge / appeal records;
- run-time decision records;
- result attestation format;
- executable code trust policy;
- target-environment state snapshots.

Those belong in WS-10 runtime design or later evidence, not in this v0 descriptor.

## What evidence would justify v1

v1 would need more than preference. It would need **observed** evidence that a thin descriptor is insufficient. Useful triggers would include:

1. repeated adapter duplication across native tools in WS-10;
2. a concrete provenance or authority failure that the v0 descriptor cannot prevent or expose;
3. cross-client disagreement that persists even with pinned observations, package versions, and validator references;
4. a demonstrated need for a shared result or challenge format across more than one native engine family.

Absent that evidence, MEDP should remain intentionally small.
