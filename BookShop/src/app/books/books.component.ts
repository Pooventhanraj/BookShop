import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Interfaces/Book';
import { BookServiceService } from '../Services/book-service.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],

})
export class BooksComponent implements OnInit {

  isDisplay:boolean = false;
  buttonName :string="Show Book Details";
  bookName:string ="";
  books: Book[] =[]

  constructor(private bookService:BookServiceService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

ShowBookDetails()
{
  if(!this.isDisplay)
  {
    this.isDisplay = true;
    this.buttonName="Hide Book Details"
  }
  else{
    this.isDisplay = false;
    this.buttonName="Show Book Details"
  }

 
}

addToCart(book : Book){
console.log(book)
}

}
