
import { CarruselSection, CatalogoApp, Testimonial} from '@/interfaces/interfaces';
import Head from 'next/head';
import { PrincipalComponent } from '@/componentes/Principal/PrincipalComponent';
import { getCarruselItems,  getCatalogoAppsPrincipal, getTestimonios } from '@/actions/principal/principal-actions';



export default async function Home() {
  // Llama a las server actions para obtener los datos
  const carouselItems: CarruselSection[] = await getCarruselItems();
  const testimonios: Testimonial[] = await getTestimonios();
  const catalogoApps: CatalogoApp[] = await getCatalogoAppsPrincipal();
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Head>
        <title>CodeX | Aplicaciones Web Personalizadas</title>
        <meta name="description" content="CodeX - Aplicaciones Web Personalizadas para Emprendedores y Negocios. Optimiza la gestión de productos, órdenes y blogs con soluciones a medida." />
        <meta name="keywords" content="aplicaciones web, desarrollo web, ecommerce, gestión de productos, software a medida, dashboards, programación personalizada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrincipalComponent carouselItems={carouselItems} testimonios={testimonios} catalogoApps={ catalogoApps}  />
    </div>
  );
}

