# GitHub Copilot Modernization — Architecture Notes

## The main finding

Modernize is not just "a good system prompt".

The current public architecture is closer to:

```text
human intent
    ↓
modernize orchestrator
    ↓
assessment coordinator
planning coordinator
execution coordinator
    ↓
specialized agents
    ↓
MCP tools / analyzers
    ↓
typed artifacts
    ↓
build / test / deploy validation
```

## Top-level orchestrator

The user-facing `modernize.agent.md` is intentionally a **router, not a doer**.

It classifies intent and delegates.

Broad request:

```text
ASSESS
  ↓
PLAN
  ↓
EXECUTE
```

Specific single task:

```text
EXECUTE directly
```

Multiple specific tasks:

```text
PLAN
  ↓
EXECUTE
```

## Assessment

The system first recognizes language/project shape using concrete indicators.

Examples:

Java:
- `pom.xml`
- `build.gradle`
- `*.java`

.NET:
- `*.csproj`
- `*.sln`
- `*.cs`

Assessment then invokes domain-specific MCP tools.

Assessment output is written to durable structured artifacts such as:

```text
.github/modernize/assessment/...
report.json
```

## Planning

Planning creates:

```text
plan.md
tasks.json
```

Interpretation:

- `plan.md` = human-facing explanation
- `tasks.json` = machine-facing execution contract

The task structure can include:
- task type
- task description
- dependencies
- language
- matched skill/pattern
- requirements

## DAG

DAG = **Directed Acyclic Graph**

A task dependency graph where arrows only go forward.

Example:

```text
repo recon
   ↓
dependency map
   ↓
upgrade ─────────┐
                 ├→ integration test → deploy
target env prep ─┘
```

The DAG gives the system:
- ordering
- parallelism
- dependency gates
- explicit execution state

## Skills

Modernize contains many Markdown Skills, including concepts such as:
- architecture analysis
- dependency mapping
- project recon
- configuration inventory
- modernization planning
- DAG generation
- CVE remediation
- implementation
- integration testing

Some encode real domain knowledge.

Some also look like procedures that could eventually become software primitives.

## Specialized agents

Examples include:
- Java upgrade
- Java security/CVE
- Java → Azure
- .NET → Azure
- deployment
- integration testing
- rearchitecture

This is specialization by bounded domain/use case rather than one universal agent.

## MCP

The plugin starts a local MCP server process:

`@microsoft/github-copilot-app-modernization-mcp-server`

via `npx` over stdio.

Important distinction:

> MCP is the protocol, not the intelligence.

The server behind MCP may do real computation:
- repo inspection
- deterministic analysis
- knowledge lookup
- transformations
- process execution
- validation support

Key question:

> Which findings are computed algorithmically behind MCP, and which are inferred by the LLM?

## Rulebook

Organization-specific policy can be encoded under:

`.github/modernize/rulebook/`

Examples:
- Java 21
- PostgreSQL
- Azure Container Apps
- Managed Identity
- Bicep
- no Kafka

Architecturally useful because the base model cannot know local organizational intent.

But organizational reality is usually much fuzzier than a clean rulebook suggests.

## Verification

The system uses deterministic checks after probabilistic generation:

```text
LLM proposes change
    ↓
build
    ↓
test
    ↓
failure evidence
    ↓
LLM repair
    ↓
repeat
```

This is one of the strongest parts of the architecture.

## Baseline testing

For migration/integration scenarios, the system can capture a pre-migration baseline and compare the modernized system against it.

That is stronger than merely asking whether the new code compiles.
