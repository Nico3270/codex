import {
    Concert_One,
    Faustina,
    Lato,
    Lexend,
    Merriweather,
    Montserrat_Alternates,
    Oldenburg,
    Protest_Guerrilla,
} from "next/font/google";


export const merriWeatherFont = Merriweather({
    subsets: ['latin'],
    weight: ["300"],
});

// Fuentes personalizadas
export const SeccionesFont = Faustina({ subsets: ['latin'], weight: ["400"] });
export const LogoFont = Lexend({ subsets: ['latin'], weight: ["400"] });

export const titleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const titulosPrincipales =Concert_One({
  subsets: ['latin'],
  weight: ["400"]
});

export const tituloCard = Lexend({
  subsets: ['latin'],
  weight: ["700"],
});

export const descripcionCard = Lato({ subsets: ['latin'], weight: ["400"] });
export const titulosCarrusel = Lexend({ subsets: ['latin'], weight: ["400"] });
export const tituloLogo = Protest_Guerrilla({ subsets: ['latin'], weight: ['400'] });
export const OldenburgFont = Oldenburg({ subsets: ['latin'], weight: ["400"] });