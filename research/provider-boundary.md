# Provider Boundary: Controlled Modernize Experiment

## Result in one sentence

**OBSERVED:** In Modernize `1.0.74`, provider-shaped knowledge first appears in the raw AppCAT assessment report, before any A-G planning prompt; whether planning honors Azure, AWS, neutral, or preserve-hosting intent remains untested because every planning invocation was quota-blocked before producing a plan.

## What was controlled

The experiment used one clean revision of `Azure-Samples/PhotoAlbum-Java` (`0d5a4c47fa229c48bd99c625c69f80af5096a091`), Modernize `1.0.74`, local execution, model selector `auto`, one shared assessment, and seven fresh planning clones. Only the planning prompt varied. No plan was executed.

The source owner and repository name contain `Azure`. That is a material confounder: the A-G comparison remains controlled, but the observed assessment defaults cannot be attributed exclusively to product configuration without a renamed or independently sourced application control.

## Earliest observed provider entry

The assessment command supplied no provider target. Its raw AppCAT report nevertheless contains:

- domains `java-upgrade` and `cloud-readiness`;
- targets `azure-appservice`, `azure-aks`, and `azure-container-apps`;
- capability `openjdk25`;
- 10 rules, 31 incidents, and effort 196;
- six Cloud Readiness findings and four Upgrade Readiness findings in the CLI summary.

The raw engine report and canonical report have the same SHA-256 digest, `36dde66ac75bce7658b25a0d13ac9c12c3f451c4266a639e6e850b4e4c3d7bf1`. Provider metadata therefore exists at the engine-output boundary; it was not added by later report aggregation.

Triggered rules mix relatively portable upgrade observations with Azure-target mappings. Examples include `spring-framework-version-01000` alongside `azure-database-microsoft-oracle-07000`, `spring-boot-to-azure-port-01000`, and `spring-boot-to-azure-restricted-config-01000`. This supports a layered interpretation more strongly than either “fully neutral core” or “nothing but an Azure funnel.”

## Stage-by-stage evidence

| Stage | Result | Earliest provider-shaped artifact |
|---|---|---|
| Assessment configuration | Provider-shaped defaults observed | Effective raw metadata selects Azure targets and Cloud Readiness |
| Raw findings | Provider-shaped findings observed | AppCAT `report.json` contains Azure-target severities and Azure rule IDs |
| Canonical report | Same result as raw engine output | Byte-identical canonical `report.json` |
| Planning A-G | Blocked | None; no plan artifact exists |
| Tasks | Not reached | None observed |
| Transformation | Not reached | None observed |
| Infrastructure as code | Not reached | None observed |
| Validation/deployment | Not reached | None observed |

## Falsification attempts

### User-selectable domains weaken the strongest funnel claim

**DOCUMENTED:** Microsoft describes Upgrade and Cloud Readiness as separately selectable assessment domains and defines Cloud Readiness as Azure target-platform fit. That means Azure specificity in the selected Cloud Readiness domain is named product behavior, not a hidden provider-neutral concept being reinterpreted later. It also means the claim that Azure shaping is necessarily unavoidable is not established by the default run.

### Upgrade-only file probe did not remove Azure shaping

An explicit `--assess-config` probe requested only `java-upgrade`, issue-only coverage, and `openjdk25`. Modernize accepted the file, exited `0`, and generated a report, but the result still declared both domains and the three Azure targets. It was substantively equivalent to the default assessment aside from ordering, generated incident IDs, and timestamps.

**INFERRED:** Either this CLI version ignored an unsupported or differently shaped `domains` field without warning, or its non-interactive configuration path did not honor domain restriction. Because the CLI did not expose an effective configuration or schema-validation message, this probe cannot distinguish those explanations. It does not prove that interactive domain selection is ineffective.

### Symmetry test was blocked

Runs A-G each invoked `create-modernization-plan` and then encountered the same monthly quota error. Each process exited `0` and printed a success message, but none generated `plan.md` or `tasks.json`. The success banner is therefore not valid completion evidence.

No comparison can be made between Azure, AWS, provider-neutral, cloud-unspecified, upgrade-only, or preserve-hosting planning behavior. Treating the absence of provider-specific plans as neutrality would be a category error: there were no plans.

## Thesis impact

**Strengthens, narrowly:** Azure assumptions are present before explicit provider selection in the observed default assessment, and assessment findings are parameterized around Azure targets.

**Weakens the broad version:** Provider-specificity is attached to an explicitly Azure-defined Cloud Readiness domain that documentation says users can select separately. The assessment also contains portable runtime and framework facts.

**Inconclusive:** Native symmetry across Azure, AWS, GCP, provider-neutral, and preserve-current-hosting requests; provider influence on plans, tasks, code, infrastructure, or validation; and whether a correctly configured upgrade-only non-interactive assessment is provider-neutral.

The defensible conclusion is not “Modernize is an Azure funnel.” It is: the observed default assessment combines portable upgrade knowledge with an Azure-target cloud-readiness package before planning, while later provider-choice behavior remains unknown.

## Evidence

- Default raw report: `experiments/provider-boundary/raw/shared-assessment/generated-modernize/assessment/engines/appcat/result/report.json`
- Default command and log: `experiments/provider-boundary/raw/shared-assessment/command.txt`, `run.log`
- Upgrade-only probe: `experiments/provider-boundary/upgrade-only-assess.yml`, `raw/upgrade-only-assessment/`
- A-G prompts: `experiments/provider-boundary/prompts.json`
- A-G raw records: `experiments/provider-boundary/raw/run-A/` through `run-G/`
- Product documentation: <https://learn.microsoft.com/en-us/azure/developer/github-copilot-app-modernization/modernization-agent/batch-assess>

## Next discriminating experiment

Run two controls after quota recovery: first, select only Upgrade through the documented interactive flow and capture the effective report metadata; second, repeat on a renamed mirror or non-Azure sample. Then rerun A-G using an assessment whose provider posture is known. This separates product defaults, repository naming, assessment-domain selection, and prompt-dependent planning.