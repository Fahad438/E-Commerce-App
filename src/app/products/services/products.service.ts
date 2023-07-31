import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProucts(){

    return this.http.get('https://fakestoreapi.com/products')

  }

  gatAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')

  }
  gatProductByCategories(key:string){

    return this.http.get('https://fakestoreapi.com/products/category/'+key )

  }
  getSinglProduct(id:any){

    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
