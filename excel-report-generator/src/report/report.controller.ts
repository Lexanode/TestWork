import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CreateReportGoodAnswerDto } from './dto/create-report-good-answer';
import { CreateReportBadAnswerDto } from './dto/create-report-bad-answer';
import { ReportEntity } from './entities/report-entiti';
import { InternalServerErrorDto } from 'src/dto/iternal-service-error';
import { NotFoundError } from './dto/not-found-error';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) { }

  @ApiResponse({
    status: 201,
    description: 'The report has been successfully created.',
    type: CreateReportGoodAnswerDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Wrong data provided',
    type: CreateReportBadAnswerDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    type: InternalServerErrorDto,
  })
  @Post()
  create(
    @Body() createReportDto: CreateReportDto,
  ): Promise<CreateReportGoodAnswerDto> {
    return this.reportService.create(createReportDto);
  }
  @ApiResponse({
    status: 201,
    description: 'The report has been successfully created.',
    type: ReportEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Wrong data provided',
    type: CreateReportBadAnswerDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found row in db',
    type: NotFoundError,
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    type: InternalServerErrorDto,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reportService.findOne(id);
  }
}
