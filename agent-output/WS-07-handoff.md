# WS-07 Handoff

## STATUS

`review` on `agent/ws-07-skills-mcp-taxonomy`, based on publication main at `65e4dd09b7b6b337d6a3eb7190067d486f050948`. Research commit: `d425f2f`, pushed to `publish/agent/ws-07-skills-mcp-taxonomy`. PR: [blackmath88/modernize-domain-architecture#7](https://github.com/blackmath88/modernize-domain-architecture/pull/7), open for orchestrator review. No publication blocker. Only WS-07's outputs and status changed.

## WHAT I DID

Defined twelve composable types covering every requested skill subtype, MCP capability, domain package, policy/package, validator, recipe and agent instruction. Compared knowledge location, computation, ownership, execution, three kinds of portability, three kinds of inspectability, openness and canonical home. Classified twelve examples/hybrids and supplied nine placement rules plus eight proposed classification checks.

## FILES CHANGED

- [research/skills-mcp-domain-taxonomy.md](../research/skills-mcp-domain-taxonomy.md): definitions, two comparison matrices, examples, MCP distinctions, placement rules and recommendations.
- [structured/capability-taxonomy.json](../structured/capability-taxonomy.json): matching types, dimensions, source-backed examples/component edges, rules, checks and source catalog.
- [WORKSTREAMS.md](../WORKSTREAMS.md) and [structured/workstreams.json](../structured/workstreams.json): WS-07 status only.
- [agent-output/WS-07-handoff.md](WS-07-handoff.md): this handoff.

## KEY FINDINGS

- **INFERRED / largest architectural consequence:** Separate interface/deployment graphs from knowledge/execution graphs. A skill, an MCP endpoint, a domain recipe, a policy evaluator and an execution gate are different components even when packaged together.
- **Most commonly conflated:** Skill versus knowledge implementation; MCP contract versus server internals; policy declaration versus enforcement; validator result versus acceptance.
- **DOCUMENTED:** Skills can contain scripts and references. MCP includes resources, prompts, tools and optional client sampling; local servers and nested model use are supported concepts. MCP is not itself intelligence, but calling the entire protocol "just transport" is technically incomplete.
- **INFERRED:** Gateway is a delegation property, not a synonym for remote/proprietary/opaque. Self-contained is a scoped authored-dependency claim, not containment of model expertise or a transparency guarantee.
- **OBSERVED:** The pinned Modernize configuration launches a local stdio process. It does not reveal downstream computation. The team-request skill delegates to a specialist, but the inspected source does not establish that its request tool uses MCP.
- **OPINION:** Reuse native recipes/policy packages and add access adapters only where needed; the taxonomy does not justify a new package standard.

## EVIDENCE

Nineteen primary-source records cover the Agent Skills specification, MCP 2025-11-25, pinned Anthropic skills/helper/licenses, Modernize team-request/configuration, Python SDK tool/prompt/resource handlers, Camel recipes, OpenRewrite, OPA and AGENTS.md documentation. Six repository/sibling-research records are separately identified; prior WS-01/03/06 findings are not treated as independent confirmation.

Validation passed: JSON parsing, twelve unique types with all dimensions, acyclic subtype relations, twelve examples and component edges, resolved references, nine placement rules, eight classification checks with null runtime results, source locators, both matrix rows per type, exact Markdown/JSON example memberships, local links, status isolation and required handoff headings. Editor diagnostics reported no errors. Repository checks returned success but exposed the pre-existing `rg` pattern-argument error, documented in E11; a separate correctly parameterized repository scan passed with no matches. No unrelated validator fix was made.

No referenced skill, MCP server, recipe engine, model evaluation or policy runtime was executed. Only repository/taxonomy checks ran. Operational and semantic portability remain untested; the integrated skill/MCP/Camel/OPA example is explicitly hypothetical.

## WHAT CHANGED MY MIND

Concrete source breaks the explainer's simple local/visible versus gateway/opaque ordering. A bundled helper can execute outside model context, a local server can contain computation, and a server prompt can merely return instructions. Anthropic's repository also explicitly distinguishes open skills from source-available document skills: public access alone cannot settle licensing.

## OPEN QUESTIONS

Which skill hosts preserve activation, permissions and error semantics? What rule/data dependencies exist behind installed Modernize handlers? Can native and agent clients achieve equivalent outcomes under pinned rules without a new envelope? Which inspectability information helps users decide, rather than merely adding fields?

## RECOMMENDED NEXT STEP

WS-09: model publisher, implementation, input facts, dependencies, interface, effects, criteria and adopter authority separately. WS-10: keep a native core and thin access layers; compare native and agent clients with unsupported/denied/missing-input/failed-check cases. WS-11: show contract visibility, implementation visibility and actual-run evidence rather than a single transparency percentage.

## RISKS / WEAKNESSES

Subtypes are analytical working definitions, not official Skills or MCP categories. Self-containment is task-scoped and cannot erase dependence on latent model expertise. Public source is not proof of deployed behavior. MCP baseline is version-pinned; live Skills/OPA/AGENTS documentation can drift. Licensing statements apply only to inspected artifacts, not entire services or dependency graphs. A useful classification does not establish economic value for another platform.
