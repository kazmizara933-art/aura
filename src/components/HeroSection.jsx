// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from "react";

import spabaner2 from "../assets/spabaner2.jpg";
import skinbaner3 from "../assets/skinbaner3.jpg";
import horizontalimage from "../assets/horizontalimage.jpg";

export default function HeroSection() {
  const images = [
  
    { src: spabaner2, alt: "Hero 2" },
    { src: skinbaner3, alt: "Hero 3" },
      { src: horizontalimage, alt: "Hero 1" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-play logic (pause on hover)
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // change every 5s
    return () => clearInterval(intervalRef.current);
  }, [isPaused, images.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images (Crossfade) */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: idx === currentIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <p className="uppercase tracking-widest text-sm text-[#c28566] mb-2">
         You can thanks us Later
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          We Are Open! <br />
          Book Your Appointment Today!
        </h1>

        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-[#c28566] hover:bg-[#b97349] transition px-6 py-3 rounded text-sm font-medium">
            BOOK ONLINE
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/40 transition px-6 py-3 rounded text-sm font-medium">
            VIEW SERVICES
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#c28566] scale-110"
                  : "bg-white/40 hover:bg-[#c28565]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

