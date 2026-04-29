"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, Phone, Shield, Zap, Users, HeartHandshake } from "lucide-react";
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

export default function WhatIsADestroyRoomPage() {
  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-blue border-b-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center flex flex-col items-center"
          >
            <motion.div variants={comicPop} className="inline-block bg-comic-yellow text-black font-bebas text-2xl px-6 py-2 border-4 border-black shadow-comic rotate-[2deg] mb-6">
              Blog Post
            </motion.div>
            <motion.h1 variants={comicPop} className="text-5xl sm:text-6xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              So, What Exactly is a <span className="text-comic-yellow block">Destroy Room in Kansas City?</span> We Explain
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
              <p className="text-xl font-bold text-gray-800 leading-relaxed uppercase mb-6">
                A destroy room in Kansas City; also known as a rage room, smash room, or stress room; is a designated space where people can release pent-up anger and frustration by destroying objects in a controlled environment. The concept originated in Japan in 2008 and has since spread to other countries around the world.
              </p>
              <p className="text-xl font-bold text-gray-800 leading-relaxed uppercase">
                Customers can choose from a variety of items to destroy, such as plates, glasses, electronics, and even furniture. They are provided with safety gear, such as gloves, goggles, and a hard hat, and are given a variety of tools, such as baseball bats, hammers, and crowbars, to use for the destruction.
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
                src="/media/couple.jpg" 
                alt="Couple in a destroy room" 
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
              <HeartHandshake className="w-10 h-10 text-comic-red" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-bebas uppercase text-black tracking-wide text-outline-white">
                Choose a Destroy Room in Kansas City to Relieve Stress
              </h2>
            </div>
            <p className="text-xl font-bold text-gray-900 leading-relaxed uppercase bg-white p-6 border-4 border-black shadow-comic-sm rounded-lg">
              There are a variety of reasons why people might choose to visit a smash room. Some people find that it is a cathartic way to release anger and stress, while others may enjoy the physical and emotional release of breaking something. For some, it can be a form of therapy, as it allows them to let go of negative emotions in a safe and controlled environment.
            </p>
          </motion.div>

          {/* Section: Corporate Outing & Safety */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Corporate */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="flex flex-col"
            >
              <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 text-black rotate-[-1deg] flex-grow mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-comic-blue" strokeWidth={2.5} />
                  <h3 className="text-3xl font-bebas uppercase text-comic-blue tracking-wide">Host Your Next Corporate Outing</h3>
                </div>
                <p className="text-lg font-bold text-gray-800 leading-relaxed uppercase">
                  Smash rooms have become popular among corporate clients as well, who use the experience as a team-building activity. The experience allows employees to let loose and bond with their colleagues in a unique way, creating positive memories that they can carry with them.
                </p>
              </div>
              <img 
                src="/media/party.jpg" 
                alt="Corporate group at a destroy room" 
                className="w-full h-64 object-cover rounded-2xl border-8 border-black shadow-comic-lg rotate-2"
              />
            </motion.div>

            {/* Safety */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="flex flex-col"
            >
              <img 
                src="/media/events/kid-gear.webp" 
                alt="Safety gear in a destroy room" 
                className="w-full h-64 object-cover rounded-2xl border-8 border-black shadow-comic-lg -rotate-2 mb-6"
              />
              <div className="bg-comic-green border-8 border-black shadow-comic-lg rounded-2xl p-8 text-black rotate-[1deg] flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
                  <h3 className="text-3xl font-bebas uppercase text-white text-outline-black tracking-wide">Being Safe Inside</h3>
                </div>
                <p className="text-lg font-bold text-gray-900 leading-relaxed uppercase bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                  There are some concerns about the safety of smash rooms, as there is the potential for injury if proper safety precautions are not taken. However, most reputable smash rooms take measures to ensure the safety of their customers, such as providing safety gear and having staff on hand to supervise the destruction.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Section: Professional Help */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="bg-black border-8 border-white shadow-comic-white rounded-2xl p-8 md:p-12 text-white mb-16 rotate-[-1deg]"
          >
            <h2 className="text-4xl md:text-5xl font-bebas uppercase text-comic-red mb-6 tracking-wide">
              Remember, a Destroy Room Does Not Replace Professional Help
            </h2>
            <p className="text-xl font-bold leading-relaxed uppercase mb-6">
              It is also important to note that while destroy rooms in Kansas City may provide a temporary release of pent-up emotions, they should not be considered a substitute for professional therapy or counseling. If someone is experiencing chronic anger or stress, it is important for them to seek help from a qualified professional.
            </p>
            <p className="text-xl font-bold leading-relaxed uppercase text-comic-yellow">
              In conclusion, a Kansas City destroy room is a designated space where people can release pent-up anger and frustration by destroying objects in a controlled environment. It can be a cathartic and therapeutic experience for some, but it should not be considered a substitute for professional therapy. If you're interested in visiting a smash room, be sure to research reputable locations and take safety precautions.
            </p>
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
                Are You Ready to Visit the Best Destroy Room in Kansas City?
              </h2>
              <div className="bg-white text-black p-6 border-4 border-black shadow-comic-sm rounded-xl mb-8 rotate-[-1deg]">
                <p className="text-xl font-bold leading-relaxed uppercase mb-4">
                  Super Smash KC is a top rage room in Kansas City that offers several packages to help you have a smashing good time. These packages include the starter smash, the super smash, the multiplayer, and the party pack. All packages include access to the smash room, breakable items, and protective gear. Then for those who want even more destruction, there are add-ons!
                </p>
                <p className="text-xl font-bebas text-comic-blue tracking-widest uppercase">
                  Do you know what it's like inside a smash room in Kansas City? Would you like to experience a wrecking room in Kansas City? Unleash your rage, in a safe way, at Super Smash KC!
                </p>
              </div>
              
              <h3 className="text-3xl font-bebas uppercase text-comic-yellow text-outline-black mb-8 tracking-wide">
                Contact KANSAS CITY'S PREMIER RAGE ROOM!
              </h3>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/packages">
                  <motion.button 
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                    className="px-8 py-5 bg-comic-yellow text-black font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full"
                  >
                    <Calendar className="w-8 h-8" strokeWidth={3} /> Book Online Here
                  </motion.button>
                </Link>
                <a href="tel:9134999330">
                  <motion.button 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                    className="px-8 py-5 bg-comic-blue text-white font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full"
                  >
                    <Phone className="w-8 h-8" strokeWidth={3} /> Call 913-499-9330
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