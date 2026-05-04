import { neon } from '@neondatabase/serverless';

// Use a dummy connection string during build time if DATABASE_URL is missing.
// This prevents Vercel from crashing during the static analysis/build phase.
const connectionString = process.env.DATABASE_URL || 'postgres://dummy:dummy@dummy/dummy';

export const sql = neon(connectionString);