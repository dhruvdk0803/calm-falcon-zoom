"use client";

import React, { useEffect, useRef } from "react";

export default function BookPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Bookeo widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://bookeo.com/widget.js?a=41571M9F6LX1810C95EFBB";
    script.async = true;
        // When script loads, Bookeo automatically initializes on the container
    script.onload = () => {
      // If the widget needs explicit initialization, you could call it here
      // window.bookeoWidget?.init();
    };
    
    document.body.appendChild(script);
    
    // Cleanup script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-comic-dark pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bebas uppercase text-white text-outline-black mb-6">
            Book Your <span className="text-comic-yellow">Session</span>
          </h1>
          <p className="text-xl font-bold text-white bg-black p-4 border-4 border-white shadow-comic-white inline-block rotate-[-1deg] uppercase max-w-2xl mx-auto">
            Select your preferred time and package below to lock in your smash experience.
          </p>
        </div>
        
        <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-4 md:p-8 h-[600px] md:h-[700px]">
          {/* Bookeo widget will render inside this div */}
          <div 
            id="bookeo-container" 
            className="w-full h-full"
            data-bookeo-widget="41571M9F6LX1810C95EFBB"
          />
        </div>
      </div>
    </div>
  );
}