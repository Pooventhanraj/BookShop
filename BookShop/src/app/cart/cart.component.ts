import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Interfaces/Book';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartSrvice : CartService) { }
  cartItems : Book[]=[];

  ngOnInit(): void {
  }

  getCartDetails(){
  this.cartItems =  this.cartSrvice.CartDetails()

    return this.cartItems;
  }

  
 
}
