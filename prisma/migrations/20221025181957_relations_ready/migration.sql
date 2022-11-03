/*
  Warnings:

  - You are about to drop the `insignias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `supplies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pokemonId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemon` ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `pokemonId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `insignias`;

-- DropTable
DROP TABLE `supplies`;

-- AddForeignKey
ALTER TABLE `Pokemon` ADD CONSTRAINT `Pokemon_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;
