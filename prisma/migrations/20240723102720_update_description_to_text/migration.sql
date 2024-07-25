/*
  Warnings:

  - You are about to drop the column `titleImage` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Blog` DROP COLUMN `titleImage`,
    MODIFY `description` TEXT NOT NULL;
