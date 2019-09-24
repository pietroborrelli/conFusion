import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';

//automaticcaly added when this component is created and can be used in the application
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//services
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';

//new modules
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

//NgModule is a decorator is a function that modifies Javascript classes
//we'll use more decorators
//inside there are metadatas 
@NgModule({
  //declares the view classes that belong to this particular module
  //a view class = components, directives, and pipes
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  //all these modules need to be imported to be used with this app module. So this app module now depends upon these other modules.
  //So when you import the modules, you are specifying here saying that the app module will make use of this module
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule
  ],
  //enable component to be used on top of the screen by overlying
  entryComponents: [
    LoginComponent
  ],
  //providers specify all the services that this particular module will make use of. (through DI)
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  //bootstrap the application with the AppComponent (=root component)
  bootstrap: [AppComponent]
})

//typescript has support for classes
export class AppModule { }
 