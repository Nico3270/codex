"use client";

import React, { useEffect } from "react";
import {  FaShoppingCart, FaMobileAlt } from "react-icons/fa";
import {  FiTrendingUp } from "react-icons/fi";
import Link from "next/link";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import Image from "next/image";
import { InfoEmpresa } from "@/config/config";
import AOS from 'aos';
export const InfoInicial = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 100,
          once: true,
        });
      }, []);
    return (
        <section className="flex flex-col items-center justify-center w-full h-full p-12 bg-white rounded-lg shadow-lg">
            <h1 data-aos="fade-up" className="text-2xl font-bold text-gray-900 mb-10 text-center" >
                En <span className="text-blue-600">CodeX</span> creamos aplicaciones que impulsan negocios
            </h1>

            <div className="w-full max-w-6xl">
                <div className="mb-6">
                    <h2 data-aos="fade-up" className="text-xl font-semibold color-descripciones mb-2">Tiendas Virtuales</h2>
                    <div className="flex items-start space-x-6 mb-2">
                        <FaShoppingCart className="text-6xl text-blue-500" />
                        <p className="text-md color-descripciones">
                            Lanza tu propia <strong>tienda online</strong> y <strong>aumenta tus ventas</strong> con facilidad y rapidez.
                        </p>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 data-aos="fade-up" className="text-xl font-semibold color-descripciones mb-2">Optimización de Productos</h2>
                    <div className="flex items-start space-x-6 mb-2">
                        <FiTrendingUp className="text-6xl text-green-500" />
                        <p className="text-md color-descripciones">
                            Mejora la <strong>gestión de productos</strong> y maximiza tus <strong>conversiones</strong> fácilmente.
                        </p>
                    </div>
                </div>
                <div className="mb-6">
                    <h2  data-aos="fade-up"className="text-xl font-semibold color-descripciones mb-2">Conexión Total</h2>
                    <div className="flex items-start space-x-6 mb-2">
                        <FaMobileAlt className="text-6xl text-purple-500" />
                        <p className="text-md color-descripciones">
                            Integra tu sitio web con <strong>redes sociales</strong> y <strong>canales de comunicación</strong> en segundos.
                        </p>
                    </div>
                </div>
            </div>

            <Link href="/catalogo">
                <button data-aos="fade-up" className="color-boton-descripcion text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-transform transform hover:scale-105 mt-6">
                    Explora Nuestro Catálogo
                </button>
            </Link>

            <div className="flex items-center justify-center mt-0">
                {/* Logo de la empresa */}
                <div data-aos="fade-up" className="relative w-40 h-40">
                    <Image
                        src={InfoEmpresa.imagenesPlaceholder.logoEmpresa}
                        alt={`Imagen de la empresa : ${InfoEmpresa.nombreCompleto}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px" // Define los tamaños para pantallas pequeñas y grandes
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Nombre, slogan e iconos de redes sociales */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                        <p className="text-md color-descripciones mt-2">
                            {InfoEmpresa.slogan}
                        </p>
                    </div>

                    {/* Iconos de redes sociales */}
                    <div className="flex space-x-8">
                        <a data-aos="zoom-out-up" href={`https://wa.me/${InfoEmpresa.telefono}`} target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-700 hover:text-green-500">
                            <AiOutlineWhatsApp />
                        </a>
                        <a data-aos="zoom-out-up" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-700 hover:text-pink-500">
                            <AiOutlineInstagram />
                        </a>
                        <a data-aos="zoom-out-up" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-700 hover:text-blue-600">
                            <AiOutlineFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
