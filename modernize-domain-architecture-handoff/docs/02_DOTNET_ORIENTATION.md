# .NET Orientation for the Hackathon

## What .NET is

.NET is Microsoft's application-development platform.

The common language is **C#**.

A useful analogy:

| Java world | .NET world |
|---|---|
| Java | C# |
| JVM / JDK | .NET runtime / .NET SDK |
| Spring Boot | ASP.NET Core |
| Maven / Gradle | `dotnet` CLI + project files |
| `pom.xml` / `build.gradle` | `.csproj` |
| `java -jar app.jar` | `dotnet run` |

## Files to recognize

- `*.cs` → C# source
- `*.csproj` → .NET project definition
- `*.sln` → solution / multi-project grouping
- `Program.cs` → common application entry point
- `appsettings.json` → application configuration

## Core commands

```bash
dotnet restore
dotnet build
dotnet test
dotnet run
```

## What "healthy project" means

Before modernization:
- project restores dependencies
- project builds
- tests pass
- app starts

After modernization:
- same checks still pass
- intended behavior still works
- migration-specific validation passes
- deployment works

## What to learn, not what to memorize

You do **not** need idiomatic C# expertise for the hackathon.

You do need to understand:
- what project type you are looking at,
- what the modernization tool proposes to change,
- why it proposes the change,
- how the result is validated,
- which changes are risky,
- what evidence proves the migration.

## Recommended 45-minute dry run

1. Install .NET SDK.
2. Clone `Azure-Samples/PhotoAlbum`.
3. Open in VS Code.
4. Find:
   - `.csproj`
   - `Program.cs`
   - `appsettings.json`
   - test project, if present
5. Run:
   ```bash
   dotnet restore
   dotnet build
   dotnet test
   ```
6. Stop. Do not modernize it yet.

The goal is simply to know what a normal .NET project looks like before an agent changes it.
