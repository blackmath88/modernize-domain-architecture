# Agent Branching

Each cloud agent should work in its own branch and open a focused pull request.

Recommended branches:

```text
agent/ws-01-modernize-archaeology
agent/ws-02-provider-boundary
agent/ws-03-oss-precedents
agent/ws-04-thesis-red-team
agent/ws-05-domain-economics
agent/ws-06-authority-model
agent/ws-07-skills-mcp-taxonomy
agent/ws-08-product-landscape
agent/ws-09-medp-spec
agent/ws-10-prototype-core
agent/ws-11-challengeability-ux
agent/ws-12-generalization
```

## Rules

1. Start from the latest default branch.
2. Keep one workstream per branch and PR.
3. Use the commit prefixes in `AGENTS.md`.
4. Do not merge or rewrite another workstream's branch.
5. Rebase or merge the latest default branch before final review when practical.
6. Include the handoff path and validation evidence in the PR description.
7. The orchestrator reviews quality and contradictions; opening a PR does not guarantee merge.