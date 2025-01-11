"use client";

import { InfoEmpresa } from "@/config/config";
import Image from "next/image";
import React from "react";
import { FaMobileAlt, FaPlay, FaShoppingCart } from "react-icons/fa";
import { FiMonitor, FiTrendingUp } from "react-icons/fi";

export const AboutUsComponent = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 p-12">
            {/* Sección del video / imagen */}
            <div className="relative group w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={InfoEmpresa.imagenesPlaceholder.aboutUs}
                    alt={InfoEmpresa.descripcion}
                    fill // Propiedad para ocupar todo el espacio del contenedor
                    style={{ objectFit: "cover" }} // Reemplaza objectFit
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-75"
                />
            </div>



            {/* Sección de texto e íconos */}
            <div className="space-y-12 max-w-5xl mx-auto">
                {/* Sección Principal de "Sobre Nosotros" */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                        Sobre Nosotros
                    </h2>
                    <p className="text-md text-gray-600 mt-4 leading-relaxed">
                        En <span className="text-blue-600 font-semibold">CodeX</span>, nos especializamos en
                        desarrollar aplicaciones web personalizadas que ayudan a emprendedores y empresas
                        a digitalizar y optimizar sus negocios. Nuestro objetivo es ofrecer soluciones que
                        no solo sean innovadoras, sino que también aumenten las ventas y mejoren la gestión
                        empresarial.
                    </p>
                </div>

                {/* Sección de Tarjetas con Íconos y Descripción */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Tarjeta 1 */}
                    <div className="flex items-start space-x-6">
                        <div className="text-green-500 text-5xl flex-shrink-0">
                            <FaShoppingCart />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Creación de Tiendas Virtuales
                            </h3>
                            <p className="text-md text-gray-600 mt-2">
                                Lanza tu propia tienda online para <strong>vender más rápido</strong> y <strong>sin
                                    complicaciones</strong>. Desde productos hasta pagos integrados, gestionamos todo el
                                proceso.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="flex items-start space-x-6">
                        <div className="text-blue-500 text-5xl flex-shrink-0">
                            <FiTrendingUp />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Optimización de Ventas y Productos
                            </h3>
                            <p className="text-md text-gray-600 mt-2">
                                Gestiona <strong>inventarios y productos</strong> con facilidad,
                                automatizando procesos y maximizando conversiones.
                            </p>
                        </div>
                    </div>


                </div>
            </div>


        </section>
    );
};
