"use client";

import BookeoWidget from "@/components/BookeoWidget";

export default function BookPage() {
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
                <div className="bg-white border-8 border-black shadow-comic-lg rounded-2xl p-4 md:p-8 min-h-[700px]">
          <BookeoWidget />
        </div>
      </div>
    </div>
  );
}