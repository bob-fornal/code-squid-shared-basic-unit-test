
import { sum, subtract } from './math.js';

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not ${expected}`);
      }
    }
  };
}

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`✘ ${title}`);
    console.log(error);
  }
}

function math001a() {
  let result, expected;

  result = sum(3, 7);
  expected = 10;
  expect(result).toEqual(expected);
}
// math001a();

function math001b() {
  let result, expected;

  result = subtract(7, 3);
  expected = 4;
  expect(result).toEqual(expected);
}
// math001b();

function testSuite() {
  test('sum adds numbers', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toEqual(expected);
  });

  test('subtract substracts numbers', () => {
    const result = subtract(3, 7);
    const expected = 4;
    expect(result).toEqual(expected);
  });
}
testSuite();
