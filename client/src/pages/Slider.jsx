import React, { useEffect, useState } from "react";

import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";
import slide5 from "../assets/slide5.jpeg";
import slide6 from "../assets/slide6.jpeg";

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[315px]"
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="
          absolute left-5 top-1/2 -translate-y-1/2
          text-white text-4xl
          hover:scale-110
          transition
          z-10
        "
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="
          absolute right-5 top-1/2 -translate-y-1/2
          text-white text-4xl
          hover:scale-110
          transition
          z-10
        "
      >
        ›
      </button>

      {/* Dots */}
      <div
        className="
          absolute bottom-4 left-1/2
          -translate-x-1/2
          flex gap-2
          z-10
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-3 h-3 rounded-full transition
              ${
                currentSlide === index
                  ? "bg-gray-800"
                  : "bg-gray-300"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}

export default Slider;