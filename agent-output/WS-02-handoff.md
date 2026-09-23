# WS-02 Handoff

## STATUS

`review`

The controlled assessment completed. Planning runs A-G were executed but are classified `blocked` because Copilot quota exhaustion prevented every plan artifact. No plan was executed.

## WHAT I DID

- Pinned a clean PhotoAlbum-Java revision and recorded Modernize, Copilot CLI, and model versions.
- Built a reproducible harness for one shared assessment and seven isolated planning clones.
- Preserved the successful raw assessment, A-G prompts, logs, exit codes, generated files, source states, and diffs.
- Ran an upgrade-only assessment-config probe to challenge the default Azure-shaping result.
- Separated observed assessment behavior from blocked planning behavior in research and structured outputs.

## FILES CHANGED

- `research/provider-boundary.md`
- `structured/provider-boundary.json`
- `structured/experiments.json`
- `experiments/provider-boundary/`
- `WORKSTREAMS.md`
- `structured/workstreams.json`
- `agent-output/WS-02-handoff.md`

## KEY FINDINGS

- **OBSERVED:** The earliest provider-shaped artifact is the raw AppCAT assessment report, before any A-G prompt. It declares Cloud Readiness and three Azure targets.
- **OBSERVED:** The raw engine report and canonical report are byte-identical, so report synthesis did not introduce the provider metadata.
- **OBSERVED:** The assessment combines provider-specific cloud findings with portable Java and Spring upgrade findings.
- **DOCUMENTED:** Microsoft defines Cloud Readiness as Azure-target readiness and documents Upgrade and Cloud Readiness as separately selectable domains. This weakens an “unavoidable hidden funnel” interpretation.
- **OBSERVED:** An upgrade-only config probe did not suppress Cloud Readiness or Azure targets, but the CLI exposed no evidence that its `domains` field was recognized; the result is ambiguous.
- **OBSERVED:** A-G all hit quota, exited `0`, printed success, and produced neither `plan.md` nor `tasks.json`. Planning symmetry is untested.

## EVIDENCE

- `experiments/provider-boundary/raw/shared-assessment/`
- `experiments/provider-boundary/raw/upgrade-only-assessment/`
- `experiments/provider-boundary/raw/run-A/` through `raw/run-G/`
- `experiments/provider-boundary/prompts.json`
- `structured/provider-boundary.json`

## WHAT CHANGED MY MIND

The evidence supports a narrower claim than “Modernize is an Azure funnel.” Azure shaping is earlier than expected, at raw assessment output, but it belongs partly to an explicitly Azure-defined Cloud Readiness domain. The same report also carries portable upgrade knowledge, and product documentation says the domains are selectable. The strongest supported model is a combined default assessment, not proven provider inevitability.

## OPEN QUESTIONS

- Does documented interactive Upgrade-only selection remove Azure targets in Modernize `1.0.74`?
- Does a correctly shaped non-interactive config support domain restriction, or does this version ignore it?
- Once quota is available, do AWS, neutral, and preserve-hosting prompts override the Azure-shaped assessment context?
- Would the default assessment change for a renamed mirror or a non-Azure sample?

## RECOMMENDED NEXT STEP

After quota recovery, capture an interactive Upgrade-only assessment and rerun A-G from that known provider posture. Add a renamed-mirror control before making product-wide claims about default assessment behavior.

## RISKS / WEAKNESSES

- Source naming is Azure-associated.
- Planning, tasks, transformations, infrastructure, and validation were not reached.
- The CLI reported success despite quota failure, so exit status alone is unreliable.
- The upgrade-only file probe cannot distinguish ignored configuration from unsupported domain restriction.