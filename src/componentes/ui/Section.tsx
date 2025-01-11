"use server";

import prisma from "@/lib/prisma";

export interface Section {
  id: string;
  name: string; // Nombre de la sección
  href: string; // Slug o URL a la que apunta
  iconName: string; // Nombre del ícono
  order: number; // Orden de prioridad
  isActive: boolean; // Estado de la sección
}


// Interfaz para las secciones de Prisma (correspondiente al modelo en la BD)
interface PrismaSection {
  id: string;
  name: string;
  slug: string | null; // Slug puede ser null
  iconName: string | null; // Icono puede ser null
  order: number;
  isActive: boolean;
}

// Server Action: Obtener secciones activas y transformarlas para el frontend
export const getSectionsFromDB = async (): Promise<Section[]> => {
  try {
    // Consulta a la base de datos para obtener secciones activas
    const sections: PrismaSection[] = await prisma.section.findMany({
      where: { isActive: true },
      orderBy: [
        { order: "asc" },
        { updatedAt: "desc" }, // Luego por los más recientemente actualizados
        { createdAt: "desc" }, // Finalmente por los más recientemente creados
      ],
    });

    // Transformar las secciones al formato esperado en el frontend (Section[])
    return sections.map((section) => ({
      id: section.id,
      name: section.name, // Cambiado de "name" a "nombre" para reflejar Prisma
      href: section.slug || "#", // Si no hay slug, usa un valor por defecto
      iconName: section.iconName || "default-icon", // Si no hay iconName, usa un icono por defecto
      order: section.order, // Orden de la sección
      isActive: section.isActive, // Estado de la sección
    }));
  } catch (error) {
    console.error("Error al obtener las secciones desde la base de datos:", error);
    return [];
  }
};
