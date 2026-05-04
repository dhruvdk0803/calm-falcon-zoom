import { getDb } from '@/db';
import { notFound } from 'next/navigation';
import { Calendar, Phone, BookOpen } from 'lucide-react';
import Link from 'next/link';
import FloatingComics from '@/components/FloatingComics';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sql = await getDb();
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
  const sql = await getDb();
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
            <div className="mb-16 relative flex justify-center">
              <img 
                src={post.cover_image} 
                alt={post.title} 
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl border-8 border-black shadow-comic-lg rotate-[-1deg]"
              />
            </div>
          )}

          <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-black rotate-[1deg] mb-16">
            {/* Render HTML content safely. In a real app, you might want to use a markdown parser or DOM sanitizer here */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bebas prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-comic-red prose-p:font-bold prose-p:uppercase prose-p:leading-relaxed prose-a:text-comic-blue prose-a:underline hover:prose-a:text-comic-red"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            />
          </div>

          {/* CTA */}
          <div className="bg-comic-red border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-center text-white rotate-[-1deg] max-w-4xl mx-auto relative overflow-hidden">
            <img src="/media/comic-boom.png" alt="Boom" className="absolute top-4 left-4 w-32 opacity-50 -rotate-12 pointer-events-none" />
            <img src="/media/comic-pow.png" alt="Pow" className="absolute bottom-4 right-4 w-32 opacity-50 rotate-12 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bebas uppercase text-white text-outline-black mb-6 tracking-wide">
                Are You Ready to Visit the Best Destroy Room in Kansas City?
              </h2>
              <div className="bg-white text-black p-6 border-4 border-black shadow-comic-sm rounded-xl mb-8 rotate-[1deg]">
                <p className="text-xl font-bold leading-relaxed uppercase mb-4">
                  Super Smash KC is a top rage room in Kansas City that offers several packages to help you have a smashing good time.
                </p>
                <p className="text-xl font-bebas text-comic-blue tracking-widest uppercase">
                  Unleash your rage, in a safe way, at Super Smash KC!
                </p>
              </div>
              
              <h3 className="text-3xl font-bebas uppercase text-comic-yellow text-outline-black mb-8 tracking-wide">
                Contact KANSAS CITY'S PREMIER RAGE ROOM!
              </h3>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/packages">
                  <button className="px-8 py-5 bg-comic-yellow text-black font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full hover:scale-105 hover:-rotate-2 transition-transform">
                    <Calendar className="w-8 h-8" strokeWidth={3} /> Book Online Here
                  </button>
                </Link>
                <a href="tel:9134999330">
                  <button className="px-8 py-5 bg-comic-blue text-white font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full hover:scale-105 hover:rotate-2 transition-transform">
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