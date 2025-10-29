import { openDB } from './database';

export interface Musica {
  id?: number;
  nome: string;
  banda: string;
  produtora: string;
}

export async function cadastrarMusica(musica: Musica) {
  const db = await openDB();
  const result = await db.run(
    'INSERT INTO musicas (nome, banda, produtora) VALUES (?, ?, ?)',
    musica.nome, musica.banda, musica.produtora
  );
  return result.lastID;
}

export async function consultarMusicas(filtro?: Partial<Musica>) {
  const db = await openDB();
  let query = 'SELECT * FROM musicas';
  const params: any[] = [];

  if (filtro && Object.keys(filtro).length > 0) {
    query += ' WHERE ' + Object.keys(filtro).map(k => `${k} = ?`).join(' AND ');
    Object.values(filtro).forEach(v => params.push(v));
  }

  return db.all(query, ...params);
}
