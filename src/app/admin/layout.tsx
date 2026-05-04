import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';
import { authClient } from '@/lib/auth/client';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = await auth.getSession();

  if (!session?.user) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r-4 border-black shadow-comic-sm hidden md:flex flex-col">
        <div className="p-6 border-b-4 border-black bg-comic-yellow">
          <h2 className="text-3xl font-bebas uppercase tracking-wide">CMS Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg border-2 border-transparent hover:border-black transition-all font-bold uppercase">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/new" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg border-2 border-transparent hover:border-black transition-all font-bold uppercase">
            <FileText size={20} /> New Post
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}