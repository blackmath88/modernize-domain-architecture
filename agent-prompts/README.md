# Agent Prompts

Each workstream file is a self-contained brief. A cloud agent should normally be launched with only:

```text
Work on WS-XX.

Read AGENTS.md, CURRENT_STATE.md, WORKSTREAMS.md and the corresponding file in agent-prompts/.

Complete the workstream, commit your work, create the required handoff, and open a PR.
```

For coding agents add:

```text
Do not modify unrelated workstreams unless required.
```

For research agents add:

```text
Prefer primary sources and preserve evidence links.
```

The workstream brief defines inputs, outputs, boundaries, and definition of done. `AGENTS.md` defines the shared evidence, security, Git, status, and handoff protocol.
