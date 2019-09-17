import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  //input to retrieve the property passed from a component INTO this component
  @Input()
  dish: Dish;
  
  constructor() { }

  ngOnInit() {
  }

}
