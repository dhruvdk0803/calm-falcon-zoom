import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText, Settings, LogOut, Home } from 'lucide-react';
import { authClient } from '@/lib/auth/client';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = await auth.getSession();

  if (!session?.user) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bebas tracking-wide text-comic-red">SUPER SMASH CMS</h1>
          <p className="text-sm text-gray-500 truncate">{session.user.email}</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/posts" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
            <FileText size={20} /> Posts
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium mt-8">
            <Home size={20} /> View Live Site
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b border-gray-200 p-4 flex justify-end">
          <Link href="/auth/sign-in" className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
            <LogOut size={18} /> Sign Out
          </Link>
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}