const { test } = require("node:test");
const assert = require("node:assert");
const { checkDatabase, pingCache } = require("../src/health");

test("database is reachable", async () => {
  assert.strictEqual(await checkDatabase(), true);
});

test("cache responds to ping", async () => {
  assert.strictEqual(await pingCache(), true);
});
