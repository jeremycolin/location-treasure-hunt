import fastify from "fastify";
import helmet from "@fastify/helmet";
import { config } from "./config";
import { setupDatabase } from "./database";
import { treasureHuntsRoutes } from "./treasure-hunts";

async function startServer() {
  const server = fastify({ logger: true });
  server.register(helmet);
  await server.register(setupDatabase);
  server.register(treasureHuntsRoutes);
  server.listen({ port: config.PORT }, (err, address) => {
    if (err) {
      console.error(err);
    }
    console.log(`Server listening at ${address}`);
  });
}

startServer();
