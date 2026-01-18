import { sql } from '@vercel/postgres';

/**
 * Professional Database Logic for Next.js 15
 * This uses the Cloud-hosted Vercel Postgres database.
 */

// We create a helper function to ensure the table exists before we use it
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
    console.log("Database table verified.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

// Export the sql utility for use in your API routes/actions
export default sql;