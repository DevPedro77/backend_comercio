import prismaClient from "../../prisma"


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

    // criar o usuário
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password
      },
      // selecionar os campos que queremos retornar
      // para não retornar o password
      // e não expor informações sensíveis
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