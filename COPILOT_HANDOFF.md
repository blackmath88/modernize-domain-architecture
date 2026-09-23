# Copilot Handoff

Start with `CURRENT_STATE.md`, then read `RESEARCH_THESIS.md`, `ARCHITECTURE.md`, and `EXPERIMENT_PLAN.md`. These files are the canonical synthesis. The verbatim supplied corpus remains under `docs/source-notes/`.

## Operating rules

- Preserve the distinction between observed, documented, inferred, hypothesis, and opinion.
- Keep raw outputs in `evidence/`; keep interpretation in documentation and structured claim records.
- Never infer provenance when an artifact can establish it.
- Treat community knowledge, provider knowledge, organization policy, user intent, orchestration, LLM inference, and deterministic validation as separate concerns.
- Treat MCP as a protocol, not as the intelligence behind an endpoint.
- Do not assume more determinism is always better; test the cost boundary.
- Do not build a broad modernization framework before the provider-influence experiment yields evidence.
- Keep the visual site and structured JSON aligned with the canonical Markdown model.
- Never commit credentials, tokens, private keys, `.env` contents, or cloud authentication state.

## Current task

Run experiment A first, using `experiments/runbooks/RUN_TEMPLATE.md`, then validate whether the capture format is sufficient before running the remaining intents.