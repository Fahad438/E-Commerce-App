import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  //this array for take all data from api
  product: any[] = [];

  constructor(private service: ProductsService) {

  }

  //this is get all method inside when we inatil page
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.service.getAllProucts().subscribe(

      //case1:all good in api
      (result: any) => {
        this.product = result;
        console.log(this.product)
      },
      // case2:we have erorr in api
      eror => {
        alert("Erorr")
      }
    )
  }

}
