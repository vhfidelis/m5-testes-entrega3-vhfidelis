/*
  Warnings:

  - You are about to alter the column `name` on the `Car` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to alter the column `brand` on the `Car` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "brand" SET DATA TYPE VARCHAR(100);
