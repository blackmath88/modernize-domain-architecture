# Provider-Neutral Modernization Control Plane

Status: design brief; implementation assigned to WS-10.

## Product question

Can one neutral application assessment be evaluated against interchangeable software, organization, and deployment packages while every consequential plan difference remains explainable?

## Modular boundaries

### Generic process harness

Owns observation ingestion, package loading, constraint evaluation, candidate-plan assembly, approval state, execution ordering, validation dispatch, and provenance recording.

It must not contain .NET, Azure, AWS, or company-specific facts.

### Software domain package

For the prototype: .NET 6 to .NET 10 observations, compatibility rules, supported transitions, deterministic transformation hooks, and validation criteria.

### Company domain package

For the prototype:

- cloud deployment is allowed;
- secrets must be externalized;
- telemetry is required;
- public databases are forbidden.

### Deployment domain packages

- preserve current hosting;
- Azure Container Apps;
- AWS ECS.

Each package owns platform capabilities, constraints, target-specific plan steps, and validation requirements.

### LLM role

The first implementation should not require an LLM for supported paths. It may emit a typed `unresolved` decision where ambiguity remains. An optional LLM adapter must not become a hidden source of canonical rules.

## Runtime

```text
small .NET 6 application
        ↓ scan once
neutral typed observations
        ↓
.NET software package
        ↓
company policy package
        ↓
selected deployment package
        ↓
candidate plan + decision provenance
        ↓ approval
execution
        ↓
deterministic validation
```

## Required demonstration

1. Scan once.
2. Generate preserve-current-hosting, Azure Container Apps, and AWS ECS plans.
3. Show identical shared .NET modernization across all plans.
4. Show target-specific differences sourced only from deployment packages and policy interaction.
5. Explain every difference by source, classification, authority, and validation.
6. Run at least one real deterministic check.

## Non-goals

- broad application migration;
- real cloud provisioning;
- package registry or marketplace;
- custom agent runtime or orchestration service;
- autonomous approval;
- complete MEDP standardization.

See `agent-prompts/WS-10-prototype-core.md` for the executable workstream contract.
