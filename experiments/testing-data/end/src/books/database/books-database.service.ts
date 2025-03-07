import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BooksDatabaseService {
  private books: Book[] = [];
  private nextId = 1;

  constructor() {
    this.initializeBooks();
  }

  private initializeBooks(): void {
    const exampleBooks: Omit<Book, 'id'>[] = [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedYear: 1960,
      },
      { title: '1984', author: 'George Orwell', publishedYear: 1949 },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedYear: 1925,
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publishedYear: 1813,
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        publishedYear: 1951,
      },
      { title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        publishedYear: 1997,
      },
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        publishedYear: 1954,
      },
      { title: 'Animal Farm', author: 'George Orwell', publishedYear: 1945 },
      { title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988 },
      { title: 'The Da Vinci Code', author: 'Dan Brown', publishedYear: 2003 },
      {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        publishedYear: 2008,
      },
      { title: 'The Shining', author: 'Stephen King', publishedYear: 1977 },
      {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        publishedYear: 1932,
      },
      { title: 'The Odyssey', author: 'Homer', publishedYear: -800 },
      { title: 'Moby-Dick', author: 'Herman Melville', publishedYear: 1851 },
      { title: 'War and Peace', author: 'Leo Tolstoy', publishedYear: 1869 },
      {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        publishedYear: 1866,
      },
      {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        publishedYear: 1967,
      },
      {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        publishedYear: 1605,
      },
    ];

    exampleBooks.forEach((book) => {
      this.create({
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
      });
    });
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  create(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.nextId++,
      ...createBookDto,
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, updateBookDto: UpdateBookDto): Book | undefined {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return undefined;
    }

    const updatedBook = {
      ...this.books[bookIndex],
      ...updateBookDto,
    };

    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  remove(id: number): boolean {
    const initialLength = this.books.length;
    this.books = this.books.filter((book) => book.id !== id);
    return initialLength !== this.books.length;
  }
}
