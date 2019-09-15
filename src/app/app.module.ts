import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';

import 'hammerjs';

//automaticcaly added when this component is created and can be used in the application
import { MenuComponent } from './menu/menu.component';

//NgModule is a decorator is a function that modifies Javascript classes
//we'll use more decorators
//inside there are metadatas 
@NgModule({
  //declares the view classes that belong to this particular module
  //a view class = components, directives, and pipes
  declarations: [
    AppComponent,
    MenuComponent
  ],
  //all these modules need to be imported to be used with this app module. So this app module now depends upon these other modules.
  //So when you import the modules, you are specifying here saying that the app module will make use of this module
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule
  ],
  //providera specify all the services that this particular module will make use of.
  providers: [],
  //bootstrap the application with the AppComponent (=root component)
  bootstrap: [AppComponent]
})

//typescript has support for classes
export class AppModule { }
