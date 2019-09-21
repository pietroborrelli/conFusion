import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  //we want to be able to export the RouterModule to our app-module so that it can also make use of it
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
