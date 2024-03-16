import fastifyPlugin from "fastify-plugin";
import pastifyPostgres from "@fastify/postgres";

export const setupDatabase = fastifyPlugin(async (fastify, options) => {
  // wait for railway to set up private network
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    await fastify.register(pastifyPostgres, {
      connectionString: process.env.DATABASE_PRIVATE_URL,
    });

    await fastify.pg.query(`
    CREATE TABLE IF NOT EXISTS treasure_hunts (
    id SERIAL NOT NULL PRIMARY KEY,
    created_by VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    treasure_hunt JSON NOT NULL);
  `);
  } catch (error) {
    console.error("Unable to setup database", error);
  }
});
