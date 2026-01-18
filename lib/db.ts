import { neon } from '@neondatabase/serverless';

// This driver is 'connectionless' and works with any Neon/Vercel URL
// The '!' tells TypeScript that we guarantee the environment variable exists
const sql = neon(process.env.POSTGRES_URL!);

export default sql;