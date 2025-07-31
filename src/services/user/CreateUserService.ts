import prismaClient from "../../prisma"
import {hash} from 'bcryptjs'

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if(!email){
      throw new Error("Email incorreto");
    }

    
    // verificar se o email já está cadastrado
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })
// se o usuário já existe, lançar um erro
    if(userExists){
      throw new Error("Usuário já cadastrado");
    }

    // criptografar a senha
    const passwordHash = await hash(password, 8);
  

    // criar o usuário
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash
      },
      // selecionar os campos que queremos retornar
      select: {
        id: true,
        name: true,
        email: true
      }
    })



    return user;
  }
}


export { CreateUserService };