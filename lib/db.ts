import { neon } from '@neondatabase/serverless';

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

if (!connectionString) {
  console.error("❌ DB Environment Variable is MISSING");
}

const sql = neon(connectionString!);

export default sql;