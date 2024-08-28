import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ExcelModule } from 'src/excel/excel.module';


@Module({
  imports:[PrismaModule,ExcelModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
