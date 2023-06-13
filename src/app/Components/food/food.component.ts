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

  data: any ;
  fav : boolean = false;

  constructor(private fs: FoodServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {        
        this.data = this.fs.foodData.filter( ((e: Foods) => e.id == params['id']))[0]       
       });    
  }

  changeColor(){
    this.fav = !this.fav;
  }

  sendToCart(){
    this.fs.addCartItems(this.data);
    this.router.navigateByUrl('/cart')
  }
}
