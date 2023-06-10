import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { CartComponent } from './Components/cart/cart.component';
import { FoodComponent } from './Components/food/food.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'search', component:SearchComponent},
  {path:'food', component:FoodComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
