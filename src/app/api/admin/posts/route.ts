export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // dynamic imports ONLY here
    const { neon } = await import("@neondatabase/serverless");
    const { createNeonAuth } = await import("@neondatabase/auth/next/server");

    if (!process.env.DATABASE_URL) {
      return Response.json({ error: "Missing DATABASE_URL" }, { status: 500 });
    }

    if (!process.env.NEON_AUTH_COOKIE_SECRET) {
      return Response.json({ error: "Missing NEON_AUTH_COOKIE_SECRET" }, { status: 500 });
    }

    const sql = neon(process.env.DATABASE_URL);

    const auth = createNeonAuth({
      baseUrl: process.env.NEON_AUTH_BASE_URL || '',
      cookies: {
        secret: process.env.NEON_AUTH_COOKIE_SECRET,
      },
    });

    const { data: session } = await auth.getSession();
    if (!session?.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
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
    
    return Response.json(result[0], { status: 201 });
  } catch (err: any) {
    console.error(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}