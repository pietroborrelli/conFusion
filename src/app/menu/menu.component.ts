import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // component will now start animating when I route into the menu component, and then also when I leave the menu component
  host: {
    '[@flyInOut]':'true',
    'style': 'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  //dish service will be available into the menu component (thanks to DI)
  constructor(@Inject('BaseURL') public BaseURL:string, private dishService: DishService) { }
  //override of OnInit's method
  //whenever the component is instanciated this method is executed
  ngOnInit() {
    this.dishService.getDishes()
    //funzione a freccia (dishes) che è ciò che ritorna dal premise, viene passato come parametro a quello che c'è dopo la freccia
    //Se l'observable che ritorna è un valore, gestito dalla prima funzione, altrimenti nella seconda funzione viene catturato l'errore e inizializzato nella variabile errMess
      .subscribe((dishes) => this.dishes = dishes,
        errmess => this.errMess = <any> errmess);
  }

  
}
