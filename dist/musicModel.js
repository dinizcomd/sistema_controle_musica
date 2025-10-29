"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarMusica = cadastrarMusica;
exports.consultarMusicas = consultarMusicas;
const database_1 = require("./database");
async function cadastrarMusica(musica) {
    const db = await (0, database_1.openDB)();
    const result = await db.run('INSERT INTO musicas (nome, banda, produtora) VALUES (?, ?, ?)', musica.nome, musica.banda, musica.produtora);
    return result.lastID;
}
async function consultarMusicas(filtro) {
    const db = await (0, database_1.openDB)();
    let query = 'SELECT * FROM musicas';
    const params = [];
    if (filtro && Object.keys(filtro).length > 0) {
        query += ' WHERE ' + Object.keys(filtro).map(k => `${k} = ?`).join(' AND ');
        Object.values(filtro).forEach(v => params.push(v));
    }
    return db.all(query, ...params);
}
