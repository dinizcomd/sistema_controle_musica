# 🎵 Sistema de Controle de Músicas (CLI em TypeScript)

Um sistema de linha de comando (terminal) desenvolvido em **TypeScript** e **SQLite**, que permite:

- Cadastrar músicas (nome, banda e produtora)
- Pesquisar por nome, banda ou produtora
- Listar todas as músicas cadastradas
- Armazenar tudo em um banco SQLite persistente (mesmo com Docker)

---

## 📁 Estrutura do Projeto

sistema_controle_musica/
├── data/ # Banco de dados persistente (musicas.db)
├── src/
│ ├── index.ts # Interface CLI / menu principal
│ ├── database.ts # Configuração do SQLite
│ └── musicModel.ts # Funções de cadastro e consulta
├── package.json
├── tsconfig.json
├── Dockerfile
└── README.md

yaml
Copiar código

---

## 🛠️ Rodar Localmente (sem Docker)

```bash
npm install
npx tsc
node dist/index.js
O menu será aberto diretamente no terminal.

🐋 Rodar com Docker (modo interativo + banco persistente)
bash
Copiar código
mkdir data
docker build -t sistema_controle_musica .
docker run -it --rm -v ${PWD}/data:/app/data sistema_controle_musica
Explicação:

Cria o banco musicas.db dentro da pasta data/

Mantém os dados mesmo após fechar o container

🧩 Usando Docker Compose (recomendado)
Crie um arquivo docker-compose.yml (veja abaixo) e rode:

bash
Copiar código
docker compose up
Assim o volume é gerenciado automaticamente e o banco é persistente.

⚙️ Arquivo docker-compose.yml
yaml
Copiar código
version: '3.8'
services:
  musicas:
    build: .
    container_name: sistema_controle_musica
    volumes:
      - musicas_data:/app/data
    stdin_open: true
    tty: true

volumes:
  musicas_data:
🎯 Menu de Opções
Opção	Função
1	Cadastrar música
2	Pesquisar por nome
3	Pesquisar por banda
4	Pesquisar por produtora
5	Listar todas as músicas
0	Sair do sistema

