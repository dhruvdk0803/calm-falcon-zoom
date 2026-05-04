import { getDb } from '@/db';
import PostEditor from '../../_components/PostEditor';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sql = await getDb();
  const posts = await sql`SELECT * FROM posts WHERE id = ${id}`;
  
  if (posts.length === 0) notFound();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <PostEditor post={posts[0]} />
    </div>
  );
}