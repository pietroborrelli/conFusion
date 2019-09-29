import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  //supply an array of dishes every where in the application
  getPromotions(): Observable<Promotion[]>{
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion>{
    // arrow function
    return of(PROMOTIONS.filter((promo) => promo.id === id )[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion>{
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  }

}
