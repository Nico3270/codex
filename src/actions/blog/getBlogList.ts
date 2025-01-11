"use server";

import prisma from "@/lib/prisma";

export const getBlogList = async () => {
  try {
    const blogs = await prisma.articulo.findMany({
      orderBy: [{ orden: "asc" }, { fechaPublicacion: "asc" }],
    });
    return blogs;
  } catch (error) {
    console.error("Error al obtener blogs:", error);
    return []; // Retorna un array vacío en caso de error
  }
};
