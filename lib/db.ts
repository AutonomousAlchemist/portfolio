import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false // Required for most cloud providers
  }
});

// Create a helper that matches your previous 'sql' usage
const sql = async (query: string, params: any[] = []) => {
  const res = await pool.query(query, params);
  return res.rows;
};

export default sql;