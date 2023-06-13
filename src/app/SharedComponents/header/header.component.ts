import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/Services/food-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count:  any;

  constructor(private fs:FoodServiceService){}
  ngOnInit(): void {
    this.count= this.fs.getCartItems();
    console.log(this.count.length);
    
  }


 
  

}
