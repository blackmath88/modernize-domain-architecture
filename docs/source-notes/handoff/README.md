# Modernize, Domain Knowledge, and the Product Boundary

This repository is a hackathon research/build handoff for investigating **GitHub Copilot Modernize** as both a product and a reference architecture.

The central question is no longer simply:

> How does Modernize modernize applications?

It is:

> **Where is the product if stable modernization knowledge can become portable, machine-executable domain infrastructure?**

## Working thesis

Modernize appears to combine several layers that should be conceptually separated:

1. **Community / domain knowledge**  
   Language and framework facts, compatibility rules, migration recipes, validators, dependency knowledge.

2. **Provider-specific knowledge**  
   Azure service mappings, hosting choices, identity patterns, infrastructure generation, cloud architecture and deployment knowledge.

3. **Organization-specific knowledge**  
   Internal architecture standards, approved technologies, security policy, compliance rules, exceptions.

4. **User intent**  
   The concrete goal for this modernization.

5. **Harness / product layer**  
   Assessment, planning, task graphs, execution, retry, validation, provenance, UX, IDE/GitHub integration.

6. **LLM reasoning**  
   Ambiguity resolution, intent interpretation, unsupported cases, explanation, and code synthesis where deterministic recipes are insufficient.

The hypothesis is that much of layer 1 is not inherently proprietary and could be represented as **machine-executable domain packages** maintained by communities, vendors, and organizations.

A possible ecosystem:

```text
community/java
community/dotnet
community/spring
community/jakarta

microsoft/azure
aws/aws
google/gcp

organization/acme-policy
```

Any capable harness or agent could consume those packages.

## Key architectural principle

> **The agent is a client of the domain. It does not own the domain.**

Related principle:

> **Build software with LLMs, not software out of LLMs.**

Use probabilistic models where ambiguity genuinely exists. Encode stable, repeated, valuable knowledge into typed, testable, executable software where the economics justify it.

## Why deployment matters

An important realization from the hackathon investigation is that deployment is not merely a final add-on.

Deployment **execution** belongs late in the process, but deployment **intent and constraints** influence modernization much earlier:

```text
current application
      ↓
portable application facts
      ↓
target requirements / constraints
      ↓
provider-specific architecture decisions
      ↓
modernization plan
      ↓
transform
      ↓
deploy + verify
```

If the target is Azure, decisions about identity, messaging, secrets, databases, compute, networking, observability, and infrastructure can affect the modernization plan itself.

Therefore the provider bias is architecturally significant. It does not begin only at the deploy button.

## Product question

The current working decomposition of Modernize's proprietary value is:

- Azure/provider-specific executable expertise
- integration with GitHub/Copilot/IDE/Azure
- modernization harness and orchestration quality
- evaluation, retry, validation, and operational reliability
- enterprise packaging and trust
- distribution
- potentially learned operational data and migration experience

By contrast, generic language/framework facts and many known migration paths are candidates for portable/open executable domain knowledge.

This leads to a stronger reframing:

> **Modernize may be best understood as a Microsoft modernization client/orchestrator that combines portable modernization knowledge with Azure-specific provider intelligence.**

The research challenge is to determine where this statement is accurate, where it is too strong, and what the actual boundaries are.

## Central experiment

Do not merely inspect prompts. Trace **where knowledge enters the pipeline**.

For the same application, compare runs such as:

- modernize only
- upgrade language/framework only
- modernize for cloud
- modernize while remaining provider-neutral
- modernize for Azure
- request an AWS target
- explicitly preserve the current deployment environment

Capture:

- assessment artifacts
- target-specific findings
- `report.json`
- planning output
- `plan.md`
- `tasks.json`
- matched skills
- MCP/tool calls where observable
- generated code
- IaC/deployment artifacts
- validation evidence
- retry/repair behavior

Then classify every important decision:

```text
COMMUNITY DOMAIN FACT
PROVIDER KNOWLEDGE
ORGANIZATION POLICY
USER INTENT
LLM INFERENCE
HARNESS / ORCHESTRATION
DETERMINISTIC VALIDATION
```

## What not to build yet

Do not start by building:

- another generic Java/.NET modernizer
- a replacement for GitHub Copilot Modernize
- a giant autonomous coding agent
- a duplicate of OpenRewrite
- a generic MCP wrapper without a clear knowledge model

First establish the architectural seam with evidence.

## Candidate build direction

A minimal demonstrator could show:

```text
application
    ↓
neutral typed observations
    ↓
machine-executable domain packages
    ↓
legal / supported transitions
    ↓
provider packages
    ↓
organization policy
    ↓
LLM only where ambiguity remains
    ↓
execution
    ↓
deterministic validation
    ↓
provenance
```

The demo becomes particularly interesting if the same neutral application facts can be evaluated against multiple provider packages without rebuilding the core harness.

## Repository map

Start with:

- `docs/00_NAVIGATOR.md`
- `docs/03_MODERNIZE_ARCHITECTURE.md`
- `docs/04_SEMANTIC_COMPILER_AND_JEV.md`
- `docs/05_CHALLENGE_QUESTIONS.md`
- `docs/09_MODERNIZE_PRODUCT_VALUE_AND_DOMAIN_KNOWLEDGE.md`
- `COPILOT_HANDOFF.md`
- `EXPERIMENT_PLAN.md`

The remaining docs contain event preparation, glossary, satellite workstreams, and related case context.

## Security note

No hackathon credentials, TAP values, access tokens, subscription secrets, or passwords should be committed to this repository.
