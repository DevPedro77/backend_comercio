import { Router, Request, Response } from 'express';
//-- Importando os controladores do Usuario
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import {DetailUserControler} from './controllers/user/DetailUserController';

//-- Importando o middleware de autenticação
import { IsAuthenticated } from './middlewares/Auth';

//-- Importando o controlador de categoria
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();

//-- Rotas de Criacao de usuários
router.post('/users', new CreateUserController().handle);
//-- Rota de autenticação de usuários
router.post('/login', new AuthUserController().handle);

//-- Rota de detalhes do usuário
router.get('/me', IsAuthenticated, new DetailUserControler().handle);

//-- Rota de criacao de categoria
router.post('/category', IsAuthenticated, new CreateCategoryController().handle);
//-- Rota de listagem de categorias
router.get('/category', IsAuthenticated, new ListCategoryController().handle);

export default router;  