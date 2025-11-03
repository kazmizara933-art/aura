import React, { useState, useEffect, useRef } from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

export default function Testimonials() {
  const slides = [
    {
      images: [product1, product2, product3, product4, product5, product6],
      text: `"Clean and very professional hair salon. They explained their services well and make great recommendations for you — not just for the money. As a result, got a great haircut!"`,
      author: "Rebecca Johnson, CA, USA",
    },
    {
      images: [product1, product2, product3, product4, product5, product6],
      text: `"Loved my facial and hair treatment! The team was super friendly and the atmosphere relaxing."`,
      author: "Sophie Williams, NY, USA",
    },
    {
      images: [product1, product2, product3, product4, product5, product6],
      text: `"Best salon experience ever. I recommend them to everyone who wants quality service and care."`,
      author: "Hannah Lee, TX, USA",
    },
  ];

  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollWidth * (current / slides.length),
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <section className="bg-[#4b2e22] text-white py-16 px-6 overflow-hidden relative">
      <div className="max-w-[95vw] mx-auto text-center"> {/* widened container */}
        {/* Heading */}
        <p className="uppercase text-sm tracking-widest text-[#c28566] mb-1">
          What Others Say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Testimonials</h2>

        {/* Carousel Image Row */}
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-hidden justify-center mb-8 transition-all duration-1000"
        >
          {slides[current].images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`testimonial-${idx}`}
              className="w-[350x] h-[550px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="max-w-2xl mx-auto italic text-lg leading-relaxed mb-4">
          {slides[current].text}
        </blockquote>
        <p className="text-sm opacity-80">{slides[current].author}</p>
      </div>
    </section>
  );
}
