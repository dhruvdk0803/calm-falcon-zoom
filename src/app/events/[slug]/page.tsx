import { sql } from '@/db';
import { notFound } from 'next/navigation';
import { Calendar, Phone, BookOpen } from 'lucide-react';
import Link from 'next/link';
import FloatingComics from '@/components/FloatingComics';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await sql`SELECT meta_title, meta_description, keywords, canonical_url, og_image, title, excerpt FROM posts WHERE slug = ${slug} AND published = true`;
  
  if (!posts.length) return {};
  
  const post = posts[0];
  return {
    title: post.meta_title || `${post.title} | Super Smash KC`,
    description: post.meta_description || post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: post.canonical_url,
    },
    openGraph: {
      images: post.og_image ? [post.og_image] : [],
    }
  };
}

export default async function DynamicBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await sql`SELECT * FROM posts WHERE slug = ${slug} AND published = true`;

  if (posts.length === 0) {
    notFound();
  }

  const post = posts[0];

  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-blue border-b-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center flex flex-col items-center">
            <div className="inline-block bg-comic-yellow text-black font-bebas text-2xl px-6 py-2 border-4 border-black shadow-comic rotate-[2deg] mb-6">
              Blog Post
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {post.cover_image && (
            <div className="mb-12 rotate-[-1deg]">
              <img 
                src={post.cover_image} 
                alt={post.title} 
                className="w-full h-auto object-cover rounded-2xl border-8 border-black shadow-comic-lg"
              />
            </div>
          )}

          <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-black rotate-[1deg] mb-16">
            <div className="space-y-6 text-xl font-bold text-gray-800 leading-relaxed uppercase">
              {post.content.split('\n').map((paragraph: string, i: number) => (
                paragraph.trim() ? <p key={i}>{paragraph}</p> : <br key={i} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-comic-red border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-center text-white rotate-[-1deg] max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bebas uppercase text-white text-outline-black mb-6 tracking-wide">
                Are You Ready to Visit the Best Destroy Room in Kansas City?
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                <Link href="/packages">
                  <button className="px-8 py-5 bg-comic-yellow text-black font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full hover:scale-105 transition-transform">
                    <Calendar className="w-8 h-8" strokeWidth={3} /> Book Online Here
                  </button>
                </Link>
                <a href="tel:9134999330">
                  <button className="px-8 py-5 bg-comic-blue text-white font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full hover:scale-105 transition-transform">
                    <Phone className="w-8 h-8" strokeWidth={3} /> Call 913-499-9330
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}