import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

class matchUser{
  async execute( email: string, senha: string){
    const user = await prismaClient.cadastro.findFirst({
      where: {
        email,
        senha
      }
    })

    if (!user){
      throw new Error("User not found")
    }

    return user;
  }
}

export { matchUser }