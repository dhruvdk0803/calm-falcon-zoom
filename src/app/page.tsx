"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Shield, Zap, Target, Flame, Users, User, HeartHandshake, Briefcase, Phone, Calendar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- Snappy Comic Animations ---
const comicSpring = { type: "spring" as const, stiffness: 400, damping: 15 };
const comicStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const comicPop: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: comicSpring }
};

// --- Floating Action Words Component ---
const FloatingWords = () => {
  const words = [
    // Moved SMASH down slightly and further left
    { text: "SMASH!", color: "text-comic-yellow", top: "25%", left: "5%", rotate: -15, delay: 0 },
    // Moved BAM up to align with "STRESS" instead of "EVERYTHING", and further right
    { text: "BAM!", color: "text-comic-red", top: "15%", right: "8%", rotate: 20, delay: 0.2 },
    // Adjusted bottom words to stay clear of the buttons
    { text: "CRASH!", color: "text-comic-green", bottom: "20%", left: "8%", rotate: 10, delay: 0.4 },
    { text: "BOOM!", color: "text-comic-blue", bottom: "25%", right: "5%", rotate: -25, delay: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
      {words.map((w, i) => (
        <motion.div
          key={i}
          className={`absolute font-bebas text-5xl lg:text-6xl ${w.color} text-outline-black opacity-90`}
          style={{ top: w.top, left: w.left, right: w.right, bottom: w.bottom }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.1, 1, 0], rotate: w.rotate }}
          transition={{ duration: 2.5, delay: w.delay, repeat: Infinity, repeatDelay: 2 }}
        >
          {w.text}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-12 bg-halftone-white">
        <FloatingWords />
        
        <motion.div 
          className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-5xl mt-8 md:mt-0"
          style={{ y: yParallax }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={comicSpring}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-comic-yellow border-4 border-black shadow-comic-sm text-black text-base md:text-lg font-bebas tracking-widest uppercase mb-6 rotate-[-2deg]"
          >
            <Flame className="w-5 h-5 fill-comic-red" stroke="black" strokeWidth={2} /> 
            Kansas City's Premier Rage Room
          </motion.div>

          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bebas uppercase leading-[0.9] mb-6 text-white text-outline-black"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            Smash Stress.<br/>
            <span className="text-comic-red">Break Everything.</span><br/>
            <span className="text-comic-yellow">Feel Better.</span>
          </motion.h1>

          <motion.div 
            className="space-y-4 text-lg md:text-xl text-white font-bold uppercase max-w-2xl mx-auto bg-black p-4 md:p-5 border-4 border-white shadow-comic-white rotate-[1deg]"
            variants={comicStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={comicPop}>
              There’s a limit to how much stress you can carry. Sometimes, you don’t need to manage it — <span className="text-comic-green">you need to release it.</span>
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ...comicSpring }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-4 bg-comic-yellow text-black font-bebas text-2xl md:text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic transition-all w-full sm:w-auto"
            >
              Book Your Session
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-4 bg-white text-black font-bebas text-2xl md:text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic transition-all w-full sm:w-auto"
            >
              View Packages
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 1: A New Kind of Experience (YELLOW) --- */}
      <section className="py-32 relative bg-comic-yellow border-y-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={comicStagger}
              className="space-y-8"
            >
              <motion.h2 variants={comicPop} className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white text-outline-black">
                A New Kind of Experience <span className="text-comic-red block">KC Didn’t Know It Needed</span>
              </motion.h2>
              
              <div className="space-y-6 text-2xl font-bold text-black uppercase">
                <motion.p variants={comicPop} className="bg-white p-4 border-4 border-black shadow-comic-sm rotate-[-1deg]">
                  Entertainment has changed. People are looking for experiences that make them feel something.
                </motion.p>
                <motion.p variants={comicPop} className="bg-comic-blue text-white p-4 border-4 border-black shadow-comic-sm rotate-[1deg]">
                  Inside our rage rooms, you’re given permission to do something you’re normally told not to — break things.
                </motion.p>
                <motion.p variants={comicPop} className="bg-white p-4 border-4 border-black shadow-comic-sm rotate-[-1deg]">
                  When you combine physical action with emotional release, something shifts. You stop overthinking.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100, rotate: 10 }} whileInView={{ opacity: 1, x: 0, rotate: 2 }} viewport={{ once: true }} transition={comicSpring}
              className="bg-comic-red border-8 border-black shadow-comic-lg rounded-2xl p-8 flex flex-col justify-center"
            >
              <h3 className="text-5xl font-bebas text-white mb-8 uppercase tracking-wide text-outline-black">People discover the same thing:</h3>
              <ul className="space-y-6">
                {[
                  "It feels good to let go",
                  "It feels powerful to act instead of suppress",
                  "It feels different in a way that stays with you"
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 text-2xl font-bold text-black bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg"
                  >
                    <Zap className="w-8 h-8 text-comic-yellow fill-comic-yellow shrink-0" stroke="black" strokeWidth={2} />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: Why Rage Rooms (DARK) --- */}
      <section className="py-32 bg-comic-dark relative bg-halftone-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center mb-16">
            <motion.h2 variants={comicPop} className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white text-outline-black mb-8">
              Why Rage Rooms Are <span className="text-comic-green">Blowing Up</span>
            </motion.h2>
            <motion.p variants={comicPop} className="text-2xl font-bold text-white bg-black p-6 border-4 border-white shadow-comic-white inline-block rotate-[-1deg]">
              Modern life is filled with constant pressure. We target the source.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Flame, text: "Turns internal stress into physical action", color: "bg-comic-red" },
              { icon: Shield, text: "A rare sense of freedom — no holding back", color: "bg-comic-blue" },
              { icon: HeartHandshake, text: "A safe outlet for suppressed emotions", color: "bg-comic-yellow" },
              { icon: Target, text: "Adrenaline, movement, and satisfaction", color: "bg-comic-green" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, ...comicSpring }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`${item.color} p-8 rounded-xl border-4 border-black shadow-comic flex flex-col items-center text-center gap-6`}
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-black shadow-comic-sm flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-black" strokeWidth={2.5} />
                </div>
                <p className="text-black font-bold text-2xl uppercase">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: Designed for Anyone (BLUE) --- */}
      <section className="py-32 relative bg-comic-blue border-y-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 variants={comicPop} className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white text-outline-black mb-8">
              Designed for Anyone Who Wants <span className="text-comic-yellow">More Than a Typical Night Out</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Individuals", icon: User, text: "A personal reset. Clear your head and release tension.", rotate: "-rotate-2" },
              { title: "Couples", icon: HeartHandshake, text: "An unexpected, engaging shared experience.", rotate: "rotate-2" },
              { title: "Friends", icon: Users, text: "Fun, competition, and unforgettable moments.", rotate: "-rotate-1" },
              { title: "Groups", icon: Target, text: "Bring energy into the room instantly for any event.", rotate: "rotate-3" },
              { title: "Teams", icon: Briefcase, text: "Bond, reset, and step outside the usual work dynamic.", rotate: "-rotate-2" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, ...comicSpring }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-white p-8 rounded-xl border-4 border-black shadow-comic ${card.rotate} ${i === 3 ? 'lg:col-span-1 lg:col-start-2' : ''} ${i === 4 ? 'lg:col-span-1' : ''}`}
              >
                <div className="bg-comic-yellow w-16 h-16 rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-comic-sm">
                  <card.icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-4xl font-bebas text-black uppercase tracking-wide mb-4">{card.title}</h3>
                <p className="text-black font-bold text-lg uppercase">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: What Happens (DARK) --- */}
      <section className="py-32 bg-comic-dark relative bg-halftone-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center mb-20">
            <motion.h2 variants={comicPop} className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white text-outline-black mb-8">
              What Happens When You Step Inside <span className="text-comic-red">Super Smash KC</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Gear Up", text: "Get equipped with premium protective gear.", color: "bg-comic-yellow" },
              { step: "02", title: "Choose Weapons", text: "Pick your tools of destruction.", color: "bg-comic-blue" },
              { step: "03", title: "Enter Room", text: "Step into your private smash space.", color: "bg-comic-green" },
              { step: "04", title: "Smash", text: "Stop thinking and just act. Release it all.", color: "bg-comic-red" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={comicSpring}
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col md:flex-row items-center gap-8 bg-white border-4 border-black shadow-comic rounded-2xl p-6 ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                <div className={`${item.color} w-24 h-24 shrink-0 rounded-full border-4 border-black shadow-comic-sm flex items-center justify-center text-black font-bebas text-5xl`}>
                  {item.step}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-5xl font-bebas text-black uppercase tracking-wide mb-2">{item.title}</h3>
                  <p className="text-black font-bold text-xl uppercase">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (RED) --- */}
      <section className="py-40 relative bg-comic-red border-t-8 border-black bg-halftone-black flex items-center justify-center">
        <FloatingWords />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={comicSpring}
          className="relative z-10 container mx-auto px-6 text-center max-w-4xl bg-white border-8 border-black shadow-comic-lg p-12 rounded-3xl rotate-[-1deg]"
        >
          <h2 className="text-7xl md:text-9xl font-bebas uppercase leading-none text-white text-outline-black mb-8">
            Ready to Experience It <span className="text-comic-yellow">for Yourself?</span>
          </h2>
          
          <p className="text-3xl font-bold text-black uppercase mb-12">
            You don’t need a special occasion. You just need the willingness to try something different.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-10 py-6 bg-comic-yellow text-black font-bebas text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
            >
              <Calendar className="w-8 h-8" strokeWidth={3} /> Book Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-10 py-6 bg-comic-blue text-white font-bebas text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
            >
              <Phone className="w-8 h-8" strokeWidth={3} /> Call Now
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <button className="w-full py-4 bg-comic-yellow text-black font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic active:translate-y-1 active:shadow-none transition-all">
          Book Now
        </button>
      </div>

    </div>
  );
}