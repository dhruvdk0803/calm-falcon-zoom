"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Zap, Users, Clock, CheckCircle2, Calendar, ArrowRight, Star } from "lucide-react";
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

export default function PackagesPage() {
  const packages = [
    {
      title: "STARTER SMASH",
      price: "$30",
      unit: "per person",
      duration: "10 Minutes",
      capacity: "Up to 6 People",
      desc: "Built for quick, high-impact sessions. Ideal for first-time visitors or anyone looking for a fast way to release tension without committing to a longer experience. In a short amount of time, you move from built-up stress to immediate physical release. It is direct, efficient, and surprisingly effective.",
      included: [
        "15 breakable items",
        "Full protective safety gear",
        "Access to smash tools including bats, hammers, and crowbars"
      ],
      cta: "Book Starter Smash",
      color: "bg-comic-blue",
      rotate: "-rotate-1"
    },
    {
      title: "SUPER SMASH",
      badge: "MOST POPULAR",
      price: "$50",
      unit: "per person",
      duration: "20 Minutes",
      capacity: "Up to 6 People",
      desc: "Offers a more complete experience. With additional time and larger items, the session becomes more immersive and physically engaging. This is where the experience shifts from simple activity to a deeper level of release. The added time allows you to fully engage without rushing, making the impact more noticeable.",
      included: [
        "25 breakable items",
        "1 medium item such as electronics or equipment",
        "Full protective gear and tools",
        "Extended session time for a more complete experience"
      ],
      cta: "Book Super Smash",
      color: "bg-comic-red",
      rotate: "rotate-1",
      featured: true
    },
    {
      title: "MULTIPLAYER SMASH",
      price: "$150",
      unit: "per group",
      duration: "15–20 Minutes",
      capacity: "Up to 6 People",
      desc: "Designed for shared experiences. Whether it is friends, coworkers, or small groups, this package brings energy into the room and turns the session into something social. The dynamic changes when multiple people are involved. The experience becomes faster, louder, and more engaging.",
      included: [
        "Group crate of breakable items",
        "Shared smash environment",
        "Full access to tools",
        "Safety gear for all participants"
      ],
      cta: "Book Multiplayer Session",
      color: "bg-comic-yellow",
      rotate: "-rotate-2"
    },
    {
      title: "PARTY PACK",
      price: "$250",
      unit: "per group",
      duration: "2 Hours",
      capacity: "6 People (expandable)",
      desc: "Designed for larger experiences and special occasions. This is not just a session but a full event with extended access and flexibility. It allows groups to move beyond a short activity and turn the experience into something more structured and memorable.",
      included: [
        "Two-hour private room access",
        "Dedicated party area",
        "Smash sessions included",
        "Option to bring your own food and drinks",
        "Flexibility to expand group size"
      ],
      cta: "Book Party Pack",
      color: "bg-comic-green",
      rotate: "rotate-2"
    },
    {
      title: "THERAPY THURSDAYS",
      price: "$25",
      unit: "per person",
      duration: "10 Minutes",
      capacity: "Up to 6 People",
      desc: "A lower-cost option for those looking for a quick midweek reset. The experience remains the same, but the format is shorter and more accessible. Suited for spontaneous visits, solo sessions, or anyone looking to release stress without planning a full experience.",
      included: [
        "15 breakable items",
        "Full protective gear",
        "Controlled smash environment"
      ],
      cta: "Book Therapy Session",
      color: "bg-black",
      textColor: "text-white",
      rotate: "-rotate-1"
    }
  ];

  return (
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-yellow border-b-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={comicStagger}
            className="text-center"
          >
            <motion.h1 variants={comicPop} className="text-6xl sm:text-7xl md:text-8xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              Rage Room Packages <span className="text-comic-red block">in Kansas City</span>
            </motion.h1>
            
            <motion.div variants={comicPop} className="bg-white p-6 md:p-10 border-8 border-black shadow-comic-lg rotate-[1deg] inline-block text-left max-w-4xl">
              <p className="text-xl md:text-2xl font-bold text-black uppercase leading-relaxed mb-4">
                Not all stress feels the same, and neither should the way you release it.
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-800 uppercase leading-relaxed mb-4">
                At Super Smash KC, each package is designed to match a different level of intensity. Whether you are looking for a quick reset, a deeper release, or a high-energy group experience, every session is built to deliver impact in a controlled and satisfying way.
              </p>
              <p className="text-xl md:text-2xl font-bold text-comic-blue uppercase leading-relaxed">
                From short solo sessions to full private events, this is where stress turns into action.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- PACKAGES GRID --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center mb-16">
            <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-6">
              Choose Your <span className="text-comic-green">Smash Experience</span>
            </motion.h2>
            <motion.p variants={comicPop} className="text-xl font-bold text-white bg-black p-4 border-4 border-white shadow-comic-white inline-block rotate-[-1deg] uppercase max-w-3xl">
              Every package offers the same core experience — a safe environment, real physical release, and a noticeable shift in how you feel. What changes is the time, intensity, and scale of what you break.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ...comicSpring }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-white border-8 border-black shadow-comic-lg rounded-2xl flex flex-col h-full ${pkg.rotate} ${pkg.featured ? 'lg:scale-105 z-10' : 'z-0'} ${i === 3 ? 'lg:col-start-1 lg:col-span-1 lg:ml-auto' : ''} ${i === 4 ? 'lg:col-start-2 lg:col-span-2 lg:mr-auto max-w-md' : ''}`}
              >
                {pkg.badge && (
                  <div className="absolute -top-6 -right-6 bg-comic-yellow text-black font-bebas text-2xl px-4 py-2 border-4 border-black shadow-comic rotate-12 z-20 flex items-center gap-2">
                    <Star className="w-5 h-5 fill-black" /> {pkg.badge}
                  </div>
                )}
                
                {/* Card Header */}
                <div className={`${pkg.color} ${pkg.textColor || 'text-black'} p-6 border-b-8 border-black rounded-t-lg`}>
                  <h3 className={`text-4xl font-bebas uppercase tracking-wide mb-2 ${pkg.textColor ? '' : 'text-outline-white'}`}>{pkg.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bebas">{pkg.price}</span>
                    <span className="text-lg font-bold uppercase">{pkg.unit}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 border-2 border-black rounded-md shadow-comic-sm">
                      <Clock className="w-5 h-5 text-comic-blue" />
                      <span className="font-bold text-black uppercase text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 border-2 border-black rounded-md shadow-comic-sm">
                      <Users className="w-5 h-5 text-comic-red" />
                      <span className="font-bold text-black uppercase text-sm">{pkg.capacity}</span>
                    </div>
                  </div>

                  <p className="text-black font-bold uppercase text-sm mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-bebas text-2xl text-black mb-4 uppercase tracking-wide">What's Included:</h4>
                    <ul className="space-y-3">
                      {pkg.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-comic-green shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="text-black font-bold uppercase text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full py-4 ${pkg.color} ${pkg.textColor || 'text-black'} font-bebas text-2xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic hover:translate-y-1 hover:shadow-comic-sm transition-all active:translate-y-2 active:shadow-none`}>
                    {pkg.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INFO SECTIONS --- */}
      <section className="py-24 relative bg-comic-blue border-y-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Choosing the Right Package */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="space-y-6">
              <motion.h2 variants={comicPop} className="text-5xl font-bebas uppercase text-white text-outline-black mb-6">
                Choosing the <span className="text-comic-yellow">Right Package</span>
              </motion.h2>
              <motion.div variants={comicPop} className="bg-white p-8 border-4 border-black shadow-comic rotate-[-1deg] h-full">
                <p className="text-lg font-bold text-black uppercase mb-4">
                  The right package depends on what you need from the experience.
                </p>
                <p className="text-lg font-bold text-gray-800 uppercase mb-4">
                  Shorter sessions work well for quick stress relief or first-time visits. Longer sessions allow for a deeper level of engagement and a more noticeable release. Group packages shift the experience toward energy, interaction, and shared moments.
                </p>
                <p className="text-xl font-bebas text-comic-red tracking-wide uppercase bg-comic-yellow p-4 border-4 border-black shadow-comic-sm rotate-[1deg]">
                  Most visitors start with a shorter session and return for a more extended experience once they understand the impact.
                </p>
              </motion.div>
            </motion.div>

            {/* What Every Package Includes */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="space-y-6">
              <motion.h2 variants={comicPop} className="text-5xl font-bebas uppercase text-white text-outline-black mb-6">
                What Every <span className="text-comic-green">Package Includes</span>
              </motion.h2>
              <motion.div variants={comicPop} className="bg-black text-white p-8 border-4 border-white shadow-comic-white rotate-[1deg] h-full">
                <p className="text-lg font-bold uppercase mb-6">
                  Every session at Super Smash KC is built on a consistent foundation to ensure both safety and quality. Regardless of the package, you can expect:
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    "A controlled and secure smashing environment",
                    "Protective gear including helmet, gloves, and eye protection",
                    "Access to a variety of tools designed for safe use",
                    "A curated selection of breakable items"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-comic-blue shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-lg font-bold uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-bebas text-comic-yellow tracking-wide uppercase">
                  This structure ensures that every session delivers a balance of safety, engagement, and real physical release.
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
              Frequently Asked <span className="text-comic-red">Questions</span>
            </motion.h2>
            <motion.p variants={comicPop} className="text-xl font-bold text-white bg-black p-4 border-4 border-white shadow-comic-white inline-block rotate-[-1deg] uppercase">
              Choosing the right rage room package often comes down to understanding how the experience works. Here are the most common questions.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={comicSpring}>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {[
                {
                  q: "Which rage room package is best for first-time visitors?",
                  a: "For first-time visitors, the Starter Smash is usually the best option. It offers a short but effective introduction to the experience, allowing you to understand how it works without committing to a longer session. Many people start here and then upgrade to longer sessions on their next visit."
                },
                {
                  q: "What is included in a rage room package at Super Smash KC?",
                  a: "Every package includes access to a controlled smash room, protective safety gear, and a selection of breakable items. You are also provided with tools such as bats, hammers, and crowbars to enhance the experience. The main difference between packages is the number of items and session duration."
                },
                {
                  q: "How long should I book for the best experience?",
                  a: "If you are looking for a quick stress release, a 10-minute session is enough to feel an immediate shift. However, for a more immersive and complete experience, most visitors prefer the 20-minute Super Smash package, which allows more time and access to larger items."
                },
                {
                  q: "Are group rage room packages worth it?",
                  a: "Group packages are one of the most popular options. They create a shared experience that combines stress relief with energy and interaction. Many groups book these sessions for birthdays, celebrations, or team outings because they offer both engagement and entertainment."
                },
                {
                  q: "Can I upgrade my package during the session?",
                  a: "In most cases, upgrades depend on availability. If additional time or items are available, you may be able to extend your session. It is recommended to choose a package that matches your expected intensity level in advance."
                },
                {
                  q: "What types of items are included in different packages?",
                  a: "Packages typically include a mix of glass items, ceramics, and electronics. Higher-tier packages include larger or more durable items, which create a more satisfying and impactful experience."
                },
                {
                  q: "Is there a difference between weekday and weekend sessions?",
                  a: "The core experience remains the same, but availability may vary. Weekends tend to fill up faster, while weekday options like Therapy Thursdays offer more flexibility and lower pricing."
                },
                {
                  q: "Do I need to book in advance?",
                  a: "Booking in advance is strongly recommended, especially for evenings and weekends. This ensures you get your preferred time slot and package without waiting."
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
            Book Your <span className="text-comic-yellow">Session</span>
          </h2>
          
          <div className="text-2xl font-bold text-black uppercase mb-12 space-y-4">
            <p>You do not need a perfect reason to book a session. You only need the willingness to try something different.</p>
            <p className="text-comic-blue font-bebas text-4xl tracking-wide">Choose a package that fits your time and level of intensity, and step into an experience designed to create a clear shift in how you feel.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-6 bg-comic-yellow text-black font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3"
            >
              <Zap className="w-8 h-8 fill-black" strokeWidth={2} /> Book Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-8 py-6 bg-black text-white font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-white shadow-comic-white flex items-center justify-center gap-3"
            >
              <Calendar className="w-8 h-8" strokeWidth={2} /> View Availability
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}