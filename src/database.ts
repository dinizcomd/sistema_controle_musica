import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const DB_FILE = path.resolve(__dirname, '../data/musicas.db'); // caminho relativo ao host

export async function openDB() {
  return open({
    filename: DB_FILE,
    driver: sqlite3.Database
  });
}

export async function initDB() {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS musicas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      banda TEXT NOT NULL,
      produtora TEXT NOT NULL
    )
  `);
  return db;
}
