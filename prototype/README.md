# Prototype Workspace

This directory is reserved for narrow demonstrators that test the research architecture. It must not become a general agent runtime or a replacement for GitHub Copilot Modernize.

The first prototype is the provider-neutral modernization control plane under `control-plane/`. Supporting prototypes may be added by their assigned workstreams:

- `economics-calculator/` — WS-05
- `ux/` — WS-11

Prototype code must keep generic process logic separate from software-domain, company-policy, and deployment-domain knowledge. Every deliberate shortcut must be documented and must not be presented as evidence of generality.
