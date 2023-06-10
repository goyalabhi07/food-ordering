import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/models/food';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private route: ActivatedRoute){}

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

  fav : boolean = true;

  setStyles():any{
    if(this.route.routeConfig?.path == 'food'){
      return true;
    }
  }

  changeColor(){
    this.fav = !this.fav;
    return this.fav;
  }

}
