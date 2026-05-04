import { neon } from '@neondatabase/serverless';
import { auth } from '@/lib/auth/server';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    // Safe env checks inside handler
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL environment variable is missing." },
        { status: 500 }
      );
    }

    // Initialize database connection INSIDE the handler only
    const sql = neon(process.env.DATABASE_URL);

    // Check authentication
    const { data: session } = await auth.getSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

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
    
    return NextResponse.json(result[0], { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}