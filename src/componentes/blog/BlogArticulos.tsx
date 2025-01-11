"use client";

import { merriWeatherFont, SeccionesFont, titleFont, titulosPrincipales } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from 'aos';
export interface Articulo {
  id: string; // Identificador único
  slug: string; // Identificador para la ruta dinámica
  titulo: string; // Título del artículo
  descripcion: string; // Breve descripción del artículo
  imagen: string; // Imagen destacada para el carrusel
  imagenes: string[]; // Array de URLs para imágenes adicionales
  parrafos: string[]; // Contenido dividido en varios párrafos
  subtitulos: string[]; // Subtítulos para dividir secciones
  fechaPublicacion: Date; // Fecha de publicación
  autor: string; // Nombre del autor
  orden: number
}
export interface ArticuloCarrusel {
  titulo: string; // Título del artículo
  imagen: string; // URL de la imagen destacada
  descripcion: string; // Breve descripción del artículo
  slug: string; // Identificador para la ruta dinámica
}

interface Props {
  articulos: ArticuloCarrusel[];
}

const BlogArticulos: React.FC<Props> = ({ articulos }) => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 100,
        once: true,
      });
    }, []);
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#eef2f3] to-[#d9e6ea] py-8 px-6">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className={`text-4xl font-extrabold color-titulos ${titulosPrincipales.className}`}>
          Explora Nuestros Blogs
        </h2>
        <p className={`text-lg mt-2 ${titleFont.className} color-descripcion-tarjeta`}>
          Consejos, ideas y tendencias sobre la industria del desarrollo web y aplicaciones personalizadas.
        </p>
      </div>

      {/* Grid de Artículos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articulos.map((articulo, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            data-aos="fade-up">
            <Link href={`/blog/${articulo.slug}`} className="flex flex-col h-full">
              {/* Imagen */}
              <div className="relative w-full h-48">
                <Image
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                  data-aos="fade-up"
                />
              </div>

              {/* Contenido */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Título */}
                <h3 data-aos="fade-up" className={`text-lg font-bold color-titulo-tarjeta mb-2 ${SeccionesFont.className}`}>
                  {articulo.titulo}
                </h3>

                {/* Descripción truncada */}
                <p className={`text-md color-descripcion-tarjeta mb-4 ${merriWeatherFont.className}`}>
                  {truncateText(articulo.descripcion, 100)}
                </p>

                <span className="mt-auto color-titulo-tarjeta font-semibold hover:underline">
                  Leer más
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogArticulos;
