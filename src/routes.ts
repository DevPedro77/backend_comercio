import { Router, Request, Response } from 'express';
import multer from "multer";
//-- Importando os controladores do Usuario
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import {DetailUserControler} from './controllers/user/DetailUserController';

//-- Importando o middleware de autenticação
import { IsAuthenticated } from './middlewares/Auth';

// -- Importando Multer
import uploadConfig from "../src/config/multer"

//-- Importando o controlador de categoria
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

//-- Importando o controlador dos produtos
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductController } from "../src/controllers/product/ListByCategoryController";

//-- Importando o controlador das Orders
import {CreateOrderController} from "../src/controllers/order/CreateOrderController";
import { DeleteOrderController } from './controllers/order/DeleteOrderController';

const router = Router();
const upload = multer(uploadConfig.upload("./temp"));

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

//-- Rota de criacao de produto
router.post("/product", IsAuthenticated, upload.single("file"), new CreateProductController().handle);
//-- Rota de listar produtos por categoria
router.get("/product/category", IsAuthenticated, new ListProductController().handle)

//-- Rota de criacao de pedidos
router.post("/order", IsAuthenticated, new CreateOrderController().handle)
//-- Rota para deletar ordens
router.delete("/order", IsAuthenticated, new DeleteOrderController().handle)





export default router;  