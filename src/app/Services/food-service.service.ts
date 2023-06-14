import { Injectable } from '@angular/core';
import { Foods } from '../models/food';
import {  Observable, of } from 'rxjs';
import { CartItems } from '../models/cartItems';
@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  foodData: any;
  totalPrice: number = 0;
  totalQty: number = 0;
  cartFoodItems: CartItems[] = [];
  
  constructor() { 
  }

  getFoodData(): Observable<Foods[]> {
    const data = [
      {
        id: 1,
        name: 'Pizza',
        price: 200,
        cookTime: '20-30',
        favourite: true,
        origins: ['Italy', 'Persia'],
        stars: 4.0,
        imageUrl: '/assets/Images/pizza.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Water Balls',
        price: 20,
        cookTime: '5-10',
        favourite: false,
        origins: ['India', 'china'],
        stars: 5.0,
        imageUrl: '/assets/Images/golgappe.jpg',
        tags: ['FastFood']
      },
      {
        id: 3,
        name: 'Burger',
        price: 100,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy', 'America'],
        stars: 4.0,
        imageUrl: '/assets/Images/burger.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 4,
        name: 'Pizza',
        price: 200,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy', 'Japan', 'Russia'],
        stars: 4.0,
        imageUrl: '/assets/Images/pizza.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 5,
        name: 'Water Balls',
        price: 20,
        cookTime: '5-10',
        favourite: false,
        origins: ['India', 'Pakistan'],
        stars: 5.0,
        imageUrl: '/assets/Images/golgappe.jpg',
        tags: ['FastFood']
      },
      {
        id: 6,
        name: 'Burger',
        price: 100,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/burger.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      }, {
        id: 7,
        name: 'Pizza',
        price: 200,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/pizza.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 8,
        name: 'Water Balls',
        price: 20,
        cookTime: '5-10',
        favourite: false,
        origins: ['India'],
        stars: 5.0,
        imageUrl: '/assets/Images/golgappe.jpg',
        tags: ['FastFood']
      },
      {
        id: 9,
        name: 'Burger',
        price: 100,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/burger.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },

    ];
    this.foodData = data;
    return of(data);
  }

  addCartItems(data: any) {
    const obj=this.cartFoodItems.find(c => c.id == data.id)
    this.totalPrice+=data.price;
    this.totalQty++;
    if (obj) {
      obj.qty++;
    }
    else {
      const newobj = {
        ...data,
        qty: 1
      }
      this.cartFoodItems = [...this.cartFoodItems,newobj] //naya tareeka using spread operator
      //this.cartFoodItems.push(newobj) also can do this
    }
  }

  getCartItems(){
      return this.cartFoodItems;
  }

  changeItemQty(qty:number,data:CartItems){
    //tqty, tprice, data.qty

    const index = this.cartFoodItems.findIndex( c =>{
      return c.id == data.id
    })
    let prevQuantity=this.cartFoodItems[index].qty;
    this.totalPrice += (qty- prevQuantity)*data.price;
    this.totalQty+=(qty- prevQuantity);
    this.cartFoodItems[index].qty=qty;
  }

  getPriceandQuantity(){    
    return {price:this.totalPrice,qty:this.totalQty}
  }
}

  




