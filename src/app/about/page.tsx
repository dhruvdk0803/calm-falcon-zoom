"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Zap, Target, Flame, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

export default function AboutPage() {
  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-red border-b-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center"
          >
            <motion.h1 variants={comicPop} className="text-6xl sm:text-7xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              About <span className="text-comic-yellow">Super Smash KC</span>
            </motion.h1>
            
            <motion.div variants={comicPop} className="bg-white p-6 md:p-10 border-8 border-black shadow-comic-lg rotate-[-1deg] inline-block text-left">
              <p className="text-xl md:text-2xl font-bold text-black uppercase leading-relaxed mb-4">
                Every business starts with an idea. Super Smash KC started with a need.
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-800 uppercase leading-relaxed mb-4">
                Not just for entertainment, but for something people were missing — a real, physical way to release stress.
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-800 uppercase leading-relaxed mb-4">
                In a world where most people are constantly dealing with pressure, expectations, and mental overload, there aren’t many places where you’re allowed to truly let go. You’re expected to stay composed, stay controlled, and keep everything inside.
              </p>
              <p className="text-xl md:text-2xl font-bold text-comic-red uppercase leading-relaxed">
                Super Smash KC was created to change that.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY WE EXIST --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="space-y-8">
            <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black text-center mb-12">
              Why We <span className="text-comic-blue">Exist</span>
            </motion.h2>
            
            <div className="grid gap-6 text-xl font-bold text-black uppercase">
              <motion.div variants={comicPop} className="bg-comic-yellow p-6 border-4 border-black shadow-comic rotate-[1deg]">
                At its core, Super Smash KC is built around a simple belief: Sometimes, the fastest way to feel better is to release what you’re holding onto — not suppress it.
              </motion.div>
              <motion.div variants={comicPop} className="bg-white p-6 border-4 border-black shadow-comic rotate-[-1deg]">
                We saw how people were dealing with stress. Long days, constant pressure, and very few real outlets. Traditional ways of coping don’t always work for everyone.
              </motion.div>
              <motion.div variants={comicPop} className="bg-comic-blue text-white p-6 border-4 border-black shadow-comic rotate-[1deg]">
                So instead of creating another passive activity, we built something active. Something physical. Something immediate.
              </motion.div>
              <motion.div variants={comicPop} className="bg-white p-6 border-4 border-black shadow-comic rotate-[-1deg]">
                A space where you can walk in carrying tension and walk out feeling different. Not because you ignored it — but because you actually let it out.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHAT MAKES US DIFFERENT --- */}
      <section className="py-24 relative bg-comic-blue border-y-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger}>
              <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-8">
                What Makes Us <span className="text-comic-yellow">Different</span>
              </motion.h2>
              <motion.p variants={comicPop} className="text-xl font-bold text-white bg-black p-6 border-4 border-white shadow-comic-white mb-6 rotate-[-1deg] uppercase">
                There are plenty of things to do in Kansas City. But very few experiences actually change how you feel. That’s where we stand apart.
              </motion.p>
              <motion.p variants={comicPop} className="text-xl font-bold text-black bg-white p-6 border-4 border-black shadow-comic rotate-[1deg] uppercase">
                Super Smash KC is not just about breaking objects. It’s about what that action represents — release, control, and freedom in a safe environment.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="space-y-4">
              <h3 className="text-3xl font-bebas text-white uppercase tracking-wide text-outline-black mb-4">Everything we’ve built is designed around that experience:</h3>
              {[
                "A fully controlled and structured space where safety always comes first",
                "A wide range of smashable items, from glass to electronics, designed for maximum impact",
                "Tools that allow you to engage physically and feel every moment of the experience",
                "An environment where there’s no judgment, no expectations, and no right or wrong way to participate"
              ].map((item, i) => (
                <motion.div key={i} variants={comicPop} className="flex items-start gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                  <Zap className="w-8 h-8 text-comic-red fill-comic-red shrink-0 mt-1" stroke="black" strokeWidth={2} />
                  <span className="text-lg font-bold text-black uppercase">{item}</span>
                </motion.div>
              ))}
              <motion.div variants={comicPop} className="mt-8 bg-comic-yellow p-6 border-4 border-black shadow-comic text-2xl font-bebas text-black uppercase text-center rotate-[-2deg]">
                We don’t just offer an activity. We offer a shift — in mood, in energy, and in mindset.
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BUILT FOR REAL PEOPLE --- */}
      <section className="py-24 relative bg-comic-yellow border-b-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-12">
            Built for Real People, <span className="text-comic-red block">Real Emotions, and Real Moments</span>
          </motion.h2>
          
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-black uppercase mb-12 max-w-3xl mx-auto bg-white p-6 border-4 border-black shadow-comic rotate-[1deg]">
            Stress doesn’t look the same for everyone. And neither should the way you deal with it. That’s why Super Smash KC is designed to be flexible — not just in how the experience works, but in who it’s for.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            {[
              "Some people come in after a long week, needing a reset.",
              "Some come in with friends, looking for something different and memorable.",
              "Some come in to celebrate — birthdays, milestones, or just a reason to do something exciting.",
              "And some come in simply because they’re curious."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, ...comicSpring }}
                className="bg-black text-white p-6 border-4 border-white shadow-comic-white flex items-center gap-4"
              >
                <Target className="w-8 h-8 text-comic-green shrink-0" strokeWidth={3} />
                <span className="text-lg font-bold uppercase">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bebas text-black uppercase bg-white inline-block p-6 border-4 border-black shadow-comic rotate-[-1deg]">
            No matter the reason, the experience meets you where you are.<br/>
            <span className="text-comic-blue">Because at the end of the day, it’s not about why you came in — it’s about how you feel when you leave.</span>
          </motion.div>
        </div>
      </section>

      {/* --- SAFETY & STRUCTURE --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="order-2 lg:order-1 space-y-6">
              <motion.div variants={comicPop} className="bg-comic-green p-6 border-4 border-black shadow-comic text-black font-bold text-xl uppercase rotate-[-1deg]">
                From the moment you arrive, you’re guided through a structured process:
              </motion.div>
              <ul className="space-y-4">
                {[
                  "You’re equipped with protective gear.",
                  "You’re placed in a dedicated smash space.",
                  "You’re given tools designed for safe use."
                ].map((item, i) => (
                  <motion.li key={i} variants={comicPop} className="flex items-center gap-4 bg-white p-4 border-4 border-black shadow-comic-sm rounded-lg">
                    <Shield className="w-8 h-8 text-comic-blue fill-comic-blue shrink-0" stroke="black" strokeWidth={2} />
                    <span className="text-lg font-bold text-black uppercase">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={comicPop} className="bg-white p-6 border-4 border-black shadow-comic text-black font-bold text-xl uppercase rotate-[1deg]">
                This ensures that you can fully engage in the experience without hesitation or risk. That balance — between freedom and safety — is what makes the experience powerful.
                <br/><br/>
                <span className="text-comic-red text-2xl font-bebas tracking-wide">You’re not holding back. But you’re also not out of control.</span>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="order-1 lg:order-2">
              <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-8">
                Safety, Structure, and a <span className="text-comic-green">Controlled Experience</span>
              </motion.h2>
              <motion.p variants={comicPop} className="text-xl font-bold text-white bg-black p-6 border-4 border-white shadow-comic-white mb-6 rotate-[1deg] uppercase">
                One of the biggest misconceptions about rage rooms is that they’re chaotic or unsafe.
              </motion.p>
              <motion.p variants={comicPop} className="text-2xl font-bebas text-comic-yellow tracking-wide uppercase">
                At Super Smash KC, it’s the exact opposite. Everything is carefully designed to give you complete freedom within a controlled and secure environment.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MORE THAN JUST A RAGE ROOM & MISSION --- */}
      <section className="py-24 relative bg-white border-y-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* More Than Just */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="space-y-6">
              <motion.h2 variants={comicPop} className="text-5xl font-bebas uppercase text-black mb-6">
                More Than Just a <span className="text-comic-red">Rage Room</span>
              </motion.h2>
              <motion.p variants={comicPop} className="text-lg font-bold text-black uppercase">
                What started as a simple idea has quickly become one of the most talked-about experiences in the Kansas City area. People don’t just visit Super Smash KC once.
              </motion.p>
              <motion.div variants={comicPop} className="bg-comic-blue text-white p-6 border-4 border-black shadow-comic rotate-[-1deg]">
                <ul className="space-y-2 text-xl font-bebas tracking-wide uppercase">
                  <li>• They come back.</li>
                  <li>• They bring friends.</li>
                  <li>• They recommend it to others.</li>
                </ul>
              </motion.div>
              <motion.p variants={comicPop} className="text-lg font-bold text-black uppercase">
                Because it offers something that most activities don’t — a combination of:
              </motion.p>
              <ul className="space-y-3">
                {[
                  "Stress relief that you can actually feel",
                  "Adrenaline that keeps you fully present",
                  "A unique experience that stands out from anything typical"
                ].map((item, i) => (
                  <motion.li key={i} variants={comicPop} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-comic-green shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg font-bold text-black uppercase">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.p variants={comicPop} className="text-xl font-bebas text-comic-blue tracking-wide uppercase bg-comic-yellow p-4 border-4 border-black shadow-comic-sm rotate-[1deg]">
                It’s part therapy, part entertainment, and part something you can’t fully explain until you try it yourself.
              </motion.p>
            </motion.div>

            {/* Mission */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="space-y-6">
              <motion.h2 variants={comicPop} className="text-5xl font-bebas uppercase text-black mb-6">
                Our <span className="text-comic-blue">Mission</span>
              </motion.h2>
              <motion.div variants={comicPop} className="bg-comic-red text-white p-8 border-4 border-black shadow-comic rotate-[1deg] h-full flex flex-col justify-center">
                <p className="text-3xl font-bebas uppercase tracking-wide mb-6 text-outline-black">
                  Our mission is simple: To give people a space where they can let go, reset, and feel better — without judgment.
                </p>
                <p className="text-lg font-bold uppercase mb-6">
                  We believe that everyone deserves an outlet. A place where you don’t have to carry everything quietly. And sometimes, that outlet looks different than what you expect.
                </p>
                <p className="text-2xl font-bebas uppercase tracking-wide bg-black p-4 border-4 border-white shadow-comic-white rotate-[-2deg]">
                  Sometimes, it looks like picking up a bat, stepping into a room, and breaking everything in your path.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center mb-16">
            <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-6">
              Frequently Asked <span className="text-comic-yellow">Questions</span>
            </motion.h2>
            <motion.p variants={comicPop} className="text-xl font-bold text-white bg-black p-4 border-4 border-white shadow-comic-white inline-block rotate-[-1deg] uppercase">
              Before visiting, many people want to understand what Super Smash KC is about. Here are the most common questions we get.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={comicSpring}>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {[
                {
                  q: "What is Super Smash KC?",
                  a: "Super Smash KC is a rage room experience in Kansas City where individuals and groups can safely break objects in a controlled environment. It is designed as a form of stress relief, entertainment, and physical release."
                },
                {
                  q: "Is Super Smash KC safe?",
                  a: "Yes, safety is a core part of the experience. All participants are provided with protective gear, and sessions take place in controlled environments designed specifically for smashing activities. The setup ensures that you can fully engage without unnecessary risk."
                },
                {
                  q: "Do I need any experience before visiting?",
                  a: "No prior experience is required. The experience is designed for beginners as well as returning visitors. You are guided through the process, and everything is structured to be simple and accessible."
                },
                {
                  q: "Who is this experience for?",
                  a: "Super Smash KC is built for a wide range of people. Some visit for stress relief, others for entertainment, and many for group activities such as birthdays, date nights, or team events. It is suitable for individuals, couples, and groups looking for something different."
                },
                {
                  q: "Is this meant to be therapy or just entertainment?",
                  a: "While many people find the experience therapeutic, Super Smash KC is primarily designed as an entertainment experience. The stress relief comes naturally from the physical activity and environment."
                },
                {
                  q: "What makes Super Smash KC different from other activities?",
                  a: "Unlike passive activities, this experience is fully interactive and physical. It allows you to release energy and emotions in a way that most traditional entertainment options do not provide. The combination of action, adrenaline, and controlled environment makes it unique."
                },
                {
                  q: "Can I visit alone or do I need a group?",
                  a: "You can visit alone or with others. Many people come in solo for a personal reset, while others prefer to share the experience with friends or groups."
                },
                {
                  q: "Why do people choose rage rooms for stress relief?",
                  a: "Rage rooms provide a direct and physical way to release built-up tension. Instead of suppressing stress, the experience allows you to act on it in a safe and controlled setting, which often leads to immediate relief."
                },
                {
                  q: "Where is Super Smash KC located?",
                  a: "Super Smash KC is located in Kansas City and serves individuals and groups from across the area looking for a unique and engaging experience."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border-4 border-black shadow-comic rounded-xl px-6 data-[state=open]:bg-comic-yellow transition-colors">
                  <AccordionTrigger className="text-2xl md:text-3xl font-bebas uppercase text-black hover:no-underline py-6 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg font-bold text-black uppercase pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative bg-comic-red border-t-8 border-black bg-halftone-black flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={comicSpring}
          className="relative z-10 container mx-auto px-6 text-center max-w-4xl bg-white border-8 border-black shadow-comic-lg p-12 rounded-3xl rotate-[1deg]"
        >
          <h2 className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white text-outline-black mb-8">
            Experience It <span className="text-comic-blue">For Yourself</span>
          </h2>
          
          <div className="text-2xl font-bold text-black uppercase mb-12 space-y-4">
            <p>Reading about it only gets you so far.</p>
            <p>The real understanding comes from stepping inside, picking up your first tool, and feeling that first impact.</p>
            <p className="text-comic-red font-bebas text-4xl tracking-wide">That’s when it clicks. That’s when you realize why this works.</p>
            <p>And that’s when you understand why so many people walk out feeling completely different than when they walked in.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-6 bg-comic-yellow text-black font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
            >
              <Calendar className="w-8 h-8" strokeWidth={3} /> Book Your Smash Session
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-6 bg-comic-blue text-white font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
            >
              <MapPin className="w-8 h-8" strokeWidth={3} /> Plan Your Visit
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}