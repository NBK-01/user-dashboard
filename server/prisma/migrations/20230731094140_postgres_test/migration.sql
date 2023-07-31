-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "FirstName" TEXT,
    "LastName" TEXT,
    "email" TEXT NOT NULL,
    "role" TEXT,
    "isAdmin" BOOLEAN,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "user"("email");
