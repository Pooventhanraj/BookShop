import { Injectable } from '@angular/core';
import { Book } from 'src/Interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  books: Book[]=[];

  AddBooksToCart(book:Book){
    console.log(book);
    this.books.push(book)
    console.log(this.books);
  }

CartDetails()
{
  return this.books;
}

removeItemFromCart(book:Book)
  {
   this.books = this.books.filter(item=>item.name != book.name)
  }

}

