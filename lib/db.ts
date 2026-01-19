import { neon } from '@neondatabase/serverless';

// Prioritize DATABASE_URL as it's usually the direct connection Neon prefers
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("❌ No database connection string found in environment variables.");
}

// Initialize the neon client
const sql = neon(connectionString);

export default sql;