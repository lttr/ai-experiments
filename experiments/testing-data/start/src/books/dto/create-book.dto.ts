import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1000)
  @Max(new Date().getFullYear())
  publishedYear: number;
}
