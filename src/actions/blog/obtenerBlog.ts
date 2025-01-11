"use server"

import prisma from "@/lib/prisma";

export async function obtenerBlogs() {
  try {
    const blogs = await prisma.articulo.findMany({
      orderBy: [{orden: "asc"}
        ,{
        fechaPublicacion: "desc", // Ordenar por fecha de publicación, más recientes primero
      }],
    });

    return blogs;
    console.log({blogs});
  } catch (error) {
    console.error("Error al obtener los blogs:", error);
    throw new Error("No se pudieron obtener los blogs");
  }
}
