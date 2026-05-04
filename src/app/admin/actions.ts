'use server';

import { getDb } from '@/db';
import { auth } from '@/lib/auth/server';
import { revalidatePath } from 'next/cache';

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function savePost(formData: FormData) {
  try {
    const { data: session } = await auth.getSession();
    if (!session?.user) throw new Error('Unauthorized');

    const sql = await getDb();

    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const cover_image = formData.get('cover_image') as string;
    const published = formData.get('published') === 'true';
    
    // SEO Fields
    const meta_title = formData.get('meta_title') as string;
    const meta_description = formData.get('meta_description') as string;
    const keywords = formData.get('keywords') as string;
    const canonical_url = formData.get('canonical_url') as string;
    const og_image = formData.get('og_image') as string;

    let slug = formData.get('slug') as string;
    if (!slug) slug = generateSlug(title);

    const reading_time = calculateReadingTime(content);

    if (id) {
      // Update existing
      await sql`
        UPDATE posts SET 
          title = ${title}, slug = ${slug}, content = ${content}, excerpt = ${excerpt}, 
          cover_image = ${cover_image}, published = ${published}, meta_title = ${meta_title}, 
          meta_description = ${meta_description}, keywords = ${keywords}, canonical_url = ${canonical_url}, 
          og_image = ${og_image}, reading_time = ${reading_time}, updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
      `;
    } else {
      // Insert new
      await sql`
        INSERT INTO posts (
          title, slug, content, excerpt, cover_image, published, meta_title, 
          meta_description, keywords, canonical_url, og_image, reading_time, author_id
        ) VALUES (
          ${title}, ${slug}, ${content}, ${excerpt}, ${cover_image}, ${published}, ${meta_title}, 
          ${meta_description}, ${keywords}, ${canonical_url}, ${og_image}, ${reading_time}, ${session.user.id}
        )
      `;
    }

    revalidatePath('/admin/posts');
    revalidatePath('/events');
    
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deletePost(id: string) {
  try {
    const { data: session } = await auth.getSession();
    if (!session?.user) throw new Error('Unauthorized');

    const sql = await getDb();
    await sql`DELETE FROM posts WHERE id = ${id}`;
    
    revalidatePath('/admin/posts');
    revalidatePath('/events');
    
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}