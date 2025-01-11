"use client"

import React from 'react'
import { CarruselHero } from './CarruselHero'
import { InfoInicial } from './InfoInicial'
import AOS from 'aos';
import { useEffect } from 'react';

import { TestimoniosCarrusel } from './TestimonialCarrusel';
import { CatalogoAplicaciones } from './CatalogoAplicaciones';
import { CarruselSection, CatalogoApp, Testimonial } from '@/interfaces/interfaces';
import { AboutUsComponent } from './AboutUsComponent';
import { Divider } from '@mui/material';
import { FaCode } from 'react-icons/fa';
import { CTABanner } from './CallActionComponent';

interface PrincipalPageProps {
    catalogoApps: CatalogoApp[];
    carouselItems: CarruselSection[];
    testimonios: Testimonial[];
}

export const PrincipalComponent: React.FC<PrincipalPageProps> = ({ testimonios, carouselItems, catalogoApps }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);
    const SectionDivider = () => (
        <div className="flex items-center justify-center w-full py-2">
            <div className="flex items-center space-x-4">
                <Divider className="w-32 border-t border-gray-300" />
                <FaCode className="text-3xl text-blue-500" />
                <Divider className="w-32 border-t border-gray-300" />
            </div>
        </div>
    );
    return (
        <main className="py-8 text-center w-full">
            {/* Sección Carrusel y InfoInicial */}
            <section  className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full min-h-[00px]" data-aos="fade-up">
                <div className="lg:col-span-2 w-full">
                    <CarruselHero items={carouselItems} />
                </div>
                <div className="lg:col-span-1 w-full flex items-center justify-center bg-gray-100">
                    <InfoInicial />
                </div>
            </section>
            {/* Divisor Decorativo */}
            <SectionDivider />
            {/* Sección Catalogo de aplicaciones */}
            <section className="mt-2 w-full" data-aos="fade-up">
                <CatalogoAplicaciones aplicacionesCatalogo={catalogoApps} />
            </section>
            <SectionDivider />
            {/* Sección de Testimonios */}
            <section className="mt-2 w-full" data-aos="fade-up">
                <TestimoniosCarrusel testimonios={testimonios} />
            </section>
            
            
            <SectionDivider />
            {/* Sección de About Us */}
            <section className="mt-2 w-full" data-aos="fade-up">
                <AboutUsComponent />
            </section>
            {/* Divisor Decorativo */}
            <SectionDivider />
            <section className="mt-2 w-full" data-aos="fade-up">

            <CTABanner />
            </section>
            {/* Divisor Decorativo */}
            <SectionDivider />
        </main>
    )
}
