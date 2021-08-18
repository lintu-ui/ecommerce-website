import { Component, OnInit } from '@angular/core';
import { ShoppingCartSrvService } from '../shopping-cart-srv.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( private shoppingCartService: ShoppingCartSrvService) { }
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

}
