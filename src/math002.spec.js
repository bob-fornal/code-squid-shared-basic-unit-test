
import assert from 'assert';
import { sum, subtract } from './math.js';

function math001a() {
  let result, expected;

  result = sum(3, 7);
  expected = 10;
  assert.strictEqual(result, expected);
}
math001a();

function math001b() {
  let result, expected;

  result = subtract(7, 3);
  expected = 4;
  assert.strictEqual(result, expected);
}
math001b();
