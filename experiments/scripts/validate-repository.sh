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

expected_runs=$(jq '.experiments | length' structured/experiments.json)
test "$expected_runs" -eq 7

secret_pattern='-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|AZURE_CLIENT_SECRET[[:space:]]*='
if command -v rg >/dev/null 2>&1; then
  matches=$(rg -n --hidden -g '!docs/source-notes/**' -g '!.git/**' "$secret_pattern" . || true)
else
  matches=$(grep -ERn --exclude-dir=.git --exclude-dir=source-notes -e "$secret_pattern" . || true)
fi

if test -n "$matches"; then
  printf '%s\n' "$matches"
  echo "Potential secret detected" >&2
  exit 1
fi

echo "Repository validation passed"
