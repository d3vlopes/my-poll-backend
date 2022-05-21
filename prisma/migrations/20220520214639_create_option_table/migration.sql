-- CreateTable
CREATE TABLE `options` (
    `id` VARCHAR(191) NOT NULL,
    `poll_id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `points` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `options` ADD CONSTRAINT `options_poll_id_fkey` FOREIGN KEY (`poll_id`) REFERENCES `polls`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
