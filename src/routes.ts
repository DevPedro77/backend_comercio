import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';



const router = Router();
//-- Rotas de Criacao de usuários
router.post('/users', new CreateUserController().handle);
//-- Rota de autenticação de usuários
router.post('/login', new AuthUserController().handle);

export default router;