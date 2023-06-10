import { Injectable } from '@angular/core';
import {Foods} from '../models/food';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }

  getFoodData():Observable<Foods[]>{
    const data=[
      {
        id:1,
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
        id:2,
        name: 'Water Balls',
        price: 20,
        cookTime: '5-10',
        favourite: false,
        origins: ['India','china'],
        stars: 5.0,
        imageUrl: '/assets/Images/golgappe.jpg',
        tags: ['FastFood']
      },
      {
        id:3,
        name: 'Burger',
        price: 100,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy','America'],
        stars: 4.0,
        imageUrl: '/assets/Images/burger.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id:4,
        name: 'Pizza',
        price: 200,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy','Japan','Russia'],
        stars: 4.0,
        imageUrl: '/assets/Images/pizza.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id:5,
        name: 'Water Balls',
        price: 20,
        cookTime: '5-10',
        favourite: false,
        origins: ['India','Pakistan'],
        stars: 5.0,
        imageUrl: '/assets/Images/golgappe.jpg',
        tags: ['FastFood']
      },
      {
        id:6,
        name: 'Burger',
        price: 100,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/Images/burger.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },{
        id:7,
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
        id:8,
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
        id:9,
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
    return of (data);
  }
}
