import { neon } from '@neondatabase/serverless';

// This driver works with ANY Neon/Vercel URL, even without -pooler
const sql = neon(process.env.POSTGRES_URL!);

export async function ensureTableExists() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error("Table creation failed:", error);
  }
}

export default sql;