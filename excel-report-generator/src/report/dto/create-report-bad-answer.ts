import { ApiProperty } from '@nestjs/swagger';

export class CreateReportBadAnswerDto {

  @ApiProperty({
    description: 'List of error messages explaining what went wrong',
    type: [String],
    example: [     "titleService should not be empty",
    "titleService must be a string",
    "each value in columnHeaders should not be empty",
    "each value in columnHeaders must be a string",
    "columnHeaders should not be empty",
    "columnHeaders must be an array",
    "dataUrl should not be empty",
    "dataUrl must be a string"],
  })
  message: string[];

  @ApiProperty({
    description: 'Description of the error type',
    example: 'Bad Request',
  })
  error: string;

  @ApiProperty({
    description: 'HTTP status code for the error',
    example: 400,
  })
  statusCode: number;
}
