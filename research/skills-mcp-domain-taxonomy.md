# Skills, MCP and domain capabilities: a compositional taxonomy

## Conclusion

**INFERRED:** These labels classify different things. Instructions describe behavior; skills package agent-facing material; MCP defines an interaction contract; recipes and validators implement operations; policies express constraints; domain packages distribute reusable domain capabilities. They are not competing rungs on a ladder of intelligence.

**Largest architectural consequence:** Separate the **interface/deployment graph** from the **knowledge/execution graph**. Moving a capability behind MCP does not move its rules into the protocol, make it remote, make it proprietary, or make its outputs deterministic. Packaging instructions as a skill does not put all task knowledge in that skill or enforce its instructions.

**OPINION:** Preserve native recipe and policy packages, add skills where agents need discovery/procedure, and add MCP where interoperable agent-facing access is useful. Do not invent a new domain-package format merely to make these components callable.

## Method and evidence boundary

Primary-source review accessed 2026-09-23. Protocol claims refer specifically to **MCP 2025-11-25**, not an assertion that it is the latest revision or that every client implements it. Agent Skills uses its live format specification; concrete skill, SDK and recipe sources are commit-pinned. Public source inspection establishes what is written, not that a deployed instance executes it.

The [structured catalog](../structured/capability-taxonomy.json) mirrors twelve types, the comparison dimensions, twelve examples, nine placement rules and eight classification checks. It is a research taxonomy, not a new interchange standard or executable classifier.

Inputs inspected: [architecture](../ARCHITECTURE.md), [preserved explainer](../docs/source-notes/root-artifacts/agent-skill-mcp-explainer.html), [glossary](../docs/source-notes/handoff/docs/07_GLOSSARY.md), and commit-pinned sibling findings from [WS-01](https://github.com/blackmath88/modernize-domain-architecture/blob/c00617c2f7fd877a17bf65bd3055b8980af7e402/agent-output/WS-01-handoff.md), [WS-03](https://github.com/blackmath88/modernize-domain-architecture/blob/66feef2a91cf87475e349ca5752e38e3a292ba9a/agent-output/WS-03-handoff.md) and [WS-06](https://github.com/blackmath88/modernize-domain-architecture/blob/10d876b9bca7bc23223db4347161daa05fe18bab/agent-output/WS-06-handoff.md). These are inputs, not independent confirmation. Original notes, visuals and canonical synthesis are unchanged.

### Corrections to the existing explainer

**OBSERVED in the supplied HTML:** The explainer associates self-contained skills with high transparency, gateways with low transparency, and assigns illustrative competence percentages. Its closing model places MCP actions after LLM reasoning.

**INFERRED corrections:**

- No measurement method supports those percentages; do not reuse them as evidence.
- A gateway to an open, local analyzer can be more inspectable than a bundled proprietary binary. Location, availability and licensing are separate axes.
- An MCP resource can supply context before model reasoning; a tool can compute during it; sampling can request model reasoning inside server work. There is no single MCP-last pipeline.
- Local/customer-configured instructions are not necessarily customer-owned IP or enforced policy. Model weights can be available or unavailable; the category alone does not settle visibility or ownership.
- Retain "dependency-enriched" as a dependency annotation: local rules may use externally supplied facts. It is not a mutually exclusive skill type, and querying current facts is not necessarily outsourcing the decision rule.

## Unit of classification and measurement

Classify a **specific artifact, capability or operation at a pinned revision and stated task scope**, not a product name. A composite record has separately classified components and explicit `contains`, `invokes`, `serves` or `enforces` edges. Container properties do not automatically propagate to children or back again.

| Dimension | What must be recorded |
| --- | --- |
| Knowledge location | Authored rules/procedures, task facts, model-derived judgment and external rule/data dependencies separately. "Unknown" is valid. |
| Computation | Which process actually evaluates, generates, transforms or checks; host/model, bundled runtime, local server, remote service or downstream engine. A declarative file requires an interpreter. |
| Ownership | Content publisher, implementation maintainer, runtime operator and local adopting authority. A vendor can occupy several roles, but naming does not prove that. |
| Executability | `guidance`, `declarative`, `native_code`, `model_mediated`, or `mixed`; what engine/configuration is required. Executable does not mean deterministic or safe. |
| Portability | **Format:** another consumer can parse/load it. **Operational:** dependencies, permissions, state and runtime work elsewhere. **Semantic:** equivalent inputs/context produce equivalent supported outcomes. One does not prove the next. |
| Inspectability | Contract/text visibility, implementation/rule/data visibility, and actual-run evidence. Source availability does not prove source-to-deployment correspondence or explain every decision. |
| Openness | License and available source for each artifact, dependency, model and service separately. Open protocol does not imply open implementation; source-available does not necessarily mean open source. |
| Best home | Where canonical rules and code belong versus where discovery, access and enforcement belong. Multiple homes may be correct for different components. |

Authority is orthogonal: attribution/provenance identifies a producer; it does not grant local policy, approval or deployment rights. A policy stated in agent context is not a non-bypassable enforcement point.

## Necessary and distinguishing characteristics

K02 and K07 have specification-backed formats/interfaces. The skill subtypes and "domain package" below are **analytical working terms**, not official Agent Skills/MCP categories. All memberships are scoped to the selected unit.

| ID / type | Necessary characteristic and discriminator | Not sufficient / compositional boundary |
| --- | --- | --- |
| K01 Agent instruction | Text intended to guide an agent's role, behavior, method or constraints. | A random document is not an instruction merely because the agent can read it. Instructions need not be a skill, executable code or enforced policy. |
| K02 Skill | For this taxonomy, an Agent Skills bundle: `SKILL.md` with required metadata/body, optional scripts/references/assets, discoverable by a compatible host. | A file called "skill" or an RPC named after a skill is not evidence of this format. Host activation/support still matters. Other products' homonymous constructs require separate mapping. |
| K03 Self-contained skill | K02 whose task-specific authored rules, references and implementation are contained in the inspected bundle for a **declared scope**, with explicit general runtime/input prerequisites. | Not independence from an LLM, OS, libraries or input data; not a claim that a model's tacit expertise has been packaged. Closure is `unknown` until dependencies are inspected. Can also be procedural/tool-backed. |
| K04 Procedural skill | K02 that encodes an ordered or conditional method, handoffs, checks or recovery steps interpreted by the agent. | A list of facts alone does not qualify. A prose workflow is not necessarily a machine-enforced workflow or executable recipe. |
| K05 Tool-backed skill | K02 that explicitly delegates at least one substantive task operation to an identified executable/API/tool. Bundled scripts count. | Ordinary host file loading alone does not qualify. Tool-backed says nothing about tool location, licensing or who owns its domain rules. |
| K06 Gateway skill | K05 whose declared capability depends on an external-to-bundle specialist/engine for the task-specific answer/action, while the skill supplies routing, inputs and result handling. | An imported generic library or a fresh data lookup is not alone a gateway. Local proprietary engines and remote open services both qualify; unknown implementation stays unknown. |
| K07 MCP capability | An exposed MCP operation/resource/prompt under negotiated protocol support; distinguish an advertised protocol feature such as `tools` from one callable tool. | The interface is not the underlying knowledge/engine. A launch config alone does not reveal advertised capabilities. MCP includes resources/prompts and client sampling, not just tool calls. |
| K08 Domain package | Versioned, distributable domain-specific rules/data/operations with an identified consumer contract/engine, reusable without requiring an agent to reinvent their operational semantics. | A prose-only knowledge folder does not meet this narrower machine-executable working definition. It need not use MEDP, contain a binary, own policy, be open, or bundle every validator. |
| K09 Policy | Normative constraints or decision rules governing permitted/required behavior in an identified scope. Can be prose or executable. | Descriptive compatibility facts are not organizational policy. A declared policy is not proof of adoption, authorization or enforcement. |
| K10 Policy package | Versioned/distributable policies and associated data plus loading/evaluation contract. | Distinct from evaluator and enforcement service. Can also be a domain package when it has domain-specific machine-evaluable semantics; not every generic policy example establishes that. |
| K11 Validator | An operation that evaluates a subject against stated criteria and produces scoped results/evidence. | A schema is criteria, not the evaluator; a test checklist is not an executed check. A validator may be model-mediated and fallible, and need not be independent of the transformer. |
| K12 Recipe | A named/configurable machine-interpretable search or transformation operation/composition with known engine semantics and applicability. | A prose "recipe" without executor semantics is guidance/procedure instead. A recipe need not modify code, be deterministic, be a package or grant permission to execute. |

### Matrix A: knowledge, computation, ownership, execution

Each row describes possible architecture, not measured quality. Ownership names are roles, not inferred licenses.

| Type | Knowledge location | Computation | Ownership separation | Executability |
| --- | --- | --- | --- | --- |
| K01 Agent instruction | Prompt/file text; referenced context; model contributes interpretation | Agent host/model; tools only if invoked | Instruction author / host-model operator / adopting user | Guidance, model-mediated |
| K02 Skill | Metadata/body plus optional references/scripts/assets; may depend on external sources | Host activates; model interprets; code/services may run | Bundle publisher / dependency maintainers / host operator | Mixed; Markdown is not a program |
| K03 Self-contained skill | Task-specific authored content within inspected scope/bundle; latent model knowledge remains separate | Model and/or bundled code using declared runtimes | Bundle publisher / runtime-library owners / local operator | Guidance, declarative or code; closure is scoped |
| K04 Procedural skill | Sequence/branches in instructions; facts and operations may be elsewhere | Agent/harness follows steps; external engines do delegated work | Procedure author / orchestrator operator / operation owners | Model-mediated procedure; not enforced by prose alone |
| K05 Tool-backed skill | Local instructions plus tool implementation/data | Host/model plus local script/server or remote service | Skill author / tool author / service operator | Mixed guidance and tool execution |
| K06 Gateway skill | Routing/input rules locally; specialist answer/action logic outside bundle | Agent routes; specialist engine/agent executes; model may appear on either side | Wrapper author / specialist owner / service operator | Delegated; downstream semantics may be unknown |
| K07 MCP capability | Descriptions/schemas/prompt text/context plus separate implementation/backends | Server handler, downstream engine, and possibly client-mediated sampling | Interface publisher / implementation owner / host and service operators | Tool code, resource production or prompt construction; not inherently LLM or deterministic |
| K08 Domain package | Domain rules/recipes/models in package plus declared dependencies | Its compatible interpreter/runtime wherever installed | Domain publisher / engine maintainer / adopting authority | Declarative or native implementation; not necessarily agent-dependent |
| K09 Policy | Normative text/rules and contextual attributes | Human/model interpretation or policy evaluator; enforcement elsewhere | Policy issuer / adopter / evaluator maintainer / enforcer | Guidance or executable decisions |
| K10 Policy package | Policy/data modules, manifests and dependencies | Policy engine; consumer enforces result | Bundle publisher / engine maintainer / deploying organization | Declarative/code via evaluator |
| K11 Validator | Criteria/fixtures/oracle and subject evidence; some judgment may reside in model | Test runner/compiler/policy engine/model evaluator | Criteria owner / verifier maintainer / operator / acceptance owner | Deterministic, stateful or model-mediated check; report which |
| K12 Recipe | Operation logic/composition and applicability, possibly delegated subrecipes | Recipe engine and visitors/helpers/APIs | Recipe author / engine maintainer / execution approver | Interpreted declarative or native operations |

### Matrix B: portability, inspectability, openness, canonical home

F = format, O = operational, S = semantic. None is automatic. C = contract, I = implementation, R = run evidence.

| Type | Portability conditions (F / O / S) | Inspectability limits (C / I / R) | Open/proprietary | Best home |
| --- | --- | --- | --- | --- |
| K01 | Text / host precedence and context / model adherence differs | Text may be visible / model and referenced sources may not / prompt loading and actions need traces | Any; hidden instructions are possible | Prompt or repository instruction for agent conduct, not hard enforcement |
| K02 | Agent Skills format / host activation, tool syntax, runtimes / model/tool behavior may differ | Manifest/body inspectable if distributed / dependencies vary / activation and execution not guaranteed visible | Format does not settle bundle or dependency licenses | Skill as discovery/procedure bundle; stable logic may live in code/package |
| K03 | Bundle format / pinned runtime/input prerequisites / conformance still needed | Closure can be audited / bundled binary may be opaque / actual execution separate | Can be proprietary despite local closure | Skill for scoped guidance; package/code for stable computation |
| K04 | Skill text / available steps/tools / host interpretation and recovery differ | Steps visible / invoked logic may not / no execution proof from checklist | Any | Skill; use workflow code if ordering/retries must be enforced |
| K05 | Skill/tool contracts / tool versions, credentials and platform / tool semantics and model decisions | Wrapper visible / inspect each tool / retain calls, inputs and outputs | Mixed licenses/operators common | Skill adapter plus native tool/code; MCP only if access requires it |
| K06 | Wrapper contract / specialist access and service versions / replaceability needs semantic tests | Wrapper C only / specialist I unknown until inspected / forwarding and downstream trace may be incomplete | Neither remote nor local implies closed/open | Thin skill adapter; keep specialist knowledge in its owning engine/service/package |
| K07 | Negotiated MCP features / transport, auth, state and dependencies / schema parity is not outcome parity | Published definitions/results C / I optional / R depends on host/server logging | Open protocol; implementations/data/models can be closed | MCP facade over code/package/policy, or server-owned implementation |
| K08 | Native artifact/consumer format / engine and domain dependency compatibility / versioned conformance tests | Public contract possible / source/rules may be closed / recipe-to-diff lineage separate | Any; inspect each artifact license | Existing domain package plus native engine, not necessarily a new standard |
| K09 | Text or policy language / jurisdiction and context / different adopters legitimately differ | Rule text may be visible / evaluator and adopted configuration matter / decision and enforcement logs separate | Private policy can run on open engine | Policy under accountable owner; enforced service/CI boundary for must-not-violate rules |
| K10 | Bundle format / evaluator builtins, data and version / policy inputs and adoption must match | Manifest/rules may be visible / engine/configuration separate / signatures do not prove correct decisions | Engine license does not determine bundle license | Policy bundle managed independently of agent prompts |
| K11 | Criteria/result contracts / environment and tool version / same oracle/coverage needed | Criteria and code may be visible / independence separate / per-check evidence required | Any; open test harness can call closed oracle | Test/validation code and fixtures; expose through CLI/library/MCP as needed |
| K12 | Engine recipe schema/API / parser/classpath/dependencies / applicability and side effects must match | Recipe may be visible / visitors/subrecipes may not / actual diff and checks required | Recipe/engine may have different licenses | Native recipe code/YAML within existing library; instruction only selects/explains |

## Reproducible classification procedure

1. **Fix the unit and scope.** Is this a file, bundle, endpoint, policy decision, engine, or whole system? State the revision and supported task. Do not classify all of Modernize from one skill.
2. **Separate representation from role.** Apply K01/K02/K07 to instructions, skill bundles and interfaces; apply K08-K12 only where their respective contracts or functions are evidenced.
3. **Inspect dependency edges.** Record what rules are local, what facts are supplied as input, what computation is delegated, and which edges are not inspectable. A name, description or launch command alone cannot establish the handler.
4. **Assign overlapping skill facets.** K03 concerns scoped closure; K04 procedure; K05 delegation to tools; K06 specialist delegation. Gateway implies tool-backed and skill. Self-contained and tool-backed can coexist when tools/rules are bundled. Gateway and self-contained conflict for the *same* capability scope if a required specialist rule/action is external.
5. **Classify components, not by inheritance from containers.** A policy bundle exposed by a tool is not itself "MCP"; the adapter endpoint is. The recipe selected by a skill does not make the skill text a recipe.
6. **Mark evidence strength.** `DOCUMENTED` contract, `OBSERVED` source artifact, `INFERRED` classification or `HYPOTHESIS` composition. Record unknown properties as null/unknown rather than negative findings.
7. **Do not upgrade evidence.** Reading open source is not observing a run, provenance is not authority, schema-valid output is not semantic correctness, and a success-shaped status is not a complete validator result.

For each example below, memberships are **INFERRED** unless the entire example is explicitly hypothetical. Source statements remain separately labeled in JSON. No referenced skill or MCP server was activated, installed or run for this research.

## Representative examples and hybrids

| ID / unit and source | Classification and knowledge/computation split | Uncertainty or counterexample |
| --- | --- | --- |
| E01 [Anthropic brand skill](https://github.com/anthropics/skills/blob/34040c9c568585f6929bedeaad110ad08f079624/skills/brand-guidelines/SKILL.md), scope: select its listed palette/typography | K02 + K03; authored values/fallback rules are in the file; agent applies them. Body contains K01 instructions. | Closure claimed only for selecting listed values, not rendering an arbitrary document. File mentions fonts/python-pptx; runtime behavior and complete dependency closure not tested. Local [Apache-2.0 terms](https://github.com/anthropics/skills/blob/34040c9c568585f6929bedeaad110ad08f079624/skills/brand-guidelines/LICENSE.txt), not a claim about every skill or model. |
| E02 [Webapp-testing skill and helper](https://github.com/anthropics/skills/tree/34040c9c568585f6929bedeaad110ad08f079624/skills/webapp-testing) | K02 + K04 + K05. Instructions give a decision tree; bundled helper starts servers and invokes a command; agent authors Playwright test logic. | A server-lifecycle helper is not itself an application-correctness validator. Local script execution is not a gateway merely because it uses tools. Test oracle coverage and outcomes not observed. Its [license](https://github.com/anthropics/skills/blob/34040c9c568585f6929bedeaad110ad08f079624/skills/webapp-testing/LICENSE.txt) is Apache-2.0. |
| E03 [Modernize team-request](https://github.com/microsoft/github-copilot-modernization/blob/a9c9469d86e9dc078018e8fb391abc7744088078/plugins/github-copilot-modernization/skills/team-request/SKILL.md), scope: request infrastructure information/change | K02 + K04 + K05 + K06. Local routing/procedure delegates to `InfrastructureExpert` via `request`; instruction includes a provisioning restriction (K09 content). | The external specialist may itself be an agent. Its model/rules/tool chain and the `request` transport are **unknown** here; do not label it MCP just because the plugin also has MCP configuration. MIT covers inspected repository source, not all downstream services. |
| E04 [Modernize MCP launch configuration](https://github.com/microsoft/github-copilot-modernization/blob/a9c9469d86e9dc078018e8fb391abc7744088078/plugins/github-copilot-modernization/mcp.json) | Configuration launches version 1.24.0 of a named package via stdio. It is not itself an exposed K07 operation or K08 domain package. | Establishes a local process entry point, **not** whether computation stays local or which remote services, tools or rules it uses. Internal implementation/license and deployed behavior remain unknown. |
| E05 [Python SDK quickstart `add`](https://github.com/modelcontextprotocol/python-sdk/blob/f1b6589088534632fef92238ee9750951e3c0185/examples/snippets/servers/mcpserver_quickstart.py), tool endpoint | K07. The server handler performs arithmetic directly in Python, not in model context. | Demonstrates server-side computation, not a modernization domain package or LLM call. MIT source; actual deployment unobserved. Arithmetic here does not prove all server tools deterministic. |
| E06 [Same quickstart `greet_user`](https://github.com/modelcontextprotocol/python-sdk/blob/f1b6589088534632fef92238ee9750951e3c0185/examples/snippets/servers/mcpserver_quickstart.py), prompt endpoint | K07; constructs and serves K01 instruction text using local templates. | Constructing a prompt is computation, but not execution of the requested language-model task. No SKILL.md bundle is established by exposing a prompt. |
| E07 [Same quickstart `get_greeting`](https://github.com/modelcontextprotocol/python-sdk/blob/f1b6589088534632fef92238ee9750951e3c0185/examples/snippets/servers/mcpserver_quickstart.py), resource endpoint | K07; produces context dynamically through a server function. | Resources are not necessarily static files or authoritative facts; dynamic computation does not make this a validator or domain recipe. |
| E08 [Camel Upgrade Recipes](https://github.com/apache/camel-upgrade-recipes/tree/35754b69cb0e65d94d985f708d7571913997e7ed), library | K08 containing K12 recipes and test artifacts. Domain mappings live in native recipe resources/code; OpenRewrite/build tooling executes them. | Working-definition domain package, **not MEDP conformance**. README excludes Camel-Quarkus and documents reusable tests. Apache-2.0 library; engine/dependency versions still affect portability. No migration run performed. |
| E09 [OPA bundle mechanism](https://www.openpolicyagent.org/docs/management-bundles) | K10 containing K09 policy/data. OPA evaluates; an application/CI gate must enforce returned decisions. | An OPA engine is not the bundle. An actual domain-specific bundle can also be K08; this generic mechanism alone does not establish its domain, publisher or license. |
| E10 [This repository's AGENTS.md](../AGENTS.md) | K01 + K09: authors specify conduct, publication and secrets constraints; agent/host interprets it. | No Agent Skills metadata/activation contract, so not K02 merely because reusable. Actual enforcement and ownership of all referenced dependencies are not implied by the text. |
| E11 [Repository validation script](../experiments/scripts/validate-repository.sh) | K11 implemented as shell/jq checks over declared repository criteria. | Source and invocation are inspectable. During WS-07 its `rg` pattern is parsed as an option; the script still prints success. That run cannot establish its secret check passed. Supplemental corrected scanning is reported separately; no unrelated fix is made. |
| E12 Hypothetical skill -> MCP -> Camel + OPA + checks | Top-level assembly contains K02/K04/K05/K06 skill, K07 endpoint, K08/K12 recipes, K10/K09 policies and K11 validator. Edges identify each owner and execution process. | **HYPOTHESIS**, grounded in E08/E09 and protocol contracts, not a deployed integration. Adapter portability does not imply rule/engine interchangeability, and an allow decision does not enforce itself. |

The SDK [license](https://github.com/modelcontextprotocol/python-sdk/blob/f1b6589088534632fef92238ee9750951e3c0185/LICENSE) and Modernize [license](https://github.com/microsoft/github-copilot-modernization/blob/a9c9469d86e9dc078018e8fb391abc7744088078/LICENSE) are MIT. Camel's [license](https://github.com/apache/camel-upgrade-recipes/blob/35754b69cb0e65d94d985f708d7571913997e7ed/LICENSE.txt) is Apache-2.0. These are artifact-specific observations. Anthropic's [repository README](https://github.com/anthropics/skills/blob/34040c9c568585f6929bedeaad110ad08f079624/README.md) explicitly distinguishes its open examples from source-available document skills and warns that demonstrated behavior may differ from deployed products.

## MCP: protocol, adapter, computation and model use

**DOCUMENTED:** MCP specifies more than a transport: messages, lifecycle/capability negotiation, resource/tool/prompt interfaces and optional client features such as sampling. Standard transports include stdio and Streamable HTTP. The architecture permits local subprocesses and remote services. Tools are designed as model-controlled, resources application-driven and prompts user-controlled, but the specifications do not mandate a particular UI interaction pattern.

**INFERRED:** "MCP is merely transport" is acceptable shorthand only for **the adapter's domain responsibility**, not a complete technical definition of the protocol:

1. **Thin facade:** A handler translates MCP arguments to an existing engine/API and forwards results. Domain rules live in that engine/data; the facade still computes serialization, access or orchestration behavior.
2. **Domain-bearing server:** A handler directly implements compatibility rules, planning, transformations or policy evaluation. Domain computation lives in the server implementation, not MCP. A caller-visible schema does not reveal which of these implementations is present.
3. **Composed server:** Local orchestration calls package engines, remote registries and other services. Inspect the full dependency chain; server-local entry point is not proof of local knowledge.
4. **Model-mediated server:** A handler can call its own model backend or use negotiated MCP sampling through the client. Sampling allows server-requested generations, including tool-enabled flows where supported. The client retains model-access/control responsibilities. A tool result may therefore be probabilistic despite a JSON schema.
5. **Context/prompt service:** A server can return data or instruction templates with no domain decision made yet. A resource can be computed dynamically. A prompt provider is not automatically a skill publisher.

**Trust limit:** The tool specification treats annotations as untrusted unless from trusted servers; they are not proof of actual read-only behavior. Optional output schemas constrain representation, not truth, domain completeness or action permission. Discovery/version negotiation is not approval to execute. Keep policy/authority enforcement explicit as recommended by WS-06.

## Decision rules: choose canonical home, then access layer

Rules are recommendations, not exclusive deployment prescriptions. Full fields are mirrored as H01-H09 in JSON.

| ID | Condition | Canonical home and access | Verification before relying on it |
| --- | --- | --- | --- |
| H01 | Agent conduct, contextual explanation, one-off judgment | Prompt/repository instruction; reusable task discovery may justify a skill | Inspect what the host actually loads; test adherence. Do not promise hard enforcement. |
| H02 | Repeatable task procedure using existing operations | Skill for discoverability, inputs and interpretation; workflow code if sequencing/retry is mandatory | Check host/tool compatibility, failure paths and whether gates execute rather than merely appear in prose. |
| H03 | Stable repeated search/transform with describable applicability | Native recipe/library; distribute as existing domain package when reuse warrants it; optional skill selector/MCP facade | Pin recipe/engine/dependencies; test applicability, expected/no-op diffs, unsupported inputs and behavior. |
| H04 | Normative constraint that must hold independent of model behavior | Accountable policy owner and policy package/evaluator; separate enforced boundary | Test deny, missing data, exceptions, stale policy and bypass paths. Do not let the agent rewrite its own governing policy. |
| H05 | Acceptance criterion or measurable claim | Validator/test code plus criteria/fixtures; independent owner where risk requires it | Test failed/skipped/error paths and exact output/environment binding; criteria coverage is not universal correctness. |
| H06 | Several compatible agent hosts need discoverable tools/context/prompts | MCP access layer over the chosen code/package/policy service; preserve native CLI/library if useful | Negotiate needed features, auth, result/error shapes; test equivalent domain outcomes separately from protocol conformance. |
| H07 | Dynamic authoritative facts or restricted service-owned expertise | Keep facts/logic in the owning registry/service; use a gateway skill only for routing and result handling | Separate fetched facts from external decision rules; require freshness/provenance and document unavailable internals. MCP is optional. |
| H08 | One local caller, simple stable computation, no discovery requirement | Function, script or native CLI first; do not add MCP or a package registry by default | Test input/output/error behavior and dependencies. Lower integration cost can outweigh speculative portability. |
| H09 | Desired reuse spans adopters with different permissions or models | Share contracts/rules where supported, retain adopter policy/authority separately | Distinguish format, operational and semantic portability; use multiple-client conformance cases and preserve legitimate policy-dependent differences. |

## Classification checks and consequences for the project

Eight proposed classification checks (Q01-Q08) are encoded in JSON, with null runtime results:

- **Q01:** A skill invoking its bundled deterministic script may be both self-contained and tool-backed; it is not automatically a gateway.
- **Q02:** An open local analyzer reached through a thin skill may be a gateway and inspectable; remote/proprietary are not necessary conditions.
- **Q03:** An MCP tool that only returns prompts does not prove domain computation or a packaged skill.
- **Q04:** A policy-as-prose file is policy content plus agent instruction, not demonstrated enforcement.
- **Q05:** Putting the same recipe behind MCP adds an interface node, not a new owner of the recipe's rules.
- **Q06:** Valid tool JSON or a success string does not make a validator's missing/error result pass.
- **Q07:** A tool description/launch config with no handler evidence leaves computation location, knowledge and licensing unknown.
- **Q08:** External runtime-registry facts do not necessarily turn a locally encoded compatibility decision into a gateway; inspect what was delegated.

**Recommended project changes, not edits to other workstreams:**

- WS-09 should model publisher, engine, input-data dependencies, callable interface, execution effects, validation criteria and adopted authority independently. MEDP need not wrap a skill or require MCP.
- WS-10 should keep a native callable core, explicit provider/policy data and thin access adapters. Compare identical rule/engine revisions through a non-agent client and an agent client; record why outcomes differ.
- WS-11 should expose interface visibility, implementation visibility and run evidence separately. Replace a single "transparent" meter with concrete known/unknown provenance and authority.
- The most common conflations are **skill versus knowledge implementation**, **MCP contract versus server internals**, **policy declaration versus enforcement**, and **validator result versus acceptance**.

## Primary-source index

The catalog has exact URLs, revision/access dates and locators. Descriptions here are paraphrases, not archived source copies.

- **S01** [Agent Skills specification](https://agentskills.io/specification): directory/frontmatter, optional scripts/references, compatibility and experimental allowed-tools, progressive disclosure. Format support is not identical across hosts.
- **S02-S07** MCP 2025-11-25 [architecture](https://modelcontextprotocol.io/specification/2025-11-25/architecture), [transports](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports), [tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools), [resources](https://modelcontextprotocol.io/specification/2025-11-25/server/resources), [prompts](https://modelcontextprotocol.io/specification/2025-11-25/server/prompts), [sampling](https://modelcontextprotocol.io/specification/2025-11-25/client/sampling).
- **S08-S11** Pinned Anthropic brand/webapp files, helper and repository/license declarations linked in E01/E02 and the licensing paragraph.
- **S12-S13** Pinned Modernize team-request and MCP configuration/license linked in E03/E04.
- **S14** Pinned Python SDK quickstart and license linked in E05-E07.
- **S15** Pinned Camel README/license linked in E08.
- **S16** [OpenRewrite recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes): search/refactor operations, visitors and declarative composition.
- **S17-S18** [OPA philosophy](https://www.openpolicyagent.org/docs/philosophy) and [bundles](https://www.openpolicyagent.org/docs/management-bundles): decision/evaluator separation and packaged policy/data.
- **S19** [AGENTS.md project README](https://github.com/agentsmd/agents.md/blob/main/README.md): predictable agent-facing context/instructions, not a tool permission mechanism.

## Validation and limits

Validate JSON parsing, type/parent/source references, all comparison dimensions, exact Markdown/JSON type memberships and example IDs, component edges, source locators, local links, status parity and handoff headings. Run repository checks and a separately corrected secret-pattern scan because the existing script's `rg` invocation has an argument error. Do not modify unrelated validation code.

No skill, MCP server, policy engine or migration recipe was executed in WS-07; only this repository's checks and taxonomy integrity checks ran. No operational/semantic portability benchmark was performed. Subtype boundaries are analytical and task-scoped; there is no universal numerical measure of "how much expertise" resides in a component. Public source can differ from a deployed service. The taxonomy improves questions and records unknowns; it does not establish that a new infrastructure layer is necessary.
