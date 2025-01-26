import { FastifyRequest, FastifyReply } from "fastify";
import { matchUser } from "../services/matchUser.service";

class matchUserController {
  async handle(request: FastifyRequest<{ Body: { email: string; senha: string } }>, reply: FastifyReply) {
    const { email, senha } = request.body || {};

    if (!email || !senha) {
      return reply.status(400).send({ error: "Email e senha são obrigatórios" });
    }

    const matchUserService = new matchUser();

    try {
      const user = await matchUserService.execute(email, senha);
      reply.send({ success: true, user });
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
      reply.status(404).send({ success: false, message: errorMessage });
    }
  }
}


export { matchUserController }