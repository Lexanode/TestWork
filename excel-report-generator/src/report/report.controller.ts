import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CreateReportGoodAnswerDto } from './dto/create-report-good-answer';
import { CreateReportBadAnswerDto } from './dto/create-report-bad-answer';
import { ReportEntity } from './entities/report-entiti';
import { InternalServerErrorDto } from 'src/dto/iternal-service-error';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

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

  // @Get()
  // findAll() {
  //   return this.reportService.findAll();
  // }

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
    status: 500,
    description: 'Internal server error',
    type: InternalServerErrorDto,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reportService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
  //   //todo use pipes to VASLIUDE id
  //   return this.reportService.update(+id, updateReportDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportService.remove(+id);
  // }
}
