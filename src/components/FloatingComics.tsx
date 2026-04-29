"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingComics() {
  const comics = [
    { src: "/media/comic-smash.png", top: "10%", left: "5%", rotate: -15, delay: 0, width: "w-48 md:w-64" },
    { src: "/media/comic-bam.png", top: "15%", right: "5%", rotate: 20, delay: 0.5, width: "w-40 md:w-56" },
    { src: "/media/comic-pow.png", bottom: "20%", left: "8%", rotate: 10, delay: 1.0, width: "w-44 md:w-60" },
    { src: "/media/comic-boom.png", bottom: "15%", right: "8%", rotate: -25, delay: 1.5, width: "w-52 md:w-72" },
    { src: "/media/comic-wham.png", top: "45%", left: "2%", rotate: -30, delay: 2.0, width: "w-36 md:w-48" },
    { src: "/media/comic-kapow.png", top: "50%", right: "2%", rotate: 15, delay: 2.5, width: "w-48 md:w-64" },
    { src: "/media/comic-bang.png", bottom: "45%", left: "5%", rotate: -10, delay: 3.0, width: "w-40 md:w-56" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
      {comics.map((c, i) => (
        <motion.img
          key={i}
          src={c.src}
          alt="Comic Graphic"
          className={`absolute object-contain drop-shadow-2xl ${c.width}`}
          style={{ top: c.top, left: c.left, right: c.right, bottom: c.bottom }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.1, 1, 0], rotate: c.rotate }}
          transition={{ duration: 4, delay: c.delay, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}
    </div>
  );
}