

import React from "react";
import Head from "next/head";
import { Catalogo } from "@/componentes/catalogo/Catalogo";
import { getCatalogoApps } from "@/actions/principal/principal-actions";
import { InfoEmpresa } from "@/config/config";

export default async function CatalogoPage  () {
  const catalogoApps = await getCatalogoApps();
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
      <main className="w-full py-4">
        {/* Hero Section */}
        {/* Sección Grid de Aplicaciones */}
        <section className="mt-2 w-full max-w-7xl mx-auto px-4">
          <Catalogo aplicacionesCatalogo={catalogoApps} />
        </section>
      </main>
    </div>
  );
};


