-- CreateEnum
CREATE TYPE "StatusRide" AS ENUM ('PENDING', 'COMPLETED', 'CANCELED');

-- CreateTable
CREATE TABLE "OrdersTaxi" (
    "id" TEXT NOT NULL,
    "status" "StatusRide" NOT NULL DEFAULT 'PENDING',
    "price" INTEGER NOT NULL,
    "pickupLocation" TEXT NOT NULL,
    "dropoffLocation" TEXT NOT NULL,

    CONSTRAINT "OrdersTaxi_pkey" PRIMARY KEY ("id")
);
