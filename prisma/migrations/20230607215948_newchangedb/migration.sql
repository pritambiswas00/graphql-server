/*
  Warnings:

  - A unique constraint covering the columns `[movieName]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Movie_movieName_key" ON "Movie"("movieName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
