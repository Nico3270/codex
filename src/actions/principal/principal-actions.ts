import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Server Action: Obtener CarruselItems
// Server Action: Obtener CarruselItems
export const getCarruselItems = async () => {
    try {
        const items = await prisma.carruselSection.findMany({
            where: { isActive: true }, // Solo los activos
            orderBy: [
                { orden: "asc" }, // Ordenar primero por "orden" (de menor a mayor)
                { updatedAt: "desc" }, // Luego por "updatedAt" (los más recientes primero)
                { createdAt: "desc" }, // Finalmente por "createdAt" (los más recientes primero)
            ],
        });
        return items;
    } catch (error) {
        console.error("Error obteniendo los carrusel items:", error);
        return [];
    }
};


// Server Action: Obtener Testimonios
export const getTestimonios = async () => {
    try {
        const testimonios = await prisma.testimonial.findMany({
            where: { isActive: true }, // Solo los activos
            orderBy: [{ createdAt: "desc" }, { updatedAt: "desc" },], // Más recientes primero
        });
        return testimonios;
    } catch (error) {
        console.error("Error obteniendo los testimonios:", error);
        return [];
    }
};

// Server Action: Obtener CatalogoApps
// Server Action: Obtener CatalogoApps para la página principal
export const getCatalogoAppsPrincipal = async () => {
    try {
        const catalogoApps = await prisma.catalogoApp.findMany({
            take: 3, // Limitar a 3 resultados
            include: {
                categoria: true, // Incluir la relación con Categoría
            },
            orderBy: [
                { destacado: "desc" }, // Mostrar primero los destacados
                { updatedAt: "desc" }, // Luego por "updatedAt" (los más recientes primero)
                { createdAt: "desc" }, // Finalmente por "createdAt" (los más recientes primero)
            ],
        });
        return catalogoApps;
    } catch (error) {
        console.error("Error obteniendo las aplicaciones del catálogo:", error);
        return [];
    }
};


// Server Action: Obtener CatalogoApps
export const getCatalogoApps = async () => {
    try {
        const catalogoApps = await prisma.catalogoApp.findMany({
            include: {
                categoria: true, // Incluir la relación con Categoría
            },
            orderBy: [
                { destacado: "desc" }, // Mostrar primero los destacados
                { updatedAt: "desc" }, // Luego por "updatedAt" (los más recientes primero)
                { createdAt: "desc" }, // Finalmente por "createdAt" (los más recientes primero)
            ],
        });
        return catalogoApps;
    } catch (error) {
        console.error("Error obteniendo las aplicaciones del catálogo:", error);
        return [];
    }
};
