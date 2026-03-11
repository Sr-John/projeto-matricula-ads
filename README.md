# 🎓 Sistema de Matrícula Online - Projeto ADS

Este é um projeto **Full Stack** desenvolvido como parte do Trabalho de Disciplina (TD) do curso de **Análise e Desenvolvimento de Sistemas** na Universidade Veiga de Almeida. O objetivo é simular um portal de matrículas onde o aluno pode visualizar cursos disponíveis e realizar a sua inscrição.

## 🚀 Tecnologias Utilizadas

### Backend (Servidor)
* **Node.js** com **TypeScript** para maior segurança e tipagem de dados.
* **Express** para a criação das rotas da API.
* **CORS** para permitir a comunicação segura com o Frontend.

### Frontend (Interface)
* **Vue.js 3** (Composition API) para uma interface reativa e moderna.
* **Vite** para um ambiente de desenvolvimento rápido.
* **CSS3** com foco em usabilidade e feedback visual.

## 🛠️ Funcionalidades
- [x] Listagem dinâmica de cursos consumindo API (Endpoint: `GET /cursos`).
- [x] Formulário de matrícula com validações (Endpoint: `POST /matricula`).
- [x] Feedback visual para o utilizador (Mensagens de sucesso/erro e estados de carregamento).

## 📦 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Sr-John/projeto-matricula-ads.git](https://github.com/Sr-John/projeto-matricula-ads.git)



   cd backend
   npm install
   npm run dev

   cd frontend
   npm install
   npm run dev



Desenvolvido por João Pedro como parte do percurso académico em ADS.
