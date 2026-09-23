import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const fields = {
  consumers: [1, 1000000],
  tasks_per_consumer_year: [0, 1000000000],
  eligible_fraction: [0, 1],
  labor_usd_hour: [0, 1000000],
  encode_setup_hours: [0, 1000000000],
  infer_setup_hours: [0, 1000000000],
  integration_extra_hours_consumer: [-1000000, 1000000],
  changes_year: [0, 1000000],
  change_growth_factor: [0, 3],
  maintenance_extra_hours_change: [-1000000, 1000000],
  support_extra_hours_consumer_year: [-1000000, 1000000],
  llm_usd_task: [0, 1000000000],
  price_factor: [0, 3],
  encode_llm_fraction: [0, 1],
  infer_review_minutes: [0, 1000000],
  encode_review_minutes: [0, 1000000],
  review_factor: [0, 3],
  infer_validation_usd_task: [0, 1000000000],
  encode_validation_usd_task: [0, 1000000000],
  infer_audit_minutes: [0, 1000000],
  encode_audit_minutes: [0, 1000000],
  infer_escape_probability: [0, 1],
  encode_escape_probability: [0, 1],
  infer_error_factor: [0, 3],
  encode_error_factor: [0, 3],
  loss_usd_escape: [0, 1000000000000],
  encode_runtime_usd_task: [0, 1000000000],
  common_loss_extra_usd_year: [-1000000000000, 1000000000000],
  discount_rate: [0, 1]
};

const interval = value => Array.isArray(value) ? value : [value, value];
const add = (left, right) => [left[0] + right[0], left[1] + right[1]];
const subtract = (left, right) => [left[0] - right[1], left[1] - right[0]];
const multiply = (left, right) => {
  const products = left.flatMap(first => right.map(second => first * second));
  return [Math.min(...products), Math.max(...products)];
};
const power = (value, exponent) => value.map(bound => bound ** exponent);
const probability = value => value.map(bound => Math.min(1, bound));
const sum = values => values.reduce(add, [0, 0]);

export function validate(scenario) {
  if (!Number.isInteger(scenario.years) || scenario.years < 1 || scenario.years > 30) {
    throw new Error('years must be an integer from 1 through 30');
  }
  const parameters = scenario.parameters;
  if (!parameters || typeof parameters !== 'object' || Array.isArray(parameters)) {
    throw new Error('parameters must be an object');
  }
  for (const key of Object.keys(parameters)) {
    if (!Object.hasOwn(fields, key)) throw new Error(`Unknown parameter: ${key}`);
  }
  for (const [key, [minimum, maximum]] of Object.entries(fields)) {
    const bounds = interval(parameters[key]);
    if (bounds.length !== 2 || !bounds.every(Number.isFinite) || bounds[0] > bounds[1] || bounds[0] < minimum || bounds[1] > maximum) {
      throw new Error(`Invalid ${key}: expected ordered finite bounds in [${minimum}, ${maximum}]`);
    }
  }
}

export function calculate(scenario) {
  validate(scenario);
  const parameters = Object.fromEntries(Object.entries(scenario.parameters).map(([key, value]) => [key, interval(value)]));
  const labor = parameters.labor_usd_hour;
  const consumers = parameters.consumers;
  const fixedCost = multiply(labor, add(
    subtract(parameters.encode_setup_hours, parameters.infer_setup_hours),
    multiply(consumers, parameters.integration_extra_hours_consumer)
  ));
  const components = {
    setup: subtract([0, 0], fixedCost),
    inference: [0, 0], review: [0, 0], validation: [0, 0], audit: [0, 0],
    residual_loss: [0, 0], runtime: [0, 0], maintenance: [0, 0], common_loss: [0, 0]
  };
  let volumeSlope = [0, 0];
  let intercept = components.setup;
  const yearly = [];
  for (let year = 0; year < scenario.years; year += 1) {
    const discount = [1 / (1 + parameters.discount_rate[1]) ** (year + 1), 1 / (1 + parameters.discount_rate[0]) ** (year + 1)];
    const eligibleVolume = multiply(consumers, parameters.eligible_fraction);
    const unitSavings = {
      inference: multiply(multiply(parameters.llm_usd_task, power(parameters.price_factor, year)), subtract([1, 1], parameters.encode_llm_fraction)),
      review: multiply(multiply(labor, [1 / 60, 1 / 60]), subtract(multiply(parameters.infer_review_minutes, power(parameters.review_factor, year)), parameters.encode_review_minutes)),
      validation: subtract(parameters.infer_validation_usd_task, parameters.encode_validation_usd_task),
      audit: multiply(multiply(labor, [1 / 60, 1 / 60]), subtract(parameters.infer_audit_minutes, parameters.encode_audit_minutes)),
      residual_loss: multiply(subtract(
        probability(multiply(parameters.infer_escape_probability, power(parameters.infer_error_factor, year))),
        probability(multiply(parameters.encode_escape_probability, power(parameters.encode_error_factor, year)))
      ), parameters.loss_usd_escape),
      runtime: subtract([0, 0], parameters.encode_runtime_usd_task)
    };
    const slope = multiply(multiply(eligibleVolume, sum(Object.values(unitSavings))), discount);
    volumeSlope = add(volumeSlope, slope);
    const maintenance = multiply(labor, add(
      multiply(multiply(parameters.changes_year, power(parameters.change_growth_factor, year)), parameters.maintenance_extra_hours_change),
      multiply(consumers, parameters.support_extra_hours_consumer_year)
    ));
    const fixedAnnual = multiply(add(maintenance, parameters.common_loss_extra_usd_year), discount);
    intercept = subtract(intercept, fixedAnnual);
    for (const [key, value] of Object.entries(unitSavings)) {
      components[key] = add(components[key], multiply(multiply(multiply(eligibleVolume, parameters.tasks_per_consumer_year), value), discount));
    }
    components.maintenance = subtract(components.maintenance, multiply(maintenance, discount));
    components.common_loss = subtract(components.common_loss, multiply(parameters.common_loss_extra_usd_year, discount));
    yearly.push({ year: year + 1, savings_usd: subtract(multiply(slope, parameters.tasks_per_consumer_year), fixedAnnual) });
  }
  const savings = add(intercept, multiply(volumeSlope, parameters.tasks_per_consumer_year));
  const threshold = volumeSlope[0] > 0
    ? { status: 'encode_above', tasks_per_consumer_year: [Math.max(0, -intercept[1] / volumeSlope[1]), Math.max(0, -intercept[0] / volumeSlope[0])] }
    : { status: 'not_bounded', tasks_per_consumer_year: null };
  return {
    name: scenario.name ?? null,
    savings_usd: savings,
    financial_preference: savings[0] > 0 ? 'encode' : savings[1] < 0 ? 'infer' : 'uncertain',
    volume_threshold: threshold,
    components_usd: components,
    yearly,
    interpretation: 'Interval enclosure of conditional cost savings, not a confidence interval or safety approval. Positive favors encoding. Threshold holds consumers and all other assumptions fixed.'
  };
}

export function sensitivity(scenario) {
  validate(scenario);
  const midpoint = Object.fromEntries(Object.entries(scenario.parameters).map(([key, value]) => {
    const bounds = interval(value);
    return [key, (bounds[0] + bounds[1]) / 2];
  }));
  return Object.entries(scenario.parameters).map(([parameter, value]) => {
    const bounds = interval(value);
    const endpointSavings = bounds.map(bound => calculate({ ...scenario, parameters: { ...midpoint, [parameter]: bound } }).savings_usd[0]);
    return { parameter, endpoint_savings_usd: endpointSavings, swing_usd: Math.abs(endpointSavings[1] - endpointSavings[0]) };
  }).sort((left, right) => right.swing_usd - left.swing_usd);
}

async function main() {
  const filename = process.argv[2] ?? new URL('./scenarios.json', import.meta.url);
  const document = JSON.parse(await readFile(filename, 'utf8'));
  if (!Array.isArray(document.scenarios) || document.scenarios.length === 0) throw new Error('Expected a nonempty scenarios array');
  const results = document.scenarios.map(scenario => ({ ...calculate(scenario), sensitivity: sensitivity(scenario) }));
  console.log(JSON.stringify({ classification: 'HYPOTHESIS_INPUTS_WITH_COMPUTED_RESULTS', results }, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}