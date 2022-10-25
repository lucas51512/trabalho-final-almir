-- CreateTable
CREATE TABLE `Insignias` (
    `idInsignia` INTEGER NOT NULL AUTO_INCREMENT,
    `nameInsignia` VARCHAR(191) NOT NULL,
    `descriptionInsignia` VARCHAR(191) NOT NULL,
    `imageInsignia` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idInsignia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
