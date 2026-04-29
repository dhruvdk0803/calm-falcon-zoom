"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, ArrowRight, Flame, BookOpen } from "lucide-react";
import Link from "next/link";
import FloatingComics from "@/components/FloatingComics";

// --- Snappy Comic Animations ---
const comicSpring = { type: "spring" as const, stiffness: 400, damping: 15 };
const comicStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const comicPop: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: comicSpring }
};

export default function EventsPage() {
  const events = [
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
    }
  ];

  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-blue border-b-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center"
          >
            <motion.div variants={comicPop} className="flex justify-center mb-6">
              <div className="bg-comic-yellow p-4 rounded-full border-4 border-black shadow-comic-sm rotate-12">
                <Calendar className="w-16 h-16 text-black" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.h1 variants={comicPop} className="text-6xl sm:text-7xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              Events & <span className="text-comic-yellow block">News</span>
            </motion.h1>
            
            <motion.div variants={comicPop} className="bg-white p-6 md:p-8 border-8 border-black shadow-comic-lg rotate-[-1deg] inline-block text-center max-w-3xl">
              <p className="text-xl md:text-2xl font-bold text-black uppercase leading-relaxed">
                Stay up to date with the latest smash events, special themed nights, and news from Super Smash KC.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- EVENTS GRID --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ...comicSpring }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-white border-8 border-black shadow-comic-lg rounded-2xl flex flex-col h-full ${event.rotate}`}
              >
                <div className="absolute -top-5 -right-5 bg-comic-yellow text-black font-bebas text-xl px-4 py-1 border-4 border-black shadow-comic rotate-12 z-20 flex items-center gap-2">
                  <event.icon className="w-4 h-4 fill-black" /> {event.tag}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}