import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ]
})
export class CartsModule { }
