export const getDb = async () => {
  const { neon } = await import('@neondatabase/serverless');
  
  if (!process.env.DATABASE_URL) {
    throw new Error("Missing DATABASE_URL");
  }
  
  return neon(process.env.DATABASE_URL);
};