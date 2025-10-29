Sistema de Controle de Músicas

Aplicação em TypeScript para cadastro e consulta de músicas pelo terminal.

Funcionalidades:
- Cadastrar música (nome, banda, produtora)
- Pesquisar por nome, banda ou produtora
- Listar todas as músicas
- Banco de dados SQLite persistente

Como executar com Docker:
1. docker build -t sistema_musica_cli .
2. docker run -it --rm -v ${PWD}/data:/app/data sistema_musica_cli

Como executar sem docker: 
1. npm install
2. npx tsc
3. node dist/index.js


nomes:

Matheus Almeida Diniz RA: 2506636
Murilo Matos Cornacini RA: 2506560
Luciano Do Nascimento Simonato RA: 2503990
Maria Eduarda De Morais RA: 2508726
