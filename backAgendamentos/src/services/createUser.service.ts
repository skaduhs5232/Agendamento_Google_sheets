import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

class createUser{
  async execute( email: string, senha: string){
    const userAlreadyExists = await prismaClient.cadastro.findFirst({
      where: {
        email
      }
    })

    if (!email){
      throw new Error("Email incorrect")
    }

    if(userAlreadyExists){
      throw new Error("User already exists")
    }

    const user = await prismaClient.cadastro.create({
      data: {
        email,
        senha
      }
    })

    return user;
  }
}

export { createUser}