# WS-10 — Prototype Core

## WORKSTREAM ID

`WS-10`

## MISSION

Build the smallest working prototype that proves or falsifies a provider-neutral modernization control plane: one neutral assessment evaluated against multiple deployment packages with every consequential difference explained.

## WHY THIS MATTERS

The architecture remains rhetoric until a provider can be switched without changing the generic harness or shared modernization plan.

## QUESTIONS

- Can one scan support preserve-current-hosting, Azure Container Apps, and AWS ECS plans?
- Can shared .NET modernization remain identical while target-specific decisions vary?
- Can company policy constrain all targets without entering the generic harness?
- Can every plan difference name its source, authority, and validation?
- Which decisions genuinely require an LLM?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `ARCHITECTURE.md`
- `prototype/README.md`, `prototype/control-plane/README.md`
- `structured/architecture.json`, `structured/provenance.json`
- `EXPERIMENT_PLAN.md`
- WS-03, WS-04, WS-06, and WS-09 outputs if available; do not block on them

## TASKS

1. Use one small .NET 6 application and define a .NET 6 to .NET 10 software package.
2. Define company policy: cloud allowed, secrets externalized, telemetry required, public database forbidden.
3. Implement deployment packages for preserve-current-hosting, Azure Container Apps, and AWS ECS.
4. Scan once into neutral typed observations.
5. Generate candidate plans through a generic harness with approval and provenance records.
6. Demonstrate that switching provider changes only provider/policy-dependent decisions.
7. Implement at least one real deterministic validation.
8. Document any unsupported or LLM-required decision without hiding it.

## EXPECTED OUTPUTS

- implementation and tests under `prototype/control-plane/`
- contracts under `structured/prototype-contracts/`
- `agent-output/WS-10-handoff.md`

## BOUNDARIES

- Hard requirement: generic harness code must contain no Azure, AWS, or .NET-specific facts.
- Do not build a full migration engine, cloud deployment system, agent runtime, or package registry.
- Do not fake provider differences with hard-coded conditionals in the harness.
- Keep the source app and supported transformation deliberately narrow.

## DEFINITION OF DONE

1. Scan once.
2. Switch provider.
3. Plans change.
4. Shared modernization stays shared.
5. Every difference has provenance.
6. One real deterministic validation works.
7. Tests prove the harness has no dependency on provider or language implementations.
8. Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. Include exact run commands, test results, a three-plan comparison, any architecture falsification, and the narrowest useful next increment.
