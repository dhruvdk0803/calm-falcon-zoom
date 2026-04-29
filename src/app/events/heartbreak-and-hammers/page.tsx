"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, CheckCircle2, Zap, Target, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";
import FloatingComics from "@/components/FloatingComics";

// --- Snappy Comic Animations ---
const comicSpring = { type: "spring" as const, stiffness: 400, damping: 15 };
const comicStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const comicPop: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -2 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: comicSpring }
};

export default function HeartbreakAndHammersPage() {
  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-red border-b-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center"
          >
            <motion.div variants={comicPop} className="inline-block bg-comic-yellow text-black font-bebas text-2xl px-6 py-2 border-4 border-black shadow-comic rotate-[-2deg] mb-6">
              Special Event
            </motion.div>
            <motion.h1 variants={comicPop} className="text-6xl sm:text-7xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              Heartbreak & Hammers <span className="text-comic-yellow block">at Super Smash KC</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Intro Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-black mb-12 rotate-[1deg]"
          >
            <h2 className="text-4xl md:text-5xl font-bebas uppercase text-comic-blue mb-6 tracking-wide">
              Join us on Valentine's Day from 12-9 pm
            </h2>
            <p className="text-xl font-bold text-gray-800 leading-relaxed uppercase">
              Whether you’re smashing away a breakup, letting go of stress, or just in it for the vibes—this Valentine’s Day, we’re turning heartbreak into power. 💪🔨
            </p>
          </motion.div>

          {/* What to Expect Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="bg-comic-yellow border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-black mb-12 rotate-[-1deg]"
          >
            <h2 className="text-5xl font-bebas uppercase text-black mb-8 tracking-wide text-outline-white">
              What to Expect:
            </h2>
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                <Target className="w-8 h-8 text-comic-red shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-xl font-bold uppercase">Themed Smash Sessions that let you swing out your stress</span>
              </li>
              <li className="flex items-start gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                <Flame className="w-8 h-8 text-comic-blue shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-xl font-bold uppercase">Self-Care & Gift Vendors to treat yourself (or someone else!)</span>
              </li>
              <li className="flex items-start gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                <Zap className="w-8 h-8 text-comic-green shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-xl font-bold uppercase">Fun giveaways & a one-of-a-kind experience you won’t forget</span>
              </li>
              <li className="flex items-start gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-comic-red shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-xl font-bold uppercase">No date? No problem. Come solo, with friends, or as your own Valentine.</span>
              </li>
            </ul>
            
            <div className="bg-black text-white p-6 border-4 border-white shadow-comic-white text-center rotate-[2deg]">
              <p className="text-2xl font-bebas tracking-widest uppercase text-comic-yellow mb-2">👉 Reservations are REQUIRED for smash sessions</p>
              <p className="text-lg font-bold uppercase">Walk-ins welcome for vendors & giveaways — no RSVP needed!</p>
            </div>
          </motion.div>

          {/* Body Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="space-y-8 mb-16"
          >
            <p className="text-2xl font-bold text-white bg-black p-6 border-4 border-white shadow-comic-white rotate-[1deg] uppercase leading-relaxed">
              Heartbreak & Hammers at Super Smash KC delivers an unforgettable, high-energy experience designed to help you release stress, reclaim your confidence, and have a great time doing it.
            </p>
            <p className="text-xl font-bold text-black bg-white p-6 border-4 border-black shadow-comic rotate-[-1deg] uppercase leading-relaxed">
              This special event invites guests to step into a controlled smash room, grab a hammer or bat, and safely shatter stress—literally. Whether you are moving on from a tough breakup, closing a challenging chapter, or simply craving a unique night out, this event offers a healthy, memorable outlet.
            </p>
            <p className="text-xl font-bold text-white bg-comic-blue p-6 border-4 border-black shadow-comic rotate-[1deg] uppercase leading-relaxed">
              Heartbreak and Hammers is a themed smash experience that blends emotional release with pure fun. With curated music, protective gear, and a variety of breakable items, participants can let go of frustration in a safe, supervised environment—no experience required.
            </p>
          </motion.div>

          {/* Why This Event Stands Out */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 text-black rotate-[-1deg]"
            >
              <h3 className="text-4xl font-bebas uppercase text-comic-red mb-6 tracking-wide">Why This Event Stands Out</h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span className="text-xl font-bebas text-comic-blue tracking-wide uppercase">Emotional Reset:</span>
                  <span className="text-lg font-bold uppercase text-gray-700">Channel stress and emotions into physical release that feels powerful and freeing.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xl font-bebas text-comic-blue tracking-wide uppercase">Perfect for Groups:</span>
                  <span className="text-lg font-bold uppercase text-gray-700">Ideal for friends’ nights, team outings, birthdays, or post-breakup celebrations.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xl font-bebas text-comic-blue tracking-wide uppercase">Safe & Structured:</span>
                  <span className="text-lg font-bold uppercase text-gray-700">Professional staff, safety briefings, and protective equipment ensure a controlled experience.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xl font-bebas text-comic-blue tracking-wide uppercase">Unforgettable Energy:</span>
                  <span className="text-lg font-bold uppercase text-gray-700">Loud music, flying glass, and real impact create an adrenaline-charged atmosphere.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="bg-comic-green border-8 border-black shadow-comic-lg rounded-2xl p-8 text-black rotate-[1deg] flex flex-col justify-center"
            >
              <h3 className="text-4xl font-bebas uppercase text-white text-outline-black mb-6 tracking-wide">Who Should Attend?</h3>
              <ul className="space-y-4">
                {[
                  "Anyone navigating a breakup or emotional reset",
                  "Friends seeking a unique bonding experience",
                  "Teams looking for a memorable stress-relief activity",
                  "Anyone who wants to try something bold, fun, and different in Kansas City"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-3 border-4 border-black shadow-comic-sm rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-comic-green shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg font-bold uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Conclusion & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-center text-black rotate-[-1deg]"
          >
            <h2 className="text-5xl font-bebas uppercase text-comic-red mb-6 tracking-wide">Make It a Night to Remember</h2>
            <p className="text-xl font-bold text-gray-800 leading-relaxed uppercase mb-8">
              Heartbreak & Hammers is more than a smash session—it is a moment of transformation. You arrive carrying stress and leave feeling lighter, energized, and empowered. Spots are limited, and themed events at Super Smash KC fill quickly.
            </p>
            <p className="text-2xl font-bebas text-comic-blue tracking-widest uppercase mb-8">
              Reserve your Heartbreak & Hammers experience today and turn emotional release into an unforgettable night out.
            </p>
            
            <Link href="/packages" className="inline-block">
              <motion.button 
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                className="px-10 py-5 bg-comic-yellow text-black font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
              >
                <Calendar className="w-8 h-8" strokeWidth={3} /> Book Your Spot Now
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}