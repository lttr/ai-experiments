import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'The title of the book',
    example: 'The Great Gatsby',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The author of the book',
    example: 'F. Scott Fitzgerald',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({
    description: 'The year the book was published',
    example: 1925,
    minimum: 1000,
    maximum: new Date().getFullYear(),
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1000)
  @Max(new Date().getFullYear())
  publishedYear: number;
}
