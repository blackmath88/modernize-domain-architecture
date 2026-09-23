# Provider Boundary Experiment

This experiment tests where provider-specific assumptions first enter GitHub Copilot Modernize. It uses one fixed source revision, one assessment, and seven fresh planning workspaces whose only intentional difference is the prompt.

## Control

- Source: `https://github.com/Azure-Samples/PhotoAlbum-Java.git`
- Revision: `0d5a4c47fa229c48bd99c625c69f80af5096a091`
- Modernize: `1.0.74+2ef08a34f9dd25079a0528c9f99c6ea8b25de6c6`
- Copilot CLI executable: `1.0.86`; Modernize runtime log: `1.0.57`
- Model selector: `auto`
- Execution: local, non-interactive

The source repository name and owner contain “Azure”; this is a known confounder. The application itself is held constant, so comparisons across A-G remain valid, but this experiment cannot distinguish product defaults from source-repository naming effects without a renamed mirror follow-up.

The default assessment completed before any A-G prompt was submitted. All seven plan invocations were then blocked by Copilot quota exhaustion. Their process exit code was `0`, but none produced `plan.md` or `tasks.json`; the raw logs and missing artifacts, rather than the success banner, determine their status.

## Run

```bash
./experiments/provider-boundary/run-controlled-plans.sh ../PhotoAlbum-Java
```

The script refuses a source revision other than the pinned commit. It creates disposable clones outside the repository, captures a shared assessment under `raw/shared-assessment/`, and captures each plan run under `raw/run-<ID>/`. It does not execute generated plans, transformations, deployments, or cloud-resource operations.

## Upgrade-only probe

`upgrade-only-assess.yml` is a falsification probe using the public assessment field names. The CLI accepted it and returned exit code `0`, but the raw report still declared both `java-upgrade` and `cloud-readiness` and retained all three Azure compute targets. This establishes that the probe did not suppress provider shaping; it does not establish whether the file shape was fully valid because Modernize `1.0.74` emitted no effective-config or unknown-field diagnostic.

## Evidence policy

- Files under `raw/` are generated evidence. Do not hand-edit them.
- `run.log`, `exit-code.txt`, source-state files, and generated `.github/modernize` artifacts are retained.
- Credentials and cloud authentication state are not collected.
- A missing artifact is evidence of absence only for this invocation, not proof that the product can never generate it.
