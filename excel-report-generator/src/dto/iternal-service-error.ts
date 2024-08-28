import { ApiProperty } from '@nestjs/swagger';

export class InternalServerErrorDto {
  @ApiProperty({
    description: 'HTTP status code of the error',
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Description of the error',
    example: 'Internal server error',
  })
  message: string;
}
