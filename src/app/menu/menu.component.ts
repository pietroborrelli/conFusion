import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  //dish service will be available into the menu component (thanks to DI)
  constructor(private dishService: DishService) { }

  //override of OnInit's method
  //wheneer the component is instanciated this method is executed
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect (dish: Dish){
    this.selectedDish = dish;
  }
}
