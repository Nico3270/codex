"use client";



import { Footer } from "@/componentes/ui/Footer";
import { TopMenu } from "@/componentes/ui/TopMenu";
import { TopMenuMobile } from "@/componentes/ui/TopMenuMobile";
import React, { useState, useEffect } from "react";


export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Renderiza TopMenu o TopMenuMobile dependiendo del tamaño de la pantalla */}
      {isMobile ? <TopMenuMobile /> : <TopMenu />}

      {/* Contenido principal */}
      <div className="flex-grow mt-0">{children}</div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
