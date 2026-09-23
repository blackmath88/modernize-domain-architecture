import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { calculate, fields, sensitivity } from './calculator.mjs';

function fixture(overrides = {}) {
  const parameters = Object.fromEntries(Object.keys(fields).map(key => [key, 0]));
  Object.assign(parameters, {
    consumers: 1, eligible_fraction: 1, labor_usd_hour: 100,
    encode_setup_hours: 10, infer_review_minutes: 6,
    change_growth_factor: 1, price_factor: 1, review_factor: 1,
    infer_error_factor: 1, encode_error_factor: 1, ...overrides
  });
  return { years: 1, parameters };
}

test('low reuse favors inference; high reuse favors encoding at the same assumptions', () => {
  assert.deepEqual(calculate(fixture({ tasks_per_consumer_year: 10 })).savings_usd, [-900, -900]);
  const result = calculate(fixture({ tasks_per_consumer_year: 200 }));
  assert.equal(result.financial_preference, 'encode');
  assert.deepEqual(result.savings_usd, [1000, 1000]);
  assert.deepEqual(result.volume_threshold.tasks_per_consumer_year, [100, 100]);
});

test('uncertainty crossing break-even does not choose a winner', () => {
  const result = calculate(fixture({ tasks_per_consumer_year: [10, 200] }));
  assert.equal(result.financial_preference, 'uncertain');
  assert.deepEqual(result.savings_usd, [-900, 1000]);
});

test('no eligible volume cannot amortize positive encoding investment', () => {
  const result = calculate(fixture({ eligible_fraction: 0, tasks_per_consumer_year: 100000 }));
  assert.equal(result.financial_preference, 'infer');
  assert.equal(result.volume_threshold.tasks_per_consumer_year, null);
});

test('missing, reversed, unknown and nonfinite inputs are rejected', () => {
  for (const value of [[2, 1], NaN, Infinity, undefined, [-1, 1], [1, 2, 3]]) {
    assert.throws(() => calculate(fixture({ tasks_per_consumer_year: value })), /Invalid/);
  }
  assert.throws(() => calculate(fixture({ typo: 1 })), /Unknown/);
  assert.throws(() => calculate({ ...fixture(), years: 1.5 }), /years/);
});

test('sensitivity ranks actual endpoint swings without assigning probabilities', () => {
  const result = sensitivity(fixture({ tasks_per_consumer_year: [10, 200], encode_setup_hours: [9, 11] }));
  assert.equal(result[0].parameter, 'tasks_per_consumer_year');
  assert.equal(result[0].swing_usd, 1900);
});

test('annual prices, review effort and errors change independently', () => {
  const scenario = fixture({ encode_setup_hours: 0, tasks_per_consumer_year: 1, llm_usd_task: 10, price_factor: 0.5,
    review_factor: 0.5, infer_escape_probability: 0.1, infer_error_factor: 0.5, loss_usd_escape: 100 });
  scenario.years = 2;
  assert.deepEqual(calculate(scenario).savings_usd, [45, 45]);
});

test('maintenance change growth, support and adopter integration are charged', () => {
  const scenario = fixture({ consumers: 2, integration_extra_hours_consumer: 3, changes_year: 2,
    change_growth_factor: 2, maintenance_extra_hours_change: 4, support_extra_hours_consumer_year: 1 });
  scenario.years = 2;
  assert.deepEqual(calculate(scenario).savings_usd, [-4400, -4400]);
});

test('upfront costs are not discounted; annual costs and benefits are', () => {
  const result = calculate(fixture({ tasks_per_consumer_year: 200, discount_rate: 1 }));
  assert.deepEqual(result.savings_usd, [0, 0]);
  assert.equal(result.financial_preference, 'uncertain');
});

test('encoded runtime, residual inference, validation and audit use explicit units', () => {
  const result = calculate(fixture({ encode_setup_hours: 0, tasks_per_consumer_year: 1, infer_review_minutes: 0,
    llm_usd_task: 10, encode_llm_fraction: 0.5, infer_validation_usd_task: 2, encode_validation_usd_task: 3,
    infer_audit_minutes: 3, encode_audit_minutes: 0, encode_runtime_usd_task: 1 }));
  assert.deepEqual(result.savings_usd, [8, 8]);
});

test('unsafe encoded behavior can erase savings and probabilities clamp at one', () => {
  const scenario = fixture({ encode_setup_hours: 0, tasks_per_consumer_year: 1, infer_review_minutes: 0,
    encode_escape_probability: 0.6, encode_error_factor: 3, loss_usd_escape: 100 });
  scenario.years = 2;
  assert.deepEqual(calculate(scenario).savings_usd, [-160, -160]);
});

test('common-cause allowance is charged once per year, not once per task', () => {
  const result = calculate(fixture({ tasks_per_consumer_year: 1000, common_loss_extra_usd_year: 500 }));
  assert.deepEqual(result.savings_usd, [8500, 8500]);
});

test('extra volume need not help when encoded per-case cost is greater', () => {
  const result = calculate(fixture({ tasks_per_consumer_year: 1000, encode_review_minutes: 10 }));
  assert.equal(result.financial_preference, 'infer');
  assert.equal(result.volume_threshold.status, 'not_bounded');
});

test('signed differential maintenance supports a cheaper encoded workflow', () => {
  const result = calculate(fixture({ changes_year: 2, maintenance_extra_hours_change: -10 }));
  assert.deepEqual(result.savings_usd, [1000, 1000]);
});

const document = JSON.parse(readFileSync(new URL('./scenarios.json', import.meta.url), 'utf8'));

test('each shipped variable is defined, labeled speculative and source-linked', () => {
  assert.deepEqual(Object.keys(document.assumptions).sort(), Object.keys(fields).sort());
  const sources = new Set(document.sources.map(source => source.id));
  assert.equal(sources.size, document.sources.length);
  for (const assumption of Object.values(document.assumptions)) {
    assert.equal(assumption.classification, 'HYPOTHESIS');
    assert(assumption.unit && assumption.definition && assumption.source_refs.length);
    for (const reference of assumption.source_refs) assert(sources.has(reference));
  }
});

test('three shipped range scenarios exercise infer, uncertain and encode', () => {
  assert.deepEqual(document.scenarios.map(scenario => scenario.name), ['conservative', 'expected', 'aggressive']);
  assert.deepEqual(document.scenarios.map(scenario => calculate(scenario).financial_preference), ['infer', 'uncertain', 'encode']);
});

test('intervals enclose reproducible sampled points and component accounting balances at points', () => {
  for (const scenario of document.scenarios) {
    const bounds = calculate(scenario).savings_usd;
    for (let sample = 0; sample < 32; sample += 1) {
      const parameters = Object.fromEntries(Object.entries(scenario.parameters).map(([key, [low, high]], index) =>
        [key, low + (high - low) * ((sample * 17 + index * 13) % 31) / 30]));
      const result = calculate({ ...scenario, parameters });
      const value = result.savings_usd[0];
      assert(value >= bounds[0] - 1e-7 && value <= bounds[1] + 1e-7);
      const componentSum = Object.values(result.components_usd).reduce((total, component) => total + component[0], 0);
      assert(Math.abs(value - componentSum) < 1e-7);
    }
  }
});

test('CLI loads bundled scenarios independently of the current working directory', () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./calculator.mjs', import.meta.url))], { encoding: 'utf8', cwd: '/' });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(JSON.parse(result.stdout).results.length, 3);
});

test('CLI rejects invalid input rather than emitting plausible results', () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./calculator.mjs', import.meta.url)), '/nonexistent-ws05-scenarios.json'], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /ENOENT/);
});