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
  catg: any[] = [];
  //this is for spiner =>HTML
  lodingPage: boolean = false;
  cartProduct: any[] = [];


  constructor(private service: ProductsService) {

  }

  //this is get all method inside when we inatil page
  ngOnInit(): void {
    this.getProducts();
    this.getCatgo();
  }
  getProducts() {
    this.lodingPage = true
    //case1:all good in api
    this.service.getAllProucts().subscribe((result: any) => {
      this.product = result;
      this.lodingPage = false
    },
      // case2:we have erorr in api
      error => {
        this.lodingPage = false
        alert(error)

      }
    )
  }


  // here wa take data from jeson (api) and insert to array => catg
  getCatgo() {
    this.lodingPage = true
    this.service.gatAllCategories().subscribe(
      (result: any) => {
        this.catg = result;
        this.lodingPage = false

        console.log(this.catg)
      }
    )
  }

  //here we take selected data from user and we put in the varibal
  filterData(event: any) {
    let value = event.target.value
    if (value == "all") {
      this.getProducts();
    } else {
      this.getProductBycatg(value);
    }
  }

  //here we crete method to take value sleceted user and send to Api
  getProductBycatg(key: string) {
    this.lodingPage = true
    this.service.gatProductByCategories(key).subscribe(
      (res: any) => {
        this.lodingPage = false
        this.product = res;
      }
    )
  }

  addToCart(event: any) {
    if ("cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!)
      let existCart=this.cartProduct.find(item=> item.id == event.id)
     if(existCart){
      alert('This product is add ')
     }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))
     }

    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    }
  }

}
