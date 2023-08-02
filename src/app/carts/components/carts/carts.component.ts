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
  //HERE we get data from localstorge
  getProduct() {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
    }
  }

  //here we take change from input and set to lolcal storge
  detecedChange() {
    this.getTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }

  //here we take index and go to item price then * item quantity ta take total price for item
  //step 2 we add all item price to gat total price
  getTotalPrice() {
    this.total = 0;
    //x ==>index
    for (let x in this.cartProduct) {
      this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity
    }
  }

  //here we take index and go to selected item and deleted then refresh total price
  deleteItem(index: any) {
    this.cartProduct.splice(index, 1)
    this.getTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))

  }

  //here we checkOut carts :)
  //step1 certe new array and take id and quantity
  //step2 cerate new opject and add all data from array
  //step3 call service and put opject in parametr and send to backend
  //step4 clear all data from carts whene he finsh all and stute 200
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
