"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Nav items with their per-page accent color (hex for the desktop framer-motion
// hover/active animation, tailwind class for the mobile menu)
const NAV_ITEMS = [
  { href: "/", label: "Home", hex: "#FF2D2D", className: "text-comic-red" },
  { href: "/about", label: "Experience", hex: "#FFD400", className: "text-comic-yellow" },
  { href: "/packages", label: "Packages", hex: "#00C853", className: "text-comic-green" },
  { href: "/events", label: "Events", hex: "#007BFF", className: "text-comic-blue" },
  { href: "/faq", label: "FAQ", hex: "#FF2D2D", className: "text-comic-red" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Handle background transparency (transparent at top, solid when scrolled)
    setIsScrolled(latest > 50);

    // Handle hide/show on scroll (hide when scrolling down, show when scrolling up)
    if (latest > 250 && latest > previous) {
      setIsHidden(true);
      setIsMobileMenuOpen(false); // Close mobile menu if scrolling down
    } else {
      setIsHidden(false);
    }
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // The home link should only be active on an exact match, other links are
  // active when the path starts with their href (covers nested routes).
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black border-b-4 border-white/20 shadow-comic py-2"
          : "bg-transparent border-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu} className="flex items-center shrink-0">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/supersmash-logo-new.png"
              alt="Super Smash KC Logo"
              className="h-10 md:h-14 w-auto object-contain drop-shadow-md transition-all duration-300"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-lg md:text-xl font-bebas tracking-widest uppercase text-white pt-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ y: -2, color: item.hex }}
                  animate={{ color: active ? item.hex : "#FFFFFF" }}
                  className="transition-colors text-outline-black cursor-pointer block"
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Book Now Button */}
        <div className="hidden md:flex items-center shrink-0">
          <Link href="/book">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.9, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="px-5 py-2 pt-2.5 bg-comic-red text-white font-bebas text-xl md:text-2xl tracking-wider uppercase rounded-md border-4 border-black shadow-comic transition-all flex items-center justify-center"
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 bg-black border-2 border-white rounded-md shadow-comic-sm flex items-center justify-center"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black border-b-4 border-white/20 shadow-comic overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-6 text-center bg-halftone-white">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`text-3xl font-bebas tracking-widest uppercase transition-colors text-outline-black ${
                      active ? item.className : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/book" onClick={closeMobileMenu} className="w-full block mt-4">
                <button className="px-6 py-4 bg-comic-red text-white font-bebas text-3xl tracking-wider uppercase rounded-md border-4 border-black shadow-comic transition-all w-full">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
