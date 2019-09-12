import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//NgModule is a decorator is a function that modifies Javascript classes
//we'll use more decorators
//inside there are metadatas 
@NgModule({
  //declares the view classes that belong to this particular module
  //a view class = components, directives, and pipes
  declarations: [
    AppComponent
  ],
  //all these modules need to be imported to be used with this app module. So this app module now depends upon these other modules.
  //So when you import the modules, you are specifying here saying that the app module will make use of this module
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap the application with the AppComponent (=root component)
  bootstrap: [AppComponent]
})

//typescript has support for classes
export class AppModule { }
