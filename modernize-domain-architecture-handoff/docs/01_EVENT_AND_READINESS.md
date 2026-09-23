# Event + Readiness

## Event

**Agentic AI Hackathon: App modernization with GitHub Copilot**

- Date: Wednesday, 23 September 2026
- Time: 08:45–16:30 CEST
- Venue: Microsoft Office Zurich, The Circle 02, 10th floor, Zürich Airport

## Official learning scope

The lab uses:
- **PhotoAlbum** (.NET)
- **PhotoAlbum-Java** (Spring Boot)

The workshop covers:
- Custom Agents (`.agent.md`)
- Skills (`SKILL.md`)
- MCP (`mcp.json`)
- assess → plan → execute → validate
- Java upgrade
- .NET upgrade
- Azure modernization
- Azure Container Apps deployment

## Formal prerequisites

Required by the event:
- Azure subscription with permission to create resources
- GitHub account
- GitHub Copilot subscription
- VS Code and/or terminal
- Modernize CLI
- Docker Desktop
- Git
- .NET SDK
- Java SDK
- laptop

## Verified local state

### Git / GitHub
- Git: `2.53.0`
- GitHub CLI: `2.98.0`
- GitHub account: `blackmath88`
- GitHub auth: working
- GitHub Copilot entitlement: educational/free
- Copilot CLI: `1.0.86`

### Modernize
- Modernize CLI: `1.0.74`

### Java
- OpenJDK: `21.0.11`

### Azure
- Directory/tenant: Bridge Works / `bridge-work.ai`
- Subscription: `Azure subscription 1`
- Role: **Owner**
- Test resource group successfully created:
  - `hackathon-preflight`

Azure portal resource-group link:

https://portal.azure.com/#@bridge-work.ai/resource/subscriptions/b4f04625-b6fc-4d96-87e8-dde8c71e3ec8/resourceGroups/hackathon-preflight/overview

Subscription ID:

`b4f04625-b6fc-4d96-87e8-dde8c71e3ec8`

## Remaining readiness actions

### Azure CLI

```bash
brew install azure-cli
az login
az account list -o table
az account set --subscription "b4f04625-b6fc-4d96-87e8-dde8c71e3ec8"
az account show -o table
```

Use the `bridge-work.ai` Microsoft identity for Azure.

GitHub remains authenticated separately as `blackmath88`.

### .NET

```bash
brew install --cask dotnet-sdk
dotnet --version
dotnet --info
```

### Docker

```bash
open -a Docker
docker info
docker run --rm hello-world
```

### Java build tooling check

```bash
command -v mvn && mvn --version | head -3 || echo "Maven not installed"
command -v gradle && gradle --version | head -5 || echo "Gradle not installed"
```

### Clone the event sample repos

```bash
mkdir -p ~/dev/microsoft-hackathon
cd ~/dev/microsoft-hackathon

git clone https://github.com/Azure-Samples/PhotoAlbum.git
git clone https://github.com/Azure-Samples/PhotoAlbum-Java.git
```

Do not modernize them before the event; just remove clone/auth friction.
