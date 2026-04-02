"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Don't hide the header if the mobile menu is open
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-comic-dark border-b-4 border-black py-3 shadow-comic" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={closeMobileMenu}>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/logo.png" 
              alt="Super Smash KC Logo" 
              className="h-16 md:h-24 w-auto object-contain drop-shadow-md"
            />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
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
          className="hidden md:block px-6 py-2 bg-comic-red text-white font-bebas text-2xl tracking-wider uppercase rounded-md border-4 border-black shadow-comic transition-all"
        >
          Book Now
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 bg-black border-2 border-white rounded-md shadow-comic-sm"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-comic-dark border-b-4 border-black shadow-comic overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-6 text-center bg-halftone-white">
              <Link href="/" onClick={closeMobileMenu} className="text-3xl font-bebas tracking-widest uppercase text-white hover:text-comic-red transition-colors text-outline-black">
                Home
              </Link>
              <Link href="/about" onClick={closeMobileMenu} className="text-3xl font-bebas tracking-widest uppercase text-white hover:text-comic-yellow transition-colors text-outline-black">
                Experience
              </Link>
              <Link href="/packages" onClick={closeMobileMenu} className="text-3xl font-bebas tracking-widest uppercase text-white hover:text-comic-green transition-colors text-outline-black">
                Packages
              </Link>
              <Link href="/faq" onClick={closeMobileMenu} className="text-3xl font-bebas tracking-widest uppercase text-white hover:text-comic-blue transition-colors text-outline-black">
                FAQ
              </Link>
              <button className="mt-4 px-6 py-4 bg-comic-red text-white font-bebas text-3xl tracking-wider uppercase rounded-md border-4 border-black shadow-comic transition-all w-full">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}