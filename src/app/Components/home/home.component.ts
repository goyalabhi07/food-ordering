import { Component } from '@angular/core';
import { FoodServiceService } from 'src/app/Services/food-service.service';
import { Foods } from 'src/app/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods: Foods[] = [];

  constructor(private fs:FoodServiceService){}

  ngOnInit(): void {
    this.foods = this.fs.getFoodData();
  }

}
