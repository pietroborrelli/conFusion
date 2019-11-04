import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map,catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service'

//makes this object injectable in our application
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  //supply an array of dishes every where in the application
  getDishes(): Observable<Dish[]>{
    // //fast promise declaration (it returns dishes for sure because it is in the client)
    // //later will be simulated a delay that may be returned by a server
    // return new Promise ( resolve => {
    //   //simulating server latency with 2 seconds delay
    //   setTimeout(() => resolve(DISHES),2000)
    //   });

    //update: return a promise from an observable
    //return of(DISHES).pipe(delay(2000));

    //update: return the dishes calling a remote server
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getDish(id: number): Observable<Dish>{
    // arrow function
    //return of(DISHES.filter((dish) =>  dish.id == id )[0]).pipe(delay(2000));
    //update return the dish calling a remote server
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getFeaturedDish(): Observable<Dish>{
    //with query parameter
    //to reproduce an error put i.e. 'dishees?featured=true'
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error => error));
  }

  //returns the dish saved server side to the client that should reflect the change on the view
  putDish(dish: Dish): Observable<Dish>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

