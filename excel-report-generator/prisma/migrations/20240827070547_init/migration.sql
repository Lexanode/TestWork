-- CreateEnum
CREATE TYPE "StatusReport" AS ENUM ('PENDING', 'FAILED', 'SUCCESS');

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "status" "StatusReport" NOT NULL DEFAULT 'PENDING',
    "titleService" TEXT NOT NULL,
    "columnHeaders" TEXT[],
    "dataUrl" TEXT NOT NULL,
    "excelFileUrl" TEXT,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
