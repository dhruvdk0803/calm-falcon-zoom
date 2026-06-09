"use client";

import BookeoWidget from "@/components/BookeoWidget";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-comic-dark pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bebas uppercase text-white text-outline-black mb-4 md:mb-6">
            Book Your <span className="text-comic-yellow">Session</span>
          </h1>
          <p className="text-base md:text-xl font-bold text-white bg-black p-3 md:p-4 border-4 border-white shadow-comic-white inline-block rotate-[-1deg] uppercase max-w-2xl mx-auto">
            Select your preferred time and package below to lock in your smash experience.
          </p>
        </div>
        <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-3 md:p-6 min-h-[80vh]">
          <BookeoWidget />
        </div>
      </div>
    </div>
  );
}