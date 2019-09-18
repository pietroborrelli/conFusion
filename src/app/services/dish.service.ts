import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


//makes this object injectable in our application
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //supply an array of dishes every where in the application
  getDishes(): Dish[]{
    return DISHES;
  }
}
