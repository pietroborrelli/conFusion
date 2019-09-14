import { Component } from '@angular/core';

//decorator
@Component({
  //definition of the component (app-root is called from index.hmtl)
  selector: 'app-root',
  //define the view
  templateUrl: './app.component.html',
  //CSS styling 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
