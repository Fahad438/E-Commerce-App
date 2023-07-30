import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() item:any={};
  @Output()card=new EventEmitter;



  add(){
    this.card.emit(this.item)
  }


}
