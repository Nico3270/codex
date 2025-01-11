import { create } from "zustand";

// Definimos el estado del modal
interface ModalState {
  isOpen: boolean;
  texto: string;
  type: "success" | "error" | "warning" | "info";
  showModal: (texto: string, type?: "success" | "error" | "warning" | "info") => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  texto: "",
  type: "info",

  showModal: (texto, type = "info") =>
    set({
      isOpen: true,
      texto,
      type,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      texto: "",
    }),
}));
