import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksDatabaseService } from './database/books-database.service';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(private readonly booksDatabaseService: BooksDatabaseService) {}

  create(createBookDto: CreateBookDto): Book {
    return this.booksDatabaseService.create(createBookDto);
  }

  findAll(): Book[] {
    return this.booksDatabaseService.findAll();
  }

  findOne(id: number): Book {
    const book = this.booksDatabaseService.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto): Book {
    const book = this.booksDatabaseService.update(id, updateBookDto);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  remove(id: number): void {
    const deleted = this.booksDatabaseService.remove(id);
    if (!deleted) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
  }
}
