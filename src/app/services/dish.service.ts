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

  getDish(id: string): Dish{
    // arrow function
    return DISHES.filter((dish) => { dish.id === id })[0];
  }

  getFeaturedDish(): Dish{
    return DISHES.filter((dish) => dish.featured )[0];
  }
}

