# Modernize Domain Architecture

An evidence-first research repository about GitHub Copilot Modernize, machine-executable domain knowledge, provider-specific modernization, and the boundary between deterministic software and LLM reasoning.

> The agent is a client of the domain. It does not own the domain.

## The question

If stable language, framework, provider, and organization knowledge can be represented as portable machine-executable infrastructure, where does the proprietary value of a product like GitHub Copilot Modernize live?

The current answer is deliberately provisional:

> **Hypothesis:** Modernize combines relatively portable application-modernization knowledge with an opinionated Azure-target modernization path. Its durable value may lie in provider expertise, integration, orchestration, validation and retry, enterprise UX, distribution, and operational learning.

## Working model

```text
community / domain knowledge
        ↓
provider-specific knowledge
        ↓
organization policy
        ↓
user intent
        ↓
modernization harness
        ↓
LLM reasoning where ambiguity remains
        ↓
execution
        ↓
deterministic validation
```

Deployment runs late, but target constraints can affect identity, messaging, secrets, compute, data, networking, observability, and infrastructure much earlier. This is why provider choice belongs in the architecture discussion rather than only in deployment automation.

## Start here

- [Current state](CURRENT_STATE.md): shortest reliable handoff
- [Agent protocol](AGENTS.md): shared rules for cloud coding and research agents
- [Workstreams](WORKSTREAMS.md): 12 independently launchable assignments
- [Prototype workspace](prototype/README.md): provider-neutral control-plane demonstrator
- [Research thesis](RESEARCH_THESIS.md): question, alternatives, and falsification criteria
- [Architecture](ARCHITECTURE.md): observed pipeline and proposed domain-package model
- [Experiment plan](EXPERIMENT_PLAN.md): seven-intent provider-influence comparison
- [Visual explainer](site/index.html): the same model as a static narrative
- [Structured model](structured/README.md): JSON interfaces for agents and tooling
- [Original sources](docs/source-notes/README.md): verbatim supplied research and visual artifacts

## Launch a cloud agent

The repository contains the complete workstream context. A new GitHub Copilot cloud session normally needs only:

```text
Work on WS-XX.

Read AGENTS.md, CURRENT_STATE.md, WORKSTREAMS.md and the corresponding file in agent-prompts/.

Complete the workstream, commit your work, create the required handoff, and open a PR.
```

First wave: WS-01, WS-02, WS-03, WS-04, WS-06, and WS-10.

## Evidence discipline

Every important statement should use one of these statuses:

- **Observed:** directly evidenced by a repository artifact, command output, or runtime behavior.
- **Documented:** stated in vendor or public documentation.
- **Inferred:** an interpretation derived from evidence.
- **Hypothesis:** an idea that still requires testing.
- **Opinion:** a design or product judgment.

No raw Modernize run artifacts are currently present. References to the PhotoAlbum assessment are observations recorded in the supplied notes, not independently reproducible evidence in this repository yet.

## Repository layout

```text
docs/          Canonical explanations and preserved source notes
evidence/      Raw run artifacts, never interpretations
structured/    Machine-readable thesis, claims, architecture, and runs
site/          Dependency-free visual documentation
experiments/   Reproducible runbooks and capture templates
agent-prompts/ Self-contained cloud-agent workstream briefs
agent-output/  Concise workstream handoffs
prototype/     Narrow architecture demonstrators
```

## Security

Never commit credentials, tokens, private keys, `.env` contents, cloud CLI state, or temporary hackathon access material. Infrastructure identifiers in preserved notes are historical context, not authentication secrets.
