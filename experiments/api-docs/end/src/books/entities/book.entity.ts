import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({ description: 'The unique identifier of the book', example: 1 })
  id: number;

  @ApiProperty({
    description: 'The title of the book',
    example: 'The Great Gatsby',
  })
  title: string;

  @ApiProperty({
    description: 'The author of the book',
    example: 'F. Scott Fitzgerald',
  })
  author: string;

  @ApiProperty({
    description: 'The year the book was published',
    example: 1925,
    minimum: 1000,
    maximum: new Date().getFullYear(),
  })
  publishedYear: number;
}
