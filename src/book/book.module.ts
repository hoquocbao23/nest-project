import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {  Book, BookSchema } from './schema/book.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema } ])],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService, MongooseModule]
})
export class BookModule {}
