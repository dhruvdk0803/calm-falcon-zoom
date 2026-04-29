"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, Phone, Zap, Target, Flame, ArrowRight } from "lucide-react";
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

export default function TherapeuticBreakingPage() {
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
            <motion.div variants={comicPop} className="inline-block bg-comic-yellow text-black font-bebas text-2xl px-6 py-2 border-4 border-black shadow-comic rotate-[-2deg] mb-6">
              Blog Post
            </motion.div>
            <motion.h1 variants={comicPop} className="text-5xl sm:text-6xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              3 Reasons Why Breaking Things at a Kansas City Destroy Room <span className="text-comic-yellow block">Can Be Therapeutic</span>
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
              className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 md:p-10 text-black rotate-[1deg]"
            >
              <p className="text-xl font-bold text-gray-800 leading-relaxed uppercase">
                Breaking things can be a surprisingly therapeutic experience. For many of us, there is a sense of release and catharsis when we intentionally or unintentionally break something. Whether it's a vase, a plate, or a piece of furniture, the act of breaking something can be incredibly satisfying. This is one of the reasons we created Super Smash KC, a Kansas City destroy room.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="relative flex justify-center"
            >
              <img 
                src="/media/events/swinging-bat.png" 
                alt="Swinging a bat in a destroy room" 
                className="w-full max-w-md h-auto object-cover rounded-2xl border-8 border-black shadow-comic-lg"
              />
              <img src="/media/comic-pow.png" alt="Pow" className="absolute -bottom-8 -left-8 w-32 z-20 -rotate-12 drop-shadow-xl" />
            </motion.div>
          </div>

          {/* Reason 1 & 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Reason 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="bg-comic-red border-8 border-black shadow-comic-lg rounded-2xl p-8 text-white rotate-[-1deg] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-3 rounded-full border-4 border-black shadow-comic-sm">
                  <Flame className="w-8 h-8 text-comic-red" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bebas uppercase tracking-wide text-outline-black">
                  Release Built-Up Emotions
                </h2>
              </div>
              <p className="text-lg font-bold text-white leading-relaxed uppercase bg-black p-5 border-4 border-white shadow-comic-white rounded-lg flex-grow">
                One reason why breaking things can be therapeutic is that it allows us to release pent-up emotions. When we're feeling angry, frustrated, or stressed, we often have a hard time expressing those feelings in a healthy way. Breaking something inside our destroy room in Kansas City can be a way to physically act out those emotions and release them. It can also serve as a reminder that we are in control of our emotions and can channel them into something constructive.
              </p>
            </motion.div>

            {/* Reason 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ ...comicSpring, delay: 0.1 }}
              className="bg-comic-blue border-8 border-black shadow-comic-lg rounded-2xl p-8 text-white rotate-[1deg] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-3 rounded-full border-4 border-black shadow-comic-sm">
                  <Target className="w-8 h-8 text-comic-blue" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bebas uppercase tracking-wide text-outline-black">
                  Reminds Us We Don’t Have To Be Perfect
                </h2>
              </div>
              <p className="text-lg font-bold text-black leading-relaxed uppercase bg-white p-5 border-4 border-black shadow-comic-sm rounded-lg flex-grow">
                Another reason why breaking things can be therapeutic is that it can help us overcome our perfectionism. We often put a lot of pressure on ourselves to be perfect, and when we inevitably make mistakes or fall short of our own expectations, it can be hard to accept that we are not perfect. Breaking something inside our destroy room in Kansas City can be a way to remind ourselves that we are human and that making mistakes is a part of life.
              </p>
            </motion.div>
          </div>

          {/* Reason 3 & Express Yourself */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="space-y-8"
            >
              {/* Reason 3 */}
              <div className="bg-comic-yellow border-8 border-black shadow-comic-lg rounded-2xl p-8 text-black rotate-[-1deg]">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowRight className="w-8 h-8 text-comic-red" strokeWidth={3} />
                  <h2 className="text-3xl font-bebas uppercase tracking-wide text-outline-white">
                    Help You Move Forward
                  </h2>
                </div>
                <p className="text-lg font-bold text-gray-900 leading-relaxed uppercase">
                  Additionally, breaking things can also be a way to let go of the past. We often hold onto things that we no longer need or use, whether it's physical possessions or emotional baggage. When we break something, we are forced to let go of it and move on. It can be a reminder that we don't need to hold onto things that no longer serve us and that it's okay to let go.
                </p>
              </div>

              {/* Express Yourself */}
              <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 text-black rotate-[1deg]">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-comic-blue" strokeWidth={2.5} />
                  <h2 className="text-3xl font-bebas uppercase tracking-wide text-comic-blue">
                    Express Yourself
                  </h2>
                </div>
                <p className="text-lg font-bold text-gray-800 leading-relaxed uppercase">
                  Moreover, breaking things inside our destroy room in Kansas City can also be a form of self-expression. People often use art or writing as a way to express themselves, but breaking things is another way to put things out there. Physical acts can be a way to communicate something that words cannot.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }} 
              viewport={{ once: true }}
              transition={comicSpring}
              className="relative flex justify-center h-full"
            >
              <img 
                src="/media/events/group-girls.jpeg" 
                alt="Group of friends at a destroy room" 
                className="w-full h-full object-cover rounded-2xl border-8 border-black shadow-comic-lg"
              />
            </motion.div>
          </div>

          {/* Conclusion */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={comicSpring}
            className="bg-black border-8 border-white shadow-comic-white rounded-2xl p-8 md:p-12 text-white mb-16 rotate-[-1deg]"
          >
            <p className="text-xl font-bold leading-relaxed uppercase mb-6">
              In conclusion, breaking things can be a therapeutic experience. It allows us to release pent-up emotions, overcome perfectionism, let go of the past, and express ourselves. It is important to channel this energy in a safe and constructive way. Breaking things in a fit of rage can be dangerous and destructive. Instead, it is better to find a safe and controlled way to break things like going to a rage room or using a stress ball or therapy putty.
            </p>
            <p className="text-xl font-bold leading-relaxed uppercase text-comic-yellow">
              It's also important to remember that breaking things can also be illegal and/or costly. So be sure to consider the consequences before breaking something that doesn't belong to you or that is expensive to replace. At Super Smash KC, we actually encourage you to break things, so come see us very soon!
            </p>
          </motion.div>

          {/* CTA */}
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