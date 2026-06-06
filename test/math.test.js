const { test } = require("node:test");
const assert = require("node:assert");
const { add, multiply } = require("../src/math");

test("add", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("multiply", () => {
  assert.strictEqual(multiply(2, 3), 6);
  assert.strictEqual(multiply(-4, 5), -20);
  assert.strictEqual(multiply(0, 7), 0);
});
