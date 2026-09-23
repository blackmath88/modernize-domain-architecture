# Experiment Plan: Where Does Provider Knowledge Enter?

## Objective

Determine where provider assumptions enter the GitHub Copilot Modernize workflow and distinguish portable application-modernization knowledge from provider-specific platform knowledge.

## Control

Use one unchanged source application and vary only the requested intent. Start from the same commit for every run and use the same Modernize/tool versions wherever possible.

## Run matrix

| ID | Intent |
|---|---|
| A | Language/framework upgrade only |
| B | Modernize without a cloud target |
| C | Modernize for cloud, provider unspecified |
| D | Modernize for Azure |
| E | Explicitly provider-neutral modernization |
| F | Modernize for AWS |
| G | Preserve current hosting and deployment |

## Capture for every run

- exact prompt and command
- source commit and dirty-state check
- tool, extension, runtime, and model versions when observable
- assessment output and `report.json`
- plan and `plan.md`
- task graph and `tasks.json`
- selected or matched skills
- observable MCP and tool calls
- generated and modified files
- infrastructure as code
- build, test, policy, and deployment validation
- failures, retries, and repairs
- final diff and conclusion

Never record credentials or cloud CLI authentication state.

## Classification

Classify each consequential decision as one of:

```text
community_domain_fact
provider_domain_knowledge
organization_policy
user_intent
llm_inference
harness_behavior
deterministic_validation
```

Also record stage, provider, evidence status, source artifact, confidence, and whether provenance was observed or inferred.

## Procedure

1. Record the source commit and tool versions.
2. Copy `experiments/runbooks/RUN_TEMPLATE.md` into a run evidence directory.
3. Execute one intent without carrying generated state from another run.
4. Preserve raw outputs before interpretation.
5. Populate the corresponding entry in `structured/experiments.json` only from captured artifacts.
6. Compare the earliest provider-shaped finding, recommendation, task, code change, and validation criterion across runs.
7. Apply the falsification criteria in `RESEARCH_THESIS.md`.

## Deliverable

Produce an evidence table and architecture conclusion distinguishing portable intelligence, provider knowledge, organization/user constraints, LLM decisions, harness behavior, and deterministic validation. A null result is valid; do not manufacture a provider bias finding.
