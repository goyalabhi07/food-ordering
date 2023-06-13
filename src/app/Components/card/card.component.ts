import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from 'src/app/Services/food-service.service';
import { Foods } from 'src/app/models/food';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  isFoodComponent:boolean = false;
  fav : boolean = false;
  @Input() data : Foods={
    id: 0,
    price: 0,
    name: '',
    favourite: false,
    stars: 0,
    imageUrl: '',
    cookTime: '',
    origins: []
  }

  constructor(private route: ActivatedRoute, private router: Router, private fs: FoodServiceService){}
  
  ngOnInit(): void {
    if(this.route.routeConfig?.path == 'food'){
      this.isFoodComponent = true;
    }
  }

  changeColor(){
    this.fav = !this.fav;
  }

  sendToCart(data:Foods){
    this.fs.addCartItems(data);
    this.router.navigateByUrl('/cart')
  }


}
