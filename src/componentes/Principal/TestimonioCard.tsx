"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Testimonial } from "@/interfaces/interfaces";


interface TestimonioCardProps {
  testimonio: Testimonial;
}

export const TestimonioCard: React.FC<TestimonioCardProps> = ({ testimonio }) => {
  return (
    <Link
      href={testimonio.url}
      className="flex-shrink-0 w-[300px] md:w-[340px] lg:w-[360px] transform transition-transform hover:scale-105"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full h-60">
          <Image
            src={testimonio.imagen}
            alt={testimonio.titulo}
            fill // Propiedad para ocupar todo el espacio del contenedor
            style={{ objectFit: "cover" }} // Reemplaza objectFit
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            {testimonio.titulo}
          </h3>
          <p className="text-md text-gray-600 mt-2 line-clamp-3">
            {testimonio.descripcion}
          </p>
        </div>
        <div className="color-boton-descripcion text-white text-center py-3 font-medium">
          Ver más
        </div>
      </div>
    </Link>
  );
};
