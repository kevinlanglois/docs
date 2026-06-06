const mysql = require("mysql2/promise");
const { createClient } = require("redis");

async function checkDatabase() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "app",
  });
  const [rows] = await conn.query("SELECT 1 AS ok");
  await conn.end();
  return rows[0].ok === 1;
}

async function pingCache() {
  const client = createClient({
    url: process.env.REDIS_URL || "redis://cache:6379",
  });
  await client.connect();
  try {
    const reply = await client.ping();
    return reply === "PONG";
  } finally {
    await client.quit();
  }
}

module.exports = { checkDatabase, pingCache };
