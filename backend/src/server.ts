import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Rota GET /cursos - Requisito do seu TD
app.get('/cursos', (req: Request, res: Response) => {
  const cursos = [
    { id: 1, nome: 'JavaScript para Iniciantes' },
    { id: 2, nome: 'Vue.js Avançado' },
    { id: 3, nome: 'Node.js com TypeScript' }
  ];
  res.status(200).json(cursos);
});

// Rota POST /matricula - Requisito do seu TD
app.post('/matricula', (req: Request, res: Response) => {
  const { nome, email, curso } = req.body;
  console.log(`Matrícula recebida: ${nome} - ${curso}`);
  res.status(201).json({ message: 'Matrícula realizada com sucesso!' });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));