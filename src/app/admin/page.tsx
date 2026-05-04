import { sql } from '@/db';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const posts = await sql`SELECT id, title, slug, published, created_at FROM posts ORDER BY created_at DESC`;

  const publishedCount = posts.filter(p => p.published).length;
  const draftCount = posts.length - publishedCount;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bebas uppercase tracking-wide">Dashboard</h1>
        <Link href="/admin/new">
          <button className="bg-comic-blue text-white px-6 py-3 rounded-xl border-4 border-black shadow-comic font-bebas text-2xl uppercase flex items-center gap-2 hover:translate-y-1 hover:shadow-comic-sm transition-all">
            <Plus size={24} /> Create Post
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border-4 border-black shadow-comic-sm">
          <h3 className="text-xl font-bold uppercase text-gray-500">Total Posts</h3>
          <p className="text-5xl font-bebas mt-2">{posts.length}</p>
        </div>
        <div className="bg-comic-green text-black p-6 rounded-xl border-4 border-black shadow-comic-sm">
          <h3 className="text-xl font-bold uppercase">Published</h3>
          <p className="text-5xl font-bebas mt-2">{publishedCount}</p>
        </div>
        <div className="bg-comic-yellow text-black p-6 rounded-xl border-4 border-black shadow-comic-sm">
          <h3 className="text-xl font-bold uppercase">Drafts</h3>
          <p className="text-5xl font-bebas mt-2">{draftCount}</p>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-xl border-4 border-black shadow-comic overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-4 border-black">
              <th className="p-4 font-bebas text-2xl uppercase">Title</th>
              <th className="p-4 font-bebas text-2xl uppercase">Status</th>
              <th className="p-4 font-bebas text-2xl uppercase">Date</th>
              <th className="p-4 font-bebas text-2xl uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center font-bold uppercase text-gray-500">No posts found. Create one!</td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="border-b-2 border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold">{post.title}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase border-2 border-black ${post.published ? 'bg-comic-green' : 'bg-comic-yellow'}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-gray-600">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 flex justify-end gap-2">
                    <Link href={`/events/${post.slug}`} target="_blank">
                      <button className="p-2 bg-gray-200 rounded-md border-2 border-black hover:bg-gray-300">View</button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}