
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export interface FavoriteProduct {
  id: string; // Identificador único del producto
  slug: string; // Slug para redirigir al detalle del producto
  title: string; // Nombre del producto
  price: number; // Precio del producto
  description: string; // Descripción breve del producto
  images: string[]; // Lista de URLs de imágenes del producto
}

interface State {
  favorites: FavoriteProduct[];
  addProductFavorites: (product: FavoriteProduct) => void;
  getTotalItems: () => number;
  removeProductFavorites: (id: string) => void;
}

export const useFavoritesCatalogoStore = create<State>()(
  persist(
    (set, get) => ({
      favorites: [],
      addProductFavorites: (product: FavoriteProduct) => {
        set((state) => ({ favorites: [...state.favorites, product] }));
      },
      getTotalItems: () => {
        const { favorites } = get();
        return favorites.length;
      },
      
      removeProductFavorites: (id: string) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),
      // Nueva función para calcular el precio total del carrito
    }),
    {
      name: "favorites",
    } as PersistOptions<State>
  )
);
