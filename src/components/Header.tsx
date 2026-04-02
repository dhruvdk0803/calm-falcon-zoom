"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Flame } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-comic-dark border-b-4 border-black py-4 shadow-comic" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white font-bebas text-3xl tracking-wider cursor-pointer text-outline-black"
          >
            <Flame className="text-comic-yellow w-8 h-8 fill-comic-yellow" strokeWidth={2} stroke="black" />
            <span>SUPER SMASH KC</span>
          </motion.div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-xl font-bebas tracking-widest uppercase text-white">
          <Link href="/">
            <motion.span whileHover={{ y: -2, color: "#FF2D2D" }} className="transition-colors text-outline-black cursor-pointer block">Home</motion.span>
          </Link>
          <Link href="/about">
            <motion.span whileHover={{ y: -2, color: "#FFD400" }} className="transition-colors text-outline-black cursor-pointer block">Experience</motion.span>
          </Link>
          <Link href="/packages">
            <motion.span whileHover={{ y: -2, color: "#00C853" }} className="transition-colors text-outline-black cursor-pointer block">Packages</motion.span>
          </Link>
          <Link href="/faq">
            <motion.span whileHover={{ y: -2, color: "#007BFF" }} className="transition-colors text-outline-black cursor-pointer block">FAQ</motion.span>
          </Link>
        </nav>

        <motion.button 
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
          className="px-6 py-2 bg-comic-red text-white font-bebas text-2xl tracking-wider uppercase rounded-md border-4 border-black shadow-comic transition-all"
        >
          Book Now
        </motion.button>
      </div>
    </motion.header>
  );
}