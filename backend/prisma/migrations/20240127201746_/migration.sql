-- CreateTable
CREATE TABLE "customer" (
    "CustomerID" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "OrderCategory" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("CustomerID")
);
