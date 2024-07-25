/*
  Warnings:

  - You are about to drop the column `image` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Blog` DROP COLUMN `image`,
    MODIFY `description` LONGTEXT NOT NULL;
