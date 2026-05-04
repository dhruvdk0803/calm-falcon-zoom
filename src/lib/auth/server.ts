export const getAuth = async () => {
  const { createNeonAuth } = await import('@neondatabase/auth/next/server');
  
  if (!process.env.NEON_AUTH_COOKIE_SECRET) {
    throw new Error("Missing NEON_AUTH_COOKIE_SECRET");
  }
  
  return createNeonAuth({
    baseUrl: process.env.NEON_AUTH_BASE_URL || '',
    cookies: {
      secret: process.env.NEON_AUTH_COOKIE_SECRET,
    },
  });
};