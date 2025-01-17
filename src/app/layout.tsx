import type { Metadata } from "next";
import { InfoEmpresa as empresa } from "@/config/config";
import "./globals.css";
import { merriWeatherFont } from "@/config/fonts";
import { Provider } from "@/providers/Provider";

export const metadata: Metadata = {
  metadataBase: new URL(empresa.linkWebProduccion),
  title: empresa.titulo,
  description: `${empresa.nombreCompleto} ${empresa.descripcion}`,
  keywords: empresa.keywords,
  robots: "index, follow",
  openGraph: {
    title: empresa.titulo,
    description: `${empresa.nombreCompleto} ${empresa.descripcion}`,
    type: "website",
    url: empresa.website,
    images: [
      {
        url: empresa.imagenesPlaceholder.imagenRepresentativa,
        width: 800,
        height: 600,
        alt: empresa.descripcion
      },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": empresa.nombreCompleto,
              "url": empresa.website,
              "logo": empresa.imagenesPlaceholder.imagenRepresentativa,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": empresa.telefono,
                "contactType": "customer service",
                "email": empresa.email,
              },
              "sameAs": [
                empresa.urlInstagram,
                empresa.urlFacebook,
                empresa.urlTiktok
              ].filter(url => url) // Filtra URLs vacías
            }),
          }}
        />
      </head>
      <body className={`${merriWeatherFont.className} bg-[#fff]`}>
        <Provider>{children}

        </Provider>
      </body>
    </html>
  );
}
