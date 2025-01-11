"use client";

import React from "react";
import { CatalogoApp } from "@/interfaces/interfaces";
import Head from "next/head";

import { CatalogoAplicacionesCompleto } from "../Principal/CatalogoAplicacionesCompleto";
import { InfoEmpresa } from "@/config/config";


interface CatalogoAppsProps {
    aplicacionesCatalogo: CatalogoApp[];
  }


export const Catalogo: React.FC<CatalogoAppsProps>  = ({aplicacionesCatalogo}) => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <Head>
        <title>Catálogo de Aplicaciones | CodeX</title>
        <meta
          name="description"
          content={InfoEmpresa.descripcion}
        />
        <meta
          name="keywords"
          content={InfoEmpresa.keywords}
        />
      </Head>

      <main className="w-full py-12">

        {/* Sección Grid de Aplicaciones */}
        <section className="mt-2 w-full max-w-7xl mx-auto px-4">
          {aplicacionesCatalogo.length > 0 ? (
            <CatalogoAplicacionesCompleto aplicacionesCatalogo={aplicacionesCatalogo} />
          ) : (
            <p className="text-lg text-gray-500 text-center">
              Cargando aplicaciones...
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

