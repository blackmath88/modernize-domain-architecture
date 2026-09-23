# .NET / Microsoft Agentic AI Hackathon — Navigator

## Purpose

This ChatGPT Project uses a **hub-and-spoke** structure.

- **Navigator chat** = this conversation. Keeps the whole picture, current state, decisions, and routing.
- **Satellite chats** = focused workstreams that can go deep without bloating the navigator.

The project is preparing for:

**Agentic AI Hackathon: App modernization with GitHub Copilot**  
**Wednesday, 23 September 2026 · 08:45–16:30 CEST**  
**Microsoft Office Zurich · The Circle 02, 10th floor · Zürich Airport**

## Event structure

| Time | Block |
|---|---|
| 08:45–09:00 | Arrival & check-in |
| 09:00–10:00 | Introduction and tech talk |
| 10:00–12:00 | Challenge 1 — Custom Agents, Skills & MCP |
| 12:00–13:00 | Lunch |
| 13:00–14:00 | Challenge 2 — Batch upgrade Java + .NET |
| 14:00–14:15 | Break |
| 14:15–15:15 | Challenge 3 — Modernize + deploy to Azure |
| 15:15–16:30 | Conclusion & Apero |

## Core learning goal

Do **not** optimize for becoming a .NET developer in two days.

Optimize for understanding:

1. what the application is,
2. what Modernize assesses,
3. what it proposes,
4. where the agent / skill / MCP / deterministic boundaries are,
5. how changes are validated,
6. what architecture survives better base models.

## Recommended satellite chats

### Satellite A — Machine readiness
Use for:
- Azure CLI
- .NET SDK
- Docker
- Java/Maven/Gradle
- Copilot CLI
- Modernize CLI
- sample repo smoke tests

### Satellite B — .NET orientation
Use for:
- C# basics
- `.cs`, `.csproj`, `Program.cs`
- ASP.NET Core
- `dotnet build/test/run`
- reading the PhotoAlbum sample

### Satellite C — Modernize architecture
Use for:
- agents / coordinators / executors
- skills
- MCP server
- `report.json`
- `plan.md`
- `tasks.json`
- DAGs
- rulebook
- validation loop
- semantic compiler / JEV connection

### Satellite D — BuildRadar case
Use for:
- PREP mission-control UI
- readiness
- learning notes
- MCP write layer
- WORK / AFTERSPACE later

### Satellite E — Event-day field notes
Use for:
- observations during talks
- screenshots / snippets
- questions to speakers
- decisions
- lessons
- afterspace synthesis

## Current high-level status

Already green:
- Git
- GitHub CLI
- GitHub auth
- GitHub Copilot entitlement
- Copilot CLI
- Modernize CLI
- Java 21
- Azure subscription exists
- Azure Owner role confirmed
- `hackathon-preflight` resource group successfully created

Still to verify / finish:
- Azure CLI installed + logged in locally
- .NET SDK installed
- Docker engine running + smoke test
- sample repos cloned
- ideally one simple `dotnet build/test/run` dry run

## Core conceptual lens

The useful question for Wednesday is:

> When Modernize does something impressive, was it:
> - inferred by the LLM,
> - instructed by a Skill,
> - computed by MCP/tooling,
> - constrained by typed state / policy,
> - or proven by deterministic validation?

That distinction is the main architecture-learning objective.
