# Architecture Questions to Take into the Hackathon

## Model vs system

1. Which parts of the Modernize architecture are true architectural necessities, and which mainly compensate for current model limitations?
2. If the base model became dramatically better tomorrow, what would you remove?
3. Which parts would stay unchanged?

## Skills vs software

4. How do you decide whether something belongs in:
   - system prompt,
   - `.agent.md`,
   - `SKILL.md`,
   - MCP,
   - deterministic analyzer,
   - validation tooling?

5. Some Skills look close to software procedures. Which Skills do you expect to become typed tools/analyzers over time?

## MCP

6. Which modernization findings are produced algorithmically inside the MCP server?
7. Which are inferred by the LLM?
8. Does the MCP server mainly expose concepts/tools, or does it perform substantial local compute?

## Typed IR

9. Do you see `report.json` / `tasks.json` becoming a stronger typed intermediate representation between assessment, planning and execution?
10. How much does the system re-interpret natural language between phases versus pass typed state forward?

## Rulebook realism

11. Is the rulebook assumed to be canonical truth?
12. How do you model:
   - conflicting rules,
   - scope,
   - exceptions,
   - different authorities,
   - stale policy,
   - local team variation,
   - uncertainty?

13. Could rules carry:
   - owner,
   - authority,
   - effective date,
   - expiry,
   - evidence,
   - exceptions,
   - confidence?

## Architecture break-even

14. At what project complexity does this orchestration outperform:
   - strong coding agent
   - good prompt
   - repo access
   - tests?

15. What dimensions matter more than LOC?
   - dependencies
   - services
   - teams
   - migration risk
   - policy constraints
   - duration
   - auditability

## Upper bound

16. What is the intended modernization unit:
   - repository,
   - application,
   - service,
   - system,
   - business capability?

17. How does the system handle dependencies crossing:
   - repos
   - internal libraries
   - databases
   - shared platforms
   - identity
   - deployment frameworks
   - team boundaries?

18. At what point does repo-centric modernization stop being the right abstraction?

## Validation

19. Where are approvals/gates actually enforced?
20. How does failed validation trigger repair?
21. What is the rollback model?
22. How is provenance represented?
23. What evidence survives into human review?
