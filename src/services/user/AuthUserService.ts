import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken"

interface AuthUserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({email, password}: AuthUserRequest){

    // Verifica se o email e a senha foram informados
    if(!email || !password){
      throw new Error("Email and password are required");
    }
    // Usuário já existe?
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });
    if(!userExists){
      throw new Error("User does not exist");
    }

    // Verifica se a senha está correta
    const passwordMatch = await compare(password, userExists.password);// Compara a senha informada com a senha do usuário no banco de dados
    // Se a senha não bater, lança um erro
    if(!passwordMatch){
      throw new Error("Senha incorreta");
    }

    // Gerar o token de autenticação
    const token = sign(
      {
        name: userExists.name,
        email: userExists.email,
      },
      process.env.JWT_SECRET,
      {
        subject: userExists.id,
        expiresIn: "30d" // O token vai expirar em 30 dias
      }
    );

    return {
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      token: token
    };
  }
}



export { AuthUserService };