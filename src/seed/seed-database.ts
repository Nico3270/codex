import { PrismaClient } from "@prisma/client";
import { initialData } from "./seed";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Eliminando datos existentes...");

    // Eliminar usuarios y secciones existentes
    await prisma.user.deleteMany();
    await prisma.section.deleteMany();
    await prisma.catalogoApp.deleteMany();
    await prisma.categoria.deleteMany();
    await prisma.carruselSection.deleteMany();
    await prisma.testimonial.deleteMany();
    await prisma.video.deleteMany();
    await prisma.imageGallery.deleteMany();
    await prisma.articulo.deleteMany();
    await prisma.transaction.deleteMany();

    console.log("Datos eliminados correctamente.");

    // Insertar secciones
    console.log("Insertando secciones...");
    for (const section of initialData.secciones) {
      await prisma.section.create({
        data: {
          id: section.id,
          name: section.name,
          slug: section.slug || "",
          iconName: section.iconName,
          order: section.order,
          href: section.href,
          isActive: section.isActive,
        },
      });
    }
    console.log("Secciones insertadas correctamente.");

    // Insertar categorías
    console.log("Insertando categorías...");
    for (const categoria of initialData.categorias) {
      await prisma.categoria.create({
        data: {
          id: categoria.id,
          nombre: categoria.nombre,
          descripcion: categoria.descripcion || null,
          isActive: categoria.isActive ?? true,
        },
      });
    }
    console.log("Categorías insertadas correctamente.");

    // Insertar elementos del carrusel
    console.log("Insertando carrusel...");
    for (const item of initialData.carouselItems) {
      await prisma.carruselSection.create({
        data: {
          id: item.id,
          titulo: item.titulo,
          descripcion: item.descripcion,
          imagen: item.imagen,
          url: item.url,
          orden: item.orden,
          isActive: item.isActive,
        },
      });
    }
    console.log("Carrusel insertado correctamente.");


    // Insertar testimonios
    console.log("Insertando testimonios...");
    for (const testimonio of initialData.testimonios) {
      await prisma.testimonial.create({
        data: {
          id: testimonio.id,
          imagen: testimonio.imagen,
          titulo: testimonio.titulo,
          descripcion: testimonio.descripcion,
          url: testimonio.url,
          isActive: testimonio.isActive,
        },
      });
    }
    console.log("Testimonios insertados correctamente.");

    // Insertar aplicaciones del catálogo
    console.log("Insertando aplicaciones del catálogo...");
    for (const app of initialData.catalogoApps) {
      await prisma.catalogoApp.create({
        data: {
          id: app.id,
          imagen: app.imagen,
          nombre: app.nombre,
          descripcion: app.descripcion,
          url: app.url,
          categoriaId: app.categoriaId || "1", // Asegura una categoría por defecto
          etiquetas: app.etiquetas || [],
          destacado: app.destacado ?? false,
        },
      });
    }
    console.log("Aplicaciones del catálogo insertadas correctamente.");


     // Inserción de Videos
     for (const video of initialData.videos) {
      await prisma.video.upsert({
        where: { id: video.id },
        update: {},
        create: {
          id: video.id,
          url: video.url,
          title: video.title,
          description: video.description,
          order: video.order,
          createdAt: video.createdAt,
        },
      });
    }
    console.log("✅ Videos insertados.");

    // Inserción de Imágenes de Galería
    for (const img of initialData.imagenesGaleria) {
      await prisma.imageGallery.upsert({
        where: { id: img.id },
        update: {},
        create: {
          id: img.id,
          url: img.url,
          title: img.title,
          description: img.description,
          order: img.order,
          createdAt: img.createdAt,
          updatedAt: img.updatedAt,
        },
      });
    }
    console.log("✅ Galería de imágenes insertada.");

    // Inserción de Servicios
    for (const service of initialData.servicios) {
      await prisma.service.upsert({
        where: { id: service.id },
        update: {},
        create: {
          id: service.id,
          titulo: service.titulo,
          descripcion: service.descripcion,
          imagen: service.imagen,
          slug: service.slug,
          isActive: service.isActive,
        },
      });

    }
    console.log("✅ Servicios insertados.");

    // 
    // Insertar artículos
    console.log("Insertando artículos...");
    for (const articulo of initialData.articulos) {
      let uniqueSlug = articulo.slug;

      await prisma.articulo.create({
        data: {
          id: articulo.id,
          orden: articulo.orden,
          slug: uniqueSlug,
          titulo: articulo.titulo,
          descripcion: articulo.descripcion,
          imagen: articulo.imagen,
          imagenes: articulo.imagenes,
          parrafos: articulo.parrafos,
          subtitulos: articulo.subtitulos,
          fechaPublicacion: articulo.fechaPublicacion,
          autor: articulo.autor,
        },
      });
    }

    // Inserción de Usuarios
    for (const user of initialData.usuarios) {
      await prisma.user.upsert({
        where: { email: user.email },
        update: {},
        create: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
          image: user.image,
          emailVerified: user.emailVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    }
    console.log("✅ Usuarios insertados.");
    // Insertar usuario admin
    // Insertar usuario admin
    console.log("Insertando usuario administrador...");

    // Verifica si el usuario admin ya existe
    const existingAdmin = await prisma.user.findUnique({
      where: {
        email: "adminprincipal@gmail.com",
      },
    });

    if (!existingAdmin) {
      const hashedPassword = bcryptjs.hashSync("admin1234", 10); // Hashear la contraseña
      await prisma.user.create({
        data: {
          name: "Nico",
          email: "adminprincipal@gmail.com",
          password: hashedPassword,
          role: "admin",
        },
      });
      console.log("Usuario administrador insertado correctamente.");
    } else {
      console.log("El usuario administrador ya existe. No se realizó inserción.");
    }

  } catch (error) {
    console.error("Error durante la inserción de datos:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
