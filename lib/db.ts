import { neon } from '@neondatabase/serverless';

if (!process.env.POSTGRES_URL) {
  console.error("❌ CRITICAL: POSTGRES_URL is missing from environment variables!");
}

// We use the '!' to tell TS it's there, but the log above will tell us the truth in the console
const sql = neon(process.env.POSTGRES_URL!);

export default sql;