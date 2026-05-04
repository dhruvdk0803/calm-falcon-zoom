import { sql } from '@/db';
import { auth } from '@/lib/auth/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { data: session } = await auth.getSession();
  if (!session?.user) return new Response('Unauthorized', { status: 401 });

  try {
    const body = await req.json();
    
    const result = await sql`
      INSERT INTO posts (
        title, slug, content, excerpt, cover_image, 
        meta_title, meta_description, keywords, 
        published, reading_time, author_id
      )
      VALUES (
        ${body.title}, ${body.slug}, ${body.content}, ${body.excerpt}, ${body.cover_image}, 
        ${body.meta_title}, ${body.meta_description}, ${body.keywords}, 
        ${body.published}, ${body.reading_time}, ${session.user.id}
      )
      RETURNING *
    `;
    
    return NextResponse.json(result[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}