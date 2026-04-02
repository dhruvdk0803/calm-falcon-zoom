"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  text: string;
  rotate: number;
};

// Only emojis for the particle trail
const COMIC_EMOJIS = ["💥", "💨", "⚡️", "🔨", "💢", "🔥", "🏏"];

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Refs to track spawning logic without triggering re-renders
  const lastSpawn = useRef({ x: 0, y: 0, time: 0 });
  const particleId = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // --- Particle Spawn Logic ---
      const now = Date.now();
      const dist = Math.hypot(e.clientX - lastSpawn.current.x, e.clientY - lastSpawn.current.y);
      
      // Spawn a particle if the mouse moved more than 80px and at least 80ms have passed
      if (dist > 80 && now - lastSpawn.current.time > 80) {
        const newParticle: Particle = {
          id: particleId.current++,
          x: e.clientX,
          y: e.clientY,
          text: COMIC_EMOJIS[Math.floor(Math.random() * COMIC_EMOJIS.length)],
          rotate: Math.random() * 60 - 30, // Random rotation between -30 and 30 degrees
        };
        
        // Keep a maximum of 12 particles on screen at once to prevent lag
        setParticles(prev => [...prev.slice(-11), newParticle]); 
        lastSpawn.current = { x: e.clientX, y: e.clientY, time: now };
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  // Disable custom cursor and effects on touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* --- Particles Trail --- */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="fixed pointer-events-none z-[90] text-3xl md:text-5xl drop-shadow-md"
            style={{ left: p.x, top: p.y }}
            initial={{ opacity: 1, scale: 0, rotate: p.rotate, x: "-50%", y: "-50%" }}
            animate={{ 
              opacity: [1, 1, 0], 
              scale: [0, 1.5, 1], 
              y: ["-50%", "-150%"], // Float upwards
              x: ["-50%", `calc(-50% + ${Math.random() * 40 - 20}px)`] // Slight random horizontal drift
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onAnimationComplete={() => {
              // Remove particle from state once animation finishes
              setParticles((prev) => prev.filter((particle) => particle.id !== p.id));
            }}
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* --- Main Cursor --- */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-comic-yellow border-2 border-black rounded-full pointer-events-none z-[100] hidden md:block shadow-comic-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 20, mass: 0.5 }}
      />
    </>
  );
}