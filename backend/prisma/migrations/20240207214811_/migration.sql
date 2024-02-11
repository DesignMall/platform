-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Executive', 'CEO', 'Admin');

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Archive" (
    "ArchiveId" TEXT NOT NULL,
    "CustomerID" TEXT NOT NULL,

    CONSTRAINT "Archive_pkey" PRIMARY KEY ("ArchiveId")
);

-- CreateTable
CREATE TABLE "Administrator" (
    "AdminID" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Role" "Roles" NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("AdminID")
);

-- CreateTable
CREATE TABLE "Provider" (
    "providerId" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Field" TEXT NOT NULL,
    "Rate" DOUBLE PRECISION NOT NULL,
    "Experience" INTEGER NOT NULL,
    "Available" BOOLEAN NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("providerId")
);

-- CreateTable
CREATE TABLE "Service" (
    "ServiceId" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "CustomerId" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("ServiceId")
);

-- CreateTable
CREATE TABLE "Suppliers" (
    "SupplierID" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Field" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("SupplierID")
);

-- CreateTable
CREATE TABLE "Player" (
    "PlayerID" TEXT NOT NULL,
    "PlayerName" TEXT NOT NULL,
    "PlayerNumber" TEXT NOT NULL,
    "Season" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("PlayerID")
);

-- CreateTable
CREATE TABLE "Teams" (
    "TeamID" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Category" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("TeamID")
);

-- CreateTable
CREATE TABLE "_ProviderToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerId_key" ON "Customer"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Archive_ArchiveId_key" ON "Archive"("ArchiveId");

-- CreateIndex
CREATE UNIQUE INDEX "Provider_providerId_key" ON "Provider"("providerId");

-- CreateIndex
CREATE UNIQUE INDEX "_ProviderToService_AB_unique" ON "_ProviderToService"("A", "B");

-- CreateIndex
CREATE INDEX "_ProviderToService_B_index" ON "_ProviderToService"("B");

-- AddForeignKey
ALTER TABLE "Archive" ADD CONSTRAINT "Archive_CustomerID_fkey" FOREIGN KEY ("CustomerID") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("TeamID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProviderToService" ADD CONSTRAINT "_ProviderToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Provider"("providerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProviderToService" ADD CONSTRAINT "_ProviderToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("ServiceId") ON DELETE CASCADE ON UPDATE CASCADE;
