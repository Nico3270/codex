"use server";

import { AdaptedArticulo } from "@/componentes/blog/ModifyBlogComponent";
import prisma from "@/lib/prisma";


export const getBlogById = async (id: string) => {
  try {
    const blog = await prisma.articulo.findUnique({
      where: { id },
    });

    if (!blog) return null;

    return {
      ...blog,
      imagenes: blog.imagenes.map((url: string) => ({ url })), // Transformar imágenes
      parrafos: blog.parrafos.map((texto: string) => ({ texto })), // Transformar párrafos
      subtitulos: blog.subtitulos.map((texto: string) => ({ texto })), // Transformar subtítulos

    } as AdaptedArticulo;
  } catch (error) {
    console.error("Error al obtener el blog por ID:", error);
    return null;
  }
};
