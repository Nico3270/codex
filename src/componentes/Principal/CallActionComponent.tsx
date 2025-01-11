"use client";

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { InfoEmpresa } from '@/config/config';

export const CTABanner: React.FC = () => {
    const whatsappMessage = encodeURIComponent("¡Hola! Estoy interesado en desarrollar una aplicación web con CodeX. ¿Podrían darme más información?");
    const whatsappLink = `https://wa.me/${InfoEmpresa.telefono}?text=${whatsappMessage}`;

    return (
        <section className="relative w-full bg-white py-8 text-center color-titulo-tarjeta">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl font-extrabold leading-tight text-[#A31D1D]">
                    ¿Listo para llevar tu negocio al siguiente nivel?
                </h2>

                {/* Sección de Beneficios y Contacto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12">
                    
                    {/* Beneficios Izquierda */}
                    <div className="text-left md:text-center max-w-sm mx-auto">
                        <h3 className="text-xl font-semibold mb-4">Beneficios:</h3>
                        <ul className="space-y-3 text-md color-descripciones">
                            <li className="flex items-center space-x-2">
                                🚀 <span>Impulsa tu presencia online</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                💻 <span>Aplicaciones 100% personalizadas</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                📈 <span>Aumenta tus ventas fácilmente</span>
                            </li>
                        </ul>
                    </div>

                    {/* Cuadro Principal (Contacto) */}
                    <div className="bg-white text-[#213555] rounded-lg p-6 shadow-xl max-w-lg mx-auto flex flex-col items-center space-y-6">
                        <div className="flex items-center space-x-6">
                            <FaPhoneAlt className="text-5xl text-blue-600" />
                            <div className="text-left">
                                <h3 className="text-2xl font-bold leading-tight">Contáctanos</h3>
                                <p className="text-md color-descripcion">
                                    ¡Estamos listos para ayudarte!
                                </p>
                            </div>
                        </div>
                        <div className="w-full border-t border-gray-200"></div>
                        
                        {/* Iconos de Redes Sociales */}
                        <div className="flex justify-center space-x-8">
                            <Link href={`mailto:${InfoEmpresa.email}`} className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
                                <FaEnvelope className="text-3xl" />
                                <span className="text-sm mt-2">Email</span>
                            </Link>
                            <Link href={whatsappLink} className="flex flex-col items-center text-gray-700 hover:text-green-500 transition">
                                <FaWhatsapp className="text-3xl" />
                                <span className="text-sm mt-2">WhatsApp</span>
                            </Link>
                            <Link href={`tel:+57${InfoEmpresa.telefono}`} className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
                                <FaPhoneAlt className="text-3xl" />
                                <span className="text-sm mt-2">Llámanos</span>
                            </Link>
                        </div>
                    </div>

                    {/* Beneficios Derecha */}
                    <div className="text-left md:text-center max-w-sm mx-auto">
                        <h3 className="text-xl font-semibold mb-4">¿Por qué elegirnos?</h3>
                        <ul className="space-y-3 text-md color-descripciones">
                            <li className="flex items-center space-x-2">
                                ✔️ <span>Desarrollo ágil y moderno</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                🌐 <span>Conexión con redes sociales</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                🔒 <span>Seguridad y optimización web</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
