import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
