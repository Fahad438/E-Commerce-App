import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinerComponent } from './components/spiner/spiner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinerComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    SpinerComponent

  ]
})
export class SharedModule { }
