


import { fetchGalleryImages } from "@/actions/galeria/fetchGalleryImages";
import { fetchGalleryVideos } from "@/actions/galeria/fetchGalleryVideos";
import GalleryComponent from "@/componentes/galeria/GalleryComponent";

export const dynamic = "force-dynamic"; // Asegura que la acción no use caché


export default async function GalleryPage() {
  // Llamada a las acciones para obtener los datos
  const images = await fetchGalleryImages();
  const videos = await fetchGalleryVideos();

  return (
    <div>
      {/* Pasamos las imágenes y videos desde la base de datos */}
      <GalleryComponent videos={videos} images={images} />
    </div>
  );
}
