"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Flame } from "lucide-react";

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
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bebas text-2xl tracking-wider cursor-pointer">
          <Flame className="text-red-600 w-6 h-6" />
          <span>SUPER SMASH KC</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Experience</a>
          <a href="#" className="hover:text-white transition-colors">Packages</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <button className="px-6 py-2 bg-red-600 text-white font-bebas text-xl tracking-wider uppercase rounded-sm hover:bg-red-500 transition-colors box-glow">
          Book Now
        </button>
      </div>
    </motion.header>
  );
}