import { createPool } from '@vercel/postgres';

// This forces the use of the pooled connection
const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export default pool;