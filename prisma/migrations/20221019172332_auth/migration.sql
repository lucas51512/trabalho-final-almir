-- CreateTable
CREATE TABLE `Supplies` (
    `idSupplie` INTEGER NOT NULL AUTO_INCREMENT,
    `nameSupplie` VARCHAR(191) NOT NULL,
    `descriptionSupplie` VARCHAR(191) NOT NULL,
    `priceSupplie` DOUBLE NOT NULL,

    PRIMARY KEY (`idSupplie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `nameUser` VARCHAR(191) NOT NULL,
    `emailUser` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_emailUser_key`(`emailUser`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
