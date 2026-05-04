import { AuthView } from '@neondatabase/auth/react';
import FloatingComics from '@/components/FloatingComics';

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
      <div className="relative z-10 w-full max-w-md bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 rotate-[-1deg]">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bebas uppercase text-comic-red tracking-wide text-outline-black">
            Admin Access
          </h1>
          <p className="text-black font-bold uppercase mt-2">Authorized Personnel Only</p>
        </div>
        
        {/* We wrap AuthView to apply some global CSS overrides for the auth form if needed, 
            but Neon Auth UI is highly customizable via CSS variables. */}
        <div className="auth-container">
          <AuthView path={path} />
        </div>
      </div>
    </div>
  );
}