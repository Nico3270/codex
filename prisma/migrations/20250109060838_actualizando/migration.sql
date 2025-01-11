/*
  Warnings:

  - You are about to drop the column `nombre` on the `Section` table. All the data in the column will be lost.
  - Added the required column `href` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CatalogoApp_categoriaId_idx";

-- DropIndex
DROP INDEX "CatalogoApp_destacado_idx";

-- AlterTable
ALTER TABLE "CatalogoApp" ALTER COLUMN "categoriaId" SET DEFAULT '1';

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "nombre",
ADD COLUMN     "href" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "slug" DROP NOT NULL;
