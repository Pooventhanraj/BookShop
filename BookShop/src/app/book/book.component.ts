import { Component, EventEmitter, Input, OnInit, Output,Pipe } from '@angular/core';
import { Book } from 'src/Interfaces/Book';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  
  @Input() 
  book : Book ={
    name: '',
    author: '',
    imgUrl: '',
    amount: 0
  } 
  isItemInCart:Boolean =false;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    
  }

  // Child to parent - step:1 // create instance of EventEmitter and decorate with Output
  // @Output()
  // booksToAdded = new EventEmitter<Book>();

  addToCart(book:Book)
  {
     // Child to parent - step:2 //emit
    // this.booksToAdded.emit(this.book);
    this.cartservice.AddBooksToCart(book);
    this.isItemInCart =true;
   
  }

  removeItemFromCart(book:Book)
  {
    this.isItemInCart =false;
    this.cartservice.removeItemFromCart(book);
    
  }

}
