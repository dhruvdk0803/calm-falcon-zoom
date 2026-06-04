"use client";

import { useEffect } from "react";

export default function BookPage() {
  useEffect(() => {
    // 1. Bookeo looks for a unique div id mapped to your account suffix
    // For your key, Bookeo natively attempts to target "bookeo_41571M9F6LX1810C95EFBB"
    const targetId = "bookeo_41571M9F6LX1810C95EFBB";
    const container = document.getElementById(targetId);

    if (!container) return;

    // 2. Clean up any previous iframe instances left behind by Next.js hot-reloads
    container.innerHTML = "";

    // 3. Inject the script directly into that specific target container
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://bookeo.com/widget.js?a=41571M9F6LX1810C95EFBB";
    script.async = true;
    
    container.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (container.contains(script)) {
        container.removeChild(script);
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
        
        {/* We changed h-[600px] to min-h-[700px] because Bookeo will expand past 700px on step 2/3 */}
        <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-4 md:p-8 min-h-[700px]">
          <div 
            id="bookeo_41571M9F6LX1810C95EFBB" 
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}