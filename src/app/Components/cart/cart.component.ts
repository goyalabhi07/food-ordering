import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/Services/food-service.service';
import { CartItems } from 'src/app/models/cartItems';
import { Foods } from 'src/app/models/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItems[] = [];
  totalPrice: number = 0;
  totalQty: number = 0;
  maxQuantity: number[] = [1, 2, 3, 4, 5];
  selectedQty: any;
  constructor(private fs: FoodServiceService) { 
  }

  ngOnInit() {
    this.cartItems = this.fs.getCartItems()
    // this.totalPrice = this.fs.getPriceandQuantity().price;
    
    this.totalQty = this.fs.getPriceandQuantity().qty;
  }

  changeQuantity(qty: any, data: CartItems) {
    this.fs.changeItemQty(qty.value, data);
    this.fs.totalPriceChange.subscribe(value =>{
      this.totalPrice = value;
  })
    // this.totalPrice = this.fs.getPriceandQuantity().price;
    this.totalQty = this.fs.getPriceandQuantity().qty;
    
  }


}
