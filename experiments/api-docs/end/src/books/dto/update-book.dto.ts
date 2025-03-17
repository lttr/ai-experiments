import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({
    description: 'All fields are optional for updates',
    required: false,
  })
  _description?: string;
}
