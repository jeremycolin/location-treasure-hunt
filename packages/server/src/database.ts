import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../../../.env") });
import fastifyPlugin from "fastify-plugin";
import pastifyPostgres from "@fastify/postgres";

export const setupDatabase = fastifyPlugin(async (fastify, options) => {
  await fastify.register(pastifyPostgres, {
    connectionString: process.env.PG_CONNECTION_STRING,
  });

  await fastify.pg.query(`
    CREATE TABLE IF NOT EXISTS treasure_hunts (
    id SERIAL NOT NULL PRIMARY KEY,
    created_by VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    treasure_hunt JSON NOT NULL);
  `);
});
