# WS-07 — Skills / MCP / Domain Taxonomy

## WORKSTREAM ID

`WS-07`

## MISSION

Create a rigorous taxonomy for skills, MCP capabilities, packages, policy, validators, recipes, and instructions.

## WHY THIS MATTERS

Similar user-facing labels can hide radically different knowledge ownership, computation, portability, and inspectability.

## QUESTIONS

How should self-contained skill, procedural skill, gateway skill, tool-backed skill, MCP capability, domain package, policy package, validator, recipe, and agent instruction be distinguished?

For each: Where are knowledge and computation located? Who owns them? Are they portable, inspectable, executable, and open/proprietary? What is the best home: prompt, skill, MCP, code, package, or policy?

## INPUTS TO READ

- `AGENTS.md`, `CURRENT_STATE.md`, `ARCHITECTURE.md`
- `docs/source-notes/root-artifacts/agent-skill-mcp-explainer.html`
- `docs/source-notes/handoff/docs/07_GLOSSARY.md`
- public Skills and MCP specifications/documentation
- WS-01 and WS-03 outputs if available

## TASKS

1. Define necessary and distinguishing characteristics for every required type.
2. Build a comparison matrix using all requested dimensions.
3. Classify representative examples and ambiguous hybrids.
4. Explain when MCP is merely transport and when an MCP server contains domain computation.
5. Provide decision rules for choosing the best home for a capability.

## EXPECTED OUTPUTS

- `research/skills-mcp-domain-taxonomy.md`
- `structured/capability-taxonomy.json`
- `agent-output/WS-07-handoff.md`

## BOUNDARIES

- Do not infer knowledge location from naming alone.
- Do not describe MCP itself as intelligence.
- Do not make every category mutually exclusive if composition is more accurate.

## DEFINITION OF DONE

- All required types and dimensions are covered.
- Classification rules handle hybrids without hand-waving.
- Examples have source links and uncertainty labels.
- JSON parses and mirrors the Markdown taxonomy.
- Required handoff, status updates, validation, and commit are complete; a PR is open or its access blocker is documented.

## HANDOFF REQUIREMENTS

Use the format in `AGENTS.md`. Identify the most commonly conflated categories and the taxonomy change with the largest architectural consequence.
