# Agent Operating Protocol

## Mission

We are investigating:

> What would it mean for domain knowledge to become infrastructure that an agent can use, but cannot quietly redefine?

And:

> If models, agents, and orchestration become increasingly interchangeable, where does durable product value live?

The current case study is GitHub Copilot Modernize. This repository is research, architecture, evidence, and a deliberately narrow demonstrator. It is not yet a general modernization framework.

## Core principles

Preserve these distinctions:

- community/domain knowledge;
- provider-specific knowledge;
- organization policy;
- user intent;
- orchestration/harness logic;
- LLM inference;
- deterministic validation;
- authority;
- provenance.

> The agent is a client of the domain. It does not own the domain.

> Build software with LLMs, not software out of LLMs.

> Type the parts of a domain that are encountered often enough that the cost of ambiguity exceeds the cost of encoding them.

## Evidence discipline

Label important claims where appropriate:

```text
OBSERVED
DOCUMENTED
INFERRED
HYPOTHESIS
OPINION
```

- Do not convert hypotheses into facts.
- If evidence contradicts the thesis, preserve the contradiction.
- Prefer primary sources, raw artifacts, public technical documentation, and reproducible behavior over marketing summaries.
- Separate raw evidence in `evidence/` from interpretation in `research/`, `structured/`, and canonical synthesis documents.
- Do not infer provenance when an artifact can establish it.
- Use `null`, `unknown`, or `not observed` when evidence is absent.

## Agent working rules

Every agent must:

1. read `AGENTS.md`;
2. read `CURRENT_STATE.md`;
3. read `WORKSTREAMS.md` and its workstream file under `agent-prompts/`;
4. inspect relevant existing material before editing;
5. avoid unnecessary changes outside its workstream;
6. preserve original research notes under `docs/source-notes/` and all existing evidence;
7. cite or link evidence precisely enough for another agent to verify it;
8. write findings into the expected locations;
9. set its status to `in_progress` when work begins and to `review` when outputs are ready, in both `WORKSTREAMS.md` and `structured/workstreams.json`;
10. create or update `agent-output/WS-XX-handoff.md` before finishing;
11. run relevant validation and report anything that could not be run;
12. use a focused branch, commit its work, push it, and open a PR when credentials and permissions allow.

Status transitions are:

```text
ready -> in_progress -> review -> complete
                    \-> blocked
```

An agent owns only its status row/object and outputs. It may set `blocked` with evidence when work cannot continue. Only the orchestrator sets `complete`, after merge and output verification. The orchestrator owns cross-workstream synthesis in `CURRENT_STATE.md` and `DECISION_LOG.md`.

If branch push or PR creation is unavailable, complete the local work and commit, leave the status at `review`, and record the exact publication blocker in the handoff. Do not weaken research or fabricate a PR to satisfy process wording.

## Repository map

- `research/`: interpreted findings and comparisons
- `evidence/`: immutable or append-only raw artifacts
- `structured/`: machine-readable models and workstream state
- `prototype/`: narrow demonstrators and implementation notes
- `spec/`: proposed contracts and schemas
- `experiments/`: runbooks and reproducible experiment material
- `site/`: human-facing visual explainer
- `docs/source-notes/`: preserved original research
- `agent-prompts/`: self-contained workstream briefs
- `agent-output/`: concise agent handoffs

## Security

Never commit:

- passwords;
- TAP credentials;
- access tokens;
- API keys;
- Azure secrets;
- GitHub tokens;
- private keys;
- `.env` contents.

If secrets are found: stop using them, do not repeat them in output, redact them from new artifacts, and report the path. Do not rewrite preserved source history without explicit approval.

## Git behavior

Work on a dedicated branch following `docs/AGENT_BRANCHING.md`. Use focused commits and do not rewrite unrelated work.

Allowed commit prefixes:

```text
research:
experiment:
prototype:
spec:
evidence:
docs:
visual:
synthesis:
```

Do not force-push shared branches. Do not alter another workstream's output merely to make your own result cleaner.

## Agent completion format

At the end of every workstream, create or update:

```text
agent-output/WS-XX-handoff.md
```

Use exactly these headings:

```text
# WS-XX Handoff

## STATUS

## WHAT I DID

## FILES CHANGED

## KEY FINDINGS

## EVIDENCE

## WHAT CHANGED MY MIND

## OPEN QUESTIONS

## RECOMMENDED NEXT STEP

## RISKS / WEAKNESSES
```

Keep the handoff concise enough that the orchestrator can judge the work without rereading every diff. Link to detailed outputs rather than duplicating them.
