import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartSrvService {
  api_key = 'https:fakestoreapi.com/products';

  constructor(private http: HttpClient) { 
  
  }
  getProducts(){
    return new Promise((resolve, reject) => {
      this.http.get(this.api_key).subscribe(res => {
       resolve(res)
      },err =>{
        if(err){
        }reject(err);
       
      })
      
    })
  }
}
