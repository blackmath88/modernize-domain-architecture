# Workstreams

All workstreams are independently launchable. “Wave” indicates scheduling priority, not a hard dependency. Agents must update their own status here and in `structured/workstreams.json`.

| ID | Workstream | Type | Wave | Priority | Depends on | Main output | Status |
|---|---|---|---|---|---|---|---|
| WS-01 | Modernize Archaeology | research | first | critical | none | `research/modernize-architecture.md` | review |
| WS-02 | Provider Boundary | experiment | first | critical | none | `research/provider-boundary.md` | review |
| WS-03 | OSS Precedents | research | first | critical | none | `research/executable-domain-precedents.md` | review |
| WS-04 | Thesis Red Team | research | first | critical | none | `research/thesis-red-team.md` | review |
| WS-05 | Domain Economics | design | second | high | none | `research/domain-knowledge-economics.md` | review |
| WS-06 | Authority Model | design | first | critical | none | `research/authority-model.md` | ready |
| WS-07 | Skills / MCP / Domain Taxonomy | research | second | high | none | `research/skills-mcp-domain-taxonomy.md` | ready |
| WS-08 | Product Landscape | research | second | high | none | `research/product-value.md` | ready |
| WS-09 | MEDP Spec | design | second | high | none; consume WS-03/06 if available | `spec/MEDP-v0.md` | ready |
| WS-10 | Prototype Core | prototype | first | critical | none | `prototype/control-plane/` | ready |
| WS-11 | Challengeability UX | prototype | second | high | none; consume WS-10 if available | `prototype/ux/` | ready |
| WS-12 | Generalization | synthesis | second | medium | none | `research/generalization.md` | ready |

## First wave

WS-01, WS-02, WS-03, WS-04, WS-06, and WS-10 should launch immediately. WS-10 is deliberately not blocked on research; its narrow implementation should expose assumptions that the research workstreams can challenge.

## Second wave

WS-05, WS-07, WS-08, WS-09, WS-11, and WS-12 can also start independently. They should incorporate first-wave outputs when those become available rather than waiting silently.
