// Interfaces para Prisma Schema

// Section
export interface Section {
  id: string;
  name: string;
  slug?: string; // Opcional, para reflejar el schema
  iconName?: string;
  order: number;
  href: string; // Esto debe ser obligatorio porque está en tu schema
  isActive: boolean;
  createdAt?: Date; // Opcional, ya que Prisma lo genera automáticamente
  updatedAt?: Date; // Opcional, ya que Prisma lo genera automáticamente
}


// Video
export interface Video {
  id: string;
  url: string;
  title: string;
  description: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// ImageGallery
export interface ImageGallery {
  id: string;
  url: string;
  title: string;
  description: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Transaction
export enum TransactionType {
  Ingreso = "ingreso",
  Gasto = "gasto",
}


export enum IncomeCategory {
  Ventas = "ventas",
  Propinas = "propinas",
  Ahorro = "ahorro",
  Otros = "otros",
  Prestamos = "prestamos",
}

export enum ExpenseCategory {
  Implementos = "implementos",
  Materiales = "materiales",
  Arriendo = "arriendo",
  Empleados = "empleados",
  ServiciosPublicos = "servicios_publicos",
  Envios = "envios",
  Deudas = "deudas",
  Mantenimiento = "mantenimiento",
  Impuestos = "impuestos",
  Otros = "otros",
}

export enum PaymentMethod {
  Efectivo = "efectivo",
  Nequi = "nequi",
  Daviplata = "daviplata",
  CuentaPrincipal = "cuenta_principal",
  Transferencias = "transferencias",
}

export interface Transaction {
  id: string;
  date: string; // Fecha en formato ISO para evitar errores de hidratación
  type: TransactionType; // Enum personalizado
  description: string;
  category: IncomeCategory | ExpenseCategory; // Categorías personalizadas
  amount: number; // Convertido explícitamente a número en las acciones
  paymentMethod: PaymentMethod; // Enum personalizado
}



// User
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

// Service
export interface Service {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  slug: string;
  isActive: boolean;
  createdAt: string;  // Aseguramos que siempre sea string
  updatedAt: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
  url: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Tarjeta
export interface Tarjeta {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// CarruselSection
export interface CarruselSection {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
  orden: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Categoria
export interface Categoria {
  id: string;
  nombre: string;
  descripcion?: string | null;
  isActive?: boolean; // Nueva propiedad para activar/desactivar categorías
  createdAt?: Date;
  updatedAt?: Date;
  aplicaciones?: CatalogoApp[]; // Relación con aplicaciones en el catálogo
}

// CatalogoApp
export interface CatalogoApp {
  id: string;
  imagen: string;
  nombre: string;
  descripcion: string ;
  url: string;
  categoria?: Categoria; // Opcional: relación con la categoría
  categoriaId?: string; // Opcional: ID de la categoría asociada
  etiquetas?: string[]; // Opcional
  destacado?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
