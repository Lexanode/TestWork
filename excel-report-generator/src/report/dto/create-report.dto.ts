import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateReportDto {
  @ApiProperty({
    description: 'The title of the service for the report',
    example: 'TaxiMaksim',
  })
  @IsString()
  @IsNotEmpty()
  titleService: string;

  @ApiProperty({
    description: 'Array of column headers for the report',
    type: [String],
    example: [
      'id',
      'status',
      'price',
      'pickupLocation',
      'dropoffLocation',
      'create_date',
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  columnHeaders: string[];

  @ApiProperty({
    description: 'URL where the report data can be accessed',
    example: 'http://localhost:3001/api/v1/data?page=1&count=10',
  })
  @IsString()
  @IsNotEmpty()
  dataUrl: string;
}
