import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    if (this.idDoesNotExist(id)) {
      throw new NotFoundException(`Book #${id} is not found`);
    }
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  private idDoesNotExist(id: number) {
    return id <= 0;
  }
}
