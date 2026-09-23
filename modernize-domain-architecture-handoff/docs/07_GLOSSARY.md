# Glossary

## .NET
Microsoft application platform.

## C#
Primary language commonly used with .NET.

## ASP.NET Core
Modern .NET web framework.

## `.cs`
C# source file.

## `.csproj`
.NET project definition.

## `Program.cs`
Common application entry point in modern .NET apps.

## MCP
Model Context Protocol.

A protocol that lets a model/agent call external tools/resources.

MCP itself is not the intelligence. The server behind MCP can be thin or can perform substantial computation.

## Agent
LLM-driven component with instructions, tools, and a role.

## Skill
Reusable procedural/domain guidance, commonly encoded as Markdown.

## DAG
Directed Acyclic Graph.

A graph of tasks and dependencies with no cycles.

## IR
Intermediate Representation.

A structured format between interpretation stages.

In Modernize, `report.json` and `tasks.json` can be viewed as early IR-like artifacts.

## Semantic Compiler
Working concept:

> A probabilistic front-end that compiles messy semantic input into typed software primitives.

## Provenance
Information about where a fact/action came from.

Examples:
- USER
- AGENT
- SYSTEM
- GITHUB
- AZURE

## Rulebook
Organization-specific modernization constraints/policies.

## Baseline
Pre-change behavior/state captured so a migrated system can be validated against it.

## Deterministic validation
Checks such as:
- build passes
- tests pass
- schema validates
- deployment succeeds

These constrain probabilistic model output.
