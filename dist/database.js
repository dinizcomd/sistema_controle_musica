"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openDB = openDB;
exports.initDB = initDB;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const path_1 = __importDefault(require("path"));
const DB_FILE = path_1.default.resolve(__dirname, '../data/musicas.db'); // caminho relativo ao host
async function openDB() {
    return (0, sqlite_1.open)({
        filename: DB_FILE,
        driver: sqlite3_1.default.Database
    });
}
async function initDB() {
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
