import { Router, Request, Response } from 'express';
//-- Importando os controladores
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import {DetailUserControler} from './controllers/user/DetailUserController';

//-- Importando o middleware de autenticação
import { IsAuthenticated } from './middlewares/Auth';


const router = Router();
//-- Rotas de Criacao de usuários
router.post('/users', new CreateUserController().handle);
//-- Rota de autenticação de usuários
router.post('/login', new AuthUserController().handle);

//-- Rota de detalhes do usuário
router.get('/me', IsAuthenticated, new DetailUserControler().handle);

export default router;  