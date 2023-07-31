import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {

  cartProduct: any[] = [];
  total: any = 0;
  constructor(private service: CartsService) {

  }


  ngOnInit() {
    this.getProduct()
    this.getTotalPrice()

  }

  getProduct() {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.cartProduct)
  }

  detecedChange() {
    this.getTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }

  getTotalPrice() {
    this.total = 0;
    //x ==>index
    for (let x in this.cartProduct) {
      this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity
    }
  }

  deleteItem(index: any) {
    this.cartProduct.splice(index, 1)
    this.getTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))

  }
  checkOut() {
    let products = this.cartProduct.map(item => {
      return { productId: item.item.id, quantity: item.quantity }
    })

    let Model = {
      userId: 3,
      date: new Date(),
      products: products
    }
    this.service.addCart(Model).subscribe(res => {
      this.cartProduct = []
      this.getTotalPrice()
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))

      alert("you are odrer is submit")

    })

  }


}
// somethingChanged(x:any){
  //   this.cartProduct[x].quantity=
  //   localStorage.setItem("cart", JSON.stringify(this.cartProduct))

  //  this.getTotalPrice()
  // }

  // changeDatamins(x: any) {
  //   if( this.cartProduct[x].quantity> 0){
  //     this.cartProduct[x].quantity--
  //   }

  //   this.getTotalPrice()
  //   localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  // }
  // changeDatapls(x: any) {
  //   this.cartProduct[x].quantity++
  //   this.getTotalPrice()
  //   localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  // }
