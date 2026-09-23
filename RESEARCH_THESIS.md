# Research Thesis

## Main question

If stable language, framework, provider, and organizational knowledge can be represented as portable machine-executable domain infrastructure, where does the proprietary value of GitHub Copilot Modernize actually live?

## Current thesis

**Hypothesis:** GitHub Copilot Modernize combines relatively portable application-modernization knowledge with an opinionated Azure-target modernization path.

**Inferred:** A useful decomposition separates community knowledge, provider knowledge, organization policy, user intent, orchestration, LLM inference, execution, and deterministic validation. A product can integrate these layers without owning all knowledge within them.

**Opinion:** Build software with LLMs, not software out of LLMs. Type the parts of a domain encountered often enough that the cost of ambiguity exceeds the cost of encoding them.

## Alternative explanations

1. **Proprietary-domain explanation:** Most useful modernization expertise may be inaccessible product knowledge, making portable packages a weak substitute.
2. **Harness-dominant explanation:** Reliable orchestration, evaluation, retry, and integration may matter far more than the portability of individual rules.
3. **Neutral-core explanation:** Provider-specific choices may remain late and explicit, with assessment and planning mostly provider-neutral.
4. **Model-dominant explanation:** The model may perform essential contextual reasoning that cannot be economically represented as reusable rules and transformations.
5. **Ecosystem explanation:** Product value may primarily come from distribution, trust, support, and accumulated operational feedback rather than unique technical knowledge.

## Falsification criteria

The current thesis weakens if evidence shows that:

- Azure, AWS, GCP, and provider-neutral targets are evaluated natively and symmetrically;
- assessment and planning remain neutral until a user explicitly selects Azure;
- the decisive modernization knowledge is proprietary and cannot reasonably be reproduced from public rules, analyzers, and recipes;
- provider expertise cannot be separated from the harness without losing essential behavior; or
- model-mediated decisions dominate even for stable, repeated migration cases.

It strengthens if evidence shows that:

- Azure assumptions enter before explicit provider selection;
- assessment findings or plans are parameterized around Azure targets;
- alternate providers are outside the native decision space;
- open analyzers and recipes reproduce generic language/framework findings; and
- provider transformations form a distinct, replaceable layer.

## Unresolved questions

- What is the first artifact containing provider-specific assumptions?
- Which Modernize stages produce typed outputs, and which preserve provenance?
- What is enforced by deterministic tools versus suggested by an LLM?
- What policy can an organization rulebook override?
- Can one neutral observation set be evaluated against multiple provider packages?
- What minimum contract makes a domain package portable across harnesses?

## Terminology

- **Domain knowledge:** stable language, framework, compatibility, transformation, and validation knowledge.
- **Provider knowledge:** target-platform mappings and constraints for services, identity, compute, data, networking, and operations.
- **Organization policy:** local standards, controls, exceptions, and approved technologies.
- **User intent:** the requested outcome, priorities, and explicit constraints for one run.
- **Harness:** state, planning, execution, approval, retry, provenance, and UX machinery.
- **LLM inference:** probabilistic interpretation or synthesis where typed knowledge does not resolve ambiguity.
- **Deterministic validation:** reproducible checks such as builds, tests, policy rules, and artifact validation.
- **Domain package:** a portable bundle of observations, rules, legal transitions, transforms, knowledge, and verification.
