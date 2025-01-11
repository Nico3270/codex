/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Articulo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticuloSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Imagegallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderStatusHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSection` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orden` to the `CarruselSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ArticuloSection" DROP CONSTRAINT "ArticuloSection_articuloId_fkey";

-- DropForeignKey
ALTER TABLE "ArticuloSection" DROP CONSTRAINT "ArticuloSection_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderStatusHistory" DROP CONSTRAINT "OrderStatusHistory_orderId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSection" DROP CONSTRAINT "ProductSection_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSection" DROP CONSTRAINT "ProductSection_sectionId_fkey";

-- AlterTable
ALTER TABLE "CarruselSection" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "orden" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Testimonial" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified";

-- DropTable
DROP TABLE "Articulo";

-- DropTable
DROP TABLE "ArticuloSection";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Imagegallery";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "OrderStatusHistory";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductSection";

-- DropEnum
DROP TYPE "OrderState";

-- CreateTable
CREATE TABLE "ImageGallery" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImageGallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatalogoApp" (
    "id" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    "etiquetas" TEXT[],
    "destacado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CatalogoApp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImageGallery_url_key" ON "ImageGallery"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nombre_key" ON "Categoria"("nombre");

-- CreateIndex
CREATE INDEX "CatalogoApp_categoriaId_idx" ON "CatalogoApp"("categoriaId");

-- CreateIndex
CREATE INDEX "CatalogoApp_destacado_idx" ON "CatalogoApp"("destacado");

-- AddForeignKey
ALTER TABLE "CatalogoApp" ADD CONSTRAINT "CatalogoApp_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
