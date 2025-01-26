import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createUserController } from "./controllers/createUser.controller";
import { matchUserController } from "./controllers/matchUser.controller";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: 'world' }
  })
  fastify.post('/createLogin', async (request: FastifyRequest<{ Body: { email: string; senha: string } }>, reply: FastifyReply) => {
    return new createUserController().handle(request, reply)
  })
  fastify.post('/getLogin', async (request: FastifyRequest<{ Body: { email: string; senha: string } }>, reply: FastifyReply) => {
    return new matchUserController().handle(request, reply)
  })

}