import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksDatabaseService } from './database/books-database.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksDatabaseService],
})
export class BooksModule {}
