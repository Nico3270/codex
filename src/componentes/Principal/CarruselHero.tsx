"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slideshow.css";

// Interface para el carrusel
import { CarruselSection } from "@/interfaces/interfaces";


interface Props {
    items: CarruselSection[];
}

export const CarruselHero: React.FC<Props> = ({ items }) => {
    return (
        <section className="w-full" aria-label="Carrusel de secciones principales">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                effect="fade"
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <article className="relative w-full h-[400px] md:h-[600px] lg:h-[800px]">
                            <Link href={item.url} className="group block relative w-full h-full">
                                <Image
                                    src={item.imagen }
                                    alt={item.titulo}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}  // Solo el primer slide tiene prioridad
                                />
                                <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-black/95 to-transparent pointer-events-none"></div>
                                <div className="absolute top-0 left-0 w-full p-6 text-white">
                                    <h3 className="text-4xl font-bold">{item.titulo}</h3>
                                    <p className="text-lg mt-2">{item.descripcion}</p>
                                </div>
                            </Link>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    );
};
