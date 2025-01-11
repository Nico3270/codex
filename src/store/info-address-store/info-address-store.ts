import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AddressState {
  nombre: string;
  telefono: string;
  direccion?: string;  // Reemplazo de 'address'
  barrio?: string;
  mesa?: string;
  horaProgramada?: string;  // Reemplazo de 'hora'
  comentario?: string;  // Reemplazo de 'description'
  tipo: "restaurante" | "domicilio" | "programado";

  setAddress: (data: Partial<AddressState>) => void;
  reset: () => void;
}

export const useInfoAddressStore = create<AddressState>()(
  persist(
    (set) => ({
      nombre: "",
      telefono: "",
      direccion: "",
      barrio: "",
      mesa: "",
      horaProgramada: "",
      comentario: "",
      tipo: "restaurante",

      setAddress: (data) => set((state) => ({ ...state, ...data })),
      reset: () =>
        set({
          nombre: "",
          telefono: "",
          direccion: "",
          barrio: "",
          mesa: "",
          horaProgramada: "",
          comentario: "",
          tipo: "restaurante",
        }),
    }),
    {
      name: "address-storage",  // Nombre en el localStorage
    }
  )
);
