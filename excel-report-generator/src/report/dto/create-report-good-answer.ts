import { ApiProperty } from '@nestjs/swagger';

export class CreateReportGoodAnswerDto {

  @ApiProperty({
    description: 'The ID of the created report',
    example: 123,
  })
  id: number;

  @ApiProperty({
    description: 'Message indicating the result of the operation',
    example: 'Report Task created',
  })
  message: string;
}
