import {FastifyRequest, FastifyReply} from "fastify";
import { createUser } from "../services/createUser.service"; 

class createUserController{
  async handle(request: FastifyRequest<{ Body: { email: string; senha: string } }>, reply: FastifyReply){
    const { email, senha } = request.body;

    const createUserService = new createUser()

    const user = await createUserService.execute(email, senha);

    reply.send(user);
  }
}

export { createUserController }