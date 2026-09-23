#!/usr/bin/env sh
set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
cd "$root"

for file in structured/*.json; do
  jq empty "$file"
done

test -f README.md
test -f CURRENT_STATE.md
test -f RESEARCH_THESIS.md
test -f ARCHITECTURE.md
test -f EXPERIMENT_PLAN.md
test -f site/index.html
test -f AGENTS.md
test -f WORKSTREAMS.md
test -f DECISION_LOG.md
test -f structured/workstreams.json
test -f prototype/control-plane/README.md
test -f agent-prompts/ORCHESTRATOR.md
test -f agent-output/README.md

expected_runs=$(jq '.experiments | length' structured/experiments.json)
test "$expected_runs" -eq 7

workstream_count=$(jq '.workstreams | length' structured/workstreams.json)
test "$workstream_count" -eq 12
test "$(grep -c '^| WS-' WORKSTREAMS.md)" -eq 12

required_sections='WORKSTREAM_ID MISSION WHY_THIS_MATTERS QUESTIONS INPUTS_TO_READ TASKS EXPECTED_OUTPUTS BOUNDARIES DEFINITION_OF_DONE HANDOFF_REQUIREMENTS'
for id in $(seq -w 1 12); do
  prompt=$(jq -r --arg id "WS-$id" '.workstreams[] | select(.id == $id) | .prompt' structured/workstreams.json)
  test -n "$prompt"
  test -f "$prompt"
  for section_key in $required_sections; do
    section=$(printf '%s' "$section_key" | tr '_' ' ')
    grep -q "^## $section" "$prompt"
  done
  markdown_status=$(awk -F'|' -v id="WS-$id" '$2 ~ id {gsub(/^[[:space:]]+|[[:space:]]+$/, "", $9); print $9}' WORKSTREAMS.md)
  json_status=$(jq -r --arg id "WS-$id" '.workstreams[] | select(.id == $id) | .status' structured/workstreams.json)
  test "$markdown_status" = "$json_status"
done

test "$(jq '[.workstreams[] | select(.wave == "first")] | length' structured/workstreams.json)" -eq 6
test "$(jq '[.allowed_statuses as $allowed | .workstreams[] | select(.status as $status | ($allowed | index($status)) == null)] | length' structured/workstreams.json)" -eq 0

secret_pattern='-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|AZURE_CLIENT_SECRET[[:space:]]*=|GITHUB_TOKEN[[:space:]]*=[[:space:]]*[^[:space:]]+'
if command -v rg >/dev/null 2>&1; then
  matches=$(rg -n --hidden -g '!.git/**' "$secret_pattern" . || true)
else
  matches=$(grep -ERIn --exclude-dir=.git -e "$secret_pattern" . || true)
fi

if test -n "$matches"; then
  printf '%s\n' "$matches"
  echo "Potential secret detected" >&2
  exit 1
fi

sensitive_files=$(find . -type f -not -path './.git/*' \( -name '.env' -o -name '.env.*' -o -name '*.pem' -o -name '*.key' -o -name '*.p12' -o -name '*.pfx' \) -print)
if test -n "$sensitive_files"; then
  printf '%s\n' "$sensitive_files"
  echo "Sensitive file detected" >&2
  exit 1
fi

echo "Repository validation passed"
