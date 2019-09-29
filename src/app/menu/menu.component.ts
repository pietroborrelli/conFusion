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
  //whenever the component is instanciated this method is executed
  ngOnInit() {
    this.dishService.getDishes()
    //funzione a freccia (dishes) che è ciò che ritorna dal premise, viene passato come parametro a quello che c'è dopo la freccia
      .subscribe((dishes) => this.dishes = dishes);
  }

  onSelect (dish: Dish){
    this.selectedDish = dish;
  }
}
