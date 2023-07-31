import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartsComponent } from './carts/components/carts/carts.component';

const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"detalis/:id",component:ProductsDetailsComponent},
  {path:"carts",component:CartsComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
