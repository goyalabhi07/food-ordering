import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from 'src/app/Services/food-service.service';
import { Foods } from 'src/app/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {

  food: any ;

  constructor(private fs: FoodServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fs.getFoodData().subscribe(data => {
      this.route.queryParams
      .subscribe(params => {        
        this.food = data.filter( e => e.id == params['id'])
      });
    });    
  }
}
