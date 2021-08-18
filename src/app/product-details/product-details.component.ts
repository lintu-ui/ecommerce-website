import { Component, OnInit } from '@angular/core';
import { ShoppingCartSrvService } from '../shopping-cart-srv.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartSrvService) { }
  cart:any;

  ngOnInit(): void {
    this.getProductDetails();
  }
  getProductDetails(){
    this.shoppingCartService.getProducts().then((res: any)=>{
      console.log("res",res)
     this.cart = res;
    })
  }
  goBack() {
    window.history.back();
  }

}
