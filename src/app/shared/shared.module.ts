import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinerComponent } from './components/spiner/spiner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinerComponent,
    SelectComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule

  ],
  exports:[
    HeaderComponent,
    SpinerComponent,
    SelectComponent,
    FormsModule,
    RouterModule

  ]
})
export class SharedModule { }
