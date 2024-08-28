import { Injectable } from '@nestjs/common';

import * as Excel from 'exceljs';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()

export class ExcelService {

      
  private createWorkbook(workSheetName: string) {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet(workSheetName);
    return { workbook, worksheet };
  }
  private setColumns(columns: string[], worksheet: Excel.Worksheet) {
    const excelColumns = columns.map((el) => ({
      header: el,
      key: el,
    }));
    worksheet.columns = excelColumns;
  }
  private fillSheet(data: object[], worksheet: Excel.Worksheet) {
    data.forEach((item) => {
      worksheet.addRow(item);
    });
  }
  async saveDataToExcelSheet(
    workSheetName: string,
    fileName:string,
    columnHeaders: string[],
    pathReports: string,
    data: object[],
  ) {
    const { workbook, worksheet } = this.createWorkbook(workSheetName);
    this.setColumns(columnHeaders, worksheet);
    this.fillSheet(data, worksheet);

    await fs.mkdir(pathReports, { recursive: true });
 
    const filePath = path.join(
      pathReports,
      fileName,
    );
    await this.saveWorkbook(workbook, filePath);
    return fileName;
  }

  private async saveWorkbook(workbook: Excel.Workbook, filePath: string) {
    return workbook.xlsx.writeFile(filePath);
  }
}
