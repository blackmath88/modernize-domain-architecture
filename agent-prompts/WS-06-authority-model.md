# WS-06 — Authority Model

## WORKSTREAM ID

`WS-06`

## MISSION

Investigate whether decision authority, rather than “domain packages,” is the deeper and more useful abstraction.

## WHY THIS MATTERS

Knowledge alone does not explain who may assert facts, choose alternatives, authorize change, override policy, or declare validation successful.

## QUESTIONS

Across `observed fact -> applicable knowledge -> valid alternatives -> choice -> authorization -> transformation -> verification`, who has authority and why? How are conflicts, delegation, override, and accountability represented?

Possible authorities include compiler, analyzer, community, vendor, organization, user, LLM, approver, validator, and runtime.

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `ARCHITECTURE.md`
- `structured/architecture.json`, `structured/provenance.json`
- `docs/concepts/domain-packages.md`
- policy, authorization, decision-rights, provenance, and safety-system precedents

## TASKS

1. Map every transition in the decision chain to candidate authorities.
2. Distinguish epistemic authority, policy authority, execution permission, and verification authority.
3. Model delegation, conflict, override, appeal, and provenance.
4. Test the model against at least three modernization decisions.
5. Compare an authority-first architecture with a package-first architecture.
6. Conclude explicitly whether MEDP is useful, subordinate, or the wrong abstraction.

## EXPECTED OUTPUTS

- `research/authority-model.md`
- `structured/authority-model.json`
- `agent-output/WS-06-handoff.md`

## BOUNDARIES

- This workstream may reject the current thesis or MEDP abstraction.
- Do not reduce authority to RBAC alone.
- Do not claim that provenance automatically confers authority.
- Do not design generic enterprise governance unrelated to modernization decisions.

## DEFINITION OF DONE

- Every decision-chain transition has explicit authority semantics.
- Conflict and override behavior is represented.
- Examples expose where an LLM may advise but not decide.
- JSON parses and can support WS-09 and WS-11.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. State whether authority supersedes packages, the hardest conflict case, and concrete changes recommended for the prototype.
