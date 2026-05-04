import { sql } from '@/db';
import Link from 'next/link';
import { Plus, Edit } from 'lucide-react';
import DeletePostButton from './_components/DeletePostButton';

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
  const posts = await sql`SELECT id, title, slug, published, created_at FROM posts ORDER BY created_at DESC`;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Posts</h1>
        <Link href="/admin/posts/new" className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus size={18} /> New Post
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 font-medium text-gray-600">Title</th>
              <th className="p-4 font-medium text-gray-600">Status</th>
              <th className="p-4 font-medium text-gray-600">Date</th>
              <th className="p-4 font-medium text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <p className="font-medium text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-500">/{post.slug}</p>
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {new Date(post.created_at).toLocaleDateString()}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/posts/${post.id}/edit`} className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-md transition-colors" title="Edit Post">
                      <Edit size={18} />
                    </Link>
                    <DeletePostButton id={post.id} />
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">No posts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}