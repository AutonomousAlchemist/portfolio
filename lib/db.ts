import Database from 'better-sqlite3';
import path from 'path';

// This creates a 'database.db' file in your project root
const dbPath = path.join(process.cwd(), 'database.db');
const db = new Database(dbPath);

// Create the 'messages' table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;