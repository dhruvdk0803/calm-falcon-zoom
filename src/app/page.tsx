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
        <motion.svg          key={shard.id}
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
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        >
          <source src="/media/vid-1.mp4" type="video/mp4" />
        </video>
                {/* Dark Overlay for text readability */}
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
                Book Your Session              </motion.button>
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

      {/* --- ADD BOOKING BUTTON BELOW HERO CTAS --- */}
      <motion.div 
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ...comicSpring }}
      >
        <Link href="/book">
          <motion.button             whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
            className="px-8 py-4 bg-comic-red text-white font-bebas text-3xl tracking-wider uppercase rounded-xl border-4 border-black shadow-comic flex items-center justify-center gap-2"
          >
            <Calendar className="w-8 h-8" strokeWidth={3} /> Book Now
          </motion.button>
        </Link>
      </motion.div>

      {/* --- REST OF THE PAGE (PACKAGES ETC.) --- */}
      {/* ... existing sections ... */}

    </div>
  );
}