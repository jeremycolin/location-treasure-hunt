import fastifyPlugin from "fastify-plugin";

export const treasureHuntsRoutes = fastifyPlugin(async (fastify, options) => {
  fastify.post<{
    Body: { created_by: string; name: string; treasure_hunt: JSON };
  }>("/treasure-hunts", async (request, reply) => {
    try {
      const { rows } = await fastify.pg.query(
        "INSERT INTO treasure_hunts (created_by, name, treasure_hunt) VALUES ($1, $2, $3)",
        [request.body.created_by, request.body.name, request.body.treasure_hunt]
      );
    } catch (err) {
      console.error(err);
    } finally {
      reply.send({ hello: "world" });
    }
  });

  fastify.get<{ Querystring: { name: string } }>(
    "/treasure-hunts",
    async (request, reply) => {
      try {
        console.log(request.query.name);
        const { rows } = await fastify.pg.query(
          "SELECT id, created_by, name, treasure_hunt FROM treasure_hunts WHERE name=$1",
          [request.query.name]
        );
        console.log("rows  ", rows);
      } catch (err) {
        console.error(err);
      } finally {
        reply.send({ hello: "world" });
      }
    }
  );
});
