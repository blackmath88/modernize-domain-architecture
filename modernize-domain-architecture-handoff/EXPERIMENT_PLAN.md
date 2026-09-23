# Experiment Plan — Where Does Azure Enter Modernize?

## Objective

Determine where provider-specific assumptions enter the GitHub Copilot Modernize workflow and distinguish portable modernization knowledge from Azure-specific platform knowledge.

## Experimental principle

Use the **same source application** and vary only the requested target/intent.

## Run matrix

1. Language/framework upgrade only
2. General modernization; no cloud target
3. Cloud modernization; provider unspecified
4. Azure-targeted modernization
5. Explicit provider-neutral modernization
6. AWS-targeted modernization
7. Preserve current deployment environment

## Capture for each run

- exact prompt / command
- Modernize version
- Copilot/runtime/model information if observable
- assessment artifacts
- `report.json`
- `plan.md`
- `tasks.json`
- selected/matched skills
- generated transformations
- infrastructure/deployment artifacts
- validation output
- failures and repair loops
- final diff

## Classification schema

For each important recommendation/change:

- `community_domain_fact`
- `provider_domain_knowledge`
- `organization_policy`
- `user_intent`
- `llm_inference`
- `harness_behavior`
- `deterministic_validation`

Also record:

- stage: `assessment | planning | execution | validation | deployment`
- provider: `neutral | azure | aws | gcp | onprem | unknown`
- evidence type: `observed | documented | inferred | hypothesis`
- source artifact
- confidence

## Key falsification tests

The project hypothesis becomes weaker if:

- Modernize can natively and symmetrically evaluate AWS/GCP/Azure targets;
- most supposedly "provider-specific" decisions actually remain neutral until an explicit Azure request;
- the key modernization intelligence is proprietary and inaccessible rather than derived from public/open domain knowledge;
- the harness performs significant proprietary reasoning that cannot reasonably be separated from provider knowledge.

The project hypothesis becomes stronger if:

- Azure target assumptions enter early without explicit user selection;
- assessment findings are parameterized around Azure target platforms;
- AWS/GCP are outside the native decision space;
- generic language/framework facts can be reproduced by open analyzers/recipes;
- provider-specific transformations form a clearly separable layer.

## Deliverable

Produce an evidence-backed architecture diagram and a short conclusion distinguishing:

1. portable modernization intelligence,
2. provider-specific intelligence,
3. organization/user-specific constraints,
4. orchestration/product value.
