import { Component } from '@angular/core';

//decorator
@Component({
  //definition of the component (app-root is called from index.hmtl)
  selector: 'app-root',
  //define the view of which the component cares of
  templateUrl: './app.component.html',
  //CSS styling 
  styleUrls: ['./app.component.scss']
})
//whenever you want to make any component or a module in portable in another module, then you would always prepend the export to the class here
export class AppComponent {
  //title is accessible from the templates 
  title = 'conFusion';
}
