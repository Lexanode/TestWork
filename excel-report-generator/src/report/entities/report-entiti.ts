import { ApiProperty } from '@nestjs/swagger';
import { StatusReport, Report as PrismaReport } from '@prisma/client';

export class ReportEntity implements PrismaReport {
  @ApiProperty({
    description: 'Unique identifier for the report',
    example: 52,
  })
  id: number;

  @ApiProperty({
    description: 'Status of the report',
    example: 'SUCCESS',
  })
  status: StatusReport;

  @ApiProperty({
    description: 'Title or name of the service related to the report',
    example: 'TaxiMaksim',
  })
  titleService: string;

  @ApiProperty({
    description: 'List of column headers in the report',
    example: ['id', 'status', 'price', 'pickupLocation', 'dropoffLocation', 'create_date'],
  })
  columnHeaders: string[];

  @ApiProperty({
    description: 'URL to fetch the report data',
    example: 'http://localhost:3001/api/v1/data?page=1&count=10',
  })
  dataUrl: string;

  @ApiProperty({
    description: 'URL to download the generated Excel file',
    example: 'http://localhost:3000/reports/report-TaxiMaksim-52.xlsx',
  })
  excelFileUrl: string | null;

  @ApiProperty({
    description: 'Error message if any error occurred during report generation',
    example: null,
  })
  errorMessage: string | null;

  @ApiProperty({
    description: 'Timestamp when the report was created',
    example: '2024-08-28T10:18:47.887Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Timestamp when the report was last updated',
    example: '2024-08-28T10:18:47.956Z',
  })
  updatedAt: Date;
}
