import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NodataComponent } from './nodata/nodata.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',component:ProductsComponent
  },
  {
    path:'register',component:RegisterComponent
    
  },
  {
    path:'product-details',component:ProductDetailsComponent
  },
  {
    path:'cart-page',component:CartPageComponent
  },
  {
    path:'**',component:NodataComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
