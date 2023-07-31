import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  id: any;
  data: any = {};
  spiner: boolean=false;
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id")
  }
  ngOnInit() {
   this.getProduct()

  }

  getProduct() {
    this.spiner=true;
    this.service.getSinglProduct(this.id).subscribe(res => {
      this.spiner=false;
      this.data=res;
      console.log(this.data.rating.rate)
    })
  }
}
