"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CatalogoApp } from "@/interfaces/interfaces";
import { titulosPrincipales } from "@/config/fonts";
import AOS from 'aos';
interface CatalogoAppsProps {
  aplicacionesCatalogo: CatalogoApp[];
}

export const CatalogoAplicaciones: React.FC<CatalogoAppsProps> = ({ aplicacionesCatalogo }) => {
  useEffect(() => {
          AOS.init({
              duration: 1000,
              offset: 100,
              once: true,
          });
      }, []);
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-4xl font-bold color-titulos mb-4 ${titulosPrincipales.className}`}>
          Proyectos Destacados
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Algunas de las aplicaciones que hemos desarrollado para empresas innovadoras.
        </p>

        {/* Grid de Aplicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {aplicacionesCatalogo.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
               data-aos="fade-up"
            >
              {/* Aseguramos posición relativa en el contenedor directo */}
              <div className="relative w-full h-64" data-aos="fade-up">

                <Link href={app.url}>
                  <Image
                    src={app.imagen}
                    alt={app.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="p-6 text-center"  data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-gray-800">{app.nombre}</h3>
                <p className="text-md text-gray-600 mt-2">{app.descripcion}</p>

                {/* Botón para Ver Aplicación */}
                <div className="mt-6"  data-aos="fade-up">
                  <Link href={app.url}>
                    <button className="bg-[#4C585B] hover:bg-[#7E99A3] text-white font-semibold py-2 px-6 rounded-md shadow-md transition-transform transform hover:scale-105">
                      Ver Aplicación
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para Ver más */}
        <div className="mt-16">
          <Link href="/catalogo">
            <button className="color-boton-descripcion text-white py-2 px-10 rounded-lg text-lg font-medium shadow-md transform transition-transform hover:scale-105">
              Ver Todos los Proyectos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
