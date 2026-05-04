import { sql } from '@/db';
import { FileText, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const posts = await sql`SELECT id, title, published, created_at FROM posts ORDER BY created_at DESC LIMIT 5`;
  const stats = await sql`
    SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN published = true THEN 1 ELSE 0 END) as published,
      SUM(CASE WHEN published = false THEN 1 ELSE 0 END) as drafts
    FROM posts
  `;

  const total = stats[0]?.total || 0;
  const published = stats[0]?.published || 0;
  const drafts = stats[0]?.drafts || 0;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-lg">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Posts</p>
            <p className="text-3xl font-bold">{total}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-green-100 text-green-600 rounded-lg">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Published</p>
            <p className="text-3xl font-bold">{published}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-yellow-100 text-yellow-600 rounded-lg">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Drafts</p>
            <p className="text-3xl font-bold">{drafts}</p>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Recent Posts</h2>
          <Link href="/admin/posts/new" className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Create New Post
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {posts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No posts found. Create your first one!</div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <h3 className="font-medium text-lg">{post.title}</h3>
                  <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                  <Link href={`/admin/posts/${post.id}/edit`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Edit
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}