# WS-09 Handoff

## STATUS

`review` on `agent/ws-09-medp-spec` once this branch is committed and pushed. WS-09 intentionally keeps MEDP as a narrow descriptor hypothesis rather than a general standard or registry design.

## WHAT I DID

- Read [AGENTS.md](../AGENTS.md), [CURRENT_STATE.md](../CURRENT_STATE.md), [WORKSTREAMS.md](../WORKSTREAMS.md), [agent-prompts/WS-09-medp-spec.md](../agent-prompts/WS-09-medp-spec.md), [ARCHITECTURE.md](../ARCHITECTURE.md), [docs/concepts/domain-packages.md](../docs/concepts/domain-packages.md), and [prototype/control-plane/README.md](../prototype/control-plane/README.md).
- Incorporated merged WS-03, WS-06, and WS-12 outputs from [research/executable-domain-precedents.md](../research/executable-domain-precedents.md), [research/authority-model.md](../research/authority-model.md), and [research/generalization.md](../research/generalization.md), plus their handoffs.
- Wrote [spec/MEDP-v0.md](../spec/MEDP-v0.md) as a deliberately small MEDP v0 descriptor spec with explicit goals, non-goals, trust boundaries, outcome semantics, and v1 evidence thresholds.
- Wrote [spec/medp.schema.json](../spec/medp.schema.json) as a JSON Schema for the descriptor.
- Added valid and invalid package examples under [spec/examples/](../spec/examples/) covering one software package, one organization-policy package, two deployment packages, and two failure cases.

## FILES CHANGED

- [spec/MEDP-v0.md](../spec/MEDP-v0.md)
- [spec/medp.schema.json](../spec/medp.schema.json)
- [spec/examples/dotnet-6-to-10.package.json](../spec/examples/dotnet-6-to-10.package.json)
- [spec/examples/acme-modernization-policy.package.json](../spec/examples/acme-modernization-policy.package.json)
- [spec/examples/azure-container-apps.package.json](../spec/examples/azure-container-apps.package.json)
- [spec/examples/aws-ecs.package.json](../spec/examples/aws-ecs.package.json)
- [spec/examples/invalid-self-authorizing.package.json](../spec/examples/invalid-self-authorizing.package.json)
- [spec/examples/invalid-policy-scope.package.json](../spec/examples/invalid-policy-scope.package.json)
- [WORKSTREAMS.md](../WORKSTREAMS.md)
- [structured/workstreams.json](../structured/workstreams.json)
- [agent-output/WS-09-handoff.md](./WS-09-handoff.md)

## KEY FINDINGS

- **INFERRED:** MEDP v0 should be a thin descriptor over native artifacts, not a new rule, policy, or validation DSL.
- **INFERRED:** Authority must stay external. The schema hard-requires `authority.self_authorizing = false` and treats approvals, grants, and exceptions as out of scope.
- **INFERRED:** WS-03 and WS-12 both argue against a universal package claim; the spec therefore keeps deployment, software, and organization-policy packages distinct and first-class.
- **INFERRED:** WS-06's critique of one flattened `legal_moves` concept is addressed by separate fields for observations, capabilities, validation, dependencies, provenance, and required external bindings.

## EVIDENCE

Primary repository inputs:

- [research/executable-domain-precedents.md](../research/executable-domain-precedents.md)
- [research/authority-model.md](../research/authority-model.md)
- [research/generalization.md](../research/generalization.md)
- [ARCHITECTURE.md](../ARCHITECTURE.md)
- [prototype/control-plane/README.md](../prototype/control-plane/README.md)

Validation run:

- `/Users/achim/.copilot/session-state/b128429f-7c54-4eae-a93d-27227693ba1e/files/ws09-jsonschema-venv/bin/python` custom validator over [spec/medp.schema.json](../spec/medp.schema.json) and all [spec/examples/](../spec/examples/) files: passed. The four intended valid examples validated and the two intended invalid examples were rejected.
- `python3` JSON parse check over [structured/workstreams.json](../structured/workstreams.json) and [spec/medp.schema.json](../spec/medp.schema.json): passed.
- `./experiments/scripts/validate-repository.sh`: passed, with the pre-existing `rg` secret-scan flag error still printed by the repository script before its success message.

## WHAT CHANGED MY MIND

The earlier package framing was too close to a universal envelope. WS-03, WS-06, and WS-12 together made the better move much narrower: describe native artifacts, required observations, validation, provenance, and external authority bindings, while refusing to let the package self-grant execution rights or flatten policy into support.

## OPEN QUESTIONS

- Does WS-10 actually need more than this descriptor plus native tools, or will native composition already be sufficient?
- Which result or challenge record, if any, needs its own shared schema after the prototype runs?
- How much of provider-specific execution state has to become explicit before deployment packages stop looking like passive descriptors?

## RECOMMENDED NEXT STEP

Use [spec/MEDP-v0.md](../spec/MEDP-v0.md) and [spec/medp.schema.json](../spec/medp.schema.json) as WS-10 input, but actively try to falsify the descriptor: if native composition plus a tiny adapter layer already delivers the same comparability, provenance, and authority outcomes, keep MEDP small or delete it.

## RISKS / WEAKNESSES

This is still design work over repository evidence, not a runtime benchmark. The examples use illustrative locators and digests rather than live package publication. MEDP v0 intentionally omits approvals, attestation envelopes, registry semantics, control-loop refresh, and challenge records; if WS-10 needs those, the prototype should prove the gap before the spec grows.
