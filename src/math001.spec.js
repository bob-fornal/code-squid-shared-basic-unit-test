
import { sum, subtract } from './math.js';

function math001a() {
  let result, expected;

  result = sum(3, 7);
  expected = 10;
  if (result !== expected) {
    throw new Error(`${result} is not ${expected}`);
  }
}
math001a();

function math001b() {
  let result, expected;

  result = subtract(7, 3);
  expected = 4;
  if (result !== expected) {
    throw new Error(`${result} is not ${expected}`);
  }
}
math001b();
