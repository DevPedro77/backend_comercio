import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";
import cors from 'cors';
import path from 'path';

import router from './routes';

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware para analisar o corpo das requisições como JSON
app.use(cors()); // qualquer origem pode acessar a API

app.use(router); // Importando as rotas do arquivo routes.ts
app.use(
  "./files",
  express.static(path.resolve(__dirname, "..", "temp"))
)

// Middleware para tratamento de erros, mais amigável
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});

// Iniciando o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);