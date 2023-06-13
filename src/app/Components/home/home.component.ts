import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodServiceService } from 'src/app/Services/food-service.service';
import { Foods } from 'src/app/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods: Foods[] = [];

  constructor(private fs:FoodServiceService, private router:Router){}

  ngOnInit(): void {
    this.fs.getFoodData().subscribe(data =>{
      this.foods = data;
    });
  }

  openFoods(data:any){
    this.router.navigate(['/food'], { queryParams: { id: data.id } });
    
  }

}
