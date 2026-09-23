# Consolidated Assessment Report

Code Assessment Summary

**Assessment Date:** September 23, 2026  
**Components Assessed:** [1](#component-assessment-matrix)

## Dashboard

High-level consolidation assessment of application health and cloud readiness across tech stacks.

| Metric | Value |
|--------|-------|
| Total Components | [1](#component-assessment-matrix) |
| Upgrades Needed | [1](#component-assessment-matrix) |
| Mandatory Blockers | 3 |
| Potential Issues | 6 |

### Technology Distribution

| Framework | Components |
|-----------|-----------|
| Java 8 | [1](#component-assessment-matrix) |
| Spring Boot 2.7.x | [1](#component-assessment-matrix) |

### Effort and Resource Summary

| Effort | Components |
|--------|-----------|
| S | [0](#component-assessment-matrix) |
| M | [0](#component-assessment-matrix) |
| L | [1](#component-assessment-matrix) |
| XL | [0](#component-assessment-matrix) |

## Recommendations

Key architectural decisions and recommended migration sequencing.

> **Important:** These architectural recommendations represent key decision points required to move forward with migration. Review them now to avoid delays.

### Recommended Azure Services

| Dependency | Components | Recommendation | Rationale |
|------------|-----------|----------------|-----------|
| On-Premises Authentication (Spring Security) | 1 | Microsoft Entra ID | Microsoft Entra ID integrates with Spring Security via Azure AD Spring Boot Starter for cloud-native authentication and authorization. |
| Oracle Database | 1 | Azure Database for PostgreSQL | Azure Database for PostgreSQL is a modern, fully managed open-source alternative to Oracle with lower licensing costs and Azure-native integration. |
| Plaintext Credentials | 1 | Azure Key Vault with Managed Identity | Storing credentials in Azure Key Vault with managed identity eliminates plaintext secrets from code, improving security and compliance. |
| Compute | 1 | Azure Kubernetes Service | Target compute platform for application hosting. |

### Recommended Target Platform

| Recommendation | Components | Rationale |
|----------------|-----------|-----------|
| Azure Kubernetes Service | 1 | Tied on mandatory blockers (3), effort, and containerization issues. Preferred platform for container-ready workloads. |

### Recommended Upgrade Path

| Framework | Components | Recommendation | Rationale |
|-----------|-----------|----------------|-----------|
| Java 8 | 1 | Upgrade to Java 25 | Java 25 is the latest LTS version supported by GitHub Copilot Modernization, enabling automated upgrades with minimal manual effort. |
| Spring Boot 2.7.x | 1 | Upgrade to Spring Boot 4.0 | Spring Boot 4.0 is the latest LTS version supported by GitHub Copilot Modernization, enabling automated upgrades with minimal manual effort. |

### Migration Wave Plan

| Phase | Business Apps | Rationale |
|-------|-------------|-----------|
| Wave 1 - Quick Wins | - | Use the smallest in-scope services to define deployment and validation patterns before larger workstreams. |
| Wave 2 - Core Modernization | source | Include integration refactoring as a contained modernization workstream. |
| Wave 3 - Complex Upgrades | - | Plan after shared patterns are established; this wave carries the largest upgrade, validation, and packaging scope. |

### 6R Recommendation

| 6R | Components | Rationale |
|----|------------|-----------|
| Replatform | 1: photo-album | |

## Business App Assessment Matrix

Detailed framework upgrade plan with readiness assessment and migration requirements.

> **Legend:** M = Mandatory, P = Potential, O = Optional

| Business App | Repository | Component | Framework | Recommended Target Platform | Upgrade Recommendation | Issues (M/P/O) | Effort | Decision |
|-------------|------------|-----------|-----------|-----------------|------------------------|----------------|--------|----------|
| source | source | [photo-album](repos/source/report.md) | Java 8, Spring Boot 2.7.x | Azure Kubernetes Service | Upgrade to Java 25, Upgrade to Spring Boot 4.0 | 3/6/1 | L | Blocked |

## Cost Estimate

**Portfolio monthly estimate: ~$95/month**

### source (~$95/month)

| Service | SKU | Monthly Cost | Pricing Model |
|---------|-----|-------------|---------------|
| Microsoft Entra ID | P1 | ~$6 | Per user/month |
| Azure Database for PostgreSQL | Burstable B1ms | $14 | Per vCore/hour |
| Azure Key Vault with Managed Identity | Standard | ~$5 | Per transaction |
| Azure Kubernetes Service | Standard D2s v3 | $70 | Per node/hour |
| **Total** | | **~$95** | |

> ⚠️ These cost estimates are directional and based on Azure retail pricing using pre-selected SKUs aligned to a baseline dev/test environment. Consumption-based services use assumed default usage volumes. Actual production costs will vary and are likely to change based on application-specific sizing, performance requirements, real-world usage patterns, selected region, reserved instance or savings plan commitments, and enterprise agreement discounts.

---

[Share feedback](https://aka.ms/ghcp-appmod/feedback)
