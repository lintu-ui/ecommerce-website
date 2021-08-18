import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eCommerce';
 
  
constructor(private router: Router) {

}

  ngOnInit(){

  }

  goToRegister(){
    this.router.navigate(['register'])
    console.log("hello")

  }
  goToProducts(){
    this.router.navigate(['/'])
    console.log("products")
  }
  goToProductDetails(){
    this.router.navigate(['product-details'])
    console.log("productDetails")
  }

  goToCart(){
    this.router.navigate(['cart-page'])
console.log("cart")
  }

  
 
}
