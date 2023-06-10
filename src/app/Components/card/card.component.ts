import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  changeColor(){
    this.fav = !this.fav;
  }

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    if(this.route.routeConfig?.path == 'food'){
      this.isFoodComponent = true;
    }
  }
}
