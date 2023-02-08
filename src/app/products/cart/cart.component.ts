import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from 'party-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartitems:any =[]

  grand:any
  updatetotal:any

  constructor(private cart:CartService ,private router:Router){}

  ngOnInit(): void{
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems=data;
        
      }
    )
    this.grand=this.cart.gettotal()
  }

  removeitem(product:any){
    this.cart.removecart(product)
  }

  removeall(){
    this.cart.removeall()
  }

 discount3per(source:any){
  let discount=(this.grand*3)/100
  this.updatetotal=this.grand-discount
  party.confetti(source)


 }
 discount10per(){
  let discount=(this.grand*10)/100
  this.updatetotal=this.grand-discount
  
}
discount30per(){
  let discount=(this.grand*30)/100
  this.updatetotal=this.grand-discount
  
}
discount50per(){
  let discount=(this.grand*50)/100
  this.updatetotal=this.grand-discount
  
}
proceed(){
  alert('your order have been placed')
  this.router.navigateByUrl('')
  this.removeall()
}

  


}
