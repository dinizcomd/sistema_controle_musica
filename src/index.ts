import readline from 'readline';
import { initDB } from './database';
import { cadastrarMusica, consultarMusicas } from './musicModel';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function menu() {
  console.log('\n=== SISTEMA DE MÚSICAS ===');
  console.log('1 - Cadastrar música');
  console.log('2 - Pesquisar por nome');
  console.log('3 - Pesquisar por banda');
  console.log('4 - Pesquisar por produtora');
  console.log('5 - Listar todas as músicas');
  console.log('0 - Sair');

  rl.question('Escolha uma opção: ', async (op) => {
    switch(op.trim()) {
      case '1': await cadastrar(); break;
      case '2': await pesquisar('nome'); break;
      case '3': await pesquisar('banda'); break;
      case '4': await pesquisar('produtora'); break;
      case '5': await listarTodas(); break;
      case '0': rl.close(); process.exit(0); break;
      default: console.log('Opção inválida!'); menu();
    }
  });
}

async function cadastrar() {
  rl.question('Nome da música: ', (nome) => {
    if (!nome.trim()) return cadastrar();
    rl.question('Banda: ', (banda) => {
      if (!banda.trim()) return cadastrar();
      rl.question('Produtora: ', async (produtora) => {
        if (!produtora.trim()) return cadastrar();
        const id = await cadastrarMusica({ nome, banda, produtora });
        console.log(`Música cadastrada com sucesso! ID: ${id}`);
        menu();
      });
    });
  });
}

async function pesquisar(campo: 'nome' | 'banda' | 'produtora') {
  rl.question(`Digite o ${campo} para pesquisa: `, async (valor) => {
    if (!valor.trim()) return pesquisar(campo);
    const filtro: any = { [campo]: valor };
    const musicas = await consultarMusicas(filtro);
    if (musicas.length === 0) console.log('Nenhuma música encontrada.');
    else console.table(musicas);
    menu();
  });
}

async function listarTodas() {
  const musicas = await consultarMusicas();
  if (musicas.length === 0) console.log('Nenhuma música cadastrada.');
  else console.table(musicas);
  menu();
}

initDB().then(() => menu());
