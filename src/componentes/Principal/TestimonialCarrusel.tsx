"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { TestimonioCard } from "./TestimonioCard";
import { Testimonial } from "@/interfaces/interfaces";


interface TestimoniosCarruselProps {
  testimonios: Testimonial[];
}

export const TestimoniosCarrusel: React.FC<TestimoniosCarruselProps> = ({ testimonios }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-12 bg-white relative">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Testimonios de Clientes
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Descubre lo que nuestros clientes dicen sobre nuestras aplicaciones.
        </p>
      </div>

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md"
      >
        <FaChevronLeft className="text-gray-600" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md"
      >
        <FaChevronRight className="text-gray-600" />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-6 px-6 py-4 scrollbar-hide scroll-smooth"
      >
        {testimonios.map((testimonio) => (
          <TestimonioCard key={testimonio.id} testimonio={testimonio} />
        ))}
      </div>
    </section>
    
  );
};
