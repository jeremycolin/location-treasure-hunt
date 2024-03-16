import fastify from "fastify";
import { setupDatabase } from "./database";
import { treasureHuntsRoutes } from "./treasure-hunts";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

async function startServer() {
  const server = fastify({ logger: true });
  await server.register(setupDatabase);
  server.register(treasureHuntsRoutes);
  server.listen({ port: PORT }, (err, address) => {
    if (err) {
      console.error(err);
    }
    console.log(`Server listening at ${address}`);
  });
}

startServer();
