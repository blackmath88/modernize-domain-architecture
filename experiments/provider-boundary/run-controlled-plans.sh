#!/usr/bin/env bash
set -u

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
source_repository=${1:-}
expected_commit="0d5a4c47fa229c48bd99c625c69f80af5096a091"
raw_root="$script_dir/raw"
scratch_root=$(mktemp -d "${TMPDIR:-/tmp}/provider-boundary.XXXXXX")

cleanup() {
  rm -rf "$scratch_root"
}
trap cleanup EXIT

if [[ -z "$source_repository" ]]; then
  printf 'Usage: %s <PhotoAlbum-Java repository path>\n' "$0" >&2
  exit 64
fi

actual_commit=$(git -C "$source_repository" rev-parse HEAD)
if [[ "$actual_commit" != "$expected_commit" ]]; then
  printf 'Expected source commit %s, found %s\n' "$expected_commit" "$actual_commit" >&2
  exit 65
fi

rm -rf "$raw_root"
mkdir -p "$raw_root/shared-assessment"

baseline="$scratch_root/baseline"
git clone --quiet --no-hardlinks "$source_repository" "$baseline"
git -C "$baseline" checkout --quiet "$expected_commit"
git -C "$baseline" rev-parse HEAD > "$raw_root/shared-assessment/source-commit.txt"
git -C "$baseline" status --porcelain=v1 > "$raw_root/shared-assessment/source-status-before.txt"
modernize --version > "$raw_root/shared-assessment/modernize-version.txt"
copilot --version > "$raw_root/shared-assessment/copilot-version.txt"

set +e
modernize assess \
  --source "$baseline" \
  --output-path "$baseline/.github/modernize/assessment" \
  --delegate local \
  --model auto \
  --format markdown \
  --no-tty \
  > "$raw_root/shared-assessment/run.log" 2>&1
assessment_exit=$?
set -e
printf '%s\n' "$assessment_exit" > "$raw_root/shared-assessment/exit-code.txt"
git -C "$baseline" status --porcelain=v1 > "$raw_root/shared-assessment/source-status-after.txt"
if [[ -d "$baseline/.github/modernize" ]]; then
  cp -R "$baseline/.github/modernize" "$raw_root/shared-assessment/generated-modernize"
fi

assessment_report=$(find "$baseline/.github/modernize" -type f -name report.json -print 2>/dev/null | sort | head -1)
if [[ "$assessment_exit" -ne 0 || -z "$assessment_report" ]]; then
  printf 'Assessment failed or produced no report.json; see %s\n' "$raw_root/shared-assessment/run.log" >&2
  exit 66
fi

for run_id in A B C D E F G; do
  run_root="$raw_root/run-$run_id"
  workspace="$scratch_root/run-$run_id"
  mkdir -p "$run_root"
  git clone --quiet --no-hardlinks "$source_repository" "$workspace"
  git -C "$workspace" checkout --quiet "$expected_commit"
  prompt=$(node -e 'const p=require(process.argv[1]); const r=p.runs.find(x=>x.id===process.argv[2]); process.stdout.write(r.prompt)' "$script_dir/prompts.json" "$run_id")
  printf '%s\n' "$prompt" > "$run_root/prompt.txt"
  git -C "$workspace" rev-parse HEAD > "$run_root/source-commit.txt"
  git -C "$workspace" status --porcelain=v1 > "$run_root/source-status-before.txt"
  printf 'modernize plan create <prompt> --source . --assess-file-path <shared-report.json> --plan-name provider-boundary-%s --language java --delegate local --model auto --no-tty\n' "$run_id" > "$run_root/command.txt"

  set +e
  (
    cd "$workspace" || exit 1
    modernize plan create "$prompt" \
      --source . \
      --assess-file-path "$assessment_report" \
      --plan-name "provider-boundary-$run_id" \
      --language java \
      --delegate local \
      --model auto \
      --no-tty
  ) > "$run_root/run.log" 2>&1
  run_exit=$?
  set -e

  printf '%s\n' "$run_exit" > "$run_root/exit-code.txt"
  git -C "$workspace" status --porcelain=v1 > "$run_root/source-status-after.txt"
  git -C "$workspace" diff --binary > "$run_root/final.diff"
  if [[ -d "$workspace/.github/modernize" ]]; then
    cp -R "$workspace/.github/modernize" "$run_root/generated-modernize"
  fi
done