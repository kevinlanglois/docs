const { test } = require("node:test");
const assert = require("node:assert");
const { checkDatabase } = require("../src/health");

test("database is reachable", async () => {
  assert.strictEqual(await checkDatabase(), true);
});
