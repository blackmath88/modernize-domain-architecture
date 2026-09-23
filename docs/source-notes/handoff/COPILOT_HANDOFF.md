# Copilot Handoff

You are taking over an active hackathon investigation into GitHub Copilot Modernize.

## Your role

Act as a **research engineer + repository steward**, not merely a code generator.

Your first task is to understand the supplied documentation before changing the repository.

Do not flatten the existing thinking into generic "AI modernization" language.

Preserve these distinctions:

- deterministic analysis vs LLM inference
- community domain knowledge vs cloud-provider knowledge
- organization policy vs user intent
- assessment vs planning vs execution vs validation
- portable application modernization vs provider-specific platform modernization
- MCP as a protocol vs computation behind MCP
- Skills as instructions vs executable domain capabilities
- product orchestration vs domain intelligence

## Core research question

> If language/framework/domain knowledge can be packaged as portable machine-executable infrastructure, what proprietary product value remains in GitHub Copilot Modernize?

A related question is:

> At what point does application modernization become provider/platform migration?

And another:

> Should cloud-provider choice be an assumption built into assessment, or an explicit decision evaluated against interchangeable provider capabilities?

## Current working hypothesis

Modernize appears to have a layered architecture:

```text
human intent
    ↓
orchestrator
    ↓
assessment
    ↓
typed findings
    ↓
planning / task graph
    ↓
specialized execution
    ↓
build/test/deploy validation
```

The important discovery is that deterministic/specialized tooling already produces substantial typed knowledge before the LLM reasons over it.

Therefore, do **not** assume the project needs "more determinism everywhere." The better question is where the economic boundary lies between:

- encoding stable knowledge once, and
- paying a model to reason about it repeatedly.

## Machine-executable domain package hypothesis

A domain package may contain:

- manifest
- typed observations
- rules
- constraints
- legal transitions
- recipes
- validators
- explanatory knowledge
- tests
- dependencies on other packages

Possible packages:

```text
community/java
community/spring
community/dotnet
microsoft/azure
aws/aws
google/gcp
organization/acme-policy
```

The consuming agent/harness should not need to own this knowledge.

## Product-value hypothesis

Treat the following as a hypothesis to test, not as established fact:

Modernize's strongest durable differentiation may come from:

1. Azure-specific provider expertise
2. high-quality orchestration/harness engineering
3. GitHub/Copilot/IDE/Azure integration
4. validation/retry/evaluation quality
5. enterprise packaging and trust
6. distribution
7. accumulated operational migration knowledge/data

General language/framework modernization knowledge may be less defensible if communities expose it as executable infrastructure.

## Critical deployment insight

Do not conceptualize Azure as only a late deployment adapter.

Deployment intent can influence modernization decisions early:

- compute model
- state
- messaging
- identity
- secrets
- databases
- networking
- observability
- infrastructure
- operational constraints

Therefore, investigate **where Azure assumptions first enter the Modernize pipeline**.

## Evidence-first experiment

Use an appropriate sample application and run equivalent modernization scenarios with different intent.

Suggested matrix:

| Run | Intent |
|---|---|
| A | Upgrade language/framework only |
| B | Modernize application, no cloud target |
| C | Modernize for cloud, provider unspecified |
| D | Modernize for Azure |
| E | Keep deployment provider-neutral |
| F | Target AWS |
| G | Preserve current hosting/deployment |

For every run, preserve machine-readable and human-readable artifacts.

Then create an evidence table:

| Decision | Stage | Source | Portable? | Provider-specific? | Deterministic? | LLM-mediated? | Evidence |
|---|---|---|---|---|---|---|---|

Do not infer provenance when it can be observed.

## Questions worth testing with the tool itself

1. Does assessment produce neutral facts first, or directly Azure-targeted facts?
2. Does target selection happen during assessment or planning?
3. What happens if the user explicitly requests AWS?
4. Does Modernize reject unsupported provider targets, ignore them, or produce generic code anyway?
5. Which Skills contain actual domain rules versus procedural guidance?
6. Which capabilities are implemented behind MCP?
7. What is encoded in `report.json` and `tasks.json` that prevents later reinterpretation?
8. Which choices are deterministic and which require LLM judgment?
9. What does the rulebook override?
10. What evidence survives through execution and validation?

## Repository tasks

1. Read all files under `docs/`.
2. Create a concise `CURRENT_STATE.md` after inspecting the repository and any new experimental artifacts.
3. Do not overwrite the original research notes.
4. Put new raw Modernize outputs in `evidence/`.
5. Put interpretations in `analysis/`.
6. Keep experiments reproducible with commands/scripts in `experiments/`.
7. Use commits to separate evidence collection from interpretation and implementation.
8. Never commit credentials, access tokens, TAP values, passwords, or tenant secrets.

## Tone / epistemic discipline

Use these labels where useful:

- **Observed** — directly evidenced from files, CLI output, generated artifacts, or runtime behavior.
- **Documented** — stated in vendor/public documentation.
- **Inferred** — architectural interpretation based on evidence.
- **Hypothesis** — idea that still requires testing.
- **Opinion** — project author's design/product view.

The repo should make it hard to accidentally turn an opinion into a fact.

## End state

The desired output is not just code.

The repository should become a coherent, evidence-backed argument about:

- where modernization knowledge lives,
- which parts should be portable,
- where provider bias enters,
- what an agent/harness actually adds,
- and what an open machine-executable domain layer could look like.
