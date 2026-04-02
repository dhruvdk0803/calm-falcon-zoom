"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Shield, Zap, Target, Flame, Users, User, HeartHandshake, Briefcase, Phone, Calendar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Components ---

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 2,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-red-600 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,rgba(0,0,0,1)_70%)]" />
        <ParticleBackground />
        
        <motion.div 
          className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-5xl"
          style={{ y: yParallax, opacity: opacityFade }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bebas uppercase leading-[0.85] mb-8 text-white text-glow"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Smash Stress.<br/>
            <span className="text-red-600">Break Everything.</span><br/>
            Feel Better Instantly.
          </motion.h1>

          <motion.div 
            className="space-y-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeInUp}>
              There’s a limit to how much stress you can carry before it starts affecting everything — your focus, your mood, your energy. Most people try to manage it. They push through, distract themselves, or wait for it to pass.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-white font-medium text-xl md:text-2xl">
              But sometimes, you don’t need to manage stress — you need to release it.
            </motion.p>
            <motion.p variants={fadeInUp}>
              At Super Smash KC, we’ve created a space where you can let go completely. A place where you can physically release frustration in a way that feels immediate, real, and satisfying.
            </motion.p>
            <motion.p variants={fadeInUp}>
              This is Kansas City’s ultimate rage room experience — built for those moments when everything inside you needs an outlet.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-red-500 font-medium italic">
              You walk in with tension. You walk out lighter, clearer, and reset.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button className="group relative px-8 py-4 bg-red-600 text-white font-bebas text-2xl tracking-wider uppercase overflow-hidden rounded-sm box-glow hover:bg-red-500 transition-colors w-full sm:w-auto">
              <span className="relative z-10">Book Your Smash Session</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bebas text-2xl tracking-wider uppercase hover:bg-white/5 transition-colors rounded-sm w-full sm:w-auto">
              View Packages
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* --- SECTION 1: A New Kind of Experience --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bebas uppercase leading-none text-white">
                A New Kind of Experience <span className="text-red-600 block">Kansas City Didn’t Know It Needed</span>
              </motion.h2>
              
              <div className="space-y-6 text-lg text-gray-400">
                <motion.p variants={fadeInUp}>
                  Entertainment has changed. People are no longer looking for passive ways to spend time — they’re looking for experiences that make them feel something.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-white font-medium">
                  That’s exactly where Super Smash KC stands apart.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  This isn’t about watching, waiting, or sitting through another predictable activity. It’s about stepping into an environment where you are fully engaged, physically active, and emotionally involved in what you’re doing.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Inside our rage rooms, you’re given permission to do something you’re normally told not to — break things. Not recklessly, but intentionally. Not dangerously, but safely. Not as destruction, but as release.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-red-500 font-medium">
                  And that difference matters.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Because when you combine physical action with emotional release, something shifts. You stop overthinking. You stop replaying things in your head. For a moment, everything becomes simple — just movement, impact, and release.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="relative h-full min-h-[500px] glass-panel rounded-xl p-8 flex flex-col justify-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl -z-10" />
              <h3 className="text-3xl font-bebas text-white mb-8 uppercase tracking-wide">People come in for different reasons, but they all discover the same thing:</h3>
              <ul className="space-y-6">
                {[
                  "It feels good to let go",
                  "It feels powerful to act instead of suppress",
                  "It feels different in a way that stays with you even after you leave"
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-4 text-xl text-gray-300"
                  >
                    <Zap className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-lg text-gray-400 italic">
                  Super Smash KC isn’t just another place to go. It’s an experience that gives you something most activities don’t — a real change in how you feel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: Why Rage Rooms --- */}
      <section className="py-32 bg-[#080808] relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bebas uppercase leading-none text-white mb-8">
              Why Rage Rooms Are Becoming <span className="text-red-600">One of the Most Sought-After Experiences</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400">
              Across cities, rage rooms are growing rapidly — not because they’re trendy, but because they solve a very real problem in a very direct way.
            </motion.p>
          </motion.div>

          <div className="space-y-8 text-lg text-gray-400 mb-16">
            <p>Modern life is filled with constant pressure. People are always connected, always thinking, always carrying something mentally. And while there are plenty of ways to relax, very few actually allow you to release that built-up energy.</p>
            <p className="text-white font-medium text-xl">That’s where this experience stands out.</p>
            <p>Instead of calming the surface, it targets the source. It gives you a controlled environment where intensity is allowed, even encouraged.</p>
          </div>

          <div className="space-y-4 mb-16">
            <h3 className="text-2xl font-bebas text-white uppercase tracking-wide mb-6">What makes it so effective:</h3>
            {[
              { icon: Flame, text: "It turns internal stress into physical action, creating immediate relief" },
              { icon: Shield, text: "It gives you a rare sense of freedom — no expectations, no need to hold back" },
              { icon: HeartHandshake, text: "It provides a safe outlet for emotions that usually stay suppressed" },
              { icon: Target, text: "It delivers a combination of adrenaline, movement, and satisfaction that’s hard to replicate" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-lg flex items-center gap-6 group hover:border-red-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-white text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 text-lg text-gray-400 text-center">
            <p>And beyond the psychological aspect, it’s simply one of the most engaging things you can do.</p>
            <p>There’s unpredictability in every smash, a sense of impact you can feel, and a level of immersion that keeps you completely present in the moment.</p>
            <p className="text-white font-medium text-xl">That’s why people don’t just try it once. They come back, bring friends, and make it part of how they unwind, celebrate, or reset.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: Designed for Anyone --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bebas uppercase leading-none text-white mb-8">
              Designed for Anyone Who Wants <span className="text-red-600">More Than a Typical Night Out</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400">
              Not every experience is meant to be calm or quiet. Some are meant to be loud, high-energy, and unforgettable. Super Smash KC is built for people who are looking for something different — something that stands out from the usual options.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 mt-4">
              It works because it adapts to different situations without losing its core impact.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Individuals", icon: User, text: "It becomes a personal reset. A way to clear your head and release tension without needing to explain anything to anyone." },
              { title: "Couples", icon: HeartHandshake, text: "It creates a shared experience that’s unexpected, engaging, and far from routine. It’s not just another dinner or movie — it’s something you actually do together." },
              { title: "Friends", icon: Users, text: "It turns into an activity that combines fun, competition, and shared moments that are hard to forget." },
              { title: "Groups", icon: Target, text: "It becomes an event. Whether it’s a birthday, a milestone, or just a reason to get together, it brings energy into the room instantly." },
              { title: "Teams", icon: Briefcase, text: "It offers a break from structured environments — a way to bond, reset, and step outside of the usual work dynamic." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-panel p-8 rounded-xl border-t-4 border-t-transparent hover:border-t-red-600 transition-all duration-300 ${i === 3 ? 'lg:col-span-1 lg:col-start-2' : ''} ${i === 4 ? 'lg:col-span-1' : ''}`}
              >
                <card.icon className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-3xl font-bebas text-white uppercase tracking-wide mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-xl text-white mt-16 font-medium max-w-2xl mx-auto"
          >
            This flexibility is what makes it powerful. It’s not limited to one type of person or occasion. It’s built for anyone who wants an experience that actually delivers something different.
          </motion.p>
        </div>
      </section>

      {/* --- SECTION 4: What Happens --- */}
      <section className="py-32 bg-[#080808] relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-20">
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bebas uppercase leading-none text-white mb-8">
              What Happens When You Step Inside <span className="text-red-600">Super Smash KC</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              From the outside, it might look simple — a place where you break things. But once you step inside, you realize it’s a carefully designed experience. Everything is structured to make the process smooth, safe, and impactful from start to finish.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

            {[
              { step: "01", title: "Gear Up", text: "You begin by getting equipped. Protective gear is provided so you can fully focus on the experience without hesitation. This removes the uncertainty and allows you to engage completely." },
              { step: "02", title: "Choose Weapons", text: "Next, you choose your tools. Each one offers a different kind of impact — from controlled swings to full-force strikes. The choice itself becomes part of the experience." },
              { step: "03", title: "Enter Room", text: "Then you enter your private smash space. This is where everything changes. You’re surrounded by breakable items, and for the first time, there’s no restriction on what you can do with them." },
              { step: "04", title: "Smash", text: "And finally, you release. There’s no right way to do it. Some people start slow, others go all in from the first second. But everyone reaches that moment where they stop thinking and just act." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red-600 rounded-full -translate-x-1/2 mt-2 md:mt-0 shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10" />
                
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex flex-col justify-center">
                  <div className={`glass-panel p-8 rounded-xl ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-red-600 font-bebas text-2xl mb-2 block">Step {item.step}</span>
                    <h3 className="text-4xl font-bebas text-white uppercase tracking-wide mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-lg">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-24 text-center space-y-6 max-w-3xl mx-auto"
          >
            <p className="text-2xl text-white font-bebas tracking-wide uppercase">That’s where the shift happens.</p>
            <p className="text-lg text-gray-400">By the time your session ends, the difference is clear. The tension you walked in with isn’t the same. Your mind feels quieter. Your body feels lighter.</p>
            <p className="text-xl text-red-500 font-medium italic">It’s not just about what you did — it’s about how it made you feel.</p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 5: More Than Just Fun --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bebas uppercase leading-none text-white mb-12"
          >
            More Than Just Fun — <span className="text-red-600 block">Why This Experience Stays With You</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="space-y-6 text-xl text-gray-400 mb-16"
          >
            <p>A lot of activities are enjoyable in the moment but forgettable afterward.</p>
            <p className="text-white font-bebas text-3xl tracking-wide">This isn’t one of them.</p>
            <p>What makes Super Smash KC different is that it creates a lasting impression — not just because of what you did, but because of how it changed your state of mind.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 text-left">
            {[
              "Surprisingly therapeutic",
              "More satisfying than expected",
              "A complete mental reset in a short amount of time",
              "Something they didn’t realize they needed until they tried it"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-lg border-l-4 border-l-red-600"
              >
                <p className="text-white text-lg font-medium">"{text}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="space-y-4 text-lg text-gray-400"
          >
            <p>And beyond the personal experience, it becomes something people want to share.</p>
            <p>They talk about it, recommend it, and bring others back to experience it for themselves.</p>
            <p className="text-white font-medium text-xl mt-8">Because it’s not just another activity — it’s something that stands out in a city full of options.</p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 6: Safe Environment --- */}
      <section className="py-32 bg-[#0a0a0a] relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bebas uppercase leading-none text-white">
                A Safe, Controlled Environment <span className="text-red-600 block">Where You Can Let Go Completely</span>
              </motion.h2>
              
              <div className="space-y-6 text-lg text-gray-400">
                <motion.p variants={fadeInUp}>
                  One of the biggest concerns people have before trying a rage room is safety — and that’s completely valid.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-white font-medium">
                  At Super Smash KC, every part of the experience is designed with that in mind.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  From the protective gear you wear to the structure of the rooms themselves, everything is built to ensure that you can fully engage without risk.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  This allows you to focus on what actually matters — the experience.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  You don’t have to hold back because of uncertainty. You don’t have to worry about doing something wrong.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-2xl font-bebas text-white tracking-wide uppercase mt-8">
                  You can simply step in, trust the environment, and let yourself go.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-red-500 italic">
                  That balance — between freedom and control — is what makes the experience both powerful and accessible.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Shield, title: "Full Protection", desc: "Premium safety gear provided" },
                { icon: Target, title: "Controlled Space", desc: "Engineered for safe impact" },
                { icon: Users, title: "Guided Entry", desc: "Clear instructions before you start" },
                { icon: Zap, title: "Zero Risk", desc: "Focus entirely on the release" }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-xl flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bebas text-xl tracking-wide">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,rgba(0,0,0,1)_60%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative z-10 container mx-auto px-6 text-center max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white mb-8 text-glow">
            Ready to Experience It <span className="text-red-600">for Yourself?</span>
          </h2>
          
          <div className="space-y-6 text-xl text-gray-300 mb-12 font-light">
            <p>At some point, stress builds up enough that it needs more than just time to pass.</p>
            <p className="text-3xl font-bebas text-white tracking-wide uppercase">It needs an outlet.</p>
            <p>Super Smash KC gives you that outlet — in a way that’s immediate, engaging, and genuinely effective.</p>
            <p>You don’t need a special occasion. You don’t need a perfect reason.</p>
            <p className="text-white font-medium">You just need the willingness to try something different.</p>
            <p>And once you do, you’ll understand why so many people are making this part of how they reset, recharge, and reconnect with themselves.</p>
            <p className="text-red-500 font-medium text-2xl mt-8">Book your session today and experience the shift for yourself.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group relative px-10 py-5 bg-red-600 text-white font-bebas text-3xl tracking-wider uppercase overflow-hidden rounded-sm box-glow hover:bg-red-500 transition-colors">
              <span className="relative z-10 flex items-center gap-3">
                <Calendar className="w-6 h-6" /> Book Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bebas text-3xl tracking-wider uppercase hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" /> Call Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32 bg-[#050505] relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas uppercase leading-none text-white mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trying something new always comes with questions. Here are the answers to what most people want to know before their first visit.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Is it safe to participate in a rage room?", a: "Yes, safety is a core part of the experience. You are provided with protective gear, and all smashing takes place in controlled environments designed specifically for this activity." },
                { q: "Do I need any experience before coming in?", a: "Not at all. This experience is designed for beginners as well as returning visitors. No prior skills are required." },
                { q: "What should I wear for my session?", a: "Comfortable clothing and closed-toe shoes are recommended so you can move freely and safely during your session." },
                { q: "Can I come alone, or is this only for groups?", a: "You can absolutely come alone. Many people visit solo for stress relief, while others come with friends, partners, or groups." },
                { q: "What types of items will I be smashing?", a: "Items typically include glass bottles, electronics, ceramics, and other breakable objects prepared specifically for safe smashing." },
                { q: "How long does a session usually last?", a: "Session lengths vary depending on the package you choose, typically ranging from short sessions to longer group experiences." },
                { q: "Is this suitable for special occasions or events?", a: "Yes, many people book sessions for birthdays, celebrations, date nights, and even team-building events." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-50 md:hidden">
        <button className="w-full py-4 bg-red-600 text-white font-bebas text-2xl tracking-wider uppercase rounded-sm box-glow shadow-2xl">
          Book Now
        </button>
      </div>

    </div>
  );
}