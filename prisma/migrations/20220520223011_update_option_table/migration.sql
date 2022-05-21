/*
  Warnings:

  - Made the column `points` on table `options` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `options` MODIFY `points` INTEGER NOT NULL DEFAULT 0;
