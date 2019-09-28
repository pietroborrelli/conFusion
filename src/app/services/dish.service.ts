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
  getDishes(): Promise<Dish[]>{
    //fast promise declaration (it returns dishes for sure because it is in the client)
    //later will be simulated a delay that may be returned by a server
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish>{
    // arrow function
    return Promise.resolve(DISHES.filter((dish) =>  dish.id == id )[0]);
  }

  getFeaturedDish(): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish) => dish.featured )[0]);
  }
}

