import React from "react";
import { Calendar, ArrowRight, Flame, BookOpen, Zap } from "lucide-react";
import Link from "next/link";
import FloatingComics from "@/components/FloatingComics";
import { getDb } from "@/db";

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
  const sql = await getDb();
  // Fetch published posts from the database
  const dbPosts = await sql`
    SELECT id, title, slug, excerpt, created_at 
    FROM posts 
    WHERE published = true 
    ORDER BY created_at DESC
  `;

  // Map DB posts to the format expected by the UI
  const dynamicEvents = dbPosts.map((post, index) => {
    // Alternate colors and rotations for the comic theme
    const colors = ["bg-comic-red", "bg-comic-blue", "bg-comic-green", "bg-comic-yellow"];
    const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
    
    return {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "Read more about this exciting update from Super Smash KC!",
      tag: "Blog",
      icon: BookOpen,
      color: colors[index % colors.length],
      rotate: rotations[index % rotations.length]
    };
  });

  // Combine static events with dynamic ones
  const staticEvents = [
    {
      title: "Heartbreak & Hammers",
      slug: "heartbreak-and-hammers",
      excerpt: "Whether you’re smashing away a breakup, letting go of stress, or just in it for the vibes—this Valentine’s Day, we’re turning heartbreak into power.",
      tag: "Special Event",
      icon: Flame,
      color: "bg-comic-red",
      rotate: "rotate-1"
    },
    {
      title: "What Exactly is a Destroy Room?",
      slug: "what-is-a-destroy-room",
      excerpt: "A destroy room in Kansas City is a designated space where people can release pent-up anger and frustration by destroying objects in a controlled environment.",
      tag: "Blog",
      icon: BookOpen,
      color: "bg-comic-blue",
      rotate: "-rotate-1"
    },
    {
      title: "3 Reasons Why Breaking Things Can Be Therapeutic",
      slug: "3-reasons-why-breaking-things-can-be-therapeutic",
      excerpt: "Breaking things can be a surprisingly therapeutic experience. For many of us, there is a sense of release and catharsis when we intentionally or unintentionally break something.",
      tag: "Blog",
      icon: Zap,
      color: "bg-comic-green",
      rotate: "rotate-2"
    }
  ];

  // Filter out static events if they have the same slug as a DB event to prevent duplicates
  const dbSlugs = new Set(dynamicEvents.map(e => e.slug));
  const filteredStaticEvents = staticEvents.filter(e => !dbSlugs.has(e.slug));

  const allEvents = [...filteredStaticEvents, ...dynamicEvents];

  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-blue border-b-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-comic-yellow p-4 rounded-full border-4 border-black shadow-comic-sm rotate-12">
                <Calendar className="w-16 h-16 text-black" strokeWidth={2.5} />
              </div>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              Events & <span className="text-comic-yellow block">News</span>
            </h1>
            
            <div className="bg-white p-6 md:p-8 border-8 border-black shadow-comic-lg rotate-[-1deg] inline-block text-center max-w-3xl">
              <p className="text-xl md:text-2xl font-bold text-black uppercase leading-relaxed">
                Stay up to date with the latest smash events, special themed nights, and news from Super Smash KC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EVENTS GRID --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event, i) => {
              const Icon = event.icon;
              return (
                <div 
                  key={i}
                  className={`relative bg-white border-8 border-black shadow-comic-lg rounded-2xl flex flex-col h-full ${event.rotate} hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300`}
                >
                  <div className="absolute -top-5 -right-5 bg-comic-yellow text-black font-bebas text-xl px-4 py-1 border-4 border-black shadow-comic rotate-12 z-20 flex items-center gap-2">
                    <Icon className="w-4 h-4 fill-black" /> {event.tag}
                  </div>
                  
                  <div className={`${event.color} p-8 border-b-8 border-black rounded-t-lg flex items-center justify-center min-h-[160px]`}>
                    <h3 className="text-4xl md:text-5xl font-bebas uppercase tracking-wide text-white text-outline-black text-center leading-none">
                      {event.title}
                    </h3>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-black font-bold uppercase text-lg mb-8 leading-relaxed flex-grow">
                      {event.excerpt}
                    </p>

                    <Link href={`/events/${event.slug}`} className="w-full block">
                      <button className="w-full py-4 bg-black text-white font-bebas text-2xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic hover:translate-y-1 hover:shadow-comic-sm transition-all active:translate-y-2 active:shadow-none flex items-center justify-center gap-2">
                        Read More <ArrowRight className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}