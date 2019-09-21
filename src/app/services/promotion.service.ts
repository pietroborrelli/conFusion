import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  //supply an array of dishes every where in the application
  getPromotions(): Promotion[]{
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion{
    // arrow function
    return PROMOTIONS.filter((promo) => promo.id === id )[0];
  }

  getFeaturedPromotion(): Promotion{
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }

}
