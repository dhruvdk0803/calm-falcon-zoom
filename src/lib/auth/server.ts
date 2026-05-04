import { createNeonAuth } from '@neondatabase/auth/next/server';

// Use fallback strings during build time if env vars are missing.
// This prevents Vercel from crashing during the static analysis/build phase.
export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL || 'https://dummy.neonauth.com',
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET || 'dummy-secret-for-build-phase',
  },
});