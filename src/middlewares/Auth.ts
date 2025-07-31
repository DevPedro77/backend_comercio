import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string; // ID do usuário
}

export function IsAuthenticated(
  req: Request, 
  res: Response, 
  next: NextFunction
){

  // Recebe o token do header
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).end(); // Retorna 401 se o token não for fornecido
  }


 // verifica se o token está no formato correto
  const [, token] = authToken.split(" "); // Divide o token em duas partes: "Bearer" e o token em si

  try {
    // Validar o token
    const { sub } = verify(
      token,
      process.env.JWT_SECRET // Chave secreta para verificar o token

    )as IPayload; // O tipo de retorno é IPayload, que contém o ID do usuário

    console.log(sub);
    return next();

  }catch (err) {
    return res.status(401).end(); // Retorna 401 se o token for inválido
  }



}
