import { AuthView } from '@neondatabase/auth/react';
import FloatingComics from '@/components/FloatingComics';
import './auth.css';

export const dynamicParams = false;

export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
    <div className="min-h-screen bg-comic-blue bg-halftone-black flex items-center justify-center p-6 relative overflow-hidden pt-24">
      <FloatingComics />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bebas uppercase text-white text-outline-black rotate-[-2deg]">
            Admin <span className="text-comic-yellow">Access</span>
          </h1>
        </div>
        <div className="neon-auth-container">
          <AuthView path={path} />
        </div>
      </div>
    </div>
  );
}