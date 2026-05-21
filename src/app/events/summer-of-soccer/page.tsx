"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, Phone, Shield, Zap, HeartHandshake, Target } from "lucide-react";
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

export default function SummerOfSoccerPage() {
  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-green border-b-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center flex flex-col items-center"
          >
            <motion.div variants={comicPop} className="inline-block bg-comic-yellow text-black font-bebas text-2xl px-6 py-2 border-4 border-black shadow-comic rotate-[2deg] mb-6">
              Themed Smash
            </motion.div>
            <motion.h1 variants={comicPop} className="text-5xl sm:text-6xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              Summer of Soccer <span className="text-comic-yellow block">at Super Smash KC</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Intro Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-10 text-black rotate-[-1deg]"
            >
              <h2 className="text-4xl md:text-5xl font-bebas uppercase text-comic-green mb-6 tracking-wide">
                Kick off the Summer Right
              </h2>
              <p className="text-xl font-bold text-gray-800 leading-relaxed uppercase mb-6">
                Celebrate the season with high energy and flying kicks. Our Summer of Soccer themed smash sessions bring all the thrill of the pitch into the smash room! Whether you’re gearing up for the season, blowing off steam after a tough match, or just here to smash things, this is the perfect event for you.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="relative flex justify-center"
            >
              <img 
                src="/media/group.jpg" 
                alt="Group of friends having fun" 
                className="w-full h-auto object-cover rounded-2xl border-8 border-black shadow-comic-lg"
              />
              <img src="/media/comic-smash.png" alt="Smash" className="absolute -bottom-10 -right-10 w-40 z-20 rotate-12 drop-shadow-xl" />
            </motion.div>
          </div>

          {/* Section: Relieve Stress */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="bg-comic-yellow border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-black mb-16 rotate-[1deg]"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-10 h-10 text-comic-red" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-bebas uppercase text-black tracking-wide text-outline-white">
                What to expect during Summer of Soccer
              </h2>
            </div>
            <p className="text-xl font-bold text-gray-900 leading-relaxed uppercase bg-white p-6 border-4 border-black shadow-comic-sm rounded-lg mb-6">
              Step onto our ultimate smash pitch! This event offers a high-adrenaline environment where teamwork meets destruction. Bring your soccer squad or come with friends and experience a one-of-a-kind sports-themed stress relief.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                <Zap className="w-8 h-8 text-comic-blue shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-xl font-bold uppercase">Sports-themed items to obliterate</span>
              </li>
              <li className="flex items-start gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                <Shield className="w-8 h-8 text-comic-green shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-xl font-bold uppercase">Bring your team for an ultimate team-building session</span>
              </li>
            </ul>
          </motion.div>

          {/* Conclusion & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="bg-comic-red border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-12 text-center text-white rotate-[1deg] max-w-4xl mx-auto relative overflow-hidden"
          >
            <img src="/media/comic-boom.png" alt="Boom" className="absolute top-4 left-4 w-32 opacity-50 -rotate-12 pointer-events-none" />
            <img src="/media/comic-pow.png" alt="Pow" className="absolute bottom-4 right-4 w-32 opacity-50 rotate-12 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bebas uppercase text-white text-outline-black mb-6 tracking-wide">
                Ready to Score Some Smashes?
              </h2>
              <div className="bg-white text-black p-6 border-4 border-black shadow-comic-sm rounded-xl mb-8 rotate-[-1deg]">
                <p className="text-xl font-bold leading-relaxed uppercase mb-4">
                  The Summer of Soccer is the perfect excuse to get the squad together, get physical, and have an absolute blast at Kansas City's premier rage room.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/packages">
                  <motion.button 
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                    className="px-8 py-5 bg-comic-yellow text-black font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full"
                  >
                    <Calendar className="w-8 h-8" strokeWidth={3} /> Book Your Spot
                  </motion.button>
                </Link>
                <a href="tel:9134999330">
                  <motion.button 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                    className="px-8 py-5 bg-comic-blue text-white font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full"
                  >
                    <Phone className="w-8 h-8" strokeWidth={3} /> Call Us
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}