import { ApiProperty } from '@nestjs/swagger';

export class NotFoundError {

  @ApiProperty({
    description: "status code not found",
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    description: "Record not found in the database",
    example: "Record not found in the database"
  })
  message: string;
}
