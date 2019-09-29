import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

//makes this object injectable in our application
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //supply an array of dishes every where in the application
  getDishes(): Observable<Dish[]>{
    // //fast promise declaration (it returns dishes for sure because it is in the client)
    // //later will be simulated a delay that may be returned by a server
    // return new Promise ( resolve => {
    //   //simulating server latency with 2 seconds delay
    //   setTimeout(() => resolve(DISHES),2000)
    //   });

    //update: return a promise from an observable
    return of(DISHES).pipe(delay(2000));


  }

  getDish(id: string): Observable<Dish>{
    // arrow function
    return of(DISHES.filter((dish) =>  dish.id == id )[0]).pipe(delay(2000));

  }

  getFeaturedDish(): Observable<Dish>{
    return of (DISHES.filter((dish) => dish.featured )[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any>{
    return of(DISHES.map(dish => dish.id));
  }
}

