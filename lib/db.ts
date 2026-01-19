import { neon } from '@neondatabase/serverless';

// Pull from the variable you set in Vercel/Local
const connectionString = process.env.DATABASE_URL ;

if (!connectionString) {
  throw new Error("❌ Database URL is missing. Check your environment variables!");
}

// Ensure it's a Neon URL, not Prisma
if (connectionString.includes('prisma.io')) {
  throw new Error("❌ You are still using a Prisma URL with a Neon driver!");
}

const sql = neon(process.env.DATABASE_URL!) ;
export default sql;