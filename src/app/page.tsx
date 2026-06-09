"use client";

import React from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Shield, Zap, Target, Flame, Users, User, HeartHandshake, Briefcase, Phone, Calendar, Clock, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import FloatingComics from "@/components/FloatingComics";

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

// --- Broken Glass Effect Component ---
const BrokenGlassEffect = () => {
  const shards = [
    { id: 1, d: "M0,0 L30,-10 L20,20 Z", x: -150, y: -200, rot: -120, dur: 1.2 },
    { id: 2, d: "M0,0 L40,-20 L10,30 Z", x: -80, y: -250, rot: -45, dur: 1.4 },
    { id: 3, d: "M0,0 L50,10 L20,40 Z", x: 150, y: -200, rot: 90, dur: 1.1 },
    { id: 4, d: "M0,0 L30,-30 L40,10 Z", x: 200, y: -150, rot: 135, dur: 1.3 },
    { id: 5, d: "M0,0 L-40,20 L-10,50 Z", x: -250, y: -50, rot: -180, dur: 1.5 },
    { id: 6, d: "M0,0 L-30,-20 L-20,30 Z", x: -200, y: 100, rot: -220, dur: 1.2 },
    { id: 7, d: "M0,0 L40,30 L10,60 Z", x: 250, y: 50, rot: 180, dur: 1.4 },
    { id: 8, d: "M0,0 L50,-10 L30,40 Z", x: 220, y: 150, rot: 220, dur: 1.1 },
    { id: 9, d: "M0,0 L-20,40 L20,50 Z", x: -100, y: 250, rot: -45, dur: 1.3 },
    { id: 10, d: "M0,0 L30,50 L-10,60 Z", x: 100, y: 250, rot: 45, dur: 1.5 },
  ];

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-50 flex items-center justify-center">
      <motion.svg
        className="absolute w-64 h-64 md:w-96 md:h-96 drop-shadow-lg"
        viewBox="0 0 100 100"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <path d="M50,5 L60,35 L95,30 L70,55 L90,90 L50,75 L10,90 L30,55 L5,30 L40,35 Z" fill="#FFFFFF" stroke="#000" strokeWidth="2" />
      </motion.svg>

      {shards.map((shard) => (
        <motion.svg
          key={shard.id}
          className="absolute w-16 h-16 overflow-visible"
          initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
          animate={{ 
            x: shard.x, 
            y: [0, shard.y - 50, shard.y + 150],
            scale: [0, 1.5, 1], 
            opacity: [0, 1, 1, 0], 
            rotate: shard.rot 
          }}
          transition={{ duration: shard.dur, delay: 0.8, ease: "easeOut" }}
        >
          <path d={shard.d} fill="#E0F2FE" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
          <path d={shard.d} fill="none" stroke="#FFFFFF" strokeWidth="2" transform="translate(-2, -2)" />
        </motion.svg>
      ))}
    </div>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, -150]);

  const packages = [
    {
      title: "STARTER SMASH",
      price: "$30",
      unit: "per person",
      duration: "10 Minutes",
      capacity: "Up to 6 People",
      desc: "Built for quick, high-impact sessions. Ideal for first-time visitors or anyone looking for a fast way to release tension.",
      included: ["12-15 breakable items", "Full protective safety gear", "Access to smash tools"],
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
      desc: "Offers a more complete experience. With additional time and larger items, the session becomes more immersive and physically engaging.",
      included: [
        "22-25 breakable items",
        "Medium-Large items based on inventory",
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
      duration: "15 Minutes",
      capacity: "Up to 6 People",
      desc: "Designed for shared experiences. Brings energy into the room and turns the session into something social.",
      included: [
        "Group crate of breakable items",
        "Shared smash environment",
        "Safety gear for all"
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
      desc: "Designed for larger experiences and special occasions. A full event with extended access and flexibility.",
      included: [
        "Two-hour private room access",
        "Dedicated party area",
        "Smash sessions included",
        "Option to bring food/drinks",
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
      desc: "A lower-cost option for those looking for a quick midweek reset.",
      included: [
        "12-15 breakable items",
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
    <div className="bg-comic-dark min-h-screen text-white font-sans selection:bg-comic-yellow selection:text-black overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-20 md:pt-32 pb-16 bg-black overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        >
          <source src="/media/vid-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <FloatingComics />
        
        <motion.div 
          className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-5xl mt-12 md:mt-0"
          style={{ y: yParallax }}
        >
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bebas uppercase leading-[0.9] mb-6 text-white text-outline-black z-20 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            Smash Stress.<br/>
            
            <motion.span 
              className="text-comic-red relative inline-block"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 0.95, 1], rotate: [0, -3, 3, 0] }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Break Everything.
              <BrokenGlassEffect />
            </motion.span>
            
            <br/>
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
            <Link href="/packages">
              <motion.button 
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                className="px-8 py-4 bg-comic-yellow text-black font-bebas text-2xl md:text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic transition-all w-full"
              >
                Book Your Session
              </motion.button>
            </Link>
            <Link href="/packages">
              <motion.button 
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                className="px-8 py-4 bg-white text-black font-bebas text-2xl md:text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic transition-all w-full"
              >
                View Packages
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-20 md:py-32 relative bg-comic-red border-y-8 border-black bg-halftone-black overflow-hidden">
        <FloatingComics />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger}
            className="text-center"
          >
            <motion.h2 variants={comicPop} className="text-5xl sm:text-6xl md:text-7xl font-bebas uppercase leading-[0.9] mb-8 text-white text-outline-black">
              Welcome to Kansas City's <span className="text-comic-yellow">Premier Rage Room</span>
            </motion.h2>
            
            <motion.div variants={comicPop} className="bg-white p-6 md:p-10 border-8 border-black shadow-comic-lg rotate-[-1deg] inline-block text-left max-w-4xl">
              <p className="text-xl md:text-2xl font-bold text-black uppercase leading-relaxed mb-4">
                At Super Smash KC, you don't just break things. You break through the stress, pressure, and tension you've been carrying around.
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-800 uppercase leading-relaxed">
                Step into our controlled smash environment, grab a bat, and let it all go. No judgment. No limits. Just pure, immediate release.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- WHAT WE OFFER --- */}
      <section className="py-24 relative bg-comic-dark bg-halftone-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center mb-16">
            <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-6">
              What We <span className="text-comic-blue">Offer</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe Environment",
                desc: "Full protective gear and trained staff ensure a controlled, secure smash experience every time.",
                color: "bg-comic-blue",
                rotate: "-rotate-1"
              },
              {
                icon: Zap,
                title: "Instant Release",
                desc: "Physical, immediate stress relief you can feel the moment you swing. No waiting, no buildup.",
                color: "bg-comic-yellow",
                rotate: "rotate-1"
              },
              {
                icon: Target,
                title: "Variety of Items",
                desc: "Glass, electronics, ceramics, and more. Choose your targets based on your session package.",
                color: "bg-comic-red",
                rotate: "-rotate-2"
              },
              {
                icon: Users,
                title: "Group Sessions",
                desc: "Bring friends, coworkers, or family. Shared energy turns stress relief into an unforgettable event.",
                color: "bg-comic-green",
                rotate: "rotate-2"
              },
              {
                icon: Clock,
                title: "Flexible Times",
                desc: "10-minute quick resets or 2-hour private events. Pick what fits your schedule and intensity level.",
                color: "bg-comic-blue",
                rotate: "-rotate-1"
              },
              {
                icon: HeartHandshake,
                title: "No Judgment",
                desc: "Come solo, with a date, or with a crew. Everyone deserves a place to release without expectations.",
                color: "bg-comic-yellow",
                rotate: "rotate-1"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={comicPop}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`bg-white border-8 border-black shadow-comic-lg rounded-2xl p-8 ${item.rotate}`}
                >
                  <div className={`${item.color} w-16 h-16 rounded-full border-4 border-black shadow-comic-sm flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-bebas uppercase text-black mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-lg font-bold text-gray-800 uppercase leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PACKAGES SECTION --- */}
      <section className="py-24 relative bg-comic-yellow border-y-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center mb-16">
            <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-6">
              Choose Your <span className="text-comic-red">Smash Experience</span>
            </motion.h2>
            <motion.p variants={comicPop} className="text-xl font-bold text-black bg-white p-4 border-4 border-black shadow-comic inline-block rotate-[-1deg] uppercase max-w-3xl">
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
                
                <div className={`${pkg.color} ${pkg.textColor || 'text-black'} p-6 border-b-8 border-black rounded-t-lg`}>
                  <h3 className={`text-4xl font-bebas uppercase tracking-wide mb-2 ${pkg.textColor ? '' : 'text-outline-white'}`}>{pkg.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bebas">{pkg.price}</span>
                    <span className="text-lg font-bold uppercase">{pkg.unit}</span>
                  </div>
                </div>

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

                  <Link href="/packages" className="w-full block">
                    <button className={`w-full py-4 ${pkg.color} ${pkg.textColor || 'text-black'} font-bebas text-2xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic hover:translate-y-1 hover:shadow-comic-sm transition-all active:translate-y-2 active:shadow-none`}>
                      {pkg.cta}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO IS THIS FOR --- */}
      <section className="py-24 relative bg-comic-blue border-y-8 border-black bg-halftone-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={comicStagger} className="text-center mb-16">
            <motion.h2 variants={comicPop} className="text-5xl md:text-7xl font-bebas uppercase text-white text-outline-black mb-6">
              Who Comes to <span className="text-comic-yellow">Super Smash KC?</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "Individuals",
                desc: "Looking for a personal reset after a tough week. No agenda, no pressure — just you and a bat.",
                color: "bg-comic-red"
              },
              {
                icon: Users,
                title: "Friends",
                desc: "Birthdays, reunions, or just a Saturday night. Smash together and make a memory worth talking about.",
                color: "bg-comic-yellow"
              },
              {
                icon: Briefcase,
                title: "Corporate Teams",
                desc: "Team building that doesn't feel forced. Bond over breaking things instead of trust falls.",
                color: "bg-comic-green"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={comicPop}
                  className={`${item.color} border-8 border-black shadow-comic-lg rounded-2xl p-8 text-black ${i === 0 ? 'rotate-[-1deg]' : i === 1 ? 'rotate-[1deg]' : 'rotate-[-2deg]'}`}
                >
                  <Icon className="w-16 h-16 mb-4" strokeWidth={2.5} />
                  <h3 className="text-4xl font-bebas uppercase tracking-wide mb-4 text-outline-white">{item.title}</h3>
                  <p className="text-lg font-bold uppercase leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative bg-comic-red border-t-8 border-black bg-halftone-black flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={comicSpring}
          className="relative z-10 container mx-auto px-6 text-center max-w-4xl bg-white border-8 border-black shadow-comic-lg p-12 rounded-3xl rotate-[1deg]"
        >
          <h2 className="text-6xl md:text-8xl font-bebas uppercase leading-none text-white text-outline-black mb-8">
            Ready to <span className="text-comic-yellow">Smash?</span>
          </h2>
          
          <div className="text-2xl font-bold text-black uppercase mb-12 space-y-4">
            <p>Stop carrying it. Start breaking it.</p>
            <p className="text-comic-blue font-bebas text-4xl tracking-wide">Book your session today and feel the difference the moment you swing.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/packages">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                className="px-8 py-6 bg-comic-yellow text-black font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full"
              >
                <Calendar className="w-8 h-8" strokeWidth={3} /> Book Your Session
              </motion.button>
            </Link>
            <a href="tel:9134999330">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                className="px-8 py-6 bg-comic-blue text-white font-bebas text-3xl md:text-4xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-3 w-full"
              >
                <Phone className="w-8 h-8" strokeWidth={3} /> Call 913-499-9330
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}