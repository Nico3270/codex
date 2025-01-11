// src/components/ServicesList.tsx
"use client";

import { useEffect, useState } from "react";
import AOS from 'aos';
import Image from "next/image";


import { SeccionesFont, titleFont, titulosPrincipales } from "@/config/fonts";
import { Service } from "@/interfaces/interfaces";
import { getServices } from "@/actions/servicios/service_actions";


export default function ServicesList() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicios = await getServices();
      setServices(servicios);
    };
    fetchServices();
    AOS.init({
                duration: 1000,
                offset: 100,
                once: true,
            });
  }, []);

  return (
    <section className="container mx-auto p-6">
      <h1  data-aos="fade-up" className={`text-3xl font-bold text-center mb-10 ${titulosPrincipales.className} color-titulos `}>Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id}  data-aos="fade-up" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={service.imagen}
              alt={service.titulo}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className={`text-2xl font-semibold ${SeccionesFont.className} color-titulo-tarjeta`}  data-aos="fade-up">{service.titulo}</h2>
              <p className={`text-gray-600 mt-2 ${titleFont.className} color-descripcion-tarjeta`}  data-aos="fade-up">{service.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
