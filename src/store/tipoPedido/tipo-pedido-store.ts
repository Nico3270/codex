import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type TipoOrden = "restaurante" | "domicilio" | "programado";

interface TipoOrdenState {
  tipoOrden: TipoOrden;
  setTipoOrden: (tipo: TipoOrden) => void;
  getTipoOrden: () => TipoOrden;
  resetTipoOrden: () => void;
}



export const useTipoOrdenStore = create<TipoOrdenState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      tipoOrden: "restaurante",

      // Cambia el tipo de orden
      setTipoOrden: (tipo) => set({ tipoOrden: tipo }),

      // Obtiene el estado actual
      getTipoOrden: () => get().tipoOrden,

      // Reinicia al valor por defecto
      resetTipoOrden: () => set({ tipoOrden: "restaurante" }),
    }),
    {
      name: "tipo-orden", // Clave para localStorage
    } as PersistOptions<TipoOrdenState>
  )
);
