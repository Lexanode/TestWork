import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExcelService } from 'src/excel/excel.service';
import { StatusReport } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import * as path from 'path';

@Injectable()
export class ReportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly excelService: ExcelService,
    private readonly configService: ConfigService
  ) {}
  private async generateExcelReport(
    taskId: number,
    createReportDto: CreateReportDto,
  ) {
    try {
      const response = await axios.get(createReportDto.dataUrl, {
        responseType: 'json',
      });
      const { orders } = response.data.data;


      const portReports = this.configService.get<string>('pathReports');
      const exportDir = path.resolve(__dirname, portReports);
      const fileName = `report-${createReportDto.titleService}-${taskId}.xlsx`;

      await this.excelService.saveDataToExcelSheet(
        createReportDto.titleService,
        fileName,
        createReportDto.columnHeaders,
        exportDir,
        orders,
      );

      const host = this.configService.get<string>('host');
      const excelFileUrl = `http://${host}/reports/${fileName}`;

      await this.update(taskId, {
        excelFileUrl: excelFileUrl,
        status: StatusReport.SUCCESS,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        error as AxiosError;

        await this.update(taskId, {
          status: StatusReport.FAILED,
          errorMessage: 'Failed get data from url',
        });
      } else {
        await this.update(taskId, {
          status: StatusReport.FAILED,
          errorMessage: error?.message || 'Unknown error',
        });
      }
      console.log(error);
      throw new InternalServerErrorException({
        message: 'Error generating report',
        statusCode: 500,
      });
    }
  }
  async create(createReportDto: CreateReportDto) {
    const report = await this.prisma.report.create({
      data: {
        ...createReportDto,
        status: StatusReport.PENDING,
      },
    });
    const taskId = report.id;

    this.generateExcelReport(taskId, createReportDto);

    return {
      id: taskId,
      message: 'Report Task created',
      statusCode: 201,
    };
  }
  async findOne(id: number) {
    const report = await this.prisma.report.findUnique({
      where: {
        id: id,
      },
    });

    if (!report) {
      throw new NotFoundException({
        message: 'Record not found in the database',
        statusCode: 404,
      });
    }

    return report;
  }
  async update(id: number, updateReportDto: UpdateReportDto) {
    return await this.prisma.report.update({
      where: { id: id },
      data: {
        ...updateReportDto,
      },
    });
  }

}
