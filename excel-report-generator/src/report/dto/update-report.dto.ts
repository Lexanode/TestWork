import { StatusReport } from '@prisma/client';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateReportDto {
  @IsOptional()
  @IsEnum(StatusReport)
  status?: StatusReport;

  @IsOptional()
  @IsString()
  titleService?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  columnHeaders?: string[];

  @IsOptional()
  @IsString()
  dataUrl?: string;

  @IsOptional()
  @IsString()
  excelFileUrl?: string;

  @IsOptional()
  @IsString()
  errorMessage?: string;
}
