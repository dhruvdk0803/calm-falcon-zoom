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
    <div className="min-h-screen bg-comic-dark bg-halftone-white flex items-center justify-center p-6 pt-24 relative overflow-hidden">
      <FloatingComics />
      <div className="relative z-10 neon-auth-container">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bebas uppercase text-comic-red tracking-wide text-outline-black">
            Admin Access
          </h1>
          <p className="text-black font-bold uppercase mt-2">Authorized Personnel Only</p>
        </div>
        
        <AuthView path={path} />
      </div>
    </div>
  );
}